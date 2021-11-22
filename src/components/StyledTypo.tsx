import { Typography } from 'antd';
import styled from 'styled-components';
import React, { useState } from 'react';

const { Title, Paragraph, Text } = Typography;

export const StyledText = Text;

export const StyledA = styled.a`
     {
        color: #725e51 !important;
        font-style: italic;
    }
`;
export const StyledTitle = styled(Title)`
     {
        font-size: 4.6rem !important;
    }
`;
export const StyledParagraph = styled(Paragraph)`
     {
        font-size: 2.4rem;
    }
`;

export const StyledIcon: React.FC = ({ children }) => {
    const [twoToneColor, setTwoToneColor] = useState('#725e51');
    const generateRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };
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
            // onMouseEnter={handleChangeColor}
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
