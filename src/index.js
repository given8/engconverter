const newtonsID = "#newtons";
const kipsID = "#kips";
const feetInchesID = "#feetInches";
const millimetreID = "#millimetre";
const celsiusID = "#celsius";
const fahrenheitID = "#fahrenheit";
const kpaID = "#kpa";
const psiID = "#psi";
$("input").keypress(function (event) {
  let ftInch = $(feetInchesID).val();
  if (event.key === "Enter" && document.activeElement.id === "feetInches") {
    //console.log(event.key);
    //console.log($("#feetInches").val());
    switch (ftInch.includes("'")) {
      case true:
        var posFt = ftInch.indexOf("'");
        var ft = Number.parseFloat(ftInch.substring(0, posFt));
        console.log(posFt);
        var inch = Number.parseFloat(ftInch.substring(posFt + 1));
        if (isNaN(inch)) {
          inch = 0;
        }

        $(millimetreID).val(ft * 304.8 + inch * 25.4);

        break;
      case false:
        var mm = Number.parseFloat(ftInch) * 25.4;
        $(millimetreID).val(mm);
        break;
      default:
        break;
    }
  } else if (event.key === "i") {
    const pos = ftInch.indexOf("\"");
    const posEnd = ftInch.indexOf("i");
    const ft = Number.parseFloat(ftInch.substring(0, pos));
    let inches = Number.parseFloat(ftInch.substring(pos + 1));
    if (Number.isNaN(inches)) {
      inches = 0;
    }
    console.log({ ft, inches });
    const outPut = ((ft * 12) + inches);
    console.log(outPut);
    $(feetInchesID).val(outPut);
  }
});



$(kipsID).keypress(function (event) {
  if (event.key === "Enter" && document.activeElement.id === "kips") {
    convertToNewtons("kips", "newtons");
    console.log(document.activeElement.id);
  }
});

$(newtonsID).keypress(function (event) {
  if (event.key === "Enter" && document.activeElement.id === "newtons") {
    convertTokips(newtonsID, kipsID);
  }
});

$(kipsID).keypress(function (event) {
  if (event.key === "Enter" && document.activeElement.id === "kips") {
    convertToNewtons(kipsID, newtonsID);
  }
});

function convertToNewtons(inputSelector, outputSelector) {
  var kips = Number.parseFloat($(inputSelector).val());
  var N = kips * 4448.2216;
  $(outputSelector).val(N.toFixed(2));
}

function convertTokips(inputSelector, outputSelector) {
  var N = Number.parseFloat($(inputSelector).val());
  var kips = N / 4448.2216;
  $(outputSelector).val(kips.toFixed(2));
}

function convertoFahrenheit(inputSelector, outputSelector) {
  var celsius = Number.parseFloat($(inputSelector).val());
  var fahrenheit = celsius * (9 / 5) + 32;
  $(outputSelector).val(fahrenheit.toFixed(2));
}
function convertoCelsius(inputSelector, outputSelector) {
  var fahrenheit = Number.parseFloat($(inputSelector).val());
  var celsius = (fahrenheit - 32) * (5 / 9);
  $(outputSelector).val(celsius.toFixed(2));
}

function convertToPsi(inputSelector, outputSelector) {
  var kpa = Number.parseFloat($(inputSelector).val());
  var psi = kpa * 0.145038;
  $(outputSelector).val(psi.toFixed(1));
}

function convertToKpa(inputSelector, outputSelector) {
  var psi = Number.parseFloat($(inputSelector).val());
  var kpa = psi * 6.89476;
  $(outputSelector).val(kpa.toFixed(1));
}

$(fahrenheitID).keypress(function (event) {
  if (event.key === "Enter" && document.activeElement.id === "fahrenheit") {
    convertoCelsius(fahrenheitID, celsiusID);
  }
});

$(celsiusID).keypress(function (event) {
  if (event.key === "Enter" && document.activeElement.id === "celsius") {
    convertoFahrenheit(celsiusID, fahrenheitID);
  }
});

$(psiID).keypress(function (event) {
  if (event.key === "Enter" && document.activeElement.id === "psi") {
    convertToKpa(psiID, kpaID);
  }
});

$(kpaID).keypress(function (event) {
  if (event.key === "Enter" && document.activeElement.id === "kpa") {
    convertToKpa(kpaID, psiID);
  }
});
