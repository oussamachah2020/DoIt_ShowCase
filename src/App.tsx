import './App.css'
import Features from '@/components/Features'
import Hero from '@/components/Hero'
import Layout from '@/layout'
import Aos from 'aos'
import React from 'react'
import Stack from './components/Stack'
import Footer from "./components/Footer";
function App() {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Layout>
      <Hero />
      <Features />
      <Stack />
      <Footer />
    </Layout>
  );
}

export default App
