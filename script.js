const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

for(let i in filmes){
  console.log(filmes[i].titulo + ', de', filmes[i].ano + ', dirigido por',filmes[i].diretor)
  let elenco = ''
  for(let j of filmes[i].elenco){
    elenco += j + ', '
  }
  console.log('Tem no elenco:', elenco)
}

// const megaSena = [
//   [1,3,5],
//   [0,2,4,6],
//   [4,8,12,18],
//   [5,10,15,20]
// ]

// if(megaSena.length === 4){
//   for(let i in megaSena){
//     let sorteio = `sorteio ${i}: `
//     for(let j of megaSena[i]){
//       sorteio += j + ', '
//     }
//     console.log(sorteio)
//   }

// }else{
//   console.log('É necessário alterar o número de itens do array.')
// }