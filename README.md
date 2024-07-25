# ibm-converter-project
Practice Exercise: Add Javascript interactivity to a HTML page through links
You would have created a web page for Unit Conversion in a file named index.html and styled it with CSS in the lab Hands-on Lab: Styling your Web Page using CSS earlier. If not, click here to complete it

Now you will add event listeners to the buttons in the web page, to make them functional.

Click on the button below to create a new file named script.js.
 Open script.js in IDE

Add the function to convert temparature from Celsius to Fahrenheit
It should fetch the value inside the “celsius” element in index.html

The mathematical formula for conversion should be applied

1
Temp(Fahrenheit) = [Temp(Degrees)*9/5] + 32
Copied!

Set the innerHTML property of the “fahrenheit” element in index.html to the returned value
Click here to see the code
1
2
3
4
5
6
7
function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}
Copied!
Add the function to convert weight from Kgs to Pounds
It should fetch the value inside the “kilo” element in index.html

The mathematical formula for conversion should be applied

1
Weight(Pounds) = Weight(Kgs) * 2.2
Copied!

Set the innerHTML property of the “pounds” element in index.html to the returned value
Click here to see the code
1
2
3
4
5
6
7
function weight(){
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
}
Copied!
Add the function to convert distance from Kms to Miles
It should fetch the value inside the “km” element in index.html

The mathematical formula for conversion should be applied

1
Distance(Miles) = Distance(Kms) * 0.62137
Copied!

Set the innerHTML property of the “miles” element in index.html to the returned value
Click here to see the code
1
2
3
4
5
6
7
function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}
Copied!
Save the updated script.js.
Click here to see the completed code in script.js
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
function temperature(){
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32
    document.getElementById("fahrenheit").value = f
}
function weight(){
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
}
function distance(){
    //To convert KMs to Miles
    // KM * 0.62137
    var km = document.getElementById("km").value;
    var m = km * 0.62137
    document.getElementById("miles").value = m
}
Copied!
Link style.css to index.html
Use the script tag with the src attribute.
Click to see the code
1
2
3
4
5
  <head>
      <title>Document</title>
      <link rel="stylesheet" href="style.css">
      <script src="script.js"></script>
  </head>
Copied!
Link the temperature section of index.html to the temperature function in script.js
To the button with ID temperature in index.html, add an onclick event to invoke the temperature() method.
Assign the ID value of temparature input to be ‘celsius’
Assign the ID value of temparature output to be ‘fahrenheit’
Click here to see the code
1
2
3
4
5
6
7
8
9
10
11
12
13
<fieldset>
    <legend>Temperature</legend>
    <label for="Temperature">Celsius</label> <br/>
    <input type="number" id="celsius"> <br/>
    <button id="temperature" onclick="temperature()"> Convert </button> <br/>
    <input type="number" id="fahrenheit"> <br/>
    <label for="Temperature">Fahrenheit</label>
</fieldset>
              
Copied!
Link the weight section of index.html to the weight function in script.js
To the button with ID weight in index.html, add an onclick event to invoke the weight() method.
Assign the ID value of weight input to be ‘kilo’
Assign the ID value of weight output to be ‘pounds’
Click here to see the code
1
2
3
4
5
6
7
8
9
10
11
12
<fieldset>
    <legend>Weight</legend>
    <label for="Weight">KG</label> <br/>
    <input type="number" id="kilo"> <br/>
    <button id="weight" onclick="weight()"> Convert </button>  <br/>
    <input type="number" id="pounds">  <br/>
    <label for="Weight">Pounds</label>
</fieldset>
Copied!
Link the distance section of index.html to the distance function in script.js
To the button with ID distance in index.html, add an onclick event to invoke the distance() method.
Assign the ID value of distance input to be ‘km’
Assign the ID value of distance output to be ‘miles’
Click to see the code
1
2
3
4
5
6
7
8
9
10
11
12
<fieldset>
    <legend>Distance</legend>
    <label for="Distance">KM</label> <br/>
    <input type="number" id="km">  <br/>
    <button id="distance" onclick="distance()"> Convert </button> <br/>
    <input type="number" id="miles">  <br/>
    <label for="Distance">Miles</label>
</fieldset>
Copied!
Save the code updated in index.html.
Click here to see the compelted code in index.html
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
<!DOCTYPE html>
<html lang="en">
  <head>
      <title>Document</title>
      <link rel="stylesheet" href="style.css">
      <script src="script.js"></script>
  </head>
  <body>
      <section id="home">
        <header>
          Unit Conversions
        </header>
        <nav>
          <div class="topdiv">
            <a href="#temperature"><button  class="topmenu">Temperature</button></a>
            <a href="#weight"><button  class="topmenu">Weight</button></a>
            <a href="#distance"><button  class="topmenu">Distance</button></a>
          </div>
        </nav>
      </section>    
      <div style="clear:both;"></div>
     
      <div id="all-conversion-sections">
        <section id="temperature"  class="b temperature">
          <div id="tmp">
            <figure>
              <img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Theia%20Labs/02%20-%20HTML5%20Elements/images/thermo.png" width="150px"/>
              <figcaption>Celcius to Farenheit Conversion</figcaption>
            </figure>
            <article>
              <fieldset>
                <legend>Temperature</legend>
                <label for="Temperature">Celsius</label> <br/>
 <input type="number" id="celsius"> <br/>
                <button id="temperature" onclick="temperature()"> Convert </button> <br/>
                <input type="number" id="fahrenheit"> <br/>
 <label for="Temperature">Fahrenheit</label>
              </fieldset>
              <aside>
                To convert celsuis to fahrenheit yourself, use this formula replacing the `C` with your temperature in celsuis: (C × 9/5) + 32
              </aside>
            </article>
          </div>
        </section>
        <div style="clear:both;"></div>
      
        <section id="weight"  class="b weight">          
          <div id="wgt">
            <figure>
              <img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Theia%20Labs/02%20-%20HTML5%20Elements/images/weight.png"  width="150px"/>
              <figcaption>Kilograms to Pound Conversion</figcaption>
            </figure>
            <article>
              <fieldset>
                <legend>Weight</legend>
                <label for="Weight">KG</label> <br/>
 <input type="number" id="kilo"> <br/>
                <button id="weight" onclick="weight()"> Convert </button>  <br/>
 
                <input type="number" id="pounds">  <br/>
  <label for="Weight">Pounds</label>    
              </fieldset>
              <aside>
                To convert kilograms to pounds yourself, use this formula replacing the `kg` with your weight in kilograms: kg x 2.205
              </aside>      
            </article>
          </div>
        </section>
        <div style="clear:both;"></div>
        <section id="distance"  class="b distance">
          <div id="dst">
            <figure>
              <img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Theia%20Labs/02%20-%20HTML5%20Elements/images/speedo.png"  width="150px"/>
              <figcaption>Kilometers to Miles Conversion</figcaption>
            </figure>
            <article>
              <fieldset>
                <legend>Distance</legend>
                  <label for="Distance">KM</label> <br/>
 <input type="number" id="km">  <br/>
                  <button id="distance" onclick="distance()"> Convert </button> <br/>
                  <input type="number" id="miles">  <br/>
  <label for="Distance">Miles</label>
              </fieldset>
              <aside>
                To convert kilometers to miles yourself, use this formula replacing the `km` with your distance in kilmeters: km &divide; 1.609
              </aside>
    
            </article>
          </div>
        </section>
        <div style="clear:both;"></div>
      </div>
    <div id="go-home" class="iconbutton">
      <a href="#home">
        <img src="https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMDeveloperSkillsNetwork-CD0101EN-SkillsNetwork/labs/Theia%20Labs/02%20-%20HTML5%20Elements/images/home.svg"/>
      </a>
    </div>
    <footer>Learn more about HTML and CSS as a part of IBM Fullstack Cloud Developer Certification</footer>
  </body>
</html>
Copied!
View index.html with Live Server and see if you get the converted temparature, weight and distance upon clicking the respective buttons.
