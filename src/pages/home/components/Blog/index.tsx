import React, { useEffect, useState } from 'react';
import contextStore from '@context/contextStore';
import { StyledTitle } from '@src/components/StyledTypo';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import 'react-multi-carousel/lib/styles.css';
import db from '@src/firebase';
import {
    collection,
    DocumentData,
    getDocs,
    QuerySnapshot,
} from 'firebase/firestore';
import { message } from 'antd';
import BlogCard from './BlogCard';

const responsive = {
    large: {
        breakpoint: { max: 3000, min: 1750 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 1750, min: 1000 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1000, min: 600 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1,
        centerMode: false,
    },
};

const BlogCardContainer = styled.div`
     {
        margin: auto;
        max-width: 1400px;
        padding: 20px 32px 96px;
    }
`;
const BlogTitleWrapper = styled.div`
     {
        margin: auto;
        max-width: 980px;
        padding: 96px 32px 0px;
    }
`;

const Blog = (): React.ReactElement => {
    const [blogList, setBlogList] = useState<
        QuerySnapshot<DocumentData> | undefined
    >(undefined);
    const handleFail = (): void => {
        if (contextStore.lang === 'ko')
            message.warning(
                '블로그 포스트를 불러오지 못했습니다. 잠시 후 다시 확인해주세요.'
            );
        if (contextStore.lang === 'en')
            message.warning(
                'Failed to read blog posts. Please try again later.'
            );
    };

    useEffect(() => {
        getDocs(collection(db, 'blog')).then((result) => {
            if (result.empty) handleFail();
            else setBlogList(result);
        }, handleFail);
    }, []);

    return (
        <>
            <BlogTitleWrapper>
                <StyledTitle color="white">Blog</StyledTitle>
            </BlogTitleWrapper>
            <BlogCardContainer>
                {blogList && !blogList.empty && (
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
                        {blogList.docs.map((doc) => {
                            return (
                                <BlogCard
                                    key={doc.id}
                                    title={doc.data().title}
                                    imgurl={doc.data().thumbnail}
                                    date={doc.data().released_at}
                                    desc={doc.data().short_description}
                                    url={doc.data().url_slug}
                                />
                            );
                        })}
                    </Carousel>
                )}
            </BlogCardContainer>
        </>
    );
};

export default Blog;
