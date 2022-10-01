let configPath = "./config/config.json";

let crud = require("./Modules/crud");

let config = crud.dataRead(configPath);
setTimeout(() => {
  console.log('DATA READ RESULT ', config);
}, 2999);


let directoryPath = crud.dataRead(config.directoryPath);
console.log(directoryPath);
// let filepath = crud.dataRead(config.file.filepath);
// let data = crud.dataRead(configPath).data;
// let updatedData = crud.dataRead(configPath).updatedData;

setTimeout(crud.CreateDirectory(directoryPath), 1000);
setTimeout(crud.showData(filepath, data, crud.writeData), 2000);
// setTimeout(crud.showData(filepath, updatedData, crud.appendData), 3000);
// setTimeout(crud.deleteFile(filepath), 4000);
