const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nikhilkhatana.github.io',
  title: 'NK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nikhil Khantana',
  role: 'Full Stack Software Developer',
  description: `I’m looking for new challenges and a change in my career direction. Hopefully I will get the chance to put all my knowledge in the right place
    and become part of a great team. I strive to add a great value to the company and to guarantee happy customers.`,
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/nikhil-k-6b8623133/',
    github: 'https://github.com/nikhilkhatana',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'React Chatbot',
    image:
      'https://github.com/NikhilKhatana/react-chatbot/raw/master/public/images/ChatBot.gif?raw=true',
    description:
      'Built a chat bot using simple-react-chatbot. Used create-react-app and React Boostrap.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/NikhilKhatana/react-chatbot',
    livePreview: 'https://react-chatbot.vercel.app/',
  },
  {
    name: 'Project 2',
    description:
      'Developed with ReactJs, React Context Hook, Typescript and Sass',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/NikhilKhatana/pomodoro-timer',
    livePreview: 'https://pomodoro-timer-amber.vercel.app/',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'nkhatanaa@gmail.com',
}

export { header, about, projects, skills, contact }
