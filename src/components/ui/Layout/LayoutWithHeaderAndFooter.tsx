import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Layout from './Layout';
import Footer from '../Footer/Footer';

export default function LayoutWithHeaderAndFooter() {
  return (
    <>
      <Header />
      <Layout type="normal">
        <Outlet />
      </Layout>
      <Footer />
    </>
  );
}
