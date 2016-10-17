
<style lang="sass" >
    @import '../css/animate.css';
    @import '../sass/reset.scss';
    
    .content{
        width:100%;
        overflow: hidden;
    }
   
</style>


<template>

    <div class="content" >
        <mHeader></mHeader>
        <router-view  transition="slideright" transition-mode="out-in" keep-alive class="view"></router-view>
        <mNav></mNav>
    </div>
    
    
</template>


<script>
    var Header = require('../components/header.vue');
    var Nav = require('../components/nav.vue');
   
   
    module.exports = {

        ready: function(){
            alert(1)
        },
        data:function(){
            return {
                name:'hello'
            }
        },
        methods: {
            say:function(){
                var self = this;
                console.log(self.$route.query.id)
                console.log(self.$route.params)
            }
        }
        ,
        components:{
        
            mHeader:Header,
            mNav:Nav
        }
       


    }


    
</script>