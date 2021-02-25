import IProject from 'interfaces/Porject';
import React from 'react';
import ProjectBox from '../ProjectBox';
import ProjectsWrapperStyle from './styles';

const ProjectsWrapper: React.FC = ({}) => {

  const projetctsContent: IProject[] = [
    {
      title: 'GhibliQuiz',
      context: 'Projeto desenvolvido durante a imersão React oferecido pela Alura.',
      projectPhoto: 'images/AluraQuiz.jpg',
      projectUrl: 'https://ghibliquiz.ygoryamanaca.vercel.app/',
      projectRepoUrl: 'https://github.com/YgorYamanaca/ghibliquiz',
      status:'Done'
    },
    {
      title: 'Instalura',
      context: 'Projeto desenvolvido durante o bootcamp da alura.',
      projectPhoto: 'images/instalura.jpg',
      projectUrl: 'https://instalura-base.ygoryamanaca.vercel.app/',
      projectRepoUrl: 'https://github.com/YgorYamanaca/instalura-base',
      status:'In Progress'
    },
    {
      title: 'Projeto 3',
      context: 'Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      projectPhoto: 'https://placehold.it/300x200',
    },
    {
      title: 'Projeto 4',
      context: 'Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      projectPhoto: 'https://placehold.it/300x200',
    },
    {
      title: 'Projeto 5',
      context: 'Lorem 5 ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      projectPhoto: 'https://placehold.it/300x200',
    }
  ]

  return(
    <ProjectsWrapperStyle.Container>
      <ProjectsWrapperStyle.TitleBox>
        Projetos
      </ProjectsWrapperStyle.TitleBox>
      <ProjectsWrapperStyle.ProjectsBox>
        {projetctsContent.map((project: IProject) =>
          <ProjectBox key={project.title} project={project} />
        )}
      </ProjectsWrapperStyle.ProjectsBox> 
    </ProjectsWrapperStyle.Container>
  );
};

export default ProjectsWrapper;