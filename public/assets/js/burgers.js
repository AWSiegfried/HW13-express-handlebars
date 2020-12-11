// Attach handlers until the DOM loads
$(function() {
    //For when they want to change the status of the burger.
    $(".change-devo").on("click", function(event) {
        var id = $(this).data("id");
        var newDevo = $(this).data("newdevo");

        var newDevoState = {
            devoured: newDevo
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoState
        }).then(
            function() {
                console.log("changed status to", newDevo);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newDevo = {
            burger_name: $("#bu").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newDevo
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});