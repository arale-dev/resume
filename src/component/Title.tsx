import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const shadow = '#533d4a';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0.8;
    }
    100% {
        opacity: 1;
    }
`;

const TitleLine = styled.text<{ animation: boolean }>`
    display: block;
    text-shadow: ${shadow} 1px 1px, ${shadow} 2px 2px, ${shadow} 3px 3px,
        ${shadow} 4px 4px, ${shadow} 5px 5px, ${shadow} 6px 6px;
    ${(props) =>
        props.animation &&
        css`
            animation: ${fadeIn} 2s;
        `}
`;

type TitleProps = {
    title1: string;
    title2?: string;
    title3?: string;
};

const Title: React.FC<TitleProps> = ({ title1, title2, title3 }) => {
    return (
        <Container>
            <TitleLine animation>{title1}</TitleLine>
            {title2 && <TitleLine animation>{title2}</TitleLine>}
            {title3 && <TitleLine animation>{title3}</TitleLine>}
        </Container>
    );
};

Title.defaultProps = {
    title2: undefined,
    title3: undefined,
};

export default Title;
