import { Typography } from 'antd';
import styled from 'styled-components';
import React, { useState } from 'react';
import useScrollFadeIn from '@src/hooks/useScrollFadeIn';

const { Title, Paragraph, Text } = Typography;

export const StyledText = styled(Text)<{ color?: string; size?: string }>`
     {
        font-size: ${(props) => {
                if (props.size === 'big') return `2.4rem !important;`;
                if (props.size === 'small') return `1.8rem !important;`;
                return `2.2rem !important;`;
            }}
            ${(props) =>
                props.color ? `color: ${props.color} !important;` : undefined};
        ${(props) =>
            props.size === 'big' ? `font-weight: 700 !important;` : ''}
    }
`;

export const StyledA = styled.a`
     {
        color: #725e51 !important;
        font-style: italic;
    }
`;
export const StyledTitleWithoutAnimation = styled(Title)<{ color?: string }>`
     {
        font-size: 5rem !important;
        font-weight: 700 !important;
        ${(props) =>
            props.color ? `color: ${props.color} !important;` : undefined}
    }
`;
const ColoredBar = styled.div<{ color?: string }>`
    height: 0.6rem;
    width: 8rem;
    background-color: ${(props) =>
        props.color ? props.color : 'rgba(0, 0, 0, 0.85)'};
    margin: 3rem 0;
`;
export const StyledTitle = ({
    children,
    color,
}: {
    children: string;
    color?: string;
}): React.ReactElement => {
    const titleAnimation = useScrollFadeIn('left', 0.5, 0);
    const barAnimation = useScrollFadeIn('left', 0.5, 0.5);
    return (
        <div>
            <div ref={titleAnimation.ref} style={titleAnimation.style}>
                <StyledTitleWithoutAnimation color={color}>
                    {children}
                </StyledTitleWithoutAnimation>
            </div>
            <ColoredBar
                color={color}
                ref={barAnimation.ref}
                style={barAnimation.style}
            />
        </div>
    );
};
StyledTitle.defaultProps = { color: undefined };

export const StyledParagraph = styled(Paragraph)`
     {
        font-size: 2.4rem;
    }
`;

const generateRandomColor = (): string => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StyledIcon: React.FC = ({ children }) => {
    const [twoToneColor, setTwoToneColor] = useState(generateRandomColor());
    const handleChangeColor = (): void => {
        setTwoToneColor(generateRandomColor());
    };

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                twoToneColor,
                style: { color: twoToneColor },
            });
        }
        return child;
    });

    return (
        <button
            type="button"
            onClick={handleChangeColor}
            style={{
                display: 'inline-block',
                cursor: 'pointer',
                backgroundColor: '#0000',
                borderColor: '#0000',
                padding: 0,
                lineHeight: 'normal',
            }}
        >
            {childrenWithProps}
        </button>
    );
};
