function trace(){
    try {
        throw new Error("miErrorPersonalizado");
        
    } catch (e) {
        console.log(e.stack)
    }
}

function b (){
    trace()
}

function a (){
    debugger
    b(1,'texto',undefined,{})
}

a()
