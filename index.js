// Code your solution in this file
function findMatching(drivers,string){
  return drivers.filter(driver => driver.toLowerCase().includes(string.toLowerCase()))
}

function fuzzyMatch(drivers,string){
  return drivers.filter(driver => driver.slice(0,2)=== string)
}

function matchName(drivers,string){
  return drivers.filter(driver => driver.name.includes(string))
}
