---
title: Resistivity Distribution
subtitle: Constructing resistivity distributions for different sediment types
short_title: Resistivity Distribution
subject: interactive app
---

This app illustrates the process of creating resistivity distributions of two sediment types: coarse-(grained)dominated and fine-(grained)domianted from colocated resistivity data (geophysics) and sediment type data (in-situ). You will identify an impact of colocation radious and an approach to set a vertical interval of colocated data (`interval` vs. `integral`).

:::{important}
To launch the compute server used to run this app, click on the power button on the upper right hand corner of the application pane. After a moment, the icon will be replaced with three new icons. The filled in lightning bolt indicates that the application is displaying its default settings. Click the play button to run the application (this will enable you to change values, and interact with the figures). Note that after clicking the play button, the lightning bolt will only show and outline, indicating the figures displayed may not be the defaults. Finally, click the return arrow if you would like to reset the app to its default settings.
:::


## Interactive App

From elecgtromagnetic (EM) imaging, we can obtain an image of the subsurface resistivity.
While resistivity provides useful information about the subsurface hydrogeology, it is very challenging to determine
hydrogeology just from resistivity. Therefore, there is a need to correlate resistivity from EM geophysics to hydrogeology.
This app focuses on building relationship between

```{figure} #app-rock-physics
:placeholder: ./placeholders/rock_physics_resistivity.png
```

## Usage

### App Parameters

- `Colocation Distance`: resistivity of the fine-dominated
- `Approach`: `interval` or `integral`
