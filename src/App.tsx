import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Home from './assets/screens/Home';
import OfferkiScreen from './assets/screens/OfferkiScreen';

import FeaturesScreen from './assets/screens/FeaturesScreen';
import FAQScreen from './assets/screens/FAQScreen';
import Signin from './assets/components/Signin';
import Signup from './assets/components/Signup';
const App: React.FC = () => {
  return (

    
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Home" element={<Home />} />
    
    <Route path="/Offer" element={<OfferkiScreen/>} />


    <Route path="/Global" element={<FeaturesScreen />} />
    <Route path="/FAQ" element={<FAQScreen />} />
    <Route path="/Signin" element={<Signin />} />
    <Route path="/Signup" element={<Signup/>} />
    
    


      {/* <Route path="/" element={<Home />} /> */}
    </Routes>


      {/* Your other content */}
      
    </>
  );
};

export default App;