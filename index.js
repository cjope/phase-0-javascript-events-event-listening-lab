const input = document.getElementById('input')

function addingEventListener() {
    function clickAlert() {
        alert('I was clicked!');
    }
    return input.addEventListener('click',clickAlert);
}
