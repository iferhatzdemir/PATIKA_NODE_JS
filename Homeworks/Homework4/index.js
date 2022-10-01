let configPath = "./config/config.json";

let crud = require("./Modules/crud");

let config = crud.dataRead(configPath);
setTimeout(() => {
  console.log(config);
}, 5999);

// let diractorypath = crud.dataRead(config.diractorypath);
// let filepath = crud.dataRead(config.file.filepath);
// let data = crud.dataRead(configPath).data;
// let updatedData = crud.dataRead(configPath).updatedData;

// setTimeout(crud.Creatediractory(diractorypath), 1000);
// setTimeout(crud.showData(filepath, data, crud.writeData), 2000);
// setTimeout(crud.showData(filepath, updatedData, crud.appendData), 3000);
// setTimeout(crud.deleteFile(filepath), 4000);
