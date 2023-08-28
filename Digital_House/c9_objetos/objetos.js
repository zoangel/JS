let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

  let alumno = {
    "nombre":"Angel",
    "legajo":"46843156",
    "notas":[10,9],
    promedio: function(nota) {
        this.notas.push(nota);
        let total = 0.0;
        this.notas.forEach(element => {
            total += element;
        });
        total = total / this.notas.length;
        if(total > 7) console.log(`Estás aprobado. Promedio ${total}`);
        else console.log(`No estas aprobado. Promedio ${total}`);
    }
  }

  let banco = {
    cuentas: arrayCuentas,
    consultarCliente: function(titular){
        for(let cuenta of this.cuentas) {
            if (cuenta.titularCuenta === titular )
                return cuenta;
        }
        return null;
    },
    deposito: function(titular, cantidadDepósito){
        for(let cuenta of this.cuentas){
            if(cuenta.titularCuenta === titular){
                cuenta.saldoEnPesos += cantidadDepósito;
                console.log(`Depósito relizado, su nuevo saldo es: ${cuenta.saldoEnPesos}`);
            }
        }
    },
    retiro: function(titular, montoRetiro){
        for(let cuenta of this.cuentas){
            if(cuenta.titularCuenta === titular){
                if(montoRetiro>cuenta.saldoEnPesos)
                    console.log("Fondos insuficientes.");
                else {
                    cuenta.saldoEnPesos -= montoRetiro;
                    console.log(`Retiro relizado correctamente, su nuevo saldo es: ${cuenta.saldoEnPesos}`);
                }
            }
        }
    }
  }


  function propiedadUnica(array, atributo){
    let nuevoArray = [];
    array.forEach((element) => {
        nuevoArray.push({[atributo]:element[atributo]});
    });
    return nuevoArray;
  }

  function test(){
    console.log(banco.consultarCliente("Ramon Connell"));
    banco.deposito("Jacki Shurmer", 1000);
    banco.retiro("Ansel Ardley", 33000);
    banco.retiro("Ansel Ardley", 2000);

    let array = [ { nombre: "Lean", edad: 27 }, { nombre: "Eze", edad: 49} ];
    console.log(propiedadUnica(array, "nombre"));
    console.log(propiedadUnica(array, "edad"));

    alumno.promedio(9);
  }

  test();