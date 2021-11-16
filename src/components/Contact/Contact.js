import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Get In Touch</h2>
      <ul>
        <li>
          <a href='mailto:nkhatanaa@gmail.com'>
            <span className='btn'>
              <i aria-hidden='true' className='fas icon fa-envelope' />
              Email
            </span>
          </a>
        </li>

        <li>
          <a href='https://github.com/nikhilkhatana' aria-label='Github'>
            <span className='btn'>
              <i aria-hidden='true' className='fab icon fa-github' />
              Github
            </span>
          </a>
        </li>

        <li>
          <a
            href='https://www.linkedin.com/in/nikhil-k-6b8623133/'
            aria-label='Linkedin'
          >
            <span className='btn'>
              <i aria-hidden='true' className='fab icon fa-linkedin' />
              Linkedin
            </span>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Contact
