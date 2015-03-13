var canvas, ctx;
$(document).ready(function() {
    if (canvas = $('#canvas')[0]) {
        ctx = canvas.getContext('2d');
        canvas.width = 768;
        canvas.height = 640;

        var clearCanvas = function () {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        };

        //snow
        var eng = {
            type: 'snow',
            x: 384,
            y: -200,
            count: 200,
            radius: 400
        };

        pEng.init(canvas, ctx);

        function update(mod) {
            //make some particles
            pEng.createParticles(eng.type, eng.x, eng.y, eng.count, eng.radius);

            //update particles
            pEng.update(mod);
        }

        function render() {
            requestAnimationFrame(render);

            //clear canvas
            clearCanvas();

            //draw particles
            pEng.draw();

            //draw fps
            pEng.fps.draw();

            //dynamic background
            $('.bg').attr('src', canvas.toDataURL());
        }

        function tick() {
            update((Date.now() - lastTick) / 1000);
            lastTick = Date.now();
        }

        //var lastTick = Date.now();
        //setInterval(tick, 24); //30fps
        //render();
    }
});