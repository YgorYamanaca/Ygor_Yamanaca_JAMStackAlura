type IProject = {
  title: string,
  context: string,
  projectPhoto: string,
  projectUrl?: string,
  projectRepoUrl?: string,
  status?: 'Done' | 'In Progress'
}

export default IProject;
