import React from "react";
import "./style.sass";

const Wrapper = props => {
    return (
        <div className="ui-wrapper">
            <h1>{props.title}</h1>
            <section>{React.createElement(props.document)}</section>
            <section>
                {React.createElement(props.examples)}
            </section>
        </div>
    );
};

export default Wrapper;
