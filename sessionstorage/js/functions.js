/*Esto es para sessionStorage */

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

    sessionStorage.nombre = nombre; //Guardamos el nombre || podemos hacerlo con sessionStorage.setItem(nombre)
    sessionStorage.pwd= pwd; //guaradmos la password 
}

function imprimirValores(){
    if (sessionStorage.nombre != undefined && sessionStorage.pwd != undefined) {
        document.getElementById('pantalla').innerHTML= "El nombre es: " +sessionStorage.nombre + " La contraseña es: "+ sessionStorage.pwd;
    }
    else{
        document.getElementById('pantalla').innerHTML= "No hay datos para mostrar";
    }
}
function borrarDatos(){
    sessionStorage.clear(); //Borrara los datos almacenados
}