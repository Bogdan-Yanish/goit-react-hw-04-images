import { Component } from "react";
import PropTypes from "prop-types";
import { FcSearch } from 'react-icons/fc';
import { SearchWrap, SearchForm, SearchBtn, SearchInput} from "./Searchbar.styled";

export class Searchbar extends Component {

    state = {
        query: '',
    };

    handleChange = event => {
        const query = event.target.value;
        this.setState({ query });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { onSubmit } = this.props;
        const { query } = this.state;
        onSubmit(query);
        
    };

    render () {
        const { query } = this.state;
        return (
            <SearchWrap>
                <SearchForm onSubmit={this.handleSubmit}>
                    <SearchBtn type="submit" >
                        <FcSearch></FcSearch>
                    </SearchBtn>

                <SearchInput
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    name="query"
                    onChange={this.handleChange}
                    value={query}
                />
                </SearchForm>
            </SearchWrap>
        )
    }
}

Searchbar.propTypes = {
    onSubmit:PropTypes.func.isRequired,
}