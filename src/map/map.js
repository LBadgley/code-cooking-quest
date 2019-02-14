import quests from '../quests.js';

const questLinksNode = document.getElementById('quest-links');
for(let i = 0; i < quests.length; i++) {
    const li = document.createElement('li');

    const link = document.createElement('a');
    link.href = './quest.html?name=' + encodeURIComponent(quests[i].name);
    link.textContent = quests[i].title;
    li.appendChild(link);
    questLinksNode.appendChild(li);
}