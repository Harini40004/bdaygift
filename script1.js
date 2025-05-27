const messages = [
  "Chlo,Nee enna neriya love panra atha vida adhigama unna naa love pannanum...Love you more till my last breath💖",
  "inu one year than da thangomeyyy sikkaro long distance to short distance , short distance to ore v2 la irupom okay va! Don't worryy🥺💞",
  "Smile every second, my thango! Your happiness means everything to me. 😊",
  "Close your eyes and hug me tighter🤗❤️",
  "If you need me,I'm always there for you and nee epothumey nayabagam vachiko naa unakaga thn iruken okay va!😌💕",
  "comedyyy...siripu varla nalum sirikanum purichitha😁",
  "kiss venuma? enga venum thangathuku lip la venuma? kanna moodu , kitta va and kiss me...💋",
  "Motivation : nee naa papa namba v2 namba car ithu ellam venuna veela venu athuku padikanum...that's it!💕 Naa epavumey unaku support ah irupen okayy vaaa!",
  "Even across miles, you're never alone. I'm right here in your heart. 💞",
  "Thukkam varlana enaku call pannu naa kadha soluren purichitha insta pakka poga kudathu..en mela paduthuko da pattuma😴",
  "Bore adikuthaaa romba poi padi da mairu odu🏃",
  "Kovam vantha kanna mudi namba happy ah irutha ah..jolly ah pesunatha yosi.. kovam poiru kovam vantha negative yosikiratha vida postive ah yosicha kovam kandipa poirum ithu namba rendu perumey mathika vendiya vishyam💓",
  "Unna kandipa doctor kutitu poi itha seri pannuven...un thala vali ku oru full stop vaikanum but temporary ah oru solution 'atha pathi yosikatha' ithu nee solurathu than oru veela un thala vali ennala etuthuka mudicha kandipa naa atha thangipen uankagaaa..🥺❤️",
  "Bad dayyy! don't worry it's a life lesson and nee oru lucky charm so happy ah iru da pattumaaaa😘",
  "Jealous! naa epavum solurathu than..itha ulagathula ethana paiyan vanthalum unna vida best yaralaium iruka mudiyathu nee purichi kitta alavuku enna yarum purichika mudiyathu..🥀❤️Alaga...you are my only comfortzone",
  "Life pathu naa thn adhigama bayapuduven...nee enna vida mentally strong but pei ah pathu bayapuduva😂 kavala padatha chlo naa un kudave thn irupen chuchu pona kuda kudave varuven..",
  "Itha ulagameyy una thappu sonnalum un kuda naa irupenn... una thituven ana vittu kuduka maten...love you so muchhh..💙",
  "Already neriya plan pannitom...nee+naa=papa❤️ un kuda enga iruthalum enaku athu sorgam thn",
  "Fav part : chlomeyy Gajii me only for you!! ithula romba vena call pannu pesalam!❤️",
  "Happy Birthdayyyyy My love! My Gem...💞"
];

function openNote(index) {
  document.getElementById("noteText").textContent = messages[index];
  document.getElementById("noteModal").style.display = "flex";
}

function closeNote() {
  document.getElementById("noteModal").style.display = "none";
}
