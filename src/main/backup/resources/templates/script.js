document.getElementById('issueInputPriorForm').addEventListener('submit', savePriorEntry);

function savePriorEntry(p) {
var priorEntryYear = document.getElementById('priorEntryYear').value;
var priorEntryDate = document.getElementById('priorEntryDate').value;
var priorEntryMonth = document.getElementById('priorEntryMonth').value;
var priorEntryAccount = document.getElementById('priorEntryAccount').value;
var priorEntryAmount = document.getElementById('priorEntryAmount').value;

var priorEntry = {
pyear: priorEntryYear,
pdate: priorEntryDate,
pmonth: priorEntryMonth,
paccount: priorEntryAccount,
pamount: priorEntryAmount
}

alert(priorEntry);

if (localStorage.getItem('priorEntries') == null) {
var priorEntries = [];
priorEntries.push(priorEntry);
localStorage.setItem('priorEntries', JSON.stringify(priorEntries));
} else {
var priorEntries = JSON.parse(localStorage.getItem('priorEntries'));
priorEntries.push(priorEntry);
localStorage.setItem('priorEntries', JSON.stringify(priorEntries));
}
fetchPriorEntries();
}

function fetchPriorEntries() {
var priorEntries = JSON.parse(localStorage.getItem('priorEntries'));
var priorEntriesList = document.getElementById('priorEntriesList');

priorEntriesList.innerHTML = '';

for (var i = 0; i < priorEntries.length; i++) {
var pyear = priorEntries[i].priorEntryYear;
var pdate = priorEntries[i].priorEntryDate;
var pmonth = priorEntries[i].priorEntryMonth;
var paccount = priorEntries[i].priorEntryAccount;
var pamount = priorEntries[i].priorEntryAmount;

priorEntriesList.innerHTML +=priorEntryYear+priorEntryDate+priorEntryMonth+priorEntryAccount+priorEntryAmount;}
}