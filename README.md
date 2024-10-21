# Proyecto: Nombre del Proyecto

Este es un proyecto Frontend Challenge. A continuación, se detallan los pasos para inicializar el proyecto, junto con explicaciones sobre las librerías utilizadas y sus beneficios.

## Instrucciones de inicialización

1.  **Clonar el repositorio**  
    Ejecuta el siguiente comando en tu terminal para clonar el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/tu-proyecto.git
    cd tu-proyecto

    ```

2.  **Instalar dependencias**  
     Inicia el servidor de desarrollo con el comando:

    ```bash
    pnpm install
    ```

3.  **Iniciar el servidor**

    Inicia el servidor de desarrollo con el comando:

    ```bash
    pnpm run dev
    ```

4.  **Construir para producción**  
     Para crear una versión optimizada para producción:

    ```bash
    pnpm run build
    ```

5.  **Deploy**

### Tecnologías

<h2>Tecnologías que use</h2>

<h3>1. React Hook Form</h3>

<p><strong>Lo ejegi por su rendimiento</strong>: Es ligero, reduce re-renders y ayuda en validacion de forma integrada.</p>

<h3>2. ShadCN</h3>

<p>Ofrece componentes accesibles y fáciles de usar y ya optimizados, permitiendo personalizarlos sin perder su consistencia.</p>

<h3>3. TailwindCSS</h3>
<p>Si bien se pidio que utilizara Saas o similares, considere la opcion de TailwindCSS debido a la familiaridad en las clases unitarias, y principalmente por el performance reduciendo el Bundle evitando esstilos repetidos y solo incluyendo clases que realmente utilicé</p>

<h2>Opciones para el desarrollo futuro</h2>

<h3>1. React Query para peticiones a API</h3>
<p>Mejora el rendimienot de las petticiones al API, tambien agiliza el manejo de estados y ofrece caracteristicas para peticiones más complejas </p>

<h3>2. Zustand para la gestión de estado global</h3>
<p>Maneja de mejor manera los estados, evitando los re-renders que te ofrece useContext de react, permitiendo actualizar solo los valores que en realidad necesitas, y su facil configuracion</p>
