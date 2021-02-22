import React from 'react';
import BoxContainer from '@/components/layout/Box';
import Header from '@/components/commons/Header';
import Footer from '@/components/commons/Footer';
import ProjectsWrapper from '@/components/commons/ProjectsWrapper';

const Home: React.FC = () => {
  return(
    <BoxContainer
      flex="1"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <ProjectsWrapper />
      <Footer />
    </BoxContainer>
  );
};

export default Home;
