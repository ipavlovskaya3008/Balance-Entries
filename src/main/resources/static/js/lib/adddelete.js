function addPriorRow()
{
    var clicks = document.getElementById("priorCounter");
    var priorCounter = parseInt(clicks.innerHTML)
    priorCounter +=1;

    var newRow = document.all("tab_priorLogic").insertRow();
    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' id='priorEntryYear"+priorCounter+"'  name='priorEntryYear'  placeholder='Year' class='form-control'/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' id='priorEntryDate"+priorCounter+"' name='priorEntryDate' placeholder='DD' class='form-control'/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' id='priorEntryMonth"+priorCounter+"' name='priorEntryMonth' placeholder='MM' class='form-control'/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' id='priorEntryAccount"+priorCounter+"' name='priorEntryAccount' placeholder='Select Account' class='form-control'/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<input type='text' id='priorEntryAmount"+priorCounter+"' name='priorEntryAmount' placeholder='Enter Dollar Amount' class='form-control'/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<button type='button' onclick='addPriorRow()' data-key="+priorCounter+"'class='btn btn-primary'>Add Row</button/>";

    oCell = newRow.insertCell();
    oCell.innerHTML = "<button type='button' onclick='removePriorRow(this)' data-key="+priorCounter+"'class='btn btn-primary'>Remove Row</button/>";

    document.getElementById('priorCounter').innerHTML = priorCounter;
}

function removePriorRow(btn)
{
    var row = btn.parentNode.parentNode;
      row.parentNode.removeChild(row);
}