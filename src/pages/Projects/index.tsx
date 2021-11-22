import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const Container = styled.div`
     {
        margin: auto;
        max-width: 1020px;
        padding: 96px 32px;
        display: flex;
        flex-direction: column;
    }
`;

const App = (): ReactElement => {
    return (
        <Container>
            <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>
                    Solve initial network problems 2015-09-01
                </Timeline.Item>
                <Timeline.Item
                    dot={
                        <ClockCircleOutlined className="timeline-clock-icon" />
                    }
                    color="red"
                >
                    Technical testing 2015-09-01
                </Timeline.Item>
                <Timeline.Item>
                    Network problems being solved 2015-09-01
                </Timeline.Item>
            </Timeline>
        </Container>
    );
};

export default App;
