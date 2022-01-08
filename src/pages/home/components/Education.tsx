import React, { ReactElement } from 'react';
import {
    // StyledA,
    StyledTitle,
    StyledParagraph,
    StyledText,
} from 'src/components/StyledTypo';

const Education = (): ReactElement => {
    return (
        <>
            <StyledTitle>Education</StyledTitle>
            <StyledParagraph>
                <StyledText mark>한국과학기술원 (KAIST)</StyledText>
                <ul>
                    <li>학부 졸업, 2015~2020 </li>
                    <li>주전공 전산학부, 부전공 생명과학과</li>
                </ul>
            </StyledParagraph>
            <StyledParagraph>
                <StyledText mark>대전과학고등학교</StyledText>
                <ul>
                    <li>수료, 2013~2014 </li>
                </ul>
            </StyledParagraph>
        </>
    );
};

export default Education;
