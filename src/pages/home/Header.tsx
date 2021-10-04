import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import {
    CommentOutlined,
    IdcardOutlined,
    SettingOutlined,
    AppstoreAddOutlined,
    HomeOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Container = styled.div`
     {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        font-size: 16px;
    }
`;
const StyledMenu = styled(Menu)`
     {
        display: flex;
        justify-content: flex-end;
    }
`;
const links = {
    home: '',
    about: '/about',
    project: '/project',
    contact: 'contact',
};

const Header = (): ReactElement => {
    return (
        <Container>
            <StyledMenu
                // onClick={handleClick}
                // selectedKeys={[current]}
                mode="horizontal"
            >
                <Menu.Item key="home" icon={<HomeOutlined />}>
                    Home
                </Menu.Item>
                <Menu.Item key="about" icon={<IdcardOutlined />}>
                    About Me
                </Menu.Item>
                <Menu.Item key="app" icon={<AppstoreAddOutlined />}>
                    Projects
                </Menu.Item>
                <Menu.Item key="contact" icon={<CommentOutlined />}>
                    <a href={links.contact}>Contact Me</a>
                </Menu.Item>

                <SubMenu
                    key="lang"
                    icon={<SettingOutlined />}
                    title="Language"
                    style={{ float: 'right' }}
                >
                    <Menu.Item key="lang:english">English</Menu.Item>
                    <Menu.Item key="lang:korean">Korean</Menu.Item>
                </SubMenu>
            </StyledMenu>
        </Container>
    );
};

export default Header;
