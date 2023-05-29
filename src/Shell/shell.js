'use strict';
var chart = [];
var ar = [];
var timer = 1500;
var delay = 3000;
function shell()
{
     document.getElementsByName("visuals")[0].style.visibility = "visible";
     var arrstr = document.getElementById("input_array").value;//taking input from html
     var f = 1;
     var arry = arrstr.split(" ");
     for (let ind = 0; ind < arry.length; ind++)
     {
          if (!isNaN(parseInt(arry[ind])))
               ar.push(parseInt(arry[ind]));//pushing values into array
          else
          {
               alert("Enter Numbers only!");//check for invalid inputs
               document.getElementById('input_array').value = "";
               f = 0;
               break;
          }

     }

     if (f == 0)
          location.reload();

     var gs = ar.length;//calculating gapsize
     while (gs > 1)
     {
          gs = parseInt(gs / 2);
          insertion(gs, ar);//calling insertion sort for every gapsize
     }
     document.getElementById("sorted").innerHTML = "Sorted array is : " + ar;
     var k = 0;
     var bar;
     for (k = 0; k < ar.length; k++)
     {
          bar = { x: k + 1, y: ar[k], color: "#6ceb78" };
          chart.push(bar);
     }
     setTimeout(drawchart, timer, chart, "Shell", "chartcontainer");
     timer += delay;
     console.log(ar)

}

function insertion(gs, ar)
{
     console.log(gs)
     var k = 0;
     //looping until k<gs
     while (k < gs)
     {
          chart = createChart(k, gs, '#6F00FF', -1, -1, undefined);
          setTimeout(drawchart, timer, chart, "Shell", "chartcontainer");
          timer += delay;
          //performing insertion sort on subarrays with gapsize=gs
          for (var i = gs + k; i < ar.length; i = i + gs)
          {
               var temp = ar[i];
               var j = i - gs;
               chart = createChart(k, gs, '#6F00FF', j, j + gs, '#eb3f28');
               setTimeout(drawchart, timer, chart, "Shell", "chartcontainer");
               timer += delay;

               while (j >= 0 && temp < ar[j])
               {
                    chart = createChart(k, gs, '#6F00FF', j, j + gs, '#eb3f28');
                    setTimeout(drawchart, timer, chart, "Shell", "chartcontainer");
                    timer += delay;

                    ar[j + gs] = ar[j];
                    ar[j] = temp;

                    chart = createChart(k, gs, '#6F00FF', j, j + gs, '#eb3f28');
                    setTimeout(drawchart, timer, chart, "Shell", "chartcontainer");
                    timer += delay;

                    j = j - gs;

                    if (temp >= ar[j])
                    {
                         chart = createChart(k, gs, '#6F00FF', j, j + gs, '#eb3f28');
                         setTimeout(drawchart, timer, chart, "Shell", "chartcontainer");
                         timer += delay;
                    }
               }
          }
          k++;
     }
}

//function to create chart
function createChart(start, gs, color1, j1, j2, color2)
{
     var k = 0;
     var chart = [];
     var index = [];
     var bar;

     for (var i = start; i < ar.length; i = i + gs)
     {
          index.push(i);
     }

     for (k = 0; k < ar.length; k++)
     {
          if (k == j1 || k == j2)
          {
               bar = { x: k + 1, y: ar[k], color: color2 };
          }
          else if (index.includes(k))
          {
               bar = { x: k + 1, y: ar[k], color: color1 };
          }
          else
          {
               bar = { x: k + 1, y: ar[k], color: '#d8e8ed' };
          }
          chart.push(bar);
     }
     return chart;

}

//function to render chart
function drawchart(datapts, title, container)
{
     console.log(`drawchart${datapts}`)
     var chart = new CanvasJS.Chart(container,
          {
               title: { text: title },
               axisY: { includeZero: true },
               data: [{
                    type: "column",
                    indexLabel: "{y}",
                    indexLabelPlacement: "outside",
                    dataPoints: datapts
               }]
          });

     chart.render();
}