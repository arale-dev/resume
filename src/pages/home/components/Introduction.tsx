import React, { ReactElement } from 'react';
import { CoffeeOutlined, CodeTwoTone } from '@ant-design/icons';
import {
    StyledA,
    StyledTitle,
    StyledParagraph,
    StyledText,
    StyledIcon,
} from '@components/StyledTypo';

const Introduction = (): ReactElement => {
    return (
        <>
            <StyledTitle>Introduction</StyledTitle>
            <StyledParagraph>
                <StyledText>
                    새로움과 도전을 사랑하는 개발자, 박한별입니다.
                </StyledText>
            </StyledParagraph>
            <StyledParagraph>
                대학교 수업에서 몇줄의 코드 만으로 화면을 이리저리 움직이던
                휴보에 매료되어 프로그래밍
                <StyledIcon>
                    <CodeTwoTone />
                </StyledIcon>{' '}
                을 시작하게 되었습니다. 현재는{' '}
                <StyledText mark>
                    ReactJS, TypeScript, ThreeJS, React Native
                </StyledText>
                를 기반으로 서비스를 개발하고 있습니다.
            </StyledParagraph>
            <StyledParagraph>
                여러 분야에 호기심이 많고 새로운 지식과 경험을 습득하기
                좋아합니다. 중국어, 수영, 커피
                <StyledIcon>
                    <CoffeeOutlined />
                </StyledIcon>
                와 제과제빵, 바이오/의학, Backend와 인공지능 등 분야를 가리지
                않고 적극적으로 관심사를 넓혀나가고 있습니다.
            </StyledParagraph>
            <StyledParagraph>
                개발, 성장, 새로운 사이드 프로젝트에 대한 대화는 언제든
                환영입니다!{' '}
                <StyledA href="mailto:9801gksquf@gmail.com">
                    9801gksquf@gmail.com
                </StyledA>
                으로 이메일을 주시거나, 아래의 Contact 폼을 통해 연락처를
                남겨주세요.
            </StyledParagraph>
        </>
    );
};

export default Introduction;
