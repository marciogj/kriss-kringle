
 let users = [{
    id: '1',
    email: 'marcio@domain.com',
    name: 'Marcio',
    password: '$2a$10$yX1qytlCHYwoP0Bnnq3fJ.IpC9jbfK6Jfv4T1ePQ2fcAWZmfAtlKK' //123
  },
  {
    id: '2',
    email: 'larissa@domain.com',
    name: 'Larissa',
    password: '$2a$10$0C8Ztr4k8wDdAuyG7HkTsei44evEEgAvdjApESa2Z48ihMldAF7by'
  },
  {
    id: '3',
    email: 'jon@domain.com',
    name: 'Jon',
    password: '$2a$10$0C8Ztr4k8wDdAuyG7HkTsei44evEEgAvdjApESa2Z48ihMldAF7by'
  },
  {
    id: '4',
    email: 'peter@domain.com',
    name: 'Peter',
    password: '$2a$10$0C8Ztr4k8wDdAuyG7HkTsei44evEEgAvdjApESa2Z48ihMldAF7by'
  },
  {
    id: '5',
    email: 'Petra@domain.com',
    name: 'Petra',
    password: '$2a$10$0C8Ztr4k8wDdAuyG7HkTsei44evEEgAvdjApESa2Z48ihMldAF7by'
  },
  {
    id: '6',
    email: 'anne@domain.com',
    name: 'Anne',
    password: '$2a$10$0C8Ztr4k8wDdAuyG7HkTsei44evEEgAvdjApESa2Z48ihMldAF7by'
  },
  {
    id: '7',
    email: 'Josef@domain.com',
    name: 'Josef',
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
  {
    id: '3',
    name: 'Tigre',
    description: 'Grande Felino'
  },
  {
    id: '4',
    name: 'Bufalo',
    description: 'Perigoso herbívoro'
  },
  {
    id: '5',
    name: 'Girafa',
    description: 'Enxerga mais longe'
  },
  {
    id: '6',
    name: 'Jacaré',
    description: 'Perigo na água'
  },
  {
    id: '7',
    name: 'Macaco',
    description: 'Esperto e adaptado'
  }
  
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
   },
   {
    id: '3',
    person: users[2],
    animal: animals[2]
   },
   {
    id: '4',
    person: users[3],
    animal: animals[3]
   },
   {
    id: '5',
    person: users[4],
    animal: animals[4]
   },
   {
    id: '6',
    person: users[5],
    animal: animals[5]
   },
   {
    id: '7',
    person: users[6],
    animal: animals[6]
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
  },
  {
    id: '3',
    person: users[2],
    friend: personAnimals[3]
  },
  {
    id: '4',
    person: users[3],
    friend: personAnimals[2]
  },
  {
    id: '5',
    person: users[4],
    friend: personAnimals[5]
  },
  {
    id: '6',
    person: users[5],
    friend: personAnimals[6]
  },
  {
    id: '7',
    person: users[6],
    friend: personAnimals[4]
  }
]


 let krisskrigle = [{
   id: '1',
   participants: secretAnimals,
   revealDate: '25/12/2019'
 }]


 module.exports = {
     users, 
     animals,
     personAnimals,
     secretAnimals,
     krisskrigle
 }