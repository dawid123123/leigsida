import Navbar from '../../../../../template-bilaverd/components/Navbar';
import ShopCatalog from '../../../../../template-bilaverd/components/ShopCatalog';
import Footer from '../../../../../template-bilaverd/components/Footer';

export default function NetverslunPage() {
  return (
    <>
      <Navbar />
      <main className="shop-page-wrap">
        <ShopCatalog />
      </main>
      <Footer />
    </>
  );
}
