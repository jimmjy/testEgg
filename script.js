
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
    c.clearRect(0,0,canvas.width,canvas.height);
    c.beginPath();
    c.strokeStyle = 'red';
    c.arc(160, 240, 160, 0, 2*Math.PI, false);
    c.stroke();

    //default to hold edge
    let currentAlpha = 0;

    window.addEventListener('deviceorientation', function (e) {
        c.clearRect(0,0,canvas.width,canvas.height);
        if (e.alpha > -42 && e.alpha < 29) {
            currentAlpha = e.alpha;
            c.drawImage(img, 160 + e.alpha * 3, 240 + e.beta * 3, 80, 80);
        } else {
            c.drawImage(img, 130 + currentAlpha * 3, 200 + e.beta * 3, 80, 80);
        }
    });

    