const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nikhilkhatana.github.io/portfolio/',
  title: 'NK.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nikhil Khatana',
  role: 'Full Stack Software Developer',
  description: `I’m looking for new challenges and a change in my career direction. Hopefully I will get the chance to put all my knowledge in the right place
    and become part of a great team. I strive to add a great value to the company and to guarantee happy customers.`,
  resume:
    'https://drive.google.com/file/d/1KbUGJTXLswWwif183LbFLHuLRLgt8WFC/view?usp=sharing',
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
    stack: ['React'],
    sourceCode: 'https://github.com/NikhilKhatana/react-chatbot',
    livePreview: 'https://react-chatbot.vercel.app/',
  },
  {
    name: 'Pomotroid Timer',
    image: 'https://s1.gifyu.com/images/pomotroid.gif',
    description:
      'Developed with ReactJs, React Context Hook, Typescript and Sass',
    stack: ['React', 'TypeScript', 'SASS'],
    sourceCode: 'https://github.com/NikhilKhatana/pomodoro-timer',
    livePreview: 'https://pomodoro-timer-amber.vercel.app/',
  },
  {
    name: 'Checkout Form',
    image: 'https://s10.gifyu.com/images/vue-checkout.gif',
    description: 'Tailwind checkout form built with vue.js',
    stack: ['Javscript', 'Vue', 'SASS', 'Tailwind'],
    sourceCode: 'https://github.com/NikhilKhatana/vue-checkout-form',
    livePreview: 'https://vue-checkout-form.vercel.app/',
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
