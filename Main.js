// jQuery document ready function
$(document).ready(function() {
    // Handle form submission
    $('form').on('submit', function(e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Get form data
        var formData = $(this).serializeArray();

        // Convert form data to JSON
        var jsonData = {};
        $.each(formData, function() {
            if (jsonData[this.name]) {
                if (!jsonData[this.name].push) {
                    jsonData[this.name] = [jsonData[this.name]];
                }
                jsonData[this.name].push(this.value || '');
            } else {
                jsonData[this.name] = this.value || '';
            }
        });

        // Create QR code with form data
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: JSON.stringify(jsonData),
            width: 128,
            height: 128
        });

        // Show the QR code
        $('#qrcode').show();
    });

    // Handle clear form button click
    $('#clearForm').on('click', function() {
        // Clear the form
        $('form')[0].reset();

        // Remove the QR code
        $('#qrcode').empty().hide();
    });
});