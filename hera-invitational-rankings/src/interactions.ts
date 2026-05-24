const GrubbyProfile = `
  <p class="" id="GrubbyProfile">
    Jeg heter Mikael Ødegaard. Etter mer enn 2500 arbeidstimer med service og kundekontakt har jeg blitt erfaren i profesjonell kommunikasjon og blitt opptatt av å tilfredsstille folks behov. <br> <br>På grunn av min generasjon har jeg hatt en kjærlighet for data siden jeg var 5 år gammel. Spillene var simplere, men mer imponerende. <br><br>Gjennom hele barndommen hjalp min far meg med å lage ting i Excel. Tabeller og planer etc. Så da jeg fikk min første laptop som 13 år begynte jeg selv med å lage modeller og tabeller i Excel.
  </p>
`

const activateProfile = (playerProfileArticle: Element, profile: string) => {
  playerProfileArticle.innerHTML = profile

  };
  
  export const initiateListeners = () => {
  const playerProfileArticle = document.querySelector('#playerProfile')
  const grubbyButton = document.querySelector<HTMLLIElement>('#GrubbyButton');

  grubbyButton?.addEventListener('click', () => {
    console.log(playerProfileArticle)
    if(playerProfileArticle) activateProfile(playerProfileArticle, GrubbyProfile)
  });
};