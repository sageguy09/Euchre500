function setActionUrl(){
    var action_src = '/sitemain/circuits/' + document.getElementByName('crctName').value;
    var form = document.getElementById('createCircuit')

    form.action = action_src;
};

function submitRound(){
    event.preventDefault();
    var p1p2Score = parseFloat(document.getElementById('t1Score').value);
    var p1Score = parseFloat(document.getElementById('cScoreP1').value);
    var total = 0;
    total += p1Score
    total += p1p2Score
  document.getElementById('cScoreP1').value = (total);
};

