function setActionUrl(){
    var action_src = '/sitemain/circuits/' + document.getElementByName('crctName').value;
    var form = document.getElementById('createCircuit')

    form.action = action_src;
}


function yourFunction(){
    var action_src = "http://localhost/test/" + document.getElementsByName("keywords")[0].value;
    var your_form = document.getElementById('your_form');
    your_form.action = action_src ;
}