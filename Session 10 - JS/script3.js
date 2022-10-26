function heatindex() {
  // document.getElementById("inputHum").value;
  // document.getElementById("inputCel").value;
  var r = document.getElementById("inputHum").value;
  //relative humidity
  var b = document.getElementById("inputCel").value; //temperature in Celsius
  var t = b * (9 / 5) + 32; //convert to fahrenheit
  var t2 = Math.pow(t, 2);
  var t3 = Math.pow(t, 3);
  var rh2 = Math.pow(r, 2);
  var rh3 = Math.pow(r, 3);

  //less accurate formula (var index=-42.379 + 2.04901523*t + 10.14333127*r - 0.22475541*t*r - 6.83783e-03*t2 - 5.481717e-02*rh2 + 1.22874e-03*t2*r + 8.5282e-04*t*rh2 - 1.99e-06*t2*rh2;)
  var index =
    16.923 +
    0.185212 * t +
    5.37941 * r -
    0.100254 * t * r +
    0.941695e-2 * t2 +
    0.728898e-2 * rh2 +
    0.345372e-3 * t2 * r -
    0.814971e-3 * t * rh2 +
    0.102102e-4 * t2 * rh2 -
    0.38646e-4 * t3 +
    0.291583e-4 * rh3 +
    0.142721e-5 * t3 * r +
    0.197483e-6 * t * rh3 -
    0.218429e-7 * t3 * rh2 +
    0.843296e-9 * t2 * rh3 -
    0.481975e-10 * t3 * rh3;

  var m = (5 / 9) * (index - 32); //convert to celsius

  {
    if (m < 26.67) var r = Math.round(m);
    else if (m < 32.22)
      var r =
        Math.round(m) +
        " - CAUTION " +
        " (Exercise more fatiguing than usual) ";
    else if (m < 40.56)
      var r =
        Math.round(m) +
        " - EXTREME CAUTION " +
        " (Heat cramps, exhaustion possible) ";
    else if (m < 54.44)
      var r = Math.round(m) + " - DANGER " + " (Heat exhaustion likely) ";
    else
      var r = Math.round(m) + " - EXTREME DANGER " + " (Heat stroke imminent) ";
  }
  document.getElementById("outputCelcius").innerHTML = r; //heat index in celsius

}
//The following are in Celcius
//Extreme danger   Greater than 54.44      Heat stroke imminent
//Danger           40.56 - 54.44           Heat exhaustion likely
//Extreme caution  32.22 - 40.56           Heat cramps, exhaustion possible.
//Caution          26.67 - 32.22           Exercise more fatiguing than usual.
//for the above Source: The USA TODAY Weather Book by Jack Williams

//   }
