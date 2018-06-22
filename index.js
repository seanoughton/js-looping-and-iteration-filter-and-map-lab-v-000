// Code your solution here:

function riversWithRevenueOver(drivers,revenue) {
  return drivers.filter(function(driver){ driver.revenue > revenue;});
}
