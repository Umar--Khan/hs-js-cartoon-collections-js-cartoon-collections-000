function dwarfRollCall(dwarves) {
  var arr = []
  for (var i = 0; i < dwarves.length; i++){
    arr.push(`${i+1}. ${dwarves[i]}`)
      }
    arr.push ("")
    return arr.join(" ")
  }

function summonCaptainPlanet(planeteerCalls){
  var arr = []
  for (var i= 0; i < planeteerCalls.length; i++){
    planeteerCalls[i] = planeteerCalls[i].toUpperCase()
    arr.push(`${planeteerCalls[i]}!`)
  }
  return arr
}

function longPlaneteerCalls(words) {
  if (words.length < 4){
    return false
  } else {
    return true
  }
}

function findTheCheese (foods) {
  var string = ""
  for (var i = 0; i  < foods.length; i++){
    if (foods[i] ===  "cheddar" || foods[i] ===  "gouda" || foods[i] ===  "camembert" ){
      string += `${foods[i]}`
      return string
      }
      continue;
    }
  return "no cheese!"
}
