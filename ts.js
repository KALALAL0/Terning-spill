
let poengsum, rundePoeng, aktivSpiller, gameIsOn;
 
gameIsOn = false;

const maxpoeng = 100; 
 
const startSpill = ()  => {
    poengsum = [0, 0];
    rundePoeng = 0;
    aktivSpiller = 0;
    gameIsOn = true;
    
    document.querySelector('.terning').style.display = 'none';
    
    document.getElementById('poeng-0').textContent = '0';
    document.getElementById('poeng-1').textContent = '0';
    document.getElementById('sum-0').textContent = '0';
    document.getElementById('sum-1').textContent = '0';
}
 
const kastTerning = () => {
    console.log('kastTerning har startet')
    
    let terning = Math.floor(Math.random() * 6) + 1 ;
    document.querySelector('.terning').style.display = 'block';
    console.log(terning);
    document.querySelector('.terning').src = 'img/terning-' + terning + '.png';
    rundePoeng += terning;
    document.querySelector('#poeng-' + aktivSpiller).textContent = rundePoeng;
    console.log('rundePoeng:', rundePoeng);
    document.querySelector(`#poeng-${aktivSpiller}`).textContent = rundePoeng;
    console.log('rundePoeng:', rundePoeng);
    if(terning === 1) {
        console.log('Du fikk 1');
        rundePoeng = 0;
        document.querySelector(`#poeng-${aktivSpiller}`).textContent = rundePoeng;
        byttSpiller();
    }
    else if (poengsum(aktivSpiller) >= 100){
        console.log('vi har en vinner', aktivSpiller);
        document.querySelector('#navn-' + aktivSpiller).textContent
        
            
        
        if (maxpoeng = 100) {   

                console.log('vi har en vinner', aktivSpiller);
            }
    }
}

const byttSpiller = () => {
    console.log('byttSpiller')
    console.log('tidligere aktivSpiller', aktivSpiller)
    //neste spiller
    aktivSpiller === 0 ? aktivSpiller = 1 : aktivSpiller = 0;
    //Endre på aktiv spiller i CSS 
    document.querySelector('.spiller-0-panel').classList.toggle('aktiv');
    document.querySelector('.spiller-1-panel').classList.toggle('aktiv');


}
const beholdPoeng = () => {
    console.log('Du kalte opp beholdPoeng funksjonen')
    poengsum [aktivSpiller] += rundePoeng;
    rundePoeng = 0;

    document.getElementById('poeng-' + aktivSpiller).textContent = rundePoeng;
    document.getElementById('sum-' + aktivSpiller).textContent = poengsum [aktivSpiller];
    byttSpiller();

        
}
 
// const ByttAktivSpiller = () => {
//     console.log('ByttAktivSpiller har startet')
// }
 
 
const nyttSpillKnapp = document.querySelector('.btn-ny');
nyttSpillKnapp.addEventListener('click', startSpill);

const kastTerningKnapp = document.querySelector('.btn-kast');
kastTerningKnapp.addEventListener('click', kastTerning);
 
const kastTerninglKnapp = document.querySelector('.btn-hold');
kastTerninglKnapp.addEventListener('click', beholdPoeng);



 
startSpill();