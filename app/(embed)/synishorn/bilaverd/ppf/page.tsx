import Navbar from '../../../../../template-bilaverd/components/Navbar';
import PPF from '../../../../../template-bilaverd/components/PPF';
import Footer from '../../../../../template-bilaverd/components/Footer';

export default function PPFPage() {
  return (
    <>
      <Navbar />
      <main className="configurator-page">
        <PPF />
      </main>
      <Footer />
    </>
  );
}
