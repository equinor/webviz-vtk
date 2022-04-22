
// Style modes
import vtkMouseCameraTrackballMultiRotateManipulator from '@kitware/vtk.js/Interaction/Manipulators/MouseCameraTrackballMultiRotateManipulator.js';
import vtkMouseCameraTrackballPanManipulator from '@kitware/vtk.js/Interaction/Manipulators/MouseCameraTrackballPanManipulator.js';
import vtkMouseCameraTrackballRollManipulator from '@kitware/vtk.js/Interaction/Manipulators/MouseCameraTrackballRollManipulator.js';
import vtkMouseCameraTrackballRotateManipulator from '@kitware/vtk.js/Interaction/Manipulators/MouseCameraTrackballRotateManipulator.js';
import vtkMouseCameraTrackballZoomManipulator from '@kitware/vtk.js/Interaction/Manipulators/MouseCameraTrackballZoomManipulator.js';
import vtkMouseCameraTrackballZoomToMouseManipulator from '@kitware/vtk.js/Interaction/Manipulators/MouseCameraTrackballZoomToMouseManipulator.js';
import vtkGestureCameraManipulator from '@kitware/vtk.js/Interaction/Manipulators/GestureCameraManipulator.js';
import vtkMouseBoxSelectorManipulator from '@kitware/vtk.js/Interaction/Manipulators/MouseBoxSelectorManipulator.js';


// ----------------------------------------------------------------------------
// Helper constants
// ----------------------------------------------------------------------------

const manipulatorFactory = {
    None: null,
    Pan: vtkMouseCameraTrackballPanManipulator,
    Zoom: vtkMouseCameraTrackballZoomManipulator,
    Roll: vtkMouseCameraTrackballRollManipulator,
    Rotate: vtkMouseCameraTrackballRotateManipulator,
    MultiRotate: vtkMouseCameraTrackballMultiRotateManipulator,
    ZoomToMouse: vtkMouseCameraTrackballZoomToMouseManipulator,
    Select: vtkMouseBoxSelectorManipulator,
};

export function assignManipulators(style, settings, view) {
    style.removeAllMouseManipulators();
    settings.forEach((item) => {
        const klass = manipulatorFactory[item.action];
        if (klass) {
            const {
                button,
                shift,
                control,
                alt,
                scrollEnabled,
                dragEnabled,
                useWorldUpVec,
                worldUpVec,
                useFocalPointAsCenterOfRotation,
            } = item;
            const manipulator = klass.newInstance();
            manipulator.setButton(button);
            manipulator.setShift(!!shift);
            manipulator.setControl(!!control);
            manipulator.setAlt(!!alt);
            if (scrollEnabled !== undefined) {
                manipulator.setScrollEnabled(scrollEnabled);
            }
            if (dragEnabled !== undefined) {
                manipulator.setDragEnabled(dragEnabled);
            }
            style.addMouseManipulator(manipulator);
            if (manipulator.onBoxSelectChange && view.onBoxSelectChange) {
                manipulator.onBoxSelectChange(view.onBoxSelectChange);
            }
            if (useWorldUpVec !== undefined) {
                manipulator.setUseWorldUpVec(useWorldUpVec);
            }
            if (worldUpVec !== undefined) {
                manipulator.setWorldUpVec(worldUpVec);
            }
            if (useFocalPointAsCenterOfRotation !== undefined) {
                manipulator.setUseFocalPointAsCenterOfRotation(
                    useFocalPointAsCenterOfRotation
                );
            }
        }
    });

    // Always add gesture
    style.addGestureManipulator(vtkGestureCameraManipulator.newInstance());
}