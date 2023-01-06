import axios from "axios";

const KEY = `31340613-a91609b1a3c337874966c6d08`;
const OPTIONS = `image_type=photo&orientation=horizontal&safesearch=true&`;
axios.defaults.baseURL = `https://pixabay.com/api/`;

export const fetchImg = async (query, page) => {
    const { data } = await axios.get(
        `?key=${KEY}&q=${query}&page=${page}&image_type=${OPTIONS}&per_page=12`
    );
    return data;
}

// export const optionsApi = {
//     key: '31340613-a91609b1a3c337874966c6d08',
//     q: '',
//     image_type: 'photo',
//     orientation: 'horizontal',
//     page: 1,
//     per_page: 12,
//   };
//   axios.defaults.baseURL = 'https://pixabay.com/api/';
  
//   export const fetchImg = async (query, page) => {
//     const response = await axios('', {
//       params: { ...optionsApi, q: query, page },
//     });
  
//     const { hits, totalHits } = response.data;
//     if (response.status === 200) {
//       return { hits, totalHits };
//     } else {
//       throw new Error(response.statusText);
//     }
//   }

