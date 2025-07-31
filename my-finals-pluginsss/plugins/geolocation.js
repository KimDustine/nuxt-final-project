export default (_, inject) => {
  inject('geo', {
    getCurrentPosition() {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          return reject('Geolocation is not supported by this browser.')
        }
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    }
  })
}
