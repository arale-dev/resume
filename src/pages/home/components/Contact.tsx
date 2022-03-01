/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import contextStore from '@context/contextStore';
import { observer } from 'mobx-react-lite';
import { Button, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import {
    StyledParagraph,
    StyledText,
    StyledTitle,
} from '@src/components/StyledTypo';
import { UploadOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { PaddedContainer } from '..';

const StyledButton = styled(Button)`
     {
        height: auto !important;
        font-size: 2.4rem !important;
        text-align: center;
        background-color: #393e46;
        color: #eeeeee;
        padding: 1rem 4rem;
        border-width: 2px;
    }
`;

const Contact = (): ReactElement => {
    return (
        <PaddedContainer>
            <StyledTitle color="white">Contact</StyledTitle>
            <StyledParagraph>
                <StyledText color="white">
                    {contextStore.lang === 'en'
                        ? "Have a question or want to work together? Whatever the content is, it's good! Please leave a message. A fun suggestion is welcome :-)"
                        : '질문이나 협업 등 함께 나누고 싶은 얘기가 있으시다면 메시지를 남겨주세요. 어떤 내용이든 좋습니다! 재미있는 제안 환영해요 :)'}
                </StyledText>
            </StyledParagraph>
            <Input
                placeholder="Enter your name or nickname"
                allowClear
                onChange={(e) => contextStore.setName(e.target.value)}
                value={contextStore.name}
            />
            <Input
                placeholder="Enter your email"
                allowClear
                onChange={(e) => contextStore.setEmail(e.target.value)}
                value={contextStore.email}
            />
            <TextArea
                rows={6}
                placeholder="Enter your message"
                allowClear
                onChange={(e) => contextStore.setMessage(e.target.value)}
                value={contextStore.message}
            />
            <StyledButton
                type="ghost"
                icon={<UploadOutlined />}
                onClick={contextStore.sendDoc}
            >
                Send
            </StyledButton>
        </PaddedContainer>
    );
};

export default observer(Contact);
