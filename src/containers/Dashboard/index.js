import Layout from 'antd/lib/layout/layout';
import React from 'react';
import DashboardPanel from '../../components/DashboardPanel';
import ContentArea from './ContentArea';
import Sidebar from './Sidebar';
import styled from 'styled-components';

const AdminDashboard = () => {
    return (
        <DashboardWrapper style={{ minHeight: '100vh', display: 'contents' }}>
            <Sidebar />
            <ContentArea />
        </DashboardWrapper>
    );
};

export default AdminDashboard;

const DashboardWrapper = styled(Layout)`
    .ant-layout-sider {
        background: white;
    }
`;

