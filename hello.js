$(document).ready(function() {
    $.ajax({
        url: "http://localhost:9000/hello-world"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});