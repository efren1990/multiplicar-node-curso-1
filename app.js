/* =========================================================
BASES DE NODE
========================================================= */
/**El archivo principal de node siembre debe ser el mas 
 * liviano y que no contenga mayor cantidad de codigo,
 * el codigo extenso debe ser generado en otros archivos
 * e importado 
 */

// CARGAR EL OBJETO argv
const argv = require('./config/yargs').argv;

// MODULO COLORS PARA COLORES EN CONSOLA
const colors = require('colors');

 // Requerir un componente creado
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

/**YARGS->
 * Los comandos en yarg no llevan pares de valor
 * 
 * las banderas en yarg llevan -- ejemplo: --nombre, --n
 * 
 * los comandos en Yargs son alamacenados en una array que inicia con _
 */
// TOMAR COMANDO ingresado
let comando = argv._[0];

// SWITCH PARA EJECUTAR SEGUN COMANDO
switch(comando){
  
  case 'listar':
    console.log("Listar")
    listarTabla(argv.base, argv.limite);
  break;
    
  case 'crear':
    /* =========================================================
    LLAMAR EL PAQUETE O COMPONENTE IMPORTADO / EXPORTADO
    ========================================================= */
    crearArchivo(argv.base, argv.limite).then((archivo) => {

      console.log(`Archivo Creado: ${ archivo }`)
    
    }).catch((err)=>{
    
      console.log(err);
    
    })
    console.log("Crear")
  break;

  default:
    console.log("Comando no reconocido")
  break;
}

console.log(argv)
console.log(argv.b)
console.log(argv.limite)




