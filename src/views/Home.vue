<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div class="wrapper w-full">
        <Grid></Grid>
      <Charts></Charts>
    </div>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue';
  import Chart from '@/components/Chart.vue';
  import Grid from '@/components/Grid.vue';
  import Charts from '@/components/Charts.vue';

  export default Vue.extend({
    name: 'home',
    components: {
      HelloWorld,
      Chart,
      Charts,
      Grid,
    },
});

</script>
<style scoped lang="scss">
.wrapper {
  display: block;
  position: relative;
}
</style>
