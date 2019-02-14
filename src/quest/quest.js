import quests from '../quests.js';
const json = window.localStorage.getItem('user');
if(!json) {
    window.location = '/';
}
const user = JSON.parse(json);
const completed = user.completed;

const searchParams = new URLSearchParams(window.location.search);

const questName = searchParams.get('name');
if(!questName) {
    window.location = '/map.html';
}

let quest = null;

for(let i = 0; i < quests.length; i++){
    if(quests[i].name === questName) {
        quest = quests[i];
        break;
    }
}

const titleNode = document.getElementById('quest-title');
titleNode.textContent = quest.title;

const audioNode = document.getElementById('audio');
const imageNode = document.getElementById('image');
imageNode.src = quest.image;
audioNode.src = quest.audio;


const descriptionNode = document.getElementById('description');
descriptionNode.textContent = quest.description;
const choicesNode = document.getElementById('choices-form');
const choices = quest.choices;
for(let i = 0; i < choices.length; i++) {
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = choices[i].id;
    radio.id = choices[i].id;
    radio.name = 'choices';
    radio.required = true;
    const label = document.createElement('label');
    label.innerHTML = choices[i].name + ' - ' + choices[i].description;
    label.for = choices[i].id;
    choicesNode.prepend(label);
    choicesNode.prepend(radio);
    choicesNode.prepend(document.createElement('br'));
}
const resultNode = document.getElementById('result');
choicesNode.addEventListener('submit', function(event) {
    event.preventDefault();
    const nextAdventureNode = document.getElementById('next');

    const formData = new FormData(choicesNode);

    const chosen = formData.get('choices');
    choicesNode.hidden = true;
    descriptionNode.hidden = true;
    let result = '';
    for(let i = 0; i < quest.choices.length; i++) {
        const choiceId = quest.choices[i].id;
        if(choiceId === chosen) {
            result = quest.choices[i].result;
            imageNode.src = quest.choices[i].image;
            audioNode.src = quest.choices[i].audio;
            user.hp += quest.choices[i].hp;
            user.gold += quest.choices[i].gold;
        }
    }
    
    resultNode.textContent = result;

    user.completed[questName] = true;
    nextAdventureNode.hidden = false;
    const jsonUpdate = JSON.stringify(user);
    window.localStorage.setItem('user', jsonUpdate);
    console.log(chosen);
});