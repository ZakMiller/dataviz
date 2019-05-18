<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div class="wrapper">
        <Grid></Grid>
      <Chart :labels="getData().labels" :datasets="getData().datasets"></Chart>
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
    methods: {
      getData: function() {
        return {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets:
                  [
                    {
                      backgroundColor: '#f87979',
                      data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                    }
                  ],
        };
      }
    }
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
