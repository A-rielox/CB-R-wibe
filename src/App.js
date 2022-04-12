import React, { useRef } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { dark } from './styles/Themes';

import { AnimatePresence } from 'framer-motion';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // el base
import ScrollTriggerProxy from './components/ScrollTriggerProxy';

import Home from './sections/Home';
import About from './sections/About';
import Shop from './sections/Shop';
import Banner from './sections/Banner';
import NewArrival from './sections/NewArrival';
import Footer from './sections/Footer';

/* 

44.50 navbar
1.02.37 about
1.20.00 shop
1.54.30 banner
2.03.20 new arrival
2.24.30 footer
2.46.00 pantalla carga

*/

function App() {
   const containerRef = useRef(null);

   return (
      <>
         <GlobalStyles />
         <ThemeProvider theme={dark}>
            <LocomotiveScrollProvider
               options={{
                  smooth: true,
                  // ... all available Locomotive Scroll instance options
               }}
               watch={
                  [
                     //..all the dependencies you want to watch to update the scroll.
                     //  Basicaly, you would want to watch page/location changes
                  ]
               }
               containerRef={containerRef}
            >
               <AnimatePresence>
                  <ScrollTriggerProxy />
                  <main
                     className="App"
                     data-scroll-container
                     ref={containerRef}
                  >
                     <Home />
                     <About />
                     <Shop />
                     <Banner />
                     <NewArrival />
                     <Footer />
                  </main>
               </AnimatePresence>
            </LocomotiveScrollProvider>
         </ThemeProvider>
      </>
   );
}

export default App;

// gsap.fromTo(el, {este es para el "from"}, {este para el "to"})
