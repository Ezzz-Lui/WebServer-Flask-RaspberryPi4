# Monitor de Temperatura y Humedad con Flask y Raspberry Pi 4

Este proyecto muestra cómo crear una aplicación web para monitorear la temperatura y humedad utilizando Flask y una Raspberry Pi 4.

## USO
Todo el codigo funciona esta en el archivo **tempHumWeb.py**
- /templates : Contiene el archivo html que se renderiza en el navegador
- /static : Contiene el archivo css, javascript y typescript que se utiliza para dar estilo al html, hacer dinamica la renderizacion **(opcional >>> No es funcional de momento)**

## Requisitos

- Raspberry Pi 4
- Sensor de temperatura y humedad (DHT11, DHT22, etc.)
- Python 3
- Flask
- Biblioteca Adafruit_DHT

## Instalación

1. **Clonar el repositorio:**

    ```bash
    git clone https://github.com/tu_usuario/tu_repositorio.git
    cd tu_repositorio
    ```

2. **Crear un entorno virtual:**

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # En Windows usa `venv\Scripts\activate`
    ```

3. **Instalar las dependencias:**

    ```bash
    pip install -r requirements.txt
    ```

4. **Configurar el sensor:**

    Asegúrate de conectar el sensor de temperatura y humedad a los pines correctos de la Raspberry Pi.

## Ejecución

1. **Ejecutar la aplicación Flask:**

    ```bash
    export FLASK_APP=app.py
    flask run --host=0.0.0.0
    ```

    Esto iniciará el servidor Flask y estará disponible en la dirección IP de tu Raspberry Pi en el puerto 5000.
    Idealmente recomiendo el uso de VSCode para la ejecucion de la aplicacion, ya que en terminal hay un error actual con la libreria **Adafruit_DHT**.

2. **Acceder a la aplicación:**

    Abre un navegador web y navega a `http://<IP_de_tu_Raspberry_Pi>:5000` para ver la interfaz de monitoreo, o en todo caso en la configuracion de su codigo.


## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, abre un issue o envía un pull request para mejorar este proyecto.
