var static=require('node-static');
var port=8000;
var file=new static.Server('./public');

require('http').createServer(function(req,res){
    // console.log(req.url);
    req.addListener('end',function(){
        file.serve(req,res).addListener('error',function(err){        
            console.error("Error serving "+req.url+" - "+err.message);
        });
    }).resume();
}).listen(port,function(){
    console.log('Server start on port '+port);
});