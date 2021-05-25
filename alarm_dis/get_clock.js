function Clock() {
  var now = new Date();
  var hour = now.getHours();
  var min  = now.getMinutes();
  var sec  = now.getSeconds();
  var msg = hour + ":" + min + ":" + sec;
  document.getElementById("TimeArea").innerHTML = msg;
  console.log("sucsess");
}
setInterval('Clock()',1000);

