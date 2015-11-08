var nodemailer = require("nodemailer"),
GROUP_NAME = 'My Group',
FROM_EMAIL = '@gmail.com';
EMAIL_PASSWD = '';

transporter  = nodemailer.createTransport({
   service: "Gmail",
   auth: {
       user: FROM_EMAIL,
       pass: EMAIL_PASSWD
   }
}),


GROUP_MEMBERS = [ 
	{name: 'Name1', email: 'email1@gmail.com'}, 
	{name: 'Name2', email: 'email2@gmail.com'}, 
	{name: 'Name3', email: 'email3@gmail.com'}, 
	{name: 'Name4', email: 'email4@gmail.com'}, 
	{name: 'Name5', email: 'email5@gmail.com'}, 
	{name: 'Name6', email: 'email6@gmail.com'}, 
	{name: 'Name7', email: 'email7@gmail.com'}, 
],

animals = [ 
	
	{ name: 'Petinha dos Campos (Cotovia)', url: 'https://pt.wikipedia.org/wiki/Petinha-dos-campos'},
	{ name: 'Beija flor do topetinho-verde', url: 'https://pt.wikipedia.org/wiki/Topetinho-verde'},
	{ name: 'Lavadeira-mascarada', url: 'http://www.wikiaves.com.br/lavadeira-mascarada'}, 
	{ name: 'Jacaré-anão', url: 'https://pt.wikipedia.org/wiki/Jacar%C3%A9-an%C3%A3o'}, 
	{ name: 'Tartaruga-de-pente', url: 'https://pt.wikipedia.org/wiki/Tartaruga-de-pente'},
	{ name: 'Preguiça Gigante', url: 'http://varievo.com/mundo-animal/preguicas-gigantes-mamiferos-gigantes-do-mundo-antigo'}, 
	{ name: 'Galinha de angola', url: 'https://pt.wikipedia.org/wiki/Galinha-d%27angola'}, 
];


 /**
 * Shuffle animals among a group members. 
 * - groupMembers must be an array of object on following structure: { name: '', email: ''}
 * - animals  must be an array objects like { name: '', url: ''}
 * The result is a new array where every person from group members has an animal associated with:
 * { name: '', email: '', animal: {  name: '', url: '' } }
 */
function shuffleAnimals(groupMembers, animals) {
	var animalMembers = [];
	if (groupMembers.length > animals.length) {
		console.log('Group Members size(' + groupMembers.length + ') cannot be bigger than animals length(' + animals.length +')');
		return;
	}
	
	groupMembers.forEach( function(person) {
		var raffledIndex = raffleIndex(animals),
			newMember = {};
			
		newMember.name = person.name;
		newMember.email = person.email;
		newMember.animal = animals[raffledIndex];
		animalMembers.push(newMember);
		animals.splice(raffledIndex, 1);
	});
	
	return animalMembers;
};

function raffleIndex(array) {
	return random(array.length-1);
};

// Returns a random number between min (inclusive) and max (exclusive)
function random(max) {
	var value = Math.random() * max;		
	return Math.round(value) > max ? Math.floor(value) : Math.round(value);
};

 /**
 * Shuffle one friend to each member
 * - the parameter must be an array with object like this: { name: '', email: '', animal: {  name: '', url: '' } }
 * The result will ensure no one is picked twice and all members have a friend in following structure:
 * { name: '', email: '', animal: {  name: '', url: '' }, friend: { name: '', email: '', animal: {  name: '', url: '' } } }
 */
function animals_raffle(member_animals) {
	var pickList = clone(member_animals),
		raffledFriends = [];
	var index = 0;
	while(index < member_animals.length) {
		
		var member = member_animals[index],	
			raffledAnimal = {}, 
			friendIndex = raffleIndex(pickList),
			friend;
		friend = pickList[friendIndex];
		console.log('Evaluating ' + index + ' of ' +member_animals.length + ' - Raffled Index: ' + friendIndex + '/' + pickList.length); 
		//console.log('Member: ' + member.email + ' | ' + member.animal + ' | ' + friend.animal);
		
		var isPickedItself = friend.animal.name === member.animal.name;
		var isLastOne = pickList.length === 1;
		
		if( isPickedItself && isLastOne ) {
			//in this case just switch with someone who has already picked a member
			var newIndex = raffleIndex(raffledFriends);
			var pickedMember = raffledFriends[newIndex];
			var tmpFriend = pickedMember.friend;
			pickedMember.friend = friend;
			friend = tmpFriend
			
			isPickedItself = false;
		}
		
		if ( !isPickedItself ) {		
			//console.log(friendIndex + ' ==== ' + friend.animal + ' got by ' + member.animal);
			raffledAnimal.name = member.name;
			raffledAnimal.email = member.email;
			raffledAnimal.animal = member.animal;
			raffledAnimal.friend = friend
			
			raffledFriends.push(raffledAnimal);
			pickList.splice(friendIndex, 1);
			index++;
		}
		
	}
	return raffledFriends;
};

//Nice trick from http://stackoverflow.com/questions/6089058/nodejs-how-to-clone-a-object
function clone(object) {
   return JSON.parse(JSON.stringify(object));
}


function sendEmail(person) {
	var plainText = 'Your plain text message';
	
	var htmlText = 'Your html text message';
	
	
	var mailOptions = {
		from: FROM_EMAIL, 
		to: person.email, 
		bcc: FROM_EMAIL,
		subject: 'Kriss Kringle ' + GROUP_NAME, 
		text: plainText,
		html: htmlText
	};

	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			return console.log(error);
		}
		console.log('Message sent: ' + info.response + ' to ' + person.email);
	});
};

function raffleAndNotify() {
	var shufledAnimals, raffledAnimals;
	console.log('Picking animals to every group member...');
	shufledAnimals = shuffleAnimals(clone(GROUP_MEMBERS), clone(animals));
	console.log('Raffling all members among each others');
	raffledAnimals = animals_raffle(shufledAnimals);
	
	if(!isDistrubutedAccordingToGame(GROUP_MEMBERS, raffledAnimals)){
		console.log('The distribution is not correct');
		return;
	}
	
	console.log('Sending emails...');

	raffledAnimals.forEach( function(person) {
		//console.log(person.name + ' | ' + person.animal.name + '\t | ' +person.friend.name + ' | ' + person.friend.animal.name);
		sendEmail(person);
	});
};

/**
 * Double check whether the distribution is ok: one person per friend with no repeat
 */
function isDistrubutedAccordingToGame(GROUP_MEMBERS, raffledAnimals) {
	var isDistributed = true;
	
	GROUP_MEMBERS.forEach( function(member) {
		var countAsFriend = 0,
			countAsGuest = 0;
			
		raffledAnimals.forEach( function(person) {
			if (member.email === person.email) {
				countAsGuest++;
			}
			if (member.name === person.friend.name) {
				countAsFriend++;
			}
		});
		isDistributed = isDistributed && (countAsFriend === 1) && (countAsGuest === 1);
	});
	
	return  isDistributed;
};


console.log('#### Kriss Kringle ####');
raffleAndNotify();

