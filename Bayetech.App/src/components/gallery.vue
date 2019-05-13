<template>
  
   
    <div>
      <h1>{{text}}</h1>
      <v-gallery :images="list">
      </v-gallery>
    </div>
 

  
</template>
<script>
  import vGallery from 'v-gallery';
export default {
  name: 'Gallery',
  data () {
    return {
      text: ' home App',
      list: ['https://imgsa.baidu.com/forum/w%3D580/sign=e422408f5c0fd9f9a0175561152fd42b/c18c5325ab18972bdbdd6f39ebcd7b899c510afc.jpg','https://imgsa.baidu.com/forum/pic/item/e3490d2d11dfa9eccafc10f46ed0f703938fc19a.jpg']
      

    }
    },
    components: {
      
      "v-gallery": vGallery
    },
  mounted: function () {
    
   
    
  }
}
</script>
