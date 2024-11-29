
# App Dog Collection 🐾  
Una aplicación completa que permite gestionar y explorar diferentes razas de perros, proporcionando una experiencia interactiva y moderna tanto en el frontend como en el backend.

## Características principales  
- 🐶 **Listado de razas de perros**: Consulta información detallada de diversas razas.  
- 🔍 **Búsqueda avanzada**: Encuentra razas específicas usando filtros y búsqueda por nombre.  
- ✨ **Diseño atractivo y moderno**: Interfaz de usuario amigable.  
- 🚀 **Backend robusto**: API desarrollada para manejar solicitudes de datos de manera eficiente.
- 🚀 **Autenticacion con JWT**: crear usario y validar su autenticacion con json web token.  

## Tecnologías utilizadas  
**Frontend**  
- React (Redux, firebase, material UI, sweetalert).  

**Backend**  
- Node.js y Express.  

**Base de datos**  
- PostgreSQL para manejar datos de las razas.

**Otras herramientas**  
- Railway para despliegue.  
- Git para control de versiones.  

## Instalación  
Sigue estos pasos para ejecutar la aplicación en tu entorno local:

### Requisitos previos  
- Node.js (v14 o superior).  
- PostgreSQL instalado y configurado.  
- Git instalado.

### Pasos  
1. Clona este repositorio:  
   ```bash
   git clone https://github.com/hidalgo86/App_Dog_Collection.git
   cd App_Dog_Collection
   ```  

2. Instala las dependencias del servidor y cliente:  
   ```bash
   cd api
   npm install
   cd ../client
   npm install
   ```  

3. Configura las variables de entorno:  
   - Crea un archivo `.env` en la carpeta `api` con las siguientes claves:  
     ```env
     DB_HOST=localhost
     DB_USER=usuario
     DB_PASS=contraseña
     DB_NAME=dog_collection
     ```  

4. Inicia la aplicación:  
   - Inicia el servidor:  
     ```bash
     cd api
     npm start
     ```  
   - Inicia el cliente:  
     ```bash
     cd ../client
     npm start
     ```  

5. Accede a la aplicación en tu navegador:  
   ```text
   http://localhost:3000
   ```

## Capturas de pantalla  
![Pagina Principal](./image/imagen_1.png)
![Pagina de trabajo](./image/imagen_2.png)

## Cómo contribuir  
Si deseas contribuir al proyecto:  

1. Haz un fork del repositorio.  
2. Crea una rama para tu funcionalidad:  
   ```bash
   git checkout -b mi-nueva-funcionalidad
   ```  
3. Haz commit de tus cambios:  
   ```bash
   git commit -m "Añadida nueva funcionalidad"
   ```  
4. Haz push a tu rama:  
   ```bash
   git push origin mi-nueva-funcionalidad
   ```  
5. Abre un pull request.

## Licencia  
Este proyecto está bajo la licencia MIT.

## 📧 Contacto

Desarrollado por **Eduardo Hidalgo**.  
Para más información, contáctame en: [hidalgojose86@gmail.com](mailto:hidalgojose86@gmail.com).