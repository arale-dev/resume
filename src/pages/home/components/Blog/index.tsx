/* eslint-disable max-len */
import React from 'react';
import contextStore from '@context/contextStore';
import {
    StyledParagraph,
    StyledText,
    StyledTitle,
} from '@src/components/StyledTypo';
import Carousel from 'react-multi-carousel';
import { PaddedContainer } from '../..';
import 'react-multi-carousel/lib/styles.css';
import BlogCard from './BlogCard';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 927, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};
const Blog = (): React.ReactElement => {
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
            <Carousel
                swipeable
                draggable
                responsive={responsive}
                centerMode
                infinite
                autoPlay
                autoPlaySpeed={3000}
                transitionDuration={500}
                removeArrowOnDeviceType={['mobile', 'tablet']}
            >
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
                <div>Item 5</div>
                <div>Item 6</div>
                <div>Item 7</div>
                <div>Item 8</div>
            </Carousel>
            <BlogCard />
        </PaddedContainer>
    );
};

export default Blog;
