<template>
  <div class="home mx-auto w-4/5">
    <div class="wrapper w-full m-4 p-4">
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
  import {interval} from 'rxjs';

  export default Vue.extend({
    name: 'home',
    components: {
      HelloWorld,
      Chart,
      Charts,
      Grid,
    },
      created() {
      const obs = interval(3000);
      obs.subscribe(
              () => this.$store.commit('addData')
      )
      }
});

</script>
<style scoped lang="scss">
.wrapper {
  display: block;
  position: relative;
}
</style>
