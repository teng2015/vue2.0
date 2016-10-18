var Vue = require('vue')
var VueRouter = require('vue-router');
var App = require('../components/App.vue');

var Home= { template: '<div>home</div>' }
var Foo = { template: '<div>foo</div>' }
var Bar = { template: '<div>bar</div>' }

Vue.use(VueRouter);

var router = new VueRouter({
	  mode: false,
  	base: __dirname,
  	routes: [
	  	{ path: '/', component: require('../components/index.vue') },
	    { path: '/user', component: require('../components/user.vue') },
	    { path: '/temp', component: require('../components/temp.vue') }
  	]
});


new Vue({
  el:'#app'
  ,router:router
 
  ,render: (function (h) {  
	  return h(App);  
  })
})

