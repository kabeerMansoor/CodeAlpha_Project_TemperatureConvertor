let screen = document.getElementById("screen");
let tempGive = document.getElementById("tempGive");
let tempConvert = document.getElementById("tempConvert");
let result = document.getElementById("result");

function conversion() {
    let temperature = parseFloat(screen.value);
    let convertedTemperature;

    if (tempGive.value === "celcius" && tempConvert.value === "fahrenheit") {
        convertedTemperature = celToFeh(temperature);
    } else if (tempGive.value === "fahrenheit" && tempConvert.value === "celcius") {
        convertedTemperature = fehToCel(temperature);
    } else if (tempGive.value === "kelvin" && tempConvert.value === "celcius") {
        convertedTemperature = kelToCel(temperature);
    } else if (tempGive.value === "kelvin" && tempConvert.value === "fahrenheit") {
        convertedTemperature = kelToFeh(temperature);
    } else if (tempGive.value === "celcius" && tempConvert.value === "kelvin") {
        convertedTemperature = celToKel(temperature);
    } else if (tempGive.value === "fahrenheit" && tempConvert.value === "kelvin") {
        convertedTemperature = fehToKel(temperature);
    }else if(tempGive.value === tempConvert.value){
        alert("Please Select different unit:");
    }


    result.value = `${convertedTemperature.toFixed(2)} ° ${tempConvert.value}`;

} 

function fehToCel(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

function celToFeh(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

function celToKel(celsius) {
    let kelvin = celsius + 273.15;
    return kelvin;
}

function kelToCel(kelvin) {
    let celsius = kelvin - 273.15;
    return celsius;
}

function kelToFeh(kelvin) {
    let fahrenheit = (kelvin * 9 / 5) - 459.67;
    return fahrenheit;
}

function fehToKel(fahrenheit) {
    let kelvin = (fahrenheit + 459.67) * 5 / 9;
    return kelvin;
}
