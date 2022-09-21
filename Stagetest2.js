const SCHILDERIJEN = document.getElementById('Schilderijen');
const API_URL = "https://www.rijksmuseum.nl/api/nl/collection?key=s2qyhrWg&involvedMaker=Rembrandt+van+Rijn";

fetch(API_URL)
   .then(antwoord => antwoord.json())
   .then(resultaat => {
      for(let artObject of resultaat.artObjects){
         let html = "";
         html += "<section>";
         html += "<h3>" + artObject.title + "</h3>";
         html += "<img src= " + artObject.headerImage.url + " >";
         html += "<p>" + artObject.principalOrFirstMaker + "</p>";
         html += "</section>";
         SCHILDERIJEN.innerHTML += html;
         console.log(resultaat.artObjects);
      }
   })