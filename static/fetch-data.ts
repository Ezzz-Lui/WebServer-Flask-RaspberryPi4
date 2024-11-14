export default function getData() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            const temperatureElement = document.getElementById('temperature');
            const humidityElement = document.getElementById('humidity');
            const errorMessageElement = document.getElementById('errorMessage');

            if (temperatureElement && humidityElement && errorMessageElement) {
                if (data.temperature !== undefined && data.humidity !== undefined) {
                    temperatureElement.textContent = data.temperature;
                    humidityElement.textContent = data.humidity;
                    errorMessageElement.style.display = 'none';
                } else {
                    errorMessageElement.style.display = 'block';
                }
            }
        })
        .catch(() => {
            const errorMessageElement = document.getElementById('errorMessage');
            if (errorMessageElement) {
                errorMessageElement.style.display = 'block';
            }
        });
}