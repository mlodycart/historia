const historyData = [
    { 
        id: "1", 
        title: "Przyczyny i skutki wojny krymskiej", 
        titleKeywords: ["wojna krymska", "wojna na krymie", "walki na krymie", "krymska"],
        desc: "Konflikt mocarstw wywołany ekspansją Rosji, który zakończył się jej klęską i osłabieniem pozycji nad Morzem Czarnym.", 
        descKeywords: ["przegrana rosji", "morze czarne", "flota", "turkowie", "sewastopol"]
    },
    { 
        id: "2", 
        title: "Sytuacja polityczna przed wojną krymską", 
        titleKeywords: ["przed wojną krymską", "geneza wojny krymskiej", "dlaczego powstrzymali rosję"],
        desc: "Wzrost potęgi Rosji i słabość Turcji wywołały obawy Anglii oraz Francji o zachowanie równowagi sił w Europie.", 
        descKeywords: ["wzrost potęgi", "turcja chory człowiek europy", "cieśniny", "mocarstwa"]
    },
    { 
        id: "3", 
        title: "Ruch Risorgimento", 
        titleKeywords: ["risorgimento", "odrodzenie włoch", "włoski ruch narodowy", "ruch zjednoczeniowy"],
        desc: "Włoski ruch narodowy mający na celu wyzwolenie kraju spod obcych wpływów i zjednoczenie rozbitych państewek.", 
        descKeywords: ["walka o niepodległość", "unia włoch", "półwysep apeniński", "włosi"]
    },
    { 
        id: "4", 
        title: "Główne ośrodki zjednoczenia Włoch", 
        titleKeywords: ["ośrodki zjednoczenia włoch", "kto jednoczył włochy", "skąd zjednoczenie włoch"],
        desc: "Proces zjednoczenia opierał się na dyplomacji Piemontu pod wodzą Cavoura oraz na działaniach militarnych Garibaldiego.", 
        descKeywords: ["królestwo sardynii", "czerwone koszule", "wyprawa tysiąca", "turyn"]
    },
    { 
        id: "5", 
        title: "Bitwy pod Magentą i Solferino", 
        titleKeywords: ["magenta i solferino", "bitwa pod solferino", "bitwa pod magentą", "solferino 1859"],
        desc: "Krwawe starcia z 1859 roku zakończone porażką Austrii, które skłoniły Henry'ego Dunanta do stworzenia Czerwonego Krzyża.", 
        descKeywords: ["pomoc rannym", "wojna z austrią", "henry dunant", "krwawa bitwa"]
    },
    { 
        id: "6", 
        title: "Rola Państwa Kościelnego w zjednoczeniu Włoch", 
        titleKeywords: ["państwo kościelne", "watykan włochy", "przyłączenie rzymu", "papież włochy"],
        desc: "Zajęcie Rzymu w 1870 roku przypieczętowało zjednoczenie Włoch i zakończyło świecką władzę papieża.", 
        descKeywords: ["stolica włoch", "zajęcie rzymu", "pius ix", "koniec państwa kościelnego"]
    },
    { 
        id: "7", 
        title: "Kluczowe daty zjednoczenia Włoch", 
        titleKeywords: ["data zjednoczenia włoch", "kiedy zjednoczono włochy", "rok zjednoczenia włoch"],
        desc: "Przełomowymi momentami było ogłoszenie Królestwa Włoch w 1861 roku oraz ustanowienie Rzymu stolicą w 1870 roku.", 
        descKeywords: ["proklamacja królestwa", "stolica rzym", "xix wiek włochy", "ogłoszenie królestwa"]
    },
    { 
        id: "8", 
        title: "Etapy zjednoczenia Niemiec", 
        titleKeywords: ["zjednoczenie niemiec", "jak zjednoczono niemcy", "powstanie II rzeszy"],
        desc: "Proces scalania państw niemieckich pod przewodnictwem Prus, zwieńczony ogłoszeniem II Rzeszy w 1871 roku.", 
        descKeywords: ["cesarstwo niemieckie", "powstanie niemiec", "wersal 1871", "mocarstwo niemieckie"]
    },
    { 
        id: "9", 
        title: "Postać Otto von Bismarcka", 
        titleKeywords: ["bismarck", "otto von bismarck", "żelazny kanclerz", "kto jednoczył niemcy"],
        desc: "Premier Prus i Żelazny Kanclerz, który dzięki bezwzględnej polityce doprowadził do utworzenia zjednoczonego państwa.", 
        descKeywords: ["dyplomata pruski", "kanclerz niemiec", "twórca ii rzeszy", "polityka prus"]
    },
    { 
        id: "10", 
        title: "Polityka „krwią i żelazem”", 
        titleKeywords: ["krwią i żelazem", "krew i żelazo", "zasada bismarcka", "koncepcja bismarcka"],
        desc: "Koncepcja Bismarcka zakładała zjednoczenie Niemiec za pomocą siły militarnej i zwycięskich wojen.", 
        descKeywords: ["militaryzm pruski", "wojsko pruskie", "zjednoczenie siłą", "przemoc militarna"]
    },
    { 
        id: "11", 
        title: "Znaczenie depeszy emskiej", 
        titleKeywords: ["depesza emska", "depesza z ems", "sfałszowana depesza", "prowokacja bismarcka"],
        desc: "Sfałszowany przez Bismarcka dokument, który sprowokował Francję do wypowiedzenia wojny Prusom.", 
        descKeywords: ["wybuch wojny", "skandal w ems", "prowokacja francji", "wojna prusko francuska"]
    },
    { 
        id: "12", 
        title: "Różnice między Północą a Południem USA", 
        titleKeywords: ["północ vs południe", "północ i południe usa", "porównanie północy i południa", "usa XIX wiek"],
        desc: "Zindustrializowana Północ różniła się od rolniczego Południa opartego na pracy niewolników.", 
        descKeywords: ["fabryki", "bawełna", "plantatorzy", "stany unii i konfederacji"]
    },
    { 
        id: "13", 
        title: "Założenia abolicjonizmu", 
        titleKeywords: ["abolicjonizm", "abolicjoniści", "ruch abolicjonistyczny", "zniesienie niewolnictwa"],
        desc: "Ruch społeczny w USA dążący do całkowitego zniesienia niewolnictwa i nadania praw czarnoskórym.", 
        descKeywords: ["prawa czarnoskórych", "walka z niewolnictwem", "wolność czarnoskórych", "usa wolność"]
    },
    { 
        id: "14", 
        title: "Przyczyny wojny secesyjnej", 
        titleKeywords: ["przyczyny wojny secesyjnej", "dlaczego wybuchła wojna secesyjna", "powody wojny secesyjnej"],
        desc: "Konflikt wywołały spory o niewolnictwo, wybór Lincolna na prezydenta oraz secesja stanów Południa.", 
        descKeywords: ["odłączenie stanów", "rozpad usa", "konfederacja", "wybór prezydenta"]
    },
    { 
        id: "15", 
        title: "Postać Jeffersona Davisa", 
        titleKeywords: ["jefferson davis", "davis", "prezydent południa", "prezydent konfederacji"],
        desc: "Polityk, który stanął na czele Skonfederowanych Stanów Ameryki podczas wojny secesyjnej.", 
        descKeywords: ["przywódca południa", "stany skonfederowane", "secesjoniści", "dowódca południa"]
    },
    { 
        id: "16", 
        title: "Postać Abrahama Lincolna", 
        titleKeywords: ["abraham lincoln", "lincoln", "prezydent usa", "prezydent unii"],
        desc: "Prezydent USA, który doprowadził Unię do zwycięstwa w wojnie secesyjnej i zniósł niewolnictwo.", 
        descKeywords: ["znniósł niewolnictwo", "zwycięzca wojny secesyjnej", "zamach na lincolna", "przywódca północy"]
    },
    { 
        id: "17", 
        title: "Bitwa pod Gettysburgiem", 
        titleKeywords: ["gettysburg", "bitwa pod gettysburgiem", "bitwa o gettysburg", "gettysburg 1863"],
        desc: "Przełomowa starcie z 1863 roku, w którym siły Północy powstrzymały ofensywę Konfederatów.", 
        descKeywords: ["przełom w wojnie", "porażka konfederacji", "najkrwawsza bitwa", "wygrana unii"]
    },
    { 
        id: "18", 
        title: "Przyczyny ekspansji kolonialnej", 
        titleKeywords: ["przyczyny kolonializmu", "dlaczego tworzono kolonie", "powody tworzenia kolonii", "ekspansja kolonialna"],
        desc: "Mocarstwa zajmowały nowe terytoria w celu zdobycia surowców, rynków zbytu oraz podniesienia prestiżu.", 
        descKeywords: ["tania siła robocza", "bogactwa naturalne", "podbój świata", "potęga mocarstw"]
    },
    { 
        id: "19", 
        title: "Formy posiadłości kolonialnych", 
        titleKeywords: ["formy kolonii", "formy uzależnienia", "typy kolonii", "rodzaje kolonii"],
        desc: "Zależnie od stopnia kontroli terytoria dzielono na kolonie, protektoraty, półkolonie i dominia.", 
        descKeywords: ["indie brytyjskie", "chiny półkolonia", "kanada dominium", "terytoria zależne"]
    },
    { 
        id: "20", 
        title: "Dążenia do równouprawnienia kobiet", 
        titleKeywords: ["walka kobiet", "równouprawnienie kobiet", "walka o prawa kobiet", "prawa kobiet XIX wiek"],
        desc: "Działania mające na celu uzyskanie przez kobiety dostępu do edukacji, pracy oraz praw politycznych.", 
        descKeywords: ["dostęp do studiów", "prawo do pracy", "niezależność kobiet", "prawa obywatelskie"]
    },
    { 
        id: "21", 
        title: "Pojęcie emancypacji kobiet", 
        titleKeywords: ["emancypacja", "emancypacja kobiet", "co to jest emancypacja", "emancypantki"],
        desc: "Proces wyzwalania się kobiet spod zależności prawnej i społecznej męskiego otoczenia.", 
        descKeywords: ["uwalnianie się kobiet", "brak zależności od męża", "samodzielność", "ruch feministyczny"]
    },
    { 
        id: "22", 
        title: "Ruch sufrażystek", 
        titleKeywords: ["sufrazystki", "sufrażystki", "ruch sufrażystek", "sufrażyzm"],
        desc: "Ruch społeczny walczący przełomie XIX i XX wieku o przyznanie kobietom praw wyborczych.", 
        descKeywords: ["głosowanie kobiet", "protesty kobiet", "prawa do głosowania", "działaczki kobiece"]
    },
    { 
        id: "23", 
        title: "Osiągnięcia Karola Darwina", 
        titleKeywords: ["karol darwin", "darwin", "teoria darwina", "przyrodnik darwin"],
        desc: "Sformułowanie teorii ewolucji opartej na doborze naturalnym, która zrewolucjonizowała biologię.", 
        descKeywords: ["powstanie gatunków", "ewolucjonizm", "dobór naturalny", "biologia XIX wiek"]
    },
    { 
        id: "24", 
        title: "Osiągnięcia Zygmunta Freuda", 
        titleKeywords: ["zygmunt freud", "freud", "teoria freuda", "twórca psychoanalizy"],
        desc: "Stworzenie psychoanalizy oraz wprowadzenie pojęcia podświadomości do badania ludzkiej psychiki.", 
        descKeywords: ["psyche", "psychologia", "sny", "terapia psychoanalityczna"]
    },
    { 
        id: "25", 
        title: "Osiągnięcia Alberta Einsteina", 
        titleKeywords: ["albert einstein", "einstein", "fizyk einstein"],
        desc: "Opracowanie teorii względności, która zmieniła dotychczasowe rozumienie czasu i przestrzeni.", 
        descKeywords: ["fizyka nowoczesna", "przełom w fizyce", "względność czasoprzestrzeni", "e=mc2"]
    },
    { 
        id: "26", 
        title: "Osiągnięcia Marii Skłodowskiej-Curie", 
        titleKeywords: ["maria skłodowska curie", "skłodowska", "skłodowska curie", "curie"],
        desc: "Odkrycie pierwiastków promieniotwórczych polonu i radu, nagrodzone dwiema Nagrodami Nobla.", 
        descKeywords: ["nagroda nobla", "pierwiastki promieniotwórcze", "polka noblistka", "chemia i fizyka"]
    },
    { 
        id: "27", 
        title: "Osiągnięcia Ludwika Pasteura", 
        titleKeywords: ["ludwik pasteur", "pasteur", "louis pasteur"],
        desc: "Opracowanie metody pasteryzacji oraz stworzenie szczepionki przeciwko wściekliźnie.", 
        descKeywords: ["szczepienia", "bakterie", "konserwacja żywności", "medycyna XIX wiek"]
    },
    { 
        id: "28", 
        title: "Osiągnięcia Wilhelma Röntgena", 
        titleKeywords: ["wilhelm rontgen", "röntgen", "rentgen", "roentgen"],
        desc: "Odkrycie promieniowania X, co umożliwiło rozwój nowoczesnej diagnostyki medycznej.", 
        descKeywords: ["prześwietlenie", "zdjęcie rtg", "promienie x", "odkrycie naukowe"]
    },
    { 
        id: "29", 
        title: "Osiągnięcia Kazimierza Prószyńskiego", 
        titleKeywords: ["kazimierz prószyński", "prószyński", "polski pionier kina"],
        desc: "Skonstruowanie pleografu i rozwój technologii filmowej jako polski pionier kinematografii.", 
        descKeywords: ["kamera filmowa", "polski wynalazca", "pierwsza kamera", "historia kina"]
    },
    { 
        id: "30", 
        title: "Rozwój transportu i komunikacji w XIX w.", 
        titleKeywords: ["transport w XIX wieku", "komunikacja XIX wiek", "zmiany komunikacyjne", "rewolucja w transporcie"],
        desc: "Upowszechnienie kolei, parowców oraz telegrafu, co znacząco przyspieszyło podróże i przepływ informacji.", 
        descKeywords: ["pociągi", "statki parowe", "szybkie przesyłanie wiadomości", "sieć kolejowa"]
    },
    { 
        id: "31", 
        title: "Wynalezienie lampy naftowej", 
        titleKeywords: ["lampa naftowa", "wynalezienie lampy naftowej", "kto wymyślił lampę naftową", "łukasiewicz lampa"],
        desc: "Skonstruowanie lampy naftowej przez Ignacego Łukasiewicza w 1853 roku dało początek przemysłowi naftowemu.", 
        descKeywords: ["ropa naftowa", "lwów", "oświetlenie naftowe", "polski inżynier"]
    },
    { 
        id: "32", 
        title: "Odkrycie i ulepszenie żarówki", 
        titleKeywords: ["żarówka", "żarówka edisona", "wynalezienie żarówki", "kto wymyślił żarówkę"],
        desc: "Ulepszenie żarówki elektrycznej przez Thomasa Edisona zapoczątkowało erę powszechnego elektrycznego oświetlenia.", 
        descKeywords: ["prąd w domu", "elektryczność", "edison", "oświetlenie elektryczne"]
    },
    { 
        id: "33", 
        title: "Postać Claude'a Moneta", 
        titleKeywords: ["claude monet", "monet", "impresjonista monet"],
        desc: "Czołowy malarz impresjonistyczny, od którego obrazu pochodzi nazwa całego kierunku w sztuce.", 
        descKeywords: ["twórca impresjonizmu", "obraz impresja", "francuski malarz", "sztuka francja"]
    },
    { 
        id: "34", 
        title: "Postać Auguste'a Renoira", 
        titleKeywords: ["auguste renoir", "renoir", "pierre auguste renoir"],
        desc: "Malarz impresjonistyczny znany z pogodnych portretów oraz scen przedstawiających codzienne życie.", 
        descKeywords: ["sceny z życia", "jasne kolory", "impresjonizm paryż", "malarstwo francuskie"]
    },
    { 
        id: "35", 
        title: "Postać Vincenta van Gogha", 
        titleKeywords: ["vincent van gogh", "van gogh", "postimpresjonista van gogh"],
        desc: "Wybitny malarz postimpresjonistyczny, tworzący ekspresyjne dzieła pełne emocji i wyrazistych kolorów.", 
        descKeywords: ["słynne słoneczniki", "holenderski malarz", "obcięte ucho", "emocje w sztuce"]
    },
    { 
        id: "36", 
        title: "Postać Pabla Picassa", 
        titleKeywords: ["pablo picasso", "picasso", "twórca kubizmu"],
        desc: "Współtwórca kubizmu i jeden z najważniejszych artystów rewolucjonizujących sztukę XX wieku.", 
        descKeywords: ["geometria w malarstwie", "hiszpański malarz", "nowoczesne obrazki", "xx wiek sztuka"]
    },
    { 
        id: "37", 
        title: "Rozwój kultury masowej", 
        titleKeywords: ["kultura masowa", "powstanie kultury masowej", "kultura dla mas", "popkultura XIX wiek"],
        desc: "Powstanie prasy wysokonakładowej, radia i kina umożliwiło docieranie rozrywki do szerokich rzesz odbiorców.", 
        descKeywords: ["gazety", "seanse kinowe", "rozrywka dla wszystkich", "masowe media"]
    },
    { 
        id: "38", 
        title: "Powstanie skautingu", 
        titleKeywords: ["skauting", "powstanie skautingu", "harcerstwo skauting", "baden powell"],
        desc: "Utworzenie przez Roberta Badena-Powella ruchu młodzieżowego stawiającego na karność i kontakt z naturą.", 
        descKeywords: ["skauci", "obozy w lesie", "wychowanie młodzieży", "przyroda i dyscyplina"]
    },
    { 
        id: "39", 
        title: "Postać Napoleona III", 
        titleKeywords: ["napoleon III", "napoleon 3", "cesarz napoleon III", "władca francji napoleon"],
        desc: "Cesarz Francji, którego rządy zakończyły się klęską pod Sedanem w wojnie z Prusami.", 
        descKeywords: ["porażka pod sedanem", "niewola pruska", "drugie cesarstwo", "koniec rządów"]
    },
    { 
        id: "40", 
        title: "Postać Wilhelma I Hohenzollerna", 
        titleKeywords: ["wilhelm I", "wilhelm 1", "wilhelm I hohenzollern", "cesarz wilhelm I"],
        desc: "Król Prus, który w 1871 roku został ogłoszony pierwszym cesarzem zjednoczonych Niemiec.", 
        descKeywords: ["hohenzollern", "koronacja w wersalu", "władca ii rzeszy", "praski król"]
    },
    { 
        id: "41", 
        title: "Postać Wiktora Emanuela II", 
        titleKeywords: ["wiktor emanuel II", "wiktor emanuel 2", "król włoch wiktor emanuel"],
        desc: "Władca Piemontu, który w 1861 roku został korowany na pierwszego króla zjednoczonych Włoch.", 
        descKeywords: ["pierwszy król włoch", "piemontzki władca", "zjednoczyciel włoch", "monarcha włoch"]
    },
    { 
        id: "42", 
        title: "Postać Ulyssesa Granta", 
        titleKeywords: ["ulysses grant", "grant", "generał grant", "dowódca grant"],
        desc: "Naczelny dowódca wojsk Unii w wojnie secesyjnej, a później prezydent Stanów Zjednoczonych.", 
        descKeywords: ["wygrany generał", "dowódca północy", "prezydent po wojnie", "bohater unii"]
    },
    { 
        id: "43", 
        title: "Osiągnięcia Kazimierza Funka", 
        titleKeywords: ["kazimierz funk", "funk", "odkrywca witamin"],
        desc: "Polski biochemik, który odkrył i wprowadził do nauki pojęcie witamin.", 
        descKeywords: ["polski biochemik", "pierwsza witamina", "odkrycie naukowe", "zdrowie i witaminy"]
    },
    { 
        id: "44", 
        title: "Wynalezienie telefonu", 
        titleKeywords: ["telefon", "wynalezienie telefonu", "kto wymyślił telefon", "bell telefon"],
        desc: "Opracowanie i opatentowanie telefonu przez Alexandra Grahama Bella w 1876 roku.", 
        descKeywords: ["pierwszy telefon", "rozmowa na odległość", "patent 1876", "telekomunikacja"]
    },
    { 
        id: "45", 
        title: "Ziemie przyłączone do Niemiec podczas zjednoczenia", 
        titleKeywords: ["ziemie przyłączone do niemiec", "jakie ziemie zajęły niemcy", "tereny prus i niemiec", "alzacja i lotaryngia"],
        desc: "Prusy zdobyły w kolejnych wojnach Szlezwik, Holsztyn oraz francuską Alzację i Lotaryngię.", 
        descKeywords: ["wojna z danią ziemie", "wojna z francją ziemie", "pogranicze francusko niemieckie", "nowe tereny rzeszy"]
    },
    { 
        id: "46", 
        title: "Wojny Prus w procesie zjednoczenia Niemiec", 
        titleKeywords: ["wojny prus", "wojny o zjednoczenie niemiec", "z kim walczyły prusy", "trzy wojny bismarcka"],
        desc: "Prusy stoczyły trzy wygrane konflikty: z Danią, z Austrią oraz z Francją.", 
        descKeywords: ["1864 1866 1870", "konflikty pruskie", "droga do ii rzeszy", "wojny zjednoczeniowe"]
    },
    { 
        id: "47", 
        title: "Kluczowe bitwy w procesie zjednoczenia Niemiec", 
        titleKeywords: ["bitwy zjednoczenia niemiec", "bitwy pruskie", "gdzie walczyły prusy", "sadowa sedan metz"],
        desc: "Decydujące zwycięstwa Prus miały miejsce w bitwach pod Sadową oraz pod Sedanem.", 
        descKeywords: ["bitwa pod sadową 1866", "bitwa pod sedanem 1870", "obężenie metz", "zwycięstwa prus"]
    }
];
