import React from 'react';
import Header from './pages/Header/Header'
import CoffeeCups from './pages/CoffeeCups/CoffeeCups';
import Story from './pages/Story/Story';
import LearnMore from './pages/LearnMore/LearnMore';
import BestCoffeeShop from './pages/BestCoffeeShop/BestCoffeeShop';
import Gallery from './pages/Gallery/Gallery';
import Blog from './pages/Blog/Blog';
import Footer from './pages/Footer/Footer';
import Nav from './components/Nav/Nav';

const App = () => (
  <>
    <Header />
    <CoffeeCups />
    <Story />
    <LearnMore />
    <BestCoffeeShop />
    <Gallery />
    <Blog />
    <Footer />
  </>
)

export default App;
