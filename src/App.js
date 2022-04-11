import React, { useRef } from 'react';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import { dark } from './styles/Themes';

import { AnimatePresence } from 'framer-motion';

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // el base

import Home from './sections/Home';
import About from './sections/About';
import Shop from './sections/Shop';
import Banner from './sections/Banner';
import NewArrival from './sections/NewArrival';
import Footer from './sections/Footer';

/* 

44.50 navbar

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
