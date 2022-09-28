function reajuste(){
    var a = parseFloat(document.getElementById('a').value);
    if(a <= 280){
        reajus = a*0.2;
        novo = a + reajus;
        alert('Salário atual = ' + a + '\n' +'Seu percentual de reajuste foi de: 20% \n' + 
        'O reajuste será de = ' + reajus + '\n' + 'O novo salário será de = ' + novo);
    }
   else if (a > 280 && a <= 700){
        reajus = a*0.15;
        novo = a + reajus;
        alert('Salário atual = ' + a + '\n' +'Seu percentual de reajuste foi de: 15% \n' + 
        'O reajuste será de = ' + reajus + '\n' + 'O novo salário será de = ' + novo);
    }
    else if (a > 700 && a <= 1500){
        reajus = a*0.1;
        novo = a + reajus;
        alert('Salário atual = ' + a + '\n' +'Seu percentual de reajuste foi de: 10% \n' + 
        'O reajuste será de = ' + reajus + '\n' + 'O novo salário será de = ' + novo);
    }
    else {
        reajus = a*0.05;
        novo = a + reajus;
        alert('Salário atual = ' + a + '\n' +'Seu percentual de reajuste foi de: 5% \n' + 
        'O reajuste será de = ' + reajus + '\n' + 'O novo salário será de = ' + novo);    }

}


