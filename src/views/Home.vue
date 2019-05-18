<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div class="wrapper">
        <Grid></Grid>
      <Chart></Chart>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue';
  import Chart from '@/components/Chart.vue';
  import Grid from '@/components/Grid.vue';

  export default Vue.extend({
    name: 'home',
    components: {
      HelloWorld,
      Chart,
      Grid,
    },

  });
</script>
<style scoped lang="scss">
.wrapper {
  width: 500px;
  height: 500px;
  display: block;
  position: relative;
}
</style>
