

//Base url. Every request is going to have this url.
const base_url = "https://api.rawg.io/api/";


//getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    }else {
        return month;
    }    
    
}


const getCurrentDay = () => {
    const day = new Date().getDate() + 1;
    if (day < 10) {
        return `0${day}`;
    }else {
        return day;
    }    
    
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();


const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const apiKey = "&key=b5b67f0b1f294644b4ae11a71dfa6542";

//popular games from last year to now.
//&ordering=-rating -> order by rating, highest rating will show first.
//&page_size=10 -> how many to fetch.
//&ordering=-added -> order by date added.
const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10${apiKey}`;
const upcomingGames = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10${apiKey}`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10${apiKey}`;

export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;

//Game Details 
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=b5b67f0b1f294644b4ae11a71dfa6542`;

//Screenshots 
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=b5b67f0b1f294644b4ae11a71dfa6542`;

//Search Game
export const searchGameURL = (game_name) => `${base_url}games?search=${game_name}&page_size=9${apiKey}`;