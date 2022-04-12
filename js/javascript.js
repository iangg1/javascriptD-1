let entrada = prompt("que onda ¿queres probar mi código? Responde si o no")
if (entrada.toLowerCase() == "si") {
    let questions = parseInt(prompt("Bueeeno, ¿que queres probar primero?\n" + "1: Encuesta\n" + "2. Ciclo\n" + "3. Bucle"));
if (questions == 1) {
    alert("Elegiste: Encuesta\n" + "Acá te van unas preguntas."); 
    let name = prompt("¿Cómo es tu nombre?");
    let lastname = prompt("¿Apellido?");
    alert("Que feo nombre tenes");
    alert("Nah, bromitaaa");
    let years = parseInt(prompt("¿Cuántos años tenes?"));
    let age = parseInt(years);
    let year = 2022;
    let birth = year - (age);
    let exit = prompt("Hola " + name + " " + lastname + ", " + "al parecer naciste en "+ birth + ". ¿Verdad?"); 
    if (exit.toLowerCase() == "si") {
        alert("El humano que me programo es un capo");
    } else {
        alert("Uh. Bueeeeno a veces al humano que me programo le cuesta, no " + name + "?");
    }
} else if (questions == 2) {
    alert("Elegiste: Ciclo\n" + "Segui las instrucciones."); 
    let texto = prompt("Escribí un texto.");
    let repeticiones = parseInt(prompt("Ingrese la cantidad de veces que quiera que se repita el texto."));
    for (let i = 1; i <= repeticiones; i ++ ){
        document.write(i + "- " + texto + "</br>");
    }
} else if (questions == 3) {
    alert("Elegiste: Bucle\n" + "Segui las instrucciones");
    let numero = 0;
    let bucle = parseInt(prompt("¿Hasta qué número queres que cuente?"));
    while (numero < bucle) {
        numero++;
        document.write(numero + "<br>");
        if (numero == bucle) {
            break;
        }
    }
}
}
else {
    alert("Bajon.");
}