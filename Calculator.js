const display = document.getElementById("display");
function showdisplay(input){
display.value += input;
}
function calculate(){
try{
    display.value = eval(display.value)
}
catch{
    display.value = "Jani Error "
}
}
function cleardisplay(){
display.value = "";
}