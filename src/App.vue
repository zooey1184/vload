<template>
  <div id="app">
    <button type="button" name="button" style="{width: 100px; height: 40px}" @click="a">click me</button>
  </div>
</template>

<script>
// import vload from '../dist/vload.js'
// import vload from '../src/lib/index.js'

export default {
  name: 'app',
  methods: {
    a() {
      this.$load.show()
      console.log(this.$load);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
