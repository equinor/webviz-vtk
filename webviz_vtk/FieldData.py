# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FieldData(Component):
    """A FieldData component.
FieldData is exposing a FieldData to a downstream element

Keyword arguments:

- children (boolean | number | string | dict | list; optional)

- id (string; optional):
    Unique ID to identify this component in Dash callbacks."""
    @_explicitize_args
    def __init__(self, children=None, id=Component.UNDEFINED, **kwargs):
        self._prop_names = ['children', 'id']
        self._type = 'FieldData'
        self._namespace = 'webviz_vtk'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['children', 'id']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(FieldData, self).__init__(children=children, **args)
