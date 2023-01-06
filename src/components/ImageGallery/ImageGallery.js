import { GalleryList } from "./ImageGallery.styled";
import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem";

// export const ImageGallery = ({ images }) => {
//     return (
//         <GalleryList>
//         {images.map(image => (
//             <ImageGalleryItem 
//             key={image.id}
//             // webformatURL={image.webformatURL}
//             // largeImageURL={image.largeImageURL}
//             // image={image}
//             />
//         ))}
//         </GalleryList>
//     )
// }

export const ImageGallery = ({ images }) => {
    return (
        <GalleryList>
        {images.map(({ id, webformatURL, largeImageURL, tags }) => (
            <ImageGalleryItem 
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            />
        ))}
        </GalleryList>
    )
}
    

