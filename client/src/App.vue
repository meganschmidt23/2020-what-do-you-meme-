<template>
  <div id="app">
    <MyNav></MyNav>
    <router-view/>
  </div>
</template>

<script>
import MyNav from "@/components/Nav";
export default {
  components: {
    MyNav
  }
}
</script>
<style lang="scss">
</style>
