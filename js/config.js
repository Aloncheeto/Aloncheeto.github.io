/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "https://steamuserimages-a.akamaihd.net/ugc/261594144865724019/7474C57CCD48741459A48FA54B5F369F8388E038/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "ArGMod Sandbox";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/inthedeep.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/01.jpg",
	"backgrounds/images/02.jpg",
	"backgrounds/images/03.jpg",
	"backgrounds/images/04.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 15000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	/*{ogg: "songs/Lullaby of Deserted Hell.ogg", name: "Lullaby of Deserted Hell"},*/
	{youtube: "vZg9Da3Tl6I", name: "Saint Mark's Bistro"},
	{youtube: "xycRCykPv2w", name: "Epsilon Program"},
	{youtube: "qqpTq9_rf_Q", name: "Give Me Liberty"},
	{youtube: "OQ6bDllgNyo", name: "Le Fishe"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 20;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"BR1AN: pesa mucho",
"BR1AN: mucho staff",
"BR1AN: manga de putos",
"BR1AN: los odio",
"Nati: TOMÁ STRING CONCHUDA",
"LNATIC: no hagas cambios pedorros por favor",
"Just a Generic Hero: lo pones en luapad, te sale en la consola: 'Error: global variable nicosh not found'",
"Usuario | TheGamer: ermoso",
"Usuario | TheGamer: renisio el server",
"Usuario | TheGamer: hola besino",
"Pistola: si no son los testigo de jeobá, son las picanas",
"Pistola: sabe como va a activa vo con eso",
"Admin | ♫TíoMasterCoin♫: no consigo hacer que vibre bien",
"SuperAdmin | ♫TíoMasterCoin♫: me gusta la doblada",
"Lucass(Arg): esto es muy pertuvador",
"Hamacoshi: I LOVE BOLIVIA",
"[HAMANATIC] SuperAdmin | Hamacoshi: ola niña",
"[HAMANATIC] SuperAdmin | Hamacoshi: lindo culito",
"Khiz: q manga de mogolicos",
"Khiz: es muy grande",
"Khiz: mission winned",
"Khiz: CALLATE PELOTUDO",
"Khiz: LA CONCHA DE TU VIEJA",
"Khiz: !caka",
"CONSTRUCTORA Moderador | khizftidolos: es muy chico",
"ROCKY ESCOPETRA $2002$: hellosam era el truco ?",
"Vip I | FRANCISCO PRO: cuando sea vip 3 te voi a lansar 1000000000000000000000000000000 slap",
"Vip I | FRANCISCO PRO: que tu abuela lo aga",
"Renovated Vip I | shiny galladen: no parece lojico",
"*DEAD* Marolio!: PERO PARA LA CONCHA DEL MONO",
"RodrigosMOD: EL MAPA NOS VA A METER LA PIJA",
"RodrigosMOD: bloqueado hdp",
"L3M0N: kara de pene",
"crep: Deja de seguirme o te mato men al tercero fuiste gato",
"SuperAdmin | Nio2     [ArGmod Server]: que sos pete vos?",
"[ArGMod] Nio2 [WirexpertOs]: no me tires el server querido",
"ArGMod Dueño | Nio2     [ArGmod Server]: te voy a sacar por perturbador",
"Usuario | Altokeso: no estoy ablando con voz porque estoy llorando",
"Vip I | Altokeso: pto just >:v traumador y violador de niños ondefensos",
"Vip I | ·:-Alguien64-:·: Querido just, suicidate, vos y tu puta banda me dejaron un trauma psicologico con secuelas",
"Nanito ✪: sos chistoso pelotudo?",
"Valen: el propulsor es siempre la respuesta",
"Valen: no thortilla",
"Valen: es obio",
"Valen: esta proivido",
"pjsquall: porfabor vasta",
"Franxda: responde gordo"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 10000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;