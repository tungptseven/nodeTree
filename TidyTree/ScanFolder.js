var dirToJson = require('dir-to-json');
var fs = require('fs');

dirToJson( "/home/msi/Downloads/project_2", function( err, dirTree ){
    if( err ){
        throw err;
    }else{
        var json = JSON.stringify(dirTree) ;
        fs.writeFile('data.json',json)
    }
});