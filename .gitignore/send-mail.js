var button = document.querySelector("#formulario")

function sendMail() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(
        {
            "key":"ZWJKuHyshEVJ9kTAHAXG3Q",
            "signing_domain":"gmail.com",
            "message":
                {
                    "from_email":"conceicao-peres@hotmail.com",
                    "to":[
                            {
                                "email":"conceicaoperes25@gmail.com",
                                "name":"RECIPIENT NAME (OPTIONAL)",
                                "type":"to"
                            }
                        ],
                        "autotext":"true",
                        "subject":"Teste",
                        "html":"<html><body>Hello World</body></html>"
                    }
                }
    )

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://mandrillapp.com/api/1.0/messages/send.json", requestOptions)
     .then(response => response.text())
     .then(result => console.log(result))
     .catch(error => console.log('error', log));

}

button.onclick = sendMail

