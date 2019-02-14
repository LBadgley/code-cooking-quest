import quests from '../quests.js';
import scoreDisplay from '../score-display.js';
const json = window.localStorage.getItem('user');
if(!json) {
    window.location = '/';
}
const user = JSON.parse(json);
const completed = user.completed;
if(completed.clouds && completed.forest) {
    window.location = 'end.html';
}
scoreDisplay(user);


const questLinksNode = document.getElementById('quest-links');
for(let i = 0; i < quests.length; i++) {
    if(completed.forest) {
        if(quests[i].name === 'forest') {
            continue;
        }
    }
    if(completed.clouds) {
        if(quests[i].name === 'clouds') {
            break;
        }
    }
    const li = document.createElement('li');

    const link = document.createElement('a');
    link.href = './quest.html?name=' + encodeURIComponent(quests[i].name);
    link.textContent = quests[i].title;
    li.appendChild(link);
    questLinksNode.appendChild(li);
}