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
    'score', 'loaner', 'euchre', 'march', 'wins', 'loss', 'total'
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
    
for (t = 0; t <= teams.length; t++){
    let team = teams[t]
    if (team == 'T1'){
        updateScores('P1', team),
        updateScores('P2', team)
    }
    if (team == 'T2'){
        
        updateScores('P3', team ),
        updateScores('P4', team )
    }
    if (team == 'T3'){
        
        updateScores('P1', team ),
        updateScores('P3', team )
    }
    if (team == 'T4'){
        
        updateScores('P2', team ),
        updateScores('P4', team )
    }
    if (team == 'T5'){
        
        updateScores('P1', team ),
        updateScores('P4', team )
    }
    if (team == 'T6'){
        
        updateScores('P2', team ),
        updateScores('P3', team )
    }
}
setRoundScore();
}
   
function updateScores(p, team){ 
    for (i = 0; i<6; i++){
        let total = 0;
        let rTotal = 0;
        let pRScore = parseFloat(document.getElementById(valueFields[i]+team).value);
        //let pRTotal = parseFloat(document.getElementById(valueFields[6]+team).value)
        let pCScore = parseFloat(document.getElementById(valueFields[i]+p).value)

        total += pRScore
        rTotal += pRScore
        total += pCScore
        //console.log(valueFields[i]+p)
        //this function worked for updating when player set to P1
        document.getElementById(valueFields[6]+p).value = (rTotal);
        document.getElementById(valueFields[i]+p).value = (total);
        //console.log(total)
    }
}

function sumTotalRoundScore(pRScore){
    let total = 0;
    //call this function each time that a value is iterated on updateScores
}

function setRoundScore (){
    event.preventDefault;
    const initVal = 0;
    for (i=0; i<=6; i++){
        
        document.getElementById(valueFields[i]+teams[0]).value = (initVal);
        document.getElementById(valueFields[i]+teams[1]).value = (initVal);
        document.getElementById(valueFields[i]+teams[2]).value = (initVal);
        document.getElementById(valueFields[i]+teams[3]).value = (initVal);
        document.getElementById(valueFields[i]+teams[4]).value = (initVal);
        document.getElementById(valueFields[i]+teams[5]).value = (initVal);
        
        //console.log(valueFields[i]+teams[i])
    };
}

function confirmResetRound(){
    let resetScores = setRoundScore();
    let c = confirm("Are you sure you want to reset the round score form?");
    if (c == true) {
        return resetScores;
    }
    else {
        return;
    }
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



