function setActionUrl(){
    var action_src = '/sitemain/circuits/' + document.getElementByName('crctName').value;
    var form = document.getElementById('createCircuit')

    form.action = action_src;
};

function submitRound(){
    var p1p2Score = document.getElementById('t1Score');
    alert(p1p2Score.value)
};