import type { NextPage } from 'next'
import React from 'react';
import AdminLayout from '../../components/layouts/admin';

const ClientPage: NextPage = () => {

  return (
    <p>Hello ClientPage</p>
  )
}

(ClientPage as any).PageLayout = AdminLayout;
export default ClientPage;
