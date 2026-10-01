const historyData = [
    { 
        id: "1", 
        title: "Przyczyny i skutki wojny krymskiej", 
        titleKeywords: ["wojna krymska", "wojna na krymie", "walki na krymie", "krymska"],
        desc: "Konflikt mocarstw wywołany ekspansją Rosji, który zakończył się jej klęską i osłabieniem pozycji nad Morzem Czarnym. <span style='color: #FFD700;'>(klęska i osłabienie Rosji)</span>", 
        descKeywords: ["przegrana rosji", "morze czarne", "flota", "turkowie", "sewastopol"]
    },
    { 
        id: "2", 
        title: "Sytuacja polityczna przed wojną krymską", 
        titleKeywords: ["przed wojną krymską", "geneza wojny krymskiej", "dlaczego powstrzymali rosję"],
        desc: "Wzrost potęgi Rosji i słabość Turcji wywołały obawy Anglii oraz Francji o zachowanie równowagi sił w Europie. <span style='color: #FFD700;'>(obawy Anglii i Francji o równowagę sił)</span>", 
        descKeywords: ["wzrost potęgi", "turcja chory człowiek europy", "cieśniny", "mocarstwa"]
    },
    { 
        id: "3", 
        title: "Ruch Risorgimento", 
        titleKeywords: ["risorgimento", "odrodzenie włoch", "włoski ruch narodowy", "ruch zjednoczeniowy"],
        desc: "Włoski ruch narodowy mający na celu wyzwolenie kraju spod obcych wpływów i zjednoczenie rozbitych państewek. <span style='color: #FFD700;'>(wyzwolenie i zjednoczenie Włoch)</span>", 
        descKeywords: ["walka o niepodległość", "unia włoch", "półwysep apeniński", "włosi"]
    },
    { 
        id: "4", 
        title: "Główne ośrodki zjednoczenia Włoch", 
        titleKeywords: ["ośrodki zjednoczenia włoch", "kto jednoczył włochy", "skąd zjednoczenie włoch"],
        desc: "Proces zjednoczenia opierał się na dyplomacji Piemontu pod wodzą Cavoura oraz na działaniach militarnych Garibaldiego. <span style='color: #FFD700;'>(dyplomacja Piemontu i działania Garibaldiego)</span>", 
        descKeywords: ["królestwo sardynii", "czerwone koszule", "wyprawa tysiąca", "turyn"]
    },
    { 
        id: "5", 
        title: "Bitwy pod Magentą i Solferino", 
        titleKeywords: ["magenta i solferino", "bitwa pod solferino", "bitwa pod magentą", "solferino 1859"],
        desc: "Krwawe starcia z 1859 roku zakończone porażką Austrii, które skłoniły Henry'ego Dunanta do stworzenia Czerwonego Krzyża. <span style='color: #FFD700;'>(porażka Austrii i stworzenie Czerwonego Krzyża)</span>", 
        descKeywords: ["pomoc rannym", "wojna z austrią", "henry dunant", "krwawa bitwa"]
    },
    { 
        id: "6", 
        title: "Rola Państwa Kościelnego w zjednoczeniu Włoch", 
        titleKeywords: ["państwo kościelne", "watykan włochy", "przyłączenie rzymu", "papież włochy"],
        desc: "Zajęcie Rzymu w 1870 roku przypieczętowało zjednoczenie Włoch i zakończyło świecką władzę papieża. <span style='color: #FFD700;'>(zajęcie Rzymu i koniec władzy papieża)</span>", 
        descKeywords: ["stolica włoch", "zajęcie rzymu", "pius ix", "koniec państwa kościelnego"]
    },
    { 
        id: "7", 
        title: "Kluczowe daty zjednoczenia Włoch", 
        titleKeywords: ["data zjednoczenia włoch", "kiedy zjednoczono włochy", "rok zjednoczenia włoch"],
        desc: "Przełomowymi momentami było ogłoszenie Królestwa Włoch w 1861 roku oraz ustanowienie Rzymu stolicą w 1870 roku. <span style='color: #FFD700;'>(Królestwo Włoch w 1861 i Rzym w 1870)</span>", 
        descKeywords: ["proklamacja królestwa", "stolica rzym", "xix wiek włochy", "ogłoszenie królestwa"]
    },
    { 
        id: "8", 
        title: "Etapy zjednoczenia Niemiec", 
        titleKeywords: ["zjednoczenie niemiec", "jak zjednoczono niemcy", "powstanie II rzeszy"],
        desc: "Proces scalania państw niemieckich pod przewodnictwem Prus, zwieńczony ogłoszeniem II Rzeszy w 1871 roku. <span style='color: #FFD700;'>(scalenie pod Prusami i II Rzesza)</span>", 
        descKeywords: ["cesarstwo niemieckie", "powstanie niemiec", "wersal 1871", "mocarstwo niemieckie"]
    },
    { 
        id: "9", 
        title: "Postać Otto von Bismarcka", 
        titleKeywords: ["bismarck", "otto von bismarck", "żelazny kanclerz", "kto jednoczył niemcy"],
        desc: "Premier Prus i Żelazny Kanclerz, który dzięki bezwzględnej polityce doprowadził do utworzenia zjednoczonego państwa. <span style='color: #FFD700;'>(bezwzględna polityka premiera Prus)</span>", 
        descKeywords: ["dyplomata pruski", "kanclerz niemiec", "twórca ii rzeszy", "polityka prus"]
    },
    { 
        id: "10", 
        title: "Polityka „krwią i żelazem”", 
        titleKeywords: ["krwią i żelazem", "krew i żelazo", "zasada bismarcka", "koncepcja bismarcka"],
        desc: "Koncepcja Bismarcka zakładała zjednoczenie Niemiec za pomocą siły militarnej i zwycięskich wojen. <span style='color: #FFD700;'>(zjednoczenie przez siłę i wojny)</span>", 
        descKeywords: ["militaryzm pruski", "wojsko pruskie", "zjednoczenie siłą", "przemoc militarna"]
    },
    { 
        id: "11", 
        title: "Znaczenie depeszy emskiej", 
        titleKeywords: ["depesza emska", "depesza z ems", "sfałszowana depesza", "prowokacja bismarcka"],
        desc: "Sfałszowany przez Bismarcka dokument, który sprowokował Francję do wypowiedzenia wojny Prusom. <span style='color: #FFD700;'>(prowokacja Francji do wojny)</span>", 
        descKeywords: ["wybuch wojny", "skandal w ems", "prowokacja francji", "wojna prusko francuska"]
    },
    { 
        id: "12", 
        title: "Różnice między Północą a Południem USA", 
        titleKeywords: ["północ vs południe", "północ i południe usa", "porównanie północy i południa", "usa XIX wiek"],
        desc: "Zindustrializowana Północ różniła się od rolniczego Południa opartego na pracy niewolników. <span style='color: #FFD700;'>(przemysł Północy a rolnictwo Południa)</span>", 
        descKeywords: ["fabryki", "bawełna", "plantatorzy", "stany unii i konfederacji"]
    },
    { 
        id: "13", 
        title: "Założenia abolicjonizmu", 
        titleKeywords: ["abolicjonizm", "abolicjoniści", "ruch abolicjonistyczny", "zniesienie niewolnictwa"],
        desc: "Ruch społeczny w USA dążący do całkowitego zniesienia niewolnictwa i nadania praw czarnoskórym. <span style='color: #FFD700;'>(zniesienie niewolnictwa i prawa dla czarnoskórych)</span>", 
        descKeywords: ["prawa czarnoskórych", "walka z niewolnictwem", "wolność czarnoskórych", "usa wolność"]
    },
    { 
        id: "14", 
        title: "Przyczyny wojny secesyjnej", 
        titleKeywords: ["przyczyny wojny secesyjnej", "dlaczego wybuchła wojna secesyjna", "powody wojny secesyjnej"],
        desc: "Konflikt wywołały spory o niewolnictwo, wybór Lincolna na prezydenta oraz secesja stanów Południa. <span style='color: #FFD700;'>(spory o niewolnictwo i secesja Południa)</span>", 
        descKeywords: ["odłączenie stanów", "rozpad usa", "konfederacja", "wybór prezydenta"]
    },
    { 
        id: "15", 
        title: "Postać Jeffersona Davisa", 
        titleKeywords: ["jefferson davis", "davis", "prezydent południa", "prezydent konfederacji"],
        desc: "Polityk, który stanął na czele Skonfederowanych Stanów Ameryki podczas wojny secesyjnej. <span style='color: #FFD700;'>(przywódca Konfederacji)</span>", 
        descKeywords: ["przywódca południa", "stany skonfederowane", "secesjoniści", "dowódca południa"]
    },
    { 
        id: "16", 
        title: "Postać Abrahama Lincolna", 
        titleKeywords: ["abraham lincoln", "lincoln", "prezydent usa", "prezydent unii"],
        desc: "Prezydent USA, który doprowadził Unię do zwycięstwa w wojnie secesyjnej i zniósł niewolnictwo. <span style='color: #FFD700;'>(zwycięstwo Unii i zniesienie niewolnictwa)</span>", 
        descKeywords: ["znniósł niewolnictwo", "zwycięzca wojny secesyjnej", "zamach na lincolna", "przywódca północy"]
    },
    { 
        id: "17", 
        title: "Bitwa pod Gettysburgiem", 
        titleKeywords: ["gettysburg", "bitwa pod gettysburgiem", "bitwa o gettysburg", "gettysburg 1863"],
        desc: "Przełomowa starcie z 1863 roku, w którym siły Północy powstrzymały ofensywę Konfederatów. <span style='color: #FFD700;'>(powstrzymanie ofensywy Konfederatów)</span>", 
        descKeywords: ["przełom w wojnie", "porażka konfederacji", "najkrwawsza bitwa", "wygrana unii"]
    },
    { 
        id: "18", 
        title: "Przyczyny ekspansji kolonialnej", 
        titleKeywords: ["przyczyny kolonializmu", "dlaczego tworzono kolonie", "powody tworzenia kolonii", "ekspansja kolonialna"],
        desc: "Mocarstwa zajmowały nowe terytoria w celu zdobycia surowców, rynków zbytu oraz podniesienia prestiżu. <span style='color: #FFD700;'>(surowce, rynki i prestiż mocarstw)</span>", 
        descKeywords: ["tania siła robocza", "bogactwa naturalne", "podbój świata", "potęga mocarstw"]
    },
    { 
        id: "19", 
        title: "Formy posiadłości kolonialnych", 
        titleKeywords: ["formy kolonii", "formy uzależnienia", "typy kolonii", "rodzaje kolonii"],
        desc: "Zależnie od stopnia kontroli terytoria dzielono na kolonie, protektoraty, półkolonie i dominia. <span style='color: #FFD700;'>(podział terytoriów według stopnia kontroli)</span>", 
        descKeywords: ["indie brytyjskie", "chiny półkolonia", "kanada dominium", "terytoria zależne"]
    },
    { 
        id: "20", 
        title: "Dążenia do równouprawnienia kobiet", 
        titleKeywords: ["walka kobiet", "równouprawnienie kobiet", "walka o prawa kobiet", "prawa kobiet XIX wiek"],
        desc: "Działania mające na celu uzyskanie przez kobiety dostępu do edukacji, pracy oraz praw politycznych. <span style='color: #FFD700;'>(dostęp do edukacji, pracy i polityki)</span>", 
        descKeywords: ["dostęp do studiów", "prawo do pracy", "niezależność kobiet", "prawa obywatelskie"]
    },
    { 
        id: "21", 
        title: "Pojęcie emancypacji kobiet", 
        titleKeywords: ["emancypacja", "emancypacja kobiet", "co to jest emancypacja", "emancypantki"],
        desc: "Proces wyzwalania się kobiet spod zależności prawnej i społecznej męskiego otoczenia. <span style='color: #FFD700;'>(wyzwolenie z zależności prawnej i społecznej)</span>", 
        descKeywords: ["uwalnianie się kobiet", "brak zależności od męża", "samodzielność", "ruch feministyczny"]
    },
    { 
        id: "22", 
        title: "Ruch sufrażystek", 
        titleKeywords: ["sufrazystki", "sufrażystki", "ruch sufrażystek", "sufrażyzm"],
        desc: "Ruch społeczny walczący przełomie XIX i XX wieku o przyznanie kobietom praw wyborczych. <span style='color: #FFD700;'>(walka o prawa wyborcze)</span>", 
        descKeywords: ["głosowanie kobiet", "protesty kobiet", "prawa do głosowania", "działaczki kobiece"]
    },
    { 
        id: "23", 
        title: "Osiągnięcia Karola Darwina", 
        titleKeywords: ["karol darwin", "darwin", "teoria darwina", "przyrodnik darwin"],
        desc: "Sformułowanie teorii ewolucji opartej na doborze naturalnym, która zrewolucjonizowała biologię. <span style='color: #FFD700;'>(teoria ewolucji oparta na doborze naturalnym)</span>", 
        descKeywords: ["powstanie gatunków", "ewolucjonizm", "dobór naturalny", "biologia XIX wiek"]
    },
    { 
        id: "24", 
        title: "Osiągnięcia Zygmunta Freuda", 
        titleKeywords: ["zygmunt freud", "freud", "teoria freuda", "twórca psychoanalizy"],
        desc: "Stworzenie psychoanalizy oraz wprowadzenie pojęcia podświadomości do badania ludzkiej psychiki. <span style='color: #FFD700;'>(psychoanaliza i podświadomość)</span>", 
        descKeywords: ["psyche", "psychologia", "sny", "terapia psychoanalityczna"]
    },
    { 
        id: "25", 
        title: "Osiągnięcia Alberta Einsteina", 
        titleKeywords: ["albert einstein", "einstein", "fizyk einstein"],
        desc: "Opracowanie teorii względności, która zmieniła dotychczasowe rozumienie czasu i przestrzeni. <span style='color: #FFD700;'>(teoria względności czasu i przestrzeni)</span>", 
        descKeywords: ["fizyka nowoczesna", "przełom w fizyce", "względność czasoprzestrzeni", "e=mc2"]
    },
    { 
        id: "26", 
        title: "Osiągnięcia Marii Skłodowskiej-Curie", 
        titleKeywords: ["maria skłodowska curie", "skłodowska", "skłodowska curie", "curie"],
        desc: "Odkrycie pierwiastków promieniotwórczych polonu i radu, nagrodzone dwiema Nagrodami Nobla. <span style='color: #FFD700;'>(odkrycie polonu i radu)</span>", 
        descKeywords: ["nagroda nobla", "pierwiastki promieniotwórcze", "polka noblistka", "chemia i fizyka"]
    },
    { 
        id: "27", 
        title: "Osiągnięcia Ludwika Pasteura", 
        titleKeywords: ["ludwik pasteur", "pasteur", "louis pasteur"],
        desc: "Opracowanie metody pasteryzacji oraz stworzenie szczepionki przeciwko wściekliźnie. <span style='color: #FFD700;'>(pasteryzacja i szczepionka na wściekliznę)</span>", 
        descKeywords: ["szczepienia", "bakterie", "konserwacja żywności", "medycyna XIX wiek"]
    },
    { 
        id: "28", 
        title: "Osiągnięcia Wilhelma Röntgena", 
        titleKeywords: ["wilhelm rontgen", "röntgen", "rentgen", "roentgen"],
        desc: "Odkrycie promieniowania X, co umożliwiło rozwój nowoczesnej diagnostyki medycznej. <span style='color: #FFD700;'>(odkrycie promieniowania X)</span>", 
        descKeywords: ["prześwietlenie", "zdjęcie rtg", "promienie x", "odkrycie naukowe"]
    },
    { 
        id: "29", 
        title: "Osiągnięcia Kazimierza Prószyńskiego", 
        titleKeywords: ["kazimierz prószyński", "prószyński", "polski pionier kina"],
        desc: "Skonstruowanie pleografu i rozwój technologii filmowej jako polski pionier kinematografii. <span style='color: #FFD700;'>(skonstruowanie pleografu)</span>", 
        descKeywords: ["kamera filmowa", "polski wynalazca", "pierwsza kamera", "historia kina"]
    },
    { 
        id: "30", 
        title: "Rozwój transportu i komunikacji w XIX w.", 
        titleKeywords: ["transport w XIX wieku", "komunikacja XIX wiek", "zmiany komunikacyjne", "rewolucja w transporcie"],
        desc: "Upowszechnienie kolei, parowców oraz telegrafu, co znacząco przyspieszyło podróże i przepływ informacji. <span style='color: #FFD700;'>(kolej, parowce i telegraf)</span>", 
        descKeywords: ["pociągi", "statki parowe", "szybkie przesyłanie wiadomości", "sieć kolejowa"]
    },
    { 
        id: "31", 
        title: "Wynalezienie lampy naftowej", 
        titleKeywords: ["lampa naftowa", "wynalezienie lampy naftowej", "kto wymyślił lampę naftową", "łukasiewicz lampa"],
        desc: "Skonstruowanie lampy naftowej przez Ignacego Łukasiewicza w 1853 roku dało początek przemysłowi naftowemu. <span style='color: #FFD700;'>(lampa naftowa Łukasiewicza)</span>", 
        descKeywords: ["ropa naftowa", "lwów", "oświetlenie naftowe", "polski inżynier"]
    },
    { 
        id: "32", 
        title: "Odkrycie i ulepszenie żarówki", 
        titleKeywords: ["żarówka", "żarówka edisona", "wynalezienie żarówki", "kto wymyślił żarówkę"],
        desc: "Ulepszenie żarówki elektrycznej przez Thomasa Edisona zapoczątkowało erę powszechnego elektrycznego oświetlenia. <span style='color: #FFD700;'>(ulepszenie żarówki przez Edisona)</span>", 
        descKeywords: ["prąd w domu", "elektryczność", "edison", "oświetlenie elektryczne"]
    },
    { 
        id: "33", 
        title: "Postać Claude'a Moneta", 
        titleKeywords: ["claude monet", "monet", "impresjonista monet"],
        desc: "Czołowy malarz impresjonistyczny, od którego obrazu pochodzi nazwa całego kierunku w sztuce. <span style='color: #FFD700;'>(czołowy twórca impresjonizmu)</span>", 
        descKeywords: ["twórca impresjonizmu", "obraz impresja", "francuski malarz", "sztuka francja"]
    },
    { 
        id: "34", 
        title: "Postać Auguste'a Renoira", 
        titleKeywords: ["auguste renoir", "renoir", "pierre auguste renoir"],
        desc: "Malarz impresjonistyczny znany z pogodnych portretów oraz scen przedstawiających codzienne życie. <span style='color: #FFD700;'>(pogodne portrety i codzienne życie)</span>", 
        descKeywords: ["sceny z życia", "jasne kolory", "impresjonizm paryż", "malarstwo francuskie"]
    },
    { 
        id: "35", 
        title: "Postać Vincenta van Gogha", 
        titleKeywords: ["vincent van gogh", "van gogh", "postimpresjonista van gogh"],
        desc: "Wybitny malarz postimpresjonistyczny, tworzący ekspresyjne dzieła pełne emocji i wyrazistych kolorów. <span style='color: #FFD700;'>(ekspresyjne dzieła pełne emocji)</span>", 
        descKeywords: ["słynne słoneczniki", "holenderski malarz", "obcięte ucho", "emocje w sztuce"]
    },
    { 
        id: "36", 
        title: "Postać Pabla Picassa", 
        titleKeywords: ["pablo picasso", "picasso", "twórca kubizmu"],
        desc: "Współtwórca kubizmu i jeden z najważniejszych artystów rewolucjonizujących sztukę XX wieku. <span style='color: #FFD700;'>(współtwórca kubizmu i sztuki XX w.)</span>", 
        descKeywords: ["geometria w malarstwie", "hiszpański malarz", "nowoczesne obrazki", "xx wiek sztuka"]
    },
    { 
        id: "37", 
        title: "Rozwój kultury masowej", 
        titleKeywords: ["kultura masowa", "powstanie kultury masowej", "kultura dla mas", "popkultura XIX wiek"],
        desc: "Powstanie prasy wysokonakładowej, radia i kina umożliwiło docieranie rozrywki do szerokich rzesz odbiorców. <span style='color: #FFD700;'>(prasa, radio i kino dla mas)</span>", 
        descKeywords: ["gazety", "seanse kinowe", "rozrywka dla wszystkich", "masowe media"]
    },
    { 
        id: "38", 
        title: "Powstanie skautingu", 
        titleKeywords: ["skauting", "powstanie skautingu", "harcerstwo skauting", "baden powell"],
        desc: "Utworzenie przez Roberta Badena-Powella ruchu młodzieżowego stawiającego na karność i kontakt z naturą. <span style='color: #FFD700;'>(ruch młodzieżowy Badena-Powella)</span>", 
        descKeywords: ["skauci", "obozy w lesie", "wychowanie młodzieży", "przyroda i dyscyplina"]
    },
    { 
        id: "39", 
        title: "Postać Napoleona III", 
        titleKeywords: ["napoleon III", "napoleon 3", "cesarz napoleon III", "władca francji napoleon"],
        desc: "Cesarz Francji, którego rządy zakończyły się klęską pod Sedanem w wojnie z Prusami. <span style='color: #FFD700;'>(klęska cesarza Francji pod Sedanem)</span>", 
        descKeywords: ["porażka pod sedanem", "niewola pruska", "drugie cesarstwo", "koniec rządów"]
    },
    { 
        id: "40", 
        title: "Postać Wilhelma I Hohenzollerna", 
        titleKeywords: ["wilhelm I", "wilhelm 1", "wilhelm I hohenzollern", "cesarz wilhelm I"],
        desc: "Król Prus, który w 1871 roku został ogłoszony pierwszym cesarzem zjednoczonych Niemiec. <span style='color: #FFD700;'>(pierwszy cesarz zjednoczonych Niemiec)</span>", 
        descKeywords: ["hohenzollern", "koronacja w wersalu", "władca ii rzeszy", "praski król"]
    },
    { 
        id: "41", 
        title: "Postać Wiktora Emanuela II", 
        titleKeywords: ["wiktor emanuel II", "wiktor emanuel 2", "król włoch wiktor emanuel"],
        desc: "Władca Piemontu, który w 1861 roku został korowany na pierwszego króla zjednoczonych Włoch. <span style='color: #FFD700;'>(pierwszy król zjednoczonych Włoch)</span>", 
        descKeywords: ["pierwszy król włoch", "piemontzki władca", "zjednoczyciel włoch", "monarcha włoch"]
    },
    { 
        id: "42", 
        title: "Postać Ulyssesa Granta", 
        titleKeywords: ["ulysses grant", "grant", "generał grant", "dowódca grant"],
        desc: "Naczelny dowódca wojsk Unii w wojnie secesyjnej, a później prezydent Stanów Zjednoczonych. <span style='color: #FFD700;'>(dowódca Unii i prezydent USA)</span>", 
        descKeywords: ["wygrany generał", "dowódca północy", "prezydent po wojnie", "bohater unii"]
    },
    { 
        id: "43", 
        title: "Osiągnięcia Kazimierza Funka", 
        titleKeywords: ["kazimierz funk", "funk", "odkrywca witamin"],
        desc: "Polski biochemik, który odkrył i wprowadził do nauki pojęcie witamin. <span style='color: #FFD700;'>(odkrycie pojęcia witamin)</span>", 
        descKeywords: ["polski biochemik", "pierwsza witamina", "odkrycie naukowe", "zdrowie i witaminy"]
    },
    { 
        id: "44", 
        title: "Wynalezienie telefonu", 
        titleKeywords: ["telefon", "wynalezienie telefonu", "kto wymyślił telefon", "bell telefon"],
        desc: "Opracowanie i opatentowanie telefonu przez Alexandra Grahama Bella w 1876 roku. <span style='color: #FFD700;'>(opatentowanie telefonu przez Bella)</span>", 
        descKeywords: ["pierwszy telefon", "rozmowa na odległość", "patent 1876", "telekomunikacja"]
    },
    { 
        id: "45", 
        title: "Ziemie przyłączone do Niemiec podczas zjednoczenia", 
        titleKeywords: ["ziemie przyłączone do niemiec", "jakie ziemie zajęły niemcy", "tereny prus i niemiec", "alzacja i lotaryngia"],
        desc: "Prusy zdobyły w kolejnych wojnach Szlezwik, Holsztyn oraz francuską Alzację i Lotaryngię. <span style='color: #FFD700;'>(zdobycie Szlezwiku, Holsztynu i Alzacji)</span>", 
        descKeywords: ["wojna z danią ziemie", "wojna z francją ziemie", "pogranicze francusko niemieckie", "nowe tereny rzeszy"]
    },
    { 
        id: "46", 
        title: "Wojny Prus w procesie zjednoczenia Niemiec", 
        titleKeywords: ["wojny prus", "wojny o zjednoczenie niemiec", "z kim walczyły prusy", "trzy wojny bismarcka"],
        desc: "Prusy stoczyły trzy wygrane konflikty: z Danią, z Austrią oraz z Francją. <span style='color: #FFD700;'>(trzy wygrane konflikty z Danią, Austrią i Francją)</span>", 
        descKeywords: ["1864 1866 1870", "konflikty pruskie", "droga do ii rzeszy", "wojny zjednoczeniowe"]
    },
    { 
        id: "47", 
        title: "Kluczowe bitwy w procesie zjednoczenia Niemiec", 
        titleKeywords: ["bitwy zjednoczenia niemiec", "bitwy pruskie", "gdzie walczyły prusy", "sadowa sedan metz"],
        desc: "Decydujące zwycięstwa Prus miały miejsce w bitwach pod Sadową oraz pod Sedanem. <span style='color: #FFD700;'>(zwycięstwa Prus pod Sadową i Sedanem)</span>", 
        descKeywords: ["bitwa pod sadową 1866", "bitwa pod sedanem 1870", "obężenie metz", "zwycięstwa prus"]
    }
];
