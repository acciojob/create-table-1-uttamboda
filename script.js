function insert_Row() {
    //Write your code here
   var table = document.getElementById("sampleTable");
    
    var newRow = table.insertRow(table.rows.length); 

    var cell1 = newRow.insertCell(0); 
    var cell2 = newRow.insertCell(1); 
    
    cell1.innerHTML = "Row2 cell1";
    cell2.innerHTML = "Row2 cell2";
  
}
