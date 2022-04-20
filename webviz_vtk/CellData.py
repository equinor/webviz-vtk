# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class CellData(Component):
    """A CellData component.
CellData is exposing a vtkCellData to a downstream element

Keyword arguments:

- children (boolean | number | string | dict | list; optional)

- id (string; optional):
    Unique ID to identify this component in Dash callbacks."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id']
        self._type = 'CellData'
        self._namespace = 'webviz_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(CellData, self).__init__(children=children, **args)
