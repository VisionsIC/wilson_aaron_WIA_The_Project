/*
     Name: Aaron Wilson
     Date: October 28, 2015
     Class & Section:  WIA-1511
     Comments: "HTML5 Canvas Drawing"
 */

window.onload = function () {

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/

if ( Modernizr.canvas ) {

    var canvas_rect = document.getElementById ( "canvas_one" ),
        ctx_rect = canvas_rect.getContext ( "2d" );

    var canvas_circ = document.getElementById ( "canvas_two" ),
        ctx_circ = canvas_circ.getContext ( "2d" );

    var canvas_star = document.getElementById ( "canvas_three" ),
        ctx_star = canvas_star.getContext ( "2d" );

    var canvas_bzr = document.getElementById ( "canvas_four" ),
        ctx_bzr = canvas_bzr.getContext ("2d");

    var canvas_txt = document.getElementById ( "canvas_five" ),
        ctx_txt = canvas_txt.getContext ( "2d" );

    var canvas_img = document.getElementById ( "canvas_six" ),
        ctx_img = canvas_img.getContext ( "2d" );

    var canvas_scene = document.getElementById ( "canvas_seven" ),
        ctx_scene = canvas_scene.getContext ( "2d" );

/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message
/*******************************************

PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.
Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
if ( canvas_rect && ctx_rect ) {
    ctx_rect.strokeStyle = "black";
    ctx_rect.fillStyle = "blue";

    ctx_rect.fillRect ( 0, 0, 50, 100 );
    ctx_rect.strokeRect ( 0, 0, 50, 100 );
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.
Reminder - set the style first then draw.
Use the arc method
********************************************/

//Draw Circle here

if ( canvas_circ && ctx_circ ) {
    ctx_circ.strokeStyle = "black";
    ctx_circ.fillStyle = "rgba( 255, 0, 0, .5 )";

    ctx_circ.beginPath ();
    ctx_circ.arc ( 50, 50, 20, 0, 2 * Math.PI, false );
    ctx_circ.fill ();

    ctx_circ.beginPath ();
    ctx_circ.arc ( 50, 50, 30, 0, 2 * Math.PI, false);
    ctx_circ.stroke ();
}

/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)
Height and width and color are up to you.
********************************************/

//Draw Star here
if ( canvas_star && ctx_star ) {
    ctx_star.strokeStyle = "Darkblue";
    ctx_star.fillStyle = "Lightyellow";
    ctx_star.beginPath ();

    ctx_star.moveTo ( 100, 100 );
    ctx_star.lineTo ( 210, 100 );
    ctx_star.lineTo ( 250, 40 );
    ctx_star.lineTo ( 290, 100 );
    ctx_star.lineTo ( 400, 100 );
    ctx_star.lineTo ( 300, 150 );
    ctx_star.lineTo ( 350, 250 );
    ctx_star.lineTo ( 250, 185 );
    ctx_star.lineTo ( 150, 250 );
    ctx_star.lineTo ( 200, 150 );
    ctx_star.lineTo ( 100, 100 );

    ctx_star.closePath ();
    ctx_star.fill ();
    ctx_star.stroke ();
}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.
Position, height, width and color are your choice.
Do not overlap any other object.
********************************************/

//Draw Umbrella top here
if ( canvas_bzr && ctx_bzr ) {

        ctx_bzr.beginPath ();
        ctx_bzr.arc ( 200, 150, 105, Math.PI, 0 );
        ctx_bzr.strokeStyle = 'black';
        ctx_bzr.stroke ();
        ctx_bzr.beginPath ();
        ctx_bzr.strokeStyle = 'black';
        ctx_bzr.lineWidth = 1;
        ctx_bzr.moveTo ( 95, 150 );
        ctx_bzr.bezierCurveTo ( 95, 150, 132, 120, 167, 150 );
        ctx_bzr.stroke ();
        ctx_bzr.beginPath ();
        ctx_bzr.strokeStyle = 'black';
        ctx_bzr.lineWidth = 1;
        ctx_bzr.moveTo ( 167, 150 );
        ctx_bzr.bezierCurveTo ( 167, 150, 197, 120, 232, 150 );
        ctx_bzr.stroke ();
        ctx_bzr.beginPath ();
        ctx_bzr.strokeStyle = 'black';
        ctx_bzr.lineWidth = 1;
        ctx_bzr.moveTo ( 232, 150 );
        ctx_bzr.bezierCurveTo ( 232, 150, 267, 120, 305, 150 );
        ctx_bzr.stroke ();
        ctx_bzr.beginPath ();
        ctx_bzr.strokeStyle = 'black';
        ctx_bzr.lineWidth = 4;
        ctx_bzr.moveTo ( 200, 138 );
        ctx_bzr.bezierCurveTo ( 200, 138, 200, 270, 175, 210 );
        ctx_bzr.stroke ();
        ctx_bzr.beginPath ();
        ctx_bzr.strokeStyle = 'black';
        ctx_bzr.lineWidth = 1;
        ctx_bzr.moveTo ( 200, 45 );
        ctx_bzr.bezierCurveTo ( 200, 45, 160, 82.5, 167, 150 );
        ctx_bzr.stroke (); 
        ctx_bzr.beginPath ();
        ctx_bzr.strokeStyle = 'black';
        ctx_bzr.lineWidth = 1;
        ctx_bzr.moveTo( 200, 45 );
        ctx_bzr.bezierCurveTo ( 200, 45, 240, 82.5, 233, 150 );
        ctx_bzr.stroke ();
    }

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.
********************************************/

//Draw text here
if ( canvas_txt && ctx_txt ) {

    var display_text = "Canvas Is Awesome!";

    ctx_txt.shadowColor = "hsla(244, 80%, 00%, 0.5)";
    ctx_txt.shadowBlur = 10;
    ctx_txt.shadowOffsetX = 10;
    ctx_txt.shadowOffsetY = 10;
    ctx_txt.font = "4em Verdana";
    ctx_txt.fillStyle = "hsla(254, 80%, 60%, 0.5)";
    ctx_txt.strokeStyle = "hsla(254, 20%, 60%, 0.5)";
    ctx_txt.textBaseline = "middle";
    ctx_txt.fillText ( display_text, 8, 70 );
    ctx_txt.strokeText ( display_text, 8, 70 );
}

/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.
Reminder to use the drawImage method for all 3 of the ways.
********************************************/

//Draw images here
if ( canvas_img && ctx_img ) {

    var logo_img = document.getElementById ( "logo" );
    ctx_img.drawImage ( logo_img, 0, 0 );
    ctx_img.drawImage ( logo_img, 0, 1088, 1650, 544 );
    ctx_img.drawImage ( logo_img, 280, 600, 470, 420, 0, 2000, 240, 400 );

}

/*******************************************
PART 7

Putting it all together. 
Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.
********************************************/

// Draw scene here

if ( canvas_scene && ctx_scene ) {

    drawCanvas('canvas_seven');

    function oval (ctx_scene, x, y, w, h) {
        ctx_scene.save();
        ctx_scene.beginPath();
        ctx_scene.translate(x, y);
        ctx_scene.scale(w/2, h/2);
        ctx_scene.arc(1, 1, 1, 0, 2*Math.PI, false);
        ctx_scene.closePath();
        ctx_scene.restore();
    }

    function arc(ctx_scene, x, y, w, h, startAngle, endAngle, isClosed) {
        ctx_scene.save();
        ctx_scene.beginPath();
        ctx_scene.translate(x, y);
        ctx_scene.scale(w/2, h/2);
        ctx_scene.arc(1, 1, 1, Math.PI/180*startAngle, Math.PI/180*endAngle, false);

        if (isClosed) {
            ctx_scene.lineTo(1, 1);
            ctx_scene.closePath();
        }

        ctx_scene.restore();
    }

    function makeRect(x, y, w, h) {
        return { x: x, y: y, w: w, h: h };
    }

    function drawCanvas() {

        // Color Declarations
        var black_hue = 'rgba(0, 0, 0, 1)';
        var orange_hue = 'rgba(226, 151, 0, 1)';
        var brown_hue = 'rgba(109, 73, 0, 1)';
        var green_hue = 'rgba(56, 168, 0, 1)';
        var yellow_hue = 'rgba(226, 226, 0, 1)';
        var ltblue_hue = 'rgba(0, 73, 109, 1)';
        var drkblue_hue = 'rgba(0, 36, 109, 1)';
        var ltyellow_hue = 'rgba(255, 255, 146, 1)';
        var crimson_hue = 'rgba(51, 0, 0, 1)';
        var cantalope_hue = 'rgba(255, 180, 29, 1)';
        var brown_shadow = 'rgba(92, 69, 19, 1)';

        // Shadow Declarations
        function reflection(ctx_scene)
        {
            ctx_scene.shadowOffsetX = 3;
            ctx_scene.shadowOffsetY = 3;
            ctx_scene.shadowBlur = 9.5;
            ctx_scene.shadowColor = 'rgba(226, 151, 0, 0.37)';
        }
        function orange(ctx_scene)
        {
            ctx_scene.shadowOffsetX = 9;
            ctx_scene.shadowOffsetY = 4;
            ctx_scene.shadowBlur = 5;
            ctx_scene.shadowColor = brown_shadow;
        }

        // Abstracted Attributes
        var halloween_content = 'Trick Or Treat!';

        // pumpkin_scene_1
        // pumpkin_scene_2
        // background
        // Rectangle Drawing
        ctx_scene.beginPath();
        ctx_scene.rect(-0.5, 0.5, 300, 188);
        ctx_scene.fillStyle = drkblue_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = ltblue_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // grass_right Drawing
        ctx_scene.beginPath();
        ctx_scene.moveTo(298.5, 191.5);
        ctx_scene.lineTo(292.5, 182.5);
        ctx_scene.lineTo(294.5, 191.5);
        ctx_scene.lineTo(286.5, 183.5);
        ctx_scene.lineTo(284.5, 191.5);
        ctx_scene.bezierCurveTo(284.5, 191.5, 281.88, 171.34, 281.5, 172.5);
        ctx_scene.bezierCurveTo(281.12, 173.66, 279.5, 189.5, 279.5, 189.5);
        ctx_scene.lineTo(267.5, 175.5);
        ctx_scene.lineTo(272.5, 188.5);
        ctx_scene.lineTo(258.5, 179.5);
        ctx_scene.lineTo(268.5, 189.5);
        ctx_scene.lineTo(247.5, 174.5);
        ctx_scene.lineTo(257.5, 187.5);
        ctx_scene.lineTo(246.5, 184.5);
        ctx_scene.lineTo(242.5, 189.5);
        ctx_scene.lineTo(244.5, 176.5);
        ctx_scene.lineTo(237.5, 186.5);
        ctx_scene.lineTo(227.5, 179.5);
        ctx_scene.lineTo(220.5, 187.5);
        ctx_scene.lineTo(227.5, 173.5);
        ctx_scene.lineTo(212.5, 189.5);
        ctx_scene.bezierCurveTo(212.5, 189.5, 214.33, 174.65, 213.5, 175.5);
        ctx_scene.fillStyle = green_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = green_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // grass_left Drawing
        ctx_scene.beginPath();
        ctx_scene.moveTo(84.5, 181.5);
        ctx_scene.lineTo(78.5, 172.5);
        ctx_scene.lineTo(80.5, 181.5);
        ctx_scene.lineTo(72.5, 173.5);
        ctx_scene.lineTo(70.5, 181.5);
        ctx_scene.bezierCurveTo(70.5, 181.5, 67.88, 161.34, 67.5, 162.5);
        ctx_scene.bezierCurveTo(67.12, 163.66, 65.5, 179.5, 65.5, 179.5);
        ctx_scene.lineTo(53.5, 165.5);
        ctx_scene.lineTo(58.5, 178.5);
        ctx_scene.lineTo(44.5, 169.5);
        ctx_scene.lineTo(54.5, 179.5);
        ctx_scene.lineTo(33.5, 164.5);
        ctx_scene.lineTo(43.5, 177.5);
        ctx_scene.lineTo(32.5, 174.5);
        ctx_scene.lineTo(28.5, 179.5);
        ctx_scene.lineTo(30.5, 166.5);
        ctx_scene.lineTo(23.5, 176.5);
        ctx_scene.lineTo(13.5, 169.5);
        ctx_scene.lineTo(6.5, 177.5);
        ctx_scene.lineTo(13.5, 163.5);
        ctx_scene.lineTo(-1.5, 179.5);
        ctx_scene.bezierCurveTo(-1.5, 179.5, 0.33, 164.65, -0.5, 165.5);
        ctx_scene.fillStyle = green_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = green_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // grass_mid_rght Drawing
        ctx_scene.beginPath();
        ctx_scene.moveTo(213.5, 186.5);
        ctx_scene.lineTo(207.5, 177.5);
        ctx_scene.lineTo(209.5, 186.5);
        ctx_scene.lineTo(201.5, 178.5);
        ctx_scene.lineTo(199.5, 186.5);
        ctx_scene.bezierCurveTo(199.5, 186.5, 196.88, 166.34, 196.5, 167.5);
        ctx_scene.bezierCurveTo(196.12, 168.66, 194.5, 184.5, 194.5, 184.5);
        ctx_scene.lineTo(182.5, 170.5);
        ctx_scene.lineTo(187.5, 183.5);
        ctx_scene.lineTo(173.5, 174.5);
        ctx_scene.lineTo(183.5, 184.5);
        ctx_scene.lineTo(162.5, 169.5);
        ctx_scene.lineTo(172.5, 182.5);
        ctx_scene.lineTo(161.5, 179.5);
        ctx_scene.lineTo(157.5, 184.5);
        ctx_scene.lineTo(159.5, 171.5);
        ctx_scene.lineTo(152.5, 181.5);
        ctx_scene.lineTo(142.5, 174.5);
        ctx_scene.lineTo(135.5, 182.5);
        ctx_scene.lineTo(142.5, 168.5);
        ctx_scene.lineTo(127.5, 184.5);
        ctx_scene.bezierCurveTo(127.5, 184.5, 129.33, 169.65, 128.5, 170.5);
        ctx_scene.fillStyle = green_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = green_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // stem Drawing
        ctx_scene.beginPath();
        ctx_scene.moveTo(181.5, 70.5);
        ctx_scene.bezierCurveTo(160.5, 60.5, 161.5, 59.5, 161.5, 59.5);
        ctx_scene.lineTo(157.5, 45.5);
        ctx_scene.lineTo(144.5, 48.5);
        ctx_scene.lineTo(144.5, 59.5);
        ctx_scene.lineTo(144.5, 59.5);
        ctx_scene.lineTo(140.5, 65.5);
        ctx_scene.lineTo(127.5, 68.5);
        ctx_scene.save();

        reflection(ctx_scene);

        ctx_scene.fillStyle = green_hue;
        ctx_scene.fill();
        ctx_scene.restore();
        ctx_scene.strokeStyle = black_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // pumpkin Drawing
        oval(ctx_scene, 75.5, 67.5, 153, 112);
        ctx_scene.save();

        reflection(ctx_scene);

        ctx_scene.fillStyle = orange_hue;
        ctx_scene.fill();
        ctx_scene.restore();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1.5;
        ctx_scene.stroke();

        // pumpkin_lines_lft
        // pump_line_8 Drawing
        arc(ctx_scene, 89.5, 75.5, 47, 95, 113, 274, false);
        ctx_scene.fillStyle = orange_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // pump_line_7 Drawing
        arc(ctx_scene, 106.5, 68.5, 47, 111, 113, 274, false);
        ctx_scene.fillStyle = orange_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // pump_line_6 Drawing
        arc(ctx_scene, 121.5, 67.5, 49, 116, 113, 274, false);
        ctx_scene.fillStyle = orange_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // pump_line_5 Drawing
        arc(ctx_scene, 139.5, 67.5, 27, 116, 113, 274, false);
        ctx_scene.fillStyle = orange_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // pumpkin_scene_all
        // pump_line_4 Drawing
        arc(ctx_scene, 166.5, 75.5, 47, 95, 266, 67, false);
        ctx_scene.fillStyle = orange_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // pump_line_2 Drawing
        arc(ctx_scene, 149.5, 68.5, 47, 111, 266, 67, false);
        ctx_scene.fillStyle = orange_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // grass_base Drawing
        ctx_scene.beginPath();
        ctx_scene.moveTo(0.51, 173.5);
        ctx_scene.lineTo(-0.5, 199.5);
        ctx_scene.lineTo(300.5, 199.5);
        ctx_scene.lineTo(300.5, 186.08);
        ctx_scene.fillStyle = green_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = black_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // pump_line_1 Drawing
        arc(ctx_scene, 132.5, 67.5, 49, 116, 266, 67, false);
        ctx_scene.fillStyle = orange_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // pump_line_3 Drawing
        arc(ctx_scene, 138.5, 67.5, 27, 116, 266, 67, false);
        ctx_scene.fillStyle = orange_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // grass_mid_lft Drawing
        ctx_scene.beginPath();
        ctx_scene.moveTo(171.5, 184.5);
        ctx_scene.lineTo(165.5, 175.5);
        ctx_scene.lineTo(167.5, 184.5);
        ctx_scene.lineTo(159.5, 176.5);
        ctx_scene.lineTo(157.5, 184.5);
        ctx_scene.bezierCurveTo(157.5, 184.5, 154.88, 164.34, 154.5, 165.5);
        ctx_scene.bezierCurveTo(154.12, 166.66, 152.5, 182.5, 152.5, 182.5);
        ctx_scene.lineTo(140.5, 168.5);
        ctx_scene.lineTo(145.5, 181.5);
        ctx_scene.lineTo(131.5, 172.5);
        ctx_scene.lineTo(141.5, 182.5);
        ctx_scene.lineTo(120.5, 167.5);
        ctx_scene.lineTo(130.5, 180.5);
        ctx_scene.lineTo(119.5, 177.5);
        ctx_scene.lineTo(115.5, 182.5);
        ctx_scene.lineTo(117.5, 169.5);
        ctx_scene.lineTo(110.5, 179.5);
        ctx_scene.lineTo(100.5, 172.5);
        ctx_scene.lineTo(93.5, 180.5);
        ctx_scene.lineTo(100.5, 166.5);
        ctx_scene.lineTo(85.5, 182.5);
        ctx_scene.bezierCurveTo(85.5, 182.5, 87.33, 167.65, 86.5, 168.5);
        ctx_scene.fillStyle = green_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = green_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // mouth Drawing
        arc(ctx_scene, 110.5, 138.5, 83, 32, 0, -153, true);
        ctx_scene.fillStyle = yellow_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // left_eye Drawing
        arc(ctx_scene, 93.5, 94.5, 43, 31, 153, 0, true);
        ctx_scene.fillStyle = yellow_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // right_eye Drawing
        arc(ctx_scene, 167.5, 94.5, 43, 31, 180, 27, true);
        ctx_scene.fillStyle = yellow_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // nose Drawing
        ctx_scene.beginPath();
        ctx_scene.moveTo(152, 147.5);
        ctx_scene.lineTo(160.08, 134.37);
        ctx_scene.lineTo(157, 113.13);
        ctx_scene.lineTo(147, 113.13);
        ctx_scene.lineTo(143.92, 134.37);
        ctx_scene.closePath();
        ctx_scene.fillStyle = yellow_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = brown_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // moon Drawing
        oval(ctx_scene, 4.5, 2.5, 76, 72);
        ctx_scene.fillStyle = ltyellow_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = black_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // bat Drawing
        ctx_scene.beginPath();
        ctx_scene.moveTo(53.34, 28.24);
        ctx_scene.lineTo(49.6, 19.65);
        ctx_scene.lineTo(45.86, 25.02);
        ctx_scene.lineTo(42.12, 17.5);
        ctx_scene.lineTo(37.14, 26.09);
        ctx_scene.lineTo(19.7, 19.65);
        ctx_scene.lineTo(3.5, 28.24);
        ctx_scene.bezierCurveTo(3.5, 28.24, 15.73, 37.15, 14.71, 36.83);
        ctx_scene.bezierCurveTo(13.7, 36.52, 22.19, 32.54, 22.19, 32.54);
        ctx_scene.lineTo(34.65, 44.35);
        ctx_scene.lineTo(37.14, 38.98);
        ctx_scene.lineTo(47.11, 38.98);
        ctx_scene.lineTo(49.6, 46.5);
        ctx_scene.lineTo(59.57, 38.98);
        ctx_scene.lineTo(67.04, 43.28);
        ctx_scene.lineTo(79.5, 36.83);
        ctx_scene.lineTo(67.04, 21.8);
        ctx_scene.lineTo(53.34, 28.24);
        ctx_scene.closePath();
        ctx_scene.fillStyle = crimson_hue;
        ctx_scene.fill();
        ctx_scene.strokeStyle = black_hue;
        ctx_scene.lineWidth = 1;
        ctx_scene.stroke();

        // halloween Drawing
        var halloween_rect = makeRect(42, -24, 286, 104);
        ctx_scene.save();
        orange(ctx_scene);
        ctx_scene.fillStyle = cantalope_hue;
        ctx_scene.font = '42px PartyLetPlain, "Party LET", sans-serif';
        ctx_scene.textAlign = 'center';
        ctx_scene.fillText(halloween_content, halloween_rect.x + halloween_rect.w/2, halloween_rect.y + 58);
        ctx_scene.restore();
    }
}
}
};
