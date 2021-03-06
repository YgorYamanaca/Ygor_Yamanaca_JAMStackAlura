import Text from '@/components/foundation/Text';
import IProject from 'interfaces/Porject';
import React from 'react';
import { useRouter } from 'next/router';
import GitHubCorner from '../GitHubCorner';
import ProjectBoxStyle from './styles';

type IProjectBox = {
  project: IProject
}

const ProjectBox: React.FC<IProjectBox> = ({ project }) => {
  const router = useRouter();
  return (
    <ProjectBoxStyle.Container>
      {project.status
        && (
        <ProjectBoxStyle.StatusTag className="statusTag" status={project.status}>
          {project.status}
        </ProjectBoxStyle.StatusTag>
        )}

      <ProjectBoxStyle.ImageBox>
        <GitHubCorner projectRepoUrl={project.projectRepoUrl} />
        <img src={project.projectPhoto} onClick={() => project.projectUrl && router.push(project.projectUrl)} alt="projectPhoto" />
      </ProjectBoxStyle.ImageBox>

      <ProjectBoxStyle.ProjectContext>
        <Text variant="textTitle">
          {project.title}
        </Text>
        <hr />
        <div style={{ marginTop: '10px' }}>
          <Text variant="text">
            {project.context}
          </Text>
        </div>
      </ProjectBoxStyle.ProjectContext>
    </ProjectBoxStyle.Container>
  );
};

export default ProjectBox;
