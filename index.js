// Code your solution here:

function driversWithRevenueOver(drivers,revenue) {
  return drivers.filter(function(driver){ return driver.revenue > revenue;});
}

function driverNamesWithRevenueOver(drivers,revenue) {
  //arrayObjects =  drivers.filter(function(driver){ return driver.revenue > revenue;});
  //return arrayObjects.map(function(driverObject) {return driverObject.name;});
  return drivers.filter(function(driver){ return driver.revenue > revenue;}).map(function(driverObject) {return driverObject.name;});
}
