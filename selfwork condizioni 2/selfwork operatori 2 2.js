let temperatura = Number(prompt(`inserire la temperatura:`));


let descizione;


switch (true) {
    case temperatura <= -10:
        descizione = `copriti che fa molto freddo`
        break;
 case temperatura <= 0:
        descizione = `oggi non fa molto freddo`
        break
         case temperatura <= 20:
        descizione = `non ci sono più le mezze stagioni`
        break
         case temperatura <= 30:
        descizione = `mi dia qualcosa da bere`
        break
    default:

         descizione = `lu mare lu sole lu ientu`
      
}
     
 console.log(descizione);
 
