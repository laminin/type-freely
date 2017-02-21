<!-- start
var uv; 
 
function convert_anjal_2_unicode() { 
uv = document.tamil_unicode_utf8.source.value;
uv = uv.replace(/û/g, "க்ஷ");
uv = uv.replace(/û‘/g, "க்ஷா");
uv = uv.replace(/û’/g, "க்ஷி");
uv = uv.replace(/û“/g, "க்ஷீ");
uv = uv.replace(/û”/g, "க்ஷு");
uv = uv.replace(/û•/g, "க்ஷூ");
uv = uv.replace(/—û/g, "க்ஷெ");
uv = uv.replace(/þû/g, "க்ஷே");
uv = uv.replace(/—û‘/g, "க்ஷொ");
uv = uv.replace(/÷ñõ/g, "க்ஷோ");
uv = uv.replace(/—ûã/g, "க்ஷௌ");
uv = uv.replace(/û/g, "க்ஷை");
uv = uv.replace(/ü/g, "க்ஷ்");

uv = uv.replace(/—óó/g, "ஜௌ");
uv = uv.replace(/þó‘/g, "ஜோ");
uv = uv.replace(/—ó‘/g, "ஜொ");
uv = uv.replace(/ó‘/g, "ஜா");
uv = uv.replace(/ó/g, "ஜி");
uv = uv.replace(/ó’/g, "ஜி");
uv = uv.replace(/ó/g, "ஜீ");
uv = uv.replace(/ó”/g, "ஜு");
uv = uv.replace(/ó•/g, "ஜூ");
uv = uv.replace(/—ó/g, "ஜெ");
uv = uv.replace(/þó/g, "ஜே");
uv = uv.replace(/€ó/g, "ஜை");
uv = uv.replace(/ô/g, "ஜ்");
uv = uv.replace(/ó/g, "ஜ");///////////--

uv = uv.replace(/—ã/g, "கௌ");
uv = uv.replace(/þ‘/g, "கோ");
uv = uv.replace(/—‘/g, "கொ");
uv = uv.replace(/‘/g, "கா");
uv = uv.replace(/Ž/g, "கி");
uv = uv.replace(//g, "கீ");
uv = uv.replace(//g, "கு");
uv = uv.replace(/˜/g, "கூ");
uv = uv.replace(/—/g, "கெ");
uv = uv.replace(/þ/g, "கே");
uv = uv.replace(/€/g, "கை");
uv = uv.replace(//g, "க்");
uv = uv.replace(/™/g, "க்");
uv = uv.replace(//g, "க");///////////--

uv = uv.replace(/—šã/g, "ஙௌ");
uv = uv.replace(/þš‘/g, "ஙோ");
uv = uv.replace(/—š‘/g, "ஙொ");
uv = uv.replace(/š‘/g, "ஙா");
uv = uv.replace(/š/g, "ஙி");
uv = uv.replace(/š/g, "ஙீ");
uv = uv.replace(/—š/g, "ஙெ");
uv = uv.replace(/þš/g, "ஙே");
uv = uv.replace(/€š/g, "ஙை");
uv = uv.replace(/›/g, "ங்");
uv = uv.replace(/š/g, "ங");///////////--




uv = uv.replace(/—œã/g, "சௌ");
uv = uv.replace(/þœ‘/g, "சோ");
uv = uv.replace(/—œ‘/g, "சொ");
uv = uv.replace(/œ‘/g, "சா");
uv = uv.replace(//g, "சி");
uv = uv.replace(//g, "சீ");
uv = uv.replace(/Ÿ/g, "சு");
uv = uv.replace(/¡/g, "சூ");
uv = uv.replace(/—œ/g, "செ");
uv = uv.replace(/þœ/g, "சே");
uv = uv.replace(/€œ/g, "சை");
uv = uv.replace(/¢/g, "ச்");
uv = uv.replace(/œ/g, "ச");///////////--
uv = uv.replace(/œ/g, "ச");///////////--
uv = uv.replace(/—£ã/g, "ஞௌ");
uv = uv.replace(/þ£‘/g, "ஞோ");
uv = uv.replace(/—£‘/g, "ஞொ");
uv = uv.replace(/£‘/g, "ஞா");
uv = uv.replace(/£/g, "ஞி");
uv = uv.replace(/£/g, "ஞீ");
uv = uv.replace(/—£/g, "ஞெ");
uv = uv.replace(/þ£/g, "ஞே");
uv = uv.replace(/€£/g, "ஞை");
uv = uv.replace(/¤/g, "ஞ்");
uv = uv.replace(/£/g, "ஞ");///////////--

uv = uv.replace(/—¥ã/g, "டௌ");
uv = uv.replace(/þ¥‘/g, "டோ");
uv = uv.replace(/—¥‘/g, "டொ");
uv = uv.replace(/¥‘/g, "டா");
uv = uv.replace(/¦/g, "டி");
uv = uv.replace(/§/g, "டீ");
uv = uv.replace(/¨/g, "டு");
uv = uv.replace(/©/g, "டூ");
uv = uv.replace(/—¥/g, "டெ");
uv = uv.replace(/þ¥/g, "டே");
uv = uv.replace(/€¥/g, "டை");
uv = uv.replace(/ª/g, "ட்");
uv = uv.replace(/¥/g, "ட");///////////--

uv = uv.replace(/—«ã/g, "ணௌ");
uv = uv.replace(/þ«‘/g, "ணோ");
uv = uv.replace(/—«‘/g, "ணொ");
uv = uv.replace(/«‘/g, "ணா");
uv = uv.replace(/¬/g, "ணி");
uv = uv.replace(/−/g, "ணீ");

uv = uv.replace(/®–/g, "ணூ");
uv = uv.replace(/®/g, "ணு");

uv = uv.replace(/—«/g, "ணெ");
uv = uv.replace(/þ«/g, "ணே");
uv = uv.replace(/€«/g, "ணை");
uv = uv.replace(/¯/g, "ண்");	
uv = uv.replace(/«/g, "ண");///////////--
uv = uv.replace(/—°ã/g, "தௌ");
uv = uv.replace(/þ°‘/g, "தோ");
uv = uv.replace(/—°‘/g, "தொ");
uv = uv.replace(/°‘/g, "தா");
uv = uv.replace(/±/g, "தி");
uv = uv.replace(/²/g, "தீ");
uv = uv.replace(/³–/g, "தூ");
uv = uv.replace(/³/g, "து");

uv = uv.replace(/—°/g, "தெ");
uv = uv.replace(/þ°/g, "தே");
uv = uv.replace(/€°/g, "தை");
uv = uv.replace(/´/g, "த்");
uv = uv.replace(/°/g, "த");///////////--


uv = uv.replace(/—µã/g, "நௌ");
uv = uv.replace(/þµ‘/g, "நோ");
uv = uv.replace(/—µ‘/g, "நொ");
uv = uv.replace(/µ‘/g, "நா");
uv = uv.replace(/¶/g, "நி");
uv = uv.replace(/ÿ/g, "நீ");

uv = uv.replace(/¸–/g, "நூ");
uv = uv.replace(/¸/g, "நு");
uv = uv.replace(/—µ/g, "நெ");
uv = uv.replace(/þµ/g, "நே");
uv = uv.replace(/€µ/g, "நை");
uv = uv.replace(/¹/g, "ந்");
uv = uv.replace(/µ/g, "ந");///////////--


uv = uv.replace(/—îã/g, "னௌ");
uv = uv.replace(/þî‘/g, "னோ");
uv = uv.replace(/—î‘/g, "னொ");
uv = uv.replace(/î‘/g, "னா");
uv = uv.replace(/ï/g, "னி");
uv = uv.replace(/ð/g, "னீ");

uv = uv.replace(/ñ–/g, "னூ");
uv = uv.replace(/ñ/g, "னு");
uv = uv.replace(/—î/g, "னெ");
uv = uv.replace(/þî/g, "னே");
uv = uv.replace(/€î/g, "னை");
uv = uv.replace(/ò/g, "ன்");
uv = uv.replace(/î/g, "ன");///////////--


uv = uv.replace(/—ºã/g, "பௌ");
uv = uv.replace(/þº‘/g, "போ");
uv = uv.replace(/—º‘/g, "பொ");
uv = uv.replace(/º‘/g, "பா");

uv = uv.replace(/»/g, "பி");
uv = uv.replace(/¼/g, "பீ");
uv = uv.replace(/½/g, "பு");
uv = uv.replace(/¾/g, "பூ");
uv = uv.replace(/—º/g, "பெ");
uv = uv.replace(/þº/g, "பே");
uv = uv.replace(/€º/g, "பை");
uv = uv.replace(/¿/g, "ப்");
uv = uv.replace(/º/g, "ப");///////////--

uv = uv.replace(/—Àã/g, "மௌ");
uv = uv.replace(/þÀ‘/g, "மோ");
uv = uv.replace(/—À‘/g, "மொ");
uv = uv.replace(/À‘/g, "மா");
uv = uv.replace(/Á/g, "மி");
uv = uv.replace(/Â/g, "மீ");
uv = uv.replace(/Ã/g, "மு");
uv = uv.replace(/Ä/g, "மூ");
uv = uv.replace(/—À/g, "மெ");
uv = uv.replace(/þÀ/g, "மே");
uv = uv.replace(/€À/g, "மை");
uv = uv.replace(/Å/g, "ம்");
uv = uv.replace(/À/g, "ம");///////////--
uv = uv.replace(/—Æã/g, "யௌ");
uv = uv.replace(/þÆ‘/g, "யோ");
uv = uv.replace(/—Æ‘/g, "யொ");
uv = uv.replace(/Æ‘/g, "யா");
uv = uv.replace(/Ç/g, "யி");
uv = uv.replace(/È/g, "யீ");
uv = uv.replace(/É/g, "யு");
uv = uv.replace(/Ê/g, "யூ");
uv = uv.replace(/—Æ/g, "யெ");
uv = uv.replace(/þÆ/g, "யே");
uv = uv.replace(/€Æ/g, "யை");
uv = uv.replace(/Ë/g, "ய்");
uv = uv.replace(/Æ/g, "ய");///////////--


uv = uv.replace(/—Ìã/g, "ரௌ");
uv = uv.replace(/þÌ‘/g, "ரோ");
uv = uv.replace(/—Ì‘/g, "ரொ");
uv = uv.replace(/Ì‘/g, "ரா");
uv = uv.replace(/Í/g, "ரி");
uv = uv.replace(/Î/g, "ரீ");
uv = uv.replace(/Ï/g, "ரு");
uv = uv.replace(/Ð/g, "ரூ");
uv = uv.replace(/—Ì/g, "ரெ");
uv = uv.replace(/þÌ/g, "ரே");
uv = uv.replace(/€Ì/g, "ரை");
uv = uv.replace(/Ñ/g, "ர்");
uv = uv.replace(/Ì/g, "ர");///////////--



uv = uv.replace(/—Òã/g, "லௌ");
uv = uv.replace(/þÒ‘/g, "லோ");
uv = uv.replace(/—Ò‘/g, "லொ");
uv = uv.replace(/Ò‘/g, "லா");
uv = uv.replace(/Ó/g, "லி");
uv = uv.replace(/Ô/g, "லீ");
uv = uv.replace(/Õ–/g, "லூ");
uv = uv.replace(/Õ/g, "லு");

uv = uv.replace(/—Ò/g, "லெ");
uv = uv.replace(/þÒ/g, "லே");
uv = uv.replace(/€Ò/g, "லை");
uv = uv.replace(/Ö/g, "ல்");
uv = uv.replace(/Ò/g, "ல");///////////--


uv = uv.replace(/—ãã/g, "ளௌ");
uv = uv.replace(/þã‘/g, "ளோ");
uv = uv.replace(/—ã‘/g, "ளொ");
uv = uv.replace(/ã‘/g, "ளா");
uv = uv.replace(/ä/g, "ளி");
uv = uv.replace(/å/g, "ளீ");
uv = uv.replace(/æ/g, "ளு");
uv = uv.replace(/ç/g, "ளூ");
uv = uv.replace(/—ã/g, "ளெ");
uv = uv.replace(/þã/g, "ளே");
uv = uv.replace(/€ã/g, "ளை");
uv = uv.replace(/è/g, "ள்");
uv = uv.replace(/ã/g, "ள");///////////--
uv = uv.replace(/€×/g, "வை");
uv = uv.replace(/—××/g, "வௌ");
uv = uv.replace(/þ×‘/g, "வோ");
uv = uv.replace(/—×‘/g, "வொ");
uv = uv.replace(/×‘/g, "வா");
uv = uv.replace(/Ø/g, "வி");
uv = uv.replace(/Ù/g, "வீ");
uv = uv.replace(/Ú/g, "வு");
uv = uv.replace(/Û/g, "வூ");
uv = uv.replace(/—×/g, "வெ");
uv = uv.replace(/þ×/g, "வே");

uv = uv.replace(/Ü/g, "வ்");
uv = uv.replace(/×/g, "வ");///////////--

uv = uv.replace(/—éé/g, "றௌ");
uv = uv.replace(/þé‘/g, "றோ");
uv = uv.replace(/—é‘/g, "றொ");
uv = uv.replace(/é‘/g, "றா");
uv = uv.replace(/ê/g, "றி");
uv = uv.replace(/ë/g, "றீ");
uv = uv.replace(/ì–/g, "றூ");
uv = uv.replace(/ì/g, "று");

uv = uv.replace(/—é/g, "றெ");
uv = uv.replace(/þé/g, "றே");
uv = uv.replace(/€é/g, "றை");
uv = uv.replace(/í/g, "ற்");
uv = uv.replace(/é/g, "ற");///////////--


uv = uv.replace(/—ùù/g, "ஹௌ");
uv = uv.replace(/þù‘/g, "ஹோ");
uv = uv.replace(/—ù‘/g, "ஹொ");
uv = uv.replace(/ù‘/g, "ஹா");
uv = uv.replace(/ù/g, "ஹி");
uv = uv.replace(/ù/g, "ஹீ");
uv = uv.replace(/ù”/g, "ஹு");
uv = uv.replace(/ù•/g, "ஹூ");
uv = uv.replace(/—ù/g, "ஹெ");
uv = uv.replace(/þù/g, "ஹே");
uv = uv.replace(/€ù/g, "ஹை");
uv = uv.replace(/ú/g, "ஹ்");
uv = uv.replace(/ù/g, "ஹ");///////////--


uv = uv.replace(/—ÝÝ/g, "ழௌ");
uv = uv.replace(/þÝ‘/g, "ழோ");
uv = uv.replace(/—Ý‘/g, "ழொ");
uv = uv.replace(/Ý‘/g, "ழா");
uv = uv.replace(/Þ/g, "ழி");
uv = uv.replace(/ß/g, "ழீ");
uv = uv.replace(/à/g, "ழு");
uv = uv.replace(/á/g, "ழூ");
uv = uv.replace(/—Ý/g, "ழெ");
uv = uv.replace(/þÝ/g, "ழே");
uv = uv.replace(/€Ý/g, "ழை");
uv = uv.replace(/â/g, "ழ்");
uv = uv.replace(/Ý/g, "ழ");///////////--

uv = uv.replace(/öåå/g, "ஷௌ");
uv = uv.replace(/÷åõ/g, "ஷோ");
uv = uv.replace(/öåõ/g, "ஷொ");
uv = uv.replace(/åõ/g, "ஷா");
uv = uv.replace(/æ/g, "ஷி");
uv = uv.replace(/ç/g, "ஷீ");
uv = uv.replace(/åú/g, "ஷு");
uv = uv.replace(/åü/g, "ஷூ");
uv = uv.replace(/öå/g, "ஷெ");
uv = uv.replace(/÷å/g, "ஷே");
uv = uv.replace(/øå/g, "ஷை");
uv = uv.replace(/è/g, "ஷ்");
uv = uv.replace(/å/g, "ஷ");///////////////////////////////////

uv = uv.replace(/—õõ/g, "ஷௌ");
uv = uv.replace(/þõ‘/g, "ஷோ");
uv = uv.replace(/—õ‘/g, "ஷொ");
uv = uv.replace(/õ‘/g, "ஷா");
uv = uv.replace(/õ/g, "ஷி");
uv = uv.replace(/õ/g, "ஷீ");
uv = uv.replace(/—õ/g, "ஷெ");
uv = uv.replace(/þõ/g, "ஷே");
uv = uv.replace(/€õ/g, "ஷை");
uv = uv.replace(/ö/g, "ஷ்");
uv = uv.replace(/õ/g, "ஷ");///////////--

uv = uv.replace(/—÷÷/g, "ஸௌ");
uv = uv.replace(/þ÷‘/g, "ஸோ");
uv = uv.replace(/—÷‘/g, "ஸொ");
uv = uv.replace(/÷‘/g, "ஸா");
uv = uv.replace(/÷/g, "ஸி");
uv = uv.replace(/÷/g, "ஸீ");
uv = uv.replace(/—÷/g, "ஸெ");
uv = uv.replace(/þ÷/g, "ஸே");
uv = uv.replace(/€÷/g, "ஸை");
uv = uv.replace(/ø/g, "ஸ்");
uv = uv.replace(/÷/g, "ஸ");///////////--



uv = uv.replace(//g, "அ");
uv = uv.replace(/‚/g, "ஆ");

uv = uv.replace(/„/g, "ஈ");
uv = uv.replace(/…/g, "உ");
uv = uv.replace(/†/g, "ஊ");
uv = uv.replace(/‡/g, "எ");
uv = uv.replace(/ˆ/g, "ஏ");
uv = uv.replace(/‰/g, "ஐ");
uv = uv.replace(/Š/g, "ஒ")
uv = uv.replace(/‹/g, "ஓ");
uv = uv.replace(/Šã/g, "ஔ");


uv = uv.replace(/Œ/g, "ஃ");
uv = uv.replace(/ƒ/g, "இ");
uv = uv.replace(/ý/g, "ஸ்ரீ");



document.tamil_unicode_utf8.destination.value=uv;
} 

function convert_bamini_2_unicode() {
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/sp/g, "ளி");
uv = uv.replace(/hp/g, "ரி");
uv = uv.replace(/hP/g, "ரீ");
uv = uv.replace(/uP/g, "ரீ");
uv = uv.replace(/u;/g, "ர்");
uv = uv.replace(/h;/g, "ர்");
uv = uv.replace(/H/g, "ர்");
uv = uv.replace(/\+/g, "10");


uv = uv.replace(/nfs/g, "கௌ");
uv = uv.replace(/Nfh/g, "கோ");
uv = uv.replace(/nfh/g, "கொ");
uv = uv.replace(/fh/g, "கா");
uv = uv.replace(/fp/g, "கி");
uv = uv.replace(/fP/g, "கீ");
uv = uv.replace(/F/g, "கு");
uv = uv.replace(/\$/g, "கூ");
uv = uv.replace(/nf/g, "கெ");
uv = uv.replace(/Nf/g, "கே");
uv = uv.replace(/if/g, "கை");
uv = uv.replace(/f;/g, "க்");
uv = uv.replace(/f/g, "க");

uv = uv.replace(/nqs/g, "ஙௌ");
uv = uv.replace(/Nqh/g, "ஙோ");
uv = uv.replace(/nqh/g, "ஙொ");
uv = uv.replace(/qh/g, "ஙா");
uv = uv.replace(/qp/g, "ஙி");
uv = uv.replace(/qP/g, "ஙீ");
uv = uv.replace(/nq/g, "ஙெ");
uv = uv.replace(/Nq/g, "ஙே");
uv = uv.replace(/iq/g, "ஙை");
uv = uv.replace(/q;/g, "ங்");
uv = uv.replace(/q/g, "ங");///

uv = uv.replace(/nrs/g, "சௌ");
uv = uv.replace(/Nrh/g, "சோ");
uv = uv.replace(/nrh/g, "சொ");
uv = uv.replace(/rh/g, "சா");
uv = uv.replace(/rp/g, "சி");
uv = uv.replace(/rP/g, "சீ");
uv = uv.replace(/R/g, "சு");
uv = uv.replace(/#/g, "சூ");
uv = uv.replace(/nr/g, "செ");
uv = uv.replace(/Nr/g, "சே");
uv = uv.replace(/ir/g, "சை");
uv = uv.replace(/r;/g, "ச்");
uv = uv.replace(/r/g, "ச");//



uv = uv.replace(/n\[s/g, "ஜௌ");
uv = uv.replace(/N\[h/g, "ஜோ");
uv = uv.replace(/n\[h/g, "ஜொ");
uv = uv.replace(/\[h/g, "ஜா");
uv = uv.replace(/\[p/g, "ஜி");
uv = uv.replace(/\[P/g, "ஜீ");
uv = uv.replace(/\[{/g, "ஜு");
uv = uv.replace(/\[_/g, "ஜூ");//

uv = uv.replace(/n\[/g, "ஜெ");
uv = uv.replace(/N\[/g, "ஜே");
uv = uv.replace(/i\[/g, "ஜை");
uv = uv.replace(/\[;/g, "ஜ்");
uv = uv.replace(/\[/g, "ஜ");//





uv = uv.replace(/nQs/g, "ஞௌ");
uv = uv.replace(/NQh/g, "ஞோ");
uv = uv.replace(/nQh/g, "ஞொ");
uv = uv.replace(/Qh/g, "ஞா");
uv = uv.replace(/Qp/g, "ஞி");
uv = uv.replace(/QP/g, "ஞீ");
uv = uv.replace(/nQ/g, "ஞெ");
uv = uv.replace(/NQ/g, "ஞே");
uv = uv.replace(/iQ/g, "ஞை");
uv = uv.replace(/Q;/g, "ஞ்");
uv = uv.replace(/Q/g, "ஞ");///

uv = uv.replace(/nls/g, "டௌ");
uv = uv.replace(/Nlh/g, "டோ");
uv = uv.replace(/nlh/g, "டொ");
uv = uv.replace(/lp/g, "டி");
uv = uv.replace(/lP/g, "டீ");
uv = uv.replace(/lh/g, "டா");
uv = uv.replace(/b/g, "டி");
uv = uv.replace(/B/g, "டீ");
uv = uv.replace(/L/g, "டு");
uv = uv.replace(/\^/g, "டூ");
uv = uv.replace(/nl/g, "டெ");
uv = uv.replace(/Nl/g, "டே");
uv = uv.replace(/il/g, "டை");
uv = uv.replace(/l;/g, "ட்");
uv = uv.replace(/l/g, "ட");////

uv = uv.replace(/nzs/g, "ணௌ");
uv = uv.replace(/Nzh/g, "ணோ");
uv = uv.replace(/nzh/g, "ணொ");
uv = uv.replace(/zh/g, "ணா");
uv = uv.replace(/zp/g, "ணி");
uv = uv.replace(/zP/g, "ணீ");


uv = uv.replace(/Zh/g, "ணூ");
uv = uv.replace(/Z}/g, "ணூ");

uv = uv.replace(/nz/g, "ணெ");
uv = uv.replace(/Nz/g, "ணே");
uv = uv.replace(/iz/g, "ணை");


uv = uv.replace(/z;/g, "ண்");
uv = uv.replace(/Z/g, "ணு");
uv = uv.replace(/z/g, "ண");////



uv = uv.replace(/njs/g, "தௌ");
uv = uv.replace(/Njh/g, "தோ");
uv = uv.replace(/njh/g, "தொ");
uv = uv.replace(/jh/g, "தா");
uv = uv.replace(/jp/g, "தி");
uv = uv.replace(/jP/g, "தீ");
uv = uv.replace(/Jh/g, "தூ");
uv = uv.replace(/Jh/g, "தூ");
uv = uv.replace(/J}/g, "தூ");
uv = uv.replace(/J/g, "து");
uv = uv.replace(/nj/g, "தெ");
uv = uv.replace(/Nj/g, "தே");
uv = uv.replace(/ij/g, "தை");
uv = uv.replace(/j;/g, "த்");
uv = uv.replace(/j/g, "த");//

uv = uv.replace(/nes/g, "நௌ");
uv = uv.replace(/Neh/g, "நோ");
uv = uv.replace(/neh/g, "நொ");
uv = uv.replace(/eh/g, "நா");
uv = uv.replace(/ep/g, "நி");
uv = uv.replace(/eP/g, "நீ");
uv = uv.replace(/E}/g, "நூ");
uv = uv.replace(/Eh/g, "நூ");
uv = uv.replace(/E/g, "நு");
uv = uv.replace(/ne/g, "நெ");
uv = uv.replace(/Ne/g, "நே");
uv = uv.replace(/ie/g, "நை");
uv = uv.replace(/e;/g, "ந்");
uv = uv.replace(/e/g, "ந");//


uv = uv.replace(/nds/g, "னௌ");
uv = uv.replace(/Ndh/g, "னோ");
uv = uv.replace(/ndh/g, "னொ");
uv = uv.replace(/dh/g, "னா");
uv = uv.replace(/dp/g, "னி");
uv = uv.replace(/dP/g, "னீ");
uv = uv.replace(/D}/g, "னூ");

uv = uv.replace(/Dh/g, "னூ");
uv = uv.replace(/D/g, "னு");
uv = uv.replace(/nd/g, "னெ");
uv = uv.replace(/Nd/g, "னே");
uv = uv.replace(/id/g, "னை");
uv = uv.replace(/d;/g, "ன்");
uv = uv.replace(/d/g, "ன");//

uv = uv.replace(/ngs/g, "பௌ");
uv = uv.replace(/Ngh/g, "போ");
uv = uv.replace(/ngh/g, "பொ");
uv = uv.replace(/gh/g, "பா");
uv = uv.replace(/gp/g, "பி");
uv = uv.replace(/gP/g, "பீ");


uv = uv.replace(/G/g, "பு");
uv = uv.replace(/ng/g, "பெ");
uv = uv.replace(/Ng/g, "பே");
uv = uv.replace(/ig/g, "பை");
uv = uv.replace(/g;/g, "ப்");
uv = uv.replace(/g/g, "ப");//

uv = uv.replace(/nks/g, "மௌ");
uv = uv.replace(/Nkh/g, "மோ");
uv = uv.replace(/nkh/g, "மொ");
uv = uv.replace(/kh/g, "மா");
uv = uv.replace(/kp/g, "மி");
uv = uv.replace(/kP/g, "மீ");
uv = uv.replace(/K/g, "மு");
uv = uv.replace(/%/g, "மூ");
uv = uv.replace(/nk/g, "மெ");
uv = uv.replace(/Nk/g, "மே");
uv = uv.replace(/ik/g, "மை");
uv = uv.replace(/k;/g, "ம்");
uv = uv.replace(/k/g, "ம");//


uv = uv.replace(/nas/g, "யௌ");
uv = uv.replace(/Nah/g, "யோ");
uv = uv.replace(/nah/g, "யொ");
uv = uv.replace(/ah/g, "யா");
uv = uv.replace(/ap/g, "யி");
uv = uv.replace(/aP/g, "யீ");
uv = uv.replace(/A/g, "யு");
uv = uv.replace(/A+/g, "யூ");
uv = uv.replace(/na/g, "யெ");
uv = uv.replace(/Na/g, "யே");
uv = uv.replace(/ia/g, "யை");
uv = uv.replace(/a;/g, "ய்");
uv = uv.replace(/a/g, "ய");//

uv = uv.replace(/nus/g, "ரௌ");
uv = uv.replace(/Nuh/g, "ரோ");
uv = uv.replace(/nuh/g, "ரொ");
uv = uv.replace(/uh/g, "ரா");
uv = uv.replace(/up/g, "ரி");


uv = uv.replace(/U/g, "ரு");
uv = uv.replace(/&/g, "ரூ");
uv = uv.replace(/nu/g, "ரெ");
uv = uv.replace(/Nu/g, "ரே");
uv = uv.replace(/iu/g, "ரை");

uv = uv.replace(/u/g, "ர");//

uv = uv.replace(/nys/g, "லௌ");
uv = uv.replace(/Nyh/g, "லோ");
uv = uv.replace(/nyh/g, "லொ");
uv = uv.replace(/yh/g, "லா");
uv = uv.replace(/yp/g, "லி");
uv = uv.replace(/yP/g, "லீ");
uv = uv.replace(/Yh/g, "லூ");
uv = uv.replace(/Y}/g, "லூ");
uv = uv.replace(/Y/g, "லு");
uv = uv.replace(/ny/g, "லெ");
uv = uv.replace(/Ny/g, "லே");
uv = uv.replace(/iy/g, "லை");
uv = uv.replace(/y;/g, "ல்");
uv = uv.replace(/y/g, "ல");//

uv = uv.replace(/nss/g, "ளௌ");
uv = uv.replace(/Nsh/g, "ளோ");
uv = uv.replace(/nsh/g, "ளொ");
uv = uv.replace(/sh/g, "ளா");

uv = uv.replace(/sP/g, "ளீ");
uv = uv.replace(/Sh/g, "ளூ");
uv = uv.replace(/S/g, "ளு");
uv = uv.replace(/ns/g, "ளெ");
uv = uv.replace(/Ns/g, "ளே");
uv = uv.replace(/is/g, "ளை");
uv = uv.replace(/s;/g, "ள்");
uv = uv.replace(/s/g, "ள");//


uv = uv.replace(/ntt/g, "வௌ");
uv = uv.replace(/Nth/g, "வோ");
uv = uv.replace(/nth/g, "வொ");
uv = uv.replace(/th/g, "வா");
uv = uv.replace(/tp/g, "வி");
uv = uv.replace(/tP/g, "வீ");




uv = uv.replace(/nt/g, "வெ");
uv = uv.replace(/Nt/g, "வே");
uv = uv.replace(/it/g, "வை");

uv = uv.replace(/t;/g, "வ்");
uv = uv.replace(/t/g, "வ");//
uv = uv.replace(/noo/g, "ழௌ");
uv = uv.replace(/Noh/g, "ழோ");
uv = uv.replace(/noh/g, "ழொ");
uv = uv.replace(/oh/g, "ழா");
uv = uv.replace(/op/g, "ழி");
uv = uv.replace(/oP/g, "ழீ");
uv = uv.replace(/\*/g, "ழூ");
uv = uv.replace(/O/g, "ழு");
uv = uv.replace(/no/g, "ழெ");
uv = uv.replace(/No/g, "ழே");
uv = uv.replace(/io/g, "ழை");
uv = uv.replace(/o;/g, "ழ்");
uv = uv.replace(/o/g, "ழ");//

uv = uv.replace(/nws/g, "றௌ");
uv = uv.replace(/Nwh/g, "றோ");
uv = uv.replace(/nwh/g, "றொ");
uv = uv.replace(/wh/g, "றா");
uv = uv.replace(/wp/g, "றி");
uv = uv.replace(/wP/g, "றீ");
uv = uv.replace(/Wh/g, "றூ");
uv = uv.replace(/W}/g, "றூ");

uv = uv.replace(/W/g, "று");
uv = uv.replace(/nw/g, "றெ");
uv = uv.replace(/Nw/g, "றே");
uv = uv.replace(/iw/g, "றை");
uv = uv.replace(/w;/g, "ற்");
uv = uv.replace(/w/g, "ற");//

uv = uv.replace(/n``/g, "ஹௌ");
uv = uv.replace(/N`h/g, "ஹோ");
uv = uv.replace(/n`h/g, "ஹொ");
uv = uv.replace(/`h/g, "ஹா");
uv = uv.replace(/`p/g, "ஹி");
uv = uv.replace(/`P/g, "ஹீ");

uv = uv.replace(/n`/g, "ஹெ");
uv = uv.replace(/N`/g, "ஹே");
uv = uv.replace(/i`/g, "ஹை");
uv = uv.replace(/`;/g, "ஹ்");
uv = uv.replace(/`/g, "ஹ");//

uv = uv.replace(/n\\s/g, "ஷௌ");
uv = uv.replace(/N\\h/g, "ஷோ");
uv = uv.replace(/n\\h/g, "ஷொ");
uv = uv.replace(/\\h/g, "ஷா");
uv = uv.replace(/\\p/g, "ஷி");
uv = uv.replace(/\\P/g, "ஷீ");

uv = uv.replace(/n\\/g, "ஷெ");
uv = uv.replace(/N\\/g, "ஷே");
uv = uv.replace(/i\\/g, "ஷை");
uv = uv.replace(/\\;/g, "ஷ்");
uv = uv.replace(/\\/g, "ஷ");//


uv = uv.replace(/n]s/g, "ஸௌ");
uv = uv.replace(/N]h/g, "ஸோ");
uv = uv.replace(/n]h/g, "ஸொ");
uv = uv.replace(/]h/g, "ஸா");
uv = uv.replace(/]p/g, "ஸி");
uv = uv.replace(/]P/g, "ஸீ");

uv = uv.replace(/n]/g, "ஸெ");
uv = uv.replace(/N]/g, "ஸே");
uv = uv.replace(/i]/g, "ஸை");
uv = uv.replace(/];/g, "ஸ்");
uv = uv.replace(/]/g, "ஸ");//


uv = uv.replace(/>/g, "ää");
uv = uv.replace(/m/g, "அ");
uv = uv.replace(/M/g, "ஆ");
uv = uv.replace(/</g, "ஈ");
uv = uv.replace(/c/g, "உ");
uv = uv.replace(/C/g, "ஊ");
uv = uv.replace(/v/g, "எ");
uv = uv.replace(/V/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/x/g, "ஒ")
uv = uv.replace(/X/g, "ஓ");
uv = uv.replace(/xs/g, "ஔ");


uv = uv.replace(/\//g, "ஃ");


uv = uv.replace(/,/g, "இ");

uv = uv.replace(/=/g, "ஸ்ரீ");

uv = uv.replace(/>/g, ",");

uv = uv.replace(/T/g, "வு");

uv = uv.replace(/வு10/g, "வூ");
uv = uv.replace(/G\+/g, "பூ");
uv = uv.replace(/பு10/g, "பூ");
uv = uv.replace(/A\+/g, "யூ");
uv = uv.replace(/யு10/g, "யூ");

document.tamil_unicode_utf8.destination.value=uv;
}
 
function convert_boomi_2_unicode() { 
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/d/g, "க்ஷ");
uv = uv.replace(/d"/g, "க்ஷா");
uv = uv.replace(/õ/g, "க்ஷி");
uv = uv.replace(/ö/g, "க்ஷீ");
uv = uv.replace(/d#/g, "க்ஷு");
uv = uv.replace(/d$/g, "க்ஷூ");
uv = uv.replace(/%d/g, "க்ஷெ");
uv = uv.replace(/&d/g, "க்ஷே");
uv = uv.replace(/%d"/g, "க்ஷொ");
uv = uv.replace(/&d"/g, "க்ஷோ");
uv = uv.replace(/%d\[/g, "க்ஷௌ");
uv = uv.replace(/\+d/g, "க்ஷை");
uv = uv.replace(/ô/g, "க்ஷ்");

uv = uv.replace(/%\^\[/g, "ஜௌ");
uv = uv.replace(/&\^"/g, "ஜோ");
uv = uv.replace(/%\^"/g, "ஜொ");
uv = uv.replace(/\^"/g, "ஜா");
uv = uv.replace(/é/g, "ஜி");
uv = uv.replace(/ê/g, "ஜீ");
uv = uv.replace(/\^#/g, "ஜு");
uv = uv.replace(/\^\$/g, "ஜூ");
uv = uv.replace(/%\^/g, "ஜெ");
uv = uv.replace(/&\^/g, "ஜே");
uv = uv.replace(/\+\^/g, "ஜை");
uv = uv.replace(/è/g, "ஜ்");
uv = uv.replace(/\^/g, "ஜ");

uv = uv.replace(/%L\[/g, "கௌ");
uv = uv.replace(/&L"/g, "கோ");
uv = uv.replace(/%L"/g, "கொ");
uv = uv.replace(/L"/g, "கா");
uv = uv.replace(/g/g, "கி");
uv = uv.replace(/h/g, "கீ");
uv = uv.replace(/j/g, "கு");
uv = uv.replace(/k/g, "கூ");
uv = uv.replace(/%L/g, "கெ");
uv = uv.replace(/&L/g, "கே");
uv = uv.replace(/\+L/g, "கை");
uv = uv.replace(/f/g, "க்");
uv = uv.replace(/L/g, "க");



uv = uv.replace(/%M\[/g, "ஙௌ");
uv = uv.replace(/&M"/g, "ஙோ");
uv = uv.replace(/%M"/g, "ஙொ");
uv = uv.replace(/M"/g, "ஙா");
uv = uv.replace(/m/g, "ஙி");
uv = uv.replace(/p/g, "ஙீ");
uv = uv.replace(/r/g, "ஙு");
uv = uv.replace(/s/g, "ஙூ");
uv = uv.replace(/%M/g, "ஙெ");
uv = uv.replace(/&M/g, "ஙே");
uv = uv.replace(/\+M/g, "ஙை");
uv = uv.replace(/l/g, "ங்");
uv = uv.replace(/M/g, "ங");



uv = uv.replace(/%N\[/g, "சௌ");
uv = uv.replace(/&N"/g, "சோ");
uv = uv.replace(/%N"/g, "சொ");
uv = uv.replace(/N"/g, "சா");
uv = uv.replace(/t/g, "சி");
uv = uv.replace(/u/g, "சீ");
uv = uv.replace(/v/g, "சு");
uv = uv.replace(/w/g, "சூ");
uv = uv.replace(/%N/g, "செ");
uv = uv.replace(/&N/g, "சே");
uv = uv.replace(/\+N/g, "சை");
uv = uv.replace(/o/g, "ச்");
uv = uv.replace(/N/g, "ச");
uv = uv.replace(/%O\[/g, "ஞௌ");
uv = uv.replace(/&O"/g, "ஞோ");
uv = uv.replace(/%O"/g, "ஞொ");
uv = uv.replace(/O"/g, "ஞா");
uv = uv.replace(/y/g, "ஞி");
uv = uv.replace(/z/g, "ஞீ");
uv = uv.replace(/{/g, "ஞு");
uv = uv.replace(/\|/g, "ஞூ");
uv = uv.replace(/%O/g, "ஞெ");
uv = uv.replace(/&O/g, "ஞே");
uv = uv.replace(/\+O/g, "ஞை");
uv = uv.replace(/x/g, "ஞ்");
uv = uv.replace(/O/g, "ஞ");



uv = uv.replace(/%P\[/g, "டௌ");
uv = uv.replace(/&P"/g, "டோ");
uv = uv.replace(/%P"/g, "டொ");
uv = uv.replace(/P"/g, "டா");
uv = uv.replace(/~/g, "டி");
uv = uv.replace(/e/g, "டீ");
uv = uv.replace(/i/g, "டு");
uv = uv.replace(/n/g, "டூ");
uv = uv.replace(/%P/g, "டெ");
uv = uv.replace(/&P/g, "டே");
uv = uv.replace(/\+P/g, "டை");
uv = uv.replace(/}/g, "ட்");
uv = uv.replace(/P/g, "ட");



uv = uv.replace(/%Q\[/g, "ணௌ");
uv = uv.replace(/&Q"/g, "ணோ");
uv = uv.replace(/%Q"/g, "ணொ");
uv = uv.replace(/Q"/g, "ணா");
uv = uv.replace(/¢/g, "ணி");
uv = uv.replace(/£/g, "ணீ");
uv = uv.replace(/¤/g, "ணு");
uv = uv.replace(/¥/g, "ணூ");
uv = uv.replace(/%Q/g, "ணெ");
uv = uv.replace(/&Q/g, "ணே");
uv = uv.replace(/\+Q/g, "ணை");
uv = uv.replace(/¡/g, "ண்");
uv = uv.replace(/Q/g, "ண");




uv = uv.replace(/%R\[/g, "தௌ");
uv = uv.replace(/&R"/g, "தோ");
uv = uv.replace(/%R"/g, "தொ");
uv = uv.replace(/R"/g, "தா");
uv = uv.replace(/§/g, "தி");
uv = uv.replace(/¨/g, "தீ");
uv = uv.replace(/©/g, "து");
uv = uv.replace(/ª/g, "தூ");
uv = uv.replace(/%R/g, "தெ");
uv = uv.replace(/&R/g, "தே");
uv = uv.replace(/\+R/g, "தை");
uv = uv.replace(/¦/g, "த்");
uv = uv.replace(/R/g, "த");

uv = uv.replace(/%S\[/g, "நௌ");
uv = uv.replace(/&S"/g, "நோ");
uv = uv.replace(/%S"/g, "நொ");
uv = uv.replace(/S"/g, "நா");
uv = uv.replace(/¬/g, "நி");
uv = uv.replace(/­/g, "நீ");
uv = uv.replace(/®/g, "நு");
uv = uv.replace(/°/g, "நூ");
uv = uv.replace(/%S/g, "நெ");
uv = uv.replace(/&S/g, "நே");
uv = uv.replace(/\+S/g, "நை");
uv = uv.replace(/«/g, "ந்");
uv = uv.replace(/S/g, "ந");




uv = uv.replace(/%]\[/g, "னௌ");
uv = uv.replace(/&]"/g, "னோ");
uv = uv.replace(/%]"/g, "னொ");
uv = uv.replace(/]"/g, "னா");
uv = uv.replace(/à/g, "னி");
uv = uv.replace(/á/g, "னீ");
uv = uv.replace(/â/g, "னு");
uv = uv.replace(/ç/g, "னூ");
uv = uv.replace(/%]/g, "னெ");
uv = uv.replace(/&]/g, "னே");
uv = uv.replace(/\+]/g, "னை");
uv = uv.replace(/ß/g, "ன்");
uv = uv.replace(/]/g, "ன");



uv = uv.replace(/%T\[/g, "பௌ");
uv = uv.replace(/&T"/g, "போ");
uv = uv.replace(/%T"/g, "பொ");
uv = uv.replace(/T"/g, "பா");
uv = uv.replace(/²/g, "பி");
uv = uv.replace(/³/g, "பீ");
uv = uv.replace(/´/g, "பு");
uv = uv.replace(/µ/g, "பூ");
uv = uv.replace(/%T/g, "பெ");
uv = uv.replace(/&T/g, "பே");
uv = uv.replace(/\+T/g, "பை");
uv = uv.replace(/±/g, "ப்");
uv = uv.replace(/T/g, "ப");




uv = uv.replace(/%U\[/g, "மௌ");
uv = uv.replace(/&U"/g, "மோ");
uv = uv.replace(/%U"/g, "மொ");
uv = uv.replace(/U"/g, "மா");
uv = uv.replace(/·/g, "மி");
uv = uv.replace(/¸/g, "மீ");
uv = uv.replace(/¹/g, "மு");
uv = uv.replace(/º/g, "மூ");
uv = uv.replace(/%U/g, "மெ");
uv = uv.replace(/&U/g, "மே");
uv = uv.replace(/\+U/g, "மை");
uv = uv.replace(/¶/g, "ம்");
uv = uv.replace(/U/g, "ம");




uv = uv.replace(/%V\[/g, "யௌ");
uv = uv.replace(/&V"/g, "யோ");
uv = uv.replace(/%V"/g, "யொ");
uv = uv.replace(/V"/g, "யா");
uv = uv.replace(/¼/g, "யி");
uv = uv.replace(/½/g, "யீ");
uv = uv.replace(/¾/g, "யு");
uv = uv.replace(/¿/g, "யூ");
uv = uv.replace(/%V/g, "யெ");
uv = uv.replace(/&V/g, "யே");
uv = uv.replace(/\+V/g, "யை");
uv = uv.replace(/»/g, "ய்");
uv = uv.replace(/V/g, "ய");

uv = uv.replace(/%W\[/g, "ரௌ");
uv = uv.replace(/&W"/g, "ரோ");
uv = uv.replace(/%W"/g, "ரொ");
uv = uv.replace(/W"/g, "ரா");
uv = uv.replace(/Á/g, "ரி");
uv = uv.replace(/Â/g, "ரீ");
uv = uv.replace(/Ã/g, "ரு");
uv = uv.replace(/Ä/g, "ரூ");
uv = uv.replace(/%W/g, "ரெ");
uv = uv.replace(/&W/g, "ரே");
uv = uv.replace(/\+W/g, "ரை");
uv = uv.replace(/À/g, "ர்");
uv = uv.replace(/W/g, "ர");
uv = uv.replace(/%X\[/g, "லௌ");
uv = uv.replace(/&X"/g, "லோ");
uv = uv.replace(/%X"/g, "லொ");
uv = uv.replace(/X"/g, "லா");
uv = uv.replace(/Æ/g, "லி");
uv = uv.replace(/Ç/g, "லீ");
uv = uv.replace(/È/g, "லு");
uv = uv.replace(/É/g, "லூ");
uv = uv.replace(/%X/g, "லெ");
uv = uv.replace(/&X/g, "லே");
uv = uv.replace(/\+X/g, "லை");
uv = uv.replace(/Å/g, "ல்");
uv = uv.replace(/X/g, "ல");





uv = uv.replace(/%\[\[/g, "ளௌ");
uv = uv.replace(/&\["/g, "ளோ");
uv = uv.replace(/%\["/g, "ளொ");
uv = uv.replace(/\["/g, "ளா");
uv = uv.replace(/Õ/g, "ளி");
uv = uv.replace(/Ö/g, "ளீ");
uv = uv.replace(/Ø/g, "ளு");
uv = uv.replace(/Ù/g, "ளூ");
uv = uv.replace(/%\[/g, "ளெ");
uv = uv.replace(/&\[/g, "ளே");
uv = uv.replace(/\+\[/g, "ளை");
uv = uv.replace(/Ô/g, "ள்");
uv = uv.replace(/\[/g, "ள");



uv = uv.replace(/%Y\[/g, "வௌ");
uv = uv.replace(/&Y"/g, "வோ");
uv = uv.replace(/%Y"/g, "வொ");
uv = uv.replace(/Y"/g, "வா");
uv = uv.replace(/Ë/g, "வி");
uv = uv.replace(/Ì/g, "வீ");
uv = uv.replace(/Í/g, "வு");
uv = uv.replace(/Î/g, "வூ");
uv = uv.replace(/%Y/g, "வெ");
uv = uv.replace(/&Y/g, "வே");
uv = uv.replace(/\+Y/g, "வை");
uv = uv.replace(/Ê/g, "வ்");
uv = uv.replace(/Y/g, "வ");



uv = uv.replace(/%Z\[/g, "ழௌ");
uv = uv.replace(/&Z"/g, "ழோ");
uv = uv.replace(/%Z"/g, "ழொ");
uv = uv.replace(/Z"/g, "ழா");
uv = uv.replace(/Ð/g, "ழி");
uv = uv.replace(/Ñ/g, "ழீ");
uv = uv.replace(/Ò/g, "ழு");
uv = uv.replace(/Ó/g, "ழூ");
uv = uv.replace(/%Z/g, "ழெ");
uv = uv.replace(/&Z/g, "ழே");
uv = uv.replace(/\+Z/g, "ழை");
uv = uv.replace(/Ï/g, "ழ்");
uv = uv.replace(/Z/g, "ழ");

 
uv = uv.replace(/%\\\[/g, "றௌ");
uv = uv.replace(/&\\"/g, "றோ");
uv = uv.replace(/%\\"/g, "றொ");
uv = uv.replace(/\\"/g, "றா");
uv = uv.replace(/Û/g, "றி");
uv = uv.replace(/Ü/g, "றீ");
uv = uv.replace(/Ý/g, "று");
uv = uv.replace(/Þ/g, "றூ");
uv = uv.replace(/%\\/g, "றெ");
uv = uv.replace(/&\\/g, "றே");
uv = uv.replace(/\+\\/g, "றை");
uv = uv.replace(/Ú/g, "ற்");
uv = uv.replace(/\\/g, "ற");





uv = uv.replace(/%a\[/g, "ஹௌ");
uv = uv.replace(/&a"/g, "ஹோ");
uv = uv.replace(/%a"/g, "ஹொ");
uv = uv.replace(/a"/g, "ஹா");
uv = uv.replace(/ì/g, "ஹி");
uv = uv.replace(/í/g, "ஹீ");
uv = uv.replace(/a#/g, "ஹு");
uv = uv.replace(/a$/g, "ஹூ");
uv = uv.replace(/%a/g, "ஹெ");
uv = uv.replace(/&a/g, "ஹே");
uv = uv.replace(/\+a/g, "ஹை");
uv = uv.replace(/ë/g, "ஹ்");
uv = uv.replace(/a/g, "ஹ");


uv = uv.replace(/%c\[/g, "ஷௌ");
uv = uv.replace(/&c"/g, "ஷோ");
uv = uv.replace(/%c"/g, "ஷொ");
uv = uv.replace(/c"/g, "ஷா");
uv = uv.replace(/ò/g, "ஷி");
uv = uv.replace(/ó/g, "ஷீ");
uv = uv.replace(/c#/g, "ஷு");
uv = uv.replace(/c$/g, "ஷூ");
uv = uv.replace(/%c/g, "ஷெ");
uv = uv.replace(/&c/g, "ஷே");
uv = uv.replace(/\+c/g, "ஷை");
uv = uv.replace(/ñ/g, "ஷ்");
uv = uv.replace(/c/g, "ஷ");



uv = uv.replace(/%b\[/g, "ஸௌ");
uv = uv.replace(/&b"/g, "ஸோ");
uv = uv.replace(/%b"/g, "ஸொ");
uv = uv.replace(/b"/g, "ஸா");
uv = uv.replace(/ï/g, "ஸி");
uv = uv.replace(/ð/g, "ஸீ");
uv = uv.replace(/b#/g, "ஸு");
uv = uv.replace(/b$/g, "ஸூ");
uv = uv.replace(/%b/g, "ஸெ");
uv = uv.replace(/&b/g, "ஸே");
uv = uv.replace(/\+b/g, "ஸை");
uv = uv.replace(/î/g, "ஸ்");
uv = uv.replace(/b/g, "ஸ");


uv = uv.replace(/A/g, "அ");
uv = uv.replace(/B/g, "ஆ");
uv = uv.replace(/C/g, "இ");
uv = uv.replace(/D/g, "ஈ");
uv = uv.replace(/E/g, "உ");
uv = uv.replace(/F/g, "ஊ");
uv = uv.replace(/G/g, "எ");
uv = uv.replace(/H/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/J/g, "ஒ")
uv = uv.replace(/K/g, "ஓ");
uv = uv.replace(/J\[/g, "ஔ");


uv = uv.replace(/@/g, "ஃ");

uv = uv.replace(/q/g, "ஸ்ரீ");
uv = uv.replace(/å/g, "-")
uv = uv.replace(/æ/g, "-");
uv = uv.replace(/_/g, "_");
uv = uv.replace(/``/g, "\"");

document.tamil_unicode_utf8.destination.value=uv;
} 
 
function convert_dinakaran_2_unicode() { 
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/&/g, "க்ஷ");
uv = uv.replace(/&h/g, "க்ஷா");
uv = uv.replace(/i&/g, "க்ஷை");
uv = uv.replace(/&p/g, "க்ஷி");
uv = uv.replace(/&P/g, "க்ஷீ");
uv = uv.replace(/&%/g, "க்ஷு");
uv = uv.replace(/&\^/g, "க்ஷூ");
uv = uv.replace(/b&/g, "க்ஷெ");
uv = uv.replace(/n&/g, "க்ஷே");
uv = uv.replace(/b&h/g, "க்ஷொ");
uv = uv.replace(/n&h/g, "க்ஷோ");
uv = uv.replace(/b&s/g, "க்ஷௌ");
uv = uv.replace(/&‚/g, "க்ஷ்");
uv = uv.replace(/$\%/g, "ஜு");
uv = uv.replace(/\%/g, "ு");
uv = uv.replace(/\^/g, "ூ");
uv = uv.replace(/\//g, "0000");
uv = uv.replace(/h;/g, "ர்");
uv = uv.replace(/#;/g, "ஷ்");
uv = uv.replace(/z;/g, "ண்");
uv = uv.replace(/J}/g, "தூ");
uv = uv.replace(/b\$/g, "ஜெ");
uv = uv.replace(/b$s/g, "ஜௌ");
uv = uv.replace(/n$h/g, "ஜோ");
uv = uv.replace(/b$h/g, "ஜொ");
uv = uv.replace(/$h/g, "ஜா");
uv = uv.replace(/$p/g, "ஜி");
uv = uv.replace(/$P/g, "ஜீ");

uv = uv.replace(/$\\^/g, "ஜூ");
uv = uv.replace(/n$/g, "ஜே");
uv = uv.replace(/i$/g, "ஜை");
uv = uv.replace(/$;/g, "ஜ்");
uv = uv.replace(/\$/g, "ஜ");

uv = uv.replace(/bfs/g, "கௌ");
uv = uv.replace(/nfh/g, "கோ");
uv = uv.replace(/bfh/g, "கொ");
uv = uv.replace(/fh/g, "கா");
uv = uv.replace(/fp/g, "கி");
uv = uv.replace(/fP/g, "கீ");
uv = uv.replace(/F/g, "கு");
uv = uv.replace(/T/g, "கூ");
uv = uv.replace(/bf/g, "கெ");
uv = uv.replace(/nf/g, "கே");
uv = uv.replace(/if/g, "கை");
uv = uv.replace(/f;/g, "க்");
uv = uv.replace(/f/g, "க");

uv = uv.replace(/b's/g, "ஙௌ");
uv = uv.replace(/n'h/g, "ஙோ");
uv = uv.replace(/b'h/g, "ஙொ");
uv = uv.replace(/'h/g, "ஙா");
uv = uv.replace(/'p/g, "ஙி");
uv = uv.replace(/'P/g, "ஙீ");
uv = uv.replace(/b'/g, "ஙெ");
uv = uv.replace(/n'/g, "ஙே");
uv = uv.replace(/i'/g, "ஙை");
uv = uv.replace(/';/g, "ங்");
uv = uv.replace(/'/g, "ங");
uv = uv.replace(/brs/g, "சௌ");
uv = uv.replace(/nrh/g, "சோ");
uv = uv.replace(/brh/g, "சொ");
uv = uv.replace(/rh/g, "சா");
uv = uv.replace(/rp/g, "சி");
uv = uv.replace(/rP/g, "சீ");
uv = uv.replace(/R/g, "சு");
uv = uv.replace(/r{/g, "சூ");
uv = uv.replace(/br/g, "செ");
uv = uv.replace(/nr/g, "சே");
uv = uv.replace(/ir/g, "சை");
uv = uv.replace(/r;/g, "ச்");
uv = uv.replace(/r@/g, "ச்");
uv = uv.replace(/r/g, "ச");


uv = uv.replace(/b"s/g, "ஞௌ");
uv = uv.replace(/n"h/g, "ஞோ");
uv = uv.replace(/b"h/g, "ஞொ");
uv = uv.replace(/"h/g, "ஞா");
uv = uv.replace(/"p/g, "ஞி");
uv = uv.replace(/"P/g, "ஞீ");
uv = uv.replace(/b"/g, "ஞெ");
uv = uv.replace(/n"/g, "ஞே");
uv = uv.replace(/i"/g, "ஞை");
uv = uv.replace(/";/g, "ஞ்");
uv = uv.replace(/"/g, "ஞ");

uv = uv.replace(/bls/g, "டௌ");
uv = uv.replace(/nlh/g, "டோ");
uv = uv.replace(/blh/g, "டொ");
uv = uv.replace(/lh/g, "டா");
uv = uv.replace(/o/g, "டி");
uv = uv.replace(/O/g, "டீ");
uv = uv.replace(/L/g, "டு");
uv = uv.replace(/\?/g, "டூ");
uv = uv.replace(/bl/g, "டெ");
uv = uv.replace(/nl/g, "டே");
uv = uv.replace(/il/g, "டை");
uv = uv.replace(/l;/g, "ட்");
uv = uv.replace(/l/g, "ட");

uv = uv.replace(/bzs/g, "ணௌ");
uv = uv.replace(/nzh/g, "ணோ");
uv = uv.replace(/bzh/g, "ணொ");
uv = uv.replace(/zh/g, "ணா");
uv = uv.replace(/zp/g, "ணி");
uv = uv.replace(/zP/g, "ணீ");
uv = uv.replace(/q/g, "ணு");
uv = uv.replace(/q}/g, "ணூ");
uv = uv.replace(/bz/g, "ணெ");
uv = uv.replace(/nz/g, "ணே");
uv = uv.replace(/iz/g, "ணை");

uv = uv.replace(/z/g, "ண");
uv = uv.replace(/bjs/g, "தௌ");
uv = uv.replace(/njh/g, "தோ");
uv = uv.replace(/bjh/g, "தொ");
uv = uv.replace(/jh/g, "தா");
uv = uv.replace(/jp/g, "தி");
uv = uv.replace(/jP/g, "தீ");
uv = uv.replace(/J/g, "து");
uv = uv.replace(/bj/g, "தெ");
uv = uv.replace(/nj/g, "தே");
uv = uv.replace(/ij/g, "தை");
uv = uv.replace(/j;/g, "த்");
uv = uv.replace(/j/g, "த");

uv = uv.replace(/bes/g, "நௌ");
uv = uv.replace(/neh/g, "நோ");
uv = uv.replace(/beh/g, "நொ");
uv = uv.replace(/eh/g, "நா");
uv = uv.replace(/ep/g, "நி");
uv = uv.replace(/eP/g, "நீ");
uv = uv.replace(/E/g, "நு");
uv = uv.replace(/E}/g, "நூ");
uv = uv.replace(/be/g, "நெ");
uv = uv.replace(/ne/g, "நே");
uv = uv.replace(/ie/g, "நை");
uv = uv.replace(/e;/g, "ந்");
uv = uv.replace(/e/g, "ந");
uv = uv.replace(/bds/g, "னௌ");
uv = uv.replace(/ndh/g, "னோ");
uv = uv.replace(/bdh/g, "னொ");
uv = uv.replace(/dh/g, "னா");
uv = uv.replace(/dp/g, "னி");
uv = uv.replace(/dP/g, "னீ");
uv = uv.replace(/D/g, "னு");
uv = uv.replace(/D}/g, "னூ");
uv = uv.replace(/bd/g, "னெ");
uv = uv.replace(/nd/g, "னே");
uv = uv.replace(/id/g, "னை");
uv = uv.replace(/d;/g, "ன்");
uv = uv.replace(/d/g, "ன");


uv = uv.replace(/bgs/g, "பௌ");
uv = uv.replace(/ngh/g, "போ");
uv = uv.replace(/bgh/g, "பொ");
uv = uv.replace(/gh/g, "பா");
uv = uv.replace(/gp/g, "பி");
uv = uv.replace(/gP/g, "பீ");
uv = uv.replace(/g\[/g, "பு");
uv = uv.replace(/g{/g, "பூ");
uv = uv.replace(/bg/g, "பெ");
uv = uv.replace(/ng/g, "பே");
uv = uv.replace(/ig/g, "பை");
uv = uv.replace(/g;/g, "ப்");
uv = uv.replace(/g/g, "ப");
uv = uv.replace(/bks/g, "மௌ");
uv = uv.replace(/nkh/g, "மோ");
uv = uv.replace(/bkh/g, "மொ");
uv = uv.replace(/kh/g, "மா");
uv = uv.replace(/kp/g, "மி");
uv = uv.replace(/kP/g, "மீ");
uv = uv.replace(/K/g, "மு");
uv = uv.replace(/\\/g, "மூ");
uv = uv.replace(/bk/g, "மெ");
uv = uv.replace(/nk/g, "மே");
uv = uv.replace(/ik/g, "மை");
uv = uv.replace(/k;/g, "ம்");
uv = uv.replace(/k/g, "ம");

uv = uv.replace(/bas/g, "யௌ");
uv = uv.replace(/nah/g, "யோ");
uv = uv.replace(/bah/g, "யொ");
uv = uv.replace(/ah/g, "யா");
uv = uv.replace(/ap/g, "யி");
uv = uv.replace(/aP/g, "யீ");
uv = uv.replace(/a\[/g, "யு");
uv = uv.replace(/a{/g, "யூ");
uv = uv.replace(/ba/g, "யெ");
uv = uv.replace(/na/g, "யே");
uv = uv.replace(/ia/g, "யை");
uv = uv.replace(/a;/g, "ய்");
uv = uv.replace(/a/g, "ய");
uv = uv.replace(/bus/g, "ரௌ");
uv = uv.replace(/nuh/g, "ரோ");
uv = uv.replace(/buh/g, "ரொ");
uv = uv.replace(/uh/g, "ரா");
uv = uv.replace(/up/g, "ரி");
uv = uv.replace(/uP/g, "ரீ");
uv = uv.replace(/U/g, "ரு");
uv = uv.replace(/\+/g, "ரூ");
uv = uv.replace(/bu/g, "ரெ");
uv = uv.replace(/nu/g, "ரே");
uv = uv.replace(/iu/g, "ரை");
uv = uv.replace(/u;/g, "ர்");

uv = uv.replace(/u/g, "ர");


uv = uv.replace(/bys/g, "லௌ");
uv = uv.replace(/nyh/g, "லோ");
uv = uv.replace(/byh/g, "லொ");
uv = uv.replace(/yh/g, "லா");
uv = uv.replace(/yp/g, "லி");
uv = uv.replace(/yP/g, "லீ");
uv = uv.replace(/Y/g, "லு");
uv = uv.replace(/Y}/g, "லூ");
uv = uv.replace(/by/g, "லெ");
uv = uv.replace(/ny/g, "லே");
uv = uv.replace(/iy/g, "லை");
uv = uv.replace(/y;/g, "ல்");
uv = uv.replace(/y/g, "ல");

uv = uv.replace(/bss/g, "ளௌ");
uv = uv.replace(/nsh/g, "ளோ");
uv = uv.replace(/bsh/g, "ளொ");
uv = uv.replace(/sh/g, "ளா");
uv = uv.replace(/sp/g, "ளி");
uv = uv.replace(/sP/g, "ளீ");
uv = uv.replace(/S/g, "ளு");
uv = uv.replace(/\~/g, "ளூ");
uv = uv.replace(/bs/g, "ளெ");
uv = uv.replace(/ns/g, "ளே");
uv = uv.replace(/is/g, "ளை");
uv = uv.replace(/s;/g, "ள்");
uv = uv.replace(/s/g, "ள");

uv = uv.replace(/btt/g, "வௌ");
uv = uv.replace(/nth/g, "வோ");
uv = uv.replace(/bth/g, "வொ");
uv = uv.replace(/th/g, "வா");
uv = uv.replace(/tp/g, "வி");
uv = uv.replace(/tP/g, "வீ");
uv = uv.replace(/t\[/g, "வு");
uv = uv.replace(/t{/g, "வூ");
uv = uv.replace(/bt/g, "வெ");
uv = uv.replace(/nt/g, "வே");
uv = uv.replace(/it/g, "வை");
uv = uv.replace(/t;/g, "வ்");
uv = uv.replace(/t/g, "வ");


uv = uv.replace(/bww/g, "றௌ");
uv = uv.replace(/nww/g, "றோ");
uv = uv.replace(/bww/g, "றொ");
uv = uv.replace(/ww/g, "றா");
uv = uv.replace(/wp/g, "றி");
uv = uv.replace(/wP/g, "றீ");
uv = uv.replace(/W/g, "று");
uv = uv.replace(/W}/g, "றூ");
uv = uv.replace(/bw/g, "றெ");
uv = uv.replace(/nw/g, "றே");
uv = uv.replace(/iw/g, "றை");
uv = uv.replace(/w;/g, "ற்");
uv = uv.replace(/w/g, "ற");


uv = uv.replace(/bQQ/g, "ஹௌ");
uv = uv.replace(/nQQ/g, "ஹோ");
uv = uv.replace(/bQQ/g, "ஹொ");
uv = uv.replace(/QQ/g, "ஹா");
uv = uv.replace(/Qp/g, "ஹி");
uv = uv.replace(/QP/g, "ஹீ");
uv = uv.replace(/Q%/g, "ஹு");
uv = uv.replace(/Q\^/g, "ஹூ");
uv = uv.replace(/bQ/g, "ஹெ");
uv = uv.replace(/nQ/g, "ஹே");
uv = uv.replace(/iQ/g, "ஹை");
uv = uv.replace(/Q;/g, "ஹ்");
uv = uv.replace(/Q/g, "ஹ");


uv = uv.replace(/t/g, "வ");

uv = uv.replace(/bHH/g, "ழௌ");
uv = uv.replace(/nHh/g, "ழோ");
uv = uv.replace(/bHh/g, "ழொ");
uv = uv.replace(/Hh/g, "ழா");
uv = uv.replace(/Hp/g, "ழி");
uv = uv.replace(/HP/g, "ழீ");
uv = uv.replace(/G/g, "ழு");
uv = uv.replace(/\=/g, "ழூ");
uv = uv.replace(/bH/g, "ழெ");
uv = uv.replace(/nH/g, "ழே");
uv = uv.replace(/iH/g, "ழை");
uv = uv.replace(/H;/g, "ழ்");
uv = uv.replace(/H/g, "ழ");

uv = uv.replace(/öåå/g, "ஷௌ");
uv = uv.replace(/÷åõ/g, "ஷோ");
uv = uv.replace(/öåõ/g, "ஷொ");
uv = uv.replace(/åõ/g, "ஷா");
uv = uv.replace(/æ/g, "ஷி");
uv = uv.replace(/ç/g, "ஷீ");
uv = uv.replace(/åú/g, "ஷு");
uv = uv.replace(/åü/g, "ஷூ");
uv = uv.replace(/öå/g, "ஷெ");
uv = uv.replace(/÷å/g, "ஷே");
uv = uv.replace(/øå/g, "ஷை");
uv = uv.replace(/è/g, "ஷ்");
uv = uv.replace(/å/g, "ஷ");

uv = uv.replace(/b##/g, "ஷௌ");
uv = uv.replace(/n##/g, "ஷோ");
uv = uv.replace(/b##/g, "ஷொ");
uv = uv.replace(/##/g, "ஷா");
uv = uv.replace(/#p/g, "ஷி");
uv = uv.replace(/#P/g, "ஷீ");
uv = uv.replace(/#%/g, "ஷு");
uv = uv.replace(/#^/g, "ஷூ");
uv = uv.replace(/b#/g, "ஷெ");
uv = uv.replace(/n#/g, "ஷே");
uv = uv.replace(/i#/g, "ஷை");

uv = uv.replace(/#/g, "ஷ");

uv = uv.replace(/b!!/g, "ஸௌ");
uv = uv.replace(/n!!/g, "ஸோ");
uv = uv.replace(/b!!/g, "ஸொ");
uv = uv.replace(/!!/g, "ஸா");
uv = uv.replace(/!p/g, "ஸி");
uv = uv.replace(/!P/g, "ஸீ");
uv = uv.replace(/!%/g, "ஸு");
uv = uv.replace(/!^/g, "ஸூ");
uv = uv.replace(/b!/g, "ஸெ");
uv = uv.replace(/n!/g, "ஸே");
uv = uv.replace(/i!/g, "ஸை");
uv = uv.replace(/!;/g, "ஸ்");
uv = uv.replace(/!/g, "ஸ");


uv = uv.replace(/m/g, "அ");
uv = uv.replace(/M/g, "ஆ");

uv = uv.replace(/</g, "ஈ");
uv = uv.replace(/c/g, "உ");
uv = uv.replace(/C/g, "ஊ");
uv = uv.replace(/v/g, "எ");
uv = uv.replace(/V/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/x/g, "ஒ")
uv = uv.replace(/X/g, "ஓ");
uv = uv.replace(/cs/g, "ஔ");


uv = uv.replace(/`/g, "ஃ");
uv = uv.replace(/,/g, "இ");
uv = uv.replace(/\|/g, "ஸ்ரீ");
uv = uv.replace(/ˆ/g, "=");
uv = uv.replace(/‐/g, "-");
uv = uv.replace(/>/g, "?");
uv = uv.replace(/:/g, "்");
uv = uv.replace(/\^/g, "ூ");
uv = uv.replace(/\^/g, "ூ");
uv = uv.replace(/@/g, "்");

uv = uv.replace(/0000/g, ",");

document.tamil_unicode_utf8.destination.value=uv;
} 

function convert_dinamani_2_unicode() { 

uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/b/g, "க்ஷ");
uv = uv.replace(/bô/g, "க்ஷா");
uv = uv.replace(/·/g, "க்ஷி");
uv = uv.replace(/Î/g, "க்ஷீ");
uv = uv.replace(/bý/g, "க்ஷு");
uv = uv.replace(/bþ/g, "க்ஷூ");
uv = uv.replace(/ùb/g, "க்ஷெ");
uv = uv.replace(/úb/g, "க்ஷே");
uv = uv.replace(/ùbô/g, "க்ஷொ");
uv = uv.replace(/úbô/g, "க்ஷோ");
uv = uv.replace(/ùb\[/g, "க்ஷௌ");
uv = uv.replace(/ûb/g, "க்ஷை");
uv = uv.replace(/z/g, "க்ஷ்");
uv = uv.replace(/ù_\[/g, "ஜௌ");
uv = uv.replace(/ú_ô/g, "ஜோ");
uv = uv.replace(/ù_ô/g, "ஜொ");
uv = uv.replace(/_ô/g, "ஜா");
uv = uv.replace(/´/g, "ஜி");
uv = uv.replace(/Ë/g, "ஜீ");
uv = uv.replace(/_ý/g, "ஜு");
uv = uv.replace(/_þ/g, "ஜூ");
uv = uv.replace(/ù_/g, "ஜெ");
uv = uv.replace(/ú_/g, "ஜே");
uv = uv.replace(/û_/g, "ஜை");
uv = uv.replace(/w/g, "ஜ்");
uv = uv.replace(/_/g, "ஜ");
uv = uv.replace(/ùL\[/g, "கௌ");
uv = uv.replace(/úLô/g, "கோ");
uv = uv.replace(/ùLô/g, "கொ");
uv = uv.replace(/Lô/g, "கா");
uv = uv.replace(/¡/g, "கி");
uv = uv.replace(/¸/g, "கீ");
uv = uv.replace(/Ï/g, "கு");
uv = uv.replace(/á/g, "கூ");
uv = uv.replace(/ùL/g, "கெ");
uv = uv.replace(/úL/g, "கே");
uv = uv.replace(/ûL/g, "கை");
uv = uv.replace(/d/g, "க்");
uv = uv.replace(/L/g, "க");

uv = uv.replace(/ùM\[/g, "ஙௌ");
uv = uv.replace(/úMô/g, "ஙோ");
uv = uv.replace(/ùMô/g, "ஙொ");
uv = uv.replace(/Mô/g, "ஙா");
uv = uv.replace(/¢/g, "ஙி");
uv = uv.replace(/¹/g, "ஙீ");
uv = uv.replace(/Ð/g, "ஙு");
uv = uv.replace(/â/g, "ஙூ");
uv = uv.replace(/ùM/g, "ஙெ");
uv = uv.replace(/úM/g, "ஙே");
uv = uv.replace(/ûM/g, "ஙை");
uv = uv.replace(/e/g, "ங்");
uv = uv.replace(/M/g, "ங");

uv = uv.replace(/ùN\[/g, "சௌ");
uv = uv.replace(/úNô/g, "சோ");
uv = uv.replace(/ùNô/g, "சொ");
uv = uv.replace(/Nô/g, "சா");
uv = uv.replace(/£/g, "சி");
uv = uv.replace(/º/g, "சீ");
uv = uv.replace(/Ñ/g, "சு");
uv = uv.replace(/ã/g, "சூ");
uv = uv.replace(/ùN/g, "செ");
uv = uv.replace(/úN/g, "சே");
uv = uv.replace(/ûN/g, "சை");
uv = uv.replace(/f/g, "ச்");
uv = uv.replace(/N/g, "ச");

uv = uv.replace(/ùO\[/g, "ஞௌ");
uv = uv.replace(/úOô/g, "ஞோ");
uv = uv.replace(/ùOô/g, "ஞொ");
uv = uv.replace(/Oô/g, "ஞா");
uv = uv.replace(/¤/g, "ஞி");
uv = uv.replace(/»/g, "ஞீ");
uv = uv.replace(/Ò/g, "ஞு");
uv = uv.replace(/ä/g, "ஞூ");
uv = uv.replace(/ùO/g, "ஞெ");
uv = uv.replace(/úO/g, "ஞே");
uv = uv.replace(/ûO/g, "ஞை");
uv = uv.replace(/g/g, "ஞ்");
uv = uv.replace(/O/g, "ஞ");

uv = uv.replace(/ùP\[/g, "டௌ");
uv = uv.replace(/úPô/g, "டோ");
uv = uv.replace(/ùPô/g, "டொ");
uv = uv.replace(/Pô/g, "டா");
uv = uv.replace(/¥/g, "டி");
uv = uv.replace(/¼/g, "டீ");
uv = uv.replace(/Ó/g, "டு");
uv = uv.replace(/å/g, "டூ");
uv = uv.replace(/ùP/g, "டெ");
uv = uv.replace(/úP/g, "டே");
uv = uv.replace(/ûP/g, "டை");
uv = uv.replace(/h/g, "ட்");
uv = uv.replace(/P/g, "ட");

uv = uv.replace(/ùQ\[/g, "ணௌ");
uv = uv.replace(/úQô/g, "ணோ");
uv = uv.replace(/ùQô/g, "ணொ");
uv = uv.replace(/Qô/g, "ணா");
uv = uv.replace(/¦/g, "ணி");
uv = uv.replace(/½/g, "ணீ");
uv = uv.replace(/Ô/g, "ணு");
uv = uv.replace(/æ/g, "ணூ");
uv = uv.replace(/ùQ/g, "ணெ");
uv = uv.replace(/úQ/g, "ணே");
uv = uv.replace(/ûQ/g, "ணை");
uv = uv.replace(/i/g, "ண்");
uv = uv.replace(/Q/g, "ண");

uv = uv.replace(/ùR\[/g, "தௌ");
uv = uv.replace(/úRô/g, "தோ");
uv = uv.replace(/ùRô/g, "தொ");
uv = uv.replace(/Rô/g, "தா");
uv = uv.replace(/§/g, "தி");
uv = uv.replace(/¾/g, "தீ");
uv = uv.replace(/Õ/g, "து");
uv = uv.replace(/ç/g, "தூ");
uv = uv.replace(/ùR/g, "தெ");
uv = uv.replace(/úR/g, "தே");
uv = uv.replace(/ûR/g, "தை");
uv = uv.replace(/j/g, "த்");
uv = uv.replace(/R/g, "த");

uv = uv.replace(/ùS\[/g, "நௌ");
uv = uv.replace(/úSô/g, "நோ");
uv = uv.replace(/ùSô/g, "நொ");
uv = uv.replace(/Sô/g, "நா");
uv = uv.replace(/¨/g, "நி");
uv = uv.replace(/¿/g, "நீ");
uv = uv.replace(/Ö/g, "நு");
uv = uv.replace(/è/g, "நூ");
uv = uv.replace(/ùS/g, "நெ");
uv = uv.replace(/úS/g, "நே");
uv = uv.replace(/ûS/g, "நை");
uv = uv.replace(/k/g, "ந்");
uv = uv.replace(/S/g, "ந");

uv = uv.replace(/ù]\[/g, "னௌ");
uv = uv.replace(/ú]ô/g, "னோ");
uv = uv.replace(/ù]ô/g, "னொ");
uv = uv.replace(/]ô/g, "னா");
uv = uv.replace(/²/g, "னி");
uv = uv.replace(/É/g, "னீ");
uv = uv.replace(/à/g, "னு");
uv = uv.replace(/ò/g, "னூ");
uv = uv.replace(/ù]/g, "னெ");
uv = uv.replace(/ú]/g, "னே");
uv = uv.replace(/û]/g, "னை");
uv = uv.replace(/u/g, "ன்");
uv = uv.replace(/]/g, "ன");

uv = uv.replace(/ùT\[/g, "பௌ");
uv = uv.replace(/úTô/g, "போ");
uv = uv.replace(/ùTô/g, "பொ");
uv = uv.replace(/Tô/g, "பா");
uv = uv.replace(/©/g, "பி");
uv = uv.replace(/À/g, "பீ");
uv = uv.replace(/×/g, "பு");
uv = uv.replace(/é/g, "பூ");
uv = uv.replace(/ùT/g, "பெ");
uv = uv.replace(/úT/g, "பே");
uv = uv.replace(/ûT/g, "பை");
uv = uv.replace(/l/g, "ப்");
uv = uv.replace(/T/g, "ப");

uv = uv.replace(/ùU\[/g, "மௌ");
uv = uv.replace(/úUô/g, "மோ");
uv = uv.replace(/ùUô/g, "மொ");
uv = uv.replace(/Uô/g, "மா");
uv = uv.replace(/ª/g, "மி");
uv = uv.replace(/Á/g, "மீ");
uv = uv.replace(/Ø/g, "மு");
uv = uv.replace(/ê/g, "மூ");
uv = uv.replace(/ùU/g, "மெ");
uv = uv.replace(/úU/g, "மே");
uv = uv.replace(/ûU/g, "மை");
uv = uv.replace(/m/g, "ம்");
uv = uv.replace(/U/g, "ம");

uv = uv.replace(/ùV\[/g, "யௌ");
uv = uv.replace(/úVô/g, "யோ");
uv = uv.replace(/ùVô/g, "யொ");
uv = uv.replace(/Vô/g, "யா");
uv = uv.replace(/«/g, "யி");
uv = uv.replace(/Â/g, "யீ");
uv = uv.replace(/Ù/g, "யு");
uv = uv.replace(/ë/g, "யூ");
uv = uv.replace(/ùV/g, "யெ");
uv = uv.replace(/úV/g, "யே");
uv = uv.replace(/ûV/g, "யை");
uv = uv.replace(/n/g, "ய்");
uv = uv.replace(/V/g, "ய");


uv = uv.replace(/ùW\[/g, "ரௌ");
uv = uv.replace(/úWô/g, "ரோ");
uv = uv.replace(/ùWô/g, "ரொ");
uv = uv.replace(/Wô/g, "ரா");
uv = uv.replace(/¬/g, "ரி");
uv = uv.replace(/Ã/g, "ரீ");
uv = uv.replace(/Ú/g, "ரு");
uv = uv.replace(/ì/g, "ரூ");
uv = uv.replace(/ùW/g, "ரெ");
uv = uv.replace(/úW/g, "ரே");
uv = uv.replace(/ûW/g, "ரை");
uv = uv.replace(/o/g, "ர்");
uv = uv.replace(/W/g, "ர");


uv = uv.replace(/ùX\[/g, "லௌ");
uv = uv.replace(/úXô/g, "லோ");
uv = uv.replace(/ùXô/g, "லொ");
uv = uv.replace(/Xô/g, "லா");
uv = uv.replace(/­/g, "லி");
uv = uv.replace(/#/g, "லி");
uv = uv.replace(/Ä/g, "லீ");
uv = uv.replace(/Û/g, "லு");
uv = uv.replace(/í/g, "லூ");
uv = uv.replace(/ùX/g, "லெ");
uv = uv.replace(/úX/g, "லே");
uv = uv.replace(/ûX/g, "லை");
uv = uv.replace(/p/g, "ல்");
uv = uv.replace(/X/g, "ல");


uv = uv.replace(/ù\[\[/g, "ளௌ");
uv = uv.replace(/ú\[ô/g, "ளோ");
uv = uv.replace(/ù\[ô/g, "ளொ");
uv = uv.replace(/\[ô/g, "ளா");
uv = uv.replace(/°/g, "ளி");
uv = uv.replace(/Ç/g, "ளீ");
uv = uv.replace(/Þ/g, "ளு");
uv = uv.replace(/ð/g, "ளூ");
uv = uv.replace(/ù\[/g, "ளெ");
uv = uv.replace(/ú\[/g, "ளே");
uv = uv.replace(/û\[/g, "ளை");
uv = uv.replace(/s/g, "ள்");
uv = uv.replace(/\[/g, "ள");

uv = uv.replace(/ùY\[/g, "வௌ");
uv = uv.replace(/úYô/g, "வோ");
uv = uv.replace(/ùYô/g, "வொ");
uv = uv.replace(/Yô/g, "வா");
uv = uv.replace(/®/g, "வி");
uv = uv.replace(/Å/g, "வீ");
uv = uv.replace(/Ü/g, "வு");
uv = uv.replace(/î/g, "வூ");
uv = uv.replace(/ùY/g, "வெ");
uv = uv.replace(/úY/g, "வே");
uv = uv.replace(/ûY/g, "வை");
uv = uv.replace(/q/g, "வ்");
uv = uv.replace(/Y/g, "வ");

uv = uv.replace(/ùZ\[/g, "ழௌ");
uv = uv.replace(/úZô/g, "ழோ");
uv = uv.replace(/ùZô/g, "ழொ");
uv = uv.replace(/Zô/g, "ழா");
uv = uv.replace(/¯/g, "ழி");
uv = uv.replace(/Æ/g, "ழீ");
uv = uv.replace(/Ý/g, "ழு");
uv = uv.replace(/ï/g, "ழூ");
uv = uv.replace(/ùZ/g, "ழெ");
uv = uv.replace(/úZ/g, "ழே");
uv = uv.replace(/ûZ/g, "ழை");
uv = uv.replace(/r/g, "ழ்");
uv = uv.replace(/Z/g, "ழ");
uv = uv.replace(/ù\\\[/g, "றௌ");
uv = uv.replace(/ú\\ô/g, "றோ");
uv = uv.replace(/ù\\ô/g, "றொ");
uv = uv.replace(/\\ô/g, "றா");
uv = uv.replace(/±/g, "றி");
uv = uv.replace(/È/g, "றீ");
uv = uv.replace(/ß/g, "று");
uv = uv.replace(/ñ/g, "றூ");
uv = uv.replace(/ù\\/g, "றெ");
uv = uv.replace(/ú\\/g, "றே");
uv = uv.replace(/û\\/g, "றை");
uv = uv.replace(/t/g, "ற்");
uv = uv.replace(/\\/g, "ற");
uv = uv.replace(/ù^\[/g, "ஸௌ");
uv = uv.replace(/ú^ô/g, "ஸோ");
uv = uv.replace(/ù^ô/g, "ஸொ");
uv = uv.replace(/^ô/g, "ஸா");
uv = uv.replace(/³/g, "ஸி");
uv = uv.replace(/Ê/g, "ஸீ");
uv = uv.replace(/^ý/g, "ஸு");
uv = uv.replace(/^þ/g, "ஸூ");
uv = uv.replace(/ù^/g, "ஸெ");
uv = uv.replace(/ú^/g, "ஸே");
uv = uv.replace(/û^/g, "ஸை");
uv = uv.replace(/v/g, "ஸ்");
uv = uv.replace(/\^/g, "ஸ");

uv = uv.replace(/A/g, "அ");
uv = uv.replace(/B/g, "ஆ");
uv = uv.replace(/C/g, "இ");
uv = uv.replace(/D/g, "ஈ");
uv = uv.replace(/E/g, "உ");
uv = uv.replace(/F/g, "ஊ");
uv = uv.replace(/G/g, "எ");
uv = uv.replace(/H/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/J/g, "ஒ")
uv = uv.replace(/K/g, "ஓ");
uv = uv.replace(/J\[/g, "ஔ");





uv = uv.replace(/@/g, "ஃ");

uv = uv.replace(/c/g, "ஸ்ரீ");





uv = uv.replace(/ùa\[/g, "ஹௌ");
uv = uv.replace(/úaô/g, "ஹோ");
uv = uv.replace(/ùaô/g, "ஹொ");
uv = uv.replace(/aô/g, "ஹா");
uv = uv.replace(/¶/g, "ஹி");
uv = uv.replace(/Í/g, "ஹீ");
uv = uv.replace(/aý/g, "ஹு");
uv = uv.replace(/aþ/g, "ஹூ");
uv = uv.replace(/ùa/g, "ஹெ");
uv = uv.replace(/úa/g, "ஹே");
uv = uv.replace(/ûa/g, "ஹை");
uv = uv.replace(/y/g, "ஹ்");
uv = uv.replace(/a/g, "ஹ");////////4

uv = uv.replace(/ù`\[/g, "ஷௌ");
uv = uv.replace(/ú`ô/g, "ஷோ");
uv = uv.replace(/ù`ô/g, "ஷொ");
uv = uv.replace(/`ô/g, "ஷா");
uv = uv.replace(/µ/g, "ஷி");
uv = uv.replace(/Ì/g, "ஷீ");
uv = uv.replace(/`ý/g, "ஷு");
uv = uv.replace(/`þ/g, "ஷூ");
uv = uv.replace(/ù`/g, "ஷெ");
uv = uv.replace(/ú`/g, "ஷே");
uv = uv.replace(/û`/g, "ஷை");
uv = uv.replace(/x/g, "ஷ்");
uv = uv.replace(/`/g, "ஷ");////////4


document.tamil_unicode_utf8.destination.value=uv; 
} 
 
function convert_dinathanthy_2_unicode() { 
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/d/g, "க்ஷ");
uv = uv.replace(/dÖ/g, "க்ஷா");
uv = uv.replace(/Ûd/g, "க்ஷை");
uv = uv.replace(/Ô/g, "க்ஷி");
uv = uv.replace(/Õ/g, "க்ஷீ");
uv = uv.replace(/d×/g, "க்ஷு");
uv = uv.replace(/dØ/g, "க்ஷூ");
uv = uv.replace(/Ùd/g, "க்ஷெ");
uv = uv.replace(/Úd/g, "க்ஷே");
uv = uv.replace(/ÙdÖ/g, "க்ஷொ");
uv = uv.replace(/ÚdÖ/g, "க்ஷோ");
uv = uv.replace(/Ùd\[/g, "க்ஷௌ");
uv = uv.replace(/Ó/g, "க்ஷ்");

uv = uv.replace(/Ù\^\[/g, "ஜௌ");
uv = uv.replace(/Ú\^Ö/g, "ஜோ");
uv = uv.replace(/Ù\^Ö/g, "ஜொ");
uv = uv.replace(/\^Ö/g, "ஜா");
uv = uv.replace(/È/g, "ஜி");
uv = uv.replace(/É/g, "ஜீ");
uv = uv.replace(/\^Ø/g, "ஜு");
uv = uv.replace(/\^þ/g, "ஜூ");
uv = uv.replace(/Ù\^/g, "ஜெ");
uv = uv.replace(/Ú\^/g, "ஜே");
uv = uv.replace(/Û\^/g, "ஜை");
uv = uv.replace(/Ç/g, "ஜ்");
uv = uv.replace(/\^/g, "ஜ");



uv = uv.replace(/ÙL\[/g, "கௌ");
uv = uv.replace(/ÚLÖ/g, "கோ");
uv = uv.replace(/ÙLÖ/g, "கொ");
uv = uv.replace(/LÖ/g, "கா");
uv = uv.replace(/f/g, "கி");
uv = uv.replace(/g/g, "கீ");
uv = uv.replace(/h/g, "கு");
uv = uv.replace(/i/g, "கூ");
uv = uv.replace(/ÙL/g, "கெ");
uv = uv.replace(/ÚL/g, "கே");
uv = uv.replace(/ÛL/g, "கை");
uv = uv.replace(/e/g, "க்");
uv = uv.replace(/L/g, "க");
uv = uv.replace(/ÙM\[/g, "ஙௌ");
uv = uv.replace(/ÚMÖ/g, "ஙோ");
uv = uv.replace(/ÙMÖ/g, "ஙொ");
uv = uv.replace(/MÖ/g, "ஙா");
uv = uv.replace(/k/g, "ஙி");
uv = uv.replace(/l/g, "ஙீ");
uv = uv.replace(/m/g, "ஙு");
uv = uv.replace(/n/g, "ஙூ");
uv = uv.replace(/ÙM/g, "ஙெ");
uv = uv.replace(/ÚM/g, "ஙே");
uv = uv.replace(/ÛM/g, "ஙை");
uv = uv.replace(/j/g, "ங்");
uv = uv.replace(/M/g, "ங");

uv = uv.replace(/ÙN\[/g, "சௌ");
uv = uv.replace(/ÚNÖ/g, "சோ");
uv = uv.replace(/ÙNÖ/g, "சொ");
uv = uv.replace(/NÖ/g, "சா");
uv = uv.replace(/p/g, "சி");
uv = uv.replace(/q/g, "சீ");
uv = uv.replace(/r/g, "சு");
uv = uv.replace(/s/g, "சூ");
uv = uv.replace(/ÙN/g, "செ");
uv = uv.replace(/ÚN/g, "சே");
uv = uv.replace(/ÛN/g, "சை");
uv = uv.replace(/o/g, "ச்");
uv = uv.replace(/N/g, "ச");

uv = uv.replace(/ÙO\[/g, "ஞௌ");
uv = uv.replace(/ÚOÖ/g, "ஞோ");
uv = uv.replace(/ÙOÖ/g, "ஞொ");
uv = uv.replace(/OÖ/g, "ஞா");
uv = uv.replace(/u/g, "ஞி");
uv = uv.replace(/v/g, "ஞீ");
uv = uv.replace(/w/g, "ஞு");
uv = uv.replace(/x/g, "ஞூ");
uv = uv.replace(/ÙO/g, "ஞெ");
uv = uv.replace(/ÚO/g, "ஞே");
uv = uv.replace(/ÛO/g, "ஞை");
uv = uv.replace(/t/g, "ஞ்");
uv = uv.replace(/O/g, "ஞ");


uv = uv.replace(/ÙP\[/g, "டௌ");
uv = uv.replace(/ÚPÖ/g, "டோ");
uv = uv.replace(/ÙPÖ/g, "டொ");
uv = uv.replace(/PÖ/g, "டா");
uv = uv.replace(/z/g, "டி");
uv = uv.replace(/{/g, "டீ");
uv = uv.replace(/\|/g, "டு");
uv = uv.replace(/}/g, "டூ");
uv = uv.replace(/ÙP/g, "டெ");
uv = uv.replace(/ÚP/g, "டே");
uv = uv.replace(/ÛP/g, "டை");
uv = uv.replace(/y/g, "ட்");
uv = uv.replace(/P/g, "ட");

uv = uv.replace(/ÙQ\[/g, "ணௌ");
uv = uv.replace(/ÚQÖ/g, "ணோ");
uv = uv.replace(/ÙQÖ/g, "ணொ");
uv = uv.replace(/QÖ/g, "ணா");
uv = uv.replace(/‚/g, "ணி");
uv = uv.replace(/ƒ/g, "ணீ");
uv = uv.replace(/„/g, "ணு");
uv = uv.replace(/…/g, "ணூ");
uv = uv.replace(/ÙQ/g, "ணெ");
uv = uv.replace(/ÚQ/g, "ணே");
uv = uv.replace(/ÛQ/g, "ணை");
uv = uv.replace(//g, "ண்");
uv = uv.replace(/Q/g, "ண");
uv = uv.replace(/ÙR\[/g, "தௌ");
uv = uv.replace(/ÚRÖ/g, "தோ");
uv = uv.replace(/ÙRÖ/g, "தொ");
uv = uv.replace(/RÖ/g, "தா");
uv = uv.replace(/‡/g, "தி");
uv = uv.replace(/ˆ/g, "தீ");
uv = uv.replace(/‰/g, "து");
uv = uv.replace(/Š/g, "தூ");
uv = uv.replace(/ÙR/g, "தெ");
uv = uv.replace(/ÚR/g, "தே");
uv = uv.replace(/ÛR/g, "தை");
uv = uv.replace(/†/g, "த்");
uv = uv.replace(/R/g, "த");


uv = uv.replace(/ÙS\[/g, "நௌ");
uv = uv.replace(/ÚSÖ/g, "நோ");
uv = uv.replace(/ÙSÖ/g, "நொ");
uv = uv.replace(/SÖ/g, "நா");
uv = uv.replace(/Œ/g, "நி");
uv = uv.replace(//g, "நீ");
uv = uv.replace(/î/g, "நு");
uv = uv.replace(//g, "நு");
uv = uv.replace(//g, "நூ");
uv = uv.replace(/ÙS/g, "நெ");
uv = uv.replace(/ÚS/g, "நே");
uv = uv.replace(/ÛS/g, "நை");
uv = uv.replace(/‹/g, "ந்");
uv = uv.replace(/S/g, "ந");


uv = uv.replace(/Ù]\[/g, "னௌ");
uv = uv.replace(/Ú]Ö/g, "னோ");
uv = uv.replace(/Ù]Ö/g, "னொ");
uv = uv.replace(/]Ö/g, "னா");
uv = uv.replace(/Â/g, "னி");
uv = uv.replace(/Ã/g, "னீ");
uv = uv.replace(/Ä/g, "னு");
uv = uv.replace(/Å/g, "னூ");
uv = uv.replace(/Ù]/g, "னெ");
uv = uv.replace(/Ú]/g, "னே");
uv = uv.replace(/Û]/g, "னை");
uv = uv.replace(/Á/g, "ன்");
uv = uv.replace(/]/g, "ன");
uv = uv.replace(/ÙT\[/g, "பௌ");
uv = uv.replace(/ÚTÖ/g, "போ");
uv = uv.replace(/ÙTÖ/g, "பொ");
uv = uv.replace(/TÖ/g, "பா");
uv = uv.replace(/‘/g, "பி");
uv = uv.replace(/’/g, "பீ");
uv = uv.replace(/“/g, "பு");
uv = uv.replace(/”/g, "பூ");
uv = uv.replace(/ÙT/g, "பெ");
uv = uv.replace(/ÚT/g, "பே");
uv = uv.replace(/ÛT/g, "பை");
uv = uv.replace(//g, "ப்");
uv = uv.replace(/T/g, "ப");


uv = uv.replace(/ÙU\[/g, "மௌ");
uv = uv.replace(/ÚUÖ/g, "மோ");
uv = uv.replace(/ÙUÖ/g, "மொ");
uv = uv.replace(/UÖ/g, "மா");
uv = uv.replace(/–/g, "மி");
uv = uv.replace(/—/g, "மீ");
uv = uv.replace(/˜/g, "மு");
uv = uv.replace(/™/g, "மூ");
uv = uv.replace(/ÙU/g, "மெ");
uv = uv.replace(/ÚU/g, "மே");
uv = uv.replace(/ÛU/g, "மை");
uv = uv.replace(/•/g, "ம்");
uv = uv.replace(/U/g, "ம");


uv = uv.replace(/ÙV\[/g, "யௌ");
uv = uv.replace(/ÚVÖ/g, "யோ");
uv = uv.replace(/ÙVÖ/g, "யொ");
uv = uv.replace(/VÖ/g, "யா");
uv = uv.replace(/›/g, "யி");
uv = uv.replace(/œ/g, "யீ");
uv = uv.replace(//g, "யு");
uv = uv.replace(//g, "யூ");
uv = uv.replace(/ÙV/g, "யெ");
uv = uv.replace(/ÚV/g, "யே");
uv = uv.replace(/ÛV/g, "யை");
uv = uv.replace(/š/g, "ய்");
uv = uv.replace(/V/g, "ய");


uv = uv.replace(/ÙW\[/g, "ரௌ");
uv = uv.replace(/ÚWÖ/g, "ரோ");
uv = uv.replace(/ÙWÖ/g, "ரொ");
uv = uv.replace(/WÖ/g, "ரா");
uv = uv.replace(/¡/g, "ரி");
uv = uv.replace(/¢/g, "ரீ");
uv = uv.replace(/£/g, "ரு");
uv = uv.replace(/¤/g, "ரூ");
uv = uv.replace(/ÙW/g, "ரெ");
uv = uv.replace(/ÚW/g, "ரே");
uv = uv.replace(/ÛW/g, "ரை");
uv = uv.replace(/Ÿ/g, "ர்");
uv = uv.replace(/W/g, "ர");
uv = uv.replace(/ÙX\[/g, "லௌ");
uv = uv.replace(/ÚXÖ/g, "லோ");
uv = uv.replace(/ÙXÖ/g, "லொ");
uv = uv.replace(/XÖ/g, "லா");
uv = uv.replace(/¦/g, "லி");
uv = uv.replace(/§/g, "லீ");
uv = uv.replace(/¨/g, "லு");
uv = uv.replace(/©/g, "லூ");
uv = uv.replace(/ÙX/g, "லெ");
uv = uv.replace(/ÚX/g, "லே");
uv = uv.replace(/ÛX/g, "லை");
uv = uv.replace(/¥/g, "ல்");
uv = uv.replace(/X/g, "ல");



uv = uv.replace(/Ù\[\[/g, "ளௌ");
uv = uv.replace(/Ú\[Ö/g, "ளோ");
uv = uv.replace(/Ù\[Ö/g, "ளொ");
uv = uv.replace(/\[Ö/g, "ளா");
uv = uv.replace(/¸/g, "ளி");
uv = uv.replace(/¹/g, "ளீ");
uv = uv.replace(/º/g, "ளு");
uv = uv.replace(/»/g, "ளூ");
uv = uv.replace(/Ù\[/g, "ளெ");
uv = uv.replace(/Ú\[/g, "ளே");
uv = uv.replace(/Û\[/g, "ளை");
uv = uv.replace(/·/g, "ள்");
uv = uv.replace(/\[/g, "ள");


uv = uv.replace(/ÙY\[/g, "வௌ");
uv = uv.replace(/ÚYÖ/g, "வோ");
uv = uv.replace(/ÙYÖ/g, "வொ");
uv = uv.replace(/YÖ/g, "வா");
uv = uv.replace(/«/g, "வி");
uv = uv.replace(/®/g, "வீ");
uv = uv.replace(/°/g, "வு");
uv = uv.replace(/±/g, "வூ");
uv = uv.replace(/ÙY/g, "வெ");
uv = uv.replace(/ÚY/g, "வே");
uv = uv.replace(/ÛY/g, "வை");
uv = uv.replace(/ª/g, "வ்");
uv = uv.replace(/Y/g, "வ");

uv = uv.replace(/ÙZ\[/g, "ழௌ");
uv = uv.replace(/ÚZÖ/g, "ழோ");
uv = uv.replace(/ÙZÖ/g, "ழொ");
uv = uv.replace(/ZÖ/g, "ழா");
uv = uv.replace(/³/g, "ழி");
uv = uv.replace(/´/g, "ழீ");
uv = uv.replace(/µ/g, "ழு");
uv = uv.replace(/¶/g, "ழூ");
uv = uv.replace(/ÙZ/g, "ழெ");
uv = uv.replace(/ÚZ/g, "ழே");
uv = uv.replace(/ÛZ/g, "ழை");
uv = uv.replace(/²/g, "ழ்");
uv = uv.replace(/Z/g, "ழ");
uv = uv.replace(/Ù\\\[/g, "றௌ");
uv = uv.replace(/Ú\\Ö/g, "றோ");
uv = uv.replace(/Ù\\Ö/g, "றொ");
uv = uv.replace(/\\Ö/g, "றா");
uv = uv.replace(/½/g, "றி");
uv = uv.replace(/¾/g, "றீ");
uv = uv.replace(/¿/g, "று");
uv = uv.replace(/À/g, "றூ");
uv = uv.replace(/Ù\\/g, "றெ");
uv = uv.replace(/Ú\\/g, "றே");
uv = uv.replace(/Û\\/g, "றை");
uv = uv.replace(/¼/g, "ற்");
uv = uv.replace(/\\/g, "ற");





uv = uv.replace(/Ùa\[/g, "ஹௌ");
uv = uv.replace(/ÚaÖ/g, "ஹோ");
uv = uv.replace(/ÙaÖ/g, "ஹொ");
uv = uv.replace(/aÖ/g, "ஹா");
uv = uv.replace(/Ë/g, "ஹி");
uv = uv.replace(/Ì/g, "ஹீ");
uv = uv.replace(/a×/g, "ஹு");
uv = uv.replace(/aØ/g, "ஹூ");
uv = uv.replace(/Ùa/g, "ஹெ");
uv = uv.replace(/Úa/g, "ஹே");
uv = uv.replace(/Ûa/g, "ஹை");
uv = uv.replace(/Ê/g, "ஹ்");
uv = uv.replace(/a/g, "ஹ");


uv = uv.replace(/Ùc\[/g, "ஷௌ");
uv = uv.replace(/ÚcÖ/g, "ஷோ");
uv = uv.replace(/ÙcÖ/g, "ஷொ");
uv = uv.replace(/cÖ/g, "ஷா");
uv = uv.replace(/Ñ/g, "ஷி");
uv = uv.replace(/Ò/g, "ஷீ");
uv = uv.replace(/c×/g, "ஷு");
uv = uv.replace(/cØ/g, "ஷூ");
uv = uv.replace(/Ùc/g, "ஷெ");
uv = uv.replace(/Úc/g, "ஷே");
uv = uv.replace(/Ûc/g, "ஷை");
uv = uv.replace(/Ð/g, "ஷ்");
uv = uv.replace(/c/g, "ஷ");

uv = uv.replace(/Ùb\[/g, "ஸௌ");
uv = uv.replace(/ÚbÖ/g, "ஸோ");
uv = uv.replace(/ÙbÖ/g, "ஸொ");
uv = uv.replace(/bÖ/g, "ஸா");
uv = uv.replace(/Î/g, "ஸி");
uv = uv.replace(/Ï/g, "ஸீ");
uv = uv.replace(/b×/g, "ஸு");
uv = uv.replace(/bØ/g, "ஸூ");
uv = uv.replace(/Ùb/g, "ஸெ");
uv = uv.replace(/Úb/g, "ஸே");
uv = uv.replace(/Ûb/g, "ஸை");
uv = uv.replace(/Í/g, "ஸ்");
uv = uv.replace(/b/g, "ஸ");

uv = uv.replace(/A/g, "அ");
uv = uv.replace(/B/g, "ஆ");
uv = uv.replace(/C/g, "இ");
uv = uv.replace(/D/g, "ஈ");
uv = uv.replace(/E/g, "உ");
uv = uv.replace(/F/g, "ஊ");
uv = uv.replace(/G/g, "எ");
uv = uv.replace(/H/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/J/g, "ஒ")
uv = uv.replace(/K/g, "ஓ");
uv = uv.replace(/J\[/g, "ஔ");

uv = uv.replace(/@/g, "ஃ");
uv = uv.replace(/Ü/g, "-");
uv = uv.replace(/Ý/g, "_");
uv = uv.replace(/~/g, "ஸ்ரீ");

document.tamil_unicode_utf8.destination.value=uv;
} 
 
function convert_kavipriya_2_unicode() { 

uv = document.tamil_unicode_utf8.source.value;
uv = uv.replace(/û/g, "க்ஷ");
   
uv = uv.replace(/b/g, "க்ஷ");
uv = uv.replace(/ùக்ஷ\[/g, "க்ஷௌ");
uv = uv.replace(/bô/g, "க்ஷா");
uv = uv.replace(/·/g, "க்ஷி");
uv = uv.replace(/Î/g, "க்ஷீ");
uv = uv.replace(/bý/g, "க்ஷு");
uv = uv.replace(/bþ/g, "க்ஷூ");
uv = uv.replace(/ùb/g, "க்ஷெ");
uv = uv.replace(/úb/g, "க்ஷே");
uv = uv.replace(/ùbô/g, "க்ஷொ");
uv = uv.replace(/úbô/g, "க்ஷோ");
uv = uv.replace(/ûb/g, "க்ஷை");
uv = uv.replace(/z/g, "க்ஷ்");

uv = uv.replace(/_/g, "ஜ");
uv = uv.replace(/ùஜ/g, "ஜெ");
uv = uv.replace(/ùஜ\[/g, "ஜௌ");
uv = uv.replace(/úஜô/g, "ஜோ");
uv = uv.replace(/ùஜô/g, "ஜொ");
uv = uv.replace(/ஜô/g, "ஜா");
uv = uv.replace(/´/g, "ஜி");
uv = uv.replace(/Ë/g, "ஜீ");
uv = uv.replace(/ஜý/g, "ஜு");
uv = uv.replace(/ஜþ/g, "ஜூ");
uv = uv.replace(/úஜ/g, "ஜே");
uv = uv.replace(/ûஜ/g, "ஜை");
uv = uv.replace(/w/g, "ஜ்");////////4

uv = uv.replace(/ùL\[/g, "கௌ");
uv = uv.replace(/úLô/g, "கோ");
uv = uv.replace(/ùLô/g, "கொ");
uv = uv.replace(/Lô/g, "கா");
uv = uv.replace(/¡/g, "கி");
uv = uv.replace(/¸/g, "கீ");
uv = uv.replace(/Ï/g, "கு");
uv = uv.replace(/á/g, "கூ");
uv = uv.replace(/ùL/g, "கெ");
uv = uv.replace(/úL/g, "கே");
uv = uv.replace(/ûL/g, "கை");
uv = uv.replace(/d/g, "க்");
uv = uv.replace(/L/g, "க");////////4

uv = uv.replace(/ùM\[/g, "ஙௌ");
uv = uv.replace(/úMô/g, "ஙோ");
uv = uv.replace(/ùMô/g, "ஙொ");
uv = uv.replace(/Mô/g, "ஙா");
uv = uv.replace(/¢/g, "ஙி");
uv = uv.replace(/¹/g, "ஙீ");
uv = uv.replace(/Ð/g, "ஙு");
uv = uv.replace(/â/g, "ஙூ");
uv = uv.replace(/ùM/g, "ஙெ");
uv = uv.replace(/úM/g, "ஙே");
uv = uv.replace(/ûM/g, "ஙை");
uv = uv.replace(/e/g, "ங்");
uv = uv.replace(/M/g, "ங");////////4

uv = uv.replace(/ùN\[/g, "சௌ");
uv = uv.replace(/úNô/g, "சோ");
uv = uv.replace(/ùNô/g, "சொ");
uv = uv.replace(/Nô/g, "சா");
uv = uv.replace(/£/g, "சி");
uv = uv.replace(/º/g, "சீ");
uv = uv.replace(/Ñ/g, "சு");
uv = uv.replace(/ã/g, "சூ");
uv = uv.replace(/ùN/g, "செ");
uv = uv.replace(/úN/g, "சே");
uv = uv.replace(/ûN/g, "சை");
uv = uv.replace(/f/g, "ச்");
uv = uv.replace(/N/g, "ச");////////4

uv = uv.replace(/ùO\[/g, "ஞௌ");
uv = uv.replace(/úOô/g, "ஞோ");
uv = uv.replace(/ùOô/g, "ஞொ");
uv = uv.replace(/Oô/g, "ஞா");
uv = uv.replace(/¤/g, "ஞி");
uv = uv.replace(/»/g, "ஞீ");
uv = uv.replace(/Ò/g, "ஞு");
uv = uv.replace(/ä/g, "ஞூ");
uv = uv.replace(/ùO/g, "ஞெ");
uv = uv.replace(/úO/g, "ஞே");
uv = uv.replace(/ûO/g, "ஞை");
uv = uv.replace(/g/g, "ஞ்");
uv = uv.replace(/O/g, "ஞ");////////4

uv = uv.replace(/ùP\[/g, "டௌ");
uv = uv.replace(/úPô/g, "டோ");
uv = uv.replace(/ùPô/g, "டொ");
uv = uv.replace(/Pô/g, "டா");
uv = uv.replace(/¥/g, "டி");
uv = uv.replace(/¼/g, "டீ");
uv = uv.replace(/Ó/g, "டு");
uv = uv.replace(/å/g, "டூ");
uv = uv.replace(/ùP/g, "டெ");
uv = uv.replace(/úP/g, "டே");
uv = uv.replace(/ûP/g, "டை");
uv = uv.replace(/h/g, "ட்");
uv = uv.replace(/P/g, "ட");////////4

uv = uv.replace(/ùQ\[/g, "ணௌ");
uv = uv.replace(/úQô/g, "ணோ");
uv = uv.replace(/ùQô/g, "ணொ");
uv = uv.replace(/Qô/g, "ணா");
uv = uv.replace(/¦/g, "ணி");
uv = uv.replace(/½/g, "ணீ");
uv = uv.replace(/Ô/g, "ணு");
uv = uv.replace(/æ/g, "ணூ");
uv = uv.replace(/ùQ/g, "ணெ");
uv = uv.replace(/úQ/g, "ணே");
uv = uv.replace(/ûQ/g, "ணை");
uv = uv.replace(/i/g, "ண்");
uv = uv.replace(/Q/g, "ண");////////4

uv = uv.replace(/ùR\[/g, "தௌ");
uv = uv.replace(/úRô/g, "தோ");
uv = uv.replace(/ùRô/g, "தொ");
uv = uv.replace(/Rô/g, "தா");
uv = uv.replace(/§/g, "தி");
uv = uv.replace(/¾/g, "தீ");
uv = uv.replace(/Õ/g, "து");
uv = uv.replace(/ç/g, "தூ");
uv = uv.replace(/ùR/g, "தெ");
uv = uv.replace(/úR/g, "தே");
uv = uv.replace(/ûR/g, "தை");
uv = uv.replace(/j/g, "த்");
uv = uv.replace(/R/g, "த");////////4

uv = uv.replace(/ùS\[/g, "நௌ");
uv = uv.replace(/úSô/g, "நோ");
uv = uv.replace(/ùSô/g, "நொ");
uv = uv.replace(/Sô/g, "நா");
uv = uv.replace(/¨/g, "நி");
uv = uv.replace(/¿/g, "நீ");
uv = uv.replace(/Ö/g, "நு");
uv = uv.replace(/è/g, "நூ");
uv = uv.replace(/ùS/g, "நெ");
uv = uv.replace(/úS/g, "நே");
uv = uv.replace(/ûS/g, "நை");
uv = uv.replace(/k/g, "ந்");
uv = uv.replace(/S/g, "ந");////////4

uv = uv.replace(/ù]\[/g, "னௌ");
uv = uv.replace(/ú]ô/g, "னோ");
uv = uv.replace(/ù]ô/g, "னொ");
uv = uv.replace(/]ô/g, "னா");
uv = uv.replace(/²/g, "னி");
uv = uv.replace(/É/g, "னீ");
uv = uv.replace(/à/g, "னு");
uv = uv.replace(/ò/g, "னூ");
uv = uv.replace(/ù]/g, "னெ");
uv = uv.replace(/ú]/g, "னே");
uv = uv.replace(/û]/g, "னை");
uv = uv.replace(/u/g, "ன்");
uv = uv.replace(/]/g, "ன");////////4

uv = uv.replace(/ùT\[/g, "பௌ");
uv = uv.replace(/úTô/g, "போ");
uv = uv.replace(/ùTô/g, "பொ");
uv = uv.replace(/Tô/g, "பா");
uv = uv.replace(/©/g, "பி");
uv = uv.replace(/À/g, "பீ");
uv = uv.replace(/×/g, "பு");
uv = uv.replace(/é/g, "பூ");
uv = uv.replace(/ùT/g, "பெ");
uv = uv.replace(/úT/g, "பே");
uv = uv.replace(/ûT/g, "பை");
uv = uv.replace(/l/g, "ப்");
uv = uv.replace(/T/g, "ப");////////4

uv = uv.replace(/ùU\[/g, "மௌ");
uv = uv.replace(/úUô/g, "மோ");
uv = uv.replace(/ùUô/g, "மொ");
uv = uv.replace(/Uô/g, "மா");
uv = uv.replace(/ª/g, "மி");
uv = uv.replace(/Á/g, "மீ");
uv = uv.replace(/Ø/g, "மு");
uv = uv.replace(/ê/g, "மூ");
uv = uv.replace(/ùU/g, "மெ");
uv = uv.replace(/úU/g, "மே");
uv = uv.replace(/ûU/g, "மை");
uv = uv.replace(/m/g, "ம்");
uv = uv.replace(/U/g, "ம");////////4

uv = uv.replace(/ùV\[/g, "யௌ");
uv = uv.replace(/úVô/g, "யோ");
uv = uv.replace(/ùVô/g, "யொ");
uv = uv.replace(/Vô/g, "யா");
uv = uv.replace(/«/g, "யி");
uv = uv.replace(/Â/g, "யீ");
uv = uv.replace(/Ù/g, "யு");
uv = uv.replace(/ë/g, "யூ");
uv = uv.replace(/ùV/g, "யெ");
uv = uv.replace(/úV/g, "யே");
uv = uv.replace(/ûV/g, "யை");
uv = uv.replace(/n/g, "ய்");
uv = uv.replace(/V/g, "ய");////////4


uv = uv.replace(/ùW\[/g, "ரௌ");
uv = uv.replace(/úWô/g, "ரோ");
uv = uv.replace(/ùWô/g, "ரொ");
uv = uv.replace(/Wô/g, "ரா");
uv = uv.replace(/¬/g, "ரி");
uv = uv.replace(/Ã/g, "ரீ");
uv = uv.replace(/Ú/g, "ரு");
uv = uv.replace(/ì/g, "ரூ");
uv = uv.replace(/ùW/g, "ரெ");
uv = uv.replace(/úW/g, "ரே");
uv = uv.replace(/ûW/g, "ரை");
uv = uv.replace(/o/g, "ர்");
uv = uv.replace(/W/g, "ர");////////4


uv = uv.replace(/ùX\[/g, "லௌ");
uv = uv.replace(/úXô/g, "லோ");
uv = uv.replace(/ùXô/g, "லொ");
uv = uv.replace(/Xô/g, "லா");
uv = uv.replace(/#/g, "லி");
uv = uv.replace(/\-/g, "லி");
uv = uv.replace(/Ä/g, "லீ");
uv = uv.replace(/Û/g, "லு");
uv = uv.replace(/í/g, "லூ");
uv = uv.replace(/ùX/g, "லெ");
uv = uv.replace(/úX/g, "லே");
uv = uv.replace(/ûX/g, "லை");
uv = uv.replace(/p/g, "ல்");
uv = uv.replace(/X/g, "ல");////////4


uv = uv.replace(/ù\[\[/g, "ளௌ");
uv = uv.replace(/ú\[ô/g, "ளோ");
uv = uv.replace(/ù\[ô/g, "ளொ");
uv = uv.replace(/°/g, "ளி");
uv = uv.replace(/Ç/g, "ளீ");
uv = uv.replace(/Þ/g, "ளு");
uv = uv.replace(/ð/g, "ளூ");
uv = uv.replace(/ù\[/g, "ளெ");
uv = uv.replace(/ú\[/g, "ளே");
uv = uv.replace(/s/g, "ள்");
uv = uv.replace(/\[/g, "ள");
uv = uv.replace(/ûள/g, "ளை");
uv = uv.replace(/ளô/g, "ளா");
////////4

uv = uv.replace(/ùY\[/g, "வௌ");
uv = uv.replace(/úYô/g, "வோ");
uv = uv.replace(/ùYô/g, "வொ");
uv = uv.replace(/Yô/g, "வா");
uv = uv.replace(/®/g, "வி");
uv = uv.replace(/Å/g, "வீ");
uv = uv.replace(/Ü/g, "வு");
uv = uv.replace(/î/g, "வூ");
uv = uv.replace(/ùY/g, "வெ");
uv = uv.replace(/úY/g, "வே");
uv = uv.replace(/ûY/g, "வை");
uv = uv.replace(/q/g, "வ்");
uv = uv.replace(/Y/g, "வ");////////4

uv = uv.replace(/ùZ\[/g, "ழௌ");
uv = uv.replace(/úZô/g, "ழோ");
uv = uv.replace(/ùZô/g, "ழொ");
uv = uv.replace(/Zô/g, "ழா");
uv = uv.replace(/¯/g, "ழி");
uv = uv.replace(/Æ/g, "ழீ");
uv = uv.replace(/Ý/g, "ழு");
uv = uv.replace(/ï/g, "ழூ");
uv = uv.replace(/ùZ/g, "ழெ");
uv = uv.replace(/úZ/g, "ழே");
uv = uv.replace(/ûZ/g, "ழை");
uv = uv.replace(/r/g, "ழ்");
uv = uv.replace(/Z/g, "ழ");////////4

uv = uv.replace(/ù\\\[/g, "றௌ");
uv = uv.replace(/ú\\ô/g, "றோ");
uv = uv.replace(/ù\\ô/g, "றொ");
uv = uv.replace(/\\ô/g, "றா");
uv = uv.replace(/±/g, "றி");
uv = uv.replace(/È/g, "றீ");
uv = uv.replace(/ß/g, "று");
uv = uv.replace(/ñ/g, "றூ");
uv = uv.replace(/ù\\/g, "றெ");
uv = uv.replace(/ú\\/g, "றே");
uv = uv.replace(/û\\/g, "றை");
uv = uv.replace(/t/g, "ற்");
uv = uv.replace(/\\/g, "ற");////////4

uv = uv.replace(/\^/g, "ஸ");
uv = uv.replace(/ெஸள/g, "ஸௌ");
uv = uv.replace(/ú^ô/g, "ஸோ");
uv = uv.replace(/ù^ô/g, "ஸொ");
uv = uv.replace(/ஸô/g, "ஸா");
uv = uv.replace(/³/g, "ஸி");
uv = uv.replace(/Ê/g, "ஸீ");
uv = uv.replace(/ஸý/g, "ஸு");
uv = uv.replace(/^þ/g, "ஸூ");
uv = uv.replace(/ù^/g, "ஸெ");
uv = uv.replace(/ú^/g, "ஸே");
uv = uv.replace(/ûஸ/g, "ஸை");
uv = uv.replace(/v/g, "ஸ்");////////4

uv = uv.replace(/@/g, "அ");
uv = uv.replace(/A/g, "ஆ");
uv = uv.replace(/B/g, "இ");
uv = uv.replace(/C/g, "ஈ");
uv = uv.replace(/D/g, "உ");
uv = uv.replace(/E/g, "ஊ");
uv = uv.replace(/F/g, "எ");
uv = uv.replace(/G/g, "ஏ");
uv = uv.replace(/H/g, "ஐ");
uv = uv.replace(/I/g, "ஒ")
uv = uv.replace(/J/g, "ஓ");
uv = uv.replace(/K/g, "ஃ");
uv = uv.replace(/I\[/g, "ஔ");




uv = uv.replace(/c/g, "ஸ்ரீ");




uv = uv.replace(/a/g, "ஹ");
uv = uv.replace(/ùஹ\[/g, "ஹௌ");
uv = uv.replace(/úஹô/g, "ஹோ");
uv = uv.replace(/ùஹô/g, "ஹொ");
uv = uv.replace(/ஹô/g, "ஹா");
uv = uv.replace(/¶/g, "ஹி");
uv = uv.replace(/Í/g, "ஹீ");
uv = uv.replace(/ஹý/g, "ஹு");
uv = uv.replace(/ஹþ/g, "ஹூ");
uv = uv.replace(/ùஹ/g, "ஹெ");
uv = uv.replace(/úஹ/g, "ஹே");
uv = uv.replace(/ûஹ/g, "ஹை");
uv = uv.replace(/y/g, "ஹ்");////////4


uv = uv.replace(/`/g, "ஷ");
uv = uv.replace(/ˆ/g, "ஷ");
uv = uv.replace(/ùஷ/g, "ஷெ");
uv = uv.replace(/ùஷ\[/g, "ஷௌ");
uv = uv.replace(/úஷô/g, "ஷோ");
uv = uv.replace(/ùஷô/g, "ஷொ");
uv = uv.replace(/ஷô/g, "ஷா");
uv = uv.replace(/µ/g, "ஷி");
uv = uv.replace(/Ì/g, "ஷீ");
uv = uv.replace(/ஷý/g, "ஷு");
uv = uv.replace(/ஷþ/g, "ஷூ");
uv = uv.replace(/úஷ/g, "ஷே");
uv = uv.replace(/ûஷ/g, "ஷை");
uv = uv.replace(/x/g, "ஷ்");////////4


uv = uv.replace(/\‘/g, "'");
uv = uv.replace(/\’/g, "'");
uv = uv.replace(/\“/g, "'");
uv = uv.replace(/\”/g, "'");
uv = uv.replace(/\"/g, "'");
uv = uv.replace(/…/g, "...");

document.tamil_unicode_utf8.destination.value=uv;
} 
   
function convert_murasoli_2_unicode() {   

uv = document.tamil_unicode_utf8.source.value;
 
uv = uv.replace(/b#s/g, "ஜௌ");
uv = uv.replace(/n#h/g, "ஜோ");
uv = uv.replace(/b#h/g, "ஜொ");
uv = uv.replace(/#h/g, "ஜா");
uv = uv.replace(/í/g, "ஜி");
uv = uv.replace(/É/g, "ஜீ");
uv = uv.replace(/#&/g, "ஜு");
uv = uv.replace(/#]/g, "ஜூ");
uv = uv.replace(/b#/g, "ஜெ");
uv = uv.replace(/n#/g, "ஜே");
uv = uv.replace(/i#/g, "ஜை");
uv = uv.replace(/{/g, "ஜ்");
uv = uv.replace(/#/g, "ஜ");

uv = uv.replace(/bfs/g, "கௌ");
uv = uv.replace(/nfh/g, "கோ");
uv = uv.replace(/bfh/g, "கொ");
uv = uv.replace(/fh/g, "கா");
uv = uv.replace(/»/g, "கி");
uv = uv.replace(/Ñ/g, "கீ");
uv = uv.replace(/F/g, "கு");
uv = uv.replace(/T/g, "கூ");
uv = uv.replace(/bf/g, "கெ");
uv = uv.replace(/nf/g, "கே");
uv = uv.replace(/if/g, "கை");
uv = uv.replace(/¡/g, "க்");
uv = uv.replace(/f/g, "க");

uv = uv.replace(/b‡s/g, "ஙௌ");
uv = uv.replace(/n‡h/g, "ஙோ");
uv = uv.replace(/b‡h/g, "ஙொ");
uv = uv.replace(/‡h/g, "ஙா");
uv = uv.replace(/à/g, "ஙி");
uv = uv.replace(/†/g, "ஙீ");
uv = uv.replace(/¼/g, "ஙு");
uv = uv.replace(/½/g, "ஙூ");
uv = uv.replace(/b‡/g, "ஙெ");
uv = uv.replace(/n‡/g, "ஙே");
uv = uv.replace(/i‡/g, "ஙை");
uv = uv.replace(/§/g, "ங்");
uv = uv.replace(/‡/g, "ங");


uv = uv.replace(/brs/g, "சௌ");
uv = uv.replace(/nrh/g, "சோ");
uv = uv.replace(/brh/g, "சொ");
uv = uv.replace(/rh/g, "சா");
uv = uv.replace(/Á/g, "சி");
uv = uv.replace(/Ó/g, "சீ");
uv = uv.replace(/R/g, "சு");
uv = uv.replace(/N/g, "சூ");
uv = uv.replace(/br/g, "செ");
uv = uv.replace(/nr/g, "சே");
uv = uv.replace(/ir/g, "சை");
uv = uv.replace(/¢/g, "ச்");
uv = uv.replace(/r/g, "ச");
uv = uv.replace(/bPs/g, "ஞௌ");
uv = uv.replace(/nPh/g, "ஞோ");
uv = uv.replace(/bPh/g, "ஞொ");
uv = uv.replace(/Ph/g, "ஞா");
uv = uv.replace(/á/g, "ஞி");
uv = uv.replace(/Ø/g, "ஞீ");
uv = uv.replace(/\|/g, "ஞு");
uv = uv.replace(/ú/g, "ஞூ");
uv = uv.replace(/bP/g, "ஞெ");
uv = uv.replace(/nP/g, "ஞே");
uv = uv.replace(/iP/g, "ஞை");
uv = uv.replace(/Š/g, "ஞ்");
uv = uv.replace(/P/g, "ஞ");


uv = uv.replace(/bls/g, "டௌ");
uv = uv.replace(/nlh/g, "டோ");
uv = uv.replace(/blh/g, "டொ");
uv = uv.replace(/lh/g, "டா");
uv = uv.replace(/o/g, "டி");
uv = uv.replace(/O/g, "டீ");
uv = uv.replace(/L/g, "டு");
uv = uv.replace(/\^/g, "டூ");
uv = uv.replace(/bl/g, "டெ");
uv = uv.replace(/nl/g, "டே");
uv = uv.replace(/il/g, "டை");
uv = uv.replace(/£/g, "ட்");
uv = uv.replace(/l/g, "ட");




uv = uv.replace(/bzs/g, "ணௌ");
uv = uv.replace(/nzh/g, "ணோ");
uv = uv.replace(/bzh/g, "ணொ");
uv = uv.replace(/zh/g, "ணா");
uv = uv.replace(/â/g, "ணி");
uv = uv.replace(/Ù/g, "ணீ");
uv = uv.replace(/Q/g, "ணு");
uv = uv.replace(/û/g, "ணூ");
uv = uv.replace(/bz/g, "ணெ");
uv = uv.replace(/nz/g, "ணே");
uv = uv.replace(/iz/g, "ணை");
uv = uv.replace(/©/g, "ண்");
uv = uv.replace(/z/g, "ண");



uv = uv.replace(/bjs/g, "தௌ");
uv = uv.replace(/njh/g, "தோ");
uv = uv.replace(/bjh/g, "தொ");
uv = uv.replace(/jh/g, "தா");
uv = uv.replace(/Â/g, "தி");
uv = uv.replace(/Ô/g, "தீ");
uv = uv.replace(/J/g, "து");
uv = uv.replace(/ö/g, "தூ");
uv = uv.replace(/bj/g, "தெ");
uv = uv.replace(/nj/g, "தே");
uv = uv.replace(/ij/g, "தை");
uv = uv.replace(/¤/g, "த்");
uv = uv.replace(/j/g, "த");




uv = uv.replace(/bes/g, "நௌ");
uv = uv.replace(/neh/g, "நோ");
uv = uv.replace(/beh/g, "நொ");
uv = uv.replace(/eh/g, "நா");
uv = uv.replace(/ã/g, "நி");
uv = uv.replace(/Ú/g, "நீ");
uv = uv.replace(/E/g, "நு");
uv = uv.replace(/ü/g, "நூ");
uv = uv.replace(/be/g, "நெ");
uv = uv.replace(/ne/g, "நே");
uv = uv.replace(/ie/g, "நை");
uv = uv.replace(/ª/g, "ந்");
uv = uv.replace(/e/g, "ந");



uv = uv.replace(/bds/g, "னௌ");
uv = uv.replace(/ndh/g, "னோ");
uv = uv.replace(/bdh/g, "னொ");
uv = uv.replace(/dh/g, "னா");
uv = uv.replace(/å/g, "னி");
uv = uv.replace(/Ü/g, "னீ");
uv = uv.replace(/D/g, "னு");
uv = uv.replace(/}/g, "னூ");
uv = uv.replace(/bd/g, "னெ");
uv = uv.replace(/nd/g, "னே");
uv = uv.replace(/id/g, "னை");
uv = uv.replace(/‹/g, "ன்");
uv = uv.replace(/d/g, "ன");



uv = uv.replace(/bgs/g, "பௌ");
uv = uv.replace(/ngh/g, "போ");
uv = uv.replace(/bgh/g, "பொ");
uv = uv.replace(/gh/g, "பா");
uv = uv.replace(/Ã/g, "பி");
uv = uv.replace(/Õ/g, "பீ");
uv = uv.replace(/ò/g, "பு");
uv = uv.replace(/ó/g, "பூ");
uv = uv.replace(/bg/g, "பெ");
uv = uv.replace(/ng/g, "பே");
uv = uv.replace(/ig/g, "பை");
uv = uv.replace(/¥/g, "ப்");
uv = uv.replace(/g/g, "ப");



uv = uv.replace(/bks/g, "மௌ");
uv = uv.replace(/nkh/g, "மோ");
uv = uv.replace(/bkh/g, "மொ");
uv = uv.replace(/kh/g, "மா");
uv = uv.replace(/ä/g, "மி");
uv = uv.replace(/Û/g, "மீ");
uv = uv.replace(/K/g, "மு");
uv = uv.replace(/_/g, "மூ");
uv = uv.replace(/bk/g, "மெ");
uv = uv.replace(/nk/g, "மே");
uv = uv.replace(/ik/g, "மை");
uv = uv.replace(/«/g, "ம்");
uv = uv.replace(/k/g, "ம");



uv = uv.replace(/bas/g, "யௌ");
uv = uv.replace(/nah/g, "யோ");
uv = uv.replace(/bah/g, "யொ");
uv = uv.replace(/ah/g, "யா");
uv = uv.replace(/æ/g, "யி");
uv = uv.replace(/p/g, "யீ");
uv = uv.replace(/Í/g, "யு");
uv = uv.replace(/ô/g, "யூ");
uv = uv.replace(/ba/g, "யெ");
uv = uv.replace(/na/g, "யே");
uv = uv.replace(/ia/g, "யை");
uv = uv.replace(/Œ/g, "ய்");
uv = uv.replace(/a/g, "ய");

uv = uv.replace(/bus/g, "ரௌ");
uv = uv.replace(/nuh/g, "ரோ");
uv = uv.replace(/buh/g, "ரொ");
uv = uv.replace(/uh/g, "ரா");
uv = uv.replace(/ç/g, "ரி");
uv = uv.replace(/ß/g, "ரீ");
uv = uv.replace(/U/g, "ரு");
uv = uv.replace(/%/g, "ரூ");
uv = uv.replace(/bu/g, "ரெ");
uv = uv.replace(/nu/g, "ரே");
uv = uv.replace(/iu/g, "ரை");
uv = uv.replace(/®/g, "ர்");
uv = uv.replace(/u/g, "ர");



uv = uv.replace(/bys/g, "லௌ");
uv = uv.replace(/nyh/g, "லோ");
uv = uv.replace(/byh/g, "லொ");
uv = uv.replace(/yh/g, "லா");
uv = uv.replace(/è/g, "லி");
uv = uv.replace(/Ä/g, "லீ");
uv = uv.replace(/Y/g, "லு");
uv = uv.replace(/ÿ/g, "லூ");
uv = uv.replace(/by/g, "லெ");
uv = uv.replace(/ny/g, "லே");
uv = uv.replace(/iy/g, "லை");
uv = uv.replace(/š/g, "ல்");
uv = uv.replace(/y/g, "ல");



uv = uv.replace(/bss/g, "ளௌ");
uv = uv.replace(/nsh/g, "ளோ");
uv = uv.replace(/bsh/g, "ளொ");
uv = uv.replace(/sh/g, "ளா");
uv = uv.replace(/ë/g, "ளி");
uv = uv.replace(/Ç/g, "ளீ");
uv = uv.replace(/S/g, "ளு");
uv = uv.replace(/q/g, "ளூ");
uv = uv.replace(/bs/g, "ளெ");
uv = uv.replace(/ns/g, "ளே");
uv = uv.replace(/is/g, "ளை");
uv = uv.replace(/Ÿ/g, "ள்");
uv = uv.replace(/s/g, "ள");


uv = uv.replace(/bts/g, "வௌ");
uv = uv.replace(/nth/g, "வோ");
uv = uv.replace(/bth/g, "வொ");
uv = uv.replace(/th/g, "வா");
uv = uv.replace(/é/g, "வி");
uv = uv.replace(/Å/g, "வீ");
uv = uv.replace(/Î/g, "வு");
uv = uv.replace(/ñ/g, "வூ");
uv = uv.replace(/bt/g, "வெ");
uv = uv.replace(/nt/g, "வே");
uv = uv.replace(/it/g, "வை");
uv = uv.replace(/›/g, "வ்");
uv = uv.replace(/t/g, "வ");



uv = uv.replace(/bHs/g, "ழௌ");
uv = uv.replace(/nHh/g, "ழோ");
uv = uv.replace(/bHh/g, "ழொ");
uv = uv.replace(/Hh/g, "ழா");
uv = uv.replace(/ê/g, "ழி");
uv = uv.replace(/Æ/g, "ழீ");
uv = uv.replace(/G/g, "ழு");
uv = uv.replace(/>/g, "ழூ");
uv = uv.replace(/bH/g, "ழெ");
uv = uv.replace(/nH/g, "ழே");
uv = uv.replace(/iH/g, "ழை");
uv = uv.replace(/œ/g, "ழ்");
uv = uv.replace(/H/g, "ழ");


uv = uv.replace(/bws/g, "றௌ");
uv = uv.replace(/nwh/g, "றோ");
uv = uv.replace(/bwh/g, "றொ");
uv = uv.replace(/wh/g, "றா");
uv = uv.replace(/¿/g, "றி");
uv = uv.replace(/Ö/g, "றீ");
uv = uv.replace(/W/g, "று");
uv = uv.replace(/ù/g, "றூ");
uv = uv.replace(/bw/g, "றெ");
uv = uv.replace(/nw/g, "றே");
uv = uv.replace(/iw/g, "றை");
uv = uv.replace(/‰/g, "ற்");
uv = uv.replace(/w/g, "ற");




uv = uv.replace(/bAs/g, "ஹௌ");
uv = uv.replace(/nAh/g, "ஹோ");
uv = uv.replace(/bAh/g, "ஹொ");
uv = uv.replace(/Ah/g, "ஹா");
uv = uv.replace(/ï/g, "ஹி");
uv = uv.replace(/Ë/g, "ஹீ");
uv = uv.replace(/A&/g, "ஹு");
uv = uv.replace(/A\]/g, "ஹூ");
uv = uv.replace(/bA/g, "ஹெ");
uv = uv.replace(/nA/g, "ஹே");
uv = uv.replace(/iA/g, "ஹை");
uv = uv.replace(/À/g, "ஹ்");
uv = uv.replace(/A/g, "ஹ");

uv = uv.replace(/bõs/g, "ஷௌ");
uv = uv.replace(/nõh/g, "ஷோ");
uv = uv.replace(/bõh/g, "ஷொ");
uv = uv.replace(/õh/g, "ஷா");
uv = uv.replace(/î/g, "ஷி");
uv = uv.replace(/Ê/g, "ஷீ");
uv = uv.replace(/õ&/g, "ஷு");
uv = uv.replace(/õ]/g, "ஷூ");
uv = uv.replace(/bõ/g, "ஷெ");
uv = uv.replace(/nõ/g, "ஷே");
uv = uv.replace(/iõ/g, "ஷை");
uv = uv.replace(/Z/g, "ஷ்");
uv = uv.replace(/õ/g, "ஷ");

uv = uv.replace(/b\[s/g, "ஸௌ");
uv = uv.replace(/n\[h/g, "ஸோ");
uv = uv.replace(/b\[h/g, "ஸொ");
uv = uv.replace(/\[h/g, "ஸா");
uv = uv.replace(/ì/g, "ஸி");
uv = uv.replace(/È/g, "ஸீ");
uv = uv.replace(/\[&/g, "ஸு");
uv = uv.replace(/\[\]/g, "ஸூ");
uv = uv.replace(/b\[/g, "ஸெ");
uv = uv.replace(/n\[/g, "ஸே");
uv = uv.replace(/i\[/g, "ஸை");
uv = uv.replace(/°/g, "ஸ்");
uv = uv.replace(/\[/g, "ஸ");

uv = uv.replace(/m/g, "அ");
uv = uv.replace(/M/g, "ஆ");
uv = uv.replace(/Ï/g, "இ");
uv = uv.replace(/</g, "ஈ");
uv = uv.replace(/c/g, "உ");
uv = uv.replace(/C/g, "ஊ");
uv = uv.replace(/v/g, "எ");
uv = uv.replace(/V/g, "ஏ");
uv = uv.replace(/I/g, "ஐ");
uv = uv.replace(/x/g, "ஒ")
uv = uv.replace(/X/g, "ஓ");
uv = uv.replace(/xs/g, "ஔ");



uv = uv.replace(/~/g, "ஃ");

uv = uv.replace(/\$/g, "ஸ்ரீ");

uv = uv.replace(/˜/g, "?");

uv = uv.replace(/B/g, "க்ஷ");
uv = uv.replace(/Bh/g, "க்ஷா");
uv = uv.replace(/iB/g, "க்ஷை");
uv = uv.replace(/ø/g, "க்ஷி");
uv = uv.replace(/Ì/g, "க்ஷீ");
uv = uv.replace(/B&/g, "க்ஷு");
uv = uv.replace(/B\]/g, "க்ஷூ");
uv = uv.replace(/bB/g, "க்ஷெ");
uv = uv.replace(/nB/g, "க்ஷே");
uv = uv.replace(/bBh/g, "க்ஷொ");
uv = uv.replace(/nBh/g, "க்ஷோ");
uv = uv.replace(/bBs/g, "க்ஷௌ");
uv = uv.replace(/º/g, "க்ஷ்");


document.tamil_unicode_utf8.destination.value=uv;
}   
function convert_mylai_2_unicode() { 
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/X/g, "க்ஷ");
uv = uv.replace(/Xa/g, "க்ஷா");
uv = uv.replace(/AX/g, "க்ஷை");
uv = uv.replace(/Xi/g, "க்ஷி");
uv = uv.replace(/XI  /g, "க்ஷீ");
uv = uv.replace(/XH/g, "க்ஷு");
uv = uv.replace(/XJ/g, "க்ஷூ");
uv = uv.replace(/eX/g, "க்ஷெ");
uv = uv.replace(/EX/g, "க்ஷே");
uv = uv.replace(/eXa/g, "க்ஷொ");
uv = uv.replace(/EXa/g, "க்ஷோ");
uv = uv.replace(/eXq/g, "க்ஷௌ");
uv = uv.replace(/Xf/g, "க்ஷ்");
uv = uv.replace(/ai/g, "ரி");
uv = uv.replace(/af/g, "ர்");
uv = uv.replace(/ejq/g, "ஜௌ");
uv = uv.replace(/Eja/g, "ஜோ");
uv = uv.replace(/eja/g, "ஜொ");
uv = uv.replace(/ja/g, "ஜா");
uv = uv.replace(/ji/g, "ஜி");
uv = uv.replace(/jI/g, "ஜீ");
uv = uv.replace(/jH/g, "ஜு");
uv = uv.replace(/jJ/g, "ஜூ");
uv = uv.replace(/ej/g, "ஜெ");
uv = uv.replace(/Ej/g, "ஜே");
uv = uv.replace(/Aj/g, "ஜை");
uv = uv.replace(/jf/g, "ஜ்");
uv = uv.replace(/j/g, "ஜ");///////////////////////////////////3
uv = uv.replace(/ekq/g, "கௌ");
uv = uv.replace(/Eka/g, "கோ");
uv = uv.replace(/eka/g, "கொ");
uv = uv.replace(/ka/g, "கா");
uv = uv.replace(/ki/g, "கி");
uv = uv.replace(/kI/g, "கீ");
uv = uv.replace(/K/g, "கு");
uv = uv.replace(/P/g, "கூ");
uv = uv.replace(/ek/g, "கெ");
uv = uv.replace(/Ek/g, "கே");
uv = uv.replace(/Ak/g, "கை");
uv = uv.replace(/kf/g, "க்");
uv = uv.replace(/k/g, "க");///////////////////////////////////3
uv = uv.replace(/egq/g, "ஙௌ");
uv = uv.replace(/Ega/g, "ஙோ");
uv = uv.replace(/ega/g, "ஙொ");
uv = uv.replace(/ga/g, "ஙா");
uv = uv.replace(/gi/g, "ஙி");
uv = uv.replace(/gI/g, "ஙீ");

uv = uv.replace(/eg/g, "ஙெ");
uv = uv.replace(/Eg/g, "ஙே");
uv = uv.replace(/Ag/g, "ஙை");
uv = uv.replace(/gf/g, "ங்");
uv = uv.replace(/g/g, "ங");///////////////////////////////////3
uv = uv.replace(/ecq/g, "சௌ");
uv = uv.replace(/Eca/g, "சோ");
uv = uv.replace(/eca/g, "சொ");
uv = uv.replace(/ca/g, "சா");
uv = uv.replace(/ci/g, "சி");
uv = uv.replace(/cI/g, "சீ");
uv = uv.replace(/V/g, "சூ");
uv = uv.replace(/C/g, "சு");

uv = uv.replace(/ec/g, "செ");
uv = uv.replace(/Ec/g, "சே");
uv = uv.replace(/Ac/g, "சை");
uv = uv.replace(/cf/g, "ச்");
uv = uv.replace(/c/g, "ச");///////////////////////////////////3


uv = uv.replace(/ewq/g, "ஞௌ");
uv = uv.replace(/Ewa/g, "ஞோ");
uv = uv.replace(/ewa/g, "ஞொ");
uv = uv.replace(/wa/g, "ஞா");
uv = uv.replace(/wi/g, "ஞி");
uv = uv.replace(/wI/g, "ஞீ");
uv = uv.replace(/W\\/g, "ஞூ");
uv = uv.replace(/W/g, "ஞு");

uv = uv.replace(/ew/g, "ஞெ");
uv = uv.replace(/Ew/g, "ஞே");
uv = uv.replace(/Aw/g, "ஞை");
uv = uv.replace(/wf/g, "ஞ்");
uv = uv.replace(/w/g, "ஞ");///////////////////////////////////3
uv = uv.replace(/edq/g, "டௌ");
uv = uv.replace(/Eda/g, "டோ");
uv = uv.replace(/eda/g, "டொ");
uv = uv.replace(/da/g, "டா");
uv = uv.replace(/F/g, "டி");
uv = uv.replace(/G/g, "டீ");
uv = uv.replace(/D/g, "டு");
uv = uv.replace(/ed/g, "டெ");
uv = uv.replace(/Ed/g, "டே");
uv = uv.replace(/Ad/g, "டை");
uv = uv.replace(/df/g, "ட்");
uv = uv.replace(/d/g, "ட");///////////////////////////////////3

uv = uv.replace(/e]q/g, "ணௌ");
uv = uv.replace(/E]a/g, "ணோ");
uv = uv.replace(/e]a/g, "ணொ");
uv = uv.replace(/]a/g, "ணா");
uv = uv.replace(/]i/g, "ணி");
uv = uv.replace(/]I/g, "ணீ");
uv = uv.replace(/}\\/g, "ணூ");
uv = uv.replace(/}/g, "ணு");

uv = uv.replace(/e]/g, "ணெ");
uv = uv.replace(/E]/g, "ணே");
uv = uv.replace(/A]/g, "ணை");
uv = uv.replace(/]f/g, "ண்");
uv = uv.replace(/]/g, "ண");///////////////////////////////////3
uv = uv.replace(/etq/g, "தௌ");
uv = uv.replace(/Eta/g, "தோ");
uv = uv.replace(/eta/g, "தொ");
uv = uv.replace(/ta/g, "தா");
uv = uv.replace(/ti/g, "தி");
uv = uv.replace(/tI/g, "தீ");
uv = uv.replace(/T\\/g, "தூ");
uv = uv.replace(/T/g, "து");

uv = uv.replace(/et/g, "தெ");
uv = uv.replace(/Et/g, "தே");
uv = uv.replace(/At/g, "தை");
uv = uv.replace(/tf/g, "த்");
uv = uv.replace(/t/g, "த");///////////////////////////////////3



uv = uv.replace(/enq/g, "நௌ");
uv = uv.replace(/Ena/g, "நோ");
uv = uv.replace(/ena/g, "நொ");
uv = uv.replace(/na/g, "நா");
uv = uv.replace(/ni/g, "நி");
uv = uv.replace(/nI/g, "நீ");
uv = uv.replace(/N\\/g, "நூ");
uv = uv.replace(/N/g, "நு");

uv = uv.replace(/en/g, "நெ");
uv = uv.replace(/En/g, "நே");
uv = uv.replace(/An/g, "நை");
uv = uv.replace(/nf/g, "ந்");
uv = uv.replace(/n/g, "ந");///////////////////////////////////3

uv = uv.replace(/e\[q/g, "னௌ");
uv = uv.replace(/E\[a/g, "னோ");
uv = uv.replace(/e\[a/g, "னொ");

uv = uv.replace(/\[a/g, "னா");
uv = uv.replace(/\[i/g, "னி");
uv = uv.replace(/\[I/g, "னீ");

uv = uv.replace(/\{\\/g, "னூ");
uv = uv.replace(/\{/g, "னு");

uv = uv.replace(/e\[/g, "னெ");
uv = uv.replace(/E\[/g, "னே");
uv = uv.replace(/A\[/g, "னை");
uv = uv.replace(/\[f/g, "ன்");
uv = uv.replace(/\[/g, "ன");///////////////////////////////////3


uv = uv.replace(/epq/g, "பௌ");
uv = uv.replace(/Epa/g, "போ");
uv = uv.replace(/epa/g, "பொ");
uv = uv.replace(/pa/g, "பா");
uv = uv.replace(/pi/g, "பி");
uv = uv.replace(/pI/g, "பீ");
uv = uv.replace(/p</g, "பு");
uv = uv.replace(/p>/g, "பூ");
uv = uv.replace(/ep/g, "பெ");
uv = uv.replace(/Ep/g, "பே");
uv = uv.replace(/Ap/g, "பை");
uv = uv.replace(/pf/g, "ப்");
uv = uv.replace(/p/g, "ப");///////////////////////////////////3

uv = uv.replace(/emq/g, "மௌ");
uv = uv.replace(/Ema/g, "மோ");
uv = uv.replace(/ema/g, "மொ");
uv = uv.replace(/ma/g, "மா");
uv = uv.replace(/mi/g, "மி");
uv = uv.replace(/mI/g, "மீ");
uv = uv.replace(/YM/g, "மூ");
uv = uv.replace(/M/g, "மு");

uv = uv.replace(/em/g, "மெ");
uv = uv.replace(/Em/g, "மே");
uv = uv.replace(/Am/g, "மை");
uv = uv.replace(/mf/g, "ம்");
uv = uv.replace(/m/g, "ம");///////////////////////////////////3

uv = uv.replace(/eyq/g, "யௌ");
uv = uv.replace(/Eya/g, "யோ");
uv = uv.replace(/eya/g, "யொ");
uv = uv.replace(/ya/g, "யா");
uv = uv.replace(/yi/g, "யி");
uv = uv.replace(/yI/g, "யீ");
uv = uv.replace(/y</g, "யு");
uv = uv.replace(/y>/g, "யூ");
uv = uv.replace(/ey/g, "யெ");
uv = uv.replace(/Ey/g, "யே");
uv = uv.replace(/Ay/g, "யை");
uv = uv.replace(/yf/g, "ய்");
uv = uv.replace(/y/g, "ய");///////////////////////////////////3



uv = uv.replace(/erq/g, "ரௌ");
uv = uv.replace(/Era/g, "ரோ");
uv = uv.replace(/era/g, "ரொ");
uv = uv.replace(/ra/g, "ரா");
uv = uv.replace(/ri/g, "ரி");
uv = uv.replace(/rI/g, "ரீ");
uv = uv.replace(/YR/g, "ரூ");
uv = uv.replace(/R/g, "ரு");

uv = uv.replace(/er/g, "ரெ");
uv = uv.replace(/Er/g, "ரே");
uv = uv.replace(/Ar/g, "ரை");
uv = uv.replace(/rf/g, "ர்");

uv = uv.replace(/r/g, "ர");///////////////////////////////////3


uv = uv.replace(/elq/g, "லௌ");
uv = uv.replace(/Ela/g, "லோ");
uv = uv.replace(/ela/g, "லொ");
uv = uv.replace(/la/g, "லா");
uv = uv.replace(/li/g, "லி");
uv = uv.replace(/lI/g, "லீ");
uv = uv.replace(/L>/g, "லூ");
uv = uv.replace(/L/g, "லு");

uv = uv.replace(/el/g, "லெ");
uv = uv.replace(/El/g, "லே");
uv = uv.replace(/Al/g, "லை");
uv = uv.replace(/lf/g, "ல்");
uv = uv.replace(/l/g, "ல");///////////////////////////////////3


uv = uv.replace(/eqq/g, "ளௌ");
uv = uv.replace(/Eqa/g, "ளோ");
uv = uv.replace(/eqa/g, "ளொ");
uv = uv.replace(/qa/g, "ளா");
uv = uv.replace(/F/g, "ளி");
uv = uv.replace(/G/g, "ளீ");
uv = uv.replace(/YQ/g, "ளூ");
uv = uv.replace(/Q/g, "ளு");

uv = uv.replace(/eq/g, "ளெ");
uv = uv.replace(/Eq/g, "ளே");
uv = uv.replace(/Aq/g, "ளை");
uv = uv.replace(/qf/g, "ள்");
uv = uv.replace(/q/g, "ள");///////////////////////////////////3



uv = uv.replace(/evq/g, "வௌ");
uv = uv.replace(/Eva/g, "வோ");
uv = uv.replace(/eva/g, "வொ");
uv = uv.replace(/va/g, "வா");
uv = uv.replace(/vi/g, "வி");
uv = uv.replace(/vI/g, "வீ");
uv = uv.replace(/v</g, "வு");
uv = uv.replace(/v>/g, "வூ");
uv = uv.replace(/ev/g, "வெ");
uv = uv.replace(/Ev/g, "வே");
uv = uv.replace(/Av/g, "வை");
uv = uv.replace(/vf/g, "வ்");
uv = uv.replace(/v/g, "வ");///////////////////////////////////3


uv = uv.replace(/ezq/g, "ழௌ");
uv = uv.replace(/Eza/g, "ழோ");
uv = uv.replace(/eza/g, "ழொ");
uv = uv.replace(/za/g, "ழா");
uv = uv.replace(/zi/g, "ழி");
uv = uv.replace(/zI/g, "ழீ");
uv = uv.replace(/YZ/g, "ழூ");
uv = uv.replace(/Z/g, "ழு");

uv = uv.replace(/ez/g, "ழெ");
uv = uv.replace(/Ez/g, "ழே");
uv = uv.replace(/Az/g, "ழை");
uv = uv.replace(/zf/g, "ழ்");
uv = uv.replace(/z/g, "ழ");///////////////////////////////////3
uv = uv.replace(/ebq/g, "றௌ");
uv = uv.replace(/Eba/g, "றோ");
uv = uv.replace(/eba/g, "றொ");
uv = uv.replace(/ba/g, "றா");
uv = uv.replace(/bi/g, "றி");
uv = uv.replace(/bI/g, "றீ");
uv = uv.replace(/b>/g, "றூ");
uv = uv.replace(/B/g, "று");

uv = uv.replace(/eb/g, "றெ");
uv = uv.replace(/Eb/g, "றே");
uv = uv.replace(/Ab/g, "றை");
uv = uv.replace(/bf/g, "ற்");
uv = uv.replace(/b/g, "ற");///////////////////////////////////3








uv = uv.replace(/ehq/g, "ஹௌ");
uv = uv.replace(/Eha/g, "ஹோ");
uv = uv.replace(/eha/g, "ஹொ");
uv = uv.replace(/ha/g, "ஹா");
uv = uv.replace(/hi/g, "ஹி");
uv = uv.replace(/hI/g, "ஹீ");
uv = uv.replace(/h/g, "ஹு");
uv = uv.replace(/h>/g, "ஹூ");
uv = uv.replace(/eh/g, "ஹெ");
uv = uv.replace(/Eh/g, "ஹே");
uv = uv.replace(/Ah/g, "ஹை");
uv = uv.replace(/hf/g, "ஹ்");
uv = uv.replace(/h/g, "ஹ");///////////////////////////////////3
uv = uv.replace(/exq/g, "ஷௌ");
uv = uv.replace(/Exa/g, "ஷோ");
uv = uv.replace(/exa/g, "ஷொ");
uv = uv.replace(/xa/g, "ஷா");
uv = uv.replace(/xi/g, "ஷி");
uv = uv.replace(/xI/g, "ஷீ");
uv = uv.replace(/ex/g, "ஷெ");
uv = uv.replace(/Ex/g, "ஷே");
uv = uv.replace(/Ax/g, "ஷை");
uv = uv.replace(/xf/g, "ஷ்");
uv = uv.replace(/x/g, "ஷ");///////////////////////////////////3

euv = uv.replace(/esq/g, "ஸௌ");
uv = uv.replace(/Esa/g, "ஸோ");
uv = uv.replace(/esa/g, "ஸொ");
uv = uv.replace(/sa/g, "ஸா");
uv = uv.replace(/si/g, "ஸி");
uv = uv.replace(/sI/g, "ஸீ");
uv = uv.replace(/es/g, "ஸெ");
uv = uv.replace(/Es/g, "ஸே");
uv = uv.replace(/As/g, "ஸை");
uv = uv.replace(/sf/g, "ஸ்");
uv = uv.replace(/s/g, "ஸ");///////////////////////////////////3
uv = uv.replace(/`/g, "அ");
uv = uv.replace(/~/g, "ஆ");
uv = uv.replace(/;/g, "இ");
uv = uv.replace(/:/g, "ஈ");
uv = uv.replace(/u/g, "உ");
uv = uv.replace(/U/g, "ஊ");
uv = uv.replace(/'/g, "எ");
uv = uv.replace(/"/g, "ஏ");
uv = uv.replace(/_/g, "ஐ");
uv = uv.replace(/o/g, "ஒ")
uv = uv.replace(/O/g, "ஓ");
uv = uv.replace(/oq/g, "ஔ");

uv = uv.replace(/!/g, "ஸ்ரீ");
uv = uv.replace(/#/g, "ஃ");





document.tamil_unicode_utf8.destination.value = uv;
} 
function convert_nakkeeran_2_unicode() { 

uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/b/g, "க்ஷ");
uv = uv.replace(/bô/g, "க்ஷா");
uv = uv.replace(/·/g, "க்ஷி");
uv = uv.replace(/Î/g, "க்ஷீ");
uv = uv.replace(/bý/g, "க்ஷு");
uv = uv.replace(/bþ/g, "க்ஷூ");
uv = uv.replace(/ùb/g, "க்ஷெ");
uv = uv.replace(/úb/g, "க்ஷே");
uv = uv.replace(/ùbô/g, "க்ஷொ");
uv = uv.replace(/úbô/g, "க்ஷோ");
uv = uv.replace(/ùb\[/g, "க்ஷௌ");
uv = uv.replace(/ûb/g, "க்ஷை");
uv = uv.replace(/z/g, "க்ஷ்");

uv = uv.replace(/ù_\[/g, "ஜௌ");
uv = uv.replace(/ú_ô/g, "ஜோ");
uv = uv.replace(/ù_ô/g, "ஜொ");
uv = uv.replace(/_ô/g, "ஜா");
uv = uv.replace(/´/g, "ஜி");
uv = uv.replace(/Ë/g, "ஜீ");
uv = uv.replace(/_ý/g, "ஜு");
uv = uv.replace(/_þ/g, "ஜூ");
uv = uv.replace(/ù_/g, "ஜெ");
uv = uv.replace(/ú_/g, "ஜே");
uv = uv.replace(/û_/g, "ஜை");
uv = uv.replace(/w/g, "ஜ்");
uv = uv.replace(/_/g, "ஜ");


uv = uv.replace(/ùL\[/g, "கௌ");
uv = uv.replace(/úLô/g, "கோ");
uv = uv.replace(/ùLô/g, "கொ");
uv = uv.replace(/Lô/g, "கா");
uv = uv.replace(/¡/g, "கி");
uv = uv.replace(/¸/g, "கீ");
uv = uv.replace(/Ï/g, "கு");
uv = uv.replace(/á/g, "கூ");
uv = uv.replace(/ùL/g, "கெ");
uv = uv.replace(/úL/g, "கே");
uv = uv.replace(/ûL/g, "கை");
uv = uv.replace(/d/g, "க்");
uv = uv.replace(/L/g, "க");

uv = uv.replace(/ùM\[/g, "ஙௌ");
uv = uv.replace(/úMô/g, "ஙோ");
uv = uv.replace(/ùMô/g, "ஙொ");
uv = uv.replace(/Mô/g, "ஙா");
uv = uv.replace(/¢/g, "ஙி");
uv = uv.replace(/¹/g, "ஙீ");
uv = uv.replace(/Ð/g, "ஙு");
uv = uv.replace(/â/g, "ஙூ");
uv = uv.replace(/ùM/g, "ஙெ");
uv = uv.replace(/úM/g, "ஙே");
uv = uv.replace(/ûM/g, "ஙை");
uv = uv.replace(/e/g, "ங்");
uv = uv.replace(/M/g, "ங");

uv = uv.replace(/ùN\[/g, "சௌ");
uv = uv.replace(/úNô/g, "சோ");
uv = uv.replace(/ùNô/g, "சொ");
uv = uv.replace(/Nô/g, "சா");
uv = uv.replace(/£/g, "சி");
uv = uv.replace(/º/g, "சீ");
uv = uv.replace(/Ñ/g, "சு");
uv = uv.replace(/ã/g, "சூ");
uv = uv.replace(/ùN/g, "செ");
uv = uv.replace(/úN/g, "சே");
uv = uv.replace(/ûN/g, "சை");
uv = uv.replace(/f/g, "ச்");
uv = uv.replace(/N/g, "ச");

uv = uv.replace(/ùO\[/g, "ஞௌ");
uv = uv.replace(/úOô/g, "ஞோ");
uv = uv.replace(/ùOô/g, "ஞொ");
uv = uv.replace(/Oô/g, "ஞா");
uv = uv.replace(/¤/g, "ஞி");
uv = uv.replace(/»/g, "ஞீ");
uv = uv.replace(/Ò/g, "ஞு");
uv = uv.replace(/ä/g, "ஞூ");
uv = uv.replace(/ùO/g, "ஞெ");
uv = uv.replace(/úO/g, "ஞே");
uv = uv.replace(/ûO/g, "ஞை");
uv = uv.replace(/g/g, "ஞ்");
uv = uv.replace(/O/g, "ஞ");

uv = uv.replace(/ùP\[/g, "டௌ");
uv = uv.replace(/úPô/g, "டோ");
uv = uv.replace(/ùPô/g, "டொ");
uv = uv.replace(/Pô/g, "டா");
uv = uv.replace(/¥/g, "டி");
uv = uv.replace(/¼/g, "டீ");
uv = uv.replace(/Ó/g, "டு");
uv = uv.replace(/å/g, "டூ");
uv = uv.replace(/ùP/g, "டெ");
uv = uv.replace(/úP/g, "டே");
uv = uv.replace(/ûP/g, "டை");
uv = uv.replace(/h/g, "ட்");
uv = uv.replace(/P/g, "ட");

uv = uv.replace(/ùQ\[/g, "ணௌ");
uv = uv.replace(/úQô/g, "ணோ");
uv = uv.replace(/ùQô/g, "ணொ");
uv = uv.replace(/Qô/g, "ணா");
uv = uv.replace(/¦/g, "ணி");
uv = uv.replace(/½/g, "ணீ");
uv = uv.replace(/Ô/g, "ணு");
uv = uv.replace(/æ/g, "ணூ");
uv = uv.replace(/ùQ/g, "ணெ");
uv = uv.replace(/úQ/g, "ணே");
uv = uv.replace(/ûQ/g, "ணை");
uv = uv.replace(/i/g, "ண்");
uv = uv.replace(/Q/g, "ண");

uv = uv.replace(/ùR\[/g, "தௌ");
uv = uv.replace(/úRô/g, "தோ");
uv = uv.replace(/ùRô/g, "தொ");
uv = uv.replace(/Rô/g, "தா");
uv = uv.replace(/§/g, "தி");
uv = uv.replace(/¾/g, "தீ");
uv = uv.replace(/Õ/g, "து");
uv = uv.replace(/ç/g, "தூ");
uv = uv.replace(/ùR/g, "தெ");
uv = uv.replace(/úR/g, "தே");
uv = uv.replace(/ûR/g, "தை");
uv = uv.replace(/j/g, "த்");
uv = uv.replace(/R/g, "த");

uv = uv.replace(/ùS\[/g, "நௌ");
uv = uv.replace(/úSô/g, "நோ");
uv = uv.replace(/ùSô/g, "நொ");
uv = uv.replace(/Sô/g, "நா");
uv = uv.replace(/¨/g, "நி");
uv = uv.replace(/¿/g, "நீ");
uv = uv.replace(/Ö/g, "நு");
uv = uv.replace(/è/g, "நூ");
uv = uv.replace(/ùS/g, "நெ");
uv = uv.replace(/úS/g, "நே");
uv = uv.replace(/ûS/g, "நை");
uv = uv.replace(/k/g, "ந்");
uv = uv.replace(/S/g, "ந");

uv = uv.replace(/ù]\[/g, "னௌ");
uv = uv.replace(/ú]ô/g, "னோ");
uv = uv.replace(/ù]ô/g, "னொ");
uv = uv.replace(/]ô/g, "னா");
uv = uv.replace(/²/g, "னி");
uv = uv.replace(/É/g, "னீ");
uv = uv.replace(/à/g, "னு");
uv = uv.replace(/ò/g, "னூ");
uv = uv.replace(/ù]/g, "னெ");
uv = uv.replace(/ú]/g, "னே");
uv = uv.replace(/û]/g, "னை");
uv = uv.replace(/u/g, "ன்");
uv = uv.replace(/]/g, "ன");

uv = uv.replace(/ùT\[/g, "பௌ");
uv = uv.replace(/úTô/g, "போ");
uv = uv.replace(/ùTô/g, "பொ");
uv = uv.replace(/Tô/g, "பா");
uv = uv.replace(/©/g, "பி");
uv = uv.replace(/À/g, "பீ");
uv = uv.replace(/×/g, "பு");
uv = uv.replace(/é/g, "பூ");
uv = uv.replace(/ùT/g, "பெ");
uv = uv.replace(/úT/g, "பே");
uv = uv.replace(/ûT/g, "பை");
uv = uv.replace(/l/g, "ப்");
uv = uv.replace(/T/g, "ப");

uv = uv.replace(/ùU\[/g, "மௌ");
uv = uv.replace(/úUô/g, "மோ");
uv = uv.replace(/ùUô/g, "மொ");
uv = uv.replace(/Uô/g, "மா");
uv = uv.replace(/ª/g, "மி");
uv = uv.replace(/Á/g, "மீ");
uv = uv.replace(/Ø/g, "மு");
uv = uv.replace(/ê/g, "மூ");
uv = uv.replace(/ùU/g, "மெ");
uv = uv.replace(/úU/g, "மே");
uv = uv.replace(/ûU/g, "மை");
uv = uv.replace(/m/g, "ம்");
uv = uv.replace(/U/g, "ம");

uv = uv.replace(/ùV\[/g, "யௌ");
uv = uv.replace(/úVô/g, "யோ");
uv = uv.replace(/ùVô/g, "யொ");
uv = uv.replace(/Vô/g, "யா");
uv = uv.replace(/«/g, "யி");
uv = uv.replace(/Â/g, "யீ");
uv = uv.replace(/Ù/g, "யு");
uv = uv.replace(/ë/g, "யூ");
uv = uv.replace(/ùV/g, "யெ");
uv = uv.replace(/úV/g, "யே");
uv = uv.replace(/ûV/g, "யை");
uv = uv.replace(/n/g, "ய்");
uv = uv.replace(/V/g, "ய");


uv = uv.replace(/ùW\[/g, "ரௌ");
uv = uv.replace(/úWô/g, "ரோ");
uv = uv.replace(/ùWô/g, "ரொ");
uv = uv.replace(/Wô/g, "ரா");
uv = uv.replace(/¬/g, "ரி");
uv = uv.replace(/Ã/g, "ரீ");
uv = uv.replace(/Ú/g, "ரு");
uv = uv.replace(/ì/g, "ரூ");
uv = uv.replace(/ùW/g, "ரெ");
uv = uv.replace(/úW/g, "ரே");
uv = uv.replace(/ûW/g, "ரை");
uv = uv.replace(/o/g, "ர்");
uv = uv.replace(/W/g, "ர");


uv = uv.replace(/ùX\[/g, "லௌ");
uv = uv.replace(/úXô/g, "லோ");
uv = uv.replace(/ùXô/g, "லொ");
uv = uv.replace(/Xô/g, "லா");
uv = uv.replace(/­/g, "லி");

uv = uv.replace(/Ä/g, "லீ");
uv = uv.replace(/Û/g, "லு");
uv = uv.replace(/í/g, "லூ");
uv = uv.replace(/ùX/g, "லெ");
uv = uv.replace(/úX/g, "லே");
uv = uv.replace(/ûX/g, "லை");
uv = uv.replace(/p/g, "ல்");
uv = uv.replace(/X/g, "ல");


uv = uv.replace(/ù\[\[/g, "ளௌ");
uv = uv.replace(/ú\[ô/g, "ளோ");
uv = uv.replace(/ù\[ô/g, "ளொ");
uv = uv.replace(/\[ô/g, "ளா");
uv = uv.replace(/ü/g, "ளி");

uv = uv.replace(/°/g, "ளி");
uv = uv.replace(/Ç/g, "ளீ");
uv = uv.replace(/Þ/g, "ளு");
uv = uv.replace(/ð/g, "ளூ");
uv = uv.replace(/ù\[/g, "ளெ");
uv = uv.replace(/ú\[/g, "ளே");
uv = uv.replace(/û\[/g, "ளை");
uv = uv.replace(/s/g, "ள்");
uv = uv.replace(/\[/g, "ள");

uv = uv.replace(/ùY\[/g, "வௌ");
uv = uv.replace(/úYô/g, "வோ");
uv = uv.replace(/ùYô/g, "வொ");
uv = uv.replace(/Yô/g, "வா");
uv = uv.replace(/®/g, "வி");
uv = uv.replace(/Å/g, "வீ");
uv = uv.replace(/Ü/g, "வு");
uv = uv.replace(/î/g, "வூ");
uv = uv.replace(/ùY/g, "வெ");
uv = uv.replace(/úY/g, "வே");
uv = uv.replace(/ûY/g, "வை");
uv = uv.replace(/q/g, "வ்");
uv = uv.replace(/Y/g, "வ");

uv = uv.replace(/ùZ\[/g, "ழௌ");
uv = uv.replace(/úZô/g, "ழோ");
uv = uv.replace(/ùZô/g, "ழொ");
uv = uv.replace(/Zô/g, "ழா");
uv = uv.replace(/¯/g, "ழி");
uv = uv.replace(/Æ/g, "ழீ");
uv = uv.replace(/Ý/g, "ழு");
uv = uv.replace(/ï/g, "ழூ");
uv = uv.replace(/ùZ/g, "ழெ");
uv = uv.replace(/úZ/g, "ழே");
uv = uv.replace(/ûZ/g, "ழை");
uv = uv.replace(/r/g, "ழ்");
uv = uv.replace(/Z/g, "ழ");


uv = uv.replace(/ù\\\[/g, "றௌ");
uv = uv.replace(/ú\\ô/g, "றோ");
uv = uv.replace(/ù\\ô/g, "றொ");
uv = uv.replace(/\\ô/g, "றா");
uv = uv.replace(/±/g, "றி");
uv = uv.replace(/È/g, "றீ");
uv = uv.replace(/ß/g, "று");
uv = uv.replace(/ñ/g, "றூ");
uv = uv.replace(/ù\\/g, "றெ");
uv = uv.replace(/ú\\/g, "றே");
uv = uv.replace(/û\\/g, "றை");
uv = uv.replace(/t/g, "ற்");
uv = uv.replace(/\\/g, "ற");
uv = uv.replace(/ù^\[/g, "ஸௌ");
uv = uv.replace(/ú^ô/g, "ஸோ");
uv = uv.replace(/ù^ô/g, "ஸொ");
uv = uv.replace(/^ô/g, "ஸா");
uv = uv.replace(/³/g, "ஸி");
uv = uv.replace(/Ê/g, "ஸீ");
uv = uv.replace(/^ý/g, "ஸு");
uv = uv.replace(/^þ/g, "ஸூ");
uv = uv.replace(/ù^/g, "ஸெ");
uv = uv.replace(/ú^/g, "ஸே");
uv = uv.replace(/û^/g, "ஸை");
uv = uv.replace(/v/g, "ஸ்");
uv = uv.replace(/\^/g, "ஸ");

uv = uv.replace(/@/g, "அ");
uv = uv.replace(/A/g, "ஆ");
uv = uv.replace(/B/g, "இ");
uv = uv.replace(/C/g, "ஈ");
uv = uv.replace(/D/g, "உ");
uv = uv.replace(/E/g, "ஊ");
uv = uv.replace(/F/g, "எ");
uv = uv.replace(/G/g, "ஏ");
uv = uv.replace(/H/g, "ஐ");
uv = uv.replace(/I/g, "ஒ")
uv = uv.replace(/J/g, "ஓ");
uv = uv.replace(/I\[/g, "ஔ");

uv = uv.replace(/K/g, "ஃ");

uv = uv.replace(/c/g, "ஸ்ரீ");


uv = uv.replace(/ùa\[/g, "ஹௌ");
uv = uv.replace(/úaô/g, "ஹோ");
uv = uv.replace(/ùaô/g, "ஹொ");
uv = uv.replace(/aô/g, "ஹா");
uv = uv.replace(/¶/g, "ஹி");
uv = uv.replace(/Í/g, "ஹீ");
uv = uv.replace(/aý/g, "ஹு");
uv = uv.replace(/aþ/g, "ஹூ");
uv = uv.replace(/ùa/g, "ஹெ");
uv = uv.replace(/úa/g, "ஹே");
uv = uv.replace(/ûa/g, "ஹை");
uv = uv.replace(/y/g, "ஹ்");
uv = uv.replace(/a/g, "ஹ");

uv = uv.replace(/ù`\[/g, "ஷௌ");
uv = uv.replace(/ú`ô/g, "ஷோ");
uv = uv.replace(/ù`ô/g, "ஷொ");
uv = uv.replace(/`ô/g, "ஷா");
uv = uv.replace(/µ/g, "ஷி");
uv = uv.replace(/Ì/g, "ஷீ");
uv = uv.replace(/`ý/g, "ஷு");
uv = uv.replace(/`þ/g, "ஷூ");
uv = uv.replace(/ù`/g, "ஷெ");
uv = uv.replace(/ú`/g, "ஷே");
uv = uv.replace(/û`/g, "ஷை");
uv = uv.replace(/x/g, "ஷ்");
uv = uv.replace(/`/g, "ஷ");


document.tamil_unicode_utf8.destination.value=uv;
} 

function convert_roman_2_unicode() {
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/Xau/g, "க்ஷௌ");
uv = uv.replace(/Xai/g, "க்ஷை");
uv = uv.replace(/Xaa/g, "க்ஷா");
uv = uv.replace(/XA/g, "க்ஷா");
uv = uv.replace(/Xa/g, "க்ஷ");
uv = uv.replace(/Xii/g, "க்ஷீ");
uv = uv.replace(/Xi/g, "க்ஷி");
uv = uv.replace(/XI/g, "க்ஷீ");

uv = uv.replace(/Xuu/g, "க்ஷூ");
uv = uv.replace(/Xu/g, "க்ஷு");
uv = uv.replace(/XU/g, "க்ஷூ");
uv = uv.replace(/Xee/g, "க்ஷே");
uv = uv.replace(/Xe/g, "க்ஷெ");
uv = uv.replace(/XE/g, "க்ஷே");
uv = uv.replace(/Xoo/g, "க்ஷோ");
uv = uv.replace(/Xo/g, "க்ஷொ");
uv = uv.replace(/XO/g, "க்ஷோ");


uv = uv.replace(/X/g, "க்ஷ்");

uv = uv.replace(/njau/g, "ஞௌ");
uv = uv.replace(/njai/g, "ஞை");
uv = uv.replace(/njee/g, "ஞே");
uv = uv.replace(/njoo/g, "ஞோ");
uv = uv.replace(/njaa/g, "ஞா");
uv = uv.replace(/njuu/g, "ஞூ");
uv = uv.replace(/njii/g, "ஞீ");
uv = uv.replace(/nja/g, "ஞ");
uv = uv.replace(/nji/g, "ஞி");
uv = uv.replace(/njI/g, "ஞீ");
uv = uv.replace(/njA/g, "ஞா");
uv = uv.replace(/nje/g, "ஞெ");
uv = uv.replace(/njE/g, "ஞே");
uv = uv.replace(/njo/g, "ஞொ");
uv = uv.replace(/njO/g, "ஞோ");
uv = uv.replace(/nju/g, "ஞு");
uv = uv.replace(/njU/g, "ஞூ");

uv = uv.replace(/nj/g, "ஞ்");


uv = uv.replace(/ngau/g, "ஙௌ");
uv = uv.replace(/ngai/g, "ஙை");
uv = uv.replace(/ngee/g, "ஙே");
uv = uv.replace(/ngoo/g, "ஙோ");
uv = uv.replace(/ngaa/g, "ஙா");
uv = uv.replace(/nguu/g, "ஙூ");
uv = uv.replace(/ngii/g, "ஙீ");
uv = uv.replace(/nga/g, "ங");
uv = uv.replace(/ngi/g, "ஙி");
uv = uv.replace(/ngI/g, "ஙீ");
uv = uv.replace(/ngA/g, "ஙா");
uv = uv.replace(/nge/g, "ஙெ");
uv = uv.replace(/ngE/g, "ஙே");
uv = uv.replace(/ngo/g, "ஙொ");
uv = uv.replace(/ngO/g, "ஙோ");
uv = uv.replace(/ngu/g, "ஙு");
uv = uv.replace(/ngU/g, "ஙூ");

uv = uv.replace(/ng/g, "ங்");



uv = uv.replace(/shau/g, "ஷௌ");
uv = uv.replace(/shai/g, "ஷை");
uv = uv.replace(/shee/g, "ஷே");
uv = uv.replace(/shoo/g, "ஷோ");
uv = uv.replace(/shaa/g, "ஷா");
uv = uv.replace(/shuu/g, "ஷூ");
uv = uv.replace(/shii/g, "ஷீ");
uv = uv.replace(/sha/g, "ஷ");
uv = uv.replace(/shi/g, "ஷி");
uv = uv.replace(/shI/g, "ஷீ");
uv = uv.replace(/shA/g, "ஷா");
uv = uv.replace(/she/g, "ஷெ");
uv = uv.replace(/shE/g, "ஷே");
uv = uv.replace(/sho/g, "ஷொ");
uv = uv.replace(/shO/g, "ஷோ");
uv = uv.replace(/shu/g, "ஷு");
uv = uv.replace(/shU/g, "ஷூ");

uv = uv.replace(/sh/g, "ஷ்");

uv = uv.replace(/ nau/g, " நௌ");
uv = uv.replace(/ nai/g, " நை");
uv = uv.replace(/ nee/g, " நே");
uv = uv.replace(/ noo/g, " நோ");
uv = uv.replace(/ naa/g, " நா");
uv = uv.replace(/ nuu/g, " நூ");
uv = uv.replace(/ nii/g, " நீ");
uv = uv.replace(/ na/g, " ந");
uv = uv.replace(/ ni/g, " நி");
uv = uv.replace(/ nI/g, " நீ");
uv = uv.replace(/ nA/g, " நா");
uv = uv.replace(/ ne/g, " நெ");
uv = uv.replace(/ nE/g, " நே");
uv = uv.replace(/ no/g, " நொ");
uv = uv.replace(/ nO/g, " நோ");
uv = uv.replace(/ nu/g, " நு");
uv = uv.replace(/ nU/g, " நூ");

uv = uv.replace(/ nth/g, " ந்");

uv = uv.replace(/-nau/g, "நௌ");
uv = uv.replace(/-nai/g, "நை");
uv = uv.replace(/-nee/g, "நே");
uv = uv.replace(/-noo/g, "நோ");
uv = uv.replace(/-naa/g, "நா");
uv = uv.replace(/-nuu/g, "நூ");
uv = uv.replace(/-nii/g, "நீ");
uv = uv.replace(/-na/g, "ந");
uv = uv.replace(/-ni/g, "நி");
uv = uv.replace(/-nI/g, "நீ");
uv = uv.replace(/-nA/g, "நா");
uv = uv.replace(/-ne/g, "நெ");
uv = uv.replace(/-nE/g, "நே");
uv = uv.replace(/-no/g, "நொ");
uv = uv.replace(/-nO/g, "நோ");
uv = uv.replace(/-nu/g, "நு");
uv = uv.replace(/-nU/g, "நூ");

uv = uv.replace(/n-au/g, "நௌ");
uv = uv.replace(/n-ai/g, "நை");
uv = uv.replace(/n-ee/g, "நே");
uv = uv.replace(/n-oo/g, "நோ");
uv = uv.replace(/n-aa/g, "நா");
uv = uv.replace(/n-uu/g, "நூ");
uv = uv.replace(/n-ii/g, "நீ");
uv = uv.replace(/n-a/g, "ந");
uv = uv.replace(/n-i/g, "நி");
uv = uv.replace(/n-I/g, "நீ");
uv = uv.replace(/n-A/g, "நா");
uv = uv.replace(/n-e/g, "நெ");
uv = uv.replace(/n-E/g, "நே");
uv = uv.replace(/n-o/g, "நொ");
uv = uv.replace(/n-O/g, "நோ");
uv = uv.replace(/n-u/g, "நு");
uv = uv.replace(/n-U/g, "நூ");

uv = uv.replace(/wau/g, "நௌ");
uv = uv.replace(/wai/g, "நை");
uv = uv.replace(/wee/g, "நே");
uv = uv.replace(/woo/g, "நோ");
uv = uv.replace(/waa/g, "நா");
uv = uv.replace(/wuu/g, "நூ");
uv = uv.replace(/wii/g, "நீ");
uv = uv.replace(/wa/g, "ந");
uv = uv.replace(/wi/g, "நி");
uv = uv.replace(/wI/g, "நீ");
uv = uv.replace(/wA/g, "நா");
uv = uv.replace(/we/g, "நெ");
uv = uv.replace(/wE/g, "நே");
uv = uv.replace(/wo/g, "நொ");
uv = uv.replace(/wO/g, "நோ");
uv = uv.replace(/wu/g, "நு");
uv = uv.replace(/wU/g, "நூ");



uv = uv.replace(/ n/g, " ந்");
uv = uv.replace(/n-/g, "ந்");
uv = uv.replace(/-n/g, "ந்");
uv = uv.replace(/w/g, "ந்");




uv = uv.replace(/nthau/g, "ந்தௌ");
uv = uv.replace(/nthai/g, "ந்தை");
uv = uv.replace(/nthee/g, "ந்தே");
uv = uv.replace(/nthoo/g, "ந்தோ");
uv = uv.replace(/nthaa/g, "ந்தா");
uv = uv.replace(/nthuu/g, "ந்தூ");
uv = uv.replace(/nthii/g, "ந்தீ");
uv = uv.replace(/ntha/g, "ந்த");
uv = uv.replace(/nthi/g, "ந்தி");
uv = uv.replace(/nthI/g, "ந்தீ");
uv = uv.replace(/nthA/g, "ந்தா");
uv = uv.replace(/nthe/g, "ந்தெ");
uv = uv.replace(/nthE/g, "ந்தே");
uv = uv.replace(/ntho/g, "ந்தொ");
uv = uv.replace(/nthO/g, "ந்தோ");
uv = uv.replace(/nthu/g, "ந்து");
uv = uv.replace(/nthU/g, "ந்தூ");
uv = uv.replace(/nth/g, "ந்");




uv = uv.replace(/dhau/g, "தௌ");
uv = uv.replace(/dhai/g, "தை");
uv = uv.replace(/dhee/g, "தே");
uv = uv.replace(/dhoo/g, "தோ");
uv = uv.replace(/dhaa/g, "தா");
uv = uv.replace(/dhuu/g, "தூ");
uv = uv.replace(/dhii/g, "தீ");
uv = uv.replace(/dha/g, "த");
uv = uv.replace(/dhi/g, "தி");
uv = uv.replace(/dhI/g, "தீ");
uv = uv.replace(/dhA/g, "தா");
uv = uv.replace(/dhe/g, "தெ");
uv = uv.replace(/dhE/g, "தே");
uv = uv.replace(/dho/g, "தொ");
uv = uv.replace(/dhO/g, "தோ");
uv = uv.replace(/dhu/g, "து");
uv = uv.replace(/dhU/g, "தூ");

uv = uv.replace(/dh/g, "த்");

uv = uv.replace(/chau/g, "சௌ");
uv = uv.replace(/chai/g, "சை");
uv = uv.replace(/chee/g, "சே");
uv = uv.replace(/choo/g, "சோ");
uv = uv.replace(/chaa/g, "சா");
uv = uv.replace(/chuu/g, "சூ");
uv = uv.replace(/chii/g, "சீ");
uv = uv.replace(/cha/g, "ச");
uv = uv.replace(/chi/g, "சி");
uv = uv.replace(/chI/g, "சீ");
uv = uv.replace(/chA/g, "சா");
uv = uv.replace(/che/g, "செ");
uv = uv.replace(/chE/g, "சே");
uv = uv.replace(/cho/g, "சொ");
uv = uv.replace(/chO/g, "சோ");
uv = uv.replace(/chu/g, "சு");
uv = uv.replace(/chU/g, "சூ");

uv = uv.replace(/ch/g, "ச்");

uv = uv.replace(/zhau/g, "ழௌ");
uv = uv.replace(/zhai/g, "ழை");
uv = uv.replace(/zhee/g, "ழே");
uv = uv.replace(/zhoo/g, "ழோ");
uv = uv.replace(/zhaa/g, "ழா");
uv = uv.replace(/zhuu/g, "ழூ");
uv = uv.replace(/zhii/g, "ழீ");
uv = uv.replace(/zha/g, "ழ");
uv = uv.replace(/zhi/g, "ழி");
uv = uv.replace(/zhI/g, "ழீ");
uv = uv.replace(/zhA/g, "ழா");
uv = uv.replace(/zhe/g, "ழெ");
uv = uv.replace(/zhE/g, "ழே");
uv = uv.replace(/zho/g, "ழொ");
uv = uv.replace(/zhO/g, "ழோ");
uv = uv.replace(/zhu/g, "ழு");
uv = uv.replace(/zhU/g, "ழூ");

uv = uv.replace(/zh/g, "ழ்");
uv = uv.replace(/zau/g, "ழௌ");
uv = uv.replace(/zai/g, "ழை");
uv = uv.replace(/zee/g, "ழே");
uv = uv.replace(/zoo/g, "ழோ");
uv = uv.replace(/zaa/g, "ழா");
uv = uv.replace(/zuu/g, "ழூ");
uv = uv.replace(/zii/g, "ழீ");
uv = uv.replace(/za/g, "ழ");
uv = uv.replace(/zi/g, "ழி");
uv = uv.replace(/zI/g, "ழீ");
uv = uv.replace(/zA/g, "ழா");
uv = uv.replace(/ze/g, "ழெ");
uv = uv.replace(/zE/g, "ழே");
uv = uv.replace(/zo/g, "ழொ");
uv = uv.replace(/zO/g, "ழோ");
uv = uv.replace(/zu/g, "ழு");
uv = uv.replace(/zU/g, "ழூ");

uv = uv.replace(/z/g, "ழ்");

uv = uv.replace(/jau/g, "ஜௌ");
uv = uv.replace(/jai/g, "ஜை");
uv = uv.replace(/jee/g, "ஜே");
uv = uv.replace(/joo/g, "ஜோ");
uv = uv.replace(/jaa/g, "ஜா");
uv = uv.replace(/juu/g, "ஜூ");
uv = uv.replace(/jii/g, "ஜீ");
uv = uv.replace(/ja/g, "ஜ");
uv = uv.replace(/ji/g, "ஜி");
uv = uv.replace(/jI/g, "ஜீ");
uv = uv.replace(/jA/g, "ஜா");
uv = uv.replace(/je/g, "ஜெ");
uv = uv.replace(/jE/g, "ஜே");
uv = uv.replace(/jo/g, "ஜொ");
uv = uv.replace(/jO/g, "ஜோ");
uv = uv.replace(/ju/g, "ஜு");
uv = uv.replace(/jU/g, "ஜூ");

uv = uv.replace(/j/g, "ஜ்");


uv = uv.replace(/thau/g, "தௌ");
uv = uv.replace(/thai/g, "தை");
uv = uv.replace(/thee/g, "தே");
uv = uv.replace(/thoo/g, "தோ");
uv = uv.replace(/thaa/g, "தா");
uv = uv.replace(/thuu/g, "தூ");
uv = uv.replace(/thii/g, "தீ");
uv = uv.replace(/tha/g, "த");
uv = uv.replace(/thi/g, "தி");
uv = uv.replace(/thI/g, "தீ");
uv = uv.replace(/thA/g, "தா");
uv = uv.replace(/the/g, "தெ");
uv = uv.replace(/thE/g, "தே");
uv = uv.replace(/tho/g, "தொ");
uv = uv.replace(/thO/g, "தோ");
uv = uv.replace(/thu/g, "து");
uv = uv.replace(/thU/g, "தூ");

uv = uv.replace(/th/g, "த்");

uv = uv.replace(/-hau/g, "ஹௌ");
uv = uv.replace(/-hai/g, "ஹை");
uv = uv.replace(/-hee/g, "ஹே");
uv = uv.replace(/-hoo/g, "ஹோ");
uv = uv.replace(/-haa/g, "ஹா");
uv = uv.replace(/-huu/g, "ஹூ");
uv = uv.replace(/-hii/g, "ஹீ");
uv = uv.replace(/-ha/g, "ஹ");
uv = uv.replace(/-hi/g, "ஹி");
uv = uv.replace(/-hI/g, "ஹீ");
uv = uv.replace(/-hA/g, "ஹா");
uv = uv.replace(/-he/g, "ஹெ");
uv = uv.replace(/-hE/g, "ஹே");
uv = uv.replace(/-ho/g, "ஹொ");
uv = uv.replace(/-hO/g, "ஹோ");
uv = uv.replace(/-hu/g, "ஹு");
uv = uv.replace(/-hU/g, "ஹூ");

uv = uv.replace(/-h/g, "ஹ்");

uv = uv.replace(/hau/g, "கௌ");
uv = uv.replace(/hai/g, "கை");
uv = uv.replace(/hee/g, "கே");
uv = uv.replace(/hoo/g, "கோ");
uv = uv.replace(/haa/g, "கா");
uv = uv.replace(/huu/g, "கூ");
uv = uv.replace(/hii/g, "கீ");
uv = uv.replace(/ha/g, "க");
uv = uv.replace(/hi/g, "கி");
uv = uv.replace(/hI/g, "கீ");
uv = uv.replace(/hA/g, "கா");
uv = uv.replace(/he/g, "கெ");
uv = uv.replace(/hE/g, "கே");
uv = uv.replace(/ho/g, "கொ");
uv = uv.replace(/hO/g, "கோ");
uv = uv.replace(/hu/g, "கு");
uv = uv.replace(/hU/g, "கூ");

uv = uv.replace(/h/g, "க்");

uv = uv.replace(/kau/g, "கௌ");
uv = uv.replace(/kai/g, "கை");
uv = uv.replace(/kee/g, "கே");
uv = uv.replace(/koo/g, "கோ");
uv = uv.replace(/kaa/g, "கா");
uv = uv.replace(/kuu/g, "கூ");
uv = uv.replace(/kii/g, "கீ");
uv = uv.replace(/ka/g, "க");
uv = uv.replace(/ki/g, "கி");
uv = uv.replace(/kI/g, "கீ");
uv = uv.replace(/kA/g, "கா");
uv = uv.replace(/ke/g, "கெ");
uv = uv.replace(/kE/g, "கே");
uv = uv.replace(/ko/g, "கொ");
uv = uv.replace(/kO/g, "கோ");
uv = uv.replace(/ku/g, "கு");
uv = uv.replace(/kU/g, "கூ");

uv = uv.replace(/k/g, "க்");


uv = uv.replace(/-sau/g, "ஸௌ");
uv = uv.replace(/-sai/g, "ஸை");
uv = uv.replace(/-see/g, "ஸே");
uv = uv.replace(/-soo/g, "ஸோ");
uv = uv.replace(/-saa/g, "ஸா");
uv = uv.replace(/-suu/g, "ஸூ");
uv = uv.replace(/-sii/g, "ஸீ");
uv = uv.replace(/-sa/g, "ஸ");
uv = uv.replace(/-si/g, "ஸி");
uv = uv.replace(/-sI/g, "ஸீ");
uv = uv.replace(/-sA/g, "ஸா");
uv = uv.replace(/-se/g, "ஸெ");
uv = uv.replace(/-sE/g, "ஸே");
uv = uv.replace(/-so/g, "ஸொ");
uv = uv.replace(/-sO/g, "ஸோ");
uv = uv.replace(/-su/g, "ஸு");
uv = uv.replace(/-sU/g, "ஸூ");

uv = uv.replace(/-s/g, "ஸ்");

uv = uv.replace(/Sau/g, "ஸௌ");
uv = uv.replace(/Sai/g, "ஸை");
uv = uv.replace(/See/g, "ஸே");
uv = uv.replace(/Soo/g, "ஸோ");
uv = uv.replace(/Saa/g, "ஸா");
uv = uv.replace(/Suu/g, "ஸூ");
uv = uv.replace(/Sii/g, "ஸீ");
uv = uv.replace(/Sa/g, "ஸ");
uv = uv.replace(/Si/g, "ஸி");
uv = uv.replace(/SI/g, "ஸீ");
uv = uv.replace(/SA/g, "ஸா");
uv = uv.replace(/Se/g, "ஸெ");
uv = uv.replace(/SE/g, "ஸே");
uv = uv.replace(/So/g, "ஸொ");
uv = uv.replace(/SO/g, "ஸோ");
uv = uv.replace(/Su/g, "ஸு");
uv = uv.replace(/SU/g, "ஸூ");

uv = uv.replace(/S/g, "ஸ்");


uv = uv.replace(/rau/g, "ரௌ");
uv = uv.replace(/rai/g, "ரை");
uv = uv.replace(/ree/g, "ரே");
uv = uv.replace(/roo/g, "ரோ");
uv = uv.replace(/raa/g, "ரா");
uv = uv.replace(/ruu/g, "ரூ");
uv = uv.replace(/rii/g, "ரீ");
uv = uv.replace(/ra/g, "ர");
uv = uv.replace(/ri/g, "ரி");
uv = uv.replace(/rI/g, "ரீ");
uv = uv.replace(/rA/g, "ரா");
uv = uv.replace(/re/g, "ரெ");
uv = uv.replace(/rE/g, "ரே");
uv = uv.replace(/ro/g, "ரொ");
uv = uv.replace(/rO/g, "ரோ");
uv = uv.replace(/ru/g, "ரு");
uv = uv.replace(/rU/g, "ரூ");

uv = uv.replace(/r/g, "ர்");

uv = uv.replace(/Rau/g, "றௌ");
uv = uv.replace(/Rai/g, "றை");
uv = uv.replace(/Ree/g, "றே");
uv = uv.replace(/Roo/g, "றோ");
uv = uv.replace(/Raa/g, "றா");
uv = uv.replace(/Ruu/g, "றூ");
uv = uv.replace(/Rii/g, "றீ");
uv = uv.replace(/Ra/g, "ற");
uv = uv.replace(/Ri/g, "றி");
uv = uv.replace(/RI/g, "றீ");
uv = uv.replace(/RA/g, "றா");
uv = uv.replace(/Re/g, "றெ");
uv = uv.replace(/RE/g, "றே");
uv = uv.replace(/Ro/g, "றொ");
uv = uv.replace(/RO/g, "றோ");
uv = uv.replace(/Ru/g, "று");
uv = uv.replace(/RU/g, "றூ");

uv = uv.replace(/R/g, "ற்");

uv = uv.replace(/tau/g, "டௌ");
uv = uv.replace(/tai/g, "டை");
uv = uv.replace(/tee/g, "டே");
uv = uv.replace(/too/g, "டோ");
uv = uv.replace(/taa/g, "டா");
uv = uv.replace(/tuu/g, "டூ");
uv = uv.replace(/tii/g, "டீ");
uv = uv.replace(/ta/g, "ட");
uv = uv.replace(/ti/g, "டி");
uv = uv.replace(/tI/g, "டீ");
uv = uv.replace(/tA/g, "டா");
uv = uv.replace(/te/g, "டெ");
uv = uv.replace(/tE/g, "டே");
uv = uv.replace(/to/g, "டொ");
uv = uv.replace(/tO/g, "டோ");
uv = uv.replace(/tu/g, "டு");
uv = uv.replace(/tU/g, "டூ");

uv = uv.replace(/t/g, "ட்");



uv = uv.replace(/sau/g, "சௌ");
uv = uv.replace(/sai/g, "சை");
uv = uv.replace(/see/g, "சே");
uv = uv.replace(/soo/g, "சோ");
uv = uv.replace(/saa/g, "சா");
uv = uv.replace(/suu/g, "சூ");
uv = uv.replace(/sii/g, "சீ");
uv = uv.replace(/sa/g, "ச");
uv = uv.replace(/si/g, "சி");
uv = uv.replace(/sI/g, "சீ");
uv = uv.replace(/sA/g, "சா");
uv = uv.replace(/se/g, "செ");
uv = uv.replace(/sE/g, "சே");
uv = uv.replace(/so/g, "சொ");
uv = uv.replace(/sO/g, "சோ");
uv = uv.replace(/su/g, "சு");
uv = uv.replace(/sU/g, "சூ");

uv = uv.replace(/s/g, "ச்");
uv = uv.replace(/pau/g, "பௌ");
uv = uv.replace(/pai/g, "பை");
uv = uv.replace(/pee/g, "பே");
uv = uv.replace(/poo/g, "போ");
uv = uv.replace(/paa/g, "பா");
uv = uv.replace(/puu/g, "பூ");
uv = uv.replace(/pii/g, "பீ");
uv = uv.replace(/pa/g, "ப");
uv = uv.replace(/pi/g, "பி");
uv = uv.replace(/pI/g, "பீ");
uv = uv.replace(/pA/g, "பா");
uv = uv.replace(/pe/g, "பெ");
uv = uv.replace(/pE/g, "பே");
uv = uv.replace(/po/g, "பொ");
uv = uv.replace(/pO/g, "போ");
uv = uv.replace(/pu/g, "பு");
uv = uv.replace(/pU/g, "பூ");

uv = uv.replace(/p/g, "ப்");

uv = uv.replace(/bau/g, "பௌ");
uv = uv.replace(/bai/g, "பை");
uv = uv.replace(/bee/g, "பே");
uv = uv.replace(/boo/g, "போ");
uv = uv.replace(/baa/g, "பா");
uv = uv.replace(/buu/g, "பூ");
uv = uv.replace(/bii/g, "பீ");
uv = uv.replace(/ba/g, "ப");
uv = uv.replace(/bi/g, "பி");
uv = uv.replace(/bI/g, "பீ");
uv = uv.replace(/bA/g, "பா");
uv = uv.replace(/be/g, "பெ");
uv = uv.replace(/bE/g, "பே");
uv = uv.replace(/bo/g, "பொ");
uv = uv.replace(/bO/g, "போ");
uv = uv.replace(/bu/g, "பு");
uv = uv.replace(/bU/g, "பூ");

uv = uv.replace(/b/g, "ப்");
uv = uv.replace(/mau/g, "மௌ");
uv = uv.replace(/mai/g, "மை");
uv = uv.replace(/mee/g, "மே");
uv = uv.replace(/moo/g, "மோ");
uv = uv.replace(/maa/g, "மா");
uv = uv.replace(/muu/g, "மூ");
uv = uv.replace(/mii/g, "மீ");
uv = uv.replace(/ma/g, "ம");
uv = uv.replace(/mi/g, "மி");
uv = uv.replace(/mI/g, "மீ");
uv = uv.replace(/mA/g, "மா");
uv = uv.replace(/me/g, "மெ");
uv = uv.replace(/mE/g, "மே");
uv = uv.replace(/mo/g, "மொ");
uv = uv.replace(/mO/g, "மோ");
uv = uv.replace(/mu/g, "மு");
uv = uv.replace(/mU/g, "மூ");

uv = uv.replace(/m/g, "ம்");

uv = uv.replace(/yau/g, "யௌ");
uv = uv.replace(/yai/g, "யை");
uv = uv.replace(/yee/g, "யே");
uv = uv.replace(/yoo/g, "யோ");
uv = uv.replace(/yaa/g, "யா");
uv = uv.replace(/yuu/g, "யூ");
uv = uv.replace(/yii/g, "யீ");
uv = uv.replace(/ya/g, "ய");
uv = uv.replace(/yi/g, "யி");
uv = uv.replace(/yI/g, "யீ");
uv = uv.replace(/yA/g, "யா");
uv = uv.replace(/ye/g, "யெ");
uv = uv.replace(/yE/g, "யே");
uv = uv.replace(/yo/g, "யொ");
uv = uv.replace(/yO/g, "யோ");
uv = uv.replace(/yu/g, "யு");
uv = uv.replace(/yU/g, "யூ");

uv = uv.replace(/y/g, "ய்");


uv = uv.replace(/dau/g, "டௌ");
uv = uv.replace(/dai/g, "டை");
uv = uv.replace(/dee/g, "டே");
uv = uv.replace(/doo/g, "டோ");
uv = uv.replace(/daa/g, "டா");
uv = uv.replace(/duu/g, "டூ");
uv = uv.replace(/dii/g, "டீ");
uv = uv.replace(/da/g, "ட");
uv = uv.replace(/di/g, "டி");
uv = uv.replace(/dI/g, "டீ");
uv = uv.replace(/dA/g, "டா");
uv = uv.replace(/de/g, "டெ");
uv = uv.replace(/dE/g, "டே");
uv = uv.replace(/do/g, "டொ");
uv = uv.replace(/dO/g, "டோ");
uv = uv.replace(/du/g, "டு");
uv = uv.replace(/dU/g, "டூ");

uv = uv.replace(/d/g, "ட்");


uv = uv.replace(/nau/g, "னௌ");
uv = uv.replace(/nai/g, "னை");
uv = uv.replace(/nee/g, "னே");
uv = uv.replace(/noo/g, "னோ");
uv = uv.replace(/naa/g, "னா");
uv = uv.replace(/nuu/g, "னூ");
uv = uv.replace(/nii/g, "னீ");
uv = uv.replace(/na/g, "ன");
uv = uv.replace(/ni/g, "னி");
uv = uv.replace(/nI/g, "னீ");
uv = uv.replace(/nA/g, "னா");
uv = uv.replace(/ne/g, "னெ");
uv = uv.replace(/nE/g, "னே");
uv = uv.replace(/no/g, "னொ");
uv = uv.replace(/nO/g, "னோ");
uv = uv.replace(/nu/g, "னு");
uv = uv.replace(/nU/g, "னூ");

uv = uv.replace(/n/g, "ன்");

uv = uv.replace(/Nau/g, "ணௌ");
uv = uv.replace(/Nai/g, "ணை");
uv = uv.replace(/Nee/g, "ணே");
uv = uv.replace(/Noo/g, "ணோ");
uv = uv.replace(/Naa/g, "ணா");
uv = uv.replace(/Nuu/g, "ணூ");
uv = uv.replace(/Nii/g, "ணீ");
uv = uv.replace(/Na/g, "ண");
uv = uv.replace(/Ni/g, "ணி");
uv = uv.replace(/NI/g, "ணீ");
uv = uv.replace(/NA/g, "ணா");
uv = uv.replace(/Ne/g, "ணெ");
uv = uv.replace(/NE/g, "ணே");
uv = uv.replace(/No/g, "ணொ");
uv = uv.replace(/NO/g, "ணோ");
uv = uv.replace(/Nu/g, "ணு");
uv = uv.replace(/NU/g, "ணூ");

uv = uv.replace(/N/g, "ண்");
uv = uv.replace(/lau/g, "லௌ");
uv = uv.replace(/lai/g, "லை");
uv = uv.replace(/lee/g, "லே");
uv = uv.replace(/loo/g, "லோ");
uv = uv.replace(/laa/g, "லா");
uv = uv.replace(/luu/g, "லூ");
uv = uv.replace(/lii/g, "லீ");
uv = uv.replace(/la/g, "ல");
uv = uv.replace(/li/g, "லி");
uv = uv.replace(/lI/g, "லீ");
uv = uv.replace(/lA/g, "லா");
uv = uv.replace(/le/g, "லெ");
uv = uv.replace(/lE/g, "லே");
uv = uv.replace(/lo/g, "லொ");
uv = uv.replace(/lO/g, "லோ");
uv = uv.replace(/lu/g, "லு");
uv = uv.replace(/lU/g, "லூ");

uv = uv.replace(/l/g, "ல்");
uv = uv.replace(/Lau/g, "ளௌ");
uv = uv.replace(/Lai/g, "ளை");
uv = uv.replace(/Lee/g, "ளே");
uv = uv.replace(/Loo/g, "ளோ");
uv = uv.replace(/Laa/g, "ளா");
uv = uv.replace(/Luu/g, "ளூ");
uv = uv.replace(/Lii/g, "ளீ");
uv = uv.replace(/La/g, "ள");
uv = uv.replace(/Li/g, "ளி");
uv = uv.replace(/LI/g, "ளீ");
uv = uv.replace(/LA/g, "ளா");
uv = uv.replace(/Le/g, "ளெ");
uv = uv.replace(/LE/g, "ளே");
uv = uv.replace(/Lo/g, "ளொ");
uv = uv.replace(/LO/g, "ளோ");
uv = uv.replace(/Lu/g, "ளு");
uv = uv.replace(/LU/g, "ளூ");

uv = uv.replace(/L/g, "ள்");



uv = uv.replace(/vau/g, "வௌ");
uv = uv.replace(/vai/g, "வை");
uv = uv.replace(/vee/g, "வே");
uv = uv.replace(/voo/g, "வோ");
uv = uv.replace(/vaa/g, "வா");
uv = uv.replace(/vuu/g, "வூ");
uv = uv.replace(/vii/g, "வீ");
uv = uv.replace(/va/g, "வ");
uv = uv.replace(/vi/g, "வி");
uv = uv.replace(/vI/g, "வீ");
uv = uv.replace(/vA/g, "வா");
uv = uv.replace(/ve/g, "வெ");
uv = uv.replace(/vE/g, "வே");
uv = uv.replace(/vo/g, "வொ");
uv = uv.replace(/vO/g, "வோ");
uv = uv.replace(/vu/g, "வு");
uv = uv.replace(/vU/g, "வூ");

uv = uv.replace(/v/g, "வ்");





uv = uv.replace(/gau/g, "கௌ");
uv = uv.replace(/gai/g, "கை");
uv = uv.replace(/gee/g, "கே");
uv = uv.replace(/goo/g, "கோ");
uv = uv.replace(/gaa/g, "கா");
uv = uv.replace(/guu/g, "கூ");
uv = uv.replace(/gii/g, "கீ");
uv = uv.replace(/ga/g, "க");
uv = uv.replace(/gi/g, "கி");
uv = uv.replace(/gI/g, "கீ");
uv = uv.replace(/gA/g, "கா");
uv = uv.replace(/ge/g, "கெ");
uv = uv.replace(/gE/g, "கே");
uv = uv.replace(/go/g, "கொ");
uv = uv.replace(/gO/g, "கோ");
uv = uv.replace(/gu/g, "கு");
uv = uv.replace(/gU/g, "கூ");

uv = uv.replace(/g/g, "க்");














uv = uv.replace(/au/g, "ஔ");
uv = uv.replace(/ai/g, "ஐ");
uv = uv.replace(/aa/g, "ஆ");
uv = uv.replace(/ee/g, "ஏ");
uv = uv.replace(/ii/g, "ஈ");
uv = uv.replace(/uu/g, "ஊ");
uv = uv.replace(/oo/g, "ஓ");




uv = uv.replace(/-1000/g, "௲");

uv = uv.replace(/-100/g, "௱");

uv = uv.replace(/-10/g, "௰");
uv = uv.replace(/-1/g, "௧");

uv = uv.replace(/-2/g, "௨");
uv = uv.replace(/-3/g, "௩");

uv = uv.replace(/-4/g, "௪");
uv = uv.replace(/-5/g, "௫");

uv = uv.replace(/-6/g, "௬");
uv = uv.replace(/-7/g, "௭");

uv = uv.replace(/-8/g, "௮");
uv = uv.replace(/-9/g, "௯");




uv = uv.replace(/i/g, "இ");
uv = uv.replace(/I/g, "ஈ");



uv = uv.replace(/a/g, "அ");

uv = uv.replace(/A/g, "ஆ");

uv = uv.replace(/e/g, "எ");
uv = uv.replace(/E/g, "ஏ");
uv = uv.replace(/i/g, "இ");
uv = uv.replace(/I/g, "ஈ");
uv = uv.replace(/u/g, "உ");
uv = uv.replace(/U/g, "ஊ");
uv = uv.replace(/o/g, "ஒ");
uv = uv.replace(/O/g, "ஓ");

uv = uv.replace(/q/g, "ஃ");



document.tamil_unicode_utf8.destination.value=uv;
}

function convert_tab_2_unicode() {
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/þ/g, "க்ஷ");
uv = uv.replace(/þ£/g, "க்ஷா");

uv = uv.replace(/þ¤/g, "க்ஷி");
uv = uv.replace(/þ¦/g, "க்ஷீ");
uv = uv.replace(/þ§/g, "க்ஷு");
uv = uv.replace(/þ¨/g, "க்ஷூ");
uv = uv.replace(/ªþ/g, "க்ஷெ");
uv = uv.replace(/«þ/g, "க்ஷே");
uv = uv.replace(/ªþ£/g, "க்ஷொ");
uv = uv.replace(/«þ£/g, "க்ஷோ");
uv = uv.replace(/ªþ÷/g, "க்ஷௌ");
uv = uv.replace(/¬þ/g, "க்ஷை");
uv = uv.replace(/þ¢/g, "க்ஷ்");


uv = uv.replace(/ªè÷/g, "கௌ");
uv = uv.replace(/«è£/g, "கோ");
uv = uv.replace(/ªè£/g, "கொ");
uv = uv.replace(/è£/g, "கா");
uv = uv.replace(/è¤/g, "கி");
uv = uv.replace(/è¦/g, "கீ");
uv = uv.replace(/°/g, "கு");
uv = uv.replace(/Ã/g, "கூ");
uv = uv.replace(/ªè/g, "கெ");
uv = uv.replace(/«è/g, "கே");
uv = uv.replace(/¬è/g, "கை")
uv = uv.replace(/è¢/g, "க்");
uv = uv.replace(/è/g, "க");///////

uv = uv.replace(/ªé÷/g, "ஙௌ");
uv = uv.replace(/«é£/g, "ஙோ");
uv = uv.replace(/ªé£/g, "ஙொ");
uv = uv.replace(/é£/g, "ஙா");
uv = uv.replace(/é¤/g, "ஙி");
uv = uv.replace(/é¦/g, "ஙீ");
uv = uv.replace(/±/g, "ஙு");
uv = uv.replace(/Ä/g, "ஙூ");
uv = uv.replace(/ªé/g, "ஙெ");
uv = uv.replace(/«é/g, "ஙே");
uv = uv.replace(/¬é/g, "ஙை")
uv = uv.replace(/é¢/g, "ங்");
uv = uv.replace(/é/g, "ங");////





uv = uv.replace(/ªê÷/g, "சௌ");
uv = uv.replace(/«ê£/g, "சோ");
uv = uv.replace(/ªê£/g, "சொ");
uv = uv.replace(/ê£/g, "சா");
uv = uv.replace(/ê¤/g, "சி");
uv = uv.replace(/ê¦/g, "சீ");
uv = uv.replace(/²/g, "சு");
uv = uv.replace(/Å/g, "சூ");
uv = uv.replace(/ªê/g, "செ");
uv = uv.replace(/«ê/g, "சே");
uv = uv.replace(/¬ê/g, "சை")
uv = uv.replace(/ê¢/g, "ச்");
uv = uv.replace(/ê/g, "ச");/////

uv = uv.replace(/ªü÷/g, "ஜௌ");
uv = uv.replace(/«ü£/g, "ஜோ");
uv = uv.replace(/ªü£/g, "ஜொ");
uv = uv.replace(/ü£/g, "ஜா");
uv = uv.replace(/ü¤/g, "ஜி");
uv = uv.replace(/ü¦/g, "ஜீ");
uv = uv.replace(/ü§/g, "ஜு");
uv = uv.replace(/ü¨/g, "ஜூ");
uv = uv.replace(/ªü/g, "ஜெ");
uv = uv.replace(/«ü/g, "ஜே");
uv = uv.replace(/¬ü/g, "ஜை")
uv = uv.replace(/ü¢/g, "ஜ்");
uv = uv.replace(/ü/g, "ஜ");/////


uv = uv.replace(/ªë÷/g, "ஞௌ");
uv = uv.replace(/«ë£/g, "ஞோ");
uv = uv.replace(/ªë£/g, "ஞொ");
uv = uv.replace(/ë£/g, "ஞா");
uv = uv.replace(/ë¤/g, "ஞி");
uv = uv.replace(/ë¦/g, "ஞீ");
uv = uv.replace(/³/g, "ஞு");
uv = uv.replace(/Æ/g, "ஞூ");
uv = uv.replace(/ªë/g, "ஞெ");
uv = uv.replace(/«ë/g, "ஞே");
uv = uv.replace(/¬ë/g, "ஞை")
uv = uv.replace(/ë¢/g, "ஞ்");
uv = uv.replace(/ë/g, "ஞ");/////


uv = uv.replace(/ªì÷/g, "டௌ");
uv = uv.replace(/«ì£/g, "டோ");
uv = uv.replace(/ªì£/g, "டொ");
uv = uv.replace(/ì£/g, "டா");
uv = uv.replace(/ì¤/g, "டி");
uv = uv.replace(/®/g, "டி");
uv = uv.replace(/¯/g, "டீ");
uv = uv.replace(/ì¦/g, "டீ");
uv = uv.replace(/´/g, "டு");
uv = uv.replace(/Ç/g, "டூ");
uv = uv.replace(/ªì/g, "டெ");
uv = uv.replace(/«ì/g, "டே");
uv = uv.replace(/¬ì/g, "டை")
uv = uv.replace(/ì¢/g, "ட்");
uv = uv.replace(/ì/g, "ட");/////

uv = uv.replace(/ªí÷/g, "ணௌ");
uv = uv.replace(/«í£/g, "ணோ");
uv = uv.replace(/ªí£/g, "ணொ");
uv = uv.replace(/í£/g, "ணா");
uv = uv.replace(/í¤/g, "ணி");
uv = uv.replace(/í¦/g, "ணீ");
uv = uv.replace(/µ/g, "ணு");
uv = uv.replace(/È/g, "ணூ");
uv = uv.replace(/ªí/g, "ணெ");
uv = uv.replace(/«í/g, "ணே");
uv = uv.replace(/¬í/g, "ணை")
uv = uv.replace(/í¢/g, "ண்");
uv = uv.replace(/í/g, "ண");/////


uv = uv.replace(/ªî÷/g, "தௌ");
uv = uv.replace(/«î£/g, "தோ");
uv = uv.replace(/ªî£/g, "தொ");
uv = uv.replace(/î£/g, "தா");
uv = uv.replace(/î¤/g, "தி");
uv = uv.replace(/î¦/g, "தீ");
uv = uv.replace(/¶/g, "து");
uv = uv.replace(/É/g, "தூ");
uv = uv.replace(/ªî/g, "தெ");
uv = uv.replace(/«î/g, "தே");
uv = uv.replace(/¬î/g, "தை")
uv = uv.replace(/î¢/g, "த்");
uv = uv.replace(/î/g, "த");/////


uv = uv.replace(/ªï÷/g, "நௌ");
uv = uv.replace(/«ï£/g, "நோ");
uv = uv.replace(/ªï£/g, "நொ");
uv = uv.replace(/ï£/g, "நா");
uv = uv.replace(/ï¤/g, "நி");
uv = uv.replace(/ï¦/g, "நீ");
uv = uv.replace(/¸/g, "நு");
uv = uv.replace(/Ë/g, "நூ");
uv = uv.replace(/ªï/g, "நெ");
uv = uv.replace(/«ï/g, "நே");
uv = uv.replace(/¬ï/g, "நை")
uv = uv.replace(/ï¢/g, "ந்");
uv = uv.replace(/ï/g, "ந");/////


uv = uv.replace(/ªù÷/g, "னௌ");
uv = uv.replace(/«ù£/g, "னோ");
uv = uv.replace(/ªù£/g, "னொ");
uv = uv.replace(/ù£/g, "னா");
uv = uv.replace(/ù¤/g, "னி");
uv = uv.replace(/ù¦/g, "னீ");
uv = uv.replace(/Â/g, "னு");
uv = uv.replace(/Û/g, "னூ");
uv = uv.replace(/ªù/g, "னெ");
uv = uv.replace(/«ù/g, "னே");
uv = uv.replace(/¬ù/g, "னை")
uv = uv.replace(/ù¢/g, "ன்");
uv = uv.replace(/ù/g, "ன");/////


uv = uv.replace(/ªð÷/g, "பௌ");
uv = uv.replace(/«ð£/g, "போ");
uv = uv.replace(/ªð£/g, "பொ");
uv = uv.replace(/ð£/g, "பா");
uv = uv.replace(/ð¤/g, "பி");
uv = uv.replace(/ð¦/g, "பீ");
uv = uv.replace(/¹/g, "பு");
uv = uv.replace(/Ì/g, "பூ");
uv = uv.replace(/ªð/g, "பெ");
uv = uv.replace(/«ð/g, "பே");
uv = uv.replace(/¬ð/g, "பை")
uv = uv.replace(/ð¢/g, "ப்");
uv = uv.replace(/ð/g, "ப");/////


uv = uv.replace(/ªñ÷/g, "மௌ");
uv = uv.replace(/«ñ£/g, "மோ");
uv = uv.replace(/ªñ£/g, "மொ");
uv = uv.replace(/ñ£/g, "மா");
uv = uv.replace(/ñ¤/g, "மி");
uv = uv.replace(/ñ¦/g, "மீ");
uv = uv.replace(/º/g, "மு");
uv = uv.replace(/Í/g, "மூ");
uv = uv.replace(/ªñ/g, "மெ");
uv = uv.replace(/«ñ/g, "மே");
uv = uv.replace(/¬ñ/g, "மை")
uv = uv.replace(/ñ¢/g, "ம்");
uv = uv.replace(/ñ/g, "ம");/////




uv = uv.replace(/ªò÷/g, "யௌ");
uv = uv.replace(/«ò£/g, "யோ");
uv = uv.replace(/ªò£/g, "யொ");
uv = uv.replace(/ò£/g, "யா");
uv = uv.replace(/ò¤/g, "யி");
uv = uv.replace(/ò¦/g, "யீ");
uv = uv.replace(/»/g, "யு");
uv = uv.replace(/Î/g, "யூ");
uv = uv.replace(/ªò/g, "யெ");
uv = uv.replace(/«ò/g, "யே");
uv = uv.replace(/¬ò/g, "யை")
uv = uv.replace(/ò¢/g, "ய்");
uv = uv.replace(/ò/g, "ய");/////

uv = uv.replace(/ªó÷/g, "ரௌ");
uv = uv.replace(/«ó£/g, "ரோ");
uv = uv.replace(/ªó£/g, "ரொ");
uv = uv.replace(/ó£/g, "ரா");
uv = uv.replace(/ó¤/g, "ரி");
uv = uv.replace(/ó¦/g, "ரீ");
uv = uv.replace(/¼/g, "ரு");
uv = uv.replace(/Ï/g, "ரூ");
uv = uv.replace(/ªó/g, "ரெ");
uv = uv.replace(/«ó/g, "ரே");
uv = uv.replace(/¬ó/g, "ரை")
uv = uv.replace(/ó¢/g, "ர்");
uv = uv.replace(/ó/g, "ர");/////


uv = uv.replace(/ªô÷/g, "லௌ");
uv = uv.replace(/«ô£/g, "லோ");
uv = uv.replace(/ªô£/g, "லொ");
uv = uv.replace(/ô£/g, "லா");
uv = uv.replace(/ô¤/g, "லி");
uv = uv.replace(/ô¦/g, "லீ");
uv = uv.replace(/½/g, "லு");
uv = uv.replace(/Ö/g, "லூ");
uv = uv.replace(/ªô/g, "லெ");
uv = uv.replace(/«ô/g, "லே");
uv = uv.replace(/¬ô/g, "லை")
uv = uv.replace(/ô¢/g, "ல்");
uv = uv.replace(/ô/g, "ல");/////

uv = uv.replace(/ª÷÷/g, "ளௌ");
uv = uv.replace(/«÷£/g, "ளோ");
uv = uv.replace(/ª÷£/g, "ளொ");
uv = uv.replace(/÷£/g, "ளா");
uv = uv.replace(/÷¤/g, "ளி");
uv = uv.replace(/÷¦/g, "ளீ");
uv = uv.replace(/À/g, "ளு");
uv = uv.replace(/Ù/g, "ளூ");
uv = uv.replace(/ª÷/g, "ளெ");
uv = uv.replace(/«÷/g, "ளே");
uv = uv.replace(/¬÷/g, "ளை")
uv = uv.replace(/÷¢/g, "ள்");
uv = uv.replace(/÷/g, "ள");/////




uv = uv.replace(/ªõ÷/g, "வௌ");
uv = uv.replace(/«õ£/g, "வோ");
uv = uv.replace(/ªõ£/g, "வொ");
uv = uv.replace(/õ£/g, "வா");
uv = uv.replace(/õ¤/g, "வி");
uv = uv.replace(/õ¦/g, "வீ");
uv = uv.replace(/¾/g, "வு");
uv = uv.replace(/×/g, "வூ");
uv = uv.replace(/ªõ/g, "வெ");
uv = uv.replace(/«õ/g, "வே");
uv = uv.replace(/¬õ/g, "வை")
uv = uv.replace(/õ¢/g, "வ்");
uv = uv.replace(/õ/g, "வ");/////


uv = uv.replace(/ªö÷/g, "ழௌ");
uv = uv.replace(/«ö£/g, "ழோ");
uv = uv.replace(/ªö£/g, "ழொ");
uv = uv.replace(/ö£/g, "ழா");
uv = uv.replace(/ö¤/g, "ழி");
uv = uv.replace(/ö¦/g, "ழீ");
uv = uv.replace(/¿/g, "ழு");
uv = uv.replace(/Ø/g, "ழூ");
uv = uv.replace(/ªö/g, "ழெ");
uv = uv.replace(/«ö/g, "ழே");
uv = uv.replace(/¬ö/g, "ழை")
uv = uv.replace(/ö¢/g, "ழ்");
uv = uv.replace(/ö/g, "ழ");/////


uv = uv.replace(/ªø÷/g, "றௌ");
uv = uv.replace(/«ø£/g, "றோ");
uv = uv.replace(/ªø£/g, "றொ");
uv = uv.replace(/ø£/g, "றா");
uv = uv.replace(/ø¤/g, "றி");
uv = uv.replace(/ø¦/g, "றீ");
uv = uv.replace(/Á/g, "று");
uv = uv.replace(/Ú/g, "றூ");
uv = uv.replace(/ªø/g, "றெ");
uv = uv.replace(/«ø/g, "றே");
uv = uv.replace(/¬ø/g, "றை")
uv = uv.replace(/ø¢/g, "ற்");
uv = uv.replace(/ø/g, "ற");/////
uv = uv.replace(/ªý÷/g, "ஹௌ");
uv = uv.replace(/«ý£/g, "ஹோ");
uv = uv.replace(/ªý£/g, "ஹொ");
uv = uv.replace(/ý£/g, "ஹா");
uv = uv.replace(/ý¤/g, "ஹி");
uv = uv.replace(/ý¦/g, "ஹீ");

uv = uv.replace(/ªý/g, "ஹெ");
uv = uv.replace(/«ý/g, "ஹே");
uv = uv.replace(/¬ý/g, "ஹை")
uv = uv.replace(/ý¢/g, "ஹ்");
uv = uv.replace(/ý/g, "ஹ");/////


uv = uv.replace(/ªû÷/g, "ஷௌ");
uv = uv.replace(/«û£/g, "ஷோ");
uv = uv.replace(/ªû£/g, "ஷொ");
uv = uv.replace(/û£/g, "ஷா");
uv = uv.replace(/û¤/g, "ஷி");
uv = uv.replace(/û¦/g, "ஷீ");

uv = uv.replace(/ªû/g, "ஷெ");
uv = uv.replace(/«û/g, "ஷே");
uv = uv.replace(/¬û/g, "ஷை")
uv = uv.replace(/û¢/g, "ஷ்");
uv = uv.replace(/û/g, "ஷ");/////

uv = uv.replace(/ªú÷/g, "ஸௌ");
uv = uv.replace(/«ú£/g, "ஸோ");
uv = uv.replace(/ªú£/g, "ஸொ");
uv = uv.replace(/ú£/g, "ஸா");
uv = uv.replace(/ú¤/g, "ஸி");
uv = uv.replace(/ú¦/g, "ஸீ");

uv = uv.replace(/ªú/g, "ஸெ");
uv = uv.replace(/«ú/g, "ஸே");
uv = uv.replace(/¬ú/g, "ஸை")
uv = uv.replace(/ú¢/g, "ஸ்");
uv = uv.replace(/ú/g, "ஸ");/////




uv = uv.replace(/Ü/g, "அ");
uv = uv.replace(/Ý/g, "ஆ");
uv = uv.replace(/Þ/g, "இ");
uv = uv.replace(/ß/g, "ஈ");
uv = uv.replace(/à/g, "உ");
uv = uv.replace(/á/g, "ஊ");
uv = uv.replace(/â/g, "எ");
uv = uv.replace(/ã/g, "ஏ");
uv = uv.replace(/ä/g, "ஐ");
uv = uv.replace(/å/g, "ஒ")
uv = uv.replace(/æ/g, "ஓ");
uv = uv.replace(/å÷/g, "ஔ");



uv = uv.replace(/ç/g, "ஃ");


uv = uv.replace(/‚/g, "௧");
uv = uv.replace(/ƒ/g, "௨");
uv = uv.replace(/„/g, "௩");
uv = uv.replace(/…/g, "௪");
uv = uv.replace(/†/g, "௫");
uv = uv.replace(/—/g, "௰");
uv = uv.replace(/˜/g, "௱");
uv = uv.replace(/–/g, "௲");
uv = uv.replace(//g, "௯");
uv = uv.replace(/ˆ/g, "௭");
uv = uv.replace(/‰/g, "௮")
uv = uv.replace(/Ã/g, "௬");
uv = uv.replace(/ÿ/g, "ஸ்ரீ");




document.tamil_unicode_utf8.destination.value=uv;
}

function convert_tam_2_unicode() {
uv = document.tamil_unicode_utf8.source.value;
uv = uv.replace(/þ/g, "க்ஷ");
uv = uv.replace(/þ£/g, "க்ஷா");
uv = uv.replace(/¬þ/g, "க்ஷை");
uv = uv.replace(/V/g, "க்ஷி");
uv = uv.replace(/r/g, "க்ஷீ");
uv = uv.replace(/þ§/g, "க்ஷு");
uv = uv.replace(/þ¨/g, "க்ஷூ");
uv = uv.replace(/ªþ/g, "க்ஷெ");
uv = uv.replace(/«þ/g, "க்ஷே");
uv = uv.replace(/ªþ£/g, "க்ஷொ");
uv = uv.replace(/«þ£/g, "க்ஷோ");
uv = uv.replace(/ªþ÷/g, "க்ஷௌ");
uv = uv.replace(/z/g, "க்ஷ்");

uv = uv.replace(/ªü÷/g, "ஜௌ");
uv = uv.replace(/«ü£/g, "ஜோ");
uv = uv.replace(/ªü£/g, "ஜொ");
uv = uv.replace(/ü£/g, "ஜா");
uv = uv.replace(/T/g, "ஜி");
uv = uv.replace(/p/g, "ஜீ");
uv = uv.replace(/ü§/g, "ஜு");
uv = uv.replace(/ü¨/g, "ஜூ");
uv = uv.replace(/ªü/g, "ஜெ");
uv = uv.replace(/«ü/g, "ஜே");
uv = uv.replace(/¬ü/g, "ஜை");
uv = uv.replace(/ªü£/g, "ஜொ")
uv = uv.replace(/x/g, "ஜ்");
uv = uv.replace(/ü/g, "ஜ");




uv = uv.replace(/ªè÷/g, "கௌ");
uv = uv.replace(/«è£/g, "கோ");
uv = uv.replace(/ªè£/g, "கொ");
uv = uv.replace(/è£/g, "கா");
uv = uv.replace(/A/g, "கி");
uv = uv.replace(/W/g, "கீ");
uv = uv.replace(/°/g, "கு");
uv = uv.replace(/Ã/g, "கூ");
uv = uv.replace(/ªè/g, "கெ");
uv = uv.replace(/«è/g, "கே");
uv = uv.replace(/¬è/g, "கை");
uv = uv.replace(/‚/g, "க்");
uv = uv.replace(/è/g, "க");/////////////


uv = uv.replace(/ªé÷/g, "ஙௌ");
uv = uv.replace(/«é£/g, "ஙோ");
uv = uv.replace(/ªé£/g, "ஙொ");
uv = uv.replace(/é£/g, "ஙா");
uv = uv.replace(/B/g, "ஙி");
uv = uv.replace(/X/g, "ஙீ");
uv = uv.replace(/±/g, "ஙு");
uv = uv.replace(/Ä/g, "ஙூ"); 
uv = uv.replace(/ªé/g, "ஙெ");
uv = uv.replace(/«é/g, "ஙே");
uv = uv.replace(/¬é/g, "ஙை");
uv = uv.replace(/ƒ/g, "ங்");
uv = uv.replace(/é/g, "ங");
uv = uv.replace(/ªê÷/g, "சௌ");
uv = uv.replace(/«ê£/g, "சோ");
uv = uv.replace(/ªê£/g, "சொ");
uv = uv.replace(/ê£/g, "சா");
uv = uv.replace(/C/g, "சி");
uv = uv.replace(/Y/g, "சீ");
uv = uv.replace(/²/g, "சு");
uv = uv.replace(/Å/g, "சூ");
uv = uv.replace(/ªê/g, "செ");
uv = uv.replace(/«ê/g, "சே");
uv = uv.replace(/¬ê/g, "சை");
uv = uv.replace(/„/g, "ச்");
uv = uv.replace(/ê/g, "ச");////////


uv = uv.replace(/ªë\÷/g, "ஞௌ");
uv = uv.replace(/«ë£/g, "ஞோ");
uv = uv.replace(/ªë£/g, "ஞொ");
uv = uv.replace(/ë£/g, "ஞா");
uv = uv.replace(/D/g, "ஞி");
uv = uv.replace(/Z/g, "ஞீ");
uv = uv.replace(/³/g, "ஞு");
uv = uv.replace(/Æ/g, "ஞூ");
uv = uv.replace(/ªë/g, "ஞெ");
uv = uv.replace(/«ë/g, "ஞே");
uv = uv.replace(/¬ë/g, "ஞை");
uv = uv.replace(/…/g, "ஞ்");
uv = uv.replace(/ë/g, "ஞ");///////7

uv = uv.replace(/ªì÷/g, "டௌ");
uv = uv.replace(/«ì£/g, "டோ");
uv = uv.replace(/ªì£/g, "டொ");
uv = uv.replace(/ì£/g, "டா");
uv = uv.replace(/®/g, "டி");
uv = uv.replace(/¯/g, "டீ");
uv = uv.replace(/´/g, "டு");
uv = uv.replace(/Ç/g, "டூ");
uv = uv.replace(/ªì/g, "டெ");
uv = uv.replace(/«ì/g, "டே");
uv = uv.replace(/¬ì/g, "டை");
uv = uv.replace(/†/g, "ட்");
uv = uv.replace(/ì/g, "ட");/////
uv = uv.replace(/ªí÷/g, "ணௌ");
uv = uv.replace(/«í£/g, "ணோ");
uv = uv.replace(/ªí£/g, "ணொ");
uv = uv.replace(/í£/g, "ணா");
uv = uv.replace(/E/g, "ணி");
uv = uv.replace(/a/g, "ணீ");
uv = uv.replace(/µ/g, "ணு");
uv = uv.replace(/È/g, "ணூ");
uv = uv.replace(/ªí/g, "ணெ");
uv = uv.replace(/«í/g, "ணே");
uv = uv.replace(/¬í/g, "ணை");
uv = uv.replace(/‡/g, "ண்");
uv = uv.replace(/í/g, "ண");////7

uv = uv.replace(/ªî÷/g, "தௌ");
uv = uv.replace(/«î£/g, "தோ");
uv = uv.replace(/ªî£/g, "தொ");
uv = uv.replace(/î£/g, "தா");
uv = uv.replace(/F/g, "தி");
uv = uv.replace(/b/g, "தீ");
uv = uv.replace(/¶/g, "து");
uv = uv.replace(/É/g, "தூ");
uv = uv.replace(/ªî/g, "தெ");
uv = uv.replace(/«î/g, "தே");
uv = uv.replace(/¬î/g, "தை");
uv = uv.replace(/ˆ/g, "த்");
uv = uv.replace(/î/g, "த");///


uv = uv.replace(/ªï÷/g, "நௌ");
uv = uv.replace(/«ï£/g, "நோ");
uv = uv.replace(/ªï£/g, "நொ");
uv = uv.replace(/ï£/g, "நா");
uv = uv.replace(/G/g, "நி");
uv = uv.replace(/c/g, "நீ");
uv = uv.replace(/¸/g, "நு");
uv = uv.replace(/Ë/g, "நூ");
uv = uv.replace(/ªï/g, "நெ");
uv = uv.replace(/«ï/g, "நே");
uv = uv.replace(/¬ï/g, "நை");
uv = uv.replace(/ªï£/g, "நொ")
uv = uv.replace(/‰/g, "ந்");
uv = uv.replace(/ï/g, "ந");/////
uv = uv.replace(/ªù÷/g, "னௌ");
uv = uv.replace(/«ù£/g, "னோ");
uv = uv.replace(/ªù£/g, "னொ");
uv = uv.replace(/ù£/g, "னா");
uv = uv.replace(/Q/g, "னி");
uv = uv.replace(/m/g, "னீ");
uv = uv.replace(/Â/g, "னு");
uv = uv.replace(/Û/g, "னூ");
uv = uv.replace(/ªù/g, "னெ");
uv = uv.replace(/«ù/g, "னே");
uv = uv.replace(/¬ù/g, "னை");
uv = uv.replace(/ªù£/g, "னொ")
uv = uv.replace(/¡/g, "ன்");
uv = uv.replace(/ù/g, "ன");/////

uv = uv.replace(/ªð÷/g, "பௌ");
uv = uv.replace(/«ð£/g, "போ");
uv = uv.replace(/ªð£/g, "பொ");
uv = uv.replace(/ð£/g, "பா");
uv = uv.replace(/H/g, "பி");
uv = uv.replace(/d/g, "பீ");
uv = uv.replace(/¹/g, "பு");
uv = uv.replace(/Ì/g, "பூ");
uv = uv.replace(/ªð/g, "பெ");
uv = uv.replace(/«ð/g, "பே");
uv = uv.replace(/¬ð/g, "பை");
uv = uv.replace(/ªð£/g, "பொ")
uv = uv.replace(/Š/g, "ப்");
uv = uv.replace(/ð/g, "ப");////

uv = uv.replace(/ªñ÷/g, "மௌ");
uv = uv.replace(/«ñ£/g, "மோ");
uv = uv.replace(/ªñ£/g, "மொ");
uv = uv.replace(/ñ£/g, "மா");
uv = uv.replace(/I/g, "மி");
uv = uv.replace(/e/g, "மீ");
uv = uv.replace(/º/g, "மு");
uv = uv.replace(/Í/g, "மூ");
uv = uv.replace(/ªñ/g, "மெ");
uv = uv.replace(/«ñ/g, "மே");
uv = uv.replace(/¬ñ/g, "மை");
uv = uv.replace(/ªñ£/g, "மொ")
uv = uv.replace(/‹/g, "ம்");
uv = uv.replace(/ñ/g, "ம");////

uv = uv.replace(/ªò÷/g, "யௌ");
uv = uv.replace(/«ò£/g, "யோ");
uv = uv.replace(/ªò£/g, "ய");
uv = uv.replace(/ò£/g, "யா");
uv = uv.replace(/J/g, "யி");
uv = uv.replace(/f/g, "யீ");
uv = uv.replace(/»/g, "யு");
uv = uv.replace(/Î/g, "யூ");
uv = uv.replace(/ªò/g, "யெ");
uv = uv.replace(/«ò/g, "யே");
uv = uv.replace(/¬ò/g, "யை");
uv = uv.replace(/ªò£/g, "யொ")
uv = uv.replace(/Œ/g, "ய்");
uv = uv.replace(/ò/g, "ய");//////

uv = uv.replace(/ªó÷/g, "ரௌ");
uv = uv.replace(/«ó£/g, "ரோ");
uv = uv.replace(/ªó£/g, "ரொ");
uv = uv.replace(/ó£/g, "ரா");
uv = uv.replace(/K/g, "ரி");
uv = uv.replace(/g/g, "ரீ");
uv = uv.replace(/¼/g, "ரு");
uv = uv.replace(/Ï/g, "ரூ");
uv = uv.replace(/ªó/g, "ரெ");
uv = uv.replace(/«ó/g, "ரே");
uv = uv.replace(/¬ó/g, "ரை");
uv = uv.replace(/˜/g, "ர்");
uv = uv.replace(/ó/g, "ர");////

uv = uv.replace(/ªô÷/g, "லௌ");
uv = uv.replace(/«ô£/g, "லோ");
uv = uv.replace(/ªô£/g, "லொ");
uv = uv.replace(/ô£/g, "லா");
uv = uv.replace(/L/g, "லி");
uv = uv.replace(/h/g, "லீ");
uv = uv.replace(/½/g, "லு");
uv = uv.replace(/Ö/g, "லூ");
uv = uv.replace(/ªô/g, "லெ");
uv = uv.replace(/«ô/g, "லே");
uv = uv.replace(/¬ô/g, "லை");
uv = uv.replace(/™/g, "ல்");
uv = uv.replace(/ô/g, "ல");////

uv = uv.replace(/ª÷÷/g, "ளௌ");
uv = uv.replace(/«÷£/g, "ளோ");
uv = uv.replace(/ª÷£/g, "ள");
uv = uv.replace(/÷£/g, "ளா");
uv = uv.replace(/O/g, "ளி");
uv = uv.replace(/k/g, "ளீ");
uv = uv.replace(/À/g, "ளு");
uv = uv.replace(/Ù/g, "ளூ");
uv = uv.replace(/ª÷/g, "ளெ");
uv = uv.replace(/«÷/g, "ளே");
uv = uv.replace(/¬÷/g, "ளை");
uv = uv.replace(/œ/g, "ள்");
uv = uv.replace(/÷/g, "ள");/////

uv = uv.replace(/ªõ÷/g, "வௌ");
uv = uv.replace(/«õ£/g, "வோ");
uv = uv.replace(/ªõ£/g, "வொ");
uv = uv.replace(/õ£/g, "வா");
uv = uv.replace(/M/g, "வி");
uv = uv.replace(/i/g, "வீ");
uv = uv.replace(/¾/g, "வு");
uv = uv.replace(/×/g, "வூ");
uv = uv.replace(/ªõ/g, "வெ");
uv = uv.replace(/«õ/g, "வே");
uv = uv.replace(/¬õ/g, "வை");
uv = uv.replace(/ªõ£/g, "வொ")
uv = uv.replace(/š/g, "வ்");
uv = uv.replace(/õ/g, "வ");//////
uv = uv.replace(/ªö÷/g, "ழௌ");
uv = uv.replace(/«ö£/g, "ழோ");
uv = uv.replace(/ªö£/g, "ழொ");
uv = uv.replace(/ö£/g, "ழா");
uv = uv.replace(/N/g, "ழி");
uv = uv.replace(/j/g, "ழீ");
uv = uv.replace(/¿/g, "ழு");
uv = uv.replace(/Ø/g, "ழூ");
uv = uv.replace(/ªö/g, "ழெ");
uv = uv.replace(/«ö/g, "ழே");
uv = uv.replace(/¬ö/g, "ழை");
uv = uv.replace(/›/g, "ழ்");
uv = uv.replace(/ö/g, "ழ");////

uv = uv.replace(/ªø÷/g, "றௌ");
uv = uv.replace(/«ø£/g, "றோ");
uv = uv.replace(/ªø£/g, "றொ");
uv = uv.replace(/ø£/g, "றா");
uv = uv.replace(/P/g, "றி");
uv = uv.replace(/l/g, "றீ");
uv = uv.replace(/Á/g, "று");
uv = uv.replace(/Ú/g, "றூ");
uv = uv.replace(/ªø/g, "றெ");
uv = uv.replace(/«ø/g, "றே");
uv = uv.replace(/¬ø/g, "றை");
uv = uv.replace(/ªø£/g, "றொ")
uv = uv.replace(/Ÿ/g, "ற்");
uv = uv.replace(/ø/g, "ற");///
uv = uv.replace(/ªý÷/g, "ஹௌ");
uv = uv.replace(/«ý£/g, "ஹோ");
uv = uv.replace(/ªý£/g, "ஹொ");
uv = uv.replace(/ý£/g, "ஹா");
uv = uv.replace(/U/g, "ஹி");
uv = uv.replace(/q/g, "ஹீ");
uv = uv.replace(/ªý/g, "ஹெ");
uv = uv.replace(/«ý/g, "ஹே");
uv = uv.replace(/¬ý/g, "ஹை");
uv = uv.replace(/y/g, "ஹ்");
uv = uv.replace(/ý/g, "ஹ");///



uv = uv.replace(/ªû÷/g, "ஷௌ");
uv = uv.replace(/«û£/g, "ஷோ");
uv = uv.replace(/ªû£/g, "ஷொ");
uv = uv.replace(/û£/g, "ஷா");
uv = uv.replace(/S/g, "ஷி");
uv = uv.replace(/o/g, "ஷீ");

uv = uv.replace(/ªû/g, "ஷெ");
uv = uv.replace(/«û/g, "ஷே");
uv = uv.replace(/¬û/g, "ஷை");
uv = uv.replace(/ªû£/g, "ஷொ")
uv = uv.replace(/w/g, "ஷ்");
uv = uv.replace(/û/g, "ஷ");////

uv = uv.replace(/ªú÷/g, "ஸௌ");
uv = uv.replace(/«ú£/g, "ஸோ");
uv = uv.replace(/ªú£/g, "ஸொ");
uv = uv.replace(/ú£/g, "ஸா");
uv = uv.replace(/R/g, "ஸி");
uv = uv.replace(/n/g, "ஸீ");
uv = uv.replace(/ªú/g, "ஸெ");
uv = uv.replace(/«ú/g, "ஸே");
uv = uv.replace(/¬ú/g, "ஸை");
uv = uv.replace(/v/g, "ஸ்");
uv = uv.replace(/ú/g, "ஸ");/////
uv = uv.replace(/Ü/g, "அ");
uv = uv.replace(/Ý/g, "ஆ");
uv = uv.replace(/Þ/g, "இ");
uv = uv.replace(/ß/g, "ஈ");
uv = uv.replace(/à/g, "உ");
uv = uv.replace(/á/g, "ஊ");
uv = uv.replace(/â/g, "எ");
uv = uv.replace(/ã/g, "ஏ");
uv = uv.replace(/ä/g, "ஐ");
uv = uv.replace(/å/g, "ஒ")
uv = uv.replace(/æ/g, "ஓ");
uv = uv.replace(/å÷/g, "ஔ");





uv = uv.replace(/ç/g, "ஃ");

uv = uv.replace(/ÿ/g, "ஸ்ரீ");
uv = uv.replace(/ƒ/g, "‘");


document.tamil_unicode_utf8.destination.value=uv;

}

function convert_tscii_2_unicode() {
uv = document.tamil_unicode_utf8.source.value;

uv = uv.replace(/­/g, "இ");
uv = uv.replace(/þ/g, "இ");
uv = uv.replace(/‡/g, "க்ஷ");
uv = uv.replace(/‡¡/g, "க்ஷா");
uv = uv.replace(/‡¢/g, "க்ஷி");
uv = uv.replace(/‡£/g, "க்ஷீ");
uv = uv.replace(/‡¤/g, "க்ஷு");
uv = uv.replace(/‡¥/g, "க்ஷூ");
uv = uv.replace(/¦‡/g, "க்ஷெ");
uv = uv.replace(/§‡/g, "க்ஷே");
uv = uv.replace(/¨‡/g, "க்ஷை");
uv = uv.replace(/¦‡¡/g, "க்ஷொ");
uv = uv.replace(/§‡¡/g, "க்ஷோ");
uv = uv.replace(/¦‡Ç/g, "க்ஷௌ");
uv = uv.replace(/Œ/g, "க்ஷ்");

uv = uv.replace(/¦¸ª/g, "கௌ");
uv = uv.replace(/§¸¡/g, "கோ");
uv = uv.replace(/¦¸¡/g, "கொ");
uv = uv.replace(/¸¡/g, "கா");
uv = uv.replace(/¸¢/g, "கி");
uv = uv.replace(/¸£/g, "கீ");
uv = uv.replace(/Ì/g, "கு");
uv = uv.replace(/Ü/g, "கூ");
uv = uv.replace(/¦¸/g, "கெ");
uv = uv.replace(/§¸/g, "கே");
uv = uv.replace(/¨¸/g, "கை");
uv = uv.replace(/¦¸¡/g, "கொ")
uv = uv.replace(/ì/g, "க்");
uv = uv.replace(/¸/g, "க");

uv = uv.replace(/¦¹ª/g, "ஙௌ");
uv = uv.replace(/§¹¡/g, "ஙோ");
uv = uv.replace(/¦¹¡/g, "ஙொ");
uv = uv.replace(/¹¡/g, "ஙா");
uv = uv.replace(/¹¢/g, "ஙி");
uv = uv.replace(/¹£/g, "ஙீ");
uv = uv.replace(/™/g, "ஙு");
uv = uv.replace(/›/g, "ஙூ");
uv = uv.replace(/¦¹/g, "ஙெ");
uv = uv.replace(/§¹/g, "ஙே");
uv = uv.replace(/¨¹/g, "ஙை");
uv = uv.replace(/¦¹¡/g, "ஙொ")
uv = uv.replace(/í/g, "ங்");
uv = uv.replace(/¹/g, "ங");

uv = uv.replace(/¦ºª/g, "சௌ");
uv = uv.replace(/§º¡/g, "சோ");
uv = uv.replace(/¦º¡/g, "சொ");
uv = uv.replace(/º¡/g, "சா");
uv = uv.replace(/º¢/g, "சி");
uv = uv.replace(/º£/g, "சீ");
uv = uv.replace(/Í/g, "சு");
uv = uv.replace(/Ý/g, "சூ");
uv = uv.replace(/¦º/g, "செ");
uv = uv.replace(/§º/g, "சே");
uv = uv.replace(/¨º/g, "சை");
uv = uv.replace(/¦º¡/g, "சொ")
uv = uv.replace(/î/g, "ச்");
uv = uv.replace(/º/g, "ச");

uv = uv.replace(/¦ƒª/g, "ஜௌ");
uv = uv.replace(/§ƒ¡/g, "ஜோ");
uv = uv.replace(/¦ƒ¡/g, "ஜொ");
uv = uv.replace(/ƒ¡/g, "ஜா");
uv = uv.replace(/ƒ¢/g, "ஜி");
uv = uv.replace(/ƒ£/g, "ஜீ");
uv = uv.replace(/ƒ¤/g, "ஜு");
uv = uv.replace(/ƒ¥/g, "ஜூ");
uv = uv.replace(/¦ƒ/g, "ஜெ");
uv = uv.replace(/§ƒ/g, "ஜே");
uv = uv.replace(/¨ƒ/g, "ஜை");
uv = uv.replace(/¦ƒ¡/g, "ஜொ")
uv = uv.replace(/ˆ/g, "ஜ்");
uv = uv.replace(/ƒ/g, "ஜ");

uv = uv.replace(/¦»ª/g, "ஞௌ");
uv = uv.replace(/§»¡/g, "ஞோ");
uv = uv.replace(/¦»¡/g, "ஞொ");
uv = uv.replace(/»¡/g, "ஞா");
uv = uv.replace(/»¢/g, "ஞி");
uv = uv.replace(/»£/g, "ஞீ");
uv = uv.replace(//g, "ஞு");
uv = uv.replace(/œ/g, "ஞூ");
uv = uv.replace(/¦»/g, "ஞெ");
uv = uv.replace(/§»/g, "ஞே");
uv = uv.replace(/¨»/g, "ஞை");
uv = uv.replace(/¦»¡/g, "ஞொ")
uv = uv.replace(/ï/g, "ஞ்");
uv = uv.replace(/»/g, "ஞ");

uv = uv.replace(/¦¼ª/g, "டௌ");
uv = uv.replace(/§¼¡/g, "டோ");
uv = uv.replace(/¦¼¡/g, "டொ");
uv = uv.replace(/¼¡/g, "டா");
uv = uv.replace(/Ê/g, "டி");
uv = uv.replace(/Ë/g, "டீ");
uv = uv.replace(/Î/g, "டு");
uv = uv.replace(/Þ/g, "டூ");
uv = uv.replace(/¦¼/g, "டெ");
uv = uv.replace(/§¼/g, "டே");
uv = uv.replace(/¨¼/g, "டை");
uv = uv.replace(/¦¼¡/g, "டொ")
uv = uv.replace(/ð/g, "ட்");
uv = uv.replace(/¼/g, "ட");
uv = uv.replace(/¦½ª/g, "ணௌ");
uv = uv.replace(/§½¡/g, "ணோ");
uv = uv.replace(/¦½¡/g, "ணொ");
uv = uv.replace(/½¡/g, "ணா");
uv = uv.replace(/½¢/g, "ணி");
uv = uv.replace(/½£/g, "ணீ");
uv = uv.replace(/Ï/g, "ணு");
uv = uv.replace(/ß/g, "ணூ");
uv = uv.replace(/¦½/g, "ணெ");
uv = uv.replace(/§½/g, "ணே");
uv = uv.replace(/¨½/g, "ணை");
uv = uv.replace(/¦½¡/g, "ணொ")
uv = uv.replace(/ñ/g, "ண்");
uv = uv.replace(/½/g, "ண");


uv = uv.replace(/¦¾ª/g, "தௌ");
uv = uv.replace(/§¾¡/g, "தோ");
uv = uv.replace(/¦¾¡/g, "தொ");
uv = uv.replace(/¾¡/g, "தா");
uv = uv.replace(/¾¢/g, "தி");
uv = uv.replace(/¾£/g, "தீ");
uv = uv.replace(/Ð/g, "து");
uv = uv.replace(/à/g, "தூ");
uv = uv.replace(/¦¾/g, "தெ");
uv = uv.replace(/§¾/g, "தே");
uv = uv.replace(/¨¾/g, "தை");
uv = uv.replace(/¦¾¡/g, "தொ")
uv = uv.replace(/ò/g, "த்");
uv = uv.replace(/¾/g, "த");


uv = uv.replace(/¦¿ª/g, "நௌ");
uv = uv.replace(/§¿¡/g, "நோ");
uv = uv.replace(/¦¿¡/g, "நொ");
uv = uv.replace(/¿¡/g, "நா");
uv = uv.replace(/¿¢/g, "நி");
uv = uv.replace(/¿£/g, "நீ");
uv = uv.replace(/Ñ/g, "நு");
uv = uv.replace(/á/g, "நூ");
uv = uv.replace(/¦¿/g, "நெ");
uv = uv.replace(/§¿/g, "நே");
uv = uv.replace(/¨¿/g, "நை");
uv = uv.replace(/¦¿¡/g, "நொ")
uv = uv.replace(/ó/g, "ந்");
uv = uv.replace(/¿/g, "ந");


uv = uv.replace(/¦Éª/g, "னௌ");
uv = uv.replace(/§É¡/g, "னோ");
uv = uv.replace(/¦É¡/g, "னொ");
uv = uv.replace(/É¡/g, "னா");
uv = uv.replace(/É¢/g, "னி");
uv = uv.replace(/É£/g, "னீ");
uv = uv.replace(/Û/g, "னு");
uv = uv.replace(/ë/g, "னூ");
uv = uv.replace(/¦É/g, "னெ");
uv = uv.replace(/§É/g, "னே");
uv = uv.replace(/¨É/g, "னை");
uv = uv.replace(/¦É¡/g, "னொ")
uv = uv.replace(/ý/g, "ன்");
uv = uv.replace(/É/g, "ன");

uv = uv.replace(/¦Àª/g, "பௌ");
uv = uv.replace(/§À¡/g, "போ");
uv = uv.replace(/¦À¡/g, "பொ");
uv = uv.replace(/À¡/g, "பா");
uv = uv.replace(/À¢/g, "பி");
uv = uv.replace(/À£/g, "பீ");
uv = uv.replace(/Ò/g, "பு");
uv = uv.replace(/â/g, "பூ");
uv = uv.replace(/¦À/g, "பெ");
uv = uv.replace(/§À/g, "பே");
uv = uv.replace(/¨À/g, "பை");
uv = uv.replace(/¦À¡/g, "பொ")
uv = uv.replace(/ô/g, "ப்");
uv = uv.replace(/À/g, "ப");

uv = uv.replace(/¦Áª/g, "மௌ");
uv = uv.replace(/§Á¡/g, "மோ");
uv = uv.replace(/¦Á¡/g, "மொ");
uv = uv.replace(/Á¡/g, "மா");
uv = uv.replace(/Á¢/g, "மி");
uv = uv.replace(/Á£/g, "மீ");
uv = uv.replace(/Ó/g, "மு");
uv = uv.replace(/ã/g, "மூ");
uv = uv.replace(/¦Á/g, "மெ");
uv = uv.replace(/§Á/g, "மே");
uv = uv.replace(/¨Á/g, "மை");
uv = uv.replace(/¦Á¡/g, "மொ")
uv = uv.replace(/õ/g, "ம்");
uv = uv.replace(/Á/g, "ம");
uv = uv.replace(/¦Âª/g, "யௌ");
uv = uv.replace(/§Â¡/g, "யோ");
uv = uv.replace(/¦Â¡/g, "யொ");
uv = uv.replace(/Â¡/g, "யா");
uv = uv.replace(/Â¢/g, "யி");
uv = uv.replace(/Â£/g, "யீ");
uv = uv.replace(/Ô/g, "யு");
uv = uv.replace(/ä/g, "யூ");
uv = uv.replace(/¦Â/g, "யெ");
uv = uv.replace(/§Â/g, "யே");
uv = uv.replace(/¨Â/g, "யை");

uv = uv.replace(/ö/g, "ய்");
uv = uv.replace(/Â/g, "ய");

uv = uv.replace(/¦Ãª/g, "ரௌ");
uv = uv.replace(/§Ã¡/g, "ரோ");
uv = uv.replace(/¦Ã¡/g, "ரொ");
uv = uv.replace(/Ã¡/g, "ரா");
uv = uv.replace(/Ã¢/g, "ரி");
uv = uv.replace(/Ã£/g, "ரீ");
uv = uv.replace(/Õ/g, "ரு");
uv = uv.replace(/å/g, "ரூ");
uv = uv.replace(/¦Ã/g, "ரெ");
uv = uv.replace(/§Ã/g, "ரே");
uv = uv.replace(/¨Ã/g, "ரை");
uv = uv.replace(/÷/g, "ர்");
uv = uv.replace(/Ã/g, "ர");

uv = uv.replace(/¦Äª/g, "லௌ");
uv = uv.replace(/§Ä¡/g, "லோ");
uv = uv.replace(/¦Ä¡/g, "லொ");
uv = uv.replace(/Ä¡/g, "லா");
uv = uv.replace(/Ä¢/g, "லி");
uv = uv.replace(/Ä£/g, "லீ");
uv = uv.replace(/Ö/g, "லு");
uv = uv.replace(/æ/g, "லூ");
uv = uv.replace(/¦Ä/g, "லெ");
uv = uv.replace(/§Ä/g, "லே");
uv = uv.replace(/¨Ä/g, "லை");
uv = uv.replace(/¦Ä¡/g, "லொ")
uv = uv.replace(/ø/g, "ல்");
uv = uv.replace(/Ä/g, "ல");

uv = uv.replace(/¦Çª/g, "ளௌ");
uv = uv.replace(/§Ç¡/g, "ளோ");
uv = uv.replace(/¦Ç¡/g, "ளொ")
uv = uv.replace(/Ç¡/g, "ளா");
uv = uv.replace(/Ç¢/g, "ளி");
uv = uv.replace(/Ç£/g, "ளீ");
uv = uv.replace(/Ù/g, "ளு");
uv = uv.replace(/é/g, "ளூ");
uv = uv.replace(/¦Ç/g, "ளெ");
uv = uv.replace(/§Ç/g, "ளே");
uv = uv.replace(/¨Ç/g, "ளை");

uv = uv.replace(/û/g, "ள்");
uv = uv.replace(/Ç/g, "ள");
uv = uv.replace(/¦Åª/g, "வௌ");
uv = uv.replace(/§Å¡/g, "வோ");
uv = uv.replace(/¦Å¡/g, "வொ");
uv = uv.replace(/Å¡/g, "வா");
uv = uv.replace(/Å¢/g, "வி");
uv = uv.replace(/Å£/g, "வீ");
uv = uv.replace(/×/g, "வு");
uv = uv.replace(/ç/g, "வூ");
uv = uv.replace(/¦Å/g, "வெ");
uv = uv.replace(/§Å/g, "வே");
uv = uv.replace(/¨Å/g, "வை");
uv = uv.replace(/¦Å¡/g, "வொ")
uv = uv.replace(/ù/g, "வ்");
uv = uv.replace(/Å/g, "வ");


uv = uv.replace(/¦Æª/g, "ழௌ");
uv = uv.replace(/§Æ¡/g, "ழோ");
uv = uv.replace(/¦Æ¡/g, "ழொ");
uv = uv.replace(/Æ¡/g, "ழா");
uv = uv.replace(/Æ¢/g, "ழி");
uv = uv.replace(/Æ£/g, "ழீ");
uv = uv.replace(/Ø/g, "ழு");
uv = uv.replace(/è/g, "ழூ");
uv = uv.replace(/¦Æ/g, "ழெ");
uv = uv.replace(/§Æ/g, "ழே");
uv = uv.replace(/¨Æ/g, "ழை");
uv = uv.replace(/¦Æ¡/g, "ழொ")
uv = uv.replace(/ú/g, "ழ்");
uv = uv.replace(/Æ/g, "ழ");

uv = uv.replace(/¦Èª/g, "றௌ");
uv = uv.replace(/§È¡/g, "றோ");
uv = uv.replace(/¦È¡/g, "றொ");
uv = uv.replace(/È¡/g, "றா");
uv = uv.replace(/È¢/g, "றி");
uv = uv.replace(/È£/g, "றீ");
uv = uv.replace(/Ú/g, "று");
uv = uv.replace(/ê/g, "றூ");
uv = uv.replace(/¦È/g, "றெ");
uv = uv.replace(/§È/g, "றே");
uv = uv.replace(/¨È/g, "றை");
uv = uv.replace(/¦È¡/g, "றொ")
uv = uv.replace(/ü/g, "ற்");
uv = uv.replace(/È/g, "ற");

uv = uv.replace(/¦†ª/g, "ஹௌ");
uv = uv.replace(/§†¡/g, "ஹோ");
uv = uv.replace(/¦†¡/g, "ஹொ");
uv = uv.replace(/†¡/g, "ஹா");
uv = uv.replace(/†¢/g, "ஹி");
uv = uv.replace(/†£/g, "ஹீ");
uv = uv.replace(/¦†/g, "ஹெ");
uv = uv.replace(/§†/g, "ஹே");
uv = uv.replace(/¨†/g, "ஹை");
uv = uv.replace(/¦†¡/g, "ஹொ")
uv = uv.replace(/‹/g, "ஹ்");
uv = uv.replace(/†/g, "ஹ");


uv = uv.replace(/¦„ª/g, "ஷௌ");
uv = uv.replace(/§„¡/g, "ஷோ");
uv = uv.replace(/¦„¡/g, "ஷொ");
uv = uv.replace(/„¡/g, "ஷா");
uv = uv.replace(/„¢/g, "ஷி");
uv = uv.replace(/„£/g, "ஷீ");
uv = uv.replace(/¦„/g, "ஷெ");
uv = uv.replace(/§„/g, "ஷே");
uv = uv.replace(/¨„/g, "ஷை");
uv = uv.replace(/¦„¡/g, "ஷொ")
uv = uv.replace(/‰/g, "ஷ்");
uv = uv.replace(/„/g, "ஷ");


uv = uv.replace(/¦…ª/g, "ஸௌ");
uv = uv.replace(/§…¡/g, "ஸோ");
uv = uv.replace(/¦…¡/g, "ஸொ");
uv = uv.replace(/…¡/g, "ஸா");
uv = uv.replace(/…¢/g, "ஸி");
uv = uv.replace(/…£/g, "ஸீ");
uv = uv.replace(/¦…/g, "ஸெ");
uv = uv.replace(/§…/g, "ஸே");
uv = uv.replace(/¨…/g, "ஸை");
uv = uv.replace(/¦…¡/g, "ஸொ")
uv = uv.replace(/Š/g, "ஸ்");
uv = uv.replace(/…/g, "ஸ");




uv = uv.replace(/«/g, "அ");
uv = uv.replace(/¬/g, "ஆ");
uv = uv.replace(/®/g, "ஈ");
uv = uv.replace(/¯/g, "உ");
uv = uv.replace(/°/g, "ஊ");
uv = uv.replace(/±/g, "எ");
uv = uv.replace(/²/g, "ஏ");
uv = uv.replace(/³/g, "ஐ");
uv = uv.replace(/´/g, "ஒ")
uv = uv.replace(/µ/g, "ஓ");
uv = uv.replace(/¶/g, "ஔ");



uv = uv.replace(/∙/g, "ஃ");

uv = uv.replace(//g, "௧");
uv = uv.replace(//g, "௨");
uv = uv.replace(//g, "௩");
uv = uv.replace(//g, "௪");
uv = uv.replace(//g, "௫");
uv = uv.replace(//g, "௰");
uv = uv.replace(//g, "௱");
uv = uv.replace(/Ÿ/g, "௲");
uv = uv.replace(//g, "௯");
uv = uv.replace(//g, "௭");
uv = uv.replace(//g, "௮")
uv = uv.replace(//g, "௬");
uv = uv.replace(/‚/g, "ஸ்ரீ");



document.tamil_unicode_utf8.destination.value=uv;
}
//  End -->
