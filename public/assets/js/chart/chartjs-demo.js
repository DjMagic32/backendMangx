$(function () {

    var lineData = {
        labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
        datasets: [

            {
                label: "En Ayunas",
                borderDash: [5, 5],
                fill: false,
                backgroundColor: 'rgba(255,255,255,0)',
                pointBorderColor: "#5867c3",
                borderColor: "#5867c3",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Despues de Comer",
                backgroundColor: 'rgba(255,255,255,0)',
                borderColor: "#ffaa00",
                pointBackgroundColor: "#ffaa00",
                pointBorderColor: "#ffaa00",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var lineOptions = {
        responsive: true
    };


    var ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});

    var barData = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "Data 1",
                backgroundColor: '#5867c3',
                pointBorderColor: "#fff",
                data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
                label: "Data 2",
                backgroundColor: '#ffaa00',
                borderColor: "rgba(26,179,148,0.7)",
                pointBackgroundColor: "#ffaa00",
                pointBorderColor: "#fff",
                data: [28, 48, 40, 19, 86, 27, 90]
            }
        ]
    };

    var barOptions = {
        responsive: true
    };


    var ctx2 = document.getElementById("barChart").getContext("2d");
    new Chart(ctx2, {type: 'bar', data: barData, options:barOptions});

    var polarData = {
        datasets: [{
            data: [
                300,140,200
            ],
            backgroundColor: [
                "#FFC401", "#FF0033", "#00E80C"
            ],
            label: [
                "Data"
            ]
        }],
        labels: [
            "Data 1","Data 2","Data 3"
        ]
    };

    var polarOptions = {
        segmentStrokeWidth: 2,
        responsive: true

    };

    var ctx3 = document.getElementById("polarChart").getContext("2d");
    new Chart(ctx3, {type: 'polarArea', data: polarData, options:polarOptions});

    var doughnutData = {
        labels: ["Data 1","Data 2","Data 3" ],
        datasets: [{
            data: [300,-200,100],
            backgroundColor: ["#02C1E5","#00E80C","#2E4BCF"]
        }]
    } ;


    var doughnutOptions = {
        responsive: true
    };


    var ctx4 = document.getElementById("doughnutChart").getContext("2d");
    new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});


    var radarData = {
        labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: "rgba(255, 0, 51, 0.29)",
                borderColor: "#FF0033",
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                backgroundColor: "rgba(46, 75, 207, 0.27)",
                borderColor: "#2E4BCF",
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };

    var radarOptions = {
        responsive: true
    };

    var ctx5 = document.getElementById("radarChart").getContext("2d");
    new Chart(ctx5, {type: 'radar', data: radarData, options:radarOptions});



});
