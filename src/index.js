import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import MenuList from './containers/menulist';
import MapView from './containers/map/MapView';
import Store from './configStore';
import { Layout } from 'antd';
const { Sider, Content } = Layout;

const store = Store;
ReactDOM.render(
    <Provider store = {store}>
        <Layout style={{width:'100%',height:'100%'}}>
            <Sider 
            style={{backgroundColor:'#F7F7F7'}}
            >
                <MenuList></MenuList>
            </Sider>
            <Content >
                <MapView></MapView>
            </Content> 
        </Layout>   
    </Provider>, document.getElementById('root')
);

