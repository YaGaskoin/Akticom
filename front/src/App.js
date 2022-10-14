import './App.scss';
import React, {useEffect, useState} from "react";
import {BrowserRouter,HashRouter, NavLink, Route, Routes, Link} from "react-router-dom";
import {UserOutlined, UnorderedListOutlined, DownloadOutlined } from '@ant-design/icons';
import {Layout, Menu} from "antd";
import Preloader from "./components/common/Preloader/Preloader";
import DownloadForm from "./components/DownloadForm/DownloadForm";
import Catalog from "./components/Catalog/Catalog";

const {Sider, Content} = Layout;


function App(props) {
    const [initialized, setInitialized] = useState(false)
    useEffect(() => {
        setInitialized(true)
    }, [])
    console.log(initialized)
    if (!initialized) {
        return (
            <div className="page-wrapper">
                <header></header>
                <div className={'content'}>
                    <Preloader/>
                </div>
            </div>

        );
    }

    return (

        <React.Fragment>
            <div className={'page-wrapper'}>
                <Layout>
                    <Sider breakpoint="lg"
                           collapsedWidth="0">
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="inline"
                        >
                            {
                                <React.Fragment>
                                    <Menu.Item>
                                        <a href={'https://gaskoin.pythonanywhere.com/admin'}>

                                                <UserOutlined/> Админ. панель
                                            </a>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <NavLink to={'/'}>
                                            <UnorderedListOutlined /> Каталог
                                        </NavLink>
                                    </Menu.Item>
                                    <Menu.Item>
                                        <NavLink to={'/upload'}>
                                            <DownloadOutlined /> Загрузка файла
                                        </NavLink>
                                    </Menu.Item>
                                </React.Fragment>
                            }
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content className={'page-content'}>
                             <Routes>
                                <Route path={'/upload'}  element={<DownloadForm/>}/>
                                 <Route path={'/'} exact={true}  element={<Catalog/>}/>
                            </Routes>

                        </Content>
                    </Layout>
                </Layout>
            </div>

        </React.Fragment>
    );
}

function ArktikApp() {
    return (
        <HashRouter>
            <App/>
        </HashRouter>
    )
}

export default ArktikApp;
