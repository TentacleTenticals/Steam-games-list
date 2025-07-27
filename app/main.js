const fs = require('fs');

function writer(data){
  console.log('Starting...');
  fs.writeFileSync(`./test.json`, JSON.stringify(data), (error) => {
    if(error) throw error;
  });
  console.log('Completed');
};

const getList = (o) => fetch(o.url+ new URLSearchParams(o.params), {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}).then(
  r => {
    if(r.ok) return r.json();
  }
);

writer({
  test: 'fest2'
});


// getList({
//   url: 'http://api.steampowered.com/ISteamApps/GetAppList/v0002/?',
//   format: 'json'
// }).then(
//   res => {
//     console.log('Res', res);
//     if(res) writer(res);
//   }
// );

// writer({
//   test: 'fest'
// });
