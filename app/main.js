const fs = require('fs');

function writer(data){
  fs.writeFileSync(`../test.json`, JSON.stringify(data), (error) => {
    if(error) throw error;
  });
};

writer({
  test: 'fest'
});
