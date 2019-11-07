// Write the code for the model and write the data
// to the ForecastOutput table in the database

function forecastOutput(unitsOrder, totalOrder, masterCarton, input1, input2, input3, input4) {
    // let unitsOrder = 0;
    // let totalOrder = 0;
    let orderAmount = 0;
    let leadTime = 0; // represented in days
    let growthPercentage = 0;

    // input1 = 0.8
    if (totalOrder / unitsOrder >= input1) {
        orderAmount = unitsOrder;
    }
    // input2 = 0.25
    else if (totalOrder / unitsOrder < input2) {
        orderAmount = unitsOrder * 0.5;
    }
    // input3 = 0.49
    else if (totalOrder / unitsOrder <= input3) {
        orderAmount = unitsOrder * 0.7;
    }
    // input4 = 0.79
    else if(totalOrder / unitsOrder <= input4) {
        orderAmount = unitsOrder * 0.88;
    }

    // Adjustment for master carton. Should return number of master cartons to order
    if (((orderAmount % masterCarton) / masterCarton) >= 0.5) {
        return Math.round(orderAmount / masterCarton, 0);
    }
    else {
        return Math.floor(orderAmount / masterCarton)
    }

}

console.log(forecastOutput(31, 18, 10, 0.8, 0.25, 0.49, 0.79));

module.exports = forecastOutput;