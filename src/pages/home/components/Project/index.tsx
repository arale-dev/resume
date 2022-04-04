import { StyledTitle } from '@src/components/StyledTypo';
import React, { ReactElement } from 'react';
import { PaddedContainer } from '../..';

const Project = (): ReactElement => {
    return (
        <PaddedContainer>
            <StyledTitle color="white">Projects</StyledTitle>
        </PaddedContainer>
    );
};

export default Project;
