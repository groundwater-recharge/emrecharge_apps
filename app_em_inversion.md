---
title: EM Inversion
subject: interactive app
---

Inversion is a process to find a model of subsurface resistivity that can fit the observed EM data. Two major goals of the inversion is 1) fitting the data for a given level of data errors/noise and 2) constraining resistivity values to vary smoothly in space. This app provides a capability to conduct 1D EM inversion. By inverting two voltage curves (i.e. EM data), we obtain a vertical resistivity profile that can fit the data.

:::{important}
To launch the compute server used to run this app, click on the power button on the upper right hand corner of the application pane. After a moment, the icon will be replaced with three new icons. The filled in lightning bolt indicates that the application is displaying its default settings. Click the play button to run the application (this will enable you to change values, and interact with the figures). Note that after clicking the play button, the lightning bolt will only show and outline, indicating the figures displayed may not be the defaults. Finally, click the return arrow if you would like to reset the app to its default settings.
:::

## Interactive App

```{figure} #app-em-inversion
:placeholder: ./placeholders/em_inversion.png
```

## Usage

### App parameters

- `EM system`: `AEM` or `tTEM`
- `Simulation or Inversion`:

  - `Sim`: Simulation mode
  - `Inv`: Inversion mode

- `z`: depth to the layer
- `h`: thickness of the layer
- `rho_b`: background resistivity
- `rho`: layer resistivity
- `% error`: percentage error

### Plotting parameters

- `Resistivity range`: range of resistivity shown in the left panel
- `Depth range`: range of depth shown in the left panel
