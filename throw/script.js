const showError = () => {
    try {
        throw 'Ha ocurrido un error'        
    } catch (err) {
        console.log(err)
    }
}

showError()