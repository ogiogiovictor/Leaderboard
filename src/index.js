// import _ from 'lodash';
import './style.css';
import GetGames from './module/getgames.js';
import createGame from './module/createGames.js';

const refresh = document.getElementById('refresh');

const games = GetGames.games();

refresh.addEventListener('click', () => GetGames.games());

const createGameBtn = document.getElementById('postBtn');
createGameBtn.addEventListener('click', (e) => createGame.postGame(e));

document.addEventListener('DOMContentLoaded', games);
