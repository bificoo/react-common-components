import React from "react";
import "./style.sass";

const Column = props => {
    return <div className="ui-column">{props.children}</div>;
};

export default Column;
