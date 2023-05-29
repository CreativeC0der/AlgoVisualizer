var delay = 3000;
var flag = 1;
function main()
{
     var arrstr = document.getElementById("input_array").value;
     var f = 1;
     var arry = arrstr.split(" ");
     var ar = [];
     for (let ind = 0; ind < arry.length; ind++)
     {
          if (!isNaN(parseInt(arry[ind])))
               ar.push(parseInt(arry[ind]));
          else
          {
               alert("Enter Numbers only!");
               document.getElementById('input_array').value = "";
               f = 0;
               break;
          }

     }

     if (f == 0)
          location.reload();
     var e = document.getElementById("search").value;//element to search

     var chartset = [];//set of charts
     var suc = 0;
     chart = createChart(ar, -1, suc);
     chartset.push(chart);
     for (i = 0; i < ar.length; i++)
     {
          chart = createChart(ar, i, suc);
          chartset.push(chart);
          if (ar[i] == e)
          {
               suc = 1;
               chart = createChart(ar, i, suc, e);
               chartset.push(chart);
               break;
          }
     }
     //not found
     if (suc == 0)
     {
          chart = createChart(ar, -1, -1);
          chartset.push(chart);
     }
     document.getElementsByName("visuals")[0].style.visibility = "visible";
     var ind = 0;
     //to render the charts after a fixed delay
     let repeat = setInterval(function ()
     {
          if (flag == 1)
               drawchart(chartset[ind++], "Linear");//to draw the chart from chartset
          if (ind >= chartset.length)
               clearInterval(repeat);
     }, delay);
}

function createChart(ar, i, succ, e)
{
     chart = [];
     for (k = 0; k < ar.length; k++)
     {
          if (succ == 1 && k == i)
          {
               bar = { x: k + 1, y: ar[k], color: "#6ceb78", indexLabel: "Found" };//indexlable is the top label
          }
          else if (k == i)
          {
               bar = { x: k + 1, y: ar[k], color: "#eb3f28" };
          }
          else
          {
               bar = { x: k + 1, y: ar[k], color: "#d8e8ed" };//blue
          }
          chart.push(bar);
     }
     return chart;
}

function drawchart(datapts, title)
{
     var chart = new CanvasJS.Chart("chartcontainer",
          {
               title: { text: title },
               axisY: { includeZero: true },
               data: [{
                    type: "column",
                    indexLabel: "{y}",
                    indexLabelFontColor: "#8A32B8",
                    indexLabelPlacement: "outside",
                    dataPoints: datapts
               }]
          });

     chart.render();
}

function play()
{
     var button = document.getElementById('pause');
     if (flag == 1)
     {
          flag = 0;
          button.textContent = 'Resume';
          button.style.backgroundColor = '#6c757d';
          button.style.borderColor = '#6c757d';
          button.style.boxShadow = '0 0 0 0.25rem rgb(130 138 145 / 50%)';
     }
     else if (flag == 0)
     {
          flag = 1;
          button.textContent = 'Pause';
          button.style.backgroundColor = '#dc3545';
          button.style.borderColor = '#dc3545';
          button.style.boxShadow = '0 0 0 0.25rem rgb(225 83 97 / 50%)';

     }
}