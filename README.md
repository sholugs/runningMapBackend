# runningMapBackend

[![Build Status](https://travis-ci.org/username/projectname.svg?branch=master)](https://travis-ci.org/username/projectname)
[![Coverage Status](https://coveralls.io/repos/github/username/projectname/badge.svg?branch=master)](https://coveralls.io/github/username/projectname?branch=master)

Este proyecto es una aplicación web desarrollada con Nest.js y utiliza una arquitectura basada en microservicios. La aplicación está diseñada para llevar un registro de los usuarios y sus respectivos campos.


## Instalación

Para clonar e instalar este proyecto, sigue los siguientes pasos:

```bash
$git clone https://github.com/sholugs/runningMapBackend.git
$npm install
```

Una vez que el proyecto ha sido iniciado, puedes acceder a la API utilizando una herramienta como Postman o Insomnia.
## La API cuenta con las siguientes rutas:

- GET /users: Obtiene una lista de todos los usuarios registrados
- GET /users/:id: Obtiene un usuario en particular mediante su ID
- POST /users: Crea un nuevo usuario
- PUT /users/:id: Actualiza un usuario existente mediante su ID
- DELETE /users/:id: Elimina un usuario existente mediante su ID

## Además, cada usuario cuenta con los siguientes campos:

- id: ID único del usuario
- name: Nombre del usuario
- age: Edad del usuario
- email: Correo electrónico del usuario
- password: Contraseña del usuario (encriptada)
- created_at: Fecha de creación del usuario
- updated_at: Fecha de actualización del usuario



