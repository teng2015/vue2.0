<style lang="sass">
  $color:#777;
  .nav{
    padding:20px;
    background: #fff;
    text-align: center;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    box-shadow:2px 0 6px rgba(0,0,0,0.1);
    ul{
      display: flex ;
      li{
        flex: 1;
        a{
          color:$color;
          display: block;
           &:hover{
            color:#484744;
          }
        }
       
      }
    }
  }
</style>

<template>
  
  <nav class="nav" >
     <ul>
       <li>
        <router-link to="user">任务</router-link>
       </li>
       <li>
        <router-link to="temp">日历</router-link>
       </li>
    <!--    <li><a v-link="{ path: '/temp' }">日历</a></li>
       <li><a v-link="{ path: '/user/account' }">文件</a></li>
       <li><a href='#user?id=13123'>话题</a></li>
       <li><a href='#user?id=2'>话题1</a></li>
       <li ><a v-link="{ name: 'user', query: { id: 1} }">项目 </a></li> -->
       <!-- <li>{{$route.query.id}}</li> -->
     </ul>
  </nav>


</template>

<script>

</script>