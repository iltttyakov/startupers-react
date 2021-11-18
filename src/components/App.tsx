import React from 'react';

import '../styles/fonts.scss'
import '../styles/general.scss'
import '../styles/normalize.scss'
import Usp from "./Usp/Usp";
import Functional from "./Functional/Functional";
import Download from "./Download/Download";
import About from "./About/About";
import Footer from "./Footer/Footer";


const App: React.FC = () => {
    return (
        <>
            <Usp/>
            <Functional/>
            <Download/>
            <About/>
            <Footer/>
        </>
    );
};

export default App;