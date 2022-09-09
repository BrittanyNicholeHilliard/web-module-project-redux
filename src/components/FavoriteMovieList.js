import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {removeFavorite} from '../actions/favoritesActions'

const FavoriteMovieList = (props) => {
    const {favorites, removeFavorite, displayFavorites} = props;

    const handleClick=(id)=> {
        removeFavorite(id)
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {displayFavorites ? 
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <div onClick={() => {handleClick(movie.id)}}><span className="material-icons">remove_circle</span></div>
                    </Link> 
                </div>
            }) : null
        }
    </div>);
}

const mapStateToProps = (state) => {
    console.log('stored state in favoritemovie component', state)
    return {
        favorites: state.favoritesReducer.favorites, 
        displayFavorites: state.favoritesReducer.displayFavorites
    }
}
export default connect(mapStateToProps, {removeFavorite})(FavoriteMovieList);