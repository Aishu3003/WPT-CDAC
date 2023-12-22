var emparr = [{ id: 1, name: 'Rahul', mob: 333333 }, { id: 2, name: 'Rajesh', mob: 4444 }, { id: 3, name: 'Deepa', mob: 77777 }];


const displayTable = () => {
    var str = "<table border='2'><tr><th>Employee Id</th><th>Name</th><th>Mobile</th></tr>";
    for (var e of emparr) {
        str += <tr><td>${e.id}</td><td>${e.name}</td><td>${e.mob}</td></tr>
    }
    str += "</table>";
    document.getElementById("second").innerHTML = str;
}


//clear the form and bring the focus in id textbox
const clearform = function () {
    document.getElementById('id').value = "";
    document.getElementById('nm').value = "";
    document.getElementById('mob').value = "";
    document.getElementById('id').focus();
}


function deleteemp() {
    var id = parseInt(document.getElementById('id').value);
    var pos = emparr.findIndex(ob => ob.id === id);
    if (pos != -1) {
        emparr.splice(pos, 1);
        displayTable();
    } else {
        alert("Employee with id " + id + " not found");
    }

}
//add new employee in the array
const addemployee = () => {
    var id = parseInt(document.getElementById('id').value);
    var name = document.getElementById('nm').value;
    var mob = document.getElementById('mob').value;
    //var empob={id:id,name:name,mob:mob}
    var empob = { id, name, mob };
    emparr.push(empob);
    clearform();
    displayTable()
}
//update employee based on id
const updateemp = () => {
    var id = parseInt(document.getElementById('id').value);
    var name = document.getElementById('nm').value;
    var mob = document.getElementById('mob').value;
    var pos = emparr.findIndex(ob => ob.id === id);
    if (pos != -1) {

        emparr[pos].name = name;
        emparr[pos].mob = mob;
        clearform();
        displayTable();
    }

}