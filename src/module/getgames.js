import API from './api.js';

class GetGames {

 static games = async () => {
     
    //https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/fxcnsYcJrkT4mY83CQhy/scores/
    const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';
    const getData = await API.getdata(url);
      
    const { result } = getData;
   
    const displayGames = document.querySelector('#leader-table');
    let gameDisplay = '';

     if(result.length > 0 ){
       const sortArray = result.sort((a, b) => b.user - a.user);
      //const sortedArray = result.sort((a, b) => a.user.localeCompare(b.user));
        
       sortArray.map(el => {
        if(typeof el.score !== 'object'){
            gameDisplay += `
            <tr>
                <td>${el.user}</td>
                <td>${el.score}</td>
            </tr>
            `;
        //return el;
        }
       
       })
       displayGames.innerHTML = gameDisplay;
       document.querySelector('.loader').style.display='none';
     }else{
        displayGames.textContent = 'No Scores';
     }
   
    }

}

export default GetGames;