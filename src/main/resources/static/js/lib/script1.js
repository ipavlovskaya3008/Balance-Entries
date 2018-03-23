document.getElementById('issueInputForm');
function saveEntry(p) {

var priorClicks = document.getElementById("priorCounter");
var priorCounter = parseInt(priorClicks.innerHTML);
var priorEntries = [];

var currentClicks = document.getElementById("currentCounter");
var currentCounter = parseInt(currentClicks.innerHTML);
var currentEntries = [];

for (var id = 0; id <= priorCounter; id++) {

if (document.getElementById('priorEntryYear'+id) != null){
var priorEntryYear = document.getElementById('priorEntryYear'+id).value;
var priorEntryDate = document.getElementById('priorEntryDate'+id).value;
var priorEntryMonth = document.getElementById('priorEntryMonth'+id).value;
var priorEntryAccount = document.getElementById('priorEntryAccount'+id).value;
var priorEntryAmount = document.getElementById('priorEntryAmount'+id).value;}

var priorEntry = {
priorEntryYear: priorEntryYear,
priorEntryDate: priorEntryDate,
priorEntryMonth: priorEntryMonth,
priorEntryAccount: priorEntryAccount,
priorEntryAmount: priorEntryAmount}

priorEntries.push(priorEntry);
}

for (var id = 0; id <= currentCounter; id++) {
if (document.getElementById('currentEntryYear'+id) != null){
var currentEntryYear = document.getElementById('currentEntryYear'+id).value;
var currentEntryDate = document.getElementById('currentEntryDate'+id).value;
var currentEntryMonth = document.getElementById('currentEntryMonth'+id).value;
var currentEntryAccount = document.getElementById('currentEntryAccount'+id).value;
var currentDebitAmount = document.getElementById('currentDebitAmount'+id).value;
var currentCreditAmount = document.getElementById('currentCreditAmount'+id).value;}

var currentEntry = {
currentEntryYear: currentEntryYear,
currentEntryDate:currentEntryDate,
currentEntryMonth:currentEntryMonth,
currentEntryAccount:currentEntryAccount,
currentDebitAmount:currentDebitAmount,
currentCreditAmount:currentCreditAmount
}

currentEntries.push(currentEntry);
}

var entries = {
priorEntries:priorEntries,
currentEntries:currentEntries
};
fetchEntries(entries);
}
function fetchEntries(e) {
var postEntries = e;
var xhr = new XMLHttpRequest();
xhr.open("POST", "/form", true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.send(JSON.stringify(postEntries));
}