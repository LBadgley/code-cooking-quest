import scoreDisplay from '../score-display.js';
const header = document.getElementById('header');
const fate = document.getElementById('fate');

const json = window.localStorage.getItem('user');
if(!json) {
    window.location = '/';
}
const user = JSON.parse(json);
scoreDisplay(user);

const hp = user.hp;
const gold = user.gold;
const name = user.name;
const race = user.race;

let headerMsg = '';
let fateMsg = '';
if(hp <= 0) {
    headerMsg = 'Sorry ' + name + ', you did not survive your quest. You\'re dead.';
    header.textContent = headerMsg;
}
else {
    headerMsg = 'Congratulations, ' + name + ', you survived!';
    header.textContent = headerMsg;
    fateMsg = 'You are ';
    if(hp < 65) {
        fateMsg += 'in frail health. ';
    }
    else if(hp < 100) {
        fateMsg += 'in good health. ';
    }
    else {
        fateMsg += 'strong as an ox. ';
    }
    if(gold < 0) {
        fateMsg += ' Unfortunately, you are sent to debtor\'s prison where you are worked to the bone for the remainder of your miserable life.'
    }
    else if(gold < 15) {
        fateMsg += ' You remain in poverty where you began.';
    }
    else if(gold < 90) {
        fateMsg += ' You are a member of the disappearing middle class (for now).'
    }
    else {
        fateMsg += ' You retire in luxury, having amassed a great fortune, scoffing at the plebes.'
    }

    fate.textContent = fateMsg;
    
    
    window.localStorage.removeItem('user');
}
