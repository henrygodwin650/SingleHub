import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import Footer from './components/Footer/Footer';

// Assuming Section is another component — include it if you have it
import Section from './components/Section/Section';

const App = () => {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Category />
      <Section /> {/* Make sure to import this component if it's not already */}
      <Banner />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;