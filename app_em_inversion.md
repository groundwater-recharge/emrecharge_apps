---
title: EM Inversion
subject: interactive app
---

Inversion is a process to find a model of subsurface resistivity that can fit the observed EM data. Two major goals of the inversion is 1) fitting the data for a given level of data errors/noise and 2) constraining resistivity values to vary smoothly in space. This app provides a capability to conduct 1D EM inversion. By inverting two voltage curves (i.e. EM data), we obtain a vertical resistivity profile that can fit the data.

## Interactive App

```{figure} #app-em-inversion
Add a caption here
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
