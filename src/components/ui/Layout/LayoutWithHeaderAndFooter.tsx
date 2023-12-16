import Header from '../Header/Header';
import Layout from './Layout';
import Footer from '../Footer/Footer';

export default function LayoutWithHeaderAndFooter() {
  return (
    <>
      <Header />
      <Layout type="normal" />
      <Footer />
    </>
  );
}
