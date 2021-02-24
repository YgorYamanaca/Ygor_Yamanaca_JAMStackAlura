import Text from '@/components/foundation/Text';
import IProject from 'interfaces/Porject';
import React from 'react';
import GitHubCorner from '../GitHubCorner';
import ProjectBoxStyle from './styles';

type IProjectBox = {
  project: IProject
}

const ProjectBox: React.FC<IProjectBox> = ({ project }) => {

  return(
    <ProjectBoxStyle.Container>
      <a href={project.projectUrl}>
        <ProjectBoxStyle.ImageBox intern={project.projectPhoto}>
          <GitHubCorner />
        </ProjectBoxStyle.ImageBox>
      </a>
      
      <ProjectBoxStyle.ProjectContext>
        <Text variant='textTitle'>
          {project.title}
        </Text>
        <hr></hr>
        <div style={{marginTop: '10px'}}>
          <Text variant='text'>
            {project.context}
          </Text>
        </div>
      </ProjectBoxStyle.ProjectContext>
    </ProjectBoxStyle.Container>
  );
};

export default ProjectBox;
