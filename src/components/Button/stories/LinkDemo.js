import React from "react";
import Button from "Button";
import { Row, Column } from "layout";

const LinkDemo = () => {
    return (
        <Row>
            <Column>
                <Button type="link" href>
                    Link with href
                </Button>
            </Column>
            <Column>
                <Button type="link" href={"http://www.google.com"}>
                    Link with href
                </Button>
            </Column>
        </Row>
    );
};

export default LinkDemo;
