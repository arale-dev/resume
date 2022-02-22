import React, { ReactElement } from 'react';

import Context, {
    BaseContent,
    Content,
    Link,
    Paragraph,
    ParagraphContent,
} from '@context/contextInterface';
import { Tooltip } from 'antd';
import {
    RobotOutlined,
    SearchOutlined,
    SmileOutlined,
} from '@ant-design/icons';
import {
    StyledA,
    StyledIcon,
    StyledParagraph,
    StyledText,
    StyledTitleWithoutAnimation,
} from './StyledTypo';

const typoConverter = (content: Content): ReactElement => {
    return <StyledText>{content}</StyledText>;
};
const markConverter = (content: Content): ReactElement => {
    return <StyledText mark>{content}</StyledText>;
};
const tooltipTypoConverter = (
    content: Content,
    tooltip?: string
): ReactElement => {
    return (
        <Tooltip title={tooltip || 'Click me!'}>
            {typoConverter(content)}
        </Tooltip>
    );
};
const iconConverter = (content: Content): ReactElement => {
    const convertIcon = (iconContent: Content): ReactElement | undefined => {
        switch (iconContent) {
            case 'robot':
                return <RobotOutlined />;
            case 'search':
                return <SearchOutlined />;
            case 'smile':
                return <SmileOutlined />;
            default:
                return undefined;
        }
    };
    const Icon = convertIcon(content);
    if (Icon) return <StyledIcon>{Icon}</StyledIcon>;
    return <div />;
};
const tooltipIconConverter = (
    content: Content,
    tooltip?: string
): ReactElement => {
    return (
        <Tooltip title={tooltip || 'Click me!'}>
            <span>{iconConverter(content)}</span>
        </Tooltip>
    );
};
const hrefConverter = (content: Content, link?: Link): ReactElement => {
    return <StyledA href={link}>{content}</StyledA>;
};

const Match = ({ content }: { content: ParagraphContent }): ReactElement => {
    switch (content.type) {
        case 'typo':
            return typoConverter(content.content);
        case 'mark':
            return markConverter(content.content);
        case 'tooltip-typo':
            return tooltipTypoConverter(content.content, content.tooltip);
        case 'tooltip-icon':
            return tooltipIconConverter(content.content, content.tooltip);
        case 'icon':
            return iconConverter(content.content);
        case 'href':
            return hrefConverter(content.content, content.link);
        default:
            return <div />;
    }
};

const ListConverter = ({
    contents,
    itemKey,
}: {
    contents: BaseContent[];
    itemKey: string;
}): ReactElement => {
    return (
        <li>
            {contents.map((content, i) => {
                const listKey = `${itemKey}list${i}`;
                return <Match content={content} key={listKey} />;
            })}
        </li>
    );
};

const ContextConverter = (props: { context: Context }): ReactElement => {
    const { context } = props;
    return (
        <>
            {context.title && (
                <StyledTitleWithoutAnimation>
                    {context.title}
                </StyledTitleWithoutAnimation>
            )}
            {context.content.map((paragraph: Paragraph, paragraphIdx) => {
                const paragraphKey = context.title
                    ? context.title + paragraphIdx.toString()
                    : paragraphIdx.toString();
                return (
                    <StyledParagraph key={paragraphKey}>
                        {paragraph.map((content, contentIdx) => {
                            // eslint-disable-next-line max-len
                            const itemKey = `${paragraphKey}item${contentIdx.toString()}`;
                            if (content.type === 'list')
                                return (
                                    <ListConverter
                                        contents={content.contents}
                                        key={itemKey}
                                        itemKey={itemKey}
                                    />
                                );
                            return <Match content={content} key={itemKey} />;
                        })}
                    </StyledParagraph>
                );
            })}
        </>
    );
};
export default ContextConverter;
