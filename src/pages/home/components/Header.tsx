import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import {
    CommentOutlined,
    IdcardOutlined,
    SettingOutlined,
    HomeOutlined,
    BookOutlined,
    AppstoreAddOutlined,
} from '@ant-design/icons';
import contextStore from '@context/contextStore';
import { observer } from 'mobx-react-lite';

const { SubMenu } = Menu;

const Container = styled.div`
     {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1001;
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
    goToBlog: () => void;
    goToProj: () => void;
    goToContact: () => void;
}

const Header = ({
    goToHome,
    goToIntro,
    goToBlog,
    goToProj,
    goToContact,
}: HeaderProps): ReactElement => {
    return (
        <Container>
            <StyledMenu mode="horizontal" selectable={false}>
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
                <Menu.Item key="3" icon={<BookOutlined />} onClick={goToBlog}>
                    Blog
                </Menu.Item>
                <Menu.Item
                    key="4"
                    icon={<CommentOutlined />}
                    onClick={goToContact}
                >
                    Contact Me
                </Menu.Item>

                <SubMenu
                    key="lang"
                    icon={<SettingOutlined />}
                    title="Language"
                    style={{ float: 'right' }}
                >
                    <Menu.Item
                        key="lang:english"
                        onClick={() => contextStore.changeLanguage('en')}
                    >
                        English
                    </Menu.Item>
                    <Menu.Item
                        key="lang:korean"
                        onClick={() => contextStore.changeLanguage('ko')}
                    >
                        Korean
                    </Menu.Item>
                </SubMenu>
            </StyledMenu>
        </Container>
    );
};

export default observer(Header);
