import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { StyledText } from '@src/components/StyledTypo';

const Container = styled.div`
     {
        align-self: stretch;
        padding: 40px;
        text-align: center;
        background-color: #222831;
    }
`;

const Footer = (): ReactElement => {
    return (
        <Container>
            <StyledText color="#eeeeee">
                Copyright © 2022 Hanbyul Park. All rights reserved.
            </StyledText>
        </Container>
    );
};

export default Footer;
