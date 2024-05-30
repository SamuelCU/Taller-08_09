import {app, express} from "./server.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname)));
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());

const integrantes = [
    {
        id: 1,
        nombre: "Dustin Joel Marcatoma Saldaña",
        edad: 20,
        peso: 74,
        estatura: 1.60,
        fecha_nacimiento: "2004-01-02",
        tipo_sangre: "O+",
        nacionalidad: "Ecuatoriano",
        correo: "dustin04ms@gmail.com",
        celular: "0979008923",
        imagen:"" 
    },
    {
        id: 2,
        nombre: "Anthony Alejandro Minga Campoverde",
        edad: 22,
        peso: 85,
        estatura: 1.75,
        fecha_nacimiento: "2002-03-27",
        tipo_sangre: "A+",
        nacionalidad: "Ecuatoriano",
        correo: "anthony.minga@epn.edu.ec",
        celular: "0968862213",
        imagen:""
    },
    {
        id: 3,
        nombre: "Estefanía Melisa Sánchez Párraga",
        edad: 24,
        peso: 49,
        estatura: 1.60,
        fecha_nacimiento: "2000-12-11",
        tipo_sangre: "B+",
        nacionalidad: "Ecuatoriana",
        correo: "estefania.sanchez@epn.edu.ec",
        celular: "0992190967",
        imagen:""
    },
    {
        id: 4,
        nombre: "Alan Josue Rios Mendoza",
        edad: 21,
        peso: 70,
        altura: 1.67,
        fecha_nacimiento: "2003-01-02",
        tipo_sangre: "O+",
        nacionalidad: "Ecuatoriano",
        correo: "alan.rios@epn.edu.ec",
        celular: "0960131442",
        imagen: ""
    },
    {
        id: 5,
        nombre: "Rob Samuel Cuti Umaquinga",
        edad: 21,
        peso: 85,
        altura: 1.74,
        fecha_nacimiento: "2003-10-11",
        tipo_sangre: "O+",
        nacionalidad: "Ecuatoriano",
        correo: "rob.cutip@epn.edu.ec",
        celular: "0984253830",
        imagen: ""
    },
    {
        id: 6,
        nombre: "John Jairo Mata Manosalvas",
        edad: 21,
        peso: 70,
        altura: 1.87,
        fecha_nacimiento: "2003-04-27",
        tipo_sangre: "A+",
        nacionalidad: "Ecuatoriano",
        correo: "john.mata@epn.edu.ec",
        celular: "0990123317",
        imagen: ""
    }
]




app.get('/home', (req, res) => {
    res.send(`
    <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Título de la página</title>
    <style>
        
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        header {
            background-color: #333;
            color: white;
            padding: 1rem;
            text-align: center;
        }
        main {
            padding: 1rem;
        }
        footer {
            background-color: #333;
            color: white;
            padding: 1rem;
            text-align: center;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    </style>
</head>
<body>
    <header>
        <h1>Información del Grupo </h1>
    </header>

    <main>
        <h2>Grupo #3</h2>
        <p>Equipo de desarrollo enfocado en la resolución de problemas del lado del servidor y cliente con excelente< ambiente laboral, compuesto por personalidades bastantes simpáticas y con buenos valores, además de un perfecto curriculum donde se resalta la simplicidad y el buen trabajo de nuestros proyectos</p>
    </main>

    <footer>
        <p>ALL RIGHT RESERVED - © 2024</p>
    </footer>
</body>
</html>

    `)
})


app.get ('/integrantes', (req, res) => {
    res.json(integrantes)
})

app.get('/integrantes/:id', (req, res) =>{
    const {id} = req.params
    const response = integrantes.find(integrante => integrante.id === +id)
    response ? res.json(response) : res.status(401).json({msg: "Integrante inexistente"})
})

app.get('/productos', (req, res) => {
    res.sendFile('index.html', {root:__dirname})
})
















app.use((req, res) => res.send('NOT FOUND -404'))

app.listen(3000,() => console.log('Server running'));