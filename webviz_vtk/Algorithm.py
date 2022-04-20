# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Algorithm(Component):
    """An Algorithm component.
Algorithm is exposing a source or filter to a downstream filter
It takes the following set of properties:
  - vtkClass: vtkClassName
  - state: {}

Keyword arguments:

- children (boolean | number | string | dict | list; optional)

- id (string; optional):
    The ID used to identify this component.   Unique ID to identify
    this component in Dash callbacks.

- port (number; default 0):
    downstream connection port.

- state (dict; optional):
    set of property values for vtkClass.

- vtkClass (string; default 'vtkConeSource'):
    vtkClass name."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, port=Component.UNDEFINED, vtkClass=Component.UNDEFINED, state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id', 'port', 'state', 'vtkClass']
        self._type = 'Algorithm'
        self._namespace = 'webviz_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id', 'port', 'state', 'vtkClass']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Algorithm, self).__init__(children=children, **args)
