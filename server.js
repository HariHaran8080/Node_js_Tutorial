const fs=require('fs')
const path=require('path')

fs.readFile(path.join(__dirname,'files','start.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.writeFile(path.join(__dirname, "files", "sunshine.txt"), "If you can't do it Then who can?", (err, data) => {
  if (err) throw err;
  console.log('work done');
});

fs.appendFile(path.join(__dirname, "files", "sunshine.txt"), "\n\n then If you can't do it Then who can?", (err, data) => {
  if (err) throw err;
  console.log('append complete');
});

process.on('uncaughtException',err=>{
  console.error(`there was an uncaught error :${err}`)
  process.exit(1)
})

// 55.07