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
	document.querySelector('#langSwitch div[data-lang=' + language + ']').classList.add('on');
});


var content = {
	'available': {
		en: 'Available on iPad... LATE 2014',
		fr: 'Disponible sur iPad... FIN 2014',
		de: 'Für iPad Ende 2014 erhältlich.',
		ja: '',
		zh: '',
		es: 'Disponible en iPad... a finales de 2014'
	},
	'description': {
		en: 'On a distant planet, ancient tribes have settled their wars through an old brutal discipline, Soccer of the Gods. Once every ten years, tribes gather in the Striker Arena tournament to battle each other under the authority of their Emperor. Each tribe enlists the bravest and fiercest of their kin to fight for glory.<br><br>These few are known as the Strikers. Their spilt blood and sweat in the arena feeds the Emperor’s ever growing lust for true transcendence.',
		fr: 'Sur une lointaine planète, d’anciennes tribus ont mis fin aux guerres et règlent désormais leur compte via une discipline sanglante connue sous le nom de Football des Dieux. Tous les dix ans, elles se réunissent au tournoi Striker Arena et se battent sous le regard de l’Empereur. Les plus féroces guerriers de chaque tribu prennent part à cet affrontement en quête de gloire.<br><br>Ces quelques élus sont connus sous le nom de Strikers. Leur sang versé dans l’arène nourrit les ambitions secrètes de l’Empereur qui aspire à l’ultime transcendance.',
		de: 'Auf einem fernen Planeten, schlichten alte Stämme Ihre Streitigkeiten durch eine brutale Disziplin die als Fußball der Götter bekannt ist. Alle zehn Jahre versammeln sich diese mutigen und wilden Krieger in der Striker Arena unter den Augen ihres Emperors. Jeder Stamm wirbt die tapfersten und gefürchtetsten ihrer Angehörigen, um Ruhm und Ehre zu kämpfen. Die paar Auserwählten sind als die Striker bekannt.<br><br>Ihr vergossenes Schweiß und Blut in der Arena des Emperors ernährt seine ständig wachsende Lust für ultimative Transzendenz.',
		ja: '遥 か遠く離れた惑星にて、古代部族たちが「神々のサッカー」と呼ばれる壮絶な戦いを繰り広げていた。10年に1度、彼らはその地ストライカーアリー ナに集い、皇帝の下に戦うのであった。それぞれの部族からは卓越した能力をもつ勇敢な戦士らが誇り高き戦いのために招集された。<br><br>ストライカーと呼ばれる彼らの流した血と汗は、皇帝の真の超越欲をよりいっそうかきたてた。',
		zh: '在一个遥远的星球里，有一群古老的部落时常在战争。最终他们以个古代风纪的方式来解决了这个战争，名为“上帝的足球”。每逢十年，在霸王的批准之下。部落们派出了个派的凶猛勇将，为自派争光。这批勇将们被称为“前锋”。<br><br>他们的血汗在舞台上助长了霸王日益增长的霸权欲望。',
		es: 'En un planeta lejano, antiguas tribus han pospuesto sus guerras mediante una anciana y brutal disciplina, el Fútbol de los Dioses. Una vez cada diez años, las tribus acuden al torneo llamado Striker Arena, para luchar bajo la mirada de su Emperador. Los más bravos y feroces guerreros de su raza son escogidos por cada tribu para luchar por la gloria. Estos pocos elegidos son conocidos como Strikers.<br><br>La sangre y el sudor en la arena se sublima en alimento para el alma del Emperador, por siempre ávido de verdadera trascendencia.'
	},
	'chooseSide': {
		en: 'Choose a side, crush your enemies in the Arena, and become the new Emperor!',
		fr: 'Choisis ton camp, détruis tes ennemis dans l’arène et deviens le nouvel Empereur !',
		de: 'Wähle deine Seite, vernichte deine Feinde in der Arena, und werde zum neuen Emperor erklärt!',
		ja: 'さあ、君もチームを選んだらアリーナで敵を撃退させて、次なる皇帝の座を手に入れよう！​',
		zh: '选择一方，在竞技场上击败你的敌人，并成为新的霸王！',
		es: 'Escoge un bando, aplasta a tus enemigos en la arena, y ¡conviértete en el nuevo Emperador!'
	},
	'stayTuned': {
		en: 'Stay tuned for more updates. <a href="mailto:striker.arena@wizcorp.jp">Contact the Strikers</a> for more info.',
		fr: 'Bientôt plus de contenu. <a href="mailto:striker.arena@wizcorp.jp">Contactez-nous</a> pour plus d’informations.',
		de: 'Bleiben Sie dran für weitere Updates. <a href="mailto:striker.arena@wizcorp.jp">Kontaktieren Sie die Striker</a> für mehr Infos.',
		ja: '',
		zh: '',
		es: 'Permanece atento para actualizaciones. <a href="mailto:striker.arena@wizcorp.jp">Contacta con los Strikers</a> para más información.'
	}
}

