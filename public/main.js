function setActionUrl(){
    var action_src = '/sitemain/circuits/' + document.getElementByName('crctName').value;
    var form = document.getElementById('createCircuit')

    form.action = action_src;
};

const valueFields = [
    'score', 'loaner', 'euchre', 'march', 'wins', 'loss'
]
const players = [
    'P1', 'P2', 'P3', 'P4'
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
    let player = 'P1'
    for (p = 0; p<=2; p++){
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
   
}