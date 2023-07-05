import { glob } from 'glob';
import fs from 'fs/promises';
import { exec } from 'child_process';
import { promisify } from 'util';
import puppeteer from 'puppeteer';
import path from 'path';
import { argv } from 'node:process';

const execCmd = promisify(exec);

async function ensureSnapshotsFolder(workingDir: string) {
  try {
    await fs.rm(`${workingDir}/.snapshots`, { recursive: true });
    console.log('Deleted .snapshots directory...');
  } catch (err) {
    console.log('No .snapshots directory to delete...');
  }

  await fs.mkdir(`${workingDir}/.snapshots`, { recursive: true });
  console.log('Created a clean .snapshots directory...');
}

async function ensureNotebookSnapshotFolder(workingDir: string, notebook: string) {
  const notebookName = path.basename(notebook.split('.')[0]);
  await fs.mkdir(`${workingDir}/.snapshots/${notebookName}`, { recursive: true });
  console.log(`Created a clean ${workingDir}/.snapshots/${notebookName} directory...`);
}

async function snapshotOutputs(htmlFile: string) {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.goto(`file://${htmlFile}`, { waitUntil: 'networkidle0' });

  const cells = await page.$$('.jp-CodeCell');
  console.log(`Found ${cells.length} code cells...`);

  const cellIds: string[] = [];
  for (const cell of cells) {
    const cellId = await cell.evaluate((el) => el.id);
    const cellOutput = await cell.$$('.jp-OutputArea-output');

    if (cellOutput.length > 0) {
      for (let i = 0; i < cellOutput.length; i++) {
        await cellOutput[i].screenshot({
          path: htmlFile.replace('.html', `/${cellId.split('=')[1]}_${i}.png`),
          fullPage: false,
        });
        console.log(`Saved ${cellId} cell output #${i}...`);
      }
    } else {
      console.log(`Cell ${cellId} has no output, skipping...`);
    }
    cellIds.push(cellId);
  }

  await browser.close();
  console.log(`Saved ${cellIds.length} cell outputs...`);

  return cellIds;
}

async function runNBConvert(
  workingDir: string,
  notebook: string
): Promise<{ notebook: string; html: string }> {
  // run a shell command `jupyter nbconvert --to html --execute --output-dir=.snapshots <notebook>`
  const { stdout, stderr } = await execCmd(
    `jupyter nbconvert --to html --execute --output-dir=${workingDir}/.snapshots ${notebook}`
  );

  if (stderr) console.error(stderr);
  console.log(stdout);

  return {
    notebook,
    html: path.resolve(`${workingDir}/.snapshots/${path.basename(notebook).split('.')[0]}.html`),
  };
}

async function main(workingDir: string) {
  console.log('workingDir: ', workingDir);
  console.log('Running snapshots script...');

  const notebooks = await glob(`${workingDir}/*.ipynb`, {
    ignore: [`${workingDir}/node_modules/**`, `${workingDir}/.ipynb_checkpoints/**`],
  });

  console.log(`Found ${notebooks.length} notebooks...`);

  await ensureSnapshotsFolder(workingDir);

  // for each notebook, run nbconvert
  const snapshots = await Promise.all(
    notebooks.map((notebook) => runNBConvert(workingDir, notebook))
  );
  console.log('Ran nbconvert on all notebooks...');

  // starting puppeteer
  for (const { notebook, html } of snapshots) {
    await ensureNotebookSnapshotFolder(workingDir, notebook);
    // TODO be more selective about which cells to snapshot, maybe by scanning the notebook in advance
    // for specific output types
    await snapshotOutputs(html);
  }
}

let workingDir = '.';
if (argv.length > 2) {
  console.log('Using working directory: ', argv[2]);
  workingDir = argv[2];
} else {
  console.warn('No working directory specified, using current directory');
}

main(workingDir);
