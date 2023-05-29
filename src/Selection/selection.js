var flag = 1;
var delay = 3000;
var ind = 0;
function selection()
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

     var chartset = [];//set of charts
     var posi;
     for (i = 0; i < ar.length; i++)
     {
          posi = i;//position of min element
          min = ar[i];//min element
          for (j = i; j < ar.length; j++)
          {
               if (ar[j] < min)
               {
                    posi = j;
                    min = ar[j];
               }
          }
          chart = createChart(ar, i, posi);// i is current ,posi is min
          chartset.push(chart);//chart is pushed in chartset

          ar[posi] = ar[i];
          ar[i] = min;
          //rendering after swap
          chart = createChart(ar, i, posi);
          chartset.push(chart);
     }
     posi = -1;
     chart = createChart(ar, i, posi);// rendering the chart for the last time
     chartset.push(chart);
     document.getElementById("sorted").innerHTML = "Sorted array is : " + ar;
     document.getElementsByName("visuals")[0].style.visibility = "visible";
     let repeat = setInterval(function ()
     {
          if (flag == 1)
               drawchart(chartset[ind++], "Selection");//to draw the chart from chartset
          if (ind >= chartset.length)
               clearInterval(repeat);
     }, delay);

}

function createChart(ar, i, posi)//to create a single chart that is a set of bars 
{
     chart = [];
     for (k = 0; k < ar.length; k++)
     {
          if (k < i)
          {
               bar = { x: k + 1, y: ar[k], color: "#6ceb78" };//green
          }
          else if (k == i)
          {
               bar = { x: k + 1, y: ar[k], color: "#eb3f28", indexLabel: "Current" };//indexlable is the top label,red
          }
          else if (k == posi)
          {
               bar = { x: k + 1, y: ar[k], color: "#eb3f28", indexLabel: "Minimum" };
          }
          else
          {
               bar = { x: k + 1, y: ar[k], color: "#d8e8ed" };//grey
          }
          chart.push(bar);
     }
     return chart;
}

function drawchart(datapts, title)//to display the chart
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