/* eslint-disable max-len */
import React, { useState } from 'react';
import {
    // StyledParagraph,
    StyledText,
    // StyledTitle,
} from '@src/components/StyledTypo';
import styled, { keyframes } from 'styled-components';
import 'react-multi-carousel/lib/styles.css';

const hoverAnimation = keyframes`
    0% {
        background-color:'#393E46';
        transform: translateY(0);
    }
    100% {
        background-color:'#26292e';
        transform: translateY(-5px);
    }
`;

const Space = styled.div`
    height: 12px;
`;
const ColoredBar = styled.div`
    height: 0.6rem;
    width: 40%;
    background-color: #ffe58f;
`;

const CardContainer = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    &:hover {
        animation: ${hoverAnimation} 0.5s ease-in 0s 1 forwards;
    }
`;

const CoverImg = styled.div<{
    url: string;
}>`
    position: relative;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 80%;
    background-origin: padding-box;
    background: url('${(props) => props.url}') no-repeat center / cover;
`;

const BluredContainImg = styled.div<{
    url: string;
}>`
    position: absolute;
    backdrop-filter: blur(10px);
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: url('${(props) => props.url}') no-repeat center / contain;
`;

const BlogImg = ({ imgurl }: { imgurl: string }): React.ReactElement => {
    return (
        <CoverImg url={imgurl}>
            <BluredContainImg url={imgurl} />
        </CoverImg>
    );
};

const BlogCard = (props: {
    title: string;
    imgurl: string;
    date: string;
    desc: string;
}): React.ReactElement => {
    const { title, imgurl, date, desc } = props;
    const [titleColor, setTitleColor] = useState('white');
    return (
        <CardContainer
            onMouseEnter={() => setTitleColor('#ffe58f')}
            onMouseLeave={() => setTitleColor('white')}
        >
            <BlogImg imgurl={imgurl} />
            <Space />
            <StyledText color={titleColor} size="big">
                {title}
            </StyledText>
            <Space />
            <StyledText color="lightGray">
                {new Date(date).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </StyledText>
            <Space />
            <ColoredBar />
            <Space />
            <StyledText color="white">{desc}</StyledText>
        </CardContainer>
    );
};

export default BlogCard;
