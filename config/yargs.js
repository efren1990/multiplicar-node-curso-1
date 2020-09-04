// REQUERIR MODULO YARGS
/**Permite simplificar validaciones para comandos recibidos por consola
 * permite requerir parametros obligatorios con el demand
 */

// OBJETO CON LAS OPCIONES
const opts = {
  base:{
    demand: true, //hace el comando(flag) obligatorio
    alias: 'b' // alias del comando
  },
  limite:{
    alias:'l',
    default: 10 // le da un valor default al flag, si no se introduce 
  }
}
const argv = require('yargs')
  .command('listar', 'Imprime la tabla de multiplicar', opts)
  .command('crear', 'Genera un archivo con la tabla de multiplicar', opts)
  .help() // Permite agregar el comando de ayuda, mostrara las configuraciones
  .argv;

// EXPORTAR
module.exports = {
  argv
}
