import {El} from './src/m.js';
// import {db} from './db.json';

console.log('Yo!');

class Func {
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
    }
  };
  write = {
    list: async () => {
      const data = this.get.params();
      if(!data) return;
      if(!data.key) return;

      const dbGet = await fetch('https://TentacleTenticals.github.io/Steam-games-list/db.json');
      if(!dbGet) return;
      const db = await dbGet.json();
      if(!db) return;
      if(!db.applist && !db.applist.apps) return;
      console.log('DB', db.applist.apps);

      const id = this.get.app(db.applist.apps, data.key);
      console.log('ID', id);
      if(id === -1) return;
      const app = db.applist.apps[app];
      console.log('App', app);

      El.Div({
        path: document.body,
        text: JSON.stringify(app)
      });

      // const item = db.find(data.key);
    }
  };
}

new Func().write.list()
