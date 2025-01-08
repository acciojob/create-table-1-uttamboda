function insert_Row() {
    //Write your code here
   var table = document.getElementById("sampleTable");
    
    // Create a new row
    var newRow = table.insertRow(table.rows.length); 

    var cell1 = newRow.insertCell(0); 
    var cell2 = newRow.insertCell(1); 
    
    // Add content to the new cells
    cell1.innerHTML = "New Row cell1";
    cell2.innerHTML = "New Row cell2";
  
}
