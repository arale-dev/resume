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
    StyledTitle,
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
const iconConverter = (content: Content): ReactElement | undefined => {
    const Icon = (iconContent: Content): ReactElement | undefined => {
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
    if (Icon(content)) return <StyledIcon>{Icon(content)}</StyledIcon>;
    return undefined;
};
const tooltipIconConverter = (
    content: Content,
    tooltip?: string
): ReactElement => {
    return (
        <Tooltip title={tooltip || 'Click me!'} defaultVisible>
            {iconConverter(content)}
        </Tooltip>
    );
};
const hrefConverter = (content: Content, link?: Link): ReactElement => {
    return <StyledA href={link}>{content}</StyledA>;
};

const match = (content: ParagraphContent): ReactElement | undefined => {
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
            return undefined;
    }
};

const listConverter = (contents: BaseContent[]): ReactElement => {
    return <li>{contents.map(match)}</li>;
};

const ContextConverter = (props: { context: Context }): ReactElement => {
    const { context } = props;
    return (
        <>
            <StyledTitle>{context.title}</StyledTitle>
            {context.content.map((paragraph: Paragraph) => {
                return (
                    <StyledParagraph>
                        {paragraph.map((content) => {
                            if (content.type === 'list')
                                return listConverter(content.contents);
                            return match(content);
                        })}
                    </StyledParagraph>
                );
            })}
        </>
    );
};
export default ContextConverter;
