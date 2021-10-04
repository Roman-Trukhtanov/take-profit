import React, {FC} from "react";
import block from "bem-cn-lite";
import {Button} from "@material-ui/core";

import {IAddButton} from "./types";

import AddPlusIcon from "../../components/icons/addPlusIcon";

const b = block("add-button");

const AddButton: FC<IAddButton> = ({
    className,
    onClick,
    color = "secondary",
    children,
}) => {
    return (
        <Button
            className={b(null, className)}
            variant="contained"
            color={color}
            onClick={onClick}
        >
            <AddPlusIcon/>
            {children}
        </Button>
    );
};

export default AddButton;
