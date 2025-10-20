document.getElementById("button1").onclick = async () =>{

    var url = "https://localhost:7236/cars";

    var request = await fetch(url, {
        method : 'GET',
        headers : {'Content-Type' : 'application/json'}
    })

    var response = await request.json();

    ShowResult(response)
}

function ShowResult(response){
    var textContent = '';

    for(var item of response){
        textContent = textContent + `
            <p>${item.id}</p>
            <p>${item.brand}</p>
            <p>${item.type}</p>
            <p>${item.license}</p>
            <p>${item.date}</p>
        `
    }

    document.getElementById('root').innerHTML = textContent;


}

