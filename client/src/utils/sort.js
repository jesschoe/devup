const compareKey = key =>
  (a, b) => {
    if (a[key] < b[key]) {
      return -1
    }
    if (a[key] > b[key]) {
      return 1
    }
    return 0
  }

// one liner
// const compareKey = key => (a, b) => a[key] == b[key]? (a[key] < b[key] ? -1 : 1) : 0

export const nameAZ = arr => arr.sort(compareKey('name'))
export const nameZA = arr => arr.sort(compareKey('name')).reverse()
export const priceLowHigh = arr => arr.sort((a, b) => parseInt(a.price) - parseInt(b.price))
export const priceHighLow = arr => arr.sort((a, b) => parseInt(b.price) - parseInt(a.price))