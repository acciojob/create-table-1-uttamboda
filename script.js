function insert_Row() {
    //Write your code here
     var table = document.getElementById("sampleTable");

    var newRow = table.insertRow(0);  

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    var rowCount = table.tBodies[0].rows.length;  

    cell1.innerHTML = "New" + rowCount + " cell1";  
    cell2.innerHTML = "New" + rowCount + " cell2";
  
}
