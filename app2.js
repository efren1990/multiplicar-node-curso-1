/* =========================================================
BASES DE NODE
========================================================= */
/**El archivo principal de node siembre debe ser el mas 
 * liviano y que no contenga mayor cantidad de codigo,
 * el codigo extenso debe ser generado en otros archivos
 * e importado 
 */
// REQUERIR MODULO YARGS
/**Permite simplificar validaciones para comandos recibidos por consola
 * permite requerir parametros obligatorios con el demand
 */
const argv = require('yargs')
              .command('listar', 'Imprime la tabla de multiplicar', {
                base:{
                  demand: true, //hace el comando(flag) obligatorio
                  alias: 'b' // alias del comando
                },
                limite:{
                  alias:'l',
                  default: 10 // le da un valor default al flag, si no se introduce 
                }
              }).help() // Permite agregar el comando de ayuda, mostrara las configuraciones
              .argv;

              // Requerir un componente creado
const { crearArchivo } = require('./multiplicar/multiplicar');

// process -> objeto en el entorno general de node
/**Tomar el parametro enviado por consola el cual es la base 
 * para ejecutar la funcion de la tabla de multiplicar y crear el archivo
 */
// let argv2 = process.argv;
console.log(argv)
console.log(argv.b)
console.log(argv.limite)

// Crear el parametro que almacenara el parametro enviado por consola
/**El elemento process.argv toma a partir del indice 2 los paramtros enviados */
// let parametro = argv[2]
/**Al enviar los paramtreos se usa la siguiente nomenclatura
 * --nombreParametro = valor
 * por ende es necesario hacer un split por el = y tomar el valor
 */
// let base = parametro.split("=")[1];
// console.log(base)
/* =========================================================
LLAMAR EL PAQUETE O COMPONENTE IMPORTADO / EXPORTADO
========================================================= */
// crearArchivo(base).then((archivo) => {
//   console.log(`Archivo Creado: ${ archivo }`)
// }).catch((err)=>{
//   console.log(err);
// })
