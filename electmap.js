var createPolitician = function(name, partyColor){

var politician = {};

politician.name = name;
politician.electResults=null;
politician.totalvotes = 0;
politician.partyColor = partyColor;
politician.tallyVotes = function(){
  this.totalVotes = 0
  for (var i = 0; i < this.electResults.length; i++)
 this.totalVotes = this.totalVotes + this.electResults[i];

 }

  return politician;

};

var leia = createPolitician("Leia Organa", [245, 141, 136]);
var padme = createPolitician("Padme Skywalker",[132, 17, 11]);

leia.electResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

padme.electResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

leia.electResults[9] =1;
padme.electResults [9] =28;

leia.electResults[4] =17;
padme.electResults [4] =38;

leia.electResults[43] =11;
padme.electResults [43] =27;


var setStateResults = function(state){
  theStates[state].winner = null;
 if (leia.electResults[state] > padme.electResults[state]){
 theStates[state].winner=leia;
} else if (padme.electResults[state] > leia.electResults[state]){
 theStates[state].winner=padme;
}

 var stateWinner = theStates[state].winner;
  if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;
  }else {
    theStates[state].rgbColor = [11,32,57];
  }

  var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0];
var body = stateInfoTable.children[1];
var stateName = header.children[0].children[0];
var abbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "("+theStates[state].nameAbbrev +")";
  candidate1Name.innerText = leia.name;
  candidate2Name.innerText = padme.name;
  candidate1Results.innerText = leia.electResults[state];
  candidate2Results.innerText = padme.electResults[state];

  if (theStates[state].winner === null){
    winnersName.innerText = "TIE!";
    } else {
    winnersName.innerText = theStates[state].winner.name;
}


};

leia.tallyVotes();
padme.tallyVotes();

console.log (leia.totalVotes);
console.log (padme.totalVotes);

var winner = "???";
if(leia.totalVotes > padme.totalVotes){
  winner = leia.name;
}else if (padme.totalVotes > leia.totalVotes){
   winner = padme.name;
 }else{
     winner= "TIE!";
 }

var countryInfoTable = document.getElementById('countryResults');
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = leia.name;
row.children[1].innerText = leia.totalVotes;
row.children[2].innerText = padme.name;
row.children[3].innerText = padme.totalVotes;
row.children[5].innerText = winner;
