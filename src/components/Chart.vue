<script lang="ts">
import { Pie, mixins } from 'vue-chartjs';
const { reactiveProp } = mixins;
    export default {
        extends: Pie,
        mixins: [reactiveProp],
        props: ['labels', 'datasets'],
        mounted () {
            this.renderChart(this.chartData
            )
        }
    }
</script>
