import {ReactNode} from "react";
import {Currency} from "../../types";

export interface ITakeProfit {
    currency?: Currency;
    onClose?: () => void;
    children?: ReactNode;
}
