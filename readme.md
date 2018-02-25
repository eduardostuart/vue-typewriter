<div align="center">
   
  <h1>⌨️ Vue Typewriter</h1>

  <a href="https://eduardostuart.github.io/vue-typewriter/dist" target="_blank">
    <img src="http://share.s.tuart.me/W6T9zD/265W1bqb+" width="918">
  </a>
  
  <br>

</div>


> For Vue 1.x see the [1.x branch](https://github.com/eduardostuart/vue-typewriter/tree/1.x).


## Install


**npm**

`npm install vue-typewriter --save`

**yarn**

`yarn add vue-typewriter`

## Usage

```js
import Vue from 'vue'
import Typewriter from 'vue-typewriter'

Vue.use(Typewriter)
```



```vue
<typewriter
    :speed="200"
    :full-erase="true"
    :interval="300"
    :words='["Awesome!","Amazing!"]'>
    Vue Typewriter is
</typewriter>
```

## License

This project is licensed under the [MIT](http://opensource.org/licenses/MIT) license.

