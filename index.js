// Code your solution here

function findMatching(drivers, driverName) {
    return drivers.filter(driver => driver.toLowerCase() === driverName.toLowerCase())
}

function fuzzyMatch(drivers, driverName) {
    return drivers.filter(driver => driver.startsWith(driverName))
}

function matchName(drivers, driverName) {
    return drivers.filter(driver => driver.name.toLowerCase() === driverName.toLowerCase())
}



