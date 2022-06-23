// import _ from 'lodash';
import './style.css';
import GetGames from './module/getgames.js';
import createGame from './module/createGames.js';

const refresh = document.getElementById('refresh');

const games = GetGames.games();

refresh.addEventListener('click', games)

const createGameBtn = document.getElementById('postBtn');
createGameBtn.addEventListener('click', () => createGame.postGame());


document.addEventListener('DOMContentLoaded', games);
