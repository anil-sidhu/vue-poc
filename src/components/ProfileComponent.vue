<template>
<div class="hello">
      <HeaderComponent />

  <h1>Profile Screen</h1>

</div>
</template>

<script>
const axios = require('axios');
import HeaderComponent from './HeaderComponent.vue'
export default {
name: 'HelloWorld',
props: {
  msg: String
},
 components: {
    HeaderComponent,
  },
data: function() {
  return {
    result: "test",
    items: [{
      data: 'Loading...'
    },

    ]
  }
},
methods: {
  resultAdd: function() {
    this.result = "new data is here"
  },

},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
margin: 40px 0 0;
}

ul {
list-style-type: none;
padding: 0;
}

li {
display: inline-block;
margin: 0 10px;
}

a {
color: #42b983;
}
</style>
