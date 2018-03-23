function addCurrentRow()
{
    var clicks = document.getElementById("currentCounter");
    var currentCounter = parseInt(clicks.innerHTML)
    currentCounter +=1;

    var newRow = document.all("tab_currentLogic").insertRow();
    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' id='currentEntryYear"+currentCounter+"'  name='currentEntryYear'  placeholder='Year' class='form-control'/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' id='currentEntryDate"+currentCounter+"' name='currentEntryDate' placeholder='DD' class='form-control'/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' id='currentEntryMonth"+currentCounter+"' name='currentEntryMonth' placeholder='MM' class='form-control'/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' id='currentEntryAccount"+currentCounter+"' name='currentEntryAccount' placeholder='Select Account' class='form-control'/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' id='currentDebitAmount"+currentCounter+"' name='currentDebitAmount' placeholder='Enter Debit Amount' class='form-control'/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' id='currentCreditAmount"+currentCounter+"' name='currentCreditAmount' placeholder='Enter Credit Amount' class='form-control'/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<button type='button' onclick='addCurrentRow()' data-key="+currentCounter+"'class='btn btn-primary'>Add Row</button/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<button type='button' onclick='removeCurrentRow(this)' data-key="+currentCounter+"'class='btn btn-primary'>Remove Row</button/>";

    document.getElementById('currentCounter').innerHTML = currentCounter;
}

function removeCurrentRow(btn)
{
    var row = btn.parentNode.parentNode;
      row.parentNode.removeChild(row);
}