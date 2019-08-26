function setActionUrl(){
    var action_src = '/sitemain/circuits/' + document.getElementByName('crctName').value;
    var form = document.getElementById('createCircuit')

    form.action = action_src;
};


const players = [
    'P1', 'P2', 'P3', 'P4'
]
const teams = [
    'T1', 'T2', 'T3', 'T4', 'T5', 'T6'
]
const valueFields = [
    'score', 'loaner', 'euchre', 'march', 'wins', 'loss'
]
/*
function submitRound(){
    event.preventDefault();
    let player = 'P1'
    var p1p2Score = parseFloat(document.getElementById('t1Score').value);
    var p1Score = parseFloat(document.getElementById('score'+player).value);
    var total = 0;
    total += p1Score
    total += p1p2Score
  document.getElementById('score'+player).value = (total);
};
/*
function valSelect(){
let pValueSelect = p1Val

for (let i = 0; i < 6; i++){
pValue += i

}
}
*/

function submitRound (){
    event.preventDefault();
    //let player = 'P1'
    updatePlayerScores();
   
}


function updatePlayerScores(){
    //updateScores('P1', teams[0]);
    //updateScores('P2', teams[0]);
    
for (t = 0; t <=1; t++){
    let team = teams[t]
    if (team == 'T1'){
        updateScores('P1', team),
        updateScores('P2', team)
    }
    if (team == 'T2'){
        
        updateScores('P3', team ),
        updateScores('P4', team )
    }
}
setRoundScore();
}
    /*if (team == 3){
        updateScores('P1');
        updateScores('P3');
    }
    if (team == 4){
        updateScores('P2');
        updateScores('P4');
    }
    if (team == 5){
        updateScores('P1');
        updateScores('P4');
    }
    if (team == 6){
        updateScores('P2');
        updateScores('P3');
    }
}
}
*/
function updateScores(p, team){ 
    for (i = 0; i<6; i++){
        var total = 0;
        var p1Score = parseFloat(document.getElementById(valueFields[i]+team).value);
        var p1p2Score = parseFloat(document.getElementById(valueFields[i]+p).value)
        total += p1Score
        total += p1p2Score
        //console.log(valueFields[i]+p)
        //this function worked for updating when player set to P1
        document.getElementById(valueFields[i]+p).value = (total);
        //console.log(total)
    }
}


function setRoundScore (){
    
    const initVal = 0;
    for (i=0; i<6; i++){
        
        document.getElementById(valueFields[i]+teams[0]).value = (initVal);
        document.getElementById(valueFields[i]+teams[1]).value = (initVal);
        document.getElementById(valueFields[i]+teams[2]).value = (initVal);
        document.getElementById(valueFields[i]+teams[3]).value = (initVal);
        //console.log(valueFields[i]+teams[i])
    };
}



/*
function submitRound (){
    event.preventDefault();
    //let player = 'P1'
    updatePlayerScores();
   
}


function updatePlayerScores(){
    for (p = 0; p<=2; p++){
        updateScores(p)

    }
}
function updateScores(p){ 
    for (i = 0; i<6; i++){
    var total = 0;
    var p1Score = parseFloat(document.getElementById('t1Score').value);
    var p1p2Score = parseFloat(document.getElementById(valueFields[i]+players[p]).value)
    total += p1Score
    total += p1p2Score
    //console.log(valueFields[i]+player)
    //this function worked for updating when player set to P1
    document.getElementById(valueFields[i]+players[p]).value = (total);
    
}
}



*/



