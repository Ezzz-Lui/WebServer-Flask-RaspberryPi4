import time
from flask import Flask, render_template, jsonify
import RPi.GPIO as GPIO
import adafruit_dht
import board

dht_device = adafruit_dht.DHT11(board.D14, use_pulseio=False)

app = Flask(__name__)
GPIO.setmode(GPIO.BCM)
GPIO.setwarnings(False)

# Esta función obtiene los datos del sensor
def get_sensor_data():
    try:
        # Obtener los valores de temperatura y humedad
        temperature_c = dht_device.temperature
        humidity = dht_device.humidity
        
        # Convertir los valores a enteros
        tempint = int(temperature_c)
        humint = int(humidity)
        
        return {'temperature': tempint, 'humidity': humint}
    except RuntimeError as err:
        print(err.args[0])
        return {'error': 'Error al obtener los datos'}

@app.route("/")
def index():
    # Servir la página principal (index.html) desde la carpeta "templates"
    return render_template('index.html')

@app.route("/data", methods=["GET"])
def get_data():
    # Llamar a la función para obtener datos y retornarlos como JSON
    data = get_sensor_data()
    return jsonify(data)

def destroy():
    GPIO.cleanup()

if __name__ == "__main__":
    try:
        print("Raspberry Pi DHT11 Temperature and Humidity Test Program")
        app.run(debug=True, port=8080, host="0.0.0.0")
    except KeyboardInterrupt:
        destroy()