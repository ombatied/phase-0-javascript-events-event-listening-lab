function addingEventListener() {
    const input = document.getElementById('input');
    //call back function
    function clickAlert() {
        alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
};
