<template>
    <div class="w-full h-64">
        <ag-grid-vue style="width: 100%; height: 100%;" class="ag-theme-balham" :columnDefs="columnDefs" :rowData="rowData"></ag-grid-vue>
    </div>
</template>
<script lang="ts">
    import {AgGridVue} from "ag-grid-vue";
    import Vue from "vue";
    import _ from "lodash";

    export default Vue.extend({
  name: 'Grid',
  props: {
    msg: String,
  },
  components: {
    AgGridVue,
  },
    computed: {
      columnDefs() {
          const records = this.$store.getters.flatRecords;
          const columns = getColumns(records);
          return columns.map(f => getHeader(f));
      },
        rowData() {
            return this.$store.getters.flatRecords;
        }
    }
});

interface header {
  headerName: string;
  field: string;
  sortable: boolean;
}
function getHeader(field: string): header {
  return {
    headerName: _.startCase(field),
    field: _.camelCase(field),
    sortable: true
  }
}

function getColumns(records: any[]): string[] {
  if (records.length == 0) {
    return [] as string[];
  } else {
    return Object.keys(records[0]);
  }
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
