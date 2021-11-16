import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='project' className='section project'>
      <h2 className='section__title'>Projects</h2>

      {projects.map((project) => (
        <ProjectContainer key={uniqid()} project={project} />
      ))}
    </section>
  )
}

export default Projects
