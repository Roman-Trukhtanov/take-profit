import React, {
    ChangeEvent,
    FC,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";
import block from "bem-cn-lite";
import {Button} from "@material-ui/core";

import {ITakeProfit} from "./types";
import {Currency} from "../../types";

import {
    TakeProfitActionType,
    TakeProfitContext,
    TakeProfitItemData,
} from "../../stores/takeProfitStore";

import CrossButton from "../../ui-kit/CrossButton";
import AddButton from "../../ui-kit/AddButton";
import PriceInput from "../PriceInput";
import BaseSlider from "../BaseSlider";
import TakeProfitItem from "../TakeProfitItem";

const b = block("take-profit");

const DEFAULT_SLIDER_VALUE = 20;

const MAX_TAKE_PROFIT_ITEMS_AMOUNT = 5;

const TakeProfit: FC<ITakeProfit> = ({
    onClose,
    currency = Currency.USDT
}) => {
    const {state, dispatch} = useContext(TakeProfitContext);
    const [sliderValue, setSliderValue] = useState(DEFAULT_SLIDER_VALUE);
    const [items, setItems] = useState<TakeProfitItemData[]>([]);
    const priceInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!state) {
            return;
        }

        setItems(state.items);
    }, [state]);

    const addItem = () => {
        const itemData: TakeProfitItemData = {
            currency: currency,
            percent: sliderValue,
            value: priceInputRef.current
                ? parseFloat(priceInputRef.current.value)
                : 0,
        };

        setItems((prevState) => [...prevState, itemData]);
    };

    const removeItem = (itemData: TakeProfitItemData) => {
        setItems((prevState) => prevState.filter((item) => item !== itemData));
    };

    const updateItems = () => {
        if (!dispatch) {
            return;
        }

        if (items && items.length) {
            dispatch({
                type: TakeProfitActionType.UPDATE_ITEMS,
                payload: items,
            });
        }

        onClose && onClose();
    };

    const handleSliderValueChange = (
        evt: ChangeEvent<{}>,
        newValue: number | number[]
    ) => {
        if (typeof newValue === 'number') {
            setSliderValue(newValue);
        }
    };

    return (
        <div className={b()}>
            {/* HEADER */}
            <div className={b("header")}>
                <div className={b("title-wrap")}>
                    <h2 className={b("title")}>
                        Take Profit
                        <span className={b("counter")}>
                            <span className="_current">{items.length}</span>
                            <span className="_total">
                                /{MAX_TAKE_PROFIT_ITEMS_AMOUNT}
                            </span>
                        </span>
                    </h2>
                </div>
                <div className={b("close-wrap")}>
                    <CrossButton onClick={onClose}/>
                </div>
            </div>

            {/* MAIN */}
            <div className={b("main")}>
                {/* TAKE_PROFIT_LIST */}
                {!!items.length && (
                    <div className={b("list-wrap")}>
                        <ul className={b("list")}>
                            {items.map((itemData) => (
                                <li className={b("item")} key={`take-profit-item__${Math.random()}`}>
                                    <TakeProfitItem
                                        data={itemData}
                                        onDelete={removeItem}
                                    />
                                </li>
                            ))}
                        </ul>

                        <div className={b("info-item")}>
                            <h3 className={b("info-title")}>Sum. projected profit</h3>
                            <div className={b("info-divider")}/>
                            <p className={b("info-value")}>
                                <span className={"_value"}>15123.44</span>
                                {" "}
                                <span className={"_currency"}>{currency}</span>
                            </p>
                        </div>
                    </div>
                )}

                {/* ADD_ITEM */}
                {items.length < MAX_TAKE_PROFIT_ITEMS_AMOUNT && (
                    <div className={b("add-item-container")}>
                        <div className={b("add-item-wrap")}>
                            <PriceInput
                                currency={currency}
                                inputRef={priceInputRef}
                            />
                        </div>
                        <div className={b("add-item-btn-wrap")}>
                            <AddButton
                                className={b("add-item-btn")}
                                color={"secondary"}
                                onClick={addItem}
                            />
                        </div>
                    </div>
                )}


                {/* SLIDER */}
                {
                    (items.length >= 1 &&
                        items.length < MAX_TAKE_PROFIT_ITEMS_AMOUNT
                    ) &&
                    (
                        <div className={b("slider-container")}>
                            <BaseSlider
                                defaultValue={DEFAULT_SLIDER_VALUE}
                                value={sliderValue}
                                title="Sell BTC amount"
                                onChange={handleSliderValueChange}
                            />
                        </div>
                    )
                }

                {/* INFO */}
                {items.length < MAX_TAKE_PROFIT_ITEMS_AMOUNT && (
                    <div className={b("info-wrap")}>
                        <div className={b("info-item")}>
                            <h3 className={b("info-title")}>Price change</h3>
                            <div className={b("info-divider")}/>
                            <p className={b("info-value")}>+20%</p>
                        </div>
                        <div className={b("info-item")}>
                            <h3 className={b("info-title")}>Projected profit</h3>
                            <div className={b("info-divider")}/>
                            <p className={b("info-value")}>
                                <span className={"_value"}>15122.44</span>
                                {" "}
                                <span className={"_currency"}>{currency}</span>
                            </p>
                        </div>
                    </div>
                )}

                {/* CONTROLS */}
                <div className={b("controls-wrap")}>
                    <Button
                        id={"close-btn"}
                        className={b("control-btn")}
                        variant={"contained"}
                        color={"primary"}
                        onClick={onClose}
                    >
                        Cancel
                    </Button>

                    {items.length >= 1 && (
                        <Button
                            id={"confirm-btn"}
                            className={b("control-btn")}
                            variant={"contained"}
                            color={"secondary"}
                            onClick={() => updateItems()}
                        >
                            Confirm
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TakeProfit;
