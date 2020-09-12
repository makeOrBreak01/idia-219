window.onload = function() {
  var submit = document.getElementById('submit');
  submit.onclick = pullIngredients;

  var resetButton = document.getElementById('ResetChoices');
  resetButton.onclick = clearStorage;
}

function pullIngredients() {
  var ingredientsArray = document.getElementsByTagName('input');
  var meats = [];
  var breads = [];
  var condiments = [];

  for(var i = 0; i < ingredientsArray.length; i++) {
      if(ingredientsArray[i].checked == true) {

          if(ingredientsArray[i].id.includes("meat")) {
                meats.push(ingredientsArray[i].value);
              } else if (ingredientsArray[i].id.includes("bread")) {
                  breads.push(ingredientsArray[i].value);
              } else if (ingredientsArray[i].id.includes("condi")) {
                  condiments.push(ingredientsArray[i].value);
              }
          }

  }
  localStorage.setItem("meats", JSON.stringify(meats));
  localStorage.setItem("breads", JSON.stringify(breads));
  localStorage.setItem("condiments", JSON.stringify(condiments));
  pushIngredients();
}

function pushIngredients() {
  var outputs = document.getElementById('outputs');
  var outputText = "";

  /*for(var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
    //  var values = localStorage.value(key);
      outputText += localStorage[key] + "<br>";
  }*/
  outputText += JSON.parse(localStorage.getItem("meats")) + "<br>";
  outputText += JSON.parse(localStorage.getItem("breads")) + "<br>";
  outputText += JSON.parse(localStorage.getItem("condiments")) + "<br>";
  outputs.innerHTML = outputText;
}

function clearStorage() {
  localStorage.clear();
}
