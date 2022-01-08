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
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
    }
`;
const StyledMenu = styled(Menu)`
     {
        display: flex;
        justify-content: flex-end;
        padding-top: 1.2rem;
        padding-bottom: 1.2rem;
    }
`;
// const links = {
//     home: '',
//     about: 'about',
//     project: 'project',
//     contact: 'contact',
// };

interface HeaderProps {
    goToHome: () => void;
    goToIntro: () => void;
    goToProj: () => void;
    goToContact: () => void;
}

const Header = ({
    goToHome,
    goToIntro,
    goToProj,
    goToContact,
}: HeaderProps): ReactElement => {
    // TODO: 아이콘, 메뉴 이름 및 키, 클릭함수 데이터 이동
    return (
        <Container>
            <StyledMenu
                // onClick={handleClick}
                // selectedKeys={[current]}
                mode="horizontal"
                selectable={false}
            >
                <Menu.Item key="0" icon={<HomeOutlined />} onClick={goToHome}>
                    Home
                </Menu.Item>
                <Menu.Item
                    key="1"
                    icon={<IdcardOutlined />}
                    onClick={goToIntro}
                >
                    About Me
                </Menu.Item>
                <Menu.Item
                    key="2"
                    icon={<AppstoreAddOutlined />}
                    onClick={goToProj}
                >
                    My Projects
                </Menu.Item>
                <Menu.Item
                    key="3"
                    icon={<CommentOutlined />}
                    onClick={goToContact}
                >
                    Contact Me
                    {/* <a href={links.contact}>Contact Me</a> */}
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
