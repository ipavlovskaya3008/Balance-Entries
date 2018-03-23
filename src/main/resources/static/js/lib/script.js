document.getElementById('issueInputForm');

function savePriorEntry(p) {

var clicks = document.getElementById("counter");
var counter = parseInt(clicks.innerHTML);

localStorage.clear();

for (var id = 0; id <= counter; id++) {

var priorEntryYear = document.getElementById('priorEntryYear'+id).value;
var priorEntryDate = document.getElementById('priorEntryDate'+id).value;
var priorEntryMonth = document.getElementById('priorEntryMonth'+id).value;
var priorEntryAccount = document.getElementById('priorEntryAccount'+id).value;
var priorEntryAmount = document.getElementById('priorEntryAmount'+id).value;

var priorEntry = {
priorEntryYear: priorEntryYear,
priorEntryDate: priorEntryDate,
priorEntryMonth: priorEntryMonth,
priorEntryAccount: priorEntryAccount,
priorEntryAmount: priorEntryAmount,

}

if (localStorage.getItem('priorEntries') == null)
{
var priorEntries = [];
priorEntries.push(priorEntry);

localStorage.setItem('priorEntries', JSON.stringify(priorEntries));

}
else {

var priorEntries = JSON.parse(localStorage.getItem('priorEntries'));

priorEntries.push(priorEntry);
localStorage.setItem('priorEntries', JSON.stringify(priorEntries));
}

}
fetchPriorEntries();

}

function fetchPriorEntries() {
var priorEntries = JSON.parse(localStorage.getItem('priorEntries'));

var xhr = new XMLHttpRequest();
xhr.open("POST", "/form", true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(priorEntries));
localStorage.clear();

}
