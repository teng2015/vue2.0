<style lang="sass">
   
    .user{
        padding:20px;
    }
</style>

<template>

   
    <div class="user">
    
        dasdsad 
    </div>
 

</template>

<script>
    // var Vue = require('vue')
    // var Child = require('../components/child.vue');

    // Vue.component('child', {
    //   // 声明 props
    //   props: ['msg'],
    //   // prop 可以用在模板内
    //   // 可以用 `this.msg` 设置
    //   template: Child.template
    // });
    // console.log(Child.template)
    //模块编写
    // var Header = require('../components/header.vue');
    // var Nav = require('../components/nav.vue');
    // module.exports = {
    //     components:{
    //         mHeader:Header,
    //         mNav:Nav
    //     }
    // }
   

    module.exports = {

        ready: function(){
            // alert(1)
        },
        data:function(){
            return {
                name:'hello'
            }
        },
        methods: {
            say:function(){
                var self = this;
                console.log(self.$route)
                 alert(self.$route.query.id)
            }
        }

    }
</script>