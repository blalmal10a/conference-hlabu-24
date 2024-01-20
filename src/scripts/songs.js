import { ref } from "vue";

const fontSize = ref(15);
const selectedSong = ref({});
const songIndex = ref(0);
const songs = [
  {
    number: 1,
    title: "Kristian Thalaite u",
    lyrics:
      "Kristian thalaite u lungrual takin,\nLalpa tana thawk fo turin;\nHmatiam hylen tumin kan ke pen rualin,\nLalram i din thar zel ang u.\n\nThiltha ti atan a siam a awmin,\nAma kutchhuak kan ni si a;\nChu thil tha tih chu kan awmna turin,\nLalpa'n a buatsaih lawk a ni,\n\nKan vanglaini te hi a rei lovang,\nHe khawvel a kan kan cham chhung hian;\nChuvangin vanglai hunte hmang thain,\nLalpa tan i thawk zel ang u.\n\nKan vanglaini te hi hlobet par angin,\nA parmawina a la chuai ang;\nNakinah Lalpan min hruai hun chuan,\nA lo la par vul leh ngei ang.\n",
  },
  {
    number: 2,
    title: "Ka nung reng ang kristaah",
    lyrics:
      "Nunna Krista ka neih chinah,\nTuarna phena malsawmna;\nKa thlarau chuan a chang ta,\nKa lawm zel thin, eng lai pawhin.\n\n\nKhawvel hlimna ten min au mahse,\nHnuchhawn ram ka ngai tawh lo'ng;\nKhawvel ni kin ni pawh lo thleng mahse,\nKa nung reng ang Kristaah chuan.\n\n\nHnehna nun ka neih chinah,\nKa thlarau, rilru, taksa;\nMalsawm a ni tih ka hria,\nVankai nun pawh pek tawh ka ni.\n\nKa thlarau a thi lovang,\nThihna hlimkawr zawh hunin,\nKa taksa boral mahse,\nKa luah tawh ang, Van in mawi khi.\n\n\nBridge:\n\nKrista Isuaah chuan,\nAma rual veka min kaithovin;\nVan hmunah te ama hnenah min thuttir ta a,\nAmen, Haleluiah!\n",
  },
  {
    number: 3,
    title: "Pathian Hmangaihna",
    lyrics:
      "Ka chhut nawn fo thin Pathian hmangaihna hi,\nZing, chhun, zan, englai pawn a hnai reng;\nKa chakloh ber lai pawn min ensan lo,\nMin hmangaih, min thlahthlam ve ngai lo.\n\nA chuai ve lo, a thar zel thin,\nA chul thei lo Pathian hmangaihna thu hi;\nMin hruaina chanchin ngaihnawm hi ziak dawn ila,\nKa hun leh theihna te hian a tlin lovang.\n\nHmangaihna sang ber Pathian hmangaihna chuan,\nLal Isua fa mal neihchhun min pe;\nMidang tan ka thiltih tlem zia chhut hian,\nKa hmangaih nep zia ka hmuchiang thin.\n\nKa damchhung zawng hian ka theihna tlem tal in,\nLalpa chu fak mai tur ka lo ni;\nMisual kei rawngbawltuah min thlang hi,\nA hmangaih ropui zia ti chiangtu.\n",
  },
  {
    number: 4,
    title: "Zaia faktu an haw hun chuan",
    lyrics:
      "Zaia faktu an haw hun chuan,\nLungngaih, mangan a awm tawh lo’ng;\nChatuana kan inah,\nZaia faktu an haw hun chuan.\nHe lei a lawmna leh hlimna hla kan sak hi,\nVan lawm kan tem lawkna mai a ni;\nHlimna chuai thei lo chu van ina kan chang ang,\nZaia faktu an haw hun chuan.\nZaia faktu an haw hun chuan,\nLungngaih, mangan a awm tawh lo’ng;\nChatuana kan inah,\nZaia faktu an haw hun chuan.\nSual a ta chhanchhuah te’n, “Halleluiah Amen”\nTiin hnehna hla mawi an sa ang;\nThinlung lawm leh hlimin fakna hla an sa ang,\nZaia faktu an haw hun chuan.\nZaia faktu an haw hun chuan,\nLungngaih, mangan a awm tawh lo’ng;\nChatuana kan inah,\nZaia faktu an haw hun chuan.",
  },
  {
    number: 5,
    title: "Kan zinkawngah",
    lyrics:
      "Kan zinkawngah hian Lalpa min hruai la,\nTuifawnten min chim kan pil thuai dawn e;\nI lam kan lo hawi khua kan tlai hma hian,\nLo hnai rawh, aw chhandamtu.\n\nChhandamtu min hruai rawh kan zinkawngah hian,\nThli leh ruah, tuifawnten min chim reng e;\nKan dinna lungpui nghing ve ngai lo chuan,\nVan thlen thlengin min kai ang che.\n\nKhawvelin min au ding leh vei lamah,\nHmuhsitna au thawmten min rawn thawng a;\nHarsatna kara kan mittui far hi,\nLawmna hla an chang ngei ang.\n\nDamchhung ni chhiar dan min zirtir ang che,\nI van chanchin khi min hrilh nawn fo la;\nZinkawng thui tak hi nang tel lo chuanin,\nKan zuam lo, min hruai ang che.",
  },
  {
    number: 6,
    title: "Inpeih thuai rawh",
    lyrics:
      "Aw ka dam chhung nite hai loten a liam zel e,\nPan leh vanglai hunte pawh chuaiin a her liam a;\nSanna leh hausaknaten kum tam a daih nem le,\nSaruak maia kir lehin an her liam thin.\n\nInpeih thuai rawh, Chhûm zingah a lo kal dawn;\nTap chungin i in leh lo kalsan a tul tawh ang,\nKhawngaih hun a liam tawh ang.\n\nLalthutthleng var hmaa hnam ze tin an inkhawmin,\nNunna bua ziak ang a ka hming an lam hun chuan;\nLawm avanga mittui nen tlantu chibai bukin,\nA ropui turzia chu aw ka sawi thei lo.\n\nLal Isua nei si lova thlafam i chan ni chuan,\n‘Khawngaihin kawng min hawn rawh’ tap chungin dil mahla,\n‘Tu nge ni, ka hre lo che’ tih hnawlna ânka chu,\nA râpthlak turzia chu aw ka sawi thei lo.\n",
  },
  {
    number: 7,
    title: "Ka zawng zawng hian fak che a nuam",
    lyrics:
      "Lalpa, tu nge maw ka nih a mi hriat?\nKa chhungte pawh tu nge annih, Lalpa?\nDaikil kar a mi, mual eng hmu pha lote hi,\nEng vangin nge maw ka hmangaih che min tih?\n\nKa zawng zawng hian fak che a nuam,\nKa engkim hi I ta a ni;\nKa hmangaih che, ka hmangaih a che,\nKa zawng zawng hian fak che a nuam, Lalpa.\n\nKa aw neih zawng zawng hian fak zai sa se,\nKa nunna hi lawmin auchhuak rawh se;\nKa neih hlu ber hmangaihna pawh pe che ila,\nA hen zo lo'ng e, I hmangaih ne pawh.\n\nI tel lo chuan eng mah a hlu zo lo,\nI awm chuan ka tan lei van a chang thin;\nKa thlakhlelh ber i ni, ka lunglawmna i ni,\nKa zawng zawng hian fak che a nuam, Lalpa.",
  },
  {
    number: 8,
    title: "Pen khat ka pen",
    lyrics:
      "Manganna phurritten min delh chang ni hian,\nDamlai nun tawp mai se ka ti thin.\nA ngaihna hre lova a lam ka han hawi chuanin,\nThinlung lawmna thuruk min pe leh thin.\n\nHlim takin ka zai ang ka zai ang Halleluiah,\nKa tlantu chu a nung tih ka hria.\nEngma'n min ti nghing lo'ng ka lungpui Krista a ni,\nA man engkimah min lo hualhim thin.\n\nI remruat chu ka tan hriat thiam har mahse,\nKa rinna che a nghing ngai lovang.\nTui hna thar a lo luan chhuah theihna tur atan,\nKeimah zawk hi ka tlawm a tul si a.\n\nAmah ka duhnain pen khat ka pen chuan,\nKa lam hawiin pen sawm a lo pen thin.\nHriat thiam rual loh khawngaih leh hmangaihna chuanin,\nChatuan fa nihna chanvo min lo pe.",
  },
  {
    number: 9,
    title: "Nang chauh ka bel ang",
    lyrics:
      "Ka Lal Isu, ka thlarau a chau zo ta,\nKalvari lam ka rawn pan, min pui rawh;\nKa thinlung chhungril berah lo lut la,\nAw, I ta ka ni, ka lo kal e.\n\nNangmahah chuan beiseina, thlamuanna leh himna,\nRemna te, ngaihdamna, nunna leh hlimna famkim;\nChhandamtu tak, hmangaihtu, a bul leh tawp,\nAw, kumkhuain nang chauh ka bel ang.\n\nAw, ka Pathian, I kawng te min hriattir rawh,\nThutakah chuan min hruai la, nitin in;\nKa thinlung hi ti thianghlim zel ang che,\nAw, min enfiah la, min hruai zel rawh.\n\nKa Chhandamtu, misual te thian i nih vangin,\nKa rawn pan che tumah dang ka ngai lo;\nChatuan thlenga ka mamawh ber Lalpa,\nAw, min thukru la i angchhungah.\n",
  },
  {
    number: 10,
    title: "Thihna luipui",
    lyrics:
      "Damlai nite hi kawlah an herliam thin,\nTah leh buaina ten nitin min nang vela;\nLal remruat a ni tuman kan hnial thei lo,\nPathian anchhedawng hringfate kan lo ni e.\n\nAw, thihna luipui kan daikai hma chuan,\n(He buaina) Ram khawharah hian luaithli kan nul thin;\nVansang run nuamah kan chawlh hunah chuan,\nThihna tura anchhia reng a kiang tawh ang.\n\nVanram panna kawng zim kan zawh mek lai hian,\nHringfa tana vawi khat thih a tul si maw;\nKrista nena thihna luipui kan loh chu,\nHlauhawm ber a ni, rapthlak ber a lo ni e.\n\nThihna thlan pawhin a hneh loh Lal Isua,\nThihna hneha tho leh in a nung reng ang;\nZanthim a rala khua a lo var hun chuan,\nHnehtu Lal Isua zarah ka him dawn si a.\n\nNunna, chakna leh hun leh kum ral mahse,\nVanah in ka nei ropuina zam velah;\nLungduh kal hmasate nen kan len hun tur,\nThihna luikam atang hian ka thlir bang thei lo.",
  },
  {
    number: 11,
    title: "Lei leh van thil zawngte aiiin",
    lyrics:
      "Lei leh van thil zawngte aiin,\nKa Lalpa Kraws ka chhuang a;\nChutah chuan in ka Lalpa chu,\nKa ai a thih vangin.\n\nChhandamtu hnenah ka inpe,\nA nunna min pek vangin;\nHmangaihna in ka chawimawi ang,\nChatuan ram ka thlen thleng in.\n\nKeiin khawvel ka khengbet a,\nKhawvel in min khengbet a;\nKa Lalpa Kaws vuang chung zelin,\nLeiram hi ka chhuahsan ang.\n\nKa mithmuh leh ka beng hriat ten,\nSuallam ah min hip mahse;\nThlarau thianghlim in min hruai a,\nHnehna chu ka chang ngei ang.\n\nAw, chhandamtu min hruai zella,\nDamlai kawng chhukchho ah hian;\nI tlansa te i lawr hunah,\nKei pawh min hruai ve ang che.\n",
  },
  {
    number: 12,
    title: "Ka duh tu dang mah an awm lo",
    lyrics:
      "Khawvel tuifinriat zauvah hian,\nLungngaihnaten min tuam vel a;\nAw, min kai rawh ka chhandamtu,\nBuaina chhum ten min chim lai hian.\n\nAw, Lal Isu, nang chauh lo chu,\nVanah khianin tu nge ka neih?\nLeiah pawh hianin nang lo chu,\nKa duh tu dang mah an awm lo.\n\nEn teh Lalpa, kan lenna hi,\nBuai leh thimna râl lo lianin;\nThlamuanna hmun reng a awm lo,\nI ram tiam ka thlen hma hi zawng.\n\nLei lungngaih zan thim hnuaiah hian,\nI ram tiam chu min thlir tir la;\nLei lungngaihna min tuamtu hi,\nLungawi takin ka pal dai ang.\n",
  },
  {
    number: 13,
    title: "Ka lawm e, Isu",
    lyrics:
      "I thu hian min thlamuan thin,\nI aw hian min ti chak thin;\nHe khawvel rohlu ai hian,\nKa ngaihlu zawk i hmangaih thu.\n\nKa thlang che ka ta i ni,\nI ta ka ni min lei si;\nThil dang zawng zawng ai pawh hianin,\nNang ka nei hi ka lawm e Isu.\n\nKa chak loh chang niah pawh,\nMin kalsan lo i hnai reng;\nDotu lakah min humin,\nKa tan dawhkan i buatsaih thin.\n\nChhandamna dang a awm lo,\nKawng dawng reng hi a awm lo;\nKawng leh thutak Lal Isua,\nNangmah chauh hi nunkawng i ni.\n",
  },
  {
    number: 14,
    title: "Min hruai thin",
    lyrics:
      "Nun tuihal leh beidawng chau in,\nThlalerah chawlhna ka zawng thin a;\nTuihal rehna ka hmu si lo,\nA tawpah Lalpa hnenah ka kir leh thin.\n\nNun tuihal leh beidawng chau in,\nThlalerah chawlhna ka zawng thin a;\nTuihal rehna ka hmu si lo,\nA tawpah Lalpa hnenah ka kir leh thin.\n\n\nMin hruai thin tiau dup hmunah te,\nLalpa chu ka kawng hruaitu a ni;\nMeialh leh chhumding in min hruai thin,\nHarsatna karah lawmna min pe thin.\n\nThlipui hlauhawm, hling leh suar te,\nHrehawmna tawh chang te awm mahse;\n\nChung lam thlir la, hlau suh ang che,\nChutah Lalpa hmel mawi\nchu a lo hnai thin.\n\n\nMin hruai thin tiaudup hmunah te,\nLalpa chu ka kawng hruaitu a ni;\nMeialh leh chhumding in min hruai thin,\nHarsatna karah lawmna min pe thin.\n\nTawrhna a ni, ringtu nun hi,\nI kawngah chauh chang te awm mahse;\n\nAw, nghak hram la, thim a kiang thin,\nI lungngaih a hnen\nthlen la a lo hnai ang.\n\n\nMin hruai thin tiaudup hmunah te,\nLalpa chu ka kawng hruaitu a ni;\nMeialh leh chhumding in min hruai thin,\nHarsatna karah lawmna min pe thin.\n\nMeialh leh chhumding in min hruai thin,\nHarsatna karah lawmna min pe thin.\n",
  },
  {
    number: 15,
    title: "Rawngbawl tura chhandam",
    lyrics:
      "Sualna zawng kalsan a, sim a, piangthar a,\nKristaa nun neite tan;\nTheihtawka rawngbawlin a thu puangdarh tura,\nRawngbawl turin min chhandam.\n\nRawngbawl tura chhandam kan nih tawh avangin,\nKristaah kan nung tawh si,\nRawngbawl tura chhandam thisena lei kan ni a,\nRawngbawl tura chhandam kan ni.\n\nLalpa tan ram zawng zawng lak anih hma chuan,\nRawngbawl tura a chhandamte;\nChhel tak leh huai takin i thawk zel ang u,\nVanah lawmman a tam si.\n",
  },
  {
    number: 16,
    title: "Khaw thianghlim Jerusalem",
    lyrics:
      "Zan hi a ral ang a,\nChatuanin khua a vâr ang;\nHnehna puan var sinin,\nLa Isua a lo kal dâwn e.\n\nKhaw Thianghlim Jerusalem-ah chuan,\nIsua tlante kan châwl ang;\nNunna Lallukhum chu khumin,\nNí angin kan êng tawh ang.\n\nNi leh thlaah te khian,\nChhinchhiahnate kan hmu ang;\nA hun a thleng dâwn ta,\nMuhilte an tho leh dâwn e.\n\nHrehawm leh natna te,\nTâmte pawh lo tla mahse;\nChhûm zingah Isua nên,\nVân lam hawiin kan lêng tawh ang.\n",
  },
  {
    number: 17,
    title: "Nang hnaih in",
    lyrics:
      "Chul lo tur ka rochan i ni,\nNunna leh thian aia hlu;\nVan in kawng ka zawh mek lai hian,\n\nNang hnaih in (x4),\ni kiangah min kaltir rawh.\n\n\nLei mawina leh nawmsak na te,\nka dil lo hning thanna nen;\nTuarna pawh ni se lawm tak in,\n\nNang hnaih in (x4),\ni kiangah chauh kal ka duh.\n\n\nThih hlim kawr mn hruai kai ang che,\nDamlai tui fawn hlauh awm nen;\nKa chatuan kawng khar mawi tak chu,\n\nNang hnaih in (x4),\nhawn ka nuam Lalpa nang nen\n",
  },
  {
    number: 18,
    title: "I ta ka ni",
    lyrics:
      "Thlaler hmun khawharah, ka nun chau in a rum,\nTanpuitu ngaiin a au fo thin;\nThlamuantu khawngaihtu Lal Isua alo langa,\nKa nun riangvai rethei a thlamuang thin.\n\n\nEngpawh thleng se ka lungawi ang,\nChhandamtu i kianga ka awm phawt chuan;\nKhawvel hreawm Setan rallian lo hrang thin mahse,\nHnehtheihloh nun ka nei I ta ka ni.\n\n\nHarsatna hringnunah alo thlen changte hian,\nHlimna ka chan lai aiin ka hnaih zawk che;\nHarsatna ka dil lo che mahse aw ka Lal Isu,\nEngkim hi i thu ang nizel rawh se.\n\nThihna Lui piah lamah ka nunna thuhruk a ni,\nKhawvel buaina te'n min chimbuai tawh lo'ng;\nMahse zanthim hnuaiah ka kal thiamlo keimah chuan,\nAw Isu min kai la ka hma hruai rawh.\n",
  },
  {
    number: 19,
    title: "Vanram ropuiah",
    lyrics:
      "Zinkawng khawharah hian lungngaih leh natna te,\nManganna, chungpikna a lo thlen in;\nKa zam thin, ka buai thin, ka mittui a luang fo thin,\nThlen hmabak vanram khi ka ngaizual thin.\n\nVanram ropuiah chhandamtun min lo hmuak ang,\nA kiangah tlansaten an fak ning lo'ng;\nHmangaih vanga ka Lal hmel hliam hnu khan,\nLawmna mittui far chungin ka kuangkuah ang.\n\nTheihtawka rawngbawla kawngdik zawk tum pawhin,\nSawichhiatna, mualphona a lo thleng a;\nKa chhungril a rum thin i rawngbawl a har fo thin,\nChawlhna nuam vanram khi ka ngaizual thin.\n\nVanah khian ringtute kan parvul ve ang a,\nMin hruai dawn kawngkhar mawi chu kan pan ang;\nKa chan tur ka dawn thin thlarauin ka tem lawk thin,\nRinnain chu hmun chu ka thlir fo thin.\n",
  },
  {
    number: 20,
    title: "Lalpa a tha",
    lyrics:
      "Ka hringnun chhui chang hian lungawi a har mang e,\nHarsatna leh buaina te hian nitin min hual thin a;\nTanpuitu reng awm lo ang hian thinlung a rum thin a,\nLalpa beiseina erawh a nung reng thin.\n\nKa tan Lalpa a tha a ni, aw, ka tan a tha a ni,\nKa kawngte tluangin lang lo mahse;\nHei hi ka hrereng min enkawl thin,\nMin hmangaihtu a ni, kei ka tan hian Lalpa a tha a ni.\n\nI lam hawi, nang ngaitu i hawisan ngai lo vang,\nI hmuhtir thin i ngaihsak zia, i tihsak an sawi thin;\nKei beisei tur reng nei lo hi, Lalpa i lam ka hawi,\nNangmah chauh a ni kan beisei mei eng chu.\n\nNangma lam tantute chhanhim loh ang mahse,\nSadraka te i hmuhtir khan i chenchilhna an chang;\nKei pawh Lalpa hei ka duh ber i ke bula awm hi,\nChu chu hlu hianin kei zawng ka ring thin e.",
  },
  {
    number: 21,
    title: "Inkhawmpui tiak tawh ngai lohna",
    lyrics:
      "Thenna ram khawvel hreawmah hian,\nTapin lungduh lenrual kan then leh thin;\nKhawpui hlun ram mawi kan thlen hunah,\nLuaithli nul inthen a bang tawh ang.\n\nChu khawpui mawiah tlansa te lennaah,\nInkhawmpui tiak tawh ngai lohna ramah;\nIn ka nei tah chuan, Chhandamtu buatsaih,\nInkhawmpui tiak tawh ngai lohnaah.\n\nHmangaihte tapin then mah ila,\nLawmna te'n mual min liamsan mahsela;\nLeiah chantur nei lo mah ila,\nKhawpui hlun rammawi ka tan a awm.\n\nChhandamtu, i hnen ka thlen hun chuan,\nHarsat, mangan, buai a bo tawh ang;\nLungngaihna chhum te'n min chim tawh lo'ng,\nKhawpui hlun ram mawi ka thlen hun chuan.\n",
  },
  {
    number: 22,
    title: "A hmangaihna a lo ni",
    lyrics:
      "Ka Lalpa min hruaina hi,\nThu in ka hril seng dawn lo;\nKa zai leh ka banphar te zawng pawh hian,\nA hmangaih an hril seng lo.\n\nMin hmangaihna chhiar dawn ila,\nKa hringnun hian a hril phak lo;\nKa nun leh ka neih zawngte nen hianin,\nA hmangaihna a lo ni.\n\nA malsawm ka chhiar seng lo,\nKa mamawh chitin min pe;\nLamtluang zim leh thim ka zawh lai pawhin,\nA hmangaih banin min kai thin.\n\nKa hmabak a eng zel ang,\nDoral lian a tlawm zel ang;\nKa rin leh ka beiseite aia sangin,\nMin la chawisang zel dawn si.\n",
  },
  {
    number: 23,
    title: "Beramno kan fak ang",
    lyrics:
      'Mithianghlimte lenna Beram no khawpuiah,\nKa tlantu hmel duhawm ka hmu ang, lawmtakin;\nChutah buaina leh sualna vanga ka rumna zawng,\nKa chhandamtu hnenah ka thlen ang.\n\nChatuanin, aw, ka fak ning lo\'ng,\nChutah van angel leh serafim zawng te nen;\nHlimtakin kan leng ang, thlarau chawlhna ramah,\nChatuanin Beram no kan fak ang.\n\nBeram no thisen hlua tlansa te zawng chuan,\nChatuanin hlim takin Chhandamtu chu fakin;\nLungngaih buaina leh hreawmna tuar tawh lo in,\nChatuanin beram no an fak ang.\n\nChatuanin chu ramah hmangaih lungduh te nen,\nHla mawi ropui remin bang lovin kan fak ang;\n"A thianghlim e," tiin chhun leh zan chawl lovin,\nChatuanin Beram no kan fak ang.\n',
  },
  {
    number: 24,
    title: "Lawmna tlang",
    lyrics:
      "Lalpa, nangin min hria, ka nun chhungril zawng nen,\nKa hun pumin min hruai, chhinchhiahna mak tak nen;\nMin hriatrengna hi ka tan a va hlu em,\nChauh chang awm thin mahse, Lalpa ka zui ang che.\n\nKa Lal leh ka Pathian awm reng i lo ni e,\nTunge hrilhfiah zo ang le?\nMihring finna hian a chhui phal mawlh si lo,\nFak tawk theih che ka nuam, hei hi ka duhsam ber.\n\nKa tan i remruatah lungawi ka tum ngai lo,\nVuina hlira khatin duh tin ka dil thin che;\nMahse, nangin min hria, ka mamawh chauh min pe,\nLungawina tlang thawveng boruak min hip tir thin.\n\nHarsat, mangan, buaina, hrehawmnaten min bawm,\nDamchhung khawsak lungkham vangin ka rum fo thin;\nLungngaia ka awmin Lalpa'n min ngaihtuah thin,\nTahna ruam atangin lawmna tlangah min lawn tir.\n",
  },
  {
    number: 25,
    title: "Aw hmangaihna va thûk èm",
    lyrics:
      "1. Aw hmangaihna a va thuk em!\nMi sual dum ber min silfaina chu;\nAnchhedawng Kraws ka tan malsawmna,\nVan Lalber thihna Kraws ka tan damna.\n\nLei leh vana roreltu,\nKraws lera tuihala au kha;\nVana Lalber ranthlenga zal hi,\nEng dang vang a ni lo; keimah vang a ni.\n\n2. Aw hmangaihna a va sang em!\nKa hril seng lo min hmangaihna hi,\nKa aw neih zawng i hming ropui nan,\nMin hmangaihtu Lalpa, ka hmangaih che.\n\n3. Aw hmangaihna a va zau em!\nI lalțhutthleng ropui kalsan a;\nLei hrehawma i lo kal mai hi\nAw a va ropui em! ka hril seng lo.\n\n4. Aw hmangaihna a va mak em!\nKa chhiar seng lo min enkawlna hi;\nAw, mi tling lote min thlang chhuakin,\nȚawmkai lo berte pawh min hmang țhin a\n",
  },
  {
    number: 26,
    title: "Min hmangaih si a",
    lyrics:
      "I khawngaih kraws kawng zawh in,\nI rawngbawl lamtluang ka chhui,\nKawng nuam leh hahdam changte pawh awm thin;\nKawng hahthlak leh ralti a,\nMin hruai ni pawh hian in,\nI rinawm zia min hmuh tir leh thin.\n\n\nKa tan i rinawmna, aw! a ropui e,\nEngdang reng hi, aw! ka sawi thei lo;\nI khawngaih lainatna ka dawn hi a ropui e,\nKa hmangaih che min hmangaih si a (2).\n\n\nI khawngaih leh malsawmna,\nLei rohlu ka chan zawng te,\nKa chhiar seng love, aw! a ropui e;\nI thatna ka tan lawmna,\nI khawngaih ka tan chawlhna,\nTu nen nge ka teh dawn che Lalpa?\n\nHei hi hlan nawn ka duh thin,\nKa nun leh theihna te hi,\nI tan rimtuiah lo chang fo rawh se;\nHmangaih che ka thiam ne'maw,\nI duhzawng tih mai loh chu,\nKa hmangaih che min hmangaih si a.\n",
  },
  {
    number: 27,
    title: "I fak ang u",
    lyrics:
      "Khawvel ropui, mawina leh nawmsakna ten,\nKrista hmel an hliah fo thin;\nKan hmangaih ber te pawn natna min thlen fo thin,\nDamna Krista hmel en ila, lungawina kan hmu leh thin,\nA hming ropui i fak ang u.\n\nA hming ropui i fak ang u,\nKrista a ropui ber sia;\nAmah thlan zel hi kan tihtur ber a lo ni,\nKan damna Krista, a hming i fak ang u.\n\nKhawvelah hian kan duh tinreng nei mah ila,\nKhawvel mamawh ber chu Isua;\nKan sual man tlan nan krawsah kan tan a lo tuar,\nKan sual dum thimte a lo fai nan,\nChanchintha hril ila, a hming ropui i fak ang u.",
  },
  {
    number: 28,
    title: "Lal ropui kan neih chuan",
    lyrics:
      "Indona kan hlau lon'g,\nZan thim kan hlau lo'ng.\nNang nen zawh kan zuam thin phairuam zau tak pawh,\nNang kan kiangah kalin,\nHma I hruai ang a,\nKan inhumhimna leh chhandamna I ni.\n\nFak hla sa in; Lal ropui kan nei,\nA hmangaihna chu kan inhumhimna kulhpui,\nTehkhin rual loh, hmangaihna ropui;\nTu'n nge min do thei ang Lal ropui kan neih chuan.\n\nHarsatna te tawk in,\nChauh chang nei thin in;\nBosan che mahila, min hmangaih reng fo;\nMin thlahthlam ngai lova, min en san ngai lo.\nKhawngaihna tawp lovin Nangin min chelh reng thin.\n\n(Bridge)\n\nEng hlauhawm mahin min then hrang thei lo'ng,\nThih leh hrem hmun te'n min ngam lo'ng,\nKan tan a fapa hlan tu chuan,\nHmangaihin min pawm.",
  },
  {
    number: 29,
    title: "Lungpui nghet",
    lyrics:
      "Sual lak ata zalen ka ni ta,\nKraws kan phurrit zawngte;\nLal Isua'n min tlenfai sak tawh si,\nLalpa kohna i chhang let ang u.\n\nChhungril lamah kan chak lohnate,\nAma hnenah i hlan ang u;\nChu chu kan mawina tur a lo ni,\nI thinlung Lalpa hnenah hlan rawh.\n\nChatuan ata ka innghahna nghing ve ngai lo,\nKan Pathian lungpui nghet tak i lo ni e,\nI ropui ber kei ka tan hian.\n\nChhungril lamah kan chak lohnate,\nAma hnenah i hlan ang u;\nChu chu kan mawina tur a lo ni,\nI thinlung Lalpa hnenah hlan rawh.\n\nChatuan ata ka innghahna nghing ve ngai lo,\nKan Pathian lungpui nghet tak i lo ni e,\nI ropui ber kei ka tan hian.\n\nChatuan ata ka innghahna nghing ve ngai lo,\nKan Pathian lungpui nghet tak i lo ni e,\nI ropui ber kei ka tan hian.\n\nChatuan ata ka innghahna nghing ve ngai lo,\nKan Pathian lungpui nghet tak i lo ni e,\nI ropui ber kei ka tan hian.",
  },
  {
    number: 30,
    title: "An leng za tawh ang",
    lyrics:
      "Lei hringnun a ral hun chuan,\nLalpa ramah kan leng ang;\nKhawvel hi ka ngai tawh lo'ng,\nKir zai reng kan rel tawh lo'ng.\n\nChu hmuna leng te chuan thenna thu an sawi ngai lo,\nHmangaihtu leh hmangaih te an intawkkhawm ang a,\nHmangaihnain an leng za tawh ang a.\n\nLei hringmi ni tawh loin,\nVanmi te kan ni tawh zawk;\nTunah zawng khualzin kan ni,\nVanram kan ta a ni si.\n\nNatna leh lungngaihnate,\nChu ramah chuan a awm lo'ng;\nThihna te'n hmun an chang lo'ng,\nTahna reng a awm tawh lo'ng.\n\nLalpa hmel ka hmuh chuan,\nMin tlanna thu ka hrilh ang;\nChutah van kawtthler fangin,\nLalpa fakin kan zai ang.\n",
  },
  {
    number: 31,
    title: "Lalthuthleng kiangah",
    lyrics:
      "Phurrit phur leh chau takin lungngaia rum changin,\nKhawvel hi hreawm ka ti thin;\nMahse, zam mai lovin hmalam ka pan zel ang a,\nChatuan chawlhna ka la thleng ngei ang.\n\nVan kawtthler mawiah min rawn zawn chuanin,\nLalthuthleng kiangah min rawn hmu ang;\nVan angel leh tlante nen fakin kan lo zai ang a,\nLalthuthleng kiangah min hmu ang.\n\nChu in nawm leh ropui zia kan hrethiam phak lo'ng e,\nA chanve pawh kan hre lo ve;\nChu in ropui taka ka chhandamtu chu hmuin,\nKa thleng ngei ang hmun min buatsaih chu.\n\nZin kawng chanchinte hrilhin a kutah min chelhin,\nKa mittui min hrukfai sak ang;\nLawmin min kai ang a, ka lut ang hneh hla sain,\nKa thleng ngei ang Lalthuthleng bul chu.\n\nBeramno chu fakin kan lo zai ang a,\nMin rawn hmu ang, ropuina ka chang tawh ang;\nLalthuthleng kiangah min hmu ang.\n",
  },
  {
    number: 32,
    title: "Ka thupui ber",
    lyrics:
      "Ramtiam lam panin chak lo tak chungin nitin ka kal a,\nMahse, aw Lalpa, chimbuaitu an tam ngei, ka kal thiam lo;\nSetana'n nitin min bei, nangmah kalbo san turin,\nMahse, chak lo ber lai paw'n ka peng ngam lo,\nLalpa, nangin min chelh tlat rawh.\n\nI ta ka ni e, chatuan atan,\nKa thiamna, finna zawng te;\nLalpa, i tan a ni,\nHei hi ka thupui ber - nangmah fak hi.\n\nTunah, aw Lalpa, hei hi ka hria a, lawmthu ka hrilh che,\nKa tlin loh anga nangin min pawmin min lo duh si;\nKa sualna zawng zawng te hi mite'n hrereng thin mahse,\nLalpa, nang erawh chuanin i theihnghilh si,\nI hmangaihna ka fak fo ang.",
  },
  {
    number: 33,
    title: "Lal Isua hmangaihna",
    lyrics:
      "Lal Isua hmangaihna ropui hi,\nHringfa ten kan hrefiah zo lo fo thin;\nHmangaihna thuril danglam leh mawi chu,\nLal Isua hmangaihna hi a ni.\n\nNunchau in i rum thin maw? Beidawng in i tap thin maw?\nLal Isua hmangaihna chuan a nghak che;\nSawmtute a hnar ngai lo, tlai luat pawh a awm nem maw,\nLal Isua hmangaihna hi a mak a ni.\n\nLal Isua hi aw a mawi ber e,\nHlinglukhum in phuar vel mahsela;\nKa lal ka chhandamtu chu ka fak ang chatuan thleng in,\nHaleluiah! tiin ka fak ang.\n\nBawrhsawmna ka tawh chang leh chak lova ka awmlai pawn,\nLal Isua hmangaihna chu a tawk e;\nMal in min awmtir ngailo zanthim pawh,\nAmah nen chuan muang takin ka kal amah ka thian a ni.\n\nEng dang reng ka ngai tawh lo'ng,\nI hmangaihna kut chauh hi aw Isu ka tan a tawk khawvelah,\nVan hmunmawi ka thlen thleng in hei hi ka chatuan hla tur,\nLal Isua hmangaihna hi a hlu ber e.\n",
  },
  {
    number: 34,
    title: "Pathian hmel",
    lyrics:
      "Thim zingah thuin, mangang ritphur in,\nHlim ni reng i beisei ngam tawh lo maw?\nChunglam thlir reng la, chhandamtu lam chu,\nPathian hmel duhawm chu a lo êng ngei dawn e.\n\nI rilru lungngaia rumin,\nMangang in tap thin mah la;\nI beiseina chu bo rih mahse,\nThim chu a kiang ang, khua a la vâr dawn;\nPathian hmel duhawm chu a lo êng ngei dawn e.\n\nI thlarau chauin, i thinlung a hliam,\nLalpa that zia chu i lo ringhlel maw?\nMahse nghak hram rawh, kawng hawn a ni dawn,\nPathian hmel duhawm chu a lo êng ngei dawn e.\n\nLei hringnun hi chuaiin a ral mek,\nLalpa thu erawh a ding reng dawn;\nKrista ngei chu a lo hnai ta a,\nPathian hmel duhawm chu a lo êng ngei dawn e.",
  },
  {
    number: 35,
    title: "Duhthlanna sang ber",
    lyrics:
      "Dam lai lamtluang ka zawh laiin,\nDoral a lian thlemna karah;\nThlarau zawngin peih mahse,\nTisa erawh a chak si lo,Ka hneh zo lo ka tlu leh si thin.\n(Châng 2-na sak leh nghal tur)\n\nMi rethei ka va han ni em!\nTu in nge min chhanchhuak ang le?\nThihna taksa atang hian;\nTihtheih dang reng ka nei si lo,\nDuhthlanna sang ber hlan mai loh chu.\n\nAw tunah lawmin ka khat,\nKrista keimahah a nung zawk si;\nThiamloh chan reng a awm tawh lo,\nMin tlantu nung anih vangin.\n\nThlemna thlipui a zual zel ang,\nDoral lian Setan ramah hian;\nMahse himna kulh Krista,\nChatuan nunna ka thlan vangin,\nKumkhuain ka him reng tawh ang a.",
  },
  {
    number: 36,
    title: "Vanglai nun",
    lyrics:
      "Thiltha ti atan khawngaih in min ko,\nThatlai nite hi Lalpa tan a hmang turin;\nThiamna theihna leh kan aw neih zawng te,\nRinawmin Lalpa tan i hlan ang u.\n\nVanglai nun hi hlimthla ang maiin,\nHlobet par ang in a la chuai mai dawn si;\nRinawm takin thatlaini te hi Lalpa tan i hlan ang u,\nKan vanglaini a chuai mai dawn a sin.\n\nHe khawvel ah hian harsatna tawk in,\nManganna te leh beidawnna te lo thleng in;\nSualna chhumpui leh thlemna ten min bei mahse,\nNghet taka dingin i pen zel ang u.\n\nHringnun lo ralin thihna thlan thim chu bel in,\nChhandamtu Lalpa i tawk ngam dawn em?",
  },
  {
    number: 37,
    title: "Ka mit ngei hian a thlir ang",
    lyrics:
      "Ka tlantu chu a nung e;\nNakinah khawvêlah hian,\nHmuh hmaih rual lohvin a lo ding ang;\nKa vun hi tihchhiata a,\nAwm hunin ka la hmu ang,\nKa mit ngei hian a thlir ang LAL ISUA.\n\nHei mawlh hi ka lungkham ber,\nKa Chhandamtu hmel hmuh hi;\nKa tuarna zawng zawng hi nêp mah sela;\nKa tuar chhan LALPA a ni,\nKa chân chhan chu a ni si,\nKa dam chhan chu LAL ISUA hi a ni.\n\nVawi tam tak hmu chak chein\nDil fo ṭhin che mah ila,\nKa khualzin kumte a lo tâwp ang a,\nKa tisa hian a hmu ang,\nI Thu-in min lo hrilh si;\nThlarau mitin ka hmu, Halleluia!\n\nTunah zawng darthlalangah,\nKan hmu chauh; chutih hun chuan,\nInhmatawnin a ni ang, a kim tawh ang;\nHriatna chu ka hre kim ang;\nHmuh theih loh zawng ka hmu ang,\nPathian hmêl ropui tâwp chu ka hmu ang.\n",
  },
  {
    number: 38,
    title: "Lawmthu ka hrilh che",
    lyrics:
      "Ka lungkham leh chakkhai tinreng nangin min ngaihtuahsak thin,\nTawngtaia i hmaa ka kunin nangin min lo ngaihsak thin;\nKa mamawh tin min pek avangin he fak hla hi ka hlan che.\n\nLawmthu ka hrilh che aw Lalpa, chawlhna tuikamah te min hruai a,\nI hming avangin felna kawngah te min hruai thin a;\nThihna hlim kawr zawh mah ila nang ka hnenah i awm si a,\nKa hlau ngai lo'ng i kiangah chuan ka him reng si.\n\nNang ka lama i tan chhung chuan tunge min do thei ang le?\nEngmahin min then thei ngai lovang i hmangaihna ata chu;\nHmangaih hlu ber sual chhandamna chu thinlungin ka vawng reng ang.\n\nMin dotu laka min humin ei tur min lo buatsaih thin,\nAw, lawmna famkim chu pek min tiam malsawm tinrengin ka liam;\nI thatna leh ngilneihna vangin he fak hla hi ka hlan che.",
  },
  {
    number: 39,
    title: "Van lawmna kim",
    lyrics:
      "Chhandamtu min hruaina lamtluang ka thlir let a,\nKhawngaihna in min chhandam a;\nKhawngaihna in min nun sak thin,\nHmangaihna in min enkawl thin.\n\nVan lawmna kim ka neih theih nan,\nLei lawmna hi min thiah sak a;\nVan nun hlut zia ka hriat theih nan,\nHringnun nep zia min hriattir thin.\n\nKhawngaihna in min thukru in min awmtlei thin,\nDamlai hreawm kawng chhuk chho pawh;\nChung muvanlai iang min chawiin,\nThlaler ah pawh bikna min siam.\n\nKa hma ah hian fiahna tinreng a rawn tir a,\nAmah vekin min hneh sak a;\nKa theihna zawng ka sawm khawm pawh,\nEngmah lo mai a chan tir thin.\n\nLei lungngaihna pelh kan nghalhlel ringtu ten,\nMahse, tihtur min pe;\nKhawngaihna a rawngbawl tur leh,\nKhawvel thim hi tieng tur in.",
  },
  {
    number: 40,
    title: "Lalpa thatna",
    lyrics:
      "Ka hmangaih che, i khawngaihna tlai ve ngai lo,\nKa nun hi nangin i chelh thin a,\nZing khawvar engmawi lo chhuakin,\nZan mu ka chhin hma zawng,\nAw ka sa ang i thatna hi Lalpa.\n\nI rinawm zia ka nunah a lang,\nI thatzia hi ka chungah a lang thin;\nKa theihna zawng i tan ka hlan ang,\nAw, ka sa ang i thatna hi Lalpa.\n\nI anka mawi meipui kara min chhantu chu,\nZanthim hnuaiah pawh nangin min hnaih fo thin a;\nKa innghahna i ni a, ka tana thian hlu ber,\nKa dawng fo thin i thatna hi Lalpa.\n\nI thatna ropui tak chuan mi zui reng fo thin a,\nI thatna ropui tak chuan mi zui reng fo thin a,\nI hmaah kunin ka rawn inpe e ka nun ka hlan a che,\nI thatna ropui tak chuan mi zui reng fo thin a,\nI thatna ropui tak chuan mi zui reng fo thin a,\nI thatna ropui tak chuan mi zui reng fo thin a\nI hmaah kunin ka rawn inpe e ka nun ka hlan a che,\nI thatna ropui tak chuan mi zui reng fo thin a.\n\nI rinawm zia ka nunah a lang,\nI thatzia hi ka chungah a lang thin;\nKa theihna zawng i tan ka hlan ang,\nAw, ka sa ang i thatna hi Lalpa.\n\nKa sa ang a, ka sa ang a....\n\nI rinawm zia ka nunah a lang,\nI thatzia hi ka chungah a lang thin;\nKa theihna zawng i tan ka hlan ang,\nAw, ka sa ang i thatna hi Lalpa.\n\nAw ka sa ang a, i thatna hi Lalpa.",
  },
  {
    number: 41,
    title: "Min tlan ta",
    lyrics:
      "Beram No thisen a tlan ka ni,\nchu tlanna ropui hril ka nuam;\nKhawngaihna kang lova tlan ka ni,\nChatuana tan a fa ka ni.\n\nMin tlan Beram No thisenin min tlan\nMin tlan, min tlan, chatuana tan a fa\n\nIsuan min tlanna a va lawmawm,\nka hril seng lo ka lawmna thu;\nEnglai pawhin min awm pui reng thin,\nKa thinglungah ennna min pe.\n\nA lal ropuina a inthuamin,\nA hmel mawi ka la hmu dawn si;\nA hmangaihna in min hruai zel a,\nZan thim hnuaiah pawh ka fak ang.\n",
  },
  {
    number: 42,
    title: "Hawilopar mawi Isua",
    lyrics:
      "He khawvel lungduh inthenna ramah hian,\nVanglaini ten mual an liam a;\nTahna leh lungngaihna a lo thlen lai te hian,\nMin ngaih tir chatuan ram mawi chu.\n\nKa taksa hi lo chuai mahse,\nPiallei hmun khawharah;\nFamdairial changin zal mah ila,\nZion tlang mawi khi ka thlen hunah chuan,\nHawilopar mawi Isua ka hmu ang.\n\nThihna Jordan lui ka pelh hunah chuan,\nHmangaih lungduh then tak te nen;\nBang lo vin, aw, kan intawk leh ang a,\nHmangaihna ram mawiah chuan.",
  },
  {
    number: 43,
    title: "Van khua",
    lyrics:
      "Rauthlain ka fang vel chung vankhua nuam khi,\nChutah lungduh kal ta ka han hmu a;\nAn leng dial e, Angel dungthulin,\nHe lei hringnun reng hi an ngai tawh lo.\n\nAw a va mawi em ve, ka sawi thei lo,\nHringmi ânka hian a hril zo lo;\nTual an lenna rangka dâr luan nen,\nA laiah nunna tui a luang del e.\n\nChu nunna lui kam hmun hring nuam cham diaiah,\nA par vul mawi ngei nunna siahthing chu;\nHawi vel ila, engmawi a zam vel,\nThianghlimna leh mawi tin a kim ngei e.\n\nHlimna êng a kai chiai an sakhmelah chuan,\nHmangaih khat liam par tlanin an leng e;\nVan mi zaipawl, mawi tawpin an zai,\nVan khua a nghawr vel an fak zai ri chuan.\n\nHe lei ram ka zin kawng hi ka pelh hun chuan,\nChu ram mawiah hlimten ka leng ve ang:\nVan mi zaipawl fak hla zawm vein,\nTlantu kiangah ka chawl kumkhua tawh ang.",
  },
  {
    number: 44,
    title: "Nang nen chuan",
    lyrics:
      "Nang nen chuan khawi hmunah pawh,\nNang nen chuan engtiang pawhin;\nHrehawmah pawh, rethei pawhin,\nNang nen chuan vanram a chang thin.\n\nI hnena awm turin keimah hi min siam a,\nI hnena awm turin vak bo lo turin;\nI tel lo chuan engmah hian mi ti tlai thei lo e,\nKa famkimna, aw, nang chauh hi i ni.\n\nNang nen chuan khawi hmunah pawh,\nNang nen chuan tlakchham a awm lo;\nNun khawhara thian nei lo in mal in awm mah ila ,\nNang nen chuan vanram a chang thin.\n\nAw Isu, i hnenah chauh ka thla a muang, a hahchawl thin,\nI tel lo a lawmna tur zawng ruai hmu si lo in;\nI tel lo a tlei thei lo min siam i chennan chauh,\nI tel lo chuan ka nun a kim thei lo,\nMahse, nang nen chuan vanram a chang thin.",
  },
  {
    number: 45,
    title: "Aw Kraws",
    lyrics:
      "Kraws thu chu boral mekte tan chuan atna,\nChhandam fate tan Pathian thiltihtheihna;\nAw, Kraws, miten hmusit thin mahse,\nMin chawisangtu ka chhuang zel fo ang che.\n\nAw Kraws, aw Kraws, Pathian thiltihtheihna,\nAw Kraws, aw Kraws ka va ngaisang che em.\n\nAnchhedawng thing Krista thihna chu,\nKa thihnaah Lalpan min puan sak ta;\nAdama mihrinna chu hlip thla in,\nKrawsah ngei chuan min ti boral ta si.\n\nKrista thihna a thi ve tawh te chuan,\nTholeh Krista nunna an chang ngei ang;\nHe dinhmun hi Lalpan i tan ngei chuan,\nA siam che hi i haider dawn em ni.\n",
  },
  {
    number: 46,
    title: "Hnehna chu Lalpa ta a ni",
    lyrics:
      "Thenkhatte'n tawlailir an ring a,\nThenkhatte'n sakawrte an ring a.\nKeini erawh chuan kan Pathian hming kan lam ang.\nKan tho ang a hnehna chu kan puang zel dawn a ni.\n\n(Keini zawng) Boral tura hnungtawlh pawla mi kan ni lo,\nNunna humhim tura rinna nei kan ni zawk.\nA chhandamnaah chuan hlimin kan zai ang a,\nHalleluiah, hnehna chu Lalpa ta a ni.\n\nSual doral lo hrang ṭhin mahsela,\nThlipui ang min nuai vel mahsela.\nKan zam ngai lovang, Lalpa'n kan hma a hruai ang,\nPathian hmingin hnehna puan kan zar ngei dawn a ni.\n\nChhel tak leh huai takin awm ila,\nKan vanglai Lalpa tan hlan ila.\nKan rinawm phawt chuan sual doral kan ngam ngei ang,\nLawmman ropui Lallukhum kan chang ngei dawn a ni.",
  },
  {
    number: 47,
    title: "Sawi nawm leh rawh",
    lyrics:
      "Thiam tawk tea ka ngaihtuah hian\nKa tlantu min hmangaihna leh\nKa tan Kraws-a inpek chanchin\nA mawiin a ngaihnawm bang lo ve.\n\n\nSawi nawn leh rawh min hrilh leh rawh\nIsua'n ka tan a tuarna kha\nKalvari ka damna chanchin\nAw ngaihnawm ka tibang theilo ve.\n\n\nEngah ranthleng kraws a chan le?\nHausa mahse keimah vanga\nA retheih tak chanchin ngei kha\nKa ning lo'ng min hrilh nawn fo rawh aw?\n\nKa Chhandamtu'n mittui nena\n\"Ka Pa, ngaidam rawh\", a tih kha\nA țawngțai kam chhuak aw mawi ber\nThinlai ah a ngaihnawm bang lo ve.",
  },
  {
    number: 48,
    title: "Kan fak zel dawn",
    lyrics:
      "Riangvai saltang chhuahna turin,\nIsua Krista a lo vakvai;\nTihduhdah tuar, rethei riangvai,\nIsuan kraws-ah min hnehsak ta.\n\nHalleluiah, Halleluiah,\nLalpan thil ropui min tihsak e!\nTawtawrawt leh Phenglawng rite nen;\nDarbenthek ri thum leh fiakin,\nPerhkhuang tingtang chi hrang hrang nen,\nKhuangte leh lamin kan fak zel dawn.\n\nHmangaihnaa min zawng chhuaktu,\nKa rul seng lo’ng hring chan chhungin,\nMisual dum ber min silfai ta,\nChatuan nunna ka lo nei ta.\n\nRingtu zawngte, kal zel ila,\nLalpa hming thianghlim ropui chu;\n“A thianghlim e,” ti a auvin,\nKan theihtawpin kan fak zel dawn.",
  },
  {
    number: 49,
    title: "A chetna tur mi a zawng",
    lyrics:
      "Lal Saula ralthuam a ngai lo va,\nAmah rin ngamna ka thuam a ni;\nHmalam thlir lova chunglam thlirtu,\nnih hi ka tan hian a tawk.\n\nThunawn:\nLalpa mit chu hmun tinah a leng ruai a,\nA lama rilru dik tak putu an awm phawt chuan;\nA chakzia tilang turin Lalpa a ngawi rei ngai lo,\nLalpa mit chuan a chetna tur mi a zawng ruai a ni.\n\nRawhtuina mei kan thihna tur maw,\nkan zam lo, Lalpa kan phat thei lo;\nNun hlana i thu zawm tu te hi,\nkan thi lo, chhantu kan nei.\n\nLalpa tan chuan harsa a awm lo,\ntheih loh, tlai tawh pawh a awm thei lo;\nEngkimin a thupek an awih thin,\nA thua awm vek an ni.\n",
  },
  {
    number: 50,
    title: "Eliza hun ropui",
    lyrics:
      "Hei a ni zan hun ropui a thu puanin a lo awm a,\nA lo thleng dawn si a hun dikna,\nFelna, siamthar lehna ni chu;\nA serh leh sang awm lo khandaih nen,\nRiltam leh tuihal a lo thleng ta,\nMahse, hmun khawhar he thlalerah,\nLalpa kawng sialtute kan ni si a.\n\nA lo kal dawn chhum zingah te khian,\nNi aia engin tawtawrawt ri nen;\nLal Isua chhandamtu a ni,\nHlim takin lawm r'u, aw chhandamna.\n\nA ni e Ezekiela hun chu, ruhro pawh tisain a lo khat,\nHei hi chhiahhlawh Davida hmun chu,\nTemple siamthar lehna ni chu;\nBuhseng hun kan thleng, lo hawi chhuak la,\nLalpa huan a hmin zo dawn ta e,\nA seng khawm tura a mi rawihte kan ni,\nHrilin a thu kan au pui e.\n\nJehova Lal ropui a ni,\nJehova Lal ropui a ni,\nJehova Lal ropui a ni,\nJehova lo lal dang a awm lo,\nJehova lal ropui a ni,\nJehova lo Lal dang a awm lo,\nJehova Lal ropui a ni,\nJehova lo Lal dang a awm lo,\nJehova Lal ropui a ni,\nJehova lo Lal dang a awm lo,\nJehova Lal ropui a ni,\nJehova lo Lal dang a awm lo,\nJehova Lal ropui a ni,\nJehova lo Lal dang a awm lo,\nJehova Lal ropui a ni,\nJehova lo Lal dang a awm lo,\nJehova Lal ropui a ni,\nJehova lo Lal dang a awm lo,\nJehova Lal ropui a ni,\n",
  },
  {
    number: 51,
    title: "Chu luipuiah kan intawk ang",
    lyrics:
      "Chu luipuiah kan intawk ang,\nA mawi ngei e, a fawn vel e damten,\nMithianghlimte nen zai kan vawr ang,\nChatuan lalthutthleng kiangah.\n\nKan pa lalthutthleng kianga chuan\nNunna tui a luang chamdel;\nAngel varte lenna hmunah,\nTawh leh ni herchhuak ang maw?\n\nChu lui thianghlim mawi takah chuan,\nBawlhhlawh reng a awm tawh lo'ng;\nChawimawina hla mawi chu sain,\nChatuanin kan hlim tawh ang.\n\nChu luipuiah kan intawk ang,\nA mawi ngei e, a fawn vel e damten,\nMithianghlimte nen zai kan vawr ang,\nChatuan lalthutthleng kiangah.\n\nChu luipui mawi kan thlen hun chuan,\nPhurrit reng a awm tawh lo'ng,\nKhawngaihnain ro a rel ang,\nLallukhum kan khum tawh ang.\n\nKrista hmel engmawi tak mai chuan,\nChu luipui mawi chu a en;\nThihna ngam loh mithianghlimten,\nChhandamna hla mawi an sa.\n\nChu luipuiah kan intawk ang,\nA mawi ngei e, a fawn vel e damten,\nMithianghlimte nen zai kan vawr ang,\nChatuan lalthutthleng kiangah.\n\nReiloteah kan thleng thuai dawn,\nRangkachak khawpui hlun chu;\nLawmna chuai lo kan chang ang a,\nThlamuangin kan chawl tawh ang.\n\nChu luipuiah kan intawk ang,\nA mawi ngei e, a fawn vel e damten,\nMithianghlimte nen zai kan vawr ang,\nChatuan lalthutthleng kiangah.",
  },
  {
    number: 52,
    title: "Lalpa chu fakin ka chawi mawiang",
    lyrics:
      "Lalpa chu fakin ka chawimawi ang,\nMin tlantu a nih vangin;\nHla ka sa ang, a khawngaihna hla,\nKa sa zel fo vang a.\n\n\nKa sual zawng zawng aman min tlaksak,\nA hming thianghlimin; (2)\nKa sual zawng zawng aman min tlaksak,\nHaleluia! A hmingin.\n\n\nKa sual zawng zawng nen ka lo kalin,\nAman chawlhna min pe a;\nMin tlan chhuah avangin ka fak ang,\nHla mawi chu sa zelin.\n\nA hnen ka thlen chuan ka fak zual ang,\nThihna ata min humhim;\nKa fak fo vang a, chatuan thlengin,\nKa fak tawp thei lo vang.\n\nTu pawh a zawngtu tan hmun a awm,\nA duh apiang lo r'u;\nLawmna famkim chu dahin a awm,\nLawmin i zai ang u.\n",
  },
  {
    number: 53,
    title: "Isua hmangaihna leh thatna",
    lyrics:
      "Isua hmangaihna leh thatna,\nLeh zahngaihna i fak ang;\nVan ram in eng leh malsawmna,\nKan tan a han buatsaih a.\n\nVan ram kan thlen hun chuanin,\nChu ni ropui chu kan lawm em em ang;\nLal Isua kan hmuhin,\nHnehtu chu fakin kan zai ang.\n\nVan ram panin kan kal laiin,\nChhumte a lo zing thin ang;\nMahse, kan kal pelh hun chuanin,\nThim leh thawhpik a kiang.\n\nRinawm leh fal taka awmin,\nNitin rawng i bawl tlat ang;\nA ropuina chang ve turin,\nDam chhungin i bei zel ang.\n\nKan hmaa lawmman um zelin,\nA mawina kan thlir thuai ang;\nLungman tam kawngkaa lutin,\nRangkachak tual kan leng ang.",
  },
  {
    number: 54,
    title: "Ni tin Isua ka thinlungin",
    lyrics:
      "Ni tin Isua ka thinlungin ka hmangaih deuh deuh va,\nAmah chu ni eng ai pawhin a mawi zawk zawk em em a;\nAmah chu ka tana mawina ropui ber a lo ni,\nNi tin a hma aiin a lo mawi deuh deuh zel a ni.\n\nA then pawh kan hre thei lo,\nHe lui kam atang hian;\nAw, tah chuan a hma aiin,\nA mawi zual zel tur a ni.\n\nHla taka ka hmuhin a  ropuinain min en a,\nLili par mawi leh varhparh arsi aia eng a ni;\nKa duhnate a tikhatin a tilawm deuh deuh va,\nNi tin a hma aiin a lo mawi deuh deuh zel a ni.\n\nKa rilru a lo chauh hunin aman min tanpui thin,\nKa hrehawm laiin aman a angchhungah min pawm thin;\nKrista ka sual zawng zawng phurtu kha ka hmangaih a ni,\nNi tin a hma aiin a lo mawi deuh deuh zel a ni.",
  },
  {
    number: 55,
    title: "Nangma thil ropuite an sawi",
    lyrics:
      "Nangma thil ropuite an sawi,\nZion kan Pathian khawpui;\nA thu phelh tawh ngai lo va khan,\nA siam che ama chen nan,\nChatuan lungpuia innghat chu,\nEnginnge tinghing ang che;\nChhandamna banga inhungin,\nI hmelma i hlau lo vang.\n\nEnteh, chatuan hmangaihnaah,\nTuinung luite lo chhuakin;\nI fate zawng zawng a chawm a,\nTlakchham reng an hlau lo vang,\nChutiang lui a luan chhungin,\nTunge tuihalin chau vang?\nLalpa a petu a zarah,\nKhawngaihna a bang lo vang.\n\nA hmun tin velahte chuanin,\nRopuina himna turin;\nMei leh chhumte a inlar a,\nLalpa a hnai tih hriat nan,\nChutin anmahni avang chuan,\nEng leh hlim nuam chu an hmu;\nHim nan manaa chu an ring a,\nLalpa'n anni a pek chu.\n\nLalpa Ziona khawpuiah chuan,\nKhawngaiha min tel tir chuan,\nKhawvelin min hmusit mah se,\nI hming chauh ka chhuang ang e,\nKhawvel lawmna a ral mek a,\nA ropui leh mawina nen,\nZion fate chauh lo chuanin,\nLawmna tak an nei lo ve.",
  },
  {
    number: 56,
    title: "Van hmun ropui, hmangaith ram khi",
    lyrics:
      "Vân hmun ropui hmangaih ram khi,\nMi thianghlimte in a ni;\nAnni hnêna chêng ve tûrin,\nKhawvêl thilte chu paih la.\n\nKhawvêl ni hi a ral hunin,\nNakinah in nuamah,\nMi thianghlimte lênna ramah,\nVân inah kan chêng ang.\n\nChatuan in nuam ropui taka\nLêngte zawng chhûngkhat an ni;\nChu in nuama chêng ve tûrin,\nChi tin, hnam tin an sâwm a.\n\nChhandamtu thihna hmun ropui,\nHmangaihna hi an hril vêl;\nInbuatsaih hun a kim chhûngin,\nA hmangaihna chu ring la.\n\nPakhat zêla an kal bovin,\nAn kiam thîn chhûngkaw tinrêng;\nLungduh zawng zawng chatuan hmunah,\nKim leh ni a awm ang em?\n",
  },
];

const filteredSongs = ref(songs);
export { songIndex, fontSize, songs, selectedSong, filteredSongs };
