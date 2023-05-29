<html>

<head>
     <title>Compare Page</title>
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
     <link rel="stylesheet" href="compare.css">
</head>

<div class="container">
     <body >
     <center>
          <br>
          <h1 style="color:rgb(255, 211, 68);font-family:verdana" class="text-monospace">
          <b>Select Algorithms To Compare<b></h1>
          <br>
          <form method="get" style="color:white">
               
                    <select id="algo1" name="select_algo1" class="form-select-sm">
                         <option value="Insertion">Insertion Sort</option>
                         <option value="Bubble">Bubble Sort</option>
                         <option value="Quick">Quick Sort</option>
                         <option value="Merge">Merge Sort</option>
                         <option value="Shell">Shell Sort</option>
                         <option value="Selection">Selection Sort</option>
                    </select>
                    &nbsp;&nbsp;
                    VS
                    &nbsp;&nbsp;
                    <select id="algo2" name="select_algo2" class="form-select-sm">
                    <option value="Insertion">Insertion Sort</option>
                         <option value="Bubble">Bubble Sort</option>
                         <option value="Quick">Quick Sort</option>
                         <option value="Merge">Merge Sort</option>
                         <option value="Shell">Shell Sort</option>
                         <option value="Selection">Selection Sort</option>
                    </select>
                    <br><br>
                    <button value="Compare" formaction="compare.php" class="btn btn-outline-info">Compare</button>
          </form>
     </center>
     <br>
          <div class="table-wrapper table-responsive">
               <table class="fl-table" style="font-size:24;">
                    <thead>
                         <tr>
                              <th id="h1">Header 1</th>
                              <th id="h2">Header 2</th>
                         </tr>
                    </thead>
                    <tbody id="tbody">
                    </tbody>
               </table>
          </div>
     </body>
</div>

<?php
     $t1=$_REQUEST['select_algo1'];
     $t2=$_REQUEST['select_algo2'];
     $servername='127.0.0.1';
     $username='root';
     $password='';
     $dbname="comparision";
     $connect=mysqli_connect($servername,$username,$password,$dbname);
     if($connect)
     {
     }
     else
     {
          die("***Database can not be connected***");
     }

     $i=0;
     $sql="select * from $t1";
     $result=mysqli_query($connect,$sql);
     while($rows=mysqli_fetch_assoc($result))
     {
          $algo1[$i++]=$rows['points'];
     }

     $i=0;
     $sql="select * from $t2";
     $result=mysqli_query($connect,$sql);
     while($rows=mysqli_fetch_assoc($result))
     {
          $algo2[$i++]=$rows['points'];
     }

?>

<script>
     var t1 ="<?= $t1 ?>";
     var t2 ="<?= $t2 ?>";
     var arr1 =<?php echo json_encode($algo1);?>;
     var arr2 =<?php echo json_encode($algo2);?>;
     console.log(arr1);
     console.log(arr2);
     document.getElementById('h1').textContent = t1;
     document.getElementById('h2').textContent = t2;

     var tbody = document.getElementById('tbody');
     for (var i = 0; i < arr1.length; i++)
     {
          tbody.insertAdjacentHTML("beforeend","<tr><td>" + arr1[i] + "</td><td>" + arr2[i] + "</td></tr>");
     }
     
</script>


</html>