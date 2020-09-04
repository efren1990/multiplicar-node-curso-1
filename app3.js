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
              })
              .command('crear', 'Genera un archivo con la tabla de multiplicar', {
                base:{
                  demand: true, //hace el comando(flag) obligatorio
                  alias: 'b' // alias del comando
                },
                limite:{
                  alias:'l',
                  default: 10 // le da un valor default al flag, si no se introduce 
                }
              })
              .help() // Permite agregar el comando de ayuda, mostrara las configuraciones
              .argv;


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




