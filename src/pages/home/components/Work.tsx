import React, { ReactElement } from 'react';
import {
    StyledTitle,
    StyledParagraph,
    StyledText,
} from 'src/components/StyledTypo';

const Work = (): ReactElement => {
    return (
        <>
            <StyledTitle>Professional Experience</StyledTitle>
            <StyledParagraph>
                <StyledText mark>티맥스 소프트</StyledText>
                <ul>
                    <li>2020~ </li>
                    <li>와플페이 애플리케이션 제작</li>
                </ul>
            </StyledParagraph>
        </>
    );
};

export default Work;
