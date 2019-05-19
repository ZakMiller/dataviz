<template>
    <div class="m-6 p-2">
        <div class="inline-block" v-for="chart in charts">
            <div>{{ title(chart.chartLabel) }}</div>
            <Chart :chartData="{labels: chart.labels, datasets: datasets(chart.data)}"></Chart>
            </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Chart from '@/components/Chart.vue';
import _ from 'lodash';

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
    computed: {
      style () {
          return {
              width: '300px',
              display: 'inline-block',
              position: 'relative',
          }
      },
        charts() {
         return getChartData(this.$store.getters.flatRecords)
        },
    },
    methods: {
          datasets(data: number[]) {
          return [
              {
                  backgroundColor: _.times(data.length, () => getRandomColor()),
                  data: data,
              }
          ]
        },
        title(s: string): string {
              return _.startCase(s);
        }
    }
});

function getRandomColor(): string {
    let colorString = '#';
    _.times(6, () => colorString = colorString + randomLetter());
    return colorString;
}

function randomLetter(): string {
    const letters = '0123456789ABCDEF';
    const randomIndex = Math.floor(Math.random() * (letters.length - 1));
    const randomCharacter = letters[randomIndex];
    return randomCharacter;
}

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
                charts.get(prop).set(val, current+1);
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
