const buttons = document.querySelectorAll('button')
for(let i = 0; i< buttons.length; i++){
    buttons[i].addEventListener("click",function(){
        const joueur = buttons[i].innerHTML;
        const Ordinateur= buttons[Math.floor(Math.random() * buttons.length-1)].innerHTML; 
        let result ="";
  
    if( joueur === Ordinateur){
        result = "Egalité"
    }
    else if ((joueur === 'Ciseaux' && Ordinateur === 'Feuille')||(joueur === 'Feuille' && Ordinateur  === 'Pierre')||(joueur === 'Pierre' && Ordinateur  ==='Ciseaux')){
        result = "Gagné";
    }

    else if ((joueur === 'Puit' && Ordinateur  === "Ciseaux")|| (joueur === 'Puit' && Ordinateur  ==='Pierre')|| (joueur === 'Puit' && Ordinateur  === 'Feuille' )){
        result ="imbatable";
    }
    else {
        result = "Perdu";
    }

    document.querySelector("#result").innerHTML =`
    Joueur : ${joueur} </br>
    ordinateur  : ${Ordinateur } </br>
    ${result}`;
});
} 

