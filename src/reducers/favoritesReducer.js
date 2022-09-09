import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";
import movies from './../data.js';

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES: 
        return {
            displayFavorites: !state.displayFavorites
        }
        case ADD_FAVORITE: 
        const favorite = {
            ...action.payload, 
                id: Date.now()
            }
        return {
            favorites: [...state.favorites, favorite]
        }
        case REMOVE_FAVORITE: 
        return {
            favorites: state.favorites.filter(mov=>(action.payload !== mov.id))
        }
        default: 
        return state
    }
}

export default reducer