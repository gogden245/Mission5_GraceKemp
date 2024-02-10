// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#calculate-btn").click(function () {
    // Declare what the variable 'total' is
    var total = $("#hours").val() * 50;
    // Alter the user of the total
    alert("Hours Needed: " + $("#hours").val() +
        "\nHourly Rate: " + $("#hourly-rate").val() +
        "\nTotal Cost: " + total.toFixed(2) );

});