import {El} from './src/m.js';

class Func {
  check = {
    type: async () => {
      const params = this.get.params();
      // if(!params.app||!params.apps) return;

      const db = await this.get.list();
      console.log('DB', db);
      
      if(params?.app){
        console.log('APP');
        const data = [];
        for(const item in db){
          if(item.name.match(params.app)) data.push(item);
        }
        return data;
      }else
      if(params?.apps){
        console.log('APPS');
        const apps = params.apps.split(',');
        const data = [];
        apps.forEach(app => {
          for(const item in db){
            if(item.name.match(app)) data.push(item);
          }
        })
        return data;
      }
    }
  };
  get = {
    params: (o) => {
      const urlParams = new URLSearchParams(document.location.search);
      const data = {};

      for(let [key, val] of urlParams.entries()){
        console.log(`${key}, ${val}`);
        data[key] = val;
      };

      return data;
    },
    app: (list, name) => {
      const s = list.find(i => i.name.toLowerCase().match(name));
      return list.indexOf(s);
    },
    list: async () => {
      const dbGet = await fetch('https://TentacleTenticals.github.io/Steam-games-list/db.json');
      if(!dbGet) return;
      const db = await dbGet.json();
      if(!db) return;
      return db;
    }
  };
  write = {
    list: async () => {
      const data = await this.check.type();
      if(!data) return;

      console.log('Data', data);

      data.forEach(item => {
        El.Div({
          path: document.body,
          text: JSON.stringify(item)
        });
      });
    }
  };
}

new Func().write.list()
