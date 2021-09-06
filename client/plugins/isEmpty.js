export default (_, inject) => {
  inject(
    'isEmpty',
    (obj) => obj && Object.keys(obj).length === 0 && obj.constructor === Object
  )
}
