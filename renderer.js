// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

require("format-unicorn");

var todo = []

function addItem() {
    let item = $("#item").val();
    todo.push({
        "name":item,
        "done":false
    });
    $("#item").val("");
    updateTable();
}

function toggle(id) {
    todo[id].done = !todo[id].done
    updateTable()
}

function updateTable() {
    $("#body").html("");
    for(var x = 0; x < todo.length; x++) {
        let on = todo[x];
        console.log(on);
        $("#body").html(
            $("#body").html() + `
            <tr>
                <td></td>
                <td>
                    {num}
                </td>
                <td>
                    {name}
                </td>
                <td>
                    {done}
                </td>
                <td>
                    <button type="button" onClick="toggle({id})" class="button is-{button-type}">{doundo}</button>
                </td>
            </tr>
        `.formatUnicorn({
            "name":on.name,
            "done":on.done == true ? "Yes" : "No",
            "id":x,
            "num":x + 1,
            "doundo":on.done == true ? "Undo" : "Done",    
            "button-type":on.done == true ? "danger" : "info"
        }));
    } 
} 
