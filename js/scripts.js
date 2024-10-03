function agregarNumero(num) {
    document.getElementById("pantalla").value += num;
}

function agregarOperacion(op) {
    let pantalla = document.getElementById("pantalla").value;
    if (pantalla !== "" && "+-*/".indexOf(pantalla[pantalla.length - 1]) === -1) {
        document.getElementById("pantalla").value += op;
    }
}

function agregarDecimal() {
    let pantalla = document.getElementById("pantalla").value;
    if (pantalla === "" || pantalla.endsWith("+") || pantalla.endsWith("-") || pantalla.endsWith("*") ||
        pantalla.endsWith("/")) {
        document.getElementById("pantalla").value += "0.";
    } else if (!pantalla.includes(".")) {
        document.getElementById("pantalla").value += ".";
    }
}

function calcular() {
    let expresion = document.getElementById("pantalla").value;
    try {
        document.getElementById("pantalla").value = eval(expresion);
    } catch {
        document.getElementById("pantalla").value = "Error";
    }
}

function borrar() {
    let pantalla = document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = pantalla.slice(0, -1);
}

function borrarTodo() {
    document.getElementById("pantalla").value = "";
}

function calcularPorcentaje() {
    let pantalla = document.getElementById("pantalla").value;
    if (pantalla !== "") {
        document.getElementById("pantalla").value = eval(pantalla + "/100");
    }
}

function calcularRaiz() {
    let pantalla = document.getElementById("pantalla").value;
    if (pantalla !== "") {
        document.getElementById("pantalla").value = Math.sqrt(eval(pantalla));
    }
}
