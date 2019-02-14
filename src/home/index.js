const formNode = document.getElementById('sign-in');

formNode.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formNode);
    const name = formData.get('name');
    const user = {
        name: name,
        race: formData.get('race')
    };
    const json = JSON.stringify(user);
    window.localStorage.setItem('user', json);
    window.location = '/map.html';
});
