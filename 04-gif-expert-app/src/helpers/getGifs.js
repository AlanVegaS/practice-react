export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?&api_key=qGc0qKzSdZWX2EfPuKSxBslAd2Zgximf&q=${category}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json()
    console.log(data);
    const gifs = data.map(gif => ({
        url: gif.images.downsized_medium.url,
        title: gif.title,
        id: gif.id
    }))
    return gifs
}