
//deklarerar variabler

var myCountry = "";
var myCity = "";


//hämtar data från land.json
fetch("land.json")
.then(function(myJson) {
    return myJson.json();
})

//Sparar data till myLand
.then(function(data){
    myCountry = data;

}) 
.catch(err =>{
    console.log(err);
})



//hämtar data från stad.json
fetch("stad.json")
.then(function(myJson) {
    return myJson.json();
})

.then(function(data){

    //sparar till myCity, hämtar population från array, sorterar så att den med störst value hamnar först.
    myCity = data ;
    var myNum = 0;
    myCity.sort(function(a, b){
        return b.population-a.population;
    })  

     //Om myCountry har ett id på x, skriv ut till lista, hämta alla stadId och skriv utt till land OL
    for (var x=0; x<myCountry.length; x++) {
        myNum++;
     if (myCountry[x].id===x + 1) {
        document.getElementById("lista").innerHTML += "<ol id=\"ol" + x  + "\">" + myCountry[x].countryname + "</ol>";
        for (var i = 0; i<myCity.length; i++) {
            if (myCity[i].countryid=== myNum) {  
                document.getElementById("ol" + x).innerHTML += "<li>" + myCity[i].stadname + "</li>";
        } 
    }
} 
}
   
}) 
.catch(err =>{
    console.log(err);
    
})
