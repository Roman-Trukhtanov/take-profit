import React, {FC} from "react";
import {Button, createStyles, makeStyles, Theme} from "@material-ui/core";
import {rem} from "../../utils";

import {IAddProtection} from "./types";

import SecurityIcon from "../icons/securityIcon";

// Example of using "makeStyles" function
const useStyles = makeStyles((theme: Theme) => createStyles({
    button: {
        color: theme.palette.warning.main,
        fontSize: rem(16),
        lineHeight: '200%',
    },
    protectionIcon: {
        display: 'block',
        marginRight: rem(8),
        width: rem(24),
        height: rem(24),
    },
}));

const AddProtection: FC<IAddProtection> = ({
    onClick,
    children,
}) => {
    const classes = useStyles();

    return (
        <Button className={classes.button} variant="text" onClick={onClick}>
            <SecurityIcon className={classes.protectionIcon}/>
            <span>Add protection</span>
            {children}
        </Button>
    );
};

export default AddProtection;
