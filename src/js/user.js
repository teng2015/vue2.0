var Vue = require('vue')
var User = require('../components/user.vue');


new Vue({
  el: 'body',
  data: {
    age: '1212'
  },
  // template: '<App data-tip={{age}} />',
  components:{
    mUser:User
  }
  

})
