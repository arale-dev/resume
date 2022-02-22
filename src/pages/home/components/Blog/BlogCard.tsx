import React, { useState } from 'react';
import { StyledText } from '@src/components/StyledTypo';
import { Typography } from 'antd';

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
const StyledBlogTitle = styled(Typography.Text)<{
    color?: string;
    size?: string;
}>`
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
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
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
    const [hovered, setHovered] = useState(false);
    return (
        <CardContainer
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <BlogImg imgurl={imgurl} />
            <Space />
            <StyledBlogTitle color={hovered ? '#ffe58f' : 'white'} size="big">
                {title}
            </StyledBlogTitle>
            <Space />
            <StyledText color={hovered ? 'white' : 'lightGray'}>
                {new Date(date).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                })}
            </StyledText>
            <Space />
            <ColoredBar />
            <Space />
            <StyledText color={hovered ? 'white' : 'lightGray'}>
                {desc}
            </StyledText>
        </CardContainer>
    );
};

export default BlogCard;
