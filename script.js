// TODO: LEVELS
// TODO: CHANGE LIVES NUMBER
// TODO: MAX WORDS LENGTH
// TODO: DARK MODE
// TODO: SCORES
// TODO: PODPOWIEDŹ
// FIX: ONLY LETTERS CAN BE USED (ASCII)
class App {
	// Words directory
	words = {
		animals: [
			'biedronka',
			'chomik',
			'chrząszcz',
			'delfin',
			'dżdżownica',
			'fenek',
			'foka',
			'goryl',
			'jeleń',
			'jenot',
			'kałamarnica',
			'kogut',
			'kojot',
			'kormoran',
			'kot',
			'krokodyl',
			'krowa',
			'kuna',
			'lama',
			'lew',
			'małpa',
			'mrówka',
			'mrówkojad',
			'myszojeleń',
			'orka',
			'owca',
			'ośmiornica',
			'papuga',
			'pawian',
			'pelikan',
			'pies',
			'pingwin',
			'pszczoła',
			'rekin',
			'renifer',
			'ropucha',
			'salamandra',
			'sarna',
			'stonka',
			'słoń',
			'traszka',
			'tygrys',
			'wieloryb',
			'wiewiórka',
			'wilk',
			'wróbel',
			'wydra',
			'łasica',
			'łoś',
			'świnia',
			'żyrafa',
			'żółw',
		],
		countries: [
			'Algieria',
			'Anglia',
			'Argentyna',
			'Australia',
			'Austria',
			'Bangladesz',
			'Belgia',
			'Brazylia',
			'Chiny',
			'Chorwacja',
			'Czechy',
			'Filipiny',
			'Finlandia',
			'Francja',
			'Hiszpania',
			'Holandia',
			'Indie',
			'Indonezja',
			'Irlandia',
			'Japonia',
			'Kanada',
			'Kolumbia',
			'Kostaryka',
			'Kuwejt',
			'Litwa',
			'Luksemburg',
			'Meksyk',
			'Meksyk',
			'Nepal',
			'Niemcy',
			'Nigeria',
			'Norwegia',
			'Pakistan',
			'Palestyna',
			'Panama',
			'Polska',
			'Portugalia',
			'Rumunia',
			'Szwajcaria',
			'Szwajcaria',
			'Szwecja',
			'Słowacja',
			'Słowenia',
			'Tajlandia',
			'Tajwan',
			'Tunezja',
			'Turcja',
			'Tybet',
			'Ukraina',
			'Urugwaj',
			'USA',
			'Uzbekistan',
			'Watykan',
			'Wenezuela',
			'Wietnam',
			'Włochy',
		],
		capitals: [
			'Amsterdam',
			'Ateny',
			'Bangkok',
			'Berlin',
			'Bogota',
			'Brasilia',
			'Bratysława',
			'Bruksela',
			'Budapeszt',
			'Bukareszt',
			'Delhi',
			'Helsinki',
			'Kijów',
			'Kiszyniów',
			'Kopenhaga',
			'Lizbona',
			'Londyn',
			'Lublin',
			'Luksemburg',
			'Madryt',
			'Mińsk',
			'Moskwa',
			'Moskwa',
			'Oslo',
			'Paryż',
			'Pekin',
			'Praga',
			'Ryga',
			'Rzym',
			'Sarajewo',
			'Seul',
			'Sofia',
			'Tajpej',
			'Tallin',
			'Tokio',
			'Warszawa',
			'Waszyngton',
			'Watykan',
			'Wiedeń',
			'Wilno',
		],
		plants: [
			'agrest',
			'ananas',
			'arbuz',
			'bakłażan',
			'banan',
			'borówka',
			'brokuł',
			'brukiew',
			'brzoskwinia',
			'burak',
			'bób',
			'cebula',
			'cytryna',
			'czereśnia',
			'czosnek',
			'dynia',
			'fasola',
			'grejpfrut',
			'groch',
			'gruszka',
			'jabłko',
			'jagoda',
			'jarmuż',
			'jeżyna',
			'kalafior',
			'kalarepa',
			'kapusta',
			'kokos',
			'koper',
			'kukurydza',
			'malina',
			'mandarynka',
			'marchew',
			'melon',
			'morela',
			'ogórek',
			'papryka',
			'pietruszka',
			'pomarańcza',
			'pomidor',
			'porzeczka',
			'poziomka',
			'rzepa',
			'rzeżucha',
			'rzodkiewka',
			'sałata',
			'seler',
			'szczypiorek',
			'szpinak',
			'truskawka',
			'winogrono',
			'wiśnia',
			'śliwka',
			'żurawina',
		],
		proverbs: [
			'apetyt rośnie w miarę jedzenia',
			'cel uświęca środki',
			'biednemu zawsze wiatr w oczy',
			'bez pracy nie ma kołaczy',
			'baba z wozu, koniom lżej',
			'człowiek człowiekowi wilkiem',
			'trening czyni mistrza',
			'co wolno wojewodzie, to nie tobie, smrodzie',
			'cicha woda brzegi rwie',
			'co nagle to po diable',
			'czas to pieniądz',
			'co kraj, to obyczaj',
			'co za dużo, to za zdrowo',
			'do trzech razy sztuka',
			'ciągnie wilka do lasu',
			'diabeł tkwi w szczegółach',
			'dzieci i ryby głosu nie mają',
			'dla chcącego nic trudnego',
			'gość w dom, Bóg w dom',
			'gdzie Rzym, gdzie Krym',
			'wilk syty i owca cała',
			'jak Kuba Bogu, tak Bóg Kubie',
			'jak trwoga, to do Boga',
			'kłamstwo ma krótkie nogi',
			'komu w drogę, temu czas',
			'kto się czubi, ten się lubi',
			'kradzione nie tuczy',
			'kto pyta, nie błądzi',
			'kto sieje wiatr, ten burzę zbiera',
			'kuć żelazo, póki gorące',
			'kto rano wstaje, temu Pan Bóg daje',
			'lepszy rydz niż nic',
			'lepiej późno niż wcale',
			'nie chwal dnia przed zachodem',
			'mądry polak po szkodzie',
			'nie dla psa kiełbasa',
			'najciemniej pod latarnią',
			'oko za oko, ząb za ząb',
			'prawda w oczy kole',
		],
	};

	/** Presets score variable and calls newGame(). */
	constructor() {
		this.score = 0;
		this.newGame();
	}

	/** Draws the world and prepares game variables. */
	newGame() {
		this.stopAudio();
		// Set variables
		this.lives = 10;
		this.playable = 1;
		this.usedLetters = [];
		this.playingWords = [...this.words.animals, ...this.words.countries, ...this.words.capitals];
		this.randomIndex = Math.floor(Math.random() * this.playingWords.length);
		this.word = this.playingWords[this.randomIndex];
		this.fetchWordHint();
		// Replace all letters in word to underscore
		this.wordToGuess = this.word.replace(/\S/g, '_');

		// Find word category
		const categoryTranslation = {
			animals: 'Zwierzęta',
			countries: 'Kraje',
			capitals: 'Stolice',
			proverbs: 'Przysłowia',
		};

		for (const [category, words] of Object.entries(this.words)) {
			if (words.includes(this.word)) {
				this.categoryOfWord = categoryTranslation[category];
				break;
			}
		}

		// Update game DOM
		wordToGuessEl.textContent = this.wordToGuess.split('').join(' ');
		categoryEl.textContent = this.categoryOfWord;
		livesEl.textContent = this.lives;
		categoryEl.textContent = this.categoryOfWord;
		alertEl.classList.add('hidden');
		pUsedLettersEl.classList.add('hidden');
		usedLettersEl.textContent = '';
		guessingCharEl.focus();
		document.body.style.backgroundColor = '#2855b6';
		guessingDivEl.classList.remove('hidden');
	}

	/** Checks if word to guess contains user letter. */
	guessLetter() {
		this.stopAudio();
		// Only 1 letter is allowed
		if (guessingCharEl.value.length === 1 && this.playable) {
			// Get letter from guessingChar DOM Element
			const guessingChar = guessingCharEl.value.toLowerCase();
			if (!this.usedLetters.includes(guessingChar)) {
				const guessingCharIndexes = [];
				this.usedLetters.push(guessingChar);
				// Look for correct letters indexes
				this.word.split('').map((letter, i) => {
					if (letter.toLowerCase() === guessingChar) guessingCharIndexes.push(i);
				});
				if (guessingCharIndexes.length > 0) {
					// Replace underscores in wordToGuess with the correct letter
					for (const index of guessingCharIndexes) {
						this.wordToGuess = this.wordToGuess.split('');
						this.wordToGuess[index] = guessingChar;
						this.wordToGuess = this.wordToGuess.join('');
					}
					wordToGuessEl.textContent = this.wordToGuess.split('').join(' ').toUpperCase();
					guessedAudioEl.play();
				} else {
					this.lives--;
				}
				// Update game DOM
				livesEl.textContent = this.lives;
				pUsedLettersEl.classList.remove('hidden');
				usedLettersEl.textContent = this.usedLetters.join(', ').toUpperCase();
				alertEl.classList.add('hidden');
			} else {
				this.alertUser(`Już używałeś/aś tej litery!`, 0);
			}
		} else {
			this.alertUser(`Nieprawidłowa liczba liter!`, 0);
		}
		if (!this.wordToGuess.includes('_')) {
			this.alertUser(`Gratulacje, wygrałeś!`, 1);
			this.playable = 0;
			this.score++;
			wordToGuessEl.textContent = this.word.toUpperCase();
			bodyEl.style.backgroundColor = '#25a244';
			guessingDivEl.classList.add('hidden');
			wonAudioEl.play();
		}
		if (this.lives === 0) {
			this.alertUser(`Przegrałeś!`, 0);
			this.playable = 0;
			wordToGuessEl.textContent = this.word.toUpperCase();
			bodyEl.style.backgroundColor = '#ba181b';
			guessingDivEl.classList.add('hidden');
			lostAudioEl.play();
		}
		guessingCharEl.value = '';
	}

	/** Get word definition using sjp.pl website and Fetch API */
	async fetchWordHint() {
		try {
			const response = await fetch(`https://api.codetabs.com/v1/proxy?quest=https://sjp.pl/${this.word}`);
			const data = await response.text();
			const parser = new DOMParser();
			const htmlDocument = parser.parseFromString(data, 'text/html');
			const pEls = htmlDocument.documentElement.getElementsByTagName('p');
			this.wordHint = pEls[3].textContent.split(';')[0].replace(/\d.\s/g, '');
		} catch (error) {
			console.error(error.message);
		}
	}

	/** Alert user with something. */
	alertUser(text, isGood = true) {
		if (isGood) {
			alertEl.style.color = '#25a244';
		} else {
			alertEl.style.color = '#ba181b';
		}
		alertEl.textContent = text;
		alertEl.classList.remove('hidden');
	}

	/** Checks for playing audio and stop it. */
	stopAudio() {
		const allAudio = [guessedAudioEl, wonAudioEl, lostAudioEl];
		allAudio.forEach((audio) => {
			if (!audio.paused) {
				audio.pause();
				audio.currentTime = 0;
			}
		});
	}

	/** Only for DEV purposes! Print all data from App instance. */
	_printData() {
		Object.entries(this).forEach(([key, value]) => {
			console.log(key, value);
		});
		const lookForWordHint = setInterval(() => {
			if (typeof this.wordHint !== 'undefined') {
				console.log('wordHint', this.wordHint);
				clearInterval(lookForWordHint);
			}
		}, 100);
	}
}

// HTML DOM elements
const bodyEl = document.body;
const wordToGuessEl = document.querySelector('#wordToGuess');
const alertEl = document.querySelector('#alert');
const guessingDivEl = document.querySelector('.dodo2');
const guessingCharEl = document.querySelector('#guessingChar');
const btnGuessEl = document.querySelector('#btnguess');
const btnNewGame = document.querySelector('#btnnewGame');
const categoryEl = document.querySelector('#category');
const livesEl = document.querySelector('#lives');
const pUsedLettersEl = document.querySelector('#p-usedLetters');
const usedLettersEl = document.querySelector('#usedLetters');
const guessedAudioEl = document.querySelector('#guessedAudio');
const wonAudioEl = document.querySelector('#wonAudio');
const lostAudioEl = document.querySelector('#lostAudio');

const app = new App();
app._printData();

btnGuessEl.addEventListener('click', app.guessLetter.bind(app));

document.addEventListener('keydown', function (event) {
	if (event.key === 'Enter') btnGuessEl.click();
});

btnNewGame.addEventListener('click', app.newGame.bind(app));
