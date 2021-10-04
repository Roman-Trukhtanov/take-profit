import {MutableRefObject} from "react";
import {Currency} from "../../types";

export interface IPriceInput {
    currency: Currency;
    inputRef?: MutableRefObject<HTMLInputElement | null>;
}
