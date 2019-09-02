function ddlProgDisclSelect() {
    // Hide the optional questions
    var list = document.getElementById('ddlProgDiscl');
    var chosenItemText = list.value;
    if (chosenItemText == 'Other') {
        document.getElementById('txtProgDisclDDDiv').style.display = 'inline';
    }
    else {
        document.getElementById('txtProgDisclDDDiv').style.display = 'none';
        document.getElementById('txtProgDisclDD').value = '';
    }
}

function rbProgDisclSelect() {
    if (document.getElementById('rbYes').checked) {
        document.getElementById('txtProgDisclRBDiv').style.display = 'block';
    }
    else {
        document.getElementById('txtProgDisclRBDiv').style.display = 'none';
        document.getElementById('txtProgDisclRB').value = '';
    }
}