// Code your solution here:

function driversWithRevenueOver(drivers,revenue) {
  return drivers.filter(function(driver){ return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers,revenue) {
  return drivers.filter(function(driver){ return driver.revenue > revenue;}).map(function(driverObject) {return driverObject.name;});
}

function exactMatch(drivers,object) {
  return drivers.filter(function(driver){ return driver.revenue === object.revenue;});
  return drivers.filter(function(driver){ return driver.name === object.name;});
}
