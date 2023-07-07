const KEY = "xHuzs5fJr5QZn25Fx0o8Ag72Dk7pu5nR"

const URL = "https://api.giphy.com/v1/gifs/search?api_key="


export default function fetchGifs({keyword}){
  
  const query = `${URL}${KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

  return fetch(query).then(res => res.json())
  .then(response => {
    const {data} = response
    const gifs = data.map(image => {
      const {images, title, id} = image
      const {url} = images.downsized_medium
      return {title, id, url}
    })
    return gifs
  })
}