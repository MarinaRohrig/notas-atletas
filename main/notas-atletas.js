let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
 ];
 
 function ordenaNota(atletas){
     atletas.forEach(function(atleta){
         atleta.notas.sort(function(a,b){
             return a-b;
         });
         return atleta;
     })
     return atletas;
 }
 
 function calculaMedias(atletas){
     let soma = 0;
     let notasComputadas = [];
     for (let i = 0; i < atletas.length-1; i++){
         for (let j = 1; j < atletas[i].notas.length-1; j++){
             soma += atletas[i].notas[j];
         }
     notasComputadas.push(soma / (atletas[i].notas.length-2));
     soma=0;
    }
      return notasComputadas;
     }
 
 
 function mostraMedias(atletas, notasComputadas){
  for (let i = 0; i < atletas.length-1; i++){
     console.log(`Atleta: ${atletas[i].nome}\nNotas: ${atletas[i].notas}\nMédia: ${notasComputadas[i]}\n`);
     }
     return;
  }
 
 
 let atletasOrdenados = ordenaNota(atletas);
 let notasComputadas = calculaMedias(atletasOrdenados);
 mostraMedias(atletas, notasComputadas);