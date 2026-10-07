const info={checkin:{eyebrow:'ARRIVAL',title:'Welcome in.',text:'Check-in is available from 15:00. Your access details are shared before arrival. If you need anything along the way, our assistant is here to help.'},wifi:{eyebrow:'STAY CONNECTED',title:'Wi-Fi',text:'Network: AELIA GUEST\nPassword: aelia2026\nEnjoy complimentary high-speed Wi-Fi throughout your stay.'},checkout:{eyebrow:'DEPARTURE',title:'Before you leave.',text:'Check-out is by 11:00. Please leave the keys where you found them and make sure all windows and doors are closed.'},house:{eyebrow:'THE HOME',title:'Your house guide.',text:'You will find everything you need here — from appliances and air conditioning to parking, waste collection and simple house guidelines.'}};function openInfo(k){const x=info[k];document.getElementById('modalEyebrow').textContent=x.eyebrow;document.getElementById('modalTitle').textContent=x.title;document.getElementById('modalText').textContent=x.text;document.getElementById('modal').classList.add('show')}function closeModal(e){if(!e||e.target.id==='modal'||e.target.classList.contains('close')){const modal=document.getElementById('modal');modal.classList.remove('show','detail-modal');}}function openChat(){document.getElementById('chat').classList.add('show')}function closeChat(){document.getElementById('chat').classList.remove('show')}function showToast(t){const x=document.getElementById('toast');x.textContent=t;x.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>x.classList.remove('show'),3000)}function ask(q){if(!q)return;const m=document.querySelector('.messages');m.insertAdjacentHTML('beforeend',`<div class="bubble" style="margin-left:auto;background:#596449;color:#fff">${escapeHtml(q)}</div>`);const a=q.toLowerCase();const lang=localStorage.getItem('aeliaLanguage')||'en';const el=lang==='el';const de=lang==='de';let r=de?'Natürlich! Ich kann Ihnen gerne helfen. In einem echten digitalen Gästeführer kann dieser Assistent mit den Informationen zur Unterkunft und lokalen Empfehlungen verbunden werden.':el?'Φυσικά! Μπορώ να σας βοηθήσω. Σε έναν πραγματικό οδηγό επισκεπτών, ο βοηθός μπορεί να συνδεθεί με τις πληροφορίες του καταλύματος και τις τοπικές προτάσεις.':'Of course! I can help with that. In a real guest guide, this assistant can be connected to the property information and local recommendations.';if(a.includes('eat')||a.includes('φαγη')||a.includes('εστιατ')||a.includes('καφε')||a.includes('essen')||a.includes('restaurant')||a.includes('café'))r=de?'Gerne. Ich kann Ihnen nahegelegene Restaurants, Cafés und lokale Lieblingsorte empfehlen.':'Absolutely. I can recommend nearby restaurants, cafés and local favourites based on what you feel like eating.';if(a.includes('check')||a.includes('αναχωρ')||a.includes('φεύγω')||a.includes('ωρα')||a.includes('abreise')||a.includes('check-out')||a.includes('zeit'))r=de?'Der Check-out ist bis 11:00 Uhr. Wenn Sie etwas mehr Zeit benötigen, kontaktieren Sie bitte Ihren Gastgeber.':el?'Η αναχώρηση είναι έως τις 11:00. Αν χρειάζεστε λίγο περισσότερο χρόνο, παρακαλούμε επικοινωνήστε με τον οικοδεσπότη.':'Check-out is by 11:00. If you need a little extra time, please contact your host.';if(a.includes('do')||a.includes('nearby')||a.includes('τι να')||a.includes('κοντά')||a.includes('δραστηρ')||a.includes('unternehmen')||a.includes('in der nähe')||a.includes('aktiv'))r=de?'In der Umgebung gibt es Strände, Cafés, Restaurants und schöne Orte. Sagen Sie mir, worauf Sie Lust haben, und ich helfe Ihnen weiter.':el?'Υπάρχουν παραλίες, καφέ, εστιατόρια και όμορφα σημεία στην περιοχή. Πείτε μου τι έχετε διάθεση να κάνετε και θα σας καθοδηγήσω.':'There are beaches, cafés, restaurants and local spots nearby. Ask me what you are in the mood for and I will guide you.';setTimeout(()=>{m.insertAdjacentHTML('beforeend',`<div class="bubble bot">${r}</div>`);m.scrollTop=m.scrollHeight},450);document.getElementById('question').value='';m.scrollTop=m.scrollHeight}function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]))}

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
