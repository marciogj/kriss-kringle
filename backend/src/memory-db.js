
 let users = [{
    id: '1',
    email: 'marciogj@domain.com',
    name: 'Marcio',
    password: '$2a$10$0C8Ztr4k8wDdAuyG7HkTsei44evEEgAvdjApESa2Z48ihMldAF7by'
  },
  {
    id: '2',
    email: 'larissa@domain.com',
    name: 'Larissa',
    password: '$2a$10$0C8Ztr4k8wDdAuyG7HkTsei44evEEgAvdjApESa2Z48ihMldAF7by'
  }
 ]

 let animals = [
  {
    id: '1',
    name: 'Leão',
    description: 'Rei da Selva'
  },
  {
    id: '2',
    name: 'Águia',
    description: 'Rainha do céu'
  },
];


 let personAnimals = [
   {
    id: '1',
    person: users[0],
    animal: animals[0]
   },
   {
    id: '2',
    person: users[1],
    animal: animals[1]
   }
 ];

 let secretAnimals = [
   {
    id: '1',
    person: users[0],
    friend: personAnimals[1]
  },
  {
    id: '2',
    person: users[1],
    friend: personAnimals[0]
  }
]


 let krisskrigle = [{
   id: '1',
   participants: secretAnimals,
   revealDate: '25/12/2018'
 }]


 module.exports = {
     users, 
     animals,
     personAnimals,
     secretAnimals,
     krisskrigle
 }