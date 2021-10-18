// const compareKey = key =>
//   (a, b) => {
//     if (a[key] < b[key]) {
//       return -1
//     }
//     if (a[key] > b[key]) {
//       return 1
//     }
//     return 0
//   }

export const priceLowHigh = arr => arr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
export const priceHighLow = arr => arr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))

