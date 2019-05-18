import Vue from 'vue';
import Vuex from 'vuex';
import {Record} from '@/models/record';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    records: [
      {
       volunteer: 'James',
        site: 'Tampa',
        data: {
         firstName: 'Bob',
          lastName: 'Jones',
          employed: false,
        },
      },
      {
        volunteer: 'Zak',
        site: 'St Pete',
        data: {
          firstName: 'William',
          lastName: 'Williams',
          employed: true,
        },
      },
    ] as Record[],
    message: 'welcome to my world, bitch!',
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    message: (state: any) => state.message,
      records: (state: any) => state.records,
      flatRecords: (state: any) => flatten(state.records),
  },
});

function flatten(records: Record[]): any[] {
    return records.map(r => {
        let d = r.data;
        d.volunteer = r.volunteer;
        d.site = r.site;
        return d;
    });
}
