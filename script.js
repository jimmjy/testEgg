
    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');

    var canvasTwo = document.getElementById('sunside');
    var c2 = canvasTwo.getContext('2d');

    //image variable
    var img = document.getElementById('egg');

    //pan canvas sizing
    canvas.width = 480;
    canvas.height = 320;
    
    //egg canvas sizing
    canvasTwo.width = 100;
    canvasTwo.height = 100;

    //holder variable
    let currentPosition = 0;

    //function reads orientation change, then
    //redraw with egg image in new location
    window.addEventListener('deviceorientation', (e) => {
        
        console.log(currentPosition);
        if (currentPosition > e.beta) {
            canvasTwo.style.top = `${canvasTwo.getBoundingClientRect().top + e.beta}px`;
            console.log('positive')
        } else {
            canvasTwo.style.top = `${canvasTwo.getBoundingClientRect().top - e.beta}px`;
            console.log('negative')
        }
        currentPosition = e.beta;
    });
