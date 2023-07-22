import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"
import { GifCard } from "./GifCard";

export const GifGrid = ({category}) => {
    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }

    useEffect( () => {
        getImages()
        console.log(images);
    }, [])
    return (
        <>
            <h2>{category}</h2>
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