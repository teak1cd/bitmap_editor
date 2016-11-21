var outputE = document.getElementById("output");
var inputE = document.getElementById("input");
alert("hi");
var commands = [];
function loop(){
window.requestAnimationFrame(loop);
if(inputE.innerHTML.split("<div>").length > 1){
  var args = [];
  var cmd = "";
  var raw = inputE.innerHTML.split("<div>")[0].split(" ");
  cmd = raw[0];
  log(cmd);  
  for(var i = 1;i<commands.length;i++){
    args.push(raw[i]);
  }
  if(commands.includes(cmd)){
    window[cmd].call(args);
  }
  inputE.innerHTML = "";
}
}
loop();
setTimeout(start,250);
function log(text){
  outputE.innerHTML+=text;
  outputE.innerHTML+="<br/>";
}
function regFunc(func){
  commands.push(func);
}
function start(){
  regFunc("help");
  regFunc("ping");
  regFunc("argTest");
}
var argTest = {
 "desc":"argumant test command",
 "call":function(args){
   log(args);
 }
};
var help = {
 "desc":"list all commands",
 "call":function(args){
   for(var i = 0;i<commands.length;i++){
     log(commands[i] +" - "+window[commands[i]].desc);
   }
  return 0;
 }
};
var ping = {
  "desc":"pong!",
  "call":function(args){
    if(args.length===0){
      args.push("t");
    }
    for(var i = 0;i<args.length;i++){
      log("pong!");
    }
  }
};
