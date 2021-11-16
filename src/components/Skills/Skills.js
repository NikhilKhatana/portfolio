import uniqid from 'uniqid'
import { skills } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section id='stack' className='section stack'>
      <h2 className='section__title'>Tech Stack</h2>
      <div className='stack-container'>
        <div className='tech-container'>
          <i className='devicon-html5-plain colored' />
          HTML
        </div>
        <div className='tech-container'>
          <i className='devicon-css3-plain colored' />
          CSS
        </div>
        <div className='tech-container'>
          <i className='devicon-javascript-plain colored' />
          JavaScript
        </div>
        <div className='tech-container'>
          <i className='devicon-react-original colored' />
          React.js
        </div>
        <div className='tech-container'>
          <i className='devicon-vuejs-plain colored' />
          Vue
        </div>
        <div className='tech-container'>
          <i className='devicon-jest-plain colored' />
          Jest
        </div>
        <div className='tech-container'>
          <i className='devicon-nodejs-plain colored' />
          Node.js
        </div>
        <div className='tech-container'>
          <i className='devicon-express-original colored' />
          Express.js
        </div>
        <div className='tech-container'>
          <i className='devicon-laravel-plain colored' />
          Laravel
        </div>
        <div className='tech-container'>
          <i className='devicon-python-plain colored' />
          Python
        </div>
        <div className='tech-container'>
          <i className='devicon-django-plain colored' />
          Django
        </div>
        <div className='tech-container'>
          <i className='devicon-mongodb-plain colored' />
          MongoDB
        </div>
        <div className='tech-container'>
          <i className='devicon-postgresql-plain colored' />
          PostgreSQL
        </div>
        <div className='tech-container'>
          <i className='devicon-firebase-plain colored' />
          Firebase
        </div>
      </div>
    </section>
  )
}

export default Skills
