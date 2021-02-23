import IProject from 'interfaces/Porject';
import React from 'react';
import ProjectBox from '../ProjectBox';
import ProjectsWrapperStyle from './styles';

const ProjectsWrapper: React.FC = ({}) => {

  const projetctsContent: IProject[] = [
    {
      title: 'Projeto 1',
      context: 'Lorem 1 ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      projectPhoto: 'https://placehold.it/250x200',
    },
    {
      title: 'Projeto 2',
      context: 'Lorem 2 ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      projectPhoto: 'https://placehold.it/250x200',
    },
    {
      title: 'Projeto 3',
      context: 'Lorem 3 ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      projectPhoto: 'https://placehold.it/250x200',
    },
    {
      title: 'Projeto 4',
      context: 'Lorem 4 ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      projectPhoto: 'https://placehold.it/250x200',
    },
    {
      title: 'Projeto 5',
      context: 'Lorem 5 ipsum dolor sit amet, consectetur adipiscing elit. Donec molestie rhoncus vestibulum. Aenean blandit velit.',
      projectPhoto: 'https://placehold.it/250x200',
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