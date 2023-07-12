---
title: EM Depth of Investigation
subject: interactive app
---

Depth of investigation (DOI) indicates a depth where changes in resistivity values does not make noticeable changes in the observed EM data. This app provides a way to estimate DOI. Generally, DOI is dependent upon EM system, level of data errors/noise, and subsurface resistivity. This tool provides a capability to explore how DOI changes with above three factors.

## Interactive App

```{figure} #app-depth-of-investigation
```

## Usage

### App parameters

- `EM system`: `AEM` or `tTEM`
- `halfspace`: if checked, then assumes the homogenous background.
- `z`: depth to the layer
- `h`: thickness of the layer
- `rho_b`: background resistivity
- `rho`: layer resistivity
- `rho_0`: initial resistivity profile
- `% error`: percentage error
- `threshold`: a threshold value to determine DOI.

#### Plotting parameters

- `Resistivity range`: range of resistivity shown in the left panel
- `Depth range`: range of depth shown in the left panel
- `DOI index`: range of DOI index shown in the right panel
