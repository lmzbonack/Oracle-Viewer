//This could be broken down into a few different functions
$("#button").click(function(){
    //grab user input
    var cardName = document.getElementById('submit').value;
    //build the url used to call the api
    var url = "https://api.magicthegathering.io/v1/cards?name="+cardName;
    console.log(url);
    //use axious to make the request
    axios.get(url)
    //control flow for what happens if the request does not fail
    .then(function(res){
        console.log(res.data.cards[0].imageUrl)
        //change the card face image
        $('#cardFace').attr("src",res.data.cards[1].imageUrl)
        //grab the rulings and create a new variable containing them
        var rulingsArray = res.data.cards[0].rulings
        console.log(rulingsArray);
        console.log(typeof(rulingsArray));
        //iterate through the rulings array and append each ruling and its info to a list
        //You probably do not have to call this everytime
        $('#rulingsList').empty()
        //You should see if a card has rulings before trying to iterate through
        rulingsArray.forEach(function(val){
           $('#rulingsList').append('<li>'+val.date+' - '+val.text+'</li>')
        });
    })
    .catch(function(err){
        console.log(err);  
    })
});