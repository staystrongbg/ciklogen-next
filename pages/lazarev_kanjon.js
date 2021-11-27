import data from '../data';
import { useState } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import { Date } from '../components/date';
import { Intro } from '../components/intro';
import { Author } from '../components/author';
import styles from '../styles/story.module.css';
import Pasus from '../components/storyPasus';
import Row from '../components/imageRow';

const Lazin = () => {
  const [showModal, setShowModal] = useState(false);
  const info = data.filter((item) => item.name === 'lazarev kanjon');
  console.log(info);

  return (
    <>
      <Header info={info[0]} />
      <Date date={info[0].datum} />
      <div className={styles.story}>
        <Intro intro={info[0].intro} />
        <Author autor={info[0].autor} />
        {showModal && <Modal />}
        <Pasus
          dropcap='O'
          text='dluka da se putuje mimo glavnih puteva je bila i dobra i loša...Loša zato što smo do Zlota putovali do 17h, a
        dobra jer
        smo stali gde god smo hteli. Uspeli smo i da promašimo put prateći mapu Jugoslavije iz 1977. Naime, tamo negde od
        Resavice navodno postoji put koji vodi pravo ka Zlotu, medjutim ispostavilo se da je taj put neprohodan za moj
        auto, što
        je mana putovanja autom. Malo smo se okretali kod Pasuljanskih livada, ka Senjskom rudniku, usput pokupili
        stopera pa od
        njega dobili informacije. Najzad pogodili smo put koji iz lokalnih sela vodi preko Crnog vrha ka Žagubici.'
        />
        <Row image='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003179/ciklogen/lazin1_oc878y.jpg' />
        <Row
          column
          image1='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003179/ciklogen/lazin2_pba5iz.jpg'
          image2='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003179/ciklogen/lazin3_selaya.jpg'
        />
        <Pasus
          text=' Dalje put pored Brestovačke banje skreće oštro levo ka Zlotu. Tim putem se ide nekih 20ak km do Lazareve
        pećine gde ćemo se na brzaka prepakovati i promeniti prevozno sredstvo.

        Oko 17h stižemo i do našeg odredišta, nemamo mnogo vremena pa nam valja ubrzati prepakivanje i uputiti se nekud
        i naći mesto za kamp. Posle kratkog ispitivanja terena odlučili smo da krenemo ka Velikom, centralnom vidikovcu
        do kojeg vodi betonska stazica, ali je prilično nezgodna za bajs. Nagib je veliki a stazica neravna i uska, te
        smo gurali.'
        />

        <Row image='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003179/ciklogen/lazin4_r4ko6s.jpg' />
        <Pasus
          text='Pećinu tog dana nismo stigli da ragledamo pošto je otvorena do 16h.
        Već je sunce zašlo kada smo stigli do vidikovca, a imali smo sreće da tu i nadjemo lepo mesto za prenoćište,
        neposredno ispod vidikovca.'
        />
        <Row
          column
          image1='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003179/ciklogen/lazin5_rjigzc.jpg'
          image2='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003179/ciklogen/lazin6_i0bcd7.jpg'
        />

        <Pasus
          text='Lazin kanjon je odavde predivan, Visina vidikovca je nešto preko 400m. Biti ovde i okružen samo orlovima je
        čudesan
        osećaj! Osećaj potpune spokojnosti i sreće. Čula su izoštrena i upijaju svaki zvuk svaku sliku u datom trenutku
        koji se
        nikada više neće ponoviti. Kanjon je kuća mnogih vrsta životinja koje su i jedini stanovnici, ovo mesto je
        njihovo. A ja
        sam tu bez pitanja i trudiću se da ne uznemiravam. Zahvalan sam što mi je dozvoljeno da budem tu. Ostali smo u
        tišini na
        vidikovcu dok se potpuno nije smračilo, svim čulima uživajući u zvuku vetra i toplom avgustovskom vazduhu koji
        je prava
        zamena za gradsku vrevu...Kamen je topao tokom cele noći i lepo smo zašuškani u Lazinom kanjon koji se izdiže
        iznad i
        čuva nas.
        Probudio sam se oko 4h ujutro, malo pred izlazak sunca. Ubrzo se i Maksa probudio pa smo zajedno prisustvovali
        još
        jednoj predstavi koju nam je Lazin kanjon pripremio - Izlazak Sunca. Osećaj je kao da je na dohvat ruke, ništa
        izmedju
        mene i njega.'
        />
        <Row
          column
          image1='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003179/ciklogen/lazin7_f5welu.jpg'
          image2='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003180/ciklogen/lazin8_jys6vn.jpg'
        />

        <Pasus
          text='Cela avantura je bila jako spontana. Ne mogu ni da kažem da smo bili dobro organizovani i pripremljeni. Ali
        Lazarev
        kanjon te zove sebi, i ne možeš da ga odbiješ. Pa smo ujutro krenuli dalje. Uputili smo se stazicom koju smo
        prošli na
        putu ka vidikovcu. Kojom je moguće ići biciklom kratko, jer postaje neprohodna i bajs je moguće samo nositi.
        Bili smo
        prilično natovareni stvarima koje su nam otežavale kretanje pa smo odlučili da ih ostavimo u žbunu i nastavili
        samo sa
        bajsevima u nadi da ćemo mozda ipak od nekog momenta moći da zapedaliramo. Medjutim stazica je postala još
        grublja. Sada
        je kamen postao krupan i uz veliki uspon. pa smo i bajseve ubrzo napustili, ali kanjon nas zove dalje... posle
        15min
        hoda dolazimo i do makadamskog puta tu idemo levo. Stižemo i do drugog vidikovca koji nije uredjen kao prvi ali
        jednako
        predivan. Nije bilo teško odlučiti, idemo dalje, naravno. Sustigao nas je traktorista posle prve krivine i
        povezao nas
        do skretanja za Dubašnicu,nekih 5km od stazice na kojoj smo napustili opremu, i podelio sa nama pola svoje flaše
        vode.'
        />
        <Pasus
          text='Posle 20min spusta kroz prelepe pašnjake došli smo do Mikuljske reke, koja nas je okrepila. Tad se već bližilo
        podne.
        Teška srca smo krenuli nazad, 30ak minuta hoda i bili smo na makadamu. Sunce je bilo veoma jako, pa se brzo gubi
        voda pa
        i snaga. Kao poručeno nailazi naše prevozno sredstvo - traktor. Dva meštana na traktoru punom drva su bili
        velikodušni
        da nas vrate do naše stazice...Na prikolici je bilo ekstremno neudobno ali nismo baš u poziciji da samo
        zamišljao da
        plutam na vodi, lak kao perce. Stižemo i do stazice...Sada je potrebno da se sjurimo niz nju po torbe, koje su
        malo
        dublje pa potom po bajseve. To se desilo brže nego što sam očekivao. I Maksa je za to najzaslužniji. Opet smo na
        vrhu
        naše stazice, ovoga puta sa opremom!'
        />
        <Pasus
          text='Spust do Lazareve pećine gde je parkiran auto je bio efikasan i apsolutno predivan posle traktorske prikolice
        koju ću
        dugo pamtiti jer mi je ostavila znak na donjem delu kičme i zadnjici.
        Divan momenat kada pristižemo kod pećine, oblačimo suvu i čistu odeću i odlazimo u restoran preko reke, gde je
        palo prvo
        pivo i prvi pravi ručak. Za stolom Maksa iznosi predlog da večeras spavamo na Borskom jezeru, što ja i
        prihvatam, kao
        dobra prilika da se odmorimo pre nego što nastavimo dalje.'
        />
        <Row
          column
          image1='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003180/ciklogen/lazin9_mbyoju.jpg'
          image2='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003181/ciklogen/lazin10_micxwu.jpg'
        />
        <Pasus text='Usput smo zastali da se osvežimo na prelepom Krupajskom vrelu.' />
        <Row
          column
          image1='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003181/ciklogen/lazin10_micxwu.jpg'
          image2='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003181/ciklogen/lazin11_eztzy6.jpg'
        />
        <Pasus
          text='        Pre podneva smo bili u Lisinama, Ovoga puta nismo odmah seli na bajseve, već smo prošetali do Velikog
        Buka, koje jeste fascinantan ali lično sam se malo razočarao pošto je privatizovan. U restoranu koji
        zatvara vodopad smo dobili informacije o sledećoj destinaciji, sada je to Vinatovača, prašuma koja se
        nalazi negde u klisuri Resave, Južni Kučaj, posle sela Strmosten na putu ka Krnjoj Jeli.
      </p>'
        />
        <Row
          column
          image1='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003181/ciklogen/lazin13_x6mgks.jpg'
          image2='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003181/ciklogen/lazin12_qt36t3.jpg'
        />
        <Pasus
          text='        Ostavljamo auto i bajsevima krećemo put prašume. Posle 13km vožnje prelepim makadamskim putom, prvo kroz klisuru
        Resave, pa zatim kroz Ravnu Reku stižemo do Vinatovače u mrak. Nekako smo uz baterijske lampe uspeli da
        podignemo kamp
        na brzaka i proverimo koliko je to bilo moguće kamp mesto, koje se nalazilo uz reku i jako blizu izvoru pijaće
        vode.'
        />
        <Row
          column
          image1='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003181/ciklogen/lazin12_qt36t3.jpg'
          image2='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003181/ciklogen/lazin12_qt36t3.jpg'
        />
        <Pasus
          text='        Ujutro smo već pronašli bolje mesto za šatore i pošto nam se ovde jako svidelo odlučili da ispitamo makadamski
        put uz
        reku. Vozili smo uz reku u prelepoj hladovini, u tišini, nekih 2h. Na tom putu nije bilo saobraćaja tako da se
        zaista
        moglo prepustiti ambijentu. Došli smo do raskrsnice puteva za selo Vrtačeje desno i Kločanica levo, tj dokle god
        je put
        išao uzbrdo, a to je bilo još nekih 1km ka Kločanici.'
        />
        <Row
          column
          image1='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003181/ciklogen/lazin14_lfntal.jpg'
          image2='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003181/ciklogen/lazin14_lfntal.jpg'
        />
        <Pasus text='       Tu su pale i poslednje fotografije, baterija nas je sprečila da napravimo prvu i jedinu zajedničku fotku...' />
        <Row image='https://res.cloudinary.com/dvpyf1a8e/image/upload/v1638003181/ciklogen/lazin15_ibfolg.jpg' />
        <Pasus
          text='Spust nazad je trajao više od jednog sata. Blaga nizbrdica, put načičkam baricama čiste vode,
        koje su odlično osvežavale i ništa nije stajalo na putu do kampa. Po povratku dan smo priveli kraju
        uz supicu,čaj od sveže nane koju smo tu ubrali. Sutra smo se polako spakovali i oprostili se od
        Vinatovače, obećavši da ćemo opet doći'
        />
      </div>
    </>
  );
};

export default Lazin;
