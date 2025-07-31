export default (context, inject) => {
  const geo = {
    getCurrentPosition() {
      return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
          return reject(new Error('Geolocation is not supported by your browser.'))
        }
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    }
  }

  inject('geo', geo)
}
