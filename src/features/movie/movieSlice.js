import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies:[
        {
            id:0,
            linkImage:'https://wallpaperaccess.com/full/1225266.jpg'
        },
        {
            id:1,
            linkImage:'https://images-na.ssl-images-amazon.com/images/I/71oP2plU5CL._AC_SL1024_.jpg'
        },
        {
            id:2,
            linkImage:'https://i.pinimg.com/originals/93/66/35/9366350cce7335c443f41dfc941f73b9.jpg'
        },
        {
            id:3,
            linkImage:'https://i.ebayimg.com/images/g/9o0AAOSw42JZBnt3/s-l400.jpg'
        },
        {
            id:4,
            linkImage:'https://cdn.shopify.com/s/files/1/1057/4964/products/Toy-Story-Vintage-Movie-Poster-Original-1-Sheet-27x41_2e3c6697-790d-4fcc-82bb-75b72a88835c.jpg?v=1629687817'
        },
        {
            id:5,
            linkImage:'https://cdn.europosters.eu/image/750/posters/disney-fairies-tinkerbell-movie-i10413.jpg'
        },
        {
            id:6,
            linkImage:'https://cdn.shopify.com/s/files/1/1416/8662/products/Jungle_Book_1994_original_film_art_large.jpg?v=1551890934'
        },
        {
            id:7,
            linkImage:'http://images6.fanpop.com/image/photos/43600000/Raya-and-the-Last-Dragon-New-Poster-disney-princess-43683156-2592-3840.jpg'
        },

    ]
}

export const movieSlice = createSlice({
    name : 'movies',
    initialState,
    reducers:{
        increament: state =>{
            state.value +=1;
        }
    }
})


export const {increament} = movieSlice.actions;

export default movieSlice.reducer;