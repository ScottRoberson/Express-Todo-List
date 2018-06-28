$("document").ready(function(){
    var list = $("#todoList");
$.getJSON('/todo/all', function(data){
    data.forEach(function(task){
        console.log(task);
        list.append('<li class= "list-group-item">' + task.task + '</li>')
        });
    });
});
