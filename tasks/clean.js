const fs = require('fs');
const argv = require('yargs').argv


if (argv.path) {
  console.log(`Cleaning ${argv.path}...`);
  deleteFolderRecursive(argv.path);
  console.log(`Successfully cleaned ${argv.path}`);
} else {
  throw new Error('Clean.js: You must set a `--path` argument.')
}


function deleteFolderRecursive(path) {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(function(file, index){
      var curPath = path + "/" + file;

      if (fs.lstatSync(curPath).isDirectory()) { // recurse
        deleteFolderRecursive(curPath);
      } else { // delete file
        fs.unlinkSync(curPath);
      }
    });

    console.log(`Deleting directory "${path}"...`);
    fs.rmdirSync(path);
  }
};
