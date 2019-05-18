<template>
    <div>
        <Chart v-for="chart in chartData" :labels="chart.labels" :datasets="[{data: chart.data}]"></Chart>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Chart from '@/components/Chart.vue';

export default Vue.extend({
  name: 'Charts',
    components: {
      Chart
    },
  props: {
  },
    data() {
      return {
         chartData: [] as ChartData[],
      }
    },
    beforeMount(): void {
      this.chartData = getChartData(this.$store.getters.flatRecords);
    }
});
interface ChartData {
    chartLabel: string;
    labels: string[];
    data: number[];
}

function getChartData(records: any[]): ChartData[] {
    let chartDataList = [] as ChartData[];
   const map = createMapOfMaps(records);
  for (let [question, answerMap] of map) {
      let labels = [] as string[];
      let data = [] as number[];
      for (let [answer, count] of answerMap) {
          labels.push(answer);
          data.push(count);
      }
      chartDataList.push({
          chartLabel: question,
          labels,
          data
      });
  }
  return chartDataList;
}

function createMapOfMaps(records: any[]): Map<string, Map<string, number>> {
    let charts = new Map();
    for (let record of records) {
        for (let prop of Object.keys(record)) {
            if (!charts.has(prop)) {
                charts.set(prop, new Map());
            }
            const val = record[prop];
            if (!charts.get(prop).has(val)) {
                charts.get(prop).set(val, 1);
            } else {
                const current = charts.get(prop).get(val);
                charts.get(prop).set(current+1);
            }
        }
    }
   return charts;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
