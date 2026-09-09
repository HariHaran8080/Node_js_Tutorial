const path=require('path')
const fsPromises=require('fs').promises

const fileOps=async()=>
{
  try{
      const data = await fsPromises.readFile(path.join(__dirname, "files", "start.txt"),"utf8");
      console.log(data);
      await fsPromises.writeFile(path.join(__dirname, "files", "Sunshine.txt"), "If you can't do it Then who can?")
      console.log('writing complete');
      await fsPromises.appendFile(path.join(__dirname, "files", "sunshine.txt"), "\n\n then If you can't do it Then who can?")
      console.log('append complete');
      await fsPromises.rename(path.join(__dirname, "files", "sunshine.txt"),(path.join(__dirname,"files",'darkshine.txt')))
      console.log("successfully renamed the file");
      await fsPromises.unlink(path.join(__dirname, "files", "start.txt"));
    }catch(err){
    console.error(err);
  }
}
fileOps();

// Exit on uncaught error
process.on('uncaughtException',err=>{
  console.error(`there was an uncaught error :${err}`)
  process.exit(1)
})

// 55.07