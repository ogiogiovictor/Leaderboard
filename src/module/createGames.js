import API from './api.js';

class createGame {

    static postGame = async (e) => {
       
        e.preventDefault();

        const name = document.querySelector('#name');
        const score = document.querySelector('#score');
        const message = document.querySelector('#message')

        const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/B40y3Q2g4raVYYfX4Gif/scores/';

        if(!name.value){
            message.textContent = 'Please enter your name';
            return;
        }

        if(!score.value){
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