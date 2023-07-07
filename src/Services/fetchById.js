export default function fetchById(id){

  const URL = `https://api.giphy.com/v1/gifs/${id}?api_key=xHuzs5fJr5QZn25Fx0o8Ag72Dk7pu5nR`

  return fetch(URL).then(res => res.json()).then((response) =>{
    const {title ,username, rating, images} = response.data
    const url = images.downsized_medium.url
    const gif = {url, title, username, rating}
    return gif
})
}