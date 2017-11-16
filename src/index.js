import TypewriterComponent from './Typewriter'

const Typewriter = {
  install: Vue => {
    Vue.component('typewriter', TypewriterComponent)
  }
}

// register plugin if it is used via cdn or directly as a script tag
window.Vue && (window.Typewriter = Typewriter)

export default Typewriter
