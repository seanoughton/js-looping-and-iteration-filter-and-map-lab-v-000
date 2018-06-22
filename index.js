// Code your solution here:

function riversWithRevenueOver(drivers,revenue) {
  return drivers.filter(function(driver){ return driver.revenue > revenue;});
}
