# LaburandoAndo

Este proyecto es una aplicación web sobre portal de trabajo.

## Logotipo 

<img src="./src/img/Logo.jpg" width="200" height="200">

##  Aplicación Web con React y Vite

Esta aplicación realizada en equipo corresponde al Proyecto Final del curso Especialización Frontend con React dictado por RollingCodeSchool.

## Fundamentación
LaburandoAndo surge de la necesidad de contar con un portal específico que pueda reunir una amplia variedad de trabajos autónomos, brindando visibilidad y oportunidades a profesionales independientes que buscan ampliar su clientela y conectar con nuevos clientes. La aplicación está diseñada para facilitar la búsqueda y contratación de servicios.

## Objetivo
El objetivo principal de LaburandoAndo es proporcionar una plataforma inclusiva y accesible que permita a trabajadores autónomos de diversas disciplinas promocionar sus servicios y conectar con potenciales clientes de manera eficiente. Queremos impulsar a estos profesionales dándoles una herramienta para aumentar su visibilidad, obtener más oportunidades de trabajo y establecer relaciones laborales significativas.

## Requerimientos obligatorios

1. Acceso y Registro de usuarios.
2. Implementación de navegación con rutas básicas y protegidas.
3. Implementación de componentes personalizados.
4. Desarrollo de al menos 2 Custom Hooks.
5. Uso de un gestor de estados Globales
6. Diseño de la interfaz de usuarios con framework de estilos.
7. Implementación de datos con api desde un servicio externo.
8. Manejo de errores del lado del cliente.

## Documentación

Definición de requerimientos:
🔗 [Requerimientos](https://docs.google.com/document/d/16tiuCTl4iTxX9pWXMaG5LXTYvLGEALZR746Ct8giFXU/edit)

## Enlace de Mockups de interfaces

Los mockups de interfaces fueron desarrollados usando la herramienta de software Draw.io.

<img src="https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_48dp.png" alt="Trello" title="Trello (para la gestión de proyectos)" width="48" height="48" style="margin-right: 10px"/>

🔗 [Mockups - Google Drive](https://drive.google.com/drive/folders/1xe-48xQfiHTv7FNPDXFjGq-PbEkx8tTn?usp=sharing)

## Deploy de la aplicación

🔗 [LaburandoAndo]()

## Integración con proyecto de Backend

Este proyecto de Frontend se integró a su proyecto Backend correspondiente donde se utilizó la base de datos no relacional de MongoDB para almacenar los datos.

* #### Repositorio Backend: [LaburandoAndo-Back](https://github.com/FranprzDev/LaburandoAndo-Back)

## Funcionalidades Principales 

### 1. Consulta de Profesionales

**Descripción:** Los usuarios pueden visualizar una lista de los anuncios de trabajadores autónomos.

**Página de Referencia:** Página de Profesionales.

**Componentes Clave:**  
- Lista de Profesionales  
- Filtros de Búsqueda  
- Paginación

**Acciones Principales:**  
- Buscar profesionales por categoría, ubicación o nombre.  
- Visualizar detalles del anuncio y del profesional.

**Resultado:** Los usuarios pueden buscar, navegar y hacer clic en un anuncio para ver más detalles del  anuncio y del profesional.

### 2. Visualización Detallada del Anuncio de un Profesional

**Descripción:** Los usuarios pueden ver detalles completos del anuncio de un profesional.

**Página de Referencia:**  
Página de Detalle del Profesional.

**Componentes Clave:**  
- Detalle del Anuncio  
- Información del Profesional  
- Botón de Contacto por WhatsApp  
- Sección de Comentarios y Valoraciones

**Acciones Principales:**  
- Contactar al profesional por WhatsApp.  
- Dejar comentarios y valoraciones sobre el profesional.

**Resultado:** Los usuarios pueden contactar al profesional y dejar su opinión sobre los servicios ofrecidos.

### 3. Valoraciones de Usuarios

**Descripción:** Los usuarios pueden dejar una valoración y comentario sobre los servicios de un profesional.

**Página de Referencia:** Sección de Comentarios y Valoraciones dentro del Detalle del Profesional.

**Componentes Clave:**  
- Formulario de Valoración  
- Rango de Estrellas

**Acción Principal:** Valorar y comentar sobre el anuncio del profesional.

**Resultado:** Las valoraciones se muestran en un rango de 1 a 5 estrellas y los comentarios quedan registrados en la sección del profesional.

### 4. Autenticación de Usuarios

**Descripción:** Los usuarios pueden iniciar sesión o registrarse en la plataforma.

**Página de Referencia:**  
- Página de Iniciar Sesión  
- Página de Registro

**Componentes Clave:**  
- Formulario de Inicio de Sesión  
- Formulario de Registro

**Acciones Principales:**  
- Iniciar sesión con correo y contraseña.  
- Crear una nueva cuenta.

**Resultado:** Los usuarios pueden acceder a sus cuentas o crear una nueva para utilizar las funcionalidades de la plataforma.

### 5. Modificación de Perfil de Profesional

**Descripción:** Los usuarios registrados como profesionales pueden modificar su perfil.

**Página de Referencia:** Página de Perfil del Profesional.

**Componentes Clave:** Formulario de Edición de Perfil.

**Acción Principal:** Modificar datos personales del perfil.

**Resultado:** Los profesionales pueden actualizar su información personal y de contacto.

### 6. Publicación de Anuncio de Trabajo

**Descripción:** Los profesionales pueden publicar anuncios de trabajo.

**Página de Referencia:** Página de Publicación de Anuncio.

**Componentes Clave:** Formulario de Publicación de Anuncio.

**Acción Principal:** Publicar un nuevo anuncio.

**Resultado:** Los anuncios se publican en la lista de profesionales disponibles para ser vistos por los usuarios.

### 7. Publicaciones de Profesionales

**Descripción:** Los profesionales pueden gestionar sus publicaciones de anuncios.

**Página de Referencia:** Página de Mis Publicaciones.

**Componentes Clave:**  
- Lista de Publicaciones  
- Opciones de Edición y Eliminación

**Acciones Principales:**  
- Editar publicaciones existentes.  
- Eliminar publicaciones.

**Resultado:** Los profesionales pueden mantener sus anuncios actualizados o eliminarlos si ya no son relevantes.

### 8. Envío de Mensajes

**Descripción:** Los profesionales pueden enviar mensajes al soporte en caso de tener alguna consulta, sugerencia o problema.

**Página de Referencia:** Página de Soporte.

**Componentes Clave:** Formulario de Contacto.

**Acción Principal:** Enviar mensaje al Soporte.

**Resultado:** Los mensajes se envían al equipo de soporte para ser atendidos.

### 9. Administración de Soporte

**Descripción:** Los administradores pueden gestionar los mensajes enviados por los profesionales al soporte.

**Página de Referencia:** Página de Soporte en el Panel de Administración.

**Componentes Clave:**  
- Lista de Mensajes de Soporte  
- Filtros de Mensajes (Leídos y No Leídos)

**Acciones Principales:**  
- Marcar mensajes como leídos o no leídos.  
- Visualizar número de mensajes pendientes.

**Resultado:** Los administradores pueden gestionar eficientemente el soporte ofrecido a los profesionales.

## Tecnologías utilizadas

- Mockups:
    - Draw.io
- Frontend:
    - HTML5, CSS3, Bootstrap5, Javascript, Reactjs, React-Hook-Form, React-Router-Dom, React-Bootstrap, React-Redux, Redux-Toolkit, Jason Web Token (JWT), Axios, SweetAlert, React-Icons
- Gestión del proyecto:
    - Trello, Metodología Scrumban
- Envío de emails:
    - Email JS
- Almacenamiento de imagénes:
    - Cloudinary
- Backend:
    - Node js, Express js, MongoDB, Mongoose, Passport, bcrypt

## Requisitos previos

- Node.js instalado en tu sistema. Puedes descargarlo [aquí](https://nodejs.org/).

## Configuración

1. Clona este repositorio en tu máquina local a través de una terminal:

  git clone <[url-del-repositorio](https://github.com/FranprzDev/LaburandoAndo)>

2. Navega al directorio del proyecto:

  cd LaburandoAndo

3. Instala las dependencias del proyecto:

  npm install

## Crear un proyecto con React usando Vite

Guía de pasos necesarios para crear un nuevo proyecto con React utilizando Vite.

### Pasos

### 1. Crear el proyecto

En tu terminal, navega hasta la carpeta donde deseas crear el proyecto o trabajo práctico.

npm create vite@latest

### 2. Configuración inicial

Después de ejecutar el comando anterior, se te pedirá que ingreses el nombre de tu proyecto. Escribe el nombre deseado y presiona Enter.

Se te pedirá confirmar el nombre del paquete. Selecciona la opción predeterminada (el mismo nombre del proyecto) y presiona Enter.

### 3. Seleccionar opciones

Se te presentará una lista de opciones para elegir el framework. Selecciona la opción de React.

Luego, se te pedirá que elijas el tipo de script a usar. Elige la opción de JavaScript, que utiliza webpack para configurar todo el proyecto de React.

Presiona Enter para confirmar tu selección.

### 4. Configuración final

Una vez confirmadas las opciones, se mostrarán los comandos que debes ejecutar en orden:

- `cd nombreProyecto`: Cambia al directorio del proyecto recién creado.
- `npm install`: Instala las dependencias del proyecto. Este comando solo necesita ejecutarse una vez.
- `npm run dev`: Inicia un servidor de desarrollo interno, similar a live server. Después de ejecutar este comando, se te proporcionará un enlace para acceder al template creado.

### 5. Desarrollo

Una vez que hayas ejecutado el tercer comando y tengas el servidor en funcionamiento, puedes continuar trabajando en tu proyecto desde la terminal de tu editor de código preferido. Para salir del servidor interno en la terminal, simplemente presiona `ctrl + c`.

## Equipo

| Nombre                              | Perfil GitHub                                            |
|-------------------------------------|----------------------------------------------------------|
| Bruno Madozzo Romay                 | [brunomry](https://github.com/brunomry)                  |
| Francisco Miguel Perez              | [Franprz_Dev](https://github.com/FranprzDev)              |
| Julian Martin                      | [Juliancito1](https://github.com/Juliancito1)                |
| Nicolas Cosme Mas                      | [CosmeNicolas](https://github.com/CosmeNicolas)                |
| Flavia Maria Walther Virla                     | [flawalther](https://github.com/flawalther)                |