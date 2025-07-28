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
    }
  };
  write = {
    list: async () => {
      const data = this.get.params();
      if(!data) return;
      if(!data.key) return;

      const db = await fetch('http://TentacleTenticals.github.io/Steam-games-list/db.json');
      if(!db) return;
      console.log('DB', db);

      // const item = db.find(data.key);
    }
  };
}

new Func().write.list()
