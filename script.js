$(document).ready(function () {


    var baseUrl ="https://66692a74d6d9dd0c3b3b.appwrite.global/";

    function generateShort(){
        let url = $("url-input").val()
        let data = {
            "url":url
        };
        $.ajax({
            url: baseUrl, // Replace with your endpoint URL
            type: "POST",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(response) {
                console.log("Success:", response);
                $("#result").html("Success: " + response.message);
            },
            error: function(xhr, status, error) {
                console.error("Error:", error);
                $("#result").html("Error: " + error);
            }
        });

    }
   


}
)