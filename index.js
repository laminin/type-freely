'use strict';

/*document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'Control') {
    // not alert when only Control key is pressed.
    return;
  }

  if (event.ctrlKey) {
    // Even though event.key is not 'Control' (i.e. 'a' is pressed),
    // event.ctrlKey may be true if Ctrl key is pressed at the time.
    alert(`Combination of ctrlKey + ${keyName}`);
  } else {
    alert(`Key pressed ${keyName}`);
  }
}, false);

document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  // As the user release the Ctrl key, the key is no longer active.
  // So event.ctrlKey is false.
  if (keyName === 'Control') {
    alert('Control key was released');
  }
}, false);*/

var tamil_type_writter_mapping = {
	'`':'\u0B83',
	'1':'1',
	'2':'2',
	'3':'3',
	'4':'4',
	'5':'5',
	'6':'6',
	'7':'7',
	'8':'8',
	'9':'9',
	'0':'0',
	'-':'',
	'=':'',
	'q':'\u0BA3\u0BC1',
	'w':'\u0BB1',
	'e':'\u0BA8',
	'r':'\u0B9A',
	't':'\u0BB5',
	'y':'\u0BB2',
	'u':'\u0BB0',
	'i':'\u0BC8',
	'o':'\u0B9F\u0BBF',
	'p':'\u0BBF',
	'[':'\u0BC1',
	']':'\u0BB9',
	'\\':'\\',
	'a':'\u0BAF',
	's':'\u0BB3',
	'd':'\u0BA9',
	'f':'\u0B95',
	'g':'\u0BAA',
	'h':'\u0BBE',
	'j':'\u0BA4',
	'k':'\u0BAE',
	'l':'\u0B9F',
	';':';',
	'\'':'\u0B99',
	'z':'\u0BA3',
	'x':'\u0B92',
	'c':'\u0B89',
	'v':'\u0B8E',
	'b':'\u0BC6',
	'n':'\u0BC7',
	'm':'\u0B85',
	',':'\u0B87',
	'.':'.',
	'/':'\u0BCD',


	'~':'',
	'!':'\u0BB8',
	'@':'',
	'#':'',
	'$':'',
	'%':'\u0BC1',
	'^':'',
	'&':'',
	'*':'',
	'(':'',
	')':'',
	'_':'\u0BB8\u0BCD\u0BB0\u0BC0',
	'+':'',
	'Q':'',
	'W':'',
	'E':'',
	'R':'',
	'T':'',
	'Y':'',
	'U':'',
	'I':'',
	'O':'',
	'P':'',
	'A':'',
	'S':'',
	'D':'',
	'F':'',
	'G':'',
	'H':'',
	'J':'',
	'K':'',
	'L':'',
	':':'',
	'"':'',
	'Z':'',
	'X':'',
	'C':'',
	'V':'',
	'B':'',
	'N':'',
	'M':'',
	'<':'',
	'>':'',
	'?':'',

	'TAB':'',
	'SHIFT':'',
	'FUNCTION':'',
	'CONTROL':'',
	'ALT':'',
	'OPTION':'',
	'COMMAND':''
};

/*
Consonants→
Vowels
↓	E10	E18	E1A	E1F	E20	E21	E22	E23	E24	E25	E26	E27	E28	E29	E2A	E2B	E2C	E2D	E2E	E2F	E30	E31	E32	E33	E34	E35	E36	E37	E38	E39	E3A	E3B	E3C	E3D	E3E	E3F
0	௳	௦	அரைக்கால்	்		க்	ங்	ச்	ஞ்	ட்	ண்	த்	ந்	ப்	ம்	ய்	ர்	ல்	வ்	ழ்	ள்	ற்	ன்	ஜ்	ஶ்	ஷ்	ஸ்	ஹ்	க்ஷ்
1	௴	௧	கால்		அ	க	ங	ச	ஞ	ட	ண	த	ந	ப	ம	ய	ர	ல	வ	ழ	ள	ற	ன	ஜ	ஶ	ஷ	ஸ	ஹ	க்ஷ
2	௵	௨	அரை	ா	ஆ	கா	ஙா	சா	ஞா	டா	ணா	தா	நா	பா	மா	யா	ரா	லா	வா	ழா	ளா	றா	னா	ஜா	ஶா	ஷா	ஸா	ஹா	க்ஷா
3	௶	௩	முக்கால்	ி	இ	கி	ஙி	சி	ஞி	டி	ணி	தி	நி	பி	மி	யி	ரி	லி	வி	ழி	ளி	றி	னி	ஜி	ஶி	ஷி	ஸி	ஹி	க்ஷி
4	௷	௪	அரைவீசம்	ீ	ஈ	கீ	ஙீ	சீ	ஞீ	டீ	ணீ	தீ	நீ	பீ	மீ	யீ	ரீ	லீ	வீ	ழீ	ளீ	றீ	னீ	ஜீ	ஶீ	ஷீ	ஸீ	ஹீ	க்ஷீ
5	௸	௫	வீசம்	ு	உ	கு	ஙு	சு	ஞு	டு	ணு	து	நு	பு	மு	யு	ரு	லு	வு	ழு	ளு	று	னு	ஜு	ஶு	ஷு	ஸு	ஹு	க்ஷு
6	௹	௬	மூவீசம்	ூ	ஊ	கூ	ஙூ	சூ	ஞூ	டூ	ணூ	தூ	நூ	பூ	மூ	யூ	ரூ	லூ	வூ	ழூ	ளூ	றூ	னூ	ஜூ	ஶூ	ஷூ	ஸூ	ஹூ	க்ஷூ
7	௺	௭	அரைமா	ெ	எ	கெ	ஙெ	செ	ஞெ	டெ	ணெ	தெ	நெ	பெ	மெ	யெ	ரெ	லெ	வெ	ழெ	ளெ	றெ	னெ	ஜெ	ஶெ	ஷெ	ஸெ	ஹெ	க்ஷெ
8	பௌர்ணமி	௮	ஒருமா	ே	ஏ	கே	ஙே	சே	ஞே	டே	ணே	தே	நே	பே	மே	யே	ரே	லே	வே	ழே	ளே	றே	னே	ஜே	ஶே	ஷே	ஸே	ஹே	க்ஷே
9	அமாவாசை	௯	இரண்டுமா	ை	ஐ	கை	ஙை	சை	ஞை	டை	ணை	தை	நை	பை	மை	யை	ரை	லை	வை	ழை	ளை	றை	னை	ஜை	ஶை	ஷை	ஸை	ஹை	க்ஷை
A	கார்த்திகை	௰	மும்மா	ொ	ஒ	கொ	ஙொ	சொ	ஞொ	டொ	ணொ	தொ	நொ	பொ	மொ	யொ	ரொ	லொ	வொ	ழொ	ளொ	றொ	னொ	ஜொ	ஶொ	ஷொ	ஸொ	ஹொ	க்ஷொ
B	ராஜ	௱	நாலுமா	ோ	ஓ	கோ	ஙோ	சோ	ஞோ	டோ	ணோ	தோ	நோ	போ	மோ	யோ	ரோ	லோ	வோ	ழோ	ளோ	றோ	னோ	ஜோ	ஶோ	ஷோ	ஸோ	ஹோ	க்ஷோ
C	ௐ	௲	முந்திரி	ௌ	ஔ	கௌ	ஙௌ	சௌ	ஞௌ	டௌ	ணௌ	தௌ	நௌ	பௌ	மௌ	யௌ	ரௌ	லௌ	வௌ	ழௌ	ளௌ	றௌ	னௌ	ஜௌ	ஶௌ	ஷௌ	ஸௌ	ஹௌ	க்ஷௌ
D			அரைக்காணி		ஃ																								ஸ்ரீ
E			காணி
F			முக்காணி

*/

var tamil_english_maping = {
	'ik' : '\u0B95\u0BCD', /*க்*/
	'ing': '', /*ங்*/
	'': '', /*ச்*/
	'': '', /*ஞ்*/
	'': '', /*ட்*/
	'': '', /*ண்*/
	'': '', /*த்*/
	'': '', /*ந்*/
	'': '', /*ப்*/
	'': '', /*ம்*/
	'': '', /*ய்*/
	'': '', /*ர்*/
	'': '', /*ல்*/
	'': '', /*வ்*/
	'': '', /*ழ்*/
	'': '', /*ள்*/
	'': '', /*ற்*/
	'': '', /*ன்*/
	'': '', /*ஜ்*/
	'': '', /*ஷ்*/
	'': '', /*ஸ்*/
	'': '', /*ஹ்*/

	'': '', /*க*/
	'': '', /*ங*/
	'': '', /*ச*/
	'': '', /*ஞ*/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
	'': '', /**/
}

function modifyText(event) {
	var source = event.target || event.srcElement;
	const keyName = event.key;
  	// As the user release the Ctrl key, the key is no longer active.
  	// So event.ctrlKey is false.
  	if (keyName === 'Control') {
    	console.log('Control key was released', tamil_type_writter_mapping[keyName], source);
  	}

		if(tamil_type_writter_mapping[keyName]){
			// source.value = source.value + tamil_type_writter_mapping[keyName];
			event.key = tamil_type_writter_mapping[keyName];
		}

}

function listenText(event){
	const keyName = event.key;

	if (keyName === 'Control' || keyName == 'Backspace') {
	// not alert when only Control key is pressed.
	} else {
		event.preventDefault();
	}
	return;
	if (event.ctrlKey) {
	// Even though event.key is not 'Control' (i.e. 'a' is pressed),
	// event.ctrlKey may be true if Ctrl key is pressed at the time.
		console.log(`Combination of ctrlKey + ${keyName}`);
	} else {
		console.log(`Key pressed ${keyName}`);
	}
}

function key_down(event) {
	console.log("Event: ", event);
	event.key = "a";
}

window.onload=function(){
    // add event listener to text box
	var text_box = document.getElementById("text_box");
	//text_box.addEventListener("keydown", listenText, false);
	//text_box.addEventListener("keyup", modifyText, false);

	text_box.addEventListener("keydown", key_down, false);

}
