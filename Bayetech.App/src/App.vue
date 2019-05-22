<template>
  
  <div id="app" class="app app-touch">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  metaInfo: {
    meta: [
      {'http-equiv': 'Content-Type', content: 'text/html;charset=UTF-8'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {name: 'apple-mobile-web-app-capable', content: 'yes'},
      {name: 'apple-mobile-web-app-status-bar-style', content: 'black'},
      {name: 'format-detection', content: 'telephone=no, email=no'}
    ]
  }
}
</script>
