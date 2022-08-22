# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class View(Component):
    """A View component.
View is responsible to render vtk.js data.
It takes the following set of properties:
  - `background`: [0.2, 0.3, 0.4]
  - `cameraPosition`: [0, 0, 1]
  - `cameraViewUp`: [0, 1, 0]
  - `cameraParallelProjection`: false
  - `showOrientationAxes`: true

Keyword arguments:

- children (boolean | number | string | dict | list; optional):
    List of representation to show.

- id (string; optional):
    Current color value   Unique ID to identify this component in Dash
    callbacks.

- autoResetCamera (boolean; default True):
    Whether to automatically call resetCamera() (default: True)  When
    set to False, the user must explicitly provide camera properties.
    Note that the initial resetCamera() call will still occur upon
    component mount.

- background (list of numbers; default [0.2, 0.3, 0.4]):
    The color of the view background using 3 floating numbers between
    0-1 of Red, Green, Blue component.

- cameraFocalPoint (list of numbers; default [0, 0, 0]):
    Initial camera focal point from an object in [0,0,0].

- cameraParallelHorScale (number; default 1):
    Horizontal scaling used for parallel projection. Half of the width
    of the viewport in world-coordinate distances.

- cameraParallelProjection (boolean; default False):
    Use parallel projection (default?: False;.

- cameraPosition (list of numbers; default [0, 0, 1]):
    Initial camera position from an object in [0,0,0].

- cameraViewUp (list of numbers; default [0, 1, 0]):
    Initial camera position from an object in [0,0,0].

- className (string; optional):
    Allow user to provide custom className associated to root element.

- clickInfo (dict; optional):
    Read-only prop. To use this, make sure that `pickingModes`
    contains `click`. This prop is updated when an element in the map
    is clicked. This contains the picking info describing the object
    being clicked on.

- hoverInfo (dict; optional):
    Read-only prop. To use this, make sure that `pickingModes`
    contains `hover`. This prop is updated when an element in the map
    is hovered. This contains the picking info describing the object
    being hovered.

- interactorSettings (list of dicts; default [    {      button: 1,      action: 'Rotate',    },    {      button: 2,      action: 'Pan',    },    {      button: 3,      action: 'Zoom',      scrollEnabled: True,    },    {      button: 1,      action: 'Pan',      shift: True,    },    {      button: 1,      action: 'Zoom',      alt: True,    },    {      button: 1,      action: 'ZoomToMouse',      control: True,    },    {      button: 1,      action: 'Roll',      alt: True,      shift: True,    },  ]):
    Configure the interactions.

- pickingModes (list of a value equal to: 'click', 'hover', 'select's; optional):
    List of picking listeners to bind. The supported values are
    `click` and `hover`. By default it is disabled (empty array).

- showOrientationAxes (boolean; default True):
    Show/Hide orientation axes.

- style (dict; default {    width: '100%',    height: '100%',  }):
    Allow user to override the default View style { width: '100%',
    height: '100%' }.

- triggerRender (number; default 0):
    Property use to trigger a render when changing.

- triggerResetCamera (number; default 0):
    Property use to trigger a resetCamera when changing."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, background=Component.UNDEFINED, interactorSettings=Component.UNDEFINED, cameraPosition=Component.UNDEFINED, cameraViewUp=Component.UNDEFINED, cameraFocalPoint=Component.UNDEFINED, autoResetCamera=Component.UNDEFINED, cameraParallelProjection=Component.UNDEFINED, cameraParallelHorScale=Component.UNDEFINED, triggerRender=Component.UNDEFINED, triggerResetCamera=Component.UNDEFINED, pickingModes=Component.UNDEFINED, clickInfo=Component.UNDEFINED, hoverInfo=Component.UNDEFINED, showOrientationAxes=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'autoResetCamera', 'background', 'cameraFocalPoint', 'cameraParallelHorScale', 'cameraParallelProjection', 'cameraPosition', 'cameraViewUp', 'className', 'clickInfo', 'hoverInfo', 'interactorSettings', 'pickingModes', 'showOrientationAxes', 'style', 'triggerRender', 'triggerResetCamera']
        self._type = 'View'
        self._namespace = 'webviz_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'autoResetCamera', 'background', 'cameraFocalPoint', 'cameraParallelHorScale', 'cameraParallelProjection', 'cameraPosition', 'cameraViewUp', 'className', 'clickInfo', 'hoverInfo', 'interactorSettings', 'pickingModes', 'showOrientationAxes', 'style', 'triggerRender', 'triggerResetCamera']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(View, self).__init__(children=children, **args)
