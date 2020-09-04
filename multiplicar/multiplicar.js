/* =========================================================
BASES DE NODE
========================================================= */
// Requerir un paquete integrado en noed
const fs = require('fs');
// MODULO COLORS PARA COLORES EN CONSOLA
const colors = require('colors');

// PROMESA PARA LA LOGICA
let crearArchivo = (base, limite=10) => {
  return new Promise((resolve, reject)=>{
    // Validar si la base no es un numero
    if(!Number(base)){
      reject(`El valor introducido ${ base } no es un numero`);

    }
    // Variable para los datos del archivo
    let data = '';
    // Crear tabla de multiplicar
    for (let i = 0; i <= limite; i++) {
    
       data += `${ base } * ${ i } = ${ base * i }\n`;
      
    }

    // Crear un archivo txt con fs o file system
    // fs.writeFile('tabla-3.txt', "Contenido del archivo", (err) => {
    //   // Si existe un error
    //   if (err) throw err;
    //   // Si no ocurre error, imprimir consolaso
    //   console.log('The file has been saved!');
    // });
    fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
      // Reject->retorna el error
      // Si existe un error
      if (err) 
        reject(err);
      else
        resolve(`tabla-${ base }.txt`);

    })

  })

}
// FUNCION PARA MOSTRAR TABLA
let listarTabla = (base, limite = 10) => {
  let print_table = "";
  
  for (let i = 1; i <= limite; i++) {
    print_table += `${base} * ${limite} = ${base * i}\n`;
  }
  console.log(`===================================`.green)
  console.log(`=========Tabla del ${base}==========`.green)
  console.log(`===================================`.green)
  console.log(print_table.blue)
}
/* =========================================================
EXPORTAR ELEMENTOS
========================================================= */
// El objeto module esta en el entorno general de node js
module.exports = {
  crearArchivo,
  listarTabla
}