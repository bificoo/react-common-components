import React from "react";
import cx from "classnames";
import { THEME } from "./ToggleButton/constant";

const ThemeContext = React.createContext({
    getThemeClass: (suffixClass, theme = THEME.DAY) => {
        return cx({
            [`ui-${suffixClass}`]: true,
            [`ui-${suffixClass}-${theme}`]: !!theme,
        });
    },
});

export default ThemeContext;
