import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

class Footerr extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
            </Footer>
        );
    }
}

export default Footerr;
