import axios from 'axios';
import {popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL} from '../api';


//Action creator
export const loadGames = () => async (dispatch) => {
      //FETCH AXIOS

      
      const popularData = await axios.get(popularGamesURL());
      const newGamesData = await axios.get(newGamesURL());
      const upcomimgData = await axios.get(upcomingGamesURL());
       


      console.log(newGamesData);
      console.log(upcomimgData);
      
      dispatch({
          type: "FETCH_GAMES",
          payload: {
              popular: popularData.data.results,
              newGames: newGamesData.data.results,
              upcoming: upcomimgData.data.results
            },
        });
};

export const fetchSearch = (game_name) => async (dispatch) => {

    const searchGames = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
             searched: searchGames.data.results
        }
    });

};