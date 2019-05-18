<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div class="wrapper">
      <Chart></Chart>
    </div>
      <ag-grid-vue style="width: 1000px; height: 500px;" class="ag-theme-balham" :columnDefs="columnDefs" :rowData="rowData"></ag-grid-vue>
  </div>
</template>

<script lang="ts">
  interface Header {
    headerName: string;
    field: string;
    sortable: boolean;
  }
  interface Row {
    make: string;
    model: string;
    price: number;
  }
  import Vue from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue';
  import {AgGridVue} from 'ag-grid-vue';
  import Chart from '@/components/Chart.vue';

  export default Vue.extend({
    name: 'home',
    components: {
      HelloWorld,
      AgGridVue,
      Chart,
    },
    data() {
      return {
        columnDefs: [] as Header[],
        rowData: [] as Row[],
      };
    },
    beforeMount(): void {
        this.columnDefs = [
          {headerName: 'Make', field: 'make', sortable: true},
          {headerName: 'Model', field: 'model', sortable: true},
          {headerName: 'Price', field: 'price', sortable: true},
        ];
        fetch('https://api.myjson.com/bins/15psn9')
              .then((result: any) => result.json())
              .then((rowData: any) => this.rowData = rowData);
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
