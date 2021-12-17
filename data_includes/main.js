PennController. DebugOff ();
PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "details", "trial", "trial2", "trialbunny", "trialbunny2", "introductionanimals", "experiment", "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Salutare tuturor! </p>")
    ,
    newText("<p> Salutare tuturor, vom juca un joc foarte distractiv împreună cu un vrăjitor, un pui de dragon, nişte umbre care aparţin unor animale şi sunete făcute de ele. (Fii atent şi la sunete deci.) </p>" ),
    newText("<p> Te rog introdu ID-ul tău, răspunde la nişte întrebări, iar apoi fă click pe butonul de mai jos pentru a începe experimentul.</p>")
    ,
    newTextInput("ID")
	       .settings.log()
    .settings.lines(0)
        .print()
    ,
     newText("<p> Ce vârstă ai? </p>"),
    newTextInput("Age")
	       .settings.log()
    .settings.lines(0)
        .print()
	       ,
	  newText("<p> Ce sex ai? (M/ F/ Altul) </p>"),
	       newTextInput ("Gender")
	       .settings.log()
    .settings.lines(0)
        .print()
	       , 
	        newText("<p> Cu ce te ocupi?</p>"),
	    newTextInput ("Profession")  
	       .settings.log()
    .settings.lines(0)
        .print()
	       ,
	       newText ("<p>Pentru a trece la pagina următoare pe parcursul jocului, foloseşte bara de spaţiu (space bar). </p>")
	       .print()
	       ,
	       
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID")))
	      
.log( "ID" , getVar("ID") );
PennController("welcome" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> A fost odată ca niciodată, într-un ţinut îndepărtat, un vrăjitor foarte talentat pe nume Merlin, căruia îi plăcea foarte mult să se joace cu umbre şi să îi facă pe ceilalţi să ghicească ale cui sunt. </p>")
	    ,
	                  
	     newImage ("wizardanddragon.png")
               .print ()
	   
	       ,
	       newKey(" ")
        .wait());
PennController("details" ,
	    defaultText
	        .print()
	    
	       ,
newText ("<p> Acum Merlin joacă jocul umbrelor cu un pui de dragon foarte drăguţ care trebuie să ghicească a cărui animal este umbra pe care o are în faţa sa.</p>")
	,
newText("<p> Imaginile vor arăta umbra, dar şi toate animalele din joc şi animalele care se află atunci în faţa cortinei. </p>"),
newText ("<p> Dacă nu sunt deloc animale în faţa cortinei , va fi în loc o linie. </p>")
	       ,
 newText ("<p> De exemplu, în imaginea de mai jos, sunt trei pisici şi niciuna din ele nu este în faţa cortinei. Toate pisicile s-au dus în spatele cortinei, dar umbra aparţine doar uneia dintre ele. </p>"),
	  newImage ("catshadowallcats", "catshadowallcats.png")
	.print (),
	 newKey(" ")
        .wait())

;
PennController("details" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Puiul de dragon trebuie să descrie a cui crede el că este umbra. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cea mai bună descriere, trebuie să-l răsplăteşti cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cea mai bună descriere, îi dai doar un măr mic. </p>")
,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;	
PennController("trial" ,
	    defaultText
	        .print()
	       ,
newText ("<p> Hai să vedem cum te descurci. Hai să facem cunoştinţă cu un iepuraş foarte drăguţ. </p> "),
	       newImage ("smallpinkbunny", "smallpinkbunny.png")
	       .print ()
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
)
;
PennController("trial2" ,
	    defaultText
	        .print()
	    
	       ,
	       newText 
	       ("<p> Hop-hop, iată că s-a dus în spatele cortinei. Puiul de dragon vede următoarea umbră. </p>"),
	      
	       newImage ("bunnyshadow2", "bunnyshadowallbunnies.png")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Puiul de dragon spune: Este un şoarece. </p>")
	       ,
	       newText ("<p> Puiul de dragon nu a oferit cea mai bună descriere. Umbra nu aparţine unui şoarece, ci unui iepuraş. </p>"),
	       newText ("<p> Din acest motiv, îi vei da puiului de dragon un măr mic, nu un măr mare. </p>"),
	       newText ("<p> Pentru a răsplăti puiul de dragon, fă click pe mărul care este răsplata sa, în cazul acesta, mărul mic</p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;


PennController("trialbunny" ,
	    defaultText
	        .print()
	    
	       ,
	       newText 
	       ("<p> Hai să vedem cum te descurci pe cont propriu. Pentru a răsplăti dragonul, fă pur şi simplu click pe mărul dorit.</p>"),
	      
	       newImage ("bunnyshadowallbunnies", "bunnyshadowallbunnies.png")
	       .print ( )
	       ,
	       newAudio("bunnysounds", "bunnysounds.mp3")
		.play()
	       ,
	       newText ("<p> Puiul de dragon: Este o vacă. </p>")
	       ,
	       newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("trialbunny2" ,
	    defaultText
	        .print()
	    
	       ,
	       
	      
	       newImage ("bunnyshadowallbunnies", "bunnyshadowallbunnies.png")
	       .print ( )
	       ,
	       newText ("<p> Puiul de dragon: Este un iepuraş. </p>")
	       ,
	       newText ("<p> Cum vei răsplati puiul de dragon? </p>")
	       ,
	       newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bigapple") , getImage("smallapple") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	    newText ("<p> Hai acum să facem cunoştinţă cu celelalte animale din spectacol. Avem un grup de trei pisici. </p>")
	    ,
	                  
	     newImage ("threecats.png")
               .print ()
	       ,
	       newAudio("catsounds", "catsounds.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )
;
		     
PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	   
	       newText ("<p> Un grup de trei câini. </p>")
	    ,
	                  
	     newImage ("threedogs.png")
               .print ()
	       ,
	       newAudio("barking", "barking.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	      )
;		     
		     
PennController("introductionanimals" ,
	    defaultText
	        .print(),
	       newText ("<p> Un grup de trei vaci. </p>")
	    ,
	                  
	     newImage ("threecows.png")
               .print ()
	       ,
	       newAudio("cowsounds2sec", "cowsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       
	      )	
;
PennController("introductionanimals" ,
	    defaultText
	        .print()
	    ,
	   
	       newText ("<p> Şi un grup de trei broaşte. </p>")
	    ,
	                  
	     newImage ("threefrogs.png")
               .print ()
	       ,
	       newAudio("frogsounds2sec", "frogsounds2sec.mp3")
		.play()
	       ,
	       newKey(" ")
        .wait()
	       )     
;
PennController("experiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Toţi pisicile s-au dus acum în spatele cortinei. <p>")
	       ,
  newText ("<p> Puiul de dragon trebuie să descrie a cui crede el că este umbra. </p>")
	       ,
   newText ("<p> Când puiul de dragon oferă cea mai bună descriere, trebuie să-l recompensezi cu un măr mare. </p>"), 
   newText ("<p> Atunci când puiul de dragon nu oferă cea mai bună descriere, îi dai doar un măr mic. </p>")
,
	      newImage("bigapple", "bigapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("smallapple", "smallapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bigapple") )
        .settings.add( 250 , 0 , getImage("smallapple") )
        .print()
	       ,
	       newKey(" ")
        .wait()
)
;	
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Bunica şi copilul se uitǎ la douǎ pulovere (unul galben şi unul albastru). </p>"),
                newText ("<p> Bunica îi spune copilului “Nu trebuie sǎ porţi puloverul galben. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
		,
		  newImage("yellowsweater", "yellowsweater.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("bluesweater", "bluesweater.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("yellowsweater") )
        .settings.add( 250 , 0 , getImage("bluesweater") )
        .print(),
	
		newText ("<p> Copilul pune puloverul galben pe el. </p>")
	       ,
		newText ("<p> Cum vei răsplati copilul? </p>")
	        ,
	       newImage("bluestar", "bluestar.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("blackdot", "blackdot.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("bluestar") )
        .settings.add( 250 , 0 , getImage("blackdot") )
        .print()
	       ,
	       // newKey("FJ")
newSelector()
    .settings.add( getImage("bluestar") , getImage("blackdot") )
    .settings.keys(          "F"    ,          "J"   )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID") )
;
		



PennController.SendResults( "send" );
PennController( "final" ,
    newText("<p> Mulţumesc pentru participare! Codul chestionarului pentru MTurk este: kp5t8r. Te rog fă copy-paste acestui cod în MTurk!</p>") 
	       .print()
	       ,
	 newText("<p> Puiul de dragon îţi mulţumeşte pentru mere şi la fel şi vrăjitorul! Pa-pa! </p>")
        .print(),
    newButton("void")
        .wait()
	       )

  
