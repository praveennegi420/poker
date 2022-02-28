var player_1_played= false;
var player_2_played= false;

var player_1= -10;
var player_2= -10;


function dice_sound(){
    new Audio('audio/dice-roll.mp3').play();
}

function winner_celeb(){
    new Audio('audio/win.mp3').play();
}

function roll_dice(player, dice){

    var number= Math.floor(Math.random()*6)+1;
    if(dice==='.dice-box-1')  {document.querySelector(dice).classList='rotate-mar'; player_1_played=true; player_1=number;}
    else {document.querySelector(dice).classList='rotate'; player_2_played=true; player_2=number;}
    dice_sound();
    if (number===1){
        document.querySelector(dice+'-r4').classList='mid-3';
        document.querySelector(dice+'-r6').classList='hide1';
        document.querySelector(dice+'-r2').classList='hide1';
        document.querySelector(dice+'-r1').classList='hide1';
        document.querySelector(dice+'-r5').classList='hide1';
        document.querySelector(dice+'-r3').classList='hide1';
    }

    else if(number===2)
    {
        document.querySelector(dice+'-r4').classList='hide1';
        document.querySelector(dice+'-r6').classList='bottom-2';
        document.querySelector(dice+'-r2').classList='hide1';
        document.querySelector(dice+'-r1').classList='top-2';
        document.querySelector(dice+'-r5').classList='hide1';
        document.querySelector(dice+'-r3').classList='hide1';
    }

    else if(number==3){
        document.querySelector(dice+'-r1').classList='top-3';
        document.querySelector(dice+'-r4').classList='mid-3';
        document.querySelector(dice+'-r6').classList='end-3';
        document.querySelector(dice+'-r2').classList='hide';
        document.querySelector(dice+'-r3').classList='hide';
        document.querySelector(dice+'-r5').classList='hide';
    }
    else if(number===4){ document.querySelector(dice+'-r1').classList='down-shift';
                    document.querySelector(dice+'-r2').classList='down-shift';
                    document.querySelector(dice+'-r3').classList='hide';
                    document.querySelector(dice+'-r4').classList='hide';
    }
    else if(number==5){
        document.querySelector(dice+'-r3').classList='hide';
        document.querySelector(dice+'-r4').classList='mid-3';
    }
    if(player_1_played && player_2_played ){
        if(player_1>player_2)
        {
            document.querySelector('h2').innerHTML='Player 1 is the Winner🎉';
            winner_celeb();
        }
        else if(player_1< player_2)
        {
            document.querySelector('h2').innerHTML='Player 2 is the Winner🎉';
            winner_celeb();
        }
        else{
            document.querySelector('h2').innerHTML='Tie';new Audio('audio/restart.wav').play(); 
        }
        document.querySelector('h2').classList='win-banner';
        document.querySelector('.play-again').classList='.refresh-page';
    }
}

document.querySelector('.play-again').onclick= function(){location.reload(); }
document.querySelector('.player-1').onclick = function(){roll_dice('.player-2','.dice-box-1')};
document.querySelector('.player-2').onclick = function(){roll_dice('.player-1','.dice-box-2')};