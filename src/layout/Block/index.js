import React, { useState } from "react";
import ThemeConsumer from "Theme/ThemeConsumer";
import "./style.sass";
import cx from "classnames";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { default as style } from "react-syntax-highlighter/dist/esm/styles/prism/coy";
SyntaxHighlighter.registerLanguage("jsx", jsx);

const Block = props => {
    const [openCode, setOpenCode] = useState(false);
    return (
        <ThemeConsumer>
            {({ getThemeClass }) => {
                return (
                    <div className={cx(getThemeClass("block"))}>
                        <div className="main">
                            <h3>
                                {props.title}
                                <span
                                    className={cx({
                                        open: openCode,
                                    })}
                                    onClick={() => setOpenCode(!openCode)}
                                >
                                    <span>{`<`}</span>
                                    <span className="code-status">{`/`}</span>
                                    <span>{`>`}</span>
                                </span>
                            </h3>
                            {props.description && <p>{props.description}</p>}
                            {React.createElement(props.demo)}
                        </div>
                        <div
                            className={cx("code", {
                                open: openCode,
                            })}
                        >
                            <SyntaxHighlighter language="jsx" style={style}>
                                {props.demo.__source__}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                );
            }}
        </ThemeConsumer>
    );
};

export default Block;
