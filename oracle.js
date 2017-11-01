$("#button").click(function(){
    //grab user input
    var cardName = document.getElementById('submit').value;
    //build the urls used to call the apis one for the image one for the Oracle Text
    var oracleUrl = "https://api.magicthegathering.io/v1/cards?name="+cardName;
    var imageUrl = "https://api.deckbrew.com/mtg/cards?name="+cardName;
    
    axios.get(oracleUrl)
    .then(getRulings)
    .catch(handleError)
    
    axios.get(imageUrl)
    .then(getImage)
    .catch(handleError)
});

function getRulings(res){
    var rulingsArray = res.data.cards[0].rulings
    //iterate through the rulings array and append each ruling and its info to a list
    //You probably do not have to call this everytime
    $('#rulingsList').empty()
    //You should see if a card has rulings before trying to iterate through
    rulingsArray.forEach(function(val){
       $('#rulingsList').append('<li>'+val.date+' - '+val.text+'</li><br>')
    });
}

function getImage(res){
    //console.log(res.data[0].editions[0].image_url);
    $('#cardFace').attr("src",res.data[0].editions[0].image_url)
}

function handleError(err){
    console.log(err)
}