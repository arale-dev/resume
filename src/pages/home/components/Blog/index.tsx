import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.div`
     {
        align-self: stretch;
        padding: 10px;
        text-align: center;
    }
`;

const Blog = (): ReactElement => {
    return <Container />;
};

export default Blog;
