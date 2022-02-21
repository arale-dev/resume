/* eslint-disable max-len */
import React from 'react';
import contextStore from '@context/contextStore';
import {
    StyledParagraph,
    StyledText,
    StyledTitle,
} from '@src/components/StyledTypo';
import { PaddedContainer } from '../..';
import 'react-multi-carousel/lib/styles.css';

const BlogCard = (): React.ReactElement => {
    return (
        <PaddedContainer>
            <StyledTitle color="white">Blog</StyledTitle>
            <StyledParagraph>
                <StyledText color="white">
                    {contextStore.lang === 'en'
                        ? "Have a question or want to work together? Whatever the content is, it's good! Please leave a message. A fun suggestion is welcome :-)"
                        : '질문이나 협업 등 함께 나누고 싶은 얘기가 있으시다면 메시지를 남겨주세요. 어떤 내용이든 좋습니다! 재미있는 제안 환영해요 :)'}
                </StyledText>
            </StyledParagraph>
        </PaddedContainer>
    );
};

export default BlogCard;
