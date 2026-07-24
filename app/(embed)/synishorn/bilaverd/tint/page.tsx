import Navbar from '../../../../../template-bilaverd/components/Navbar';
import Tint from '../../../../../template-bilaverd/components/Tint';
import Footer from '../../../../../template-bilaverd/components/Footer';

export default function TintPage() {
  return (
    <>
      <Navbar />
      <main className="configurator-page">
        <Tint />
      </main>
      <Footer />
    </>
  );
}
