var fs = require("fs");
var file = "./test.db";

//載入 sqlite3
var sqlite3 = require("sqlite3").verbose();
//new 一個 sqlite 的 database，檔案是 test.db
var db = new sqlite3.Database(file);

db.serialize(function() {
  //db.run 如果 Staff 資料表不存在，那就建立 Staff 資料表
  db.run("CREATE TABLE IF NOT EXISTS department ( `ID` INTEGER PRIMARY KEY, `name` VARCHAR(50));");
  db.run("CREATE TABLE IF NOT EXISTS employee (`ID` INTEGER PRIMARY KEY, `idcard` VARCHAR(15) NOT NULL , `name` VARCHAR(20) NOT NULL , `department` INT NOT NULL , `position` VARCHAR(20) NOT NULL);");
  var stmt = db.prepare("INSERT INTO department VALUES (NULL,?);");
  
  // //寫進5筆資料
  // for (var i = 0; i<5; i++) {
  //   stmt.run("測試部門" +(i+1));
  // }
  // stmt.finalize(); //end prepare

  // var stmt = db.prepare("INSERT INTO employee VALUES (NULL,?,?,?,?);");
  // //產生主管
  // for (var i = 0; i < 5; i++) {
  //     var department_ID = (i%5) + 1;
  //     stmt.run("0427010"+i , "主管0"+i+"號" , department_ID , "主管");
  // }
  // //產生不重要的人
  // for (var i = 0; i < 90; i++) {
  //   var department_ID = (i%5) + 1;
  //     if (i<10) {
  //       stmt.run("0427020"+i , "測試人員0"+i+"號" , department_ID , "實習生");
  //     }
  //     else{
  //       stmt.run("042702"+i , "測試人員"+i+"號" , department_ID , "實習生");
  //     }
      
  // }
  // stmt.finalize(); //不知道是幹嘛的 明天查，取消prepare嗎??
  // //The sqlite3_finalize() function is called to delete a prepared statement.

  //查看DB狀況
  console.log(db);
  db.each("SELECT count(ID) AS number_of_Depart FROM department", function(err, row) {
    //log 出所有的資料

    public count  = row.number_of_Depart;

  });
  console.log(count);
  
  db.each("SELECT ID,name FROM department", function(err, row) {
    //log 出所有的資料
    console.log(row.ID +" : " + row.name);
  });

  // db.each("SELECT * FROM employee", function(err, row) {
  //   //log 出所有的資料
  //   console.log(row.ID +" : " + row.name + " 卡片編號 :" + row.idcard+"隸屬於："+row.department + row.position);
  // });

});

