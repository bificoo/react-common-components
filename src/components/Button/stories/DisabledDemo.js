import React from "react";
import { Column, Row } from "layout";
import Button from "Button";

const DisabledDemo = () => {
    return (
        <Row>
            <Column>
                <Button type="primary" disabled>
                    Primary(Default)
                </Button>
            </Column>
            <Column>
                <Button type="secondary" disabled>
                    Secondary
                </Button>
            </Column>
            <Column>
                <Button type="custom" disabled>
                    Custom
                </Button>
            </Column>
        </Row>
    );
};

export default DisabledDemo;
