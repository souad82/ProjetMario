
// Importation des fonctions de conversion du md au html

    // let converter = new showdown.Converter(), // Instance de la classe du module
    // text = '# hello, the md style', // Emplacement du code markdown
    // html = converter.makeHtml(text) // Stockage du résultat dans une variable
    
// Affichage du contenu md dans la page au format html

let container = document.querySelector(".container")

init();

function init() {

    window.addEventListener( 'hashchange', hashChange, false )

    hashChange()

}



container.innerHTML = html

function hashChange() {

    fileName = location.hash ? location.hash.split( '#' )[1] : 'accueil.md'

    document.title = document.title ? document.title : fileName

    var xmlHttp = new XMLHttpRequest()
    xmlHttp.open( 'GET', fileName, true )
    xmlHttp.onreadystatechange = function() {

        container.innerHTML = xmlHttp.readyState === 4 ? new showdown.Converter({tables: true}).makeHtml( xmlHttp.responseText ) : ''

    };

    xmlHttp.send( null )

}