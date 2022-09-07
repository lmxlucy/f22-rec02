import { Point } from "./point";
function newPolarPoint (len: number, angle: number): Point {
    return {
        getX: function (): number {
            return Math.round(len * Math.cos(angle))
        },

        getY: function (): number {
            return Math.round(len * Math.sin(angle))
        }
    }
}

export { newPolarPoint }