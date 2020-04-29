import React from 'react';
import KudosBoard from './MainContent/KudosBoard/KudosBoard';
import BrothersBoard from './MainContent/BrothersBoard/BrothersBoard';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Title from './common/TitlePage/Title';
import BackToTop from './Layout/Footer/GoToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{padding: '30px 112px'}}>
        <Title title="Dê um kudo!" />
        <KudosBoard />
        <BrothersBoard />
        <Footer />
      </div>
      <BackToTop />
    </div>
  );
}

export default App;
