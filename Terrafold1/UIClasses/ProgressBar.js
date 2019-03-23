function ProgressBar(id, color) {

    this.tick = function(ticks, ticksNeeded) {
        let percentage = (ticks / ticksNeeded);
        this.reset(this.aProgress);
        drawProgress(this.aProgress, percentage, this.color);
    };

    this.reset = function(bar) {
        let barCTX = bar.getContext("2d");
        barCTX.lineCap = 'square';

        barCTX.beginPath();
        barCTX.lineWidth = 8;
        barCTX.fillStyle = '#fff';
        barCTX.arc(35, 35, 25, 0, 2 * Math.PI);
        barCTX.fill();
    };

    this.aProgress = document.getElementById(id);
    this.color = color;
}


function drawProgress(bar, percentage, color) {
    let barCTX = bar.getContext("2d");
    let quarterTurn = Math.PI / 2;
    let endingAngle = ((2 * percentage * .95) * Math.PI) - quarterTurn * .9; //.985 because lineWidth
    let startingAngle = 0 - quarterTurn * .9;

    barCTX.lineCap = 'square';

    barCTX.beginPath();
    barCTX.lineWidth = 8;
    barCTX.strokeStyle = color;
    barCTX.arc(35, 35, 20, startingAngle, endingAngle);
    barCTX.stroke();
}