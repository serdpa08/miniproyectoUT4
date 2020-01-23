/*Esto es para localStorage */

document.addEventListener('DOMContentLoaded', inicio);
var nombre;
var pwd;
function inicio(){

    document.getElementById('guardar').addEventListener('click', guardarValores);
    document.getElementById('mostrar').addEventListener('click', imprimirValores);
    document.getElementById('borrar').addEventListener('click', borrarDatos);
    
}

function guardarValores(){
    nombre = document.getElementById('idnombre').value;
    pwd = document.getElementById('idpassword').value;

    localStorage.nombre = nombre; //Guardamos el nombre || podemos hacerlo con localStorage.setItem(nombre)
    localStorage.pwd= pwd;
}

function imprimirValores(){
    if (localStorage.nombre != undefined && localStorage.pwd != undefined) {
        document.getElementById('pantalla').innerHTML= "El nombre es: " +localStorage.nombre + " La contraseña es: "+ localStorage.pwd;
    }
    else{
        document.getElementById('pantalla').innerHTML= "No hay datos para mostrar";
    }

}

function borrarDatos(){
    localStorage.clear();
}
/*
window.addEventListener('storage', function(){
    this.alert('se ha guardado algo en el almacenamiento');
})
*/