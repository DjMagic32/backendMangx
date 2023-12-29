$(function () {
  var data = {};
  data.medical_test_type_id = 1;//TODO CHANGE
  //ONE
  // $.ajax({
  //   url: "/categorytest/<%= @user.id %>",
  //   type: "POST",
  //   data: data,
  //   success: function(data) {
  //     if (false) {
  //     // if (!data.success) {
  //     //  alertify.success('Datos procesados exitosamente!');
  //       var lineData2 = {};
  //       lineData2.datasets = [];
  //       for (var i = 0; i < data.test.length; i++) {
  //         var values = [];
  //         console.log(data.test[i].id);
  //         for (var x = 0; x< data.test_levels.length; x++) {
  //           if (data.test[i].id ==  data.test_levels[x].medical_test_id) {
  //             values.push(data.test_levels[x].value);
  //           }
  //           console.log(values);
  //         }
  //         var color = randomColor({hue: 'random'});
  //         lineData2.datasets.push({ label: data.test[i].order_number, data: values,
  //           backgroundColor: ""+color,pointBorderColor:""+color,borderColor:""+color, fill: true });
  //         }
  //         var lineOptions2 = {
  //           responsive: true
  //         };
  //         console.log(lineData2);
  //         var ctxb = document.getElementById("lineChart2").getContext("2d");
  //         new Chart(ctxb, {type: 'line', data: lineData2, options:lineOptions2});
  //       }else{
//  alertify.error('No existen datos para mostrar la grafica! (Se muestra un demo)');
  //data2
  var lineData2 = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [
      {
        label: "Variable 1",
        backgroundColor: '#5867c3',
        pointBorderColor: "#5867c3",
        borderColor: "#5867c3",
        data: [-25, -19, 80, 81, -56, 55, 40],
        fill: true
      },
      {
        label: "Variable 2",
        backgroundColor: '#ffaa00',
        borderColor: "#ffaa00",
        pointBackgroundColor: "#ffaa00",
        pointBorderColor: "#ffaa00",
        data: [28, 48, 40, -19, 86, -27, 90],
        fill: true
      },
      {
        label: "Variable 3",
        backgroundColor: '#00d3b8',
        borderColor: "#00d3b8",
        pointBackgroundColor: "#00d3b8",
        pointBorderColor: "#00d3b8",
        data: [-19, 36, -57, -20, 28, 18, -10],
        fill: true
      },
      {
        label: "Variable 4",
        backgroundColor: '#1da1f2',
        borderColor: "#1da1f2",
        pointBackgroundColor: "#1da1f2",
        pointBorderColor: "#1da1f2",
        data: [-19, 36, -57, -20, 28, 18, -10],
        fill: true
      }
    ]
  };
  var lineOptions2 = {
    responsive: true
  };
  var ctxb = document.getElementById("lineChart2").getContext("2d");
  new Chart(ctxb, {type: 'line', data: lineData2, options:lineOptions2});
  //     }
  //   }
  // });
  //TWO
  // $.ajax({
  //   url: "/categorytest/<%= @user.id %>",
  //   type: "POST",
  //   data: data,
  //   success: function(data) {
  //     if (false) {
  //     //if (!data.success) {
  //     //  alertify.success('Datos procesados exitosamente!');
  //       var lineData1 = {};
  //       lineData2.datasets = [];
  //       for (var i = 0; i < data.test.length; i++) {
  //         var values = [];
  //         console.log(data.test[i].id);
  //         for (var x = 0; x< data.test_levels.length; x++) {
  //           if (data.test[i].id ==  data.test_levels[x].medical_test_id) {
  //             values.push(data.test_levels[x].value);
  //           }
  //           console.log(values);
  //         }
  //         var color = randomColor({hue: 'random'});
  //         lineData1.datasets.push({ label: data.test[i].order_number, data: values,
  //           backgroundColor: ""+color,pointBorderColor:""+color,borderColor:""+color, fill: true });
  //         }
  //         var lineOptions1 = {
  //           responsive: true
  //         };
  //         console.log(lineData2);
  //         var ctxb = document.getElementById("lineChart2").getContext("2d");
  //         new Chart(ctxb, {type: 'line', data: lineData1, options:lineOptions1});
  //       }else{
//  alertify.error('No existen datos para mostrar la grafica! (Se muestra un demo)');
  //data1
  var lineData1 = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [

      {
        label: "Variable 1",
        borderDash: [5, 5],
        fill: false,
        backgroundColor: 'rgba(255,255,255,0)',
        pointBorderColor: "#5867c3",
        borderColor: "#5867c3",
        data: [-25, -19, 80, 81, -56, 55, 40]
      },
      {
        label: "Variable 2",
        backgroundColor: 'rgba(255,255,255,0)',
        borderColor: "#ffaa00",
        pointBackgroundColor: "#ffaa00",
        pointBorderColor: "#ffaa00",
        data: [28, 48, 40, -19, 86, -27, 90]
      },
      {
        label: "Variable 3",
        backgroundColor: '#00d3b8',
        borderColor: "#00d3b8",
        pointBackgroundColor: "#00d3b8",
        pointBorderColor: "#00d3b8",
        data: [-19, 36, -57, -20, 28, 18, -10],
        fill: true
      }
    ]
  };

  var lineOptions1 = {
    responsive: true
  };

  var ctxa = document.getElementById("lineChart1").getContext("2d");
  new Chart(ctxa, {type: 'line', data: lineData1, options:lineOptions1});
  //     }
  //   }
  // });
  //THREE
  // $.ajax({
  //   url: "/categorytest/<%= @user.id %>",
  //   type: "POST",
  //   data: data,
  //   success: function(data) {
  //     if (false) {
  //     //if (data.success) {
  //     //  alertify.success('Datos procesados exitosamente!');
  //       var lineData = {};
  //       lineData.datasets = [];
  //       for (var i = 0; i < data.test.length; i++) {
  //         var values = [];
  //         console.log(data.test[i].id);
  //         for (var x = 0; x< data.test_levels.length; x++) {
  //           if (data.test[i].id ==  data.test_levels[x].medical_test_id) {
  //             values.push(data.test_levels[x].value);
  //           }
  //           console.log(values);
  //         }
  //         var color = randomColor({hue: 'random'});
  //         lineData.datasets.push({ label: data.test[i].order_number, data: values,
  //           backgroundColor: ""+color,pointBorderColor:""+color,borderColor:""+color, fill: true });
  //         }
  //         var lineOptions = {
  //           responsive: true
  //         };
  //         console.log(lineData);
  //         var ctxb = document.getElementById("lineChart2").getContext("2d");
  //         new Chart(ctxb, {type: 'line', data: lineData, options:lineOptions});
  //       }else{
//  alertify.error('No existen datos para mostrar la grafica! (Se muestra un demo)');
  //line
  var lineData = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [

      {
        label: "Variable 1",
        borderDash: [5, 5],
        fill: false,
        backgroundColor: 'rgba(255,255,255,0)',
        pointBorderColor: "#5867c3",
        borderColor: "#5867c3",
        data: [-25, -19, 80, 81, -56, 55, 40]
      },
      {
        label: "Variable 2",
        backgroundColor: 'rgba(255,255,255,0)',
        borderColor: "#ffaa00",
        pointBackgroundColor: "#ffaa00",
        pointBorderColor: "#ffaa00",
        data: [28, 48, 40, -19, 86, -27, 90]
      }
    ]
  };

  var lineOptions = {
    responsive: true
  };


  var ctx = document.getElementById("lineChart").getContext("2d");
  new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});
  //     }
  //   }
  // });
  //FOR
  // $.ajax({
  //   url: "/categorytest/<%= @user.id %>",
  //   type: "POST",
  //   data: data,
  //   success: function(data) {
  //     if (false) {
  //     //if (!data.success) {
  //     //  alertify.success('Datos procesados exitosamente!');
  //
  //     }else{
  // alertify.error('No existen datos para mostrar la grafica! (Se muestra un demo)');
  //bar
  var barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Variable 1",
        backgroundColor: '#5867c3',
        pointBorderColor: "#fff",
        data: [65, -59, 80, 81, 56, 55, 40]
      },
      {
        label: "Variable 2",
        backgroundColor: '#ffaa00',
        pointBackgroundColor: "#ffaa00",
        pointBorderColor: "#fff",
        data: [28, -38, 20, -19, 86, -27, 90]
      },
      {
        label: "Variable 3",
        backgroundColor: '#e6ebf1',
        pointBackgroundColor: "#e6ebf1",
        pointBorderColor: "#fff",
        data: [-28, 48, -40, 19, -86, 27, -90]
      }
    ]
  };

  var barOptions = {
    responsive: true
  };


  var ctx2 = document.getElementById("barChart").getContext("2d");
  new Chart(ctx2, {type: 'bar', data: barData, options:barOptions});
  //     }
  //   }
  // });
  //FIVE
  // $.ajax({
  //   url: "/categorytest/<%= @user.id %>",
  //   type: "POST",
  //   data: data,
  //   success: function(data) {
  //     if (false) {
  //     //if (!data.success) {
  //     //  alertify.success('Datos procesados exitosamente!');
  //
  //     }else{
  // alertify.error('No existen datos para mostrar la grafica! (Se muestra un demo)');
  //polar
  var polarData = {
    datasets: [{
      data: [
        20,20,20,20,20
      ],
      backgroundColor: [
        "#1da1f2", "#5867c3", "#00d3b8", "#ffaa00", "#ff7175"
      ],
      label: [
        "Data"
      ]
    }],
    labels: [
      "Lunes","Martes","Miercoles","Jueves","Viernes"
    ]
  };

  var polarOptions = {
    segmentStrokeWidth: 2,
    responsive: true

  };

  var ctx3 = document.getElementById("polarChart").getContext("2d");
  new Chart(ctx3, {type: 'polarArea', data: polarData, options:polarOptions});
  //doughnut
  var doughnutData = {
    labels: ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],
    datasets: [{
      data: [100,100,100,100,100,100,100],
      backgroundColor: ["#5867c3","#ff7175","#ffaa00","#ffdb03","#00c5dc","#15b597","#be58c3"]
    }]
  } ;


  var doughnutOptions = {
    responsive: true
  };


  var ctx4 = document.getElementById("doughnutChart").getContext("2d");
  new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});
  //     }
  //   }
  // });
  //SIX
  // $.ajax({
  //   url: "/categorytest/<%= @user.id %>",
  //   type: "POST",
  //   data: data,
  //   success: function(data) {
  //     if (false) {
  //     //if (!data.success) {
  //     //  alertify.success('Datos procesados exitosamente!');
  //
  //     }else{
  // alertify.error('No existen datos para mostrar la grafica! (Se muestra un demo)');
  //radar
  var radarData = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8","9","10"],
    datasets: [

      {
        label: "Variable 1",
        borderDash: [5, 5],
        fill: false,
        backgroundColor: 'rgba(255,255,255,0)',
        pointBorderColor: "#5867c3",
        borderColor: "#5867c3",
        pointRadius: 15,
        pointHoverRadius: 10,
        data: [-25, -19, 80, 81, -56, 55, 40, 10, 23,12]
      },
      {
        label: "Variable 2",
        backgroundColor: 'rgba(255,255,255,0)',
        borderColor: "#ffaa00",
        pointBackgroundColor: "#ffaa00",
        pointBorderColor: "#ffaa00",
        pointRadius: 15,
        pointHoverRadius: 10,
        data: [28, 48, 40, -19, 86, -27, 90, 10, 23,12]
      }
    ]
  };

  var radarOptions = {
    responsive: true
  };

  var ctx5 = document.getElementById("radarChart").getContext("2d");
  new Chart(ctx5, {type: 'line', data: radarData, options:radarOptions});
  //     }
  //   }
  // });
  //Seven
  // $.ajax({
  //   url: "/categorytest/<%= @user.id %>",
  //   type: "POST",
  //   data: data,
  //   success: function(data) {
  //     if (false) {
  //     //if (!data.success) {
  //     //  alertify.success('Datos procesados exitosamente!');
  //
  //     }else{
  // alertify.error('No existen datos para mostrar la grafica! (Se muestra un demo)');
  //mixed chart
  var barData4 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Variable 1",
        type: 'line',
        fill: false,
        borderColor: "#00d3b8",
        backgroundColor: '#00d3b8',
        pointBorderColor: "#00d3b8",
        data: [65, -59, 80, 81, 56, 55, 40]
      },
      {
        label: "Variable 2",
        type: 'bar',
        backgroundColor: '#ffaa00',
        pointBackgroundColor: "#ffaa00",
        pointBorderColor: "#fff",
        data: [28, -38, 20, -19, 86, -27, 90]
      },
      {
        label: "Variable 3",
        type:'bar',
        backgroundColor: '#5867c3',
        pointBackgroundColor: "#5867c3",
        pointBorderColor: "#5867c3",
        data: [-28, 48, -40, 19, -86, 27, -90]
      }
    ]
  };

  var barOptions4 = {
    responsive: true
  };


  var ctxd = document.getElementById("lineChart3").getContext("2d");
  new Chart(ctxd, {type: 'bar', data: barData4, options:barOptions4});
  //     }
  //   }
  // });
  //EIght
  // $.ajax({
  //   url: "/categorytest/<%= @user.id %>",
  //   type: "POST",
  //   data: data,
  //   success: function(data) {
  //     if (false) {
  //     //if (!data.success) {
  //     //  alertify.success('Datos procesados exitosamente!');
  //
  //     }else{
  // alertify.error('No existen datos para mostrar la grafica! (Se muestra un demo)');
  //data4
  var lineData4 = {
    labels: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    datasets: [

      {
        label: "Variable 1",
        fill: false,
        backgroundColor: '#5867c3',
        pointBorderColor: "#5867c3",
        borderColor: "#5867c3",
        data: [-25, -19, 80, 81, -56, 55, 40],
      },
      {
        label: "Variable 2",
        fill: false,
        backgroundColor: '#ffaa00',
        borderColor: "#ffaa00",
        pointBackgroundColor: "#ffaa00",
        pointBorderColor: "#ffaa00",
        data: [28, 48, 40, -19, 86, -27, 90],
      }
    ]
  };

  var lineOptions4 = {
    responsive: true
  };


  var ctx4 = document.getElementById("lineChart4").getContext("2d");
  new Chart(ctx4, {type: 'line', data: lineData4, options:lineOptions4});
  //
  //     }
  //   }
  // });
  //NINE
  // $.ajax({
  //   url: "/categorytest/<%= @user.id %>",
  //   type: "POST",
  //   data: data,
  //   success: function(data) {
  //     if (false) {
  //     //if (!data.success) {
  //     //  alertify.success('Datos procesados exitosamente!');
  //
  //     }else{
  // alertify.error('No existen datos para mostrar la grafica! (Se muestra un demo)');
  //mixed chart

  var barData4a = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Variable 1",
        type: 'line',
        fill: true,
        borderColor: "#00d3b8",
        backgroundColor: '#5fd5b857',
        pointBorderColor: "#00d3b8",
        data: [65, -59, 80, 81, 56, 55, 40]
      },
      {
        label: "Variable 2",
        type: 'bar',
        backgroundColor: '#ffaa00',
        pointBackgroundColor: "#ffaa00",
        pointBorderColor: "#fff",
        data: [28, -38, 20, -19, 86, -27, 90]
      },
      {
        label: "Variable 3",
        type:'bar',
        backgroundColor: '#5867c3',
        pointBackgroundColor: "#5867c3",
        pointBorderColor: "#5867c3",
        data: [-28, 48, -40, 19, -86, 27, -90]
      }
    ]
  };

  var barOptions4a = {
    responsive: true
  };


  var ctxda = document.getElementById("lineChart4a").getContext("2d");
  new Chart(ctxda, {type: 'bar', data: barData4a, options:barOptions4a });
  //     }
  //   }
  // });
  //TEN
  // $.ajax({
  //   url: "/categorytest/<%= @user.id %>",
  //   type: "POST",
  //   data: data,
  //   success: function(data) {
  //     if (false) {
  //     //if (!data.success) {
  //     //  alertify.success('Datos procesados exitosamente!');
  //
  //     }else{
//  alertify.error('No existen datos para mostrar la grafica! (Se muestra un demo)');
  //pop
  var popData = {
    datasets: [
      {
        label: ['Examen 1'],
        data: [{x: 31, y: -3, r: 5 }, {x: 47, y: 9, r: 5 }, {x: 43, y: 5, r: 5 }, {x: 31, y: 3, r: 5 }, {x: 27, y: 8, r: 5 }, {x: 36, y: 6, r: 5 }], backgroundColor: ""+randomColor({hue: 'random'})
      },{
        label: ['Examen 2'],
        data: [{x: 34, y: -8, r: 6 }, {x: 42, y: -6, r: 6 }, {x: 32, y: 2, r: 6 }, {x: 34, y: 8, r: 6 }, {x: 42, y: 3, r: 6 }, {x: 49, y: 6, r: 6 }], backgroundColor: ""+randomColor({hue: 'random'})
      },
      {
        label: ['Examen 3'],
        data: [{x: 6, y: 2, r: 12 }, {x: 4, y: 6, r: 12 }, {x: 7, y: -3, r: 1 }, {x: 9, y: 9, r: 13 }, {x: 15, y: 3, r: 14 }, {x: 3, y: 12, r: 15 }], backgroundColor: ""+randomColor({hue: 'random'})
      },{
        label: ['Examen 4'],
        data: [{x: 4, y: -12, r: 8 }, {x: 24, y: 21, r: 9 }, {x: 13, y: -21, r: 9 }, {x: 20, y: 16, r: 9 }, {x: 16, y: 8, r: 9 }, {x: 18, y: 4, r: 5 }], backgroundColor: ""+randomColor({hue: 'random'})
      },

    ]
  };
  var popCanvas = document.getElementById("popCanvas").getContext("2d");
  var bubbleChart = new Chart(popCanvas, { type: 'bubble', data: popData });
  //     }
  //   }
  // });
});
