import {ROOT_FONT_SIZE} from "./const";

export const rem = (
    value: number,
    context: number = ROOT_FONT_SIZE
) => `${parseFloat((value / context).toFixed(6))}rem`;
