function findMatching(drivers, string) {
    const newDrivers = drivers.filter(element => element.toLowerCase() === string.toLowerCase())
    return newDrivers
}

// function fuzzyMatch(drivers, string) {
//     const startsWith = drivers.filter(element => element.toLowerCase().startsWith() === string.toLowerCase().startsWith())
//     return startsWith
// }

// function fuzzyMatch(drivers, string) {
//     const startsWith = drivers.filter(element => element.slice(0, string.length) === string)
//     return startsWith
// }

// const fuzzyMatch = (drivers, string) => {
//     return drivers.filter(driver => driver.startsWith(string))
//   }

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => driver.startsWith(string))
  }

function matchName(drivers, string) {
    const match = drivers.filter(element => element.name === string)
    return match
}