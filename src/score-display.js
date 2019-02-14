// const json = window.localStorage.getItem('user');

// const user = JSON.parse(json);


function scoreDisplay(user) {
    const hpNode = document.getElementById('hp');
    
    hpNode.textContent = user.hp;
    
    const goldNode = document.getElementById('gold');
    
    goldNode.textContent = user.gold;
}

export default scoreDisplay;