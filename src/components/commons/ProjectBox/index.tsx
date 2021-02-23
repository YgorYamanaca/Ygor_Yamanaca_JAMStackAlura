import Text from '@/components/foundation/Text';
import IProject from 'interfaces/Porject';
import React from 'react';
import ProjectBoxStyle from './styles';

type IProjectBox = {
  project: IProject
}

const ProjectBox: React.FC<IProjectBox> = ({ project }) => {

  return(
    <ProjectBoxStyle.Container>
      <ProjectBoxStyle.ImageBox src={project.projectPhoto} />
      
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
