import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  // <div className='project'>
  //   <h3>{project.name}</h3>

  //   <p className='project__description'>{project.description}</p>
  // {project.stack && (
  //   <ul className='project__stack'>
  //     {project.stack.map((item) => (
  //       <li key={uniqid()} className='project__stack-item'>
  //         {item}
  //       </li>
  //     ))}
  //   </ul>
  // )}

  //   {project.sourceCode && (
  //     <a
  //       href={project.sourceCode}
  //       aria-label='source code'
  //       className='link link--icon'
  //     >
  //       <GitHubIcon />
  //     </a>
  //   )}

  //   {project.livePreview && (
  //     <a
  //       href={project.livePreview}
  //       aria-label='live preview'
  //       className='link link--icon'
  //     >
  //       <LaunchIcon />
  //     </a>
  //   )}
  // </div>
  <div className='project-container'>
    <img src={project.image} alt={project.name} />

    <div className='project-content'>
      <h3>{project.name}</h3>
      <p>{project.description}</p>

      {project.stack && (
        <ul className='project-skill'>
          {project.stack.map((item) => (
            <li key={uniqid()}>{item}</li>
          ))}
        </ul>
      )}

      <ul className='project-link'>
        <li>
          <a
            href={project.sourceCode}
            aria-label='Source code'
            target='_blank'
            title='source code'
            rel='noopener noreferrer'
          >
            <i className='icon-border fas fa-code' />
          </a>
        </li>
        <li>
          <a
            href={project.livePreview}
            aria-label='Preview'
            rel='noopener noreferrer'
            target='_blank'
            title='preview'
          >
            <i
              aria-hidden='true'
              className='icon-border fas fa-external-link-alt'
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default ProjectContainer
