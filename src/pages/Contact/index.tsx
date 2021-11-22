import React, { ReactElement } from 'react';
import styled from 'styled-components';

// background-color: ${Theme.light};
const Container = styled.div`
     {
        display: flex;
        flex-direction: column;
        background-color: red;
    }
`;

const Contact = (): ReactElement => {
    return <Container />;
};

export default Contact;
