import Text from '@/components/foundation/Text';
import IProject from 'interfaces/Porject';
import React from 'react';
import GitHubCorner from '../GitHubCorner';
import ProjectBoxStyle from './styles';
import { useRouter } from 'next/router';

type IProjectBox = {
  project: IProject
}

const ProjectBox: React.FC<IProjectBox> = ({ project }) => {
  const router = useRouter();
  return(
    <ProjectBoxStyle.Container>
      {project.status &&
        <ProjectBoxStyle.StatusTag status={project.status}>
          {project.status}
        </ProjectBoxStyle.StatusTag>
      }
    
      <ProjectBoxStyle.ImageBox>
        <GitHubCorner projectRepoUrl={project.projectRepoUrl}/>
        <img src={project.projectPhoto} onClick={() => project.projectUrl && router.push(project.projectUrl)}></img>
      </ProjectBoxStyle.ImageBox>
      
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
