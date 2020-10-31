const { argv } = require('./config/yargs.js');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}


// console.log(process.argv);
// let argv2 = process.argv;

// console.log(argv.limite);

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]