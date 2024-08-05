function calculateSavings() {
    const consumption = parseFloat(document.getElementById('consumption').value);
    const systemSize = parseFloat(document.getElementById('systemSize').value);
    const electricityRate = parseFloat(document.getElementById('electricityRate').value);

    // Check for valid inputs
    if (isNaN(consumption) || isNaN(systemSize) || isNaN(electricityRate)) {
        document.getElementById('result').innerText = "Please enter valid numbers.";
        return;
    }

    // Simple fixed values for average sunlight hours and efficiency
    const sunlightHours = 5; // average value
    const efficiency = 0.75; // typical efficiency rate

    // Calculate monthly solar energy production (kWh)
    const monthlyProduction = systemSize * sunlightHours * 30 * efficiency;

    // Calculate monthly savings
    const monthlySavings = Math.min(consumption, monthlyProduction) * electricityRate;

    // Display result
    document.getElementById('result').innerText = `Estimated Monthly Savings: ₹${monthlySavings.toFixed(2)}`;
}