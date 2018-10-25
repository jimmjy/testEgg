
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
    c.drawImage(img, 130, 200, 80, 80);

    window.addEventListener('deviceorientation', (e) => {
        c.clearRect(0,0,canvas.width,canvas.height);
        c.beginPath();
        c.drawImage(img, 130 + e.alpha, 200 + e.beta, 80, 80);
    });
    