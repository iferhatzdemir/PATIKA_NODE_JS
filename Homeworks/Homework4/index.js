let configPath = "./config/config.json";

const crud = require("./Modules/crud");

let config = crud.dataRead(configPath);

let directoryPath = config.directoryPath;
let filepath = config.filePath;
let data = JSON.stringify(config.data);
let updatedData = JSON.stringify(config.updatedData);

// crud.CreateDirectory(directoryPath);
// crud.dataWrite(filepath, data);
// crud.appendData(filepath, updatedData);
// crud.filedelete(filepath);
crud.dataShow(filepath, data, crud.dataWrite);
