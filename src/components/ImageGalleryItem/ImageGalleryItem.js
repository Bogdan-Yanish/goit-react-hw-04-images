import { Component } from "react"
import PropTypes from "prop-types";
import { ImageModal } from "components/Modal/Modal";
import { GalleryItem, GalleryImg } from "./ImageGalleryItem.styled" 

export class ImageGalleryItem extends Component {

    state = {
        isOpenModal:false,
    }

    handleToggleModal = () => {
        this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
        return;
    };

    render() {
        const { image } = this.props;
        const { isOpenModal } = this.state;
        return (
            <>
            <GalleryItem>
                <GalleryImg 
                    src={image.webformatURL} 
                    alt={image.tags}
                    onClick={this.handleToggleModal}
                />            
            </GalleryItem>
            {isOpenModal && (
            <ImageModal 
                image={image}
                onCloseModal={this.handleToggleModal}
            />)}
            </>
            
        )
    }
}

ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  };

