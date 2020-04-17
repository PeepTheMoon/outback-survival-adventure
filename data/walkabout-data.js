// walkabout adventure data

const northernTerritory = {
    id: 'northern-territory',
    title: 'Northern Territory',
    map: {
        top: '89%',
        left: '44%'
    },
    image: 'crocodile.jpg',
    description: `
        You've come to the Northern Territory to find water and fish, and you encounter Australia's most deadly creature, the Saltwater Crocodile.  What do you do?
    `,
    choices: [{
        id: 'feed',
        description: 'Throw the croc your last meal',
        result: `
            You're both hungry, but you knew that you might not survivie, so you throw the croc your last ham sammy as a diversion and run in the opposite direction.  It was a success!  This croc loves ham.  While you survive, your hp dwindles from lack of food and water 
        `,
        hp: 5,
        sustenence: 0
    }, {
        id: 'fight',
        description: 'Fight the croc!',
        result: `
            You attempt to fight the croc on acount of how long it takes him to open his mouth.  You underestimate his deadly jaws and the strength of his elongated and strange body.  The croc's power overcomes you and you succumb to his will.  He bites and thrashes with unforgettable force, causing 100 hp in damage.  You die.
        `,
        hp: -100,
        sustenence: 0
    }, {
        id: 'run',
        description: 'Run away from the slow moving and terrifying beast',
        result: `
            You see the croc and immediately turn and run, forgoing the possibility of aquiring fish and water.  You survive, but you are parched and hungry.
        `,
        hp: -5,
        sustenence: 0
    }]
};

const southAustralia = {
    id: 'south-australia',
    title: 'South Australia',
    map: {
        top: '57%',
        left: '67%'
    },
    image: 'snake.jpeg',
    description: `
        You've come to the South Australia to hunt in the desert and look for valuable minerals to sell.  Suddenly you hear a hiss and see a shape rising vertically from the earth.  It's a brown snake, with the second most toxic venom of any land snake in the world!  It's agressive, and moving rapidly toward you.  What do you do?
    `,
    choices: [{
        id: 'attack',
        description: 'Throw your boulder opals at the snake',
        result: `
            You take out your valuable boulder opals and throw them at the snake, hoping to immobilize it.  But the snake is fast and slithery and he dodges your projectile.  You get bit, causing 80 hp in damage.
        `,
        hp: -80,
        sustenence: 0
    }, {
        id: 'capture',
        description: 'Capture the snake',
        result: `
            You have just enough time to empty the contents of your gemstone colletion bag.  As the snake moves rapidly closer, you throw the bag on the snake and capture it.  You use your boulder opals to crush its head and eat the snake for dinner.
        `,
        hp: 80,
        sustenence: 50
    }, {
        id: 'run',
        description: 'Run away from the slithering creature',
        result: `
            The snake is fast so you have to drop all of your belongings to outrun it.  You make it out, but now you don't have anything to eat or drink.  Will you make it out of the outback?
        `,
        hp: -30,
        sustenence: 0
    }]
};

const westernAustralia = {
    id: 'western-australia',
    title: 'Western Australia',
    map: {
        top: '31%',
        left: '5%'
    },
    image: 'kangaroo.jpeg',
    description: `
        You've come to Western Australia to take in the night sky in the darkest place on earth.  As you move through the desert, you come upon a frighteningly buff male kangaroo.  He's competing for a mate.  What do you do?
    `,
    choices: [{
        id: 'ignore',
        description: 'Ignore the kangaroo',
        result: `
            You attempt to ignore the kangaroo and go about your business.  The kangaroo sees that you're not a threat and leaves you alone.  You find a watering hole and fill your jug.
        `,
        hp: 5,
        sustenence: 0
    }, {
        id: 'fight',
        description: 'Fight the kangaroo!',
        result: `
            You attempt to fight the kangaroo and he fights back with dizzying accuracy.  His powerful legs shatter a rib and leave you winded.  The kangaroo mauls you but doesn't kill you, taking 30 hp.  You limp away.
        `,
        hp: -30,
        sustenence: 0
    }, {
        id: 'befriend',
        description: 'Attempt to befriend the intimidating creature',
        result: `
            You are scared but you try and make friends.  You have some sprouted green grasses that you pull from your rucksack and tempt the kangaroo over.  He's more hungry than horny and he hops over to you and eats the grasses from your hand.  You have a new buddy!  He helps you find food and fight off enemies.
        `,
        hp: 100,
        sustenence: 100
    }]
};

export default walkabout;