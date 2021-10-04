import React, {FC} from "react";
import block from "bem-cn-lite";

import {ITakeProfitItem} from "./types";
import {Currency} from "../../types";
import UsdtShortIcon from "../icons/usdtShortIcon";
import CrossButton from "../../ui-kit/CrossButton";

const b = block("take-profit-item");

const TakeProfitItem: FC<ITakeProfitItem> = ({
    data,
    onDelete,
}) => {
    const {currency, value, percent} = data;

    const getCurrencyShortIcon = () => {
        if (currency === Currency.USDT) {
            return <UsdtShortIcon className={b('usdt-short-icon')}/>
        }

        return null;
    };

    return (
        <div className={b()}>
            <div className={b("wrap")}>
                <div className={b("currency")}>
                    <div className={b("icon-wrap")}>
                        {getCurrencyShortIcon()}
                    </div>
                    <div className={b("value")}>
                        {value}
                    </div>
                </div>
                <p className={b("percent")}>{percent}%</p>
            </div>
            <div className={b("delete-btn-wrap")}>
                <CrossButton
                    size={"medium"}
                    appearance={'red'}
                    onClick={() => onDelete(data)}
                />
            </div>
        </div>
    );
};

export default TakeProfitItem;
