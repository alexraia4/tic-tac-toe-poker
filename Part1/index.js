function play() {
    let player = document.getElementById('player');
    console.log(player);
    if(player.innerText === 'X'){
        player.innerText = 'O'
    }
    else {
        player.innerText = 'X'
    }
    
}


//console.log(window);