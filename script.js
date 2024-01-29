var factList = [
    "The fashion industry is responsible for 8% of carbon emissions.",
    "The average American throws away around 81 pounds of clothing yearly.",
    "68% of fast fashion brands don’t maintain gender equality at production facilities.",
    "Three out of five fast fashion items end up in a landfill.",
    "Fashion accounts for 20 to 35 percent of microplastic flows into the ocean.",
    "Less than 11% of brands are implementing recycling strategies for their items."
  ];
  
  var fact = document.getElementById("fact");
  var myButton = document.getElementById("myButton");
  var count = 0
  
  if (myButton) {
    myButton.addEventListener("click", displayFact);
  }
  
  function displayFact(){
    fact.innerHTML = factList[count];
    count ++;
    if (count == factList.length){
      count = 0;
    }
  }