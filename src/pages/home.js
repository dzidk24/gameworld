import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

//components
import Game from "../components/game";
import GameDetail from "../components/gameDetail";


//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";
import {useLocation} from "react-router-dom";

const Home = () => {

    //get the current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    
    const dispatch = useDispatch();
  useEffect(() => { 
      dispatch(loadGames());
  }, [dispatch]);

  //get data from the store. 
  //was: const games = useSelector((state) => state.games);
  const { popular, newGames, upcoming, searched } = useSelector((state) => state.games);
  console.log(searched);
    
    return(
        <GameList>
            
             {pathId && <GameDetail pathId={pathId} />}
             
               {searched.length ? (
               <div>
                <h2>Searched Games</h2>
                <Games>
                     {searched.map(game => (
                       <Game name={game.name} rating={game.rating} id={game.id} image={game.background_image} key={game.id} />
                     ))}
                </Games>
                </div>) : ("") }
             
             <h2>Upcoming Games</h2>
             <Games>
                 {upcoming.map(game => (
                 <Game name={game.name} rating={game.rating} id={game.id} image={game.background_image} key={game.id} screenshots={game.short_screenshots}/>
                 ))}
             </Games>
             <h2>Popular Games</h2>
             <Games>
                 {popular.map(game => (
                 <Game name={game.name} rating={game.rating} id={game.id} image={game.background_image} key={game.id} />
                 ))}
             </Games>
             <h2>New Games</h2>
             <Games>
                 {newGames.map(game => (
                 <Game name={game.name} rating={game.rating} id={game.id} image={game.background_image} key={game.id} screenshots={game.short_screenshots}/>
                 ))}
             </Games>
            
        </GameList>
    ); 
}


const GameList = styled(motion.div)`
     padding: 0rem 5rem;
     h2 {
         padding: 5rem 0rem;
     }
    
`;

//min-height: 80vh; -> set min height, dependant on how many games fill up. remember its individual <Game /> populating the page
//display: grid; -> arrange the <Games />'s in a grid format. a grid of games
//grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); -> Goes with display grid. Each column is each game. Just keep repeating them one after the other. auto-fit and each column sholud 500px of space. 1fr -> if there is not enough space then take up the rest of the space. this means if you make the window smaller and a column cannot fing 500px of space, just to next line and expand as musch as possible to fit. End up with a really nice responsive layout.
//grid-column-gap: 3rem; -> spaces between the columns
//grid-row-gap: 5rem;  -> spaces between the rows. 
const Games = styled(motion.div)`
   min-height: 80vh; 
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
   grid-column-gap: 3rem;
   grid-row-gap: 5rem;
`;


export default Home;