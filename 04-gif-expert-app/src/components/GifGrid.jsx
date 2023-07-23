import { GifCard } from "./GifCard";
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h2>{category}</h2>
            {
                isLoading && (<h3>Loading...</h3>)
            }
            <div className="img-section">
            {
                images.map((gif) => (
                    <GifCard 
                        key = {gif.id}
                        {...gif}
                    />
                ))
            }
            </div>
        </>
    )
}