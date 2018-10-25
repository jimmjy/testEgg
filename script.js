//setup canvas
    var canvas = document.getElementById('canvas');
    var c = canvas.getContext('2d');


    var img = new Image();
    img.src = './images/egg.png';

    //
    canvas.width = 320;
    canvas.height = 480;

    c.beginPath();
    c.drawImage(img, 120, 200, 80, 80);
    

    //default holder variables to prevent egg from dropping off
    let currentGamma = 0;
    let currentBeta = 0;

    //read event from device tilting axis
    window.addEventListener('deviceorientation', function (e) {
        c.clearRect(0,0,canvas.width,canvas.height);
        if (e.gamma > -37 && e.gamma < 22 && e.beta < 52 && e.beta > -62) {
            currentGamma = e.gamma;
            currentBeta = e.beta;
            c.drawImage(img, 120 + e.gamma * 3, 240 + e.beta * 3, 80, 80);
        } else {
            c.drawImage(img, 120 + currentGamma * 3, 240 + currentBeta * 3, 80, 80);
        }
    });

    