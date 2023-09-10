---
title: EM Detectability
subject: interactive app
---

This app provides a capability to explore detectability of a target layer using an electromagnetic (EM) experiment. Detectability can be defined as

```{math}
\text{Detectability} \ (\%) = 100 \times \frac{1}{N}\sum_{i=1}^{N}\Big(\frac{F_i[\rho_{\text{1}}] - F_i[\rho_{\text{2}}]}{F_i[\rho_{\text{2}}]}\Big)^2
```

where $N$ is the number of data; $F_i[\cdot]$ is a EM simulation operator calculating EM datum at i-th time channel; $\rho_{1}$ and $\rho_{2}$ are vertical resistivity profiles. For instance, $\rho_{1}$ and $\rho_{2}$ could correspond $\rho_{\text{layer}}$, a vertical resistivity profile with a layer, and $\rho_{\text{b}}$, a homogenous background resistivity, respectively. In such a case, _the detectability is an anomalous layer response normalized by the background response in percentage_.

:::{important}
To launch the compute server used to run this app, click on the power button on the upper right hand corner of the application pane. After a moment, the icon will be replaced with three new icons. The filled in lightning bolt indicates that the application is displaying its default settings. Click the play button to run the application (this will enable you to change values, and interact with the figures). Note that after clicking the play button, the lightning bolt will only show and outline, indicating the figures displayed may not be the defaults. Finally, click the return arrow if you would like to reset the app to its default settings.
:::

## Interactive App

```{figure} #app-detectability
:placeholder: ./placeholders/em_detectability.png

```

## Usage

### App parameters

- `EM system`: `AEM` or `tTEM`
- `Use Profile 2`: if checked, the app allow user to edit the second vertical resistivity profile; if not, the second resistvity profile is set to be homogeneous background.
- `z`: depth to the layer
- `h`: thickness of the layer
- `rho_b`: background resistivity
- `rho`: layer resistivity

### Plotting parameters

- `Resistivity range`: range of resistivity shown in the left panel
- `Depth range`: range of depth shown in the left panel
