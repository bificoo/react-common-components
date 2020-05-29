import React from "react";
import "./style.sass";

const Row = props => {
    return <div className="ui-row">{props.children}</div>;
};

export default Row;
