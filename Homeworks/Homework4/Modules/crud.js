const fs = require("fs");

//Dosya Okuma
let dataRead = (path) => {



 let readResult = fs.readFileSync(path, "utf8", (err, data) => {

    try {
      console.log("Dosya Okundu");
      if (path.includes(".json")) {
       result = data;
      } else {
        console.log('File not a json');
        return data;
      }
    } catch (err) {
      console.log(err);
    }
  });

  return JSON.parse(readResult);

};


//Dosya Yazma
let dataWrite = (path, data) => {
  fs.writeFile(path, data, (err) => {
    // if (err) {
    //   console.error(err);
    //   return;
    // } else {
    //   console.log("Dosya Yazıldı");
    // }
    try {
      console.log("Dosya Yazıldı");
    } catch (err) {
      console.log(err);
    }
  });
};
//Dosyaya Veri Eklemek
let appendData = (path, data) => {
  fs.appendFile(path, "\n" + data, "utf-8", (err) => {
    try {
      console.log("Dosyaya Veri Eklendi");
    } catch (err) {
      console.log(err);
    }

    // if (err) {
    //   console.error(err);
    //   return;
    // } else {
    //   console.log("Dosya Güncellendi");
    // }
  });
};
let dataShow = async (path, data, callback) => {
  await callback(path, data);
  dataRead(path);
};
//Dosya Silme
let filedelete = (path) => {
  fs.unlink(path, (err) => {
    try {
      console.log("Dosya Silindi.\n Silinen Dosya:", path);
    } catch (err) {
      console.log(err);
    }
  });
};

let CreateDirectory = (path) => {
  fs.mkdir(path, { recursive: true }, (err) => {
    try {
      console.log("Klasör Oluşturuldu.\n Oluşturulan Klasör:", path);
    } catch (err) {
      console.log(err);
    }
  });
};

let deleteDirectory = (path) => {
  fs.rmdir(path, { recursive: true }, (err) => {
    try {
      console.log("Klasör Silindi.\n Silinen Klasör:", path);
    } catch (err) {
      console.error(err);
    }
  });
};

let renameFile = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    try {
      console.log(
        "Dosya Yeniden Adlandırıldı.\n Yeniden Adlandırılan Dosya:",
        oldPath
      );
    } catch (err) {
      console.error(err);
    }
  });
};

module.exports = {
  dataRead: dataRead,
  dataWrite: dataWrite,
  appendData: appendData,
  dataShow: dataShow,
  filedelete: filedelete,
  CreateDirectory: CreateDirectory,
  deleteDirectory: deleteDirectory,
  renameFile: renameFile,
};
