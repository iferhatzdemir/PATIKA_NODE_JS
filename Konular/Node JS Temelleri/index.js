let fsModule = require("./modules/fsModule");
let sampleData = '{"name":"Ahmet","surname":"Yılmaz","age":25}';
let directoryPath = "./DATA2/JSON";
let filePath = "./DATA/data.json";
let filePath2 = "./DATA/data.json2";

fsModule.dataShow(filePath, sampleData, fsModule.dataWrite);
//fsModule.filedelete(filePath2); //Dosya Silme
//fsModule.CreateDirectory(directoryPath); //Klasör Oluşturma
//fsModule.deleteDirectory(directoryPath); //Klasör Silme
//fsModule.renameFile(filePath, filePath2); //Dosya Yeniden Adlandırma
