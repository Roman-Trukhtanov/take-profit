import React, {FC, useState} from "react";
import block from "bem-cn-lite";
import {Button, InputBase, InputLabel} from "@material-ui/core";

import {IPriceInput} from "./types";

import UsdtIcon from "../icons/usdtIcon";
import ExchangeIcon from "../icons/exchangeIcon";
import RightIcon from "../icons/rightIcon";

import {Currency} from "../../types";

const b = block("price-input");

const PriceInput: FC<IPriceInput> = ({
    currency = Currency.USDT,
    inputRef,
}) => {
    const [inputValue, setInputValue] = useState<number | string>(0);
    const [isPercentView, setPercentView] = useState(false);

    const handleExchangeBtnClick = () => setPercentView(!isPercentView);

    const getCurrencyIcon = () => {
        if (currency === Currency.USDT) {
           return <UsdtIcon className={b('usdt-icon')}/>
        }

        return null;
    };

    const handleInput = () => {
        if (inputRef) {
            const input = inputRef.current;

            if (!input) {
                return;
            }

            const value = input.value;

            if (value === '') {
                setInputValue(0);
                return;
            }

            if (value.endsWith('.')) {
                setInputValue(value);
                return;
            }

            setInputValue(parseFloat(value.replace(/[^\.\d]/g, "")));
        }
    };

    return (
        <div className={b()}>
            <div className={b("icon-wrap")}>
                {
                    isPercentView ? (
                        <RightIcon className={b('right-icon')} />
                    ) : getCurrencyIcon()
                }
            </div>
            <div className={b("input-wrap")}>
                <InputLabel htmlFor={"price-input"}>
                    {
                        isPercentView ? "Price change %" : "Price"
                    }
                </InputLabel>
                <InputBase
                    id={"price-input"}
                    className={b("input")}
                    fullWidth
                    value={inputValue}
                    placeholder="55000"
                    inputRef={inputRef}
                    onInput={handleInput}
                />
            </div>
            <div className={b("exchange-wrap")}>
                <Button
                    className={b("exchange-btn")}
                    variant="text"
                    onClick={handleExchangeBtnClick}
                >
                    <ExchangeIcon/>
                </Button>
            </div>
        </div>
    );
};

export default PriceInput;
