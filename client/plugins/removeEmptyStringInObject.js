export default (_, inject) => {
  inject('removeEmptyStringInObject', (obj) => {
    let newObj = {}
    Object.keys(obj).forEach((prop) => {
      if (obj[prop] !== '' && obj[prop] !== 0) {
        newObj[prop] = obj[prop]
      }
    })
    return newObj
  })
}
