//3 Create industry json object has key status, data & error check if status is success then parse the data
//& display it, in data key should be minimum has 5 object. Second if error is there then don't parse the data
var wltpData = {
    status: "success",
    error: "Invalid data",
    data: [
        {
            name: 'VW',
            Price: 38000,
            co2: 120
        },
        {
            name: 'Audi',
            Price: 28000,
            co2: 150
        },
        {
            name: 'Skoda',
            Price: 19000,
            co2: 111
        },
        {
            name: 'SEAT',
            Price: 18000,
            co2: 150
        },
        {
            name: 'Porsche',
            Price: 190000,
            co2: 220
        },
    ]
};
if (wltpData.status.toLowerCase() == "success") {
    for (var i = 0; i < wltpData.data.length; i++) {
        console.log("\n        Vehicle Name :: " + wltpData.data[i].name + "\n        Price        :: " + wltpData.data[i].Price + "\n        CO2          :: " + wltpData.data[i].co2 + "\n        ");
    }
}
else {
    console.log("Error=> " + wltpData.error);
}
