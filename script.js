
    // var canvas = document.getElementById('canvas');
    // var c = canvas.getContext('2d');

    // var canvasTwo = document.getElementById('sunside');
    // var c2 = canvasTwo.getContext('2d');

    // //image variable
    // var img = document.getElementById('egg');

    // //pan canvas sizing
    // canvas.width = 480;
    // canvas.height = 320;
    
    // //egg canvas sizing
    // canvasTwo.width = 100;
    // canvasTwo.height = 100;

    // //holder variable
    // // let initialY = ;

    // //function reads orientation change, then
    // //redraw with egg image in new location
    // window.addEventListener('deviceorientation', (e) => {
        
    //     console.log(currentPosition);
    //     if (currentPosition > e.beta) {
    //         canvasTwo.style.top = `${canvasTwo.getBoundingClientRect().top + e.beta}px`;
    //         console.log('positive')
    //     } else {
    //         canvasTwo.style.top = `${canvasTwo.getBoundingClientRect().top - e.beta}px`;
    //         console.log('negative')
    //     }
    //     currentPosition = e.beta;
    // });

    //
    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');

    var img = new Image();
    img.src = './images/egg.png';

    //
    canvas.width = 320;
    canvas.height = 480;

    c.beginPath();
    c.drawImage(img, 120, 200, 80, 80);
    

    //default to hold edge
    let currentGamma = 0;
    let currentBeta = 0;

    window.addEventListener('deviceorientation', function (e) {
        e.preventDefault();
        c.clearRect(0,0,canvas.width,canvas.height);
        if (e.gamma > -37 && e.gamma < 22 && e.beta < 52 && e.beta > -62) {
            currentGamma = e.gamma;
            currentBeta = e.beta;
            c.drawImage(img, 120 + e.gamma * 3, 240 + e.beta * 3, 80, 80);
        } else {
            c.drawImage(img, 120 + currentGamma * 3, 240 + currentBeta * 3, 80, 80);
        }
    });

    