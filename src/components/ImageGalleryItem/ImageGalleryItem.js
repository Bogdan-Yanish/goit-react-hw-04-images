import { Component } from "react"
import PropTypes from "prop-types";
import { ImageModal } from "components/Modal/Modal";
import { GalleryItem, GalleryImg } from "./ImageGalleryItem.styled" 

export class ImageGalleryItem extends Component {

    static propTypes = {
        // image: PropTypes.shape({
        //     webformatURL: PropTypes.string.isRequired,
        //     tags: PropTypes.string.isRequired,
        //     largeImageURL: PropTypes.string.isRequired,
        // }).isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
    };

    state = {
        isOpenModal:false,
    }

    handleToggleModal = () => {
        this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
        return;
    };

    // handleClick = () => {
    //     this.setState({ largeImageURL: this.props.largeImageURL });
    //     this.handleToggleModal();
    // };

    render() {
        // const { image } = this.props;
        const {webformatURL, tags, largeImageURL } = this.props;
        const { isOpenModal } = this.state;
        return (
            <>
            <GalleryItem>
                <GalleryImg 
                    src={webformatURL} 
                    alt={tags}
                    onClick={this.handleToggleModal}
                />            
            </GalleryItem>
            {isOpenModal && (
            <ImageModal 
                src={largeImageURL}
                alt={tags}
                onCloseModal={this.handleToggleModal}
            />)}
            </>
            
        )
    }
}

// export const ImageGalleryItem = ({
//     id,
//     webformatURL,
//     largeImageURL,
//     tags,
//     openModal
// }) => {
//     return (
//         <GalleryItem>
//             <GalleryImg 
//             src={webformatURL} 
//             alt={tags}
//             onClick={() => openModal(id, largeImageURL)}
//             />            
//         </GalleryItem>
//     )
// }