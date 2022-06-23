import API from './api.js';

class createGame {

    static postGame = async (e) => {
        return e;
       // e.preventDefault();

        const name = document.querySelector('#name');
        const score = document.querySelector('#socre');
        const message = document.querySelector('#message')

        const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOTTVg2fUdz/scores/';

        if(!name){
            message.textContent = 'Please enter your name';
            return;
        }

        if(!score){
            message.textContent = 'Please enter a score';
            return;
        }

        const mbody = {
            user: name.value,
            score: score.value
        }

        const postGamesApi = await API.postGames(url, mbody);
        const { result } = postGamesApi;
        message.textContent = result;
        name.value = '';
        score.value = '';
    }
}

export default createGame;