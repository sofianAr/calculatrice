

// function onClick (click) {

// }



// function addition(nombre1, nombre2) {
//     return nombre1 + nombre2;
// }

// function soustraction(nombre1, nombre2) {
//     return nombre1 - nombre2;
// }
// function division(nombre1, nombre2) {
//     return nombre1 / nombre2;
// }
// function multiplication(nombre1, nombre2) {
//     return nombre1 * nombre2;
// }
// function touche(nombre) {
//     if (nombre == '='){
//         var affiche = document.getElementById('zone').innerHTML;
//         var resultat = eval(affiche);
//         document.getElementById('zone').innerHTML = resultat;
//     return;
//     }
//     else if (nombre =='reset'){
//         document.getElementById('zone').innerHTML='';
//     return;
//     }
//     else{
//         var affiche = document.getElementById('zone').innerHTML;
//         var nombres = affiche+nombre ;
//         document.getElementById('zone').innerHTML=nombres;
//     return;
//     }
// }

function affiche(i) {
    var aff = document.getElementById("Zone").value;
    var affs = aff + i;
    document.getElementById("Zone").value = affs;
}

function efface(){
    document.getElementById("Zone").value = "";
}

function resultat() {
    var calcul = document.getElementById("Zone").value;
    document.getElementById("Zone").value = eval(calcul); 
}
