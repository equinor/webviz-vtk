
export function pickClosest(xp, yp, tolerance, selector, openglRenderWindow, renderer) {
    const x1 = Math.floor(xp - tolerance);
    const y1 = Math.floor(yp - tolerance);
    const x2 = Math.ceil(xp + tolerance);
    const y2 = Math.ceil(yp + tolerance);

    selector.setArea(x1, y1, x2, y2);

    if (selector.captureBuffers()) {
        const pos = [xp, yp];
        const outSelectedPosition = [0, 0];
        const info = selector.getPixelInformation(
            pos,
            tolerance,
            outSelectedPosition,
        );

        if (info == null || info.prop == null) return [];

        const startPoint = openglRenderWindow.displayToWorld(
            Math.round((x1 + x2) / 2),
            Math.round((y1 + y2) / 2),
            0,
            renderer,
        );

        const endPoint = openglRenderWindow.displayToWorld(
            Math.round((x1 + x2) / 2),
            Math.round((y1 + y2) / 2),
            1,
            renderer,
        );

        const ray = [Array.from(startPoint), Array.from(endPoint)];

        const worldPosition = Array.from(
            openglRenderWindow.displayToWorld(
                info.displayPosition[0],
                info.displayPosition[1],
                info.zValue,
                renderer,
            ),
        );

        const displayPosition = [
            info.displayPosition[0],
            info.displayPosition[1],
            info.zValue,
        ];

        const selection = [];
        selection[0] = {
            worldPosition,
            displayPosition,
            compositeID: info.compositeID,
            ...info.prop.get('representationId'),
            ray,
        };
        return selection;
    }
    return [];
}

export function pick(x1, y1, x2, y2, selector, openglRenderWindow, renderer, useFrustrum = false) {
    let selections = []
    selector.setArea(x1, y1, x2, y2);
    if (selector.captureBuffers()) {
        selections = selector.generateSelection(x1, y1, x2, y2) || [];
        if (useFrustrum) {
            const frustrum = [
                Array.from(
                    openglRenderWindow.displayToWorld(x1, y1, 0, renderer),
                ),
                Array.from(
                    openglRenderWindow.displayToWorld(x2, y1, 0, renderer),
                ),
                Array.from(
                    openglRenderWindow.displayToWorld(x2, y2, 0, renderer),
                ),
                Array.from(
                    openglRenderWindow.displayToWorld(x1, y2, 0, renderer),
                ),
                Array.from(
                    openglRenderWindow.displayToWorld(x1, y1, 1, renderer),
                ),
                Array.from(
                    openglRenderWindow.displayToWorld(x2, y1, 1, renderer),
                ),
                Array.from(
                    openglRenderWindow.displayToWorld(x2, y2, 1, renderer),
                ),
                Array.from(
                    openglRenderWindow.displayToWorld(x1, y2, 1, renderer),
                ),
            ];
            const representationIds = [];
            selections.forEach((v) => {
                const { prop } = v.getProperties();
                const representationId = prop?.get('representationId').representationId;
                if (representationId) {
                    representationIds.push(representationId);
                }
            });
            return { frustrum, representationIds };
        }
        const ray = [
            Array.from(
                openglRenderWindow.displayToWorld(
                    Math.round((x1 + x2) / 2),
                    Math.round((y1 + y2) / 2),
                    0,
                    renderer,
                ),
            ),
            Array.from(
                openglRenderWindow.displayToWorld(
                    Math.round((x1 + x2) / 2),
                    Math.round((y1 + y2) / 2),
                    1,
                    renderer,
                ),
            ),
        ];
        return selections
            .map((v) => {
                const { prop, compositeID, displayPosition } = v.getProperties();

                // Return false to mark this item for removal
                if (prop == null) return false;

                return {
                    worldPosition: Array.from(
                        openglRenderWindow.displayToWorld(
                            displayPosition[0],
                            displayPosition[1],
                            displayPosition[2],
                            renderer,
                        ),
                    ),
                    displayPosition,
                    compositeID, // Not yet useful unless GlyphRepresentation
                    ...prop.get('representationId'),
                    ray,
                };
            })
            .filter(Boolean);
    }
    return selections;
}
