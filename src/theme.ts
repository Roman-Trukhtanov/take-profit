import {alpha, createTheme} from "@material-ui/core/styles";
import {rem} from "./utils";

const theme = createTheme({
    palette: {
        primary: {
            main: "#0e1018",
        },
        secondary: {
            main: "#5683ff",
        },
        warning: {
            main: "#eebb50",
        },
    },
    typography: {
        fontFamily: [
            "SFProText",
            "Roboto",
            "'Helvetica'",
            "Arial",
            "sans-serif",
        ].join(", "),
    },
});

theme.overrides = {
    MuiButton: {
        root: {
            borderRadius: rem(44),
            fontWeight: 500,
            textTransform: "none",
            boxShadow: "none",
            minWidth: "auto",
            padding: 0,
        },
        contained: {
            boxShadow: "none",
        },
        containedPrimary: {
            background: "linear-gradient(201.05deg, #42475c -0.56%, #262a3c 22.28%, #24293b 105.85%)",
            borderRadius: rem(44),
        },
        containedSecondary: {
            border: "1px solid",
            borderImageSource: "linear-gradient(180deg, #7EA1FF 0%, rgba(89, 133, 255, 0) 100%)",
            background: "linear-gradient(180deg, #5683FF 78.12%, #7398FF 100%), #5683FF",
            borderRadius: rem(32),
        }
    },
    MuiInputBase: {
        input: {
            padding: `${rem(2)} 0 ${rem(3)}`,
            color: "#fff",
            fontFamily: "SFProRounded, Roboto, sans-serif",
            fontSize: rem(16),
            lineHeight: "150%",
            fontWeight: 400,
        }
    },
    MuiFormLabel: {
        root: {
            color: "#818c99",
            fontWeight: 400,
            fontSize: rem(10),
            lineHeight: "120%",
            cursor: "pointer",
        }
    },
    MuiSlider: {
        root: {
            color: "#1f212c",
            height: rem(8),
            padding: `${rem(4)} 0`,
        },
        thumb: {
            width: rem(16),
            height: rem(16),
            backgroundColor: "#fff",
            marginTop: rem(-4),
            marginLeft: rem(-8),
            '&:hover, &.Mui-focusVisible': {
                boxShadow: `0px 0px 0px ${rem(6)} ${alpha("#fff", 0.16)}`,
            },
            '&.MuiSlider-active': {
                boxShadow: `0px 0px 0px ${rem(8)} ${alpha("#fff", 0.16)}`,
            },
        },
        rail: {
            left: 0,
            right: 0,
            width: 'auto',
            margin: `0 ${rem(-8)}`,
            height: rem(8),
            borderRadius: rem(8),
        },
        track: {
            left: 0,
            right: 0,
            width: 'auto',
            margin: `0 ${rem(-8)}`,
            height: rem(8),
            borderRadius: rem(8),
        }
    }
};

export default theme;
