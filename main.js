// / Write your JavaScript code here!
var planets = [
  ['Pluto', 0.06],
  ['Neptune', 1.148],
  ['Uranus', 0.917],
  ['Saturn', 1.139],
  ['Jupiter', 2.640],
  ['Mars', 0.3895],
  ['Moon', 0.1655],
  ['Earth', 1],
  ['Venus', 0.9032],
  ['Mercury', 0.377],
  ['Sun', 27.9]
];



planets.forEach(function(element){
var dropdown = document.getElementById('planets');
var option = document.createElement('option');
var txt = document.createTextNode(element[0]);
    option.appendChild(txt);
    dropdown.insertBefore(option,dropdown.lastChild);
    //console.log(option);
});



function calculateWeight(userWeight, planetName){

  var userWeight = document.getElementById('user-weight').value;
  var planetName = document.getElementById('planets').selectedIndex -1;
  var gravity = planets[planetName][1];
  result = userWeight * gravity;


console.log(userWeight);
console.log(planetName);
console.log(gravity);
console.log(result);
return result; 
};


// 3. Create a variable called userWeight and assign
// the value of the user’s weight.
// 4. Create a variable called planetName and assign
// the name of the selected planet from the drop down.
// 5. Create a variable called result and assign the
// value of the new calculated weight.
// 6. Write code to display the message shown in the
// screenshot.



function handleClickEvent() {
    var userWeight = document.getElementById('user-weight').value;
    var planetName = document.getElementById('planets').value;
    result = calculateWeight(userWeight, planetName);
    //console.log(result);
    //console.log(userWeight);
    //console.log(planetName);
    //document.getElementById("output").innerHTML = "If you were on " +planetName+ ", you would weigh "  +result+ " lbs!";
    document.getElementById("output").innerHTML = "If you were on " + planetName+ ", you would weigh " + result+ "lbs!";
}
