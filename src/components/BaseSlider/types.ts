import {ChangeEvent} from "react";

export interface IBaseSlider {
    value: number;
    defaultValue: number;
    title?: string;
    onChange: (evt: ChangeEvent<{}>, newValue: number | number[]) => void;
}
