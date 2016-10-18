
<style lang="sass" >
    @import '../css/animate.css';
    @import '../sass/reset.scss';
    
</style>


<template>

    <div class="content" >
        <mHeader></mHeader>
            <transition name="fade" mode="out-in">
                    <router-view  ></router-view>
            </transition>
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