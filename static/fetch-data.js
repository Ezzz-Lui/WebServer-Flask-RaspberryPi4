export default function getData() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            if (data.temperature !== undefined && data.humidity !== undefined) {
                // Actualizar los valores en la página
                document.getElementById('temperature').textContent = data.temperature;
                document.getElementById('humidity').textContent = data.humidity;
                document.getElementById('errorMessage').style.display = 'none';
            } else {
                document.getElementById('errorMessage').style.display = 'block';
            }
        })
        .catch(() => {
            document.getElementById('errorMessage').style.display = 'block';
        });
}

setInterval(getData, 5000);  // Cada 5 segundos (5000 milisegundos)
window.onload = getData;