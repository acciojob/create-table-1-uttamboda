function insert_Row() {
    //Write your code here
    var table = document.getElementById("sampleTable");

    var newRow = table.insertRow(table.rows.length);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    var rowCount = table.tBodies[0].rows.length;  
    cell1.innerHTML = "Row2 cell1 " + rowCount + "A";  
    cell2.innerHTML = "Row2 cell2 " + rowCount + "B";
  
}
