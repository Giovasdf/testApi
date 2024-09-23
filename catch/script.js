function showError() {
    return new Promise((resolve, reject) => {
        reject( new Error( 'Ha ocurrido un error' )   )
    })
}
showError()
.then(resolve => console.log(resolve))
.catch(error => console.log(error))