const fs = require('fs');

function writer(data){
  console.log('Starting...');
  fs.writeFileSync(`./test.json`, JSON.stringify(data), (error) => {
    if(error) throw error;
  });
  console.log('Completed');
};

writer({
  test: 'fest'
});
