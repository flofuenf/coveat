import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";

export const mainColor = "#8339fa";
export const secColor = "#454545";
export const accentColor = "#7d0e0f";
// const spacing = 8;

let themeBase = createMuiTheme({
    //Colors
    typography:{
        fontFamily: 'Abel'
    },
    palette: {
        primary: {
            main: mainColor,
            light: fade(mainColor, 0.6)
        },
        secondary: {
            main: secColor,
            light: fade(secColor, 0.6),
            extraLight: fade(secColor, 0.2)
        },
        accent:{
            main: accentColor,
            light: fade(accentColor, 0.6)
        }
    },
    spacing: 8,
    overrides: {
        //BackButton Setup Dialog
        MuiFab: {
            root: {
                color: "#FFFFFF",
                backgroundColor: mainColor,
                width: 40,
                height: 40,
                '&:hover': {
                    backgroundColor: secColor
                }
            }
        },
        //Radio Buttons
        MuiRadio: {
            root: {
                color: secColor
            },
            colorPrimary: mainColor,
            colorSecondary: secColor
        },
        //Checkboxes
        MuiCheckbox: {
            root: {
                color: secColor
            },
            colorPrimary: mainColor,
            colorSecondary: secColor
        },
        //Standard Buttons
        MuiButton: {
            root: {
                // marginTop: spacing * 2,
                // minWidth: 130,
                // maxHeight: 40,
                // margin: spacing * 2
            },
            //Primary
            containedPrimary: {
                backgroundColor: mainColor,
                '&:hover': {
                    backgroundColor: fade(mainColor, 0.6)
                }
            },
            //Secondary
            containedSecondary: {
                backgroundColor: secColor,
                '&:hover': {
                    backgroundColor: fade(secColor, 0.6)
                }
            }
        },
        //InputFields
        MuiInputBase: {
            // root: {
            //     marginRight: spacing * 3,
            //     marginTop: 0,
            //     width: 200
            // }
        },
        MuiInputLabel: {
            // root: {
            //     marginleft: spacing * 4
            // }
        },
        MuiFormControlLabel: {
            root: {}
        },
        //AvatarIcon
        MuiAvatar: {
            root: {
                backgroundColor: mainColor,
                // marginRight: 30,
                // width: 40,
                // height: 40
            },
            colorDefault: {
                backgroundColor: mainColor
            }
        },
        //Typography
        MuiTypography: {
            subtitle1: {
                fontSize: 15,
                flexBasis: '33.33%',
                flexShrink: 0,
                paddingTop: 10,
                fontWeight: "bold"
            },
            subtitle2: {
                fontSize: 15,
                paddingTop: 10,
                fontWeight: "bold"
            },
            h6: {
                flexGrow: 1,
                marginLeft: 20,
                fontWeight: "bold",
                color: "inherit",
                fontSize: 25
            }
        },
        //Navigation Items
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: mainColor
            },
            root: {
                zIndex: 1,
                flex: 1
            }
        },
        MuiDrawer: {
            docked: {
                zIndex: 0,
                flexShrink: 0,
                whiteSpace: 'nowrap'
            },
            paper: {
                backgroundColor: secColor,
                overflowX: 'hidden',
                boxShadow: "-3px 0px 15px 0px rgba(0, 0, 0, 0.5)"
            }
        },
        MuiDivider: {
            root: {
                backgroundColor: "#FFFFFF"
            }
        },
        props: {}
    }
});

export const theme = responsiveFontSizes(themeBase);
