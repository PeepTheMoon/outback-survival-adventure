import { getUser } from '../data/api.js';

function loadProfile () {
    // get necessry dom elements
    const character = document.getElementById('character');
    const name = document.getElementById('name');
    const hp = document.getElementById('hp');
    const sustenence = document.getElementById('sustenence');
    
    // load user and parse from local storage
    const user = getUser();

    // if no user
    if (!user) {
        // take back to sign in page
        window.location = './';
    }

    // copy user object data to dom properties
    name.textContent = user.name;
    sustenence.textContent = user.sustenence;
    character.src = 
}