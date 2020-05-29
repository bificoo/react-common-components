import React from "react";
import { Wrapper, Block } from "layout";
import TypeDemo from "./TypeDemo";
import ActiveDemo from "./ActiveDemo";
import DisabledDemo from "./DisabledDemo";
import LinkDemo from "./LinkDemo";

const document = () => (
    <>
        <p>按鈕元件有四種型態 primary, secondary, important, link</p>
    </>
);

const examples = () => (
    <>
        <Block title="Type" description={`客製化類型（custom）會將所有樣式移除，但保留按鈕行為`} demo={TypeDemo} />
        <Block title="Active" demo={ActiveDemo} />
        <Block title="Disabled" description={`link 型態沒有 disabled 的樣式`} demo={DisabledDemo} />
        <Block
            title="Link with href"
            description={`link 型態若帶上 href，會轉為 a 超連結型態，此時可帶入 target 屬性，預設為 _blank`}
            demo={LinkDemo}
        />
    </>
);

export default { title: "General/Button" };
export const View = () => <Wrapper title="Button" document={document} examples={examples} />;
