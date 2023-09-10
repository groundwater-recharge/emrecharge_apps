---
title: EM Survey Design
subject: interactive app
---

Setting the relevant expectation about what electromagnetic (EM) imaging can provide or NOT is critical before or after an EM survey.
By combining the three other apps: 1) detectability, 2) inversion, 3) depth of investigation, this app provides a capability to evaluate the feasbility of the survey or the obtained resistivity model (after the survey).

:::{important}
To launch the compute server used to run this app, click on the power button on the upper right hand corner of the application pane. After a moment, the icon will be replaced with three new icons. The filled in lightning bolt indicates that the application is displaying its default settings. Click the play button to run the application (this will enable you to change values, and interact with the figures). Note that after clicking the play button, the lightning bolt will only show and outline, indicating the figures displayed may not be the defaults. Finally, click the return arrow if you would like to reset the app to its default settings.
:::

## Interactive App

```{figure} #app-em-survey-design
:placeholder: ./placeholders/em_survey_design.png
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
- `threshold`: a threshold value to determine depth of investigation (DOI).

### Plotting parameters

- `Resistivity range`: range of resistivity shown in the left panel
- `Depth range`: range of depth shown in the left panel
