//To convert celcius to farenheit
//We use the formula (CEL*9/5)+32

function temperature(){
    var c = document.getElementById("c").value;
    var f = (c * 9/5) + 32
    document.getElementById("f").value = f;
}

function weight(){
    var kg = document.getElementById("kg").value;
    var lbs = kg * 2.2015;
    document.getElementById("lbs").value = lbs;
}

function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("m").value = m
}
