$(document).ready(function () {

    fetch('https://66692a74d6d9dd0c3b3b.appwrite.global/listall',{mode: 'no-cors'})
    .then(response => {
        console.log("reeeeee",response)
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Assuming the response is JSON
    })
    .then(data => console.log(data))
    .catch(error => console.error('There has been a problem with your fetch operation:', error));
  

  



    var projectId = '666929470005a01fd522';
var endpoint = '/v1/account';

// Replace 'your_api_key' with your Appwrite API key
var apiKey = '42b747d591fb0d006152c329021807af8eb2c05f77d44808fbc6c91e28ddc73d4987fc7c85d1e584c8da035a8d1babd931643095288c7f1fcef2c29105c6379b24f915ace30be0e79ab551144a8266406034cba6935cb6c9cc7b4dde519f69b4e2c775b4b9879cc89dafe352155929a6605ab726a15f21fe572444ec1fe0ab0d';

// Construct the URL
var url = 'https://66692a74d6d9dd0c3b3b.appwrite.global/listall';

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Open a new connection to the Appwrite API
xhr.open('GET', url, true);
// xhr.mode("no-cors")

// Set the Appwrite API key in the request headers
xhr.setRequestHeader('X-Appwrite-Project', projectId);
xhr.setRequestHeader('X-Appwrite-Key', apiKey);

// Set up event handler for when the request is completed
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Request was successful
    console.log(xhr.responseText);
  } else {
    // Request failed
    console.error(xhr.statusText);
  }
};

// Set up event handler for when an error occurs during the request
xhr.onerror = function() {
  console.error('Request failed');
};

// Send the request
xhr.send();

    
    // let url = $("url-input").val()
    let data = {
        "url":"www.google.com"
    };




    fetch('https://66692a74d6d9dd0c3b3b.appwrite.global/listall', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
         
        },
       
        credentials: 'include' // Include credentials if needed (cookies, authorization headers, etc.)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });


    var baseUrl ="https://66692a74d6d9dd0c3b3b.appwrite.global/";
     $('#url-button').on('click', function(event) {
        alert('Body clicked!');
        console.log('Clicked element:', event.target);
        generateShort();
    });
    function generateShort(){
        let url = $("url-input").val()
        let data = {
            "url":"www.google.com"
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