// Selección de los elementos HTML
const greenRange = document.getElementById('greenRange');
const redRange = document.getElementById('redRange');

const greenStripe = document.getElementById('greenStripe');
const redStripe = document.getElementById('redStripe');

// Función para actualizar el color verde según la barra de rango
greenRange.addEventListener('input', function() {
    const greenValue = greenRange.value;
    // Cambiamos el color verde con la intensidad de verde que selecciona el usuario
    greenStripe.style.backgroundColor = `rgb(0, ${greenValue}, 71)`;
});

// Función para actualizar el color rojo según la barra de rango
redRange.addEventListener('input', function() {
    const redValue = redRange.value;
    // Cambiamos el color rojo con la intensidad de rojo que selecciona el usuario
    redStripe.style.backgroundColor = `rgb(${redValue}, 17, 38)`;
});
