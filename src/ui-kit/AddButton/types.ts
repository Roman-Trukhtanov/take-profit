import {ReactNode} from "react";

export interface IAddButton {
    className?: string;
    color?: 'primary' | 'secondary';
    onClick?: () => void;
    children?: ReactNode;
}
