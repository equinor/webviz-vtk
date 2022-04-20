import webviz_vtk
import dash

app = dash.Dash(__name__)

app.layout = webviz_vtk.WebvizVtk(id='component')


if __name__ == '__main__':
    app.run_server(debug=True)
