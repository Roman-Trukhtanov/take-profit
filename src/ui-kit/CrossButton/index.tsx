import React, {FC} from "react";
import block from "bem-cn-lite";
import {Button} from "@material-ui/core";
import CloseIcon from "components/icons/closeIcon";

import {ICrossButton} from "./types";

const b = block("cross-button");

const CrossButton: FC<ICrossButton> = ({
   size = "normal",
   appearance = "gray",
   onClick,
}) => {
    return (
        <Button
            className={b({
                normal: size === "normal",
                medium: size === "medium",
                gray: appearance === "gray",
                red: appearance === "red",
            })}
            variant="contained"
            onClick={onClick}
        >
            <CloseIcon/>
        </Button>
    );
};

export default CrossButton;
