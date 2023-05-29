var delay = 3000;
var flag = 1;
function Bubble(arrstr)
{

     var f = 1;
     var arry = arrstr.split(" ");//splitting the array based on spaces
     var arr = [];
     for (let ind = 0; ind < arry.length; ind++)
     {
          if (!isNaN(parseInt(arry[ind])))
               arr.push(parseInt(arry[ind]));//pushing each element into the array
          else
          {
               alert("Enter Numbers only!");//checking for invalid input
               document.getElementById('input_array').value = "";
               f = 0;
               break;
          }

     }

     if (f == 0)
          location.reload();

     var ListOfDataSets = [];
     var i, j, noswap;
     //performing bubble sort
     for (i = arr.length - 1; i > 0; i--)
     {
          noswap = true;
          for (j = arr.length - 1; j >= arr.length - i; j--)
          {
               //creating the chart for each loop iteration and after every swap.
               ListOfDataSets.push(createBubble(arr, arr.length - i - 1, j));
               if (arr[j] < arr[j - 1]) 
               {
                    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
                    noswap = false;
                    ListOfDataSets.push(createBubble(arr, arr.length - i - 1, j));
               }
          }
          if (noswap)
               break;
     }
     ListOfDataSets.push(createBubble(arr, arr.length, -1));
     document.getElementById("sorted").innerHTML = "Sorted array is : " + arr;
     setTimeout(function ()
     {
          document.getElementsByName("visuals")[0].style.visibility = "visible";
     }, 1000);
     var ind = 0;
     //rendering charts at a particular interval using setinterval()s
     let repeat = setInterval(function ()
     {
          if (flag == 1)
               drawchart(ListOfDataSets[ind++], "Bubble");//to draw the chart from chartset
          if (ind >= ListOfDataSets.length)
               clearInterval(repeat);
     }, delay);
}

function createBubble(arr, ind, curr)
{
     var listOfDicts = [];

     for (let i = 0; i < arr.length; i++)
     {
          //creating a bar for each element arr[i] of the array
          if (i == curr || i == curr - 1)
          {
               var dict = { x: i + 1, y: arr[i], label: arr[i], color: "#eb3f28", indexLabel: "\u2193" };
               listOfDicts.push(dict);//Current Comparision
          }
          else if (i >= ind)
          {
               var dict = { x: i + 1, y: arr[i], label: arr[i], color: "#d8e8ed" };//Unsorted
               listOfDicts.push(dict);
          }
          else
          {
               var dict = { x: i + 1, y: arr[i], label: arr[i], color: "#6ceb78" };//Sorted
               listOfDicts.push(dict);
          }
     }
     return listOfDicts;//returning created chart to caller function
}
function drawchart(datapts)
{
     var chart = new CanvasJS.Chart("chartcontainer",
          {
               title: { text: "Bubble" },
               axisY: { includeZero: true },
               data: [{ type: "column", indexLabelFontColor: "#8A32B8", indexLabelPlacement: "outside", dataPoints: datapts }]
          });

     chart.render();
}

document.getElementById("bubble").onclick = function ()
{
     Bubble(document.getElementById("input_array").value)
};

function play()
{
     var button = document.getElementById('pause');
     if (flag == 1)
     {
          console.log('paused');
          console.log(flag);
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