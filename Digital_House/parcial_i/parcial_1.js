/* Variables */
let autosNuevos = [];

let var1 = 3;
let var2 = 3;
let var3 = 6;

let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat',
    anio: 2019,
    color: 'negro'
}]


/* Ejercicio 1 */
let ejercicio1 = (var1, var2, var3) => {
    if(var1>var2)
        return var2 * var3;
    if(var2%2 === 0)
        return var2 + " es par";
    if((var1+var2+var3)%3 === 0)
        return "La suma de estos tres numeros es múltiplo de 3";
}

/* Ejercicio 2 */
let objeto = {
    nombre : "Angel",
    apellido : "RG",
    edad : 32,
    estaEmpleado: true,
    detalle : function(){
        if(this.edad > 18){
            if(this.estaEmpleado)
                return this.nombre + " " + this.apellido + " está empleado y es mayor de edad."
            else
                return this.nombre + " " + this.apellido + " NO está empleado y es mayor de edad."
        }
        else
            if(!this.estaEmpleado)
                return this.nombre + " " + this.apellido + " NO está empleado y NO es mayor de edad."
    }
}

/* Ejercicio 3 */
autos.pop();

for(let i=0; i<autos.length; i++){
    if(autos[i].anio>2019)
        autosNuevos.push(autos[i]);
}

function prueba(){
    console.log(ejercicio1(var1,var2,var3));
    console.log(objeto.detalle());
    console.log(autosNuevos);
}

/* main */
prueba();
