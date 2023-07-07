export default function fetchTrending(){
  const url = "https://api.giphy.com/v1/gifs/trending?api_key=xHuzs5fJr5QZn25Fx0o8Ag72Dk7pu5nR&limit=10&rating=g"

  return fetch(url).then(res => res.json()).then(res => {
    const {data} = res
    const gifs = data.map(gif => {
      const {title, images, id} = gif
      const url = images.original.url
      return {url, title,id}
    })
    return gifs
  })

}