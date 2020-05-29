import React from "react";
import { Column, Row } from "layout";
import Button from "Button";

const ActiveDemo = () => {
    return (
        <Row>
            <Column>
                <Button type="primary" active>
                    Primary(Default)
                </Button>
            </Column>
            <Column>
                <Button type="secondary" active>
                    Secondary
                </Button>
            </Column>
            <Column>
                <Button type="custom" active>
                    Custom
                </Button>
            </Column>
            <Column>
                <Button type="link" active>
                    Link
                </Button>
            </Column>
        </Row>
    );
};

export default ActiveDemo;
