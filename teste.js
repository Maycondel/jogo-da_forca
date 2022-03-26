
function pegarDiferenca() {
    let r1 = [2,4,6,8];
    let r2 = [3,4,5,7,9];       
    let r3 = r1.filter( a => !r2.includes( a ) );

    console.log( r3 );

}
pegarDiferenca()