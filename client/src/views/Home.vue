<template>
    <div class="home">
      <div class="card">
        <div class ="card-content">
          <ul>
            <li v-for="player in Players" :key="player.Name">
              {{player.Name}} {{player.Score}}
            </li>
          </ul>
        </div>
      </div>
      <img :src="CurrentPicture" />
  </div>
</template>

<script>
import {Players, PictureDesk, CurrentPicture, Init} from "../models/Game"
Init();

export default {
  name: 'Home',
  
  data:()=>({
    Players,
    PictureDesk,
    CurrentPicture
  }),
  components:{
    
  }
}
</script>

<style>
  img.card-image{
    width: 100%
  }
</style>