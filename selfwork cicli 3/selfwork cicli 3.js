let scelta;

do{
    scelta = Number( prompt(`inseriisci il numero della bevanda che vuoi: - 1 acqua, - 2 coca cola, - 3 aranciata`));

    switch (scelta) {
        case 1:
            console.log(`è stata selezionata l acqua`);
            break;
         case 2:
            console.log(`è stata selezionata la coca cola`);
            break;
         case 3:
            console.log(`è stata selezionata l aranciata`);
            break;
        default:
            console.log(`la scelta eseguita non è valida, riprovare `);
            
    }

}while(scelta < 1 || scelta > 3) 
    
