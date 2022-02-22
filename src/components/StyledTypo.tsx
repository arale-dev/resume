/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Typography } from 'antd';
import styled from 'styled-components';
import React, { useState } from 'react';

const { Title, Paragraph, Text } = Typography;

export const StyledText = styled(Text)<{ color?: string; size?: string }>`
     {
        font-size: ${(props) => {
                if (props.size === 'big') return `3rem !important;`;
                if (props.size === 'small') return `2rem !important;`;
                return `2.4rem !important;`;
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
export const StyledTitle = styled(Title)<{ color?: string }>`
     {
        font-size: 5rem !important;
        font-weight: 700 !important;
        ${(props) =>
            props.color ? `color: ${props.color} !important;` : undefined}
    }
`;
export const StyledParagraph = styled(Paragraph)`
     {
        font-size: 2.4rem;
    }
`;

const generateRandomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const StyledIcon: React.FC = ({ children }) => {
    const [twoToneColor, setTwoToneColor] = useState(generateRandomColor());
    const handleChangeColor = () => {
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
