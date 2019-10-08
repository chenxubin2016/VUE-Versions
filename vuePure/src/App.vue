<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      formData: null
    }
  },
  mounted () {
    this.formData = new FormData()
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  #app {
    font-size: 14px;
  }
</style>
