function parseQueryString(queryString) {
	var params = {};
	var queries = queryString.split("&");
	for (var i = 0; i < queries.length; i++) {
		var temp = queries[i].split('=');
		params[temp[0]] = temp[1];
	}
	return params;
};

// get language used in the browser...
var language = window.navigator.userLanguage || window.navigator.language;
language = language.substring(0, 2);

var params = parseQueryString(window.location.search.substring(1));
if (params.lang) {
	// ...or the language set in th URL
	language = params.lang;
}


document.addEventListener('DOMContentLoaded', function () {
	// page is ready

	// translate texts
	Array.prototype.forEach.call(document.querySelectorAll('[data-txt]'), function(el) {
		var key = el.getAttribute('data-txt');
		if (content[key]) {
			if (content[key][language]) {
				el.innerHTML = content[key][language];
			} else {
				el.innerHTML = content[key].en;
			}
		}
	});

	// listen to language switch
	Array.prototype.forEach.call(document.querySelectorAll('#langSwitch div'), function(el) {
		el.addEventListener('click', function() {
			var newLang = el.getAttribute('data-lang');
			var newUrl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?lang=' + newLang;
			// reload page with new language setting
			window.location = newUrl;
		}, false);
	});
	// highlight current language
	document.querySelector('#langSwitch div[data-lang=' + language + ']').className += ' on';
});


var content = {
	'available': {
		en: 'Coming to iPad LATE 2014',
		fr: 'Arrive sur iPad… FIN 2014',
		de: 'Für iPad Ende 2014 erhältlich.',
		ja: '2014年末に配信予定iPadゲーム',
		zh: '2014年底即将推出！',
		es: 'Disponible en iPad... a finales de 2014',
		nl: 'Beschikbaar voor iPad... eind 2014',
		ru: 'Доступно для iPad... в конце 2014 года'
	},
	'story': {
		en: 'On a distant planet, ancient tribes have settled their wars through an old brutal discipline, Soccer of the Gods. Once every ten years, tribes gather in the Striker Arena tournament to battle each other under the authority of their Emperor. Each tribe enlists the bravest and fiercest of their kin to fight for glory.<br><br>These few are known as the Strikers. Their spilt blood and sweat in the arena feeds the Emperor’s ever growing lust for true transcendence.',
		fr: 'Sur une lointaine planète, d’anciennes tribus ont mis fin aux guerres et règlent désormais leur compte via une discipline sanglante connue sous le nom de Football des Dieux. Tous les dix ans, elles se réunissent au tournoi Striker Arena et se battent sous le regard de l’Empereur. Les plus féroces guerriers de chaque tribu prennent part à cet affrontement en quête de gloire.<br><br>Ces quelques élus sont connus sous le nom de Strikers. Leur sang versé dans l’arène nourrit les ambitions secrètes de l’Empereur qui aspire à l’ultime transcendance.',
		de: 'Auf einem fernen Planeten, schlichten alte Stämme Ihre Streitigkeiten durch eine brutale Disziplin die als Fußball der Götter bekannt ist. Alle zehn Jahre versammeln sich diese mutigen und wilden Krieger in der Striker Arena unter den Augen ihres Emperors. Jeder Stamm wirbt die tapfersten und gefürchtetsten ihrer Angehörigen, um Ruhm und Ehre zu kämpfen. Die paar Auserwählten sind als die Striker bekannt.<br><br>Ihr vergossenes Schweiß und Blut in der Arena des Emperors ernährt seine ständig wachsende Lust für ultimative Transzendenz.',
		ja: '遥 か遠く離れた惑星にて、古代部族たちが「神々のサッカー」と呼ばれる壮絶な戦いを繰り広げていた。10年に1度、彼らはその地ストライカーアリー ナに集い、皇帝の下に戦うのであった。それぞれの部族からは卓越した能力をもつ勇敢な戦士らが誇り高き戦いのために招集された。<br><br>ストライカーと呼ばれる彼らの流した血と汗は、皇帝の真の超越欲をよりいっそうかきたてた。',
		zh: '在一个遥远的星球里，有一群古老的部落时常在战争。最终他们以个古代风纪的方式来解决了这个战争，名为“上帝的足球”。每逢十年，在霸王的批准之下。部落们派出了个派的凶猛勇将，为自派争光。这批勇将们被称为“前锋”。<br><br>他们的血汗就在舞台上助长了霸王日益增长的霸权欲望。',
		es: 'En un planeta lejano, antiguas tribus han pospuesto sus guerras mediante una anciana y brutal disciplina, el Fútbol de los Dioses. Una vez cada diez años, las tribus acuden al torneo llamado Striker Arena, para luchar bajo la mirada de su Emperador. Los más bravos y feroces guerreros de su raza son escogidos por cada tribu para luchar por la gloria. Estos pocos elegidos son conocidos como Strikers.<br><br>La sangre y el sudor en la arena se sublima en alimento para el alma del Emperador, por siempre ávido de verdadera trascendencia.',
		nl: 'Op een planeet hier ver vandaan, voeren eeuwenoude volksstammen oorlog middels een oude en brute discipline, het Voetbal van de Goden. Iedere tien jaar komen de stammen samen in het Striker Arena tournooi om elkaar te lijf te gaan onder het toeziend oog van de keizer. Iedere stam schrijft hun dapperste en sterkste geweldenaren in voor het gevecht om glorie. Deze strijders zijn beter bekend als de Strikers.<br><br>Het bloed, zweet en de tranen die door de arena vloeien voeden de keizer’s eeuwige honger naar transcendentie.',
		ru: 'На далекой планете древние племена вели свои войны жестоким способом – Футболом Богов. Раз в десять лет племена собираются на Арене Страйкеров чтобы сразиться на турнире, организованном Императором. Каждое племя выбирает самых храбрых и свирепых войнов на бой за славу.<br><br>Этих немногих называют Страйкерами. Их кровь и пот, разливающиеся по Арене подогревают похоть Императора и его неумолимую жажду превосходства.'
	},
	'title1': {
		en: 'Every great game has a great back story...',
		fr: 'L’univers de Striker Arena',
		de: '',
		ja: 'ストーリー',
		zh: '',
		es: '',
		nl: '',
		ru: 'У каждой великой игры, есть своя предыстория…'
	},
	'title2': {
		en: 'Meet the tribes involved...',
		fr: 'Choisir un camp',
		de: '',
		ja: '部族紹介',
		zh: '',
		es: '',
		nl: '',
		ru: 'Познакомьтесь с племенами...'
	},
	'title3': {
		en: 'The Vikings',
		fr: 'Les Vikings',
		de: '',
		ja: 'ヴァイキング',
		zh: '',
		es: '',
		nl: '',
		ru: 'Викинги'
	},
	'title4': {
		en: 'The Gladiators',
		fr: 'Les Gladiateurs',
		de: '',
		ja: 'グラディエーター',
		zh: '',
		es: '',
		nl: '',
		ru: 'Гладиаторы'
	},
	'profile1': {
		en: 'Fierce warriors who like to<br>make ice cream out of the<br>blood of their enemies.',
		fr: 'Féroces guerriers dont l’une des coutumes consiste à congeler le sang de leurs ennemis pour en faire des glaces.',
		de: '',
		ja: '敵部族の血しぶきを浴びることに快感を覚える勇ましい戦士たち',
		zh: '',
		es: '',
		nl: '',
		ru: 'свирепые воины, превращающие своих врагов в сосиски.'
	},
	'profile2': {
		en: 'Besides fighting, these fearful<br>combatants also enjoy<br>gladiatrices in their spare time.',
		fr: 'A part se battre, ces terribles combattants aiment aussi s’amuser avec les gladiatrices.',
		de: '',
		ja: 'その名の通り剣術に長けており、因縁の敵を憎み続けている',
		zh: '',
		es: '',
		nl: '',
		ru: 'в свободное от боев время, эти наводящие страх воины наслаждаются гладиатрицами.'
	},
	'title5': {
		en: 'How to play the game...',
		fr: 'Comment jouer',
		de: '',
		ja: 'ゲームのはじめ方',
		zh: '',
		es: '',
		nl: '',
		ru: 'Правила игры'
	},
	'title6': {
		en: 'Step 1',
		fr: 'PREMIERE ETAPE',
		de: '',
		ja: 'ステップ1',
		zh: '',
		es: '',
		nl: '',
		ru: 'ШАГ ПЕРВЫЙ'
	},
	'title7': {
		en: 'Step 2',
		fr: 'DEUXIEME ETAPE',
		de: '',
		ja: 'ステップ2',
		zh: '',
		es: '',
		nl: '',
		ru: 'ШАГ ВТОРОЙ'
	},
	'title8': {
		en: 'Step 3',
		fr: 'TROISIEME ETAPE',
		de: '',
		ja: 'ステップ3',
		zh: '',
		es: '',
		nl: '',
		ru: 'ШАГ ТРЕТИЙ'
	},
	'stepone': {
		en: 'Find a friend. If you don&#39;t have<br>one, grab a stranger.',
		fr: 'Trouve un ami. Si tu n’en as pas, chope un inconnu.',
		de: '',
		ja: 'お友だちを探しましょう。いない場合は、他人でもかまいません。',
		zh: '',
		es: '',
		nl: '',
		ru: 'Найди друга ну или захвати незнакомца.'
	},
	'steptwo': {
		en: 'Get an iPad.',
		fr: 'Prends un iPad.',
		de: '',
		ja: 'iPadを用意します。',
		zh: '',
		es: '',
		nl: '',
		ru: 'Достань iPad.'
	},
	'stepthree': {
		en: 'Find a comfy couch, sit down, and start playing!',
		fr: 'Trouve un canape confortable, assis-toi et commence à jouer !',
		de: '',
		ja: '快適なソファーを見つけたら、早速ゲームをはじめましょう。',
		zh: '',
		es: '',
		nl: '',
		ru: 'Устройся поудобнее и начинай играть!'
	},
	'title9': {
		en: 'What else you need to know...',
		fr: 'Plus d’informations',
		de: '',
		ja: '皆様へ',
		zh: '',
		es: '',
		nl: '',
		ru: 'Что еще тебе нужно знать…'
	},
	'support': {
		en: 'We have plans to port the game to Android tablets, PS Vita, and other platforms in order to reach as many fans as possible. Please support us on our Kickstarter page. Indie game community FTW!',
		fr: 'Soutenez-nous sur Kickstarter pour que nous puissions sortir le jeu sur tablette Android, PS Vita et, pourquoi pas, Wii U, PS4 et PC !',
		de: '',
		ja: '今後ストライカーアリーナは、より多くの方に楽しんで頂くために、アンドロイドタブレット、PS Vitaなど様々なプラットフォームでの展開を予定しております。そのためにも、ぜひKickstarterにて皆様のご支援を頂きたくお願い致します。',
		zh: '',
		es: '',
		nl: '',
		ru: 'Мы планируем выпустить игру на платформах Android, PS Vita и других, чтобы завоевать как можно больше фанатов. '
	},
	'footer1': {
		en: 'Many Thanks To',
		fr: 'Remerciements',
		de: '',
		ja: 'アリガトウ',
		zh: '',
		es: '',
		nl: '',
		ru: 'большое спасибо'
	},
	'footer2': {
		en: 'Find Us On',
		fr: 'Liens',
		de: '',
		ja: 'こちらもぜひご覧ください',
		zh: '',
		es: '',
		nl: '',
		ru: 'Следите за нами на'
	},
	'footer3': {
		en: 'Contact Us',
		fr: 'Contactez-nous',
		de: '',
		ja: 'お問い合わせ先',
		zh: '',
		es: '',
		nl: '',
		ru: 'Связаться с нами'
	},
	'thanks': {
		en: 'We owe our thanks to Unity and Mage tech for powering our game and to our awesome team - Carles, Julien, FX, and Ron!',
		fr: 'Merci à nos moteurs de jeu Unity et Mage, et à notre équipe : Carles, Julien, FX et Ron !',
		de: '',
		ja: 'UnityとMageの技術及びCarles、Julien、FX、Ronという最高のチームなしには、今回のゲームをつくり上げることはできませんでした。この場を借りて感謝の意を表します。',
		zh: '',
		es: '',
		nl: '',
		ru: 'Большое спасибо ребятам из Unity и Mage tech за технологии, используемые в нашей игре и замечательной команде Strikers: Карлу, Джулиану, FX и Рону.'
	}
}

