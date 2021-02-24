import React from 'react';
import BoxContainer from '@/components/layout/Box';
import Header from '@/components/commons/Header';
import Footer from '@/components/commons/Footer';
import ProjectsWrapper from '@/components/commons/ProjectsWrapper';
import TextBox from '@/components/commons/TextBox';
import Text from '@/components/foundation/Text';

const Home: React.FC = () => {
  return(
    <BoxContainer
      flex="1"
      display="flex"
      flexDirection="column"
    >
      <Header />
      <TextBox title='Sobre mim'>
        <Text color={'secondary'} variant={'text'}>
        Atualmente estou cursando o último ano no curso de engenharia de software pela PUC-Campinas e também estou trabalhando como desenvolvedor Front-end. 
        <br></br>
        <br></br>
        Comecei trabalhando como jovem aprendiz no Kumon onde realizava correções de materiais e atendimento de novos alunos, após isso atuei como técnico em ensaios onde me proporcionou um grande crescimento profissional, através de trabalhos em equipes e atendimento a clientes.
        Após o estágio na área de desenvolvimento descobri que tenho um grande apreço pela área de Front-end, onde estou-me desenvolvendo atualmente.
        <br></br>
        <br></br>
        Uma curiosidade sobre mim é que morei durante 9 anos no japão, por conta disso estudei durante 6 anos em uma escola japonesa, equivalente ao ensino fundamental primário no Brasil. Por esse motivo entendo muito bem o japonês e consigo me comunicar, porém tenho dificuldade na escrita e na leitura e é o que pretendo melhorar.
        <br></br>
        No momento estou trabalhando no meu inglês / espanhol.
        </Text>
      </TextBox>
      <ProjectsWrapper />
      <Footer />
    </BoxContainer>
  );
};

export default Home;
