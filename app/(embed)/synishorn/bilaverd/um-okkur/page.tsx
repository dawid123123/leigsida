import Navbar from '../../../../../template-bilaverd/components/Navbar';
import About from '../../../../../template-bilaverd/components/About';
import Footer from '../../../../../template-bilaverd/components/Footer';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="about-page">
        <About />
      </main>
      <Footer />
    </>
  );
}
