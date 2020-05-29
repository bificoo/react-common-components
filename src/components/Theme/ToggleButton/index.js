import React, { useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { THEME } from "./constant";
import "./style.sass";

const ToggleButton = props => {
    const [theme, setTheme] = useState(localStorage.getItem("ui-theme") || THEME.DAY);
    const switchTheme = e => {
        e.preventDefault();
        const newTheme = theme === THEME.DAY ? THEME.NIGHT : THEME.DAY;
        localStorage.setItem("ui-theme", newTheme);
        setTheme(newTheme);
        props.onChangeTheme(newTheme);
        return;
    };
    return (
        <div className="toggle-button">
            <a
                href="#"
                className={cx({
                    open: theme === THEME.NIGHT,
                })}
                onClick={switchTheme}
            />
        </div>
    );
};

ToggleButton.propTypes = {
    onChangeTheme: PropTypes.func,
};

export default ToggleButton;
