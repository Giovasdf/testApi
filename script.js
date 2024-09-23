const baseUrl = "https://jsonplaceholder.typicode.com"

const request = async (url) => {
    const resultado = await fetch(url)
    const respuesta = await resultado.json()
    return respuesta
}

const getPosts = async (id) => {
    //https://jsonplaceholder.typicode.com/posts?userId=1
    const url = `${baseUrl}/posts?userId=${id}`
    return await request(url)
}

const getUser = async (id) => {
    const url = `${baseUrl}/users/${id}`
    return await request(url)
}

const userId = 1

Promise.all([getUser(userId),getPosts(userId)]).then(
    resp => {
        // console.log("Respuesta",resp)
        const user = resp[0]
        const posts = resp[1]

        // const userName = user.name
        // const userAddress = user.address

        // console.log(user)
        // console.log(user.name)
        // console.log(userAddress.city)
        console.log(posts)

        posts.forEach(post => {
            console.log(post.title)
            console.log(post.body)
            console.log("-----")
        });
    }
    
).catch(
    error => console.log("Error",error)
)