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
      },{
        volunteer: 'Zak',
        site: 'St Pete',
        data: {
          firstName: 'Braun',
          lastName: 'Williams',
          employed: true,
        },
      },{
        volunteer: 'Zak',
        site: 'St Pete',
        data: {
          firstName: 'James',
          lastName: 'Miller',
          employed: false,
        },
      },{
        volunteer: 'Zak',
        site: 'St Pete',
        data: {
          firstName: 'Peter',
          lastName: 'Smith',
          employed: true,
        },
      },
    ] as Record[],
  },
  mutations: {
    addData(state: any) {
       const volunteer = random(['Zak', 'James', 'Francis', 'Moriarty']);
       const site = random(['St Pete', 'Tampa']);
       const firstName = random(['Steve', 'Bob', 'Zach', 'James', 'Jim', 'John', 'Jordan', 'Andrew', 'Natalie', 'Jared', 'Ralph', 'Vincent']);
       const lastName = random(['Scott', 'Dormer', 'Harris', 'Fiennes', 'D\'Onofrio', 'Williams', 'Johnson', 'Doyle', 'Watson', 'Holmes']);
       const employed = random([true, false]);
       const data = {
           volunteer,
           site,
           data: {
               firstName,
               lastName,
               employed
           }
       };
       state.records = [...state.records, data];
    }
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

function random(elements: any[]): any {
    return elements[Math.floor(Math.random()*elements.length)];
}
