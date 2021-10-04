import React, {FC} from "react";
import block from "bem-cn-lite";
import {Slider} from "@material-ui/core";

import {IBaseSlider} from "./types";

const b = block("base-slider");

const BaseSlider: FC<IBaseSlider> = ({
    title,
    defaultValue = 0,
    value = 0,
    onChange,
}) => {
    return (
        <div className={b()}>
            {title && (
                <div className={b("title-wrap")}>
                    <h3 className={b("title")}>{title}</h3>
                </div>
            )}

            <div className={b("main-wrap")}>
                <div className={b("slider-wrap")}>
                    <Slider
                        className={b("slider")}
                        defaultValue={defaultValue}
                        color="primary"
                        onChange={onChange}
                    />
                </div>
                <p className={b("value")}>{value}%</p>
            </div>
        </div>
    );
};

export default BaseSlider;
