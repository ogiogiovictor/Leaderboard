import API from './api.js';

class GetGames {
 static games = async () => {
   const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/B40y3Q2g4raVYYfX4Gif/scores/';
   const getData = await API.getdata(url);

   const { result } = getData;

   const displayGames = document.querySelector('#leader-table');
   let gameDisplay = '';

   if (result.length > 0) {
     const sortedArray = result.sort((a, b) => a.user.localeCompare(b.user));

     sortedArray.map((el) => {
       if (typeof el.score !== 'object') {
         gameDisplay += `
            <tr>
                <td>${el.user}</td>
                <td>${el.score}</td>
            </tr>
            `;
       }
       return el;
     });
     displayGames.innerHTML = gameDisplay;
     document.querySelector('.loader').style.display = 'none';
   } else {
     displayGames.textContent = 'No Game Scores';
     document.querySelector('.loader').style.display = 'none';
   }
 }
}

export default GetGames;