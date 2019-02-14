

const flamingoChoice = {
    id: 'flamingo',
    name: 'Pinky',
    description: 'A beautiful plastic pink flamingo',
    result: 'He looks friendly, but he gets his color from drinking your blood. You are his next victim, lose 30 HP',
    hp: -30,
    gold: 0,
    image: '../assets/flamingo.jpg',
    audio: '../assets/sfx/flamingo.wav'
};

const pixieChoice = {
    id: 'pixie',
    name: 'Pixie Mattel',
    description: 'The cutest little pixie',
    result: 'Pixie Mattel may be small, but she is actually the toughest out of all the creatures. She tricks you out of 20 gold in exchange for safe passage through the forest and 50 HP',
    hp: 50,
    gold: -20,
    image: '../assets/pixie.jpeg',
    audio: '../assets/sfx/pixie.wav'
};

const eastonChoice = {
    id: 'easton',
    name: 'Easton',
    description: 'A brilliant sorcerers apprentice',
    result: 'You quickly and efficiently get through the forest unscathed, gaining valuable skills along the way. Gain 35 HP and 80 gold',
    hp: 35,
    gold: 80,
    image: '../assets/easton.jpg',
    audio: '../assets/sfx/easton.wav'
};

const fizzyLiftingChoice = {
    id: 'fizzy',
    name: 'Fizzy Lifting Drink',
    description: 'A bubbling liquid, swirls within a brightly colored bottle.',
    result: 'You pay 5 gold to a vendor for a floating potion. A few swigs of the potion leaves you feeling elated, but ultimately just as heavy as you were before. Decieved by the claims on the label, you fall to the ground and lose 50HP.', 
    hp: -50,
    gold: -5, 
    image: '../assets/fizzy.jpeg',
    audio: '../assets/sfx/fizzy.wav'
};

const flyingCarpetChoice = {
    id: 'carpet',
    name: 'Dr. Magic Carpet',
    description: 'A door mat held aloft by four African Swallows',
    result: 'The Swallows can hold your weight for a time just emough to grab a giant golden egg from the rare giant golden eagle nest... gain 1 golden egg equivalent to 60 gold coins. The moist, clean air revitalizes you and you gain 10 health.', 
    hp: 10,
    gold: 60,
    image: '../assets/magiccarpet.jpeg',
    audio: '../assets/sfx/carpet.wav'
};

const pterodactylChoice = {
    id: 'dino',
    name: 'Ptommy Pterodactyl',
    description: 'This jovial-looking prehistoric behemoth saunters up and offers you a ride.',
    result: 'Ptommy\'s services are free, but he is a dangerous driver. You descend too fast and rupture your eardrums on the way down, losing 30 HP.',
    hp: -30,
    gold: 0,
    image: '../assets/ptommy.jpeg',
    audio: '../assets/sfx/dino.wav'
};

const forest = {
    name: 'forest',
    id: 'forest',
    title: 'Enchanted Forest',
    image: '../assets/forest.jpeg',
    audio: '../assets/sfx/forest.wav', 
    description: 'You find yourself in a forest bathed in moonlight where the magical creatures live. Danger lurks! Choose a creature to guide you to safety.',
    choices: [flamingoChoice, pixieChoice, eastonChoice]
};

const clouds = {
    name: 'clouds',
    id: 'clouds',
    title: 'Fluffy Clouds',
    image: '../assets/clouds.jpg',
    audio: '../assets/sfx/wind.wav',
    description: 'You climb a beanstalk and find a gorgeous city in the clouds. Unfortunately, clouds cannot support your body weight so you might fall to your death at any moment. Quickly find a way to stay afloat.',
    choices: [fizzyLiftingChoice, flyingCarpetChoice, pterodactylChoice]

};

const quests = [forest, clouds];

export default quests;