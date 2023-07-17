export const getImagen = async() => {
    try {
        const apiKey = 'qGc0qKzSdZWX2EfPuKSxBslAd2Zgximf';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json();

        return data.images.original.url;
    } catch (error) {
        // manejo del error
        console.error(error)
    }
}