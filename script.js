'use strict';

const dictionaryContainer = document.getElementById('dictionary');
const popup = document.getElementById('popup');
const wordElement = document.getElementById('word');
const definitionElement = document.getElementById('definition');
const series = document.querySelector('.series');
const overlay = document.querySelector('.overlay');
const close = document.querySelector('.close');
const breakLine = document.querySelector('.break');

// Array of word objects with word and definition
const words = [
  {
    word: 'Venny',
    seriesName: 'F.R.E.I.N.D.S',
    definition: `Chandler created this word as a combination of "very" and "many" when describing a large quantity or number of something. He used it playfully to exaggerate or emphasize the extent of a situation.`,
  },
  {
    word: 'Unagi',
    seriesName: 'F.R.E.I.N.D.S',
    definition: `Ross claims to have a state of total awareness called "unagi" that he learned in his self-defense class. He describes it as a combination of anticipation, readiness, and being fully aware of one's surroundings.`,
  },
  {
    word: 'Moo Point',
    seriesName: 'F.R.E.I.N.D.S',
    definition: `Joey referred to something as a "moo point." He explained that it's like a cow's opinion—it doesn't matter because it's just moo. Essentially, Joey was saying that something was insignificant or irrelevant.`,
  },
  {
    word: 'Spudnik',
    seriesName: 'F.R.E.I.N.D.S',
    definition: `Joey coined the term "Spudnik" when he dressed up as a potato to prank Chandler. It was his humorous play on words, combining "spud" (a slang term for potato) and "Sputnik" (the name of the first artificial satellite launched into space).`,
  },
  {
    word: 'Woo-pah!',
    seriesName: 'F.R.E.I.N.D.S',
    definition: `Chandler occasionally used this made-up word as an expression of excitement or enthusiasm. It became one of his catchphrases, often accompanied by an exaggerated hand gesture for comedic effect.`,
  },
  {
    word: 'Transponster',
    seriesName: 'F.R.E.I.N.D.S',
    definition: `Chandler jokingly invented the word "transponster" while playing a game of trivia. The made-up word became a running joke throughout the series and is often cited as an example of Chandler's sarcastic and goofy nature.`,
  },
  {
    word: 'Javu',
    seriesName: 'F.R.E.I.N.D.S',
    definition: `Chandler once mentioned experiencing "javu" instead of déjà vu, playfully suggesting that he was experiencing déjà vu with a cup of coffee in hand. It was a humorous twist on the familiar term.`,
  },
  {
    word: 'Jobby',
    seriesName: 'F.R.E.I.N.D.S',
    definition: `Chandler used this made-up word as a playful term for a job or occupation. It was often used in a humorous or lighthearted context when referring to work-related matters.`,
  },
  {
    word: 'Unfloopy',
    seriesName: 'F.R.E.I.N.D.S',
    definition: `Phoebe describes a floppy disk as "unfloopy" when it's not working correctly. The term humorously highlights her unique way of viewing and describing things.`,
  },
  {
    word: 'Fluffernutter',
    seriesName: 'F.R.E.I.N.D.S',
    definition: `Joey expressed his love for the Fluffernutter sandwich, which consists of marshmallow fluff and peanut butter spread between two slices of bread. He even mentioned it during a Thanksgiving episode, showing his fondness for this sweet treat.`,
  },
  {
    word: 'Valar Morghulis',
    seriesName: 'Game of Thrones',
    definition: `A High Valyrian phrase meaning "All men must die." It emphasizes the idea that death is inevitable.`,
  },
  {
    word: 'Greensight',
    seriesName: 'Game of Thrones',
    definition: `The ability to perceive future or past events through prophetic dreams or visions, possessed by certain characters like Bran Stark.`,
  },
  {
    word: 'Warg',
    seriesName: 'Game of Thrones',
    definition: `Refers to a person with the ability to enter the mind of an animal and control its actions. It can also be used as a verb, meaning to use this ability.`,
  },
  {
    word: 'Maester',
    seriesName: 'Game of Thrones',
    definition: `Scholars and healers trained in the Citadel who serve as advisors and tutors to noble families. They possess knowledge in various fields, including medicine, history, and science.`,
  },
  {
    word: 'Dracarys',
    seriesName: 'Game of Thrones',
    definition: `A High Valyrian word meaning "dragonfire." It is often used as a command to Daenerys Targaryen's dragons to breathe fire upon a target`,
  },
  {
    word: 'Dothraki',
    seriesName: 'Game of Thrones',
    definition: `A nomadic horse-riding culture of fierce warriors, known for their unique customs and traditions.`,
  },
  {
    word: 'Wildlings',
    seriesName: 'Game of Thrones',
    definition: `A term used to refer to the Free Folk who reside beyond the Wall. They reject the authority of the Seven Kingdoms and live in a more primitive and independent society.`,
  },
  {
    word: 'Raven',
    seriesName: 'Game of Thrones',
    definition: `Birds used as messengers throughout the Seven Kingdoms. Maesters send ravens carrying important letters and information.`,
  },
  {
    word: 'Valyrian Steel',
    seriesName: 'Game of Thrones',
    definition: `A rare and precious type of metal, forged using ancient Valyrian techniques. Weapons made from Valyrian steel are highly effective against White Walkers.`,
  },
  {
    word: 'Direwolf',
    seriesName: 'Game of Thrones',
    definition: `A large and formidable species of wolf native to the Stark family's homeland, often associated with the Stark children.`,
  },
  {
    word: 'Bazinga!',
    seriesName: 'The Big Bang Theory',
    definition: `Sheldon Cooper's catchphrase, used to punctuate a practical joke or sarcastic remark.`,
  },
  ,
  {
    word: 'Doppler effect',
    seriesName: 'The Big Bang Theory',
    definition: `A scientific phenomenon that describes the change in frequency or pitch of a sound wave due to the relative motion between the source and the observer.`,
  },
  {
    word: 'Dorkside',
    seriesName: 'The Big Bang Theory',
    definition: `A term coined by Howard Wolowitz, combining the words "dork" and "dark side" to describe his geeky and awkward tendencies.`,
  },
  {
    word: 'Nerdvana',
    seriesName: 'The Big Bang Theory',
    definition: `A play on the words "nerd" and "nirvana," used to describe a state of perfect happiness or bliss for nerdy individuals.`,
  },
  {
    word: 'Whack-a-mole',
    seriesName: 'The Big Bang Theory',
    definition: `A phrase used to describe the act of attempting to solve a problem or fix an issue, only to have more problems arise in its place, similar to the game Whack-a-Mole.`,
  },
  {
    word: 'Whimsical Neutrality',
    seriesName: 'The Big Bang Theory',
    definition: `A term used by Sheldon to describe his approach to moral decision-making, emphasizing the importance of remaining impartial and detached from emotional influences.`,
  },
  {
    word: 'Drunken chess',
    seriesName: 'The Big Bang Theory',
    definition: `Drunken chess is a variation of the traditional game of chess that involves playing while under the influence of alcohol. It is meant to be a fun and light-hearted version of the game, often played among friends or at social gatherings.  The rules of drunken chess are not standardized and can vary depending on the participants and their preferences.`,
  },
  {
    word: 'Perpetrator',
    seriesName: 'Crime Petrol',
    definition: `The person who commits a crime or is responsible for illegal activities.`,
  },
  {
    word: 'Alibi',
    seriesName: 'Crime Petrol',
    definition: ` A claim or evidence that proves a person was not present at the scene of the crime when it occurred.`,
  },
  {
    word: 'Conviction',
    seriesName: 'Crime Petrol',
    definition: `A legal determination of guilt in a criminal case based on evidence and a trial.`,
  },
  {
    word: 'Forensic',
    seriesName: 'Crime Petrol',
    definition: `Relating to scientific methods and techniques used in solving crimes, such as forensic evidence analysis.`,
  },
  {
    word: 'Salud',
    seriesName: 'Breaking Bad',
    definition: `A Spanish word meaning "health," often used as a toast or expression of well wishes among characters in the series.`,
  },
  {
    word: 'Cristal',
    seriesName: 'Breaking Bad',
    definition: `A high-quality and highly pure form of methamphetamine that becomes synonymous with the product produced by Walter White.`,
  },
  {
    word: 'Ricin',
    seriesName: 'Breaking Bad',
    definition: `A highly toxic poison derived from castor beans, used as a lethal weapon in the series.`,
  },
  {
    word: 'Skank',
    seriesName: 'Breaking Bad',
    definition: ` A derogatory term used to describe a woman of questionable character or low moral standards.`,
  },
  {
    word: 'Tight, tight, tight!',
    seriesName: 'Breaking Bad',
    definition: ` A phrase used by Jesse Pinkman to indicate a high level of quality or precision.`,
  },
  {
    word: 'Fulminated mercury',
    seriesName: 'Breaking Bad',
    definition: `A volatile compound used by Walter White to create a highly explosive substance.`,
  },
  {
    word: 'Blue meth balls',
    seriesName: 'Breaking Bad',
    definition: `A form of methamphetamine produced by Walter White and Jesse Pinkman, shaped into small blue crystals or balls.`,
  },
  {
    word: 'Chemistry',
    seriesName: 'Breaking Bad',
    definition: `A recurring theme in the series, representing both the scientific aspect of meth production and the volatile chemistry between characters.`,
  },
  {
    word: 'The RV',
    seriesName: 'Breaking Bad',
    definition: `Refers to the recreational vehicle (RV) used by Walter and Jesse as their initial mobile meth lab.`,
  },
  {
    word: 'Bitch',
    seriesName: 'Breaking Bad',
    definition: ` A word frequently used by Jesse Pinkman as a slang term or exclamation.`,
  },
  {
    word: `That's what she said!`,
    seriesName: 'The Office',
    definition: `A recurring joke where a character responds to a statement with a suggestive or innuendo-laden comment, often leading to comedic moments.`,
  },
  {
    word: 'Beets',
    seriesName: 'The Office',
    definition: `Dwight's obsession with growing and selling beets, often leading to humorous conversations and references throughout the series.`,
  },
  {
    word: 'Dwight, you ignorant slut!',
    seriesName: 'The Office',
    definition: `A playful insult often exchanged between Jim and Dwight, mimicking a recurring joke from the original UK version of "The Office.`,
  },
  {
    word: 'Dundie',
    seriesName: 'The Office',
    definition: `The name of the prestigious award handed out annually by Michael Scott to recognize various achievements and quirks of the employees.`,
  },
  {
    word: 'The Annex',
    seriesName: 'The Office',
    definition: `The area of the office where the accounting department and other staff members work, separate from the main office space.`,
  },
  {
    word: 'Casual Friday',
    seriesName: 'The Office',
    definition: `A day of the week when employees are allowed to dress more casually than usual, typically observed in the office.`,
  },
  {
    word: 'Scranton',
    seriesName: 'The Office',
    definition: `The city in Pennsylvania where the Dunder Mifflin branch is located, frequently mentioned in reference to the office's location.`,
  },
  {
    word: 'The warehouse',
    seriesName: 'The Office',
    definition: `The area of the office building where paper and other supplies are stored, occasionally visited by the office staff for various reasons.`,
  },
  {
    word: 'Flonkerton',
    seriesName: 'The Office',
    definition: `A fictional sport created by Kevin Malone involving balancing stacks of paper on one's feet.`,
  },
  {
    word: 'Yankee Swap',
    seriesName: 'The Office',
    definition: `Referring to the office's annual holiday gift exchange, involving the swapping of presents.`,
  },
  {
    word: 'Legen-dary',
    seriesName: 'How I Met Your Mother',
    definition: ` An adjective used to describe something that is incredibly awesome or impressive.`,
  },
  {
    word: 'Suit up',
    seriesName: `How I Met Your Mother`,
    definition: `A phrase used by Barney Stinson to encourage others to dress in formal attire.`,
  },
  {
    word: 'Bro code',
    seriesName: 'How I Met Your Mother',
    definition: `An unwritten set of rules and principles governing the behavior and interactions between male friends.`,
  },
  {
    word: 'Revertigo',
    seriesName: 'How I Met Your Mother',
    definition: `A term used to describe the tendency for old behaviors and dynamics to resurface when old friends reunite.`,
  },
  {
    word: 'Haaaaave you met Ted?',
    seriesName: 'How I Met Your Mother',
    definition: `A phrase used by Barney to introduce Ted to women as a conversation starter.`,
  },
  {
    word: 'Slapsgiving',
    seriesName: 'How I Met Your Mother',
    definition: `A holiday created by Marshall, where he slaps Barney in an ongoing slap bet.`,
  },
  {
    word: 'Sumbitch',
    seriesName: 'How I Met Your Mother',
    definition: `A humorous mispronunciation of "son of a bitch," often used by Barney.`,
  },
  {
    word: 'Intervention',
    seriesName: 'How I Met Your Mother',
    definition: `A group gathering to confront a friend about a problematic behavior or habit.`,
  },
  {
    word: 'The Broath',
    seriesName: 'How I Met Your Mother',
    definition: `A solemn oath taken by Barney and his friends to maintain their loyalty and friendship.`,
  },
  {
    word: 'The Naked Man',
    seriesName: 'How I Met Your Mother',
    definition: `A strategy used by characters to attempt to seduce someone by being naked.`,
  },
  {
    word: 'Professor',
    seriesName: 'Money Heist',
    definition: `The codename of the mastermind behind the heists, who carefully plans and orchestrates the operations.`,
  },
  {
    word: 'La Casa de Papel',
    seriesName: 'Money Heist',
    definition: `The Spanish title of the show, which translates to "The House of Paper" in English.`,
  },
  {
    word: 'Planificación',
    seriesName: 'Money Heist',
    definition: `The Spanish word for "planning," reflecting the meticulous and detailed approach of the heists.`,
  },
  {
    word: 'Rehén',
    seriesName: 'Money Heist',
    definition: `The Spanish word for "hostage," representing the individuals held captive during the heists.`,
  },
  {
    word: 'El Tiempo No Se Detiene',
    seriesName: 'Money Heist',
    definition: `Spanish for "Time Doesn't Stop," emphasizing the sense of urgency and the race against time in the series.`,
  },
  {
    word: 'Alarma',
    seriesName: 'Money Heist',
    definition: `The Spanish word for "alarm," reflecting the tense moments when security systems are triggered during the heists.`,
  },
  {
    word: 'Ser Fuerte',
    seriesName: 'Money Heist',
    definition: `Spanish for "Be Strong," a motivational phrase used by the characters to encourage resilience and determination.`,
  },
  {
    word: 'El Ratón',
    seriesName: 'Money Heist',
    definition: `Spanish for "The Mouse," a codename used to refer to one of the heist crew members known for their agility and stealth.`,
  },
  {
    word: 'La Banda',
    seriesName: 'Money Heist',
    definition: `Spanish for "The Gang," the collective term used to describe the group of robbers involved in the heists.`,
  },
  {
    word: 'El Mayor Robo de la Historia',
    seriesName: 'Money Heist',
    definition: `Spanish for "The Greatest Heist in History," emphasizing the grand scale and audacity of the heists carried out by the crew.`,
  },
];

// Generate buttons and attach click event listener
words.forEach(word => {
  const button = document.createElement('a');
  button.classList.add('btns');
  button.textContent = word.word;
  button.addEventListener('click', () => {
    showPopup(word);
    showOverlay();
  });
  dictionaryContainer.appendChild(button);
});

// Show pop-up window with word and definition
function showPopup(word) {
  wordElement.textContent = word.word;
  series.textContent = word.seriesName;
  definitionElement.textContent = word.definition;
  popup.classList.remove('hidden');
}

function showOverlay() {
  overlay.classList.remove('hidden');
}

// Close pop-up window
function closePopup() {
  popup.classList.add('hidden');
  overlay.classList.add('hidden');
}

function scrollBody() {
  body.style.overflow = 'scroll';
}

// Add an event listener to close the pop-up when clicked outside the window
overlay.addEventListener('click', closePopup);
close.addEventListener('click', closePopup);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !popup.classList.contains('hidden')) {
    closePopup();
  }
});
