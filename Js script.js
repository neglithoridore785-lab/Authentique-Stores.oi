
<sript>

function ajoute au panier(Nom,Prix) {
    let panier =
    JSON.parse(localStorage.getItem("panier")) || [];
      panier.push({Nom,Prix});
      localStorage.getItem("panier",JSON.stringify(panier));
      alert(Nom + "Ajoute au panier");
}

function affichepanier() {
    let panier =
       JSON.parse(localStorage.getItem("panier")) || []; 
       let panierliste =
       document.getElementById("panier-liste");
       let totalpri = 0;
       panierliste.innerHTML ="";

       panier.forEach((item , index) => {
        panierliste.innerHTML +='<p>${item.nom}
        - $$ {item.Prix}</p>';
        totalprix +=item.Prix
       });
       document.getElementById("total-pri").textContent ="total: $" +tatalprix;
}

function videroanier(){
    localStorage.removeItem("panier");
    affichepanier();
}
if (document.getElementById("panierliste")) {
    affichepanier();
}



