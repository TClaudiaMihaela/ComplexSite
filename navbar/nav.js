 window.onload = () => {

    fetch('https://tclaudiamihaela.github.io/ComplexSite/navbar/nav.html', 
    {
      method: "GET", 
      mode: 'cors',
      headers: {
          'Content-Type': 'application/json',
      }
   }) 
     .then(data => {
       return data.text()
     })
    .then( data => {
       document.getElementById("navbar").innerHTML = data; 
    })

 }


