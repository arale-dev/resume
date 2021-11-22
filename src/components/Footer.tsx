import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

const { Text } = Typography;
const Container = styled.div`
     {
        align-self: stretch;
        padding: 40px;
        text-align: center;
        background-color: #aaa;
    }
`;

const Footer = (): ReactElement => {
    return (
        <Container>
            <Text>Copyright © 2021 Hanbyul Park. All rights reserved.</Text>
        </Container>
    );
};

export default Footer;
