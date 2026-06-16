  const disply = document.getElementbyId("disply")
  function appendtodisply(input){
    disply.value += input;
  }
  function cleardisply(){
    disply.value=""
  }
  function calculat(){
    disply.value= eval(disply.value);
  }