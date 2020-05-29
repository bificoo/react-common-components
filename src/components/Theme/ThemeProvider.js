import React from "react";
import ThemeContext from "./ThemeContext";
import ToggleButton from "./ToggleButton";
import cx from "classnames";

class ThemeProvider extends React.Component {
    state = {
        theme: localStorage.getItem("ui-theme"),
    };

    getThemeClass = (suffixClass, { theme = this.state.theme, custom = false } = { theme: this.state.theme, custom: false }) => {
        if (!custom) {
            return cx({
                [`ui-${suffixClass}`]: true,
                [`ui-${suffixClass}-${theme}`]: !!theme,
            });
        } else {
            return cx({
                [`custom-${suffixClass}`]: true,
                [`custom-${suffixClass}-${theme}`]: !!theme,
            });
        }
    };

    handleChangeTheme = theme => this.setState({ theme });

    render() {
        return (
            <ThemeContext.Provider
                value={{
                    getThemeClass: this.getThemeClass,
                }}
            >
                <ToggleButton onChangeTheme={this.handleChangeTheme} />
                <div className="ui-root">{this.props.children}</div>
            </ThemeContext.Provider>
        );
    }
}

export default ThemeProvider;
