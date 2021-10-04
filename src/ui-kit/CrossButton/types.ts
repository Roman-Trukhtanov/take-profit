import {ReactNode} from "react";

export interface ICrossButton {
    appearance?: 'gray' | 'red';
    size?: 'normal' | 'medium';
    onClick?: () => void;
    children?: ReactNode;
}
