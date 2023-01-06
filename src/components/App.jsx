import { Component } from "react";
import { fetchImg } from "services/ApiPixabay/Api";
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Searchbar } from './Searchbar/Searchbar';
import ImageLoader from "./Loader/Loader";



export class App extends Component {
  
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    loadMore: false,
  }

  async componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (prevState.page !== page || prevState.query !== query) {
      this.setState({ isLoading: true });
      const { hits: data, totalHits } = await fetchImg(query, page);
      
      if (data.length) {
        const { page } = this.state;
        this.setState(
          prevState => ({
            images: [...prevState.images, ...data],
            loadMore: page < Math.ceil(totalHits / 12),
          }),
          () => {
            window.scrollTo({
              top: document.body.scrollHeight,
              behavior: 'smooth',
            });
          }
        );
      }
      this.setState({
        isLoading: false,
      });
    }
  }

  handleSubmitSearch = query => {
    this.setState({ query, page:1, images:[]})
  }

  handleLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  
  render () {
    return (
      <>
      <Searchbar onSubmit = {this.handleSubmitSearch} />
      {this.state.images.length > 0 && <ImageGallery images={this.state.images}/>}
      
      {this.state.loadMore && <Button onLoadMore = {this.handleLoadMore}/>}
      {this.state.isLoading && <ImageLoader/>}
      
          
      </>
    );
  }
  
  
};
