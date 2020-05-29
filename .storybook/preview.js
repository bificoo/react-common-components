import React from "react";
import "styles/storybook-global";
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider } from "Theme";

addDecorator(storyFn => <ThemeProvider>{storyFn()}</ThemeProvider>);
addParameters({
    options: {
        showRoots: true,
        storySort: (a, b) =>
            a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
    },
});