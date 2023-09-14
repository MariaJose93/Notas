const prompt = require('prompt-sync')();

const nombres = [];
const notas = [];
cont = 0; suma = 0; mayor = -1 ; cont_rojos = 0;
sum_rojos = 0; cont_mayor = 0;

console.log('Bienvenido al registro de notas')
for (let i = 0; i< 20; i++) {
    const nombre = prompt(`Ingresar el nombre del estudiante ${i+1}:  `);
    const nota = parseFloat(prompt(`Ingrese la nota de ${nombre}:  `));
    if (isNaN(nota) || nota <= 0) {
        console.log('Porfavor ingrese una nota válida');
        i--;
    }
    else {
        nombres.push (nombre);
        notas.push (nota);
        cont = cont + 1;
        suma = suma + notas[i];
        if (notas[i] > mayor){
            mayor = notas[i];
            mejor = nombres[i];
        }
        if (notas[i]< 4) {
            cont_rojos = cont_rojos + 1;
            indice = i + 1;
            sum_rojos = sum_rojos + notas[i]
        }
    }

}
for(var i = 0; i < 5; i++) {
    promedio = suma/cont;
    prom_rojo = sum_rojos/cont_rojos;
    if (notas[i]> promedio){
        cont_mayor = cont_mayor + 1;
    }
}
console.log(`El alumno ${mejor} obtuvo el mejor promedio del curso`);
console.log(`El promedio del curso fue de ${promedio}`);
console.log(`El promedio de notas rojas fue de ${prom_rojo}`);
console.log(`El n° ${indice} de la lista, fue el alumno con peor nota`);
console.log(`La cantidad de reprobados fue de ${cont_rojos}`);
console.log(`La candidad de alumnos cuya nota estuvo sobre el promedio del curso fue de ${cont_mayor}`);

