function calculateCarbon() {
  const electricity = parseFloat(document.getElementById("electricity").value) || 0;
  const fuel = parseFloat(document.getElementById("fuel").value) || 0;
  const transport = parseFloat(document.getElementById("transport").value) || 0;

  // Factores de emisión (valores aproximados)
  const electricityFactor = 0.233; // kg CO2/kWh
  const fuelFactor = 2.3;          // kg CO2/litro
  const transportFactor = 0.102;   // kg CO2/km

  const carbonFootprint =
    electricity * electricityFactor +
    fuel * fuelFactor +
    transport * transportFactor;

  document.getElementById("result").textContent =
    `Tu huella de carbono estimada es de ${carbonFootprint.toFixed(2)} kg CO2 al mes.`;
}