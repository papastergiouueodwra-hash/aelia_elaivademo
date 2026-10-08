const popupInfo={en:{checkin:{eyebrow:'ARRIVAL',title:'Welcome in.',text:'Check-in is available from 15:00. Your access details are shared before arrival. If you need anything along the way, our assistant is here to help.'},wifi:{eyebrow:'STAY CONNECTED',title:'Wi-Fi',text:'Network: AELIA GUEST\\nPassword: aelia2026\\nEnjoy complimentary high-speed Wi-Fi throughout your stay.'},checkout:{eyebrow:'DEPARTURE',title:'Before you leave.',text:'Check-out is by 11:00. Please leave the keys where you found them and make sure all windows and doors are closed.'},house:{eyebrow:'THE HOME',title:'Your house guide.',text:'You will find everything you need here — from appliances and air conditioning to parking, waste collection and simple house guidelines.'}},el:{checkin:{eyebrow:'ΑΦΙΞΗ',title:'Καλώς ήρθατε.',text:'Το check-in είναι διαθέσιμο από τις 15:00. Οι πληροφορίες πρόσβασης αποστέλλονται πριν από την άφιξή σας. Αν χρειαστείτε οτιδήποτε, ο βοηθός μας είναι εδώ για να σας εξυπηρετήσει.'},wifi:{eyebrow:'ΠΑΡΑΜΕΙΝΕΤΕ ΣΥΝΔΕΔΕΜΕΝΟΙ',title:'Wi-Fi',text:'Δίκτυο: AELIA GUEST\\nΚωδικός: aelia2026\\nΑπολαύστε δωρεάν Wi-Fi υψηλής ταχύτητας σε όλη τη διάρκεια της διαμονής σας.'},checkout:{eyebrow:'ΑΝΑΧΩΡΗΣΗ',title:'Πριν φύγετε.',text:'Το check-out γίνεται έως τις 11:00. Παρακαλούμε αφήστε τα κλειδιά εκεί όπου τα βρήκατε και βεβαιωθείτε ότι όλα τα παράθυρα και οι πόρτες είναι κλειστά.'},house:{eyebrow:'ΤΟ ΣΠΙΤΙ',title:'Οδηγός σπιτιού.',text:'Εδώ θα βρείτε όλα όσα χρειάζεστε — από τις συσκευές και τον κλιματισμό μέχρι το πάρκινγκ, την αποκομιδή απορριμμάτων και τις βασικές οδηγίες του σπιτιού.'}},de:{checkin:{eyebrow:'ANKUNFT',title:'Willkommen.',text:'Der Check-in ist ab 15:00 Uhr möglich. Ihre Zugangsinformationen werden vor der Anreise mitgeteilt. Wenn Sie unterwegs etwas benötigen, hilft Ihnen unser Assistent gerne weiter.'},wifi:{eyebrow:'VERBUNDEN BLEIBEN',title:'WLAN',text:'Netzwerk: AELIA GUEST\\nPasswort: aelia2026\\nGenießen Sie während Ihres gesamten Aufenthalts kostenloses Highspeed-WLAN.'},checkout:{eyebrow:'ABREISE',title:'Vor Ihrer Abreise.',text:'Der Check-out ist bis 11:00 Uhr möglich. Bitte legen Sie die Schlüssel zurück, wo Sie sie gefunden haben, und stellen Sie sicher, dass alle Fenster und Türen geschlossen sind.'},house:{eyebrow:'DIE UNTERKUNFT',title:'Hausführer.',text:'Hier finden Sie alles, was Sie brauchen — von Geräten und Klimaanlage bis hin zu Parkplätzen, Müllentsorgung und den wichtigsten Hausregeln.'}}};
function currentPopupLang(){return localStorage.getItem('aeliaLanguage')||'en'}

const housePopupCopy={
  en:{
    'Aelia Olive House':{tag:'01 / SIGNATURE',title:'Aelia Olive House',text:'A calm, sun-filled retreat designed for slow mornings and long evenings. Perfect for couples looking for a private, elegant escape.'},
    'Casa Verde':{tag:'02 / COASTAL',title:'Casa Verde',text:'A warm coastal home surrounded by greenery, with generous spaces for friends or a small family.'},
    'The Red Villa':{tag:'03 / PRIVATE',title:'The Red Villa',text:'A characterful villa for longer stays, with a private pool, spacious living areas and room to slow down.'},
    'Maison Aurelia':{tag:'04 / ESCAPE',title:'Maison Aurelia',text:'An intimate hideaway with a private terrace, soft interiors and everything you need for a peaceful stay.'}
  },
  el:{
    'Aelia Olive House':{tag:'01 / ΥΠΟΓΡΑΦΗ',title:'Aelia Olive House',text:'Ένα ήρεμο, φωτεινό καταφύγιο για χαλαρά πρωινά και όμορφα βράδια. Ιδανικό για ζευγάρια που αναζητούν μια ιδιωτική και κομψή απόδραση.'},
    'Casa Verde':{tag:'02 / ΠΑΡΑΚΤΙΑ',title:'Casa Verde',text:'Μια ζεστή παραθαλάσσια κατοικία μέσα στο πράσινο, με άνετους χώρους για φίλους ή μια μικρή οικογένεια.'},
    'The Red Villa':{tag:'03 / ΙΔΙΩΤΙΚΗ',title:'Η Κόκκινη Βίλα',text:'Μια ξεχωριστή βίλα για μεγαλύτερες διαμονές, με ιδιωτική πισίνα, ευρύχωρους χώρους και άνεση για χαλάρωση.'},
    'Maison Aurelia':{tag:'04 / ΑΠΟΔΡΑΣΗ',title:'Maison Aurelia',text:'Ένα ζεστό καταφύγιο με ιδιωτική βεράντα, ήρεμους εσωτερικούς χώρους και όλα όσα χρειάζεστε για μια όμορφη διαμονή.'}
  },
  de:{
    'Aelia Olive House':{tag:'01 / SIGNATURE',title:'Aelia Olive House',text:'Ein ruhiger, sonniger Rückzugsort für entspannte Morgen und lange Abende. Perfekt für Paare, die eine private, elegante Auszeit suchen.'},
    'Casa Verde':{tag:'02 / KÜSTE',title:'Casa Verde',text:'Ein warmes Zuhause an der Küste, umgeben von Grün, mit viel Platz für Freunde oder eine kleine Familie.'},
    'The Red Villa':{tag:'03 / PRIVAT',title:'Die Rote Villa',text:'Eine besondere Villa für längere Aufenthalte mit privatem Pool, großzügigen Wohnbereichen und viel Raum zum Entspannen.'},
    'Maison Aurelia':{tag:'04 / RÜCKZUG',title:'Maison Aurelia',text:'Ein gemütlicher Rückzugsort mit privater Terrasse und allem, was Sie für einen erholsamen Aufenthalt brauchen.'}
  }
};

function openProperty(i){
  const cards=[...document.querySelectorAll('.house-card')];
  const card=cards[i];
  if(!card)return;
  const img=card.querySelector('img');
  const originalName=card.querySelector('h3')?.textContent.trim()||'';
  const lang=currentPopupLang();
  const d=(housePopupCopy[lang]||housePopupCopy.en)[originalName]||(housePopupCopy.en[originalName]);
  if(!d)return;
  const modal=document.getElementById('modal');
  if(!modal)return;
  modal.classList.remove('detail-modal');
  document.getElementById('modalImage').style.display='block';
  document.getElementById('propertyBook').style.display='block';
  document.getElementById('modalImage').src=img?.src||'';
  document.getElementById('modalImage').alt=d.title;
  document.getElementById('modalEyebrow').textContent=d.tag;
  document.getElementById('modalTitle').textContent=d.title;
  document.getElementById('modalText').textContent=d.text;
  document.getElementById('propertyBook').textContent=lang==='el'?'Κάντε κράτηση →':lang==='de'?'Diese Unterkunft buchen →':'Book this home →';
  modal.classList.add('show');
}

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.house-card').forEach((card,i)=>{
    card.addEventListener('click',e=>{
      if(e.target.closest('.house-actions button')) return;
      openProperty(i);
    });
  });
});
function openInfo(k){const x=(popupInfo[currentPopupLang()]||popupInfo.en)[k];if(!x)return;const modal=document.getElementById('modal');modal.classList.remove('detail-modal');document.getElementById('modalImage').style.display='none';document.getElementById('propertyBook').style.display='none';document.getElementById('modalEyebrow').textContent=x.eyebrow;document.getElementById('modalTitle').textContent=x.title;document.getElementById('modalText').textContent=x.text;modal.classList.add('show')}function closeModal(e){if(!e||e.target.id==='modal'||e.target.classList.contains('close')){const modal=document.getElementById('modal');modal.classList.remove('show','detail-modal');}}function openChat(){document.getElementById('chat').classList.add('show')}function closeChat(){document.getElementById('chat').classList.remove('show')}function showToast(t){const x=document.getElementById('toast');x.textContent=t;x.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>x.classList.remove('show'),3000)}const chatCopy={
  en:{
    welcome:'Hello! How can I help you during your stay?',
    suggestions:{food:'Where should I eat?',checkout:'Check-out time',things:'Things to do'},
    prompts:{food:'Where should I eat nearby?',checkout:'What time is check-out?',things:'What can I do nearby?'},
    generic:'Of course! I can help with that. In a real guest guide, this assistant can be connected to the property information and local recommendations.',
    food:'Absolutely. I can recommend nearby restaurants, cafés and local favourites based on what you feel like eating.',
    checkout:'Check-out is by 11:00. If you need a little extra time, please contact your host.',
    things:'There are beaches, cafés, restaurants and local spots nearby. Ask me what you are in the mood for and I will guide you.'
  },
  el:{
    welcome:'Γεια σας! Πώς μπορώ να σας βοηθήσω κατά τη διαμονή σας;',
    suggestions:{food:'Πού να φάω;',checkout:'Ώρα αναχώρησης',things:'Τι μπορώ να κάνω;'},
    prompts:{food:'Πού μπορώ να φάω κοντά;',checkout:'Τι ώρα είναι η αναχώρηση;',things:'Τι μπορώ να κάνω κοντά;'},
    generic:'Φυσικά! Μπορώ να σας βοηθήσω με πληροφορίες για το κατάλυμα και τοπικές προτάσεις.',
    food:'Βεβαίως. Μπορώ να σας προτείνω κοντινά εστιατόρια, καφέ και τοπικές επιλογές ανάλογα με το τι θέλετε να φάτε.',
    checkout:'Η αναχώρηση είναι έως τις 11:00. Αν χρειάζεστε λίγο περισσότερο χρόνο, παρακαλούμε επικοινωνήστε με τον οικοδεσπότη.',
    things:'Υπάρχουν παραλίες, καφέ, εστιατόρια και όμορφα σημεία στην περιοχή. Πείτε μου τι έχετε διάθεση να κάνετε και θα σας καθοδηγήσω.'
  },
  de:{
    welcome:'Hallo! Wie kann ich Ihnen während Ihres Aufenthalts helfen?',
    suggestions:{food:'Wo kann ich essen?',checkout:'Check-out-Zeit',things:'Was kann ich unternehmen?'},
    prompts:{food:'Wo kann ich in der Nähe essen?',checkout:'Wann ist der Check-out?',things:'Was kann ich in der Nähe unternehmen?'},
    generic:'Natürlich! Ich kann Ihnen mit Informationen zur Unterkunft und lokalen Empfehlungen helfen.',
    food:'Gerne. Ich kann Ihnen nahegelegene Restaurants, Cafés und lokale Lieblingsorte empfehlen.',
    checkout:'Der Check-out ist bis 11:00 Uhr. Wenn Sie etwas mehr Zeit benötigen, kontaktieren Sie bitte Ihren Gastgeber.',
    things:'In der Umgebung gibt es Strände, Cafés, Restaurants und schöne Orte. Sagen Sie mir, worauf Sie Lust haben, und ich helfe Ihnen weiter.'
  }
};
function updateChatLanguage(){
  const lang=localStorage.getItem('aeliaLanguage')||'en';
  const c=chatCopy[lang]||chatCopy.en;
  const welcome=document.querySelector('.messages .bubble.bot');
  if(welcome) welcome.textContent=c.welcome;
  document.querySelectorAll('[data-chat-suggestion]').forEach(b=>{
    const k=b.dataset.chatSuggestion;
    if(c.suggestions[k]) b.textContent=c.suggestions[k];
  });
}
function askSuggestion(key){
  const lang=localStorage.getItem('aeliaLanguage')||'en';
  const c=chatCopy[lang]||chatCopy.en;
  ask(c.prompts[key]||'');
}
function ask(q){
  if(!q)return;
  const m=document.querySelector('.messages');
  m.insertAdjacentHTML('beforeend',`<div class="bubble" style="margin-left:auto;background:#596449;color:#fff">${escapeHtml(q)}</div>`);
  const a=q.toLowerCase();
  const lang=localStorage.getItem('aeliaLanguage')||'en';
  const c=chatCopy[lang]||chatCopy.en;
  let r=c.generic;
  if(a.includes('eat')||a.includes('food')||a.includes('φαγη')||a.includes('εστιατ')||a.includes('καφε')||a.includes('πού μπορώ να φάω')||a.includes('essen')||a.includes('restaurant')||a.includes('café')) r=c.food;
  else if(a.includes('check')||a.includes('αναχωρ')||a.includes('φεύγω')||a.includes('ώρα')||a.includes('ωρα')||a.includes('abreise')||a.includes('check-out')||a.includes('zeit')) r=c.checkout;
  else if(a.includes('do')||a.includes('nearby')||a.includes('τι να')||a.includes('κοντά')||a.includes('δραστηρ')||a.includes('unternehmen')||a.includes('in der nähe')||a.includes('aktiv')) r=c.things;
  setTimeout(()=>{m.insertAdjacentHTML('beforeend',`<div class="bubble bot">${r}</div>`);m.scrollTop=m.scrollHeight},450);
  document.getElementById('question').value='';
  m.scrollTop=m.scrollHeight;
}
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}

document.addEventListener('DOMContentLoaded',()=>{
  const demoDetails={
    beaches:{
      eyebrow:'01 / OUTDOORS',
      title:'Beaches & sunsets',
      text:'A few favourite places for a relaxed day by the sea. From quiet coves for swimming to beautiful sunset viewpoints, these are the spots we would suggest to our guests.'
    },
    food:{
      eyebrow:'02 / LOCAL FLAVOURS',
      title:'Eat & drink',
      text:'A selection of local restaurants, cafés and relaxed spots for breakfast, lunch, dinner or a late drink.'
    },
    parking:{
      eyebrow:'PARKING',
      title:'Private parking',
      text:'Private parking is available beside the property and is reserved for guests during their stay. Access is available from the main driveway, and the entrance should remain clear for other guests.'
    },
    transport:{
      eyebrow:'GETTING AROUND',
      title:'Getting around',
      text:'The easiest way to explore the area is by car, but taxis and local transfers are also available. Airport transfers can be arranged in advance, and our Assistant can help with directions.'
    },
    pharmacy:{
      eyebrow:'PHARMACY & ESSENTIALS',
      title:'Pharmacy & essentials',
      text:'The nearest pharmacy is approximately 4 minutes away by car, while a small convenience shop and bakery are available nearby for everyday essentials.'
    },
    emergency:{
      eyebrow:'EMERGENCY INFORMATION',
      title:'Emergency contacts',
      text:'For any serious emergency, call 112. For non-urgent questions, please contact your host, who can help you reach the appropriate local service.'
    }
  };
  const demoDetailsEl={
    beaches:{eyebrow:'01 / ΕΞΩΤΕΡΙΚΟΙ ΧΩΡΟΙ',title:'Παραλίες & ηλιοβασιλέματα',text:'Μερικά από τα αγαπημένα μας σημεία για μια χαλαρή μέρα δίπλα στη θάλασσα. Από ήσυχους κολπίσκους για κολύμπι μέχρι όμορφα σημεία για το ηλιοβασίλεμα, αυτά είναι τα μέρη που θα προτείναμε στους επισκέπτες μας.'},
    food:{eyebrow:'02 / ΤΟΠΙΚΕΣ ΓΕΥΣΕΙΣ',title:'Φαγητό & ποτό',text:'Μια επιλογή από τοπικά εστιατόρια, καφέ και χαλαρά σημεία για πρωινό, μεσημεριανό, βραδινό ή ένα ποτό αργότερα.'},
    parking:{eyebrow:'ΠΑΡΚΙΝΓΚ',title:'Ιδιωτικό πάρκινγκ',text:'Υπάρχει ιδιωτικός χώρος στάθμευσης δίπλα στο κατάλυμα και προορίζεται αποκλειστικά για τους επισκέπτες κατά τη διάρκεια της διαμονής τους. Η πρόσβαση γίνεται από την κύρια είσοδο και παρακαλούμε να διατηρείτε τον χώρο ελεύθερο.'},
    transport:{eyebrow:'ΜΕΤΑΚΙΝΗΣΕΙΣ',title:'Μετακινήσεις',text:'Ο πιο εύκολος τρόπος για να εξερευνήσετε την περιοχή είναι με αυτοκίνητο, ενώ διατίθενται επίσης ταξί και τοπικές μεταφορές. Μπορεί να οργανωθεί μεταφορά από και προς το αεροδρόμιο κατόπιν συνεννόησης.'},
    pharmacy:{eyebrow:'ΦΑΡΜΑΚΕΙΟ & ΕΙΔΗ ΠΡΩΤΗΣ ΑΝΑΓΚΗΣ',title:'Φαρμακείο & είδη πρώτης ανάγκης',text:'Το κοντινότερο φαρμακείο βρίσκεται περίπου 4 λεπτά μακριά με το αυτοκίνητο. Σε κοντινή απόσταση υπάρχει επίσης ένα μικρό κατάστημα και φούρνος για καθημερινές ανάγκες.'},
    emergency:{eyebrow:'ΠΛΗΡΟΦΟΡΙΕΣ ΕΚΤΑΚΤΗΣ ΑΝΑΓΚΗΣ',title:'Επικοινωνία σε περίπτωση ανάγκης',text:'Για οποιοδήποτε σοβαρό επείγον περιστατικό καλέστε το 112. Για μη επείγοντα θέματα, επικοινωνήστε με τον οικοδεσπότη, ο οποίος μπορεί να σας βοηθήσει να απευθυνθείτε στην κατάλληλη υπηρεσία.'}
  };
  const demoDetailsDe={
    beaches:{eyebrow:'01 / DRAUSSEN',title:'Strände & Sonnenuntergänge',text:'Einige unserer Lieblingsorte für einen entspannten Tag am Meer. Von ruhigen Buchten zum Schwimmen bis zu schönen Aussichtspunkten für den Sonnenuntergang – diese Orte empfehlen wir unseren Gästen.'},
    food:{eyebrow:'02 / LOKALE GENÜSSE',title:'Essen & Trinken',text:'Eine Auswahl an lokalen Restaurants, Cafés und entspannten Orten für Frühstück, Mittagessen, Abendessen oder einen Drink am Abend.'},
    parking:{eyebrow:'PARKEN',title:'Privater Parkplatz',text:'Neben der Unterkunft steht ein privater Parkplatz zur Verfügung, der während Ihres Aufenthalts ausschließlich unseren Gästen vorbehalten ist. Die Zufahrt erfolgt über die Haupteinfahrt.'},
    transport:{eyebrow:'UNTERWEGS',title:'Unterwegs',text:'Am einfachsten erkunden Sie die Umgebung mit dem Auto. Taxis und lokale Transfers sind ebenfalls verfügbar; Flughafentransfers können im Voraus organisiert werden.'},
    pharmacy:{eyebrow:'APOTHEKE & WICHTIGES',title:'Apotheke & wichtige Dinge',text:'Die nächste Apotheke ist etwa 4 Autominuten entfernt. In der Nähe gibt es außerdem einen kleinen Laden und eine Bäckerei für den täglichen Bedarf.'},
    emergency:{eyebrow:'NOTFALLINFORMATIONEN',title:'Notfallkontakte',text:'Bei einem ernsthaften Notfall wählen Sie 112. Bei nicht dringenden Fragen wenden Sie sich bitte an Ihren Gastgeber, der Ihnen bei der Kontaktaufnahme mit dem zuständigen Dienst helfen kann.'}
  };

  function openDemoDetail(key){
    const lang=localStorage.getItem('aeliaLanguage')||'en';
    const d=lang==='el'?demoDetailsEl[key]:(lang==='de'?demoDetailsDe[key]:demoDetails[key]);
    if(!d)return;
    const modal=document.getElementById('modal');
    modal.classList.add('detail-modal');
    document.getElementById('modalImage').style.display='none';
    document.getElementById('propertyBook').style.display='none';
    document.getElementById('modalEyebrow').textContent=d.eyebrow;
    document.getElementById('modalTitle').textContent=d.title;
    document.getElementById('modalText').textContent=d.text;
    modal.classList.add('show');
  }

  // Turn the area and essentials links into real demo interactions instead of placeholder toasts.
  const replacements=[
    {selector:'.place-text button',keys:['beaches','food']},
    {selector:'.essential-list button',keys:['parking','transport','pharmacy','emergency']}
  ];
  replacements.forEach(group=>{
    document.querySelectorAll(group.selector).forEach((button,i)=>{
      const key=group.keys[i];
      if(key) button.onclick=()=>openDemoDetail(key);
    });
  });

  // Make the whole place card feel tappable on mobile, while keeping the Explore action.
  document.querySelectorAll('.places article').forEach((card,i)=>{
    card.style.cursor='pointer';
    card.addEventListener('click',e=>{
      if(e.target.closest('button'))return;
      openDemoDetail(i===0?'beaches':'food');
    });
  });
});


/* Additional guest-guide details and host-request demo */
const guestExtraCopy={en:{location:{eyebrow:'YOUR LOCATION',title:'Find the property',text:'In a real guide, this section opens the exact property location with a map, arrival pin and directions from the airport or your previous destination.'},access:{eyebrow:'ARRIVAL & ACCESS',title:'Keys & entry',text:'Your access instructions can be shown here before arrival, including the entrance, key safe or smart-lock details and anything important to know when you first arrive.'},directions:{eyebrow:'GETTING HERE',title:'Directions & transfers',text:'Guests can find driving directions, airport transfer information, taxi details and the easiest way to reach the property from the main roads.'},host:{eyebrow:'YOUR HOST',title:'We are here to help',text:'For a real property, this area can include the host name, preferred contact method and availability hours.'},aircon:{eyebrow:'THE HOME',title:'Air conditioning',text:'Use the remote control to set a comfortable temperature. Please switch the air conditioning off when leaving the property.'},hotwater:{eyebrow:'THE HOME',title:'Hot water',text:'Hot water is available throughout the day. If you experience an issue, contact your host so it can be resolved quickly.'},towels:{eyebrow:'THE HOME',title:'Towels & linen',text:'Fresh towels and bed linen are provided. Additional towels can be requested from the host during your stay.'},kitchen:{eyebrow:'THE HOME',title:'Kitchen & appliances',text:'The kitchen is equipped for everyday cooking. Appliance instructions can be added here for the oven, coffee machine, dishwasher and other equipment.'},washing:{eyebrow:'THE HOME',title:'Washing machine',text:'Washing machine instructions, detergent information and operating hours can be added here for guests.'},cleaning:{eyebrow:'THE HOME',title:'Cleaning',text:'Cleaning schedules and optional mid-stay cleaning can be explained here, including how guests can request an additional service.'},restaurants:{eyebrow:'01 / LOCAL FAVOURITES',title:'Restaurants',text:'A real guide can feature hand-picked restaurants with a short description, price range, distance and a direct Maps button.'},coffee:{eyebrow:'02 / LOCAL FAVOURITES',title:'Coffee & breakfast',text:'Recommend your favourite bakery, brunch spot or coffee shop and help guests start their morning without searching online.'},beaches2:{eyebrow:'03 / LOCAL FAVOURITES',title:'Beaches',text:'Show guests your preferred beaches with distance, parking notes, atmosphere and a direct route.'},bars:{eyebrow:'04 / LOCAL FAVOURITES',title:'Bars & evenings',text:'Highlight relaxed bars, sunset spots and evening venues that match the character of the destination.'},towelsRequest:{eyebrow:'GUEST REQUEST',title:'Extra towels',text:'Demo request: the guest can request extra towels with one tap. In a real setup, the request can be delivered directly to the host or management system.'},cleaningRequest:{eyebrow:'GUEST REQUEST',title:'Request cleaning',text:'Demo request: the guest can ask for additional cleaning. A real guide can send the request to the property team and record it automatically.'},issue:{eyebrow:'GUEST REQUEST',title:'Report an issue',text:'Demo request: guests can report a maintenance or housekeeping issue without searching for contact details.'},question:{eyebrow:'GUEST REQUEST',title:'Ask the host',text:'Demo request: guests can send a question directly to the host, creating a smoother experience and fewer repetitive messages.'}},el:{location:{eyebrow:'Η ΤΟΠΟΘΕΣΙΑ ΣΑΣ',title:'Βρείτε το κατάλυμα',text:'Σε έναν πραγματικό οδηγό, εδώ εμφανίζεται η ακριβής τοποθεσία του καταλύματος, pin στον χάρτη και οδηγίες από το αεροδρόμιο ή το προηγούμενο σημείο σας.'},access:{eyebrow:'ΑΦΙΞΗ & ΠΡΟΣΒΑΣΗ',title:'Κλειδιά & είσοδος',text:'Εδώ μπορούν να εμφανίζονται οι οδηγίες πρόσβασης πριν από την άφιξη, όπως η είσοδος, το key safe ή η smart lock και ό,τι χρειάζεται να γνωρίζετε.'},directions:{eyebrow:'ΠΡΟΣΒΑΣΗ',title:'Οδηγίες & μεταφορές',text:'Ο επισκέπτης μπορεί να βρει οδηγίες οδήγησης, πληροφορίες για μεταφορά από το αεροδρόμιο, ταξί και τον πιο εύκολο τρόπο άφιξης στο κατάλυμα.'},host:{eyebrow:'Ο ΟΙΚΟΔΕΣΠΟΤΗΣ',title:'Είμαστε εδώ για εσάς',text:'Σε ένα πραγματικό κατάλυμα, εδώ μπορούν να εμφανίζονται το όνομα του οικοδεσπότη, ο τρόπος επικοινωνίας και οι ώρες διαθεσιμότητας.'},aircon:{eyebrow:'ΤΟ ΣΠΙΤΙ',title:'Κλιματισμός',text:'Χρησιμοποιήστε το τηλεχειριστήριο για την επιθυμητή θερμοκρασία. Παρακαλούμε απενεργοποιείτε το κλιματιστικό όταν φεύγετε από το κατάλυμα.'},hotwater:{eyebrow:'ΤΟ ΣΠΙΤΙ',title:'Ζεστό νερό',text:'Υπάρχει ζεστό νερό καθ’ όλη τη διάρκεια της ημέρας. Αν αντιμετωπίσετε κάποιο πρόβλημα, επικοινωνήστε με τον οικοδεσπότη.'},towels:{eyebrow:'ΤΟ ΣΠΙΤΙ',title:'Πετσέτες & λευκά είδη',text:'Παρέχονται καθαρές πετσέτες και κλινοσκεπάσματα. Επιπλέον πετσέτες μπορούν να ζητηθούν από τον οικοδεσπότη.'},kitchen:{eyebrow:'ΤΟ ΣΠΙΤΙ',title:'Κουζίνα & συσκευές',text:'Η κουζίνα είναι εξοπλισμένη για καθημερινή χρήση. Εδώ μπορούν να προστεθούν οδηγίες για φούρνο, καφετιέρα, πλυντήριο πιάτων και άλλες συσκευές.'},washing:{eyebrow:'ΤΟ ΣΠΙΤΙ',title:'Πλυντήριο ρούχων',text:'Εδώ μπορούν να εμφανίζονται οδηγίες χρήσης του πλυντηρίου, πληροφορίες για απορρυπαντικό και ώρες λειτουργίας.'},cleaning:{eyebrow:'ΤΟ ΣΠΙΤΙ',title:'Καθαρισμός',text:'Μπορούν να εμφανίζονται οι ημέρες καθαρισμού και η δυνατότητα επιπλέον καθαρισμού κατά τη διάρκεια της διαμονής.'},restaurants:{eyebrow:'01 / ΤΟΠΙΚΕΣ ΠΡΟΤΑΣΕΙΣ',title:'Εστιατόρια',text:'Ένας πραγματικός οδηγός μπορεί να περιλαμβάνει επιλεγμένα εστιατόρια με σύντομη περιγραφή, ενδεικτικό κόστος, απόσταση και κουμπί Χάρτη.'},coffee:{eyebrow:'02 / ΤΟΠΙΚΕΣ ΠΡΟΤΑΣΕΙΣ',title:'Καφές & πρωινό',text:'Προτείνετε το αγαπημένο σας bakery, brunch ή coffee spot και βοηθήστε τον επισκέπτη να ξεκινήσει τη μέρα του χωρίς αναζήτηση.'},beaches2:{eyebrow:'03 / ΤΟΠΙΚΕΣ ΠΡΟΤΑΣΕΙΣ',title:'Παραλίες',text:'Παρουσιάστε τις αγαπημένες σας παραλίες με απόσταση, πληροφορίες για πάρκινγκ, ατμόσφαιρα και άμεση διαδρομή.'},bars:{eyebrow:'04 / ΤΟΠΙΚΕΣ ΠΡΟΤΑΣΕΙΣ',title:'Bars & βραδινή έξοδος',text:'Αναδείξτε χαλαρά bars, σημεία για ηλιοβασίλεμα και επιλογές βραδινής εξόδου που ταιριάζουν στον προορισμό.'},towelsRequest:{eyebrow:'ΑΙΤΗΜΑ ΕΠΙΣΚΕΠΤΗ',title:'Επιπλέον πετσέτες',text:'Demo αίτημα: ο επισκέπτης ζητά επιπλέον πετσέτες με ένα πάτημα. Σε πραγματική υλοποίηση, το αίτημα μπορεί να φτάνει απευθείας στον οικοδεσπότη ή στο σύστημα διαχείρισης.'},cleaningRequest:{eyebrow:'ΑΙΤΗΜΑ ΕΠΙΣΚΕΠΤΗ',title:'Αίτημα καθαρισμού',text:'Demo αίτημα: ο επισκέπτης ζητά επιπλέον καθαρισμό. Το αίτημα μπορεί να αποστέλλεται αυτόματα στην ομάδα του καταλύματος.'},issue:{eyebrow:'ΑΙΤΗΜΑ ΕΠΙΣΚΕΠΤΗ',title:'Αναφορά προβλήματος',text:'Demo αίτημα: ο επισκέπτης μπορεί να αναφέρει πρόβλημα συντήρησης ή καθαριότητας χωρίς να ψάχνει στοιχεία επικοινωνίας.'},question:{eyebrow:'ΑΙΤΗΜΑ ΕΠΙΣΚΕΠΤΗ',title:'Επικοινωνία με οικοδεσπότη',text:'Demo αίτημα: ο επισκέπτης μπορεί να στείλει ερώτηση απευθείας στον οικοδεσπότη, μειώνοντας τα επαναλαμβανόμενα μηνύματα.'}},de:{location:{eyebrow:'IHRE LAGE',title:'Unterkunft finden',text:'In einem echten Guide öffnet dieser Bereich den genauen Standort der Unterkunft mit Karten-Pin und Anfahrt vom Flughafen oder Ihrem vorherigen Ziel.'},access:{eyebrow:'ANKUNFT & ZUGANG',title:'Schlüssel & Eingang',text:'Hier können die Zugangsinformationen vor der Anreise angezeigt werden, einschließlich Eingang, Schlüsselsafe oder Smart Lock.'},directions:{eyebrow:'ANREISE',title:'Anfahrt & Transfers',text:'Gäste finden hier Fahrtrouten, Flughafentransfers, Taxi-Informationen und den einfachsten Weg zur Unterkunft.'},host:{eyebrow:'IHR GASTGEBER',title:'Wir sind für Sie da',text:'In einer echten Unterkunft können hier Name, bevorzugter Kontaktweg und Erreichbarkeitszeiten des Gastgebers angezeigt werden.'},aircon:{eyebrow:'DIE UNTERKUNFT',title:'Klimaanlage',text:'Stellen Sie mit der Fernbedienung eine angenehme Temperatur ein und schalten Sie die Klimaanlage beim Verlassen der Unterkunft aus.'},hotwater:{eyebrow:'DIE UNTERKUNFT',title:'Warmwasser',text:'Warmwasser steht den ganzen Tag zur Verfügung. Bei Problemen kontaktieren Sie bitte Ihren Gastgeber.'},towels:{eyebrow:'DIE UNTERKUNFT',title:'Handtücher & Bettwäsche',text:'Frische Handtücher und Bettwäsche werden bereitgestellt. Zusätzliche Handtücher können beim Gastgeber angefragt werden.'},kitchen:{eyebrow:'DIE UNTERKUNFT',title:'Küche & Geräte',text:'Die Küche ist für den täglichen Gebrauch ausgestattet. Anleitungen für Backofen, Kaffeemaschine, Geschirrspüler und weitere Geräte können hier ergänzt werden.'},washing:{eyebrow:'DIE UNTERKUNFT',title:'Waschmaschine',text:'Hier können Bedienungshinweise, Waschmittelinformationen und Nutzungszeiten ergänzt werden.'},cleaning:{eyebrow:'DIE UNTERKUNFT',title:'Reinigung',text:'Reinigungszeiten und optionale Zwischenreinigung können hier erklärt werden.'},restaurants:{eyebrow:'01 / LOKALE FAVORITEN',title:'Restaurants',text:'Ein echter Guide kann ausgewählte Restaurants mit Kurzbeschreibung, Preisniveau, Entfernung und direktem Karten-Button zeigen.'},coffee:{eyebrow:'02 / LOKALE FAVORITEN',title:'Kaffee & Frühstück',text:'Empfehlen Sie Ihre Lieblingsbäckerei, einen Brunch-Spot oder ein Café und erleichtern Sie den Gästen den Start in den Tag.'},beaches2:{eyebrow:'03 / LOKALE FAVORITEN',title:'Strände',text:'Zeigen Sie Ihre bevorzugten Strände mit Entfernung, Parkplatz-Hinweisen, Atmosphäre und direkter Route.'},bars:{eyebrow:'04 / LOKALE FAVORITEN',title:'Bars & Abende',text:'Heben Sie entspannte Bars, Sunset-Spots und Abend-Locations hervor, die zum Reiseziel passen.'},towelsRequest:{eyebrow:'GÄSTEANFRAGE',title:'Zusätzliche Handtücher',text:'Demo-Anfrage: Gäste können zusätzliche Handtücher mit einem Tap anfordern. In einer echten Lösung kann die Anfrage direkt an Gastgeber oder Verwaltung gesendet werden.'},cleaningRequest:{eyebrow:'GÄSTEANFRAGE',title:'Reinigung anfragen',text:'Demo-Anfrage: Gäste können zusätzliche Reinigung anfordern. Die Anfrage kann automatisch an das Unterkunftsteam gesendet werden.'},issue:{eyebrow:'GÄSTEANFRAGE',title:'Problem melden',text:'Demo-Anfrage: Gäste können ein Wartungs- oder Reinigungsproblem melden, ohne Kontaktdaten suchen zu müssen.'},question:{eyebrow:'GÄSTEANFRAGE',title:'Gastgeber fragen',text:'Demo-Anfrage: Gäste können eine Frage direkt an den Gastgeber senden und so wiederholte Nachrichten reduzieren.'}}};
function openGuestExtra(key){const lang=currentPopupLang();const d=(guestExtraCopy[lang]||guestExtraCopy.en)[key];if(!d)return;const modal=document.getElementById('modal');modal.classList.add('detail-modal');document.getElementById('modalImage').style.display='none';document.getElementById('propertyBook').style.display='none';document.getElementById('modalEyebrow').textContent=d.eyebrow;document.getElementById('modalTitle').textContent=d.title;document.getElementById('modalText').textContent=d.text;modal.classList.add('show')}

/* Functional guest request flow */
const requestCopy={
en:{
towelsRequest:{eyebrow:'GUEST REQUEST',title:'Extra towels',quantityLabel:'How many extra towels?',placeholder:'Anything else we should know?',button:'Send request',success:'Your request has been sent.',successText:'The host team can now see your request.'},
cleaningRequest:{eyebrow:'GUEST REQUEST',title:'Request cleaning',placeholder:'Preferred day or any details?',button:'Send request',success:'Cleaning request sent.',successText:'The host team can now see your request.'},
issue:{eyebrow:'GUEST REQUEST',title:'Report an issue',placeholder:'Please describe the issue...',button:'Report issue',success:'Issue reported.',successText:'The host team can now see your report.'},
question:{eyebrow:'GUEST REQUEST',title:'Contact the host',placeholder:'Write your question...',button:'Send message',success:'Message sent.',successText:'The host team can now see your message.',call:'Call host',callbackLabel:'Or leave your phone number and the host can call you back',phonePlaceholder:'Your phone number'}
},
el:{
towelsRequest:{eyebrow:'ΑΙΤΗΜΑ ΕΠΙΣΚΕΠΤΗ',title:'Επιπλέον πετσέτες',quantityLabel:'Πόσες επιπλέον πετσέτες χρειάζεστε;',placeholder:'Κάτι ακόμη που πρέπει να γνωρίζουμε;',button:'Αποστολή αιτήματος',success:'Το αίτημα στάλθηκε.',successText:'Η ομάδα του καταλύματος μπορεί πλέον να δει το αίτημά σας.'},
cleaningRequest:{eyebrow:'ΑΙΤΗΜΑ ΕΠΙΣΚΕΠΤΗ',title:'Αίτημα καθαρισμού',placeholder:'Προτιμώμενη ημέρα ή κάποια λεπτομέρεια;',button:'Αποστολή αιτήματος',success:'Το αίτημα καθαρισμού στάλθηκε.',successText:'Η ομάδα του καταλύματος μπορεί πλέον να δει το αίτημά σας.'},
issue:{eyebrow:'ΑΙΤΗΜΑ ΕΠΙΣΚΕΠΤΗ',title:'Αναφορά προβλήματος',placeholder:'Περιγράψτε το πρόβλημα...',button:'Αναφορά προβλήματος',success:'Το πρόβλημα αναφέρθηκε.',successText:'Η ομάδα του καταλύματος μπορεί πλέον να δει την αναφορά σας.'},
question:{eyebrow:'ΑΙΤΗΜΑ ΕΠΙΣΚΕΠΤΗ',title:'Επικοινωνία με οικοδεσπότη',placeholder:'Γράψτε την ερώτησή σας...',button:'Αποστολή μηνύματος',success:'Το μήνυμα στάλθηκε.',successText:'Η ομάδα του καταλύματος μπορεί πλέον να δει το μήνυμά σας.',call:'Καλέστε τον οικοδεσπότη',callbackLabel:'Ή αφήστε το τηλέφωνό σας για να σας καλέσει ο οικοδεσπότης',phonePlaceholder:'Το τηλέφωνό σας'}
},
de:{
towelsRequest:{eyebrow:'GÄSTEANFRAGE',title:'Zusätzliche Handtücher',quantityLabel:'Wie viele zusätzliche Handtücher benötigen Sie?',placeholder:'Gibt es noch etwas?',button:'Anfrage senden',success:'Ihre Anfrage wurde gesendet.',successText:'Das Unterkunftsteam kann Ihre Anfrage jetzt sehen.'},
cleaningRequest:{eyebrow:'GÄSTEANFRAGE',title:'Reinigung anfragen',placeholder:'Bevorzugter Tag oder weitere Details?',button:'Anfrage senden',success:'Reinigungsanfrage gesendet.',successText:'Das Unterkunftsteam kann Ihre Anfrage jetzt sehen.'},
issue:{eyebrow:'GÄSTEANFRAGE',title:'Problem melden',placeholder:'Bitte beschreiben Sie das Problem...',button:'Problem melden',success:'Problem gemeldet.',successText:'Das Unterkunftsteam kann Ihre Meldung jetzt sehen.'},
question:{eyebrow:'GÄSTEANFRAGE',title:'Gastgeber kontaktieren',placeholder:'Schreiben Sie Ihre Frage...',button:'Nachricht senden',success:'Nachricht gesendet.',successText:'Das Unterkunftsteam kann Ihre Nachricht jetzt sehen.',call:'Gastgeber anrufen',callbackLabel:'Oder hinterlassen Sie Ihre Telefonnummer für einen Rückruf',phonePlaceholder:'Ihre Telefonnummer'}
}};
let activeRequestKey=null;
function openGuestRequest(key){
  const lang=currentPopupLang();
  const d=(requestCopy[lang]||requestCopy.en)[key];
  if(!d)return;
  activeRequestKey=key;
  const modal=document.getElementById('modal');
  modal.classList.add('detail-modal');
  document.getElementById('modalImage').style.display='none';
  document.getElementById('propertyBook').style.display='none';
  document.getElementById('modalEyebrow').textContent=d.eyebrow;
  document.getElementById('modalTitle').textContent=d.title;
  const quantityField=key==='towelsRequest'
    ? '<label class="request-quantity-label" for="guestRequestQuantity">'+d.quantityLabel+'</label><select id="guestRequestQuantity" required><option value="">—</option>'+[1,2,3,4,5,6,7,8,9,10].map(n=>'<option value="'+n+'">'+n+'</option>').join('')+'</select>'
    : '';
  const contactField=key==='question'
    ? '<a class="host-call-button" href="tel:+306900000000">'+d.call+' · +30 690 000 0000</a><div class="host-callback-block"><label for="guestRequestPhone">'+d.callbackLabel+'</label><input id="guestRequestPhone" type="tel" placeholder="'+d.phonePlaceholder+'"></div>'
    : '';
  document.getElementById('modalText').innerHTML=
    '<form class="guest-request-form" onsubmit="submitGuestRequest(event)">'+
    '<input id="guestRequestBooking" required type="text" placeholder="'+(lang==='el'?'Αριθμός κράτησης':lang==='de'?'Buchungsnummer':'Booking number')+'">'+
    quantityField+
    contactField+
    '<textarea id="guestRequestMessage" placeholder="'+d.placeholder+'"></textarea>'+
    '<button type="submit">'+d.button+' <span>→</span></button>'+
    '</form>';
  modal.classList.add('show');
}
function submitGuestRequest(e){
  e.preventDefault();
  const lang=currentPopupLang();
  const d=(requestCopy[lang]||requestCopy.en)[activeRequestKey];
  const bookingNumber=document.getElementById('guestRequestBooking').value.trim();
  const message=document.getElementById('guestRequestMessage').value.trim();
  const quantityEl=document.getElementById('guestRequestQuantity');
  const quantity=quantityEl?Number(quantityEl.value):null;
  const phoneEl=document.getElementById('guestRequestPhone');
  const callbackPhone=phoneEl?phoneEl.value.trim():'';
  const property=selectedProperty?.name||'Aelia Suites';
  const requests=JSON.parse(localStorage.getItem('aeliaGuestRequests')||'[]');
  const request={type:activeRequestKey,property,bookingNumber,message,quantity,callbackPhone,createdAt:new Date().toISOString(),status:'new'};
  requests.push(request);
  localStorage.setItem('aeliaGuestRequests',JSON.stringify(requests));
  window.dispatchEvent(new CustomEvent('aeliaGuestRequest',{detail:request}));
  document.getElementById('modalEyebrow').textContent=d.eyebrow;
  document.getElementById('modalTitle').textContent=d.success;
  const extra=quantity?(lang==='el'?' Ζητήσατε '+quantity+' επιπλέον πετσέτες.':lang==='de'?' Sie haben '+quantity+' zusätzliche Handtücher angefragt.':' You requested '+quantity+' extra towels.'):'';
  document.getElementById('modalText').innerHTML='<div class="request-success"><span>✓</span><p>'+d.successText+extra+'</p></div>';
}

document.addEventListener('DOMContentLoaded',updateChatLanguage);
