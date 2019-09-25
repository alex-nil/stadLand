
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
/*

     //Om myland har ett id på 1, skriv ut till lista, hämta alla stadId och skriv utt till land OL
     if (myLand[0].id===1) {
        document.getElementById("lista").innerHTML += "<ol id=\"ol1\">" + myLand[0].countryname + "</ol>";
        for (var i = 0; i<myCity.length; i++) {
            if (myCity[i].countryid===1) {

                document.getElementById("ol1").innerHTML += "<li>" + myCity[i].stadname + "</li>";
        } 
    }
}   if (myLand[1].id===2) {
        console.log("working");
        document.getElementById("lista").innerHTML += "<ol id=\"ol2\">" + myLand[1].countryname + "</ol>";
        for (var i = 0; i<myCity.length; i++) {
         if (myCity[i].countryid===2) {
            document.getElementById("ol2").innerHTML += "<li>" + myCity[i].stadname + "</li>";
        }
    }       

}   if (myLand[1].id===2) {
    console.log("working");
    document.getElementById("lista").innerHTML += "<ol id=\"ol3\">" + myLand[1].countryname + "</ol>";
    for (var i = 0; i<myCity.length; i++) {
     if (myCity[i].countryid===2) {
        document.getElementById("ol3").innerHTML += "<li>" + myCity[i].stadname + "</li>";
    }
}       

}
*/