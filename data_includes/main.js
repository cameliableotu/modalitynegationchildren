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
    newText("<p> Salutare tuturor, vom juca un joc foarte distractiv împreună. (Fii atent şi la sunete deci.) </p>" ),
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
	
		newText ("<p> Copilul pune puloverul galben pe el.</p>")
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
		
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ pahare: lapte şi ciocolatǎ. </p>"),
                newText ("<p> Tatǎl îi spune bǎiatului “Nu trebuie sǎ bei lapte. O sǎ mǎ supǎr dacǎ faci asta.” </p>"),
		  newImage("milk", "chocolate.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("chocolate", "chocolate.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("milk") )
        .settings.add( 250 , 0 , getImage("chocolate") )
        .print(),
	
		newText ("<p> Bǎiatul bea ciocolatǎ. </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Mama şi fata se uitǎ la douǎ fructe (un mǎr şi o bananǎ).</p>"),	
                newText ("<p> Mama îi spune fetei “Nu e nevoie sǎ mǎnânci banana. M-aş bucura sǎ ştiu cǎ mǎnânci oricare fruct.” </p>"),
		  newImage("apple", "apple.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("banana", "banana.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("apple") )
        .settings.add( 250 , 0 , getImage("banana") )
        .print(),
	
		newText ("<p> Fata mǎnâncǎ banana. Cum vei răsplati copilul? </p>")
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
	
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Bunicul şi bǎiatul se uitǎ la douǎ jucǎrii: un pinguin şi o cǎmilǎ.</p>"),	
                newText ("<p> Bunicul îi spune bǎiatului “Nu trebuie sǎ te joci cu pinguinul. M-aş bucura sǎ ştiu cǎ te joci cu oricare dintre jucǎrii.”</p>"),
      newImage("penguin", "penguin.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("camel", "camel.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("penguin") )
        .settings.add( 250 , 0 , getImage("camel") )
        .print(),
	
		newText ("<p> Bǎiatul se joacǎ cu cǎmila. Cum vei răsplati bǎiatul? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Bunicul şi bǎiatul se uitǎ la douǎ jucǎrii: o minge şi o maşinuţǎ.</p>"),	
                newText ("<p> Bunicul îi spune bǎiatului “Trebuie sǎ nu te joci cu maşinuţa. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("ball", "ball.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("car", "car.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("ball") )
        .settings.add( 250 , 0 , getImage("car") )
        .print(),
	
		newText ("<p> Bǎiatul se joacǎ cu mingea. Cum vei răsplati bǎiatul? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Mama şi fata se uitǎ la douǎ fructe (o portocalǎ şi o parǎ).</p>"),	
                newText ("<p> Mama îi spune fetei “Nu trebuie sǎ mǎnânci portocala. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("orange", "orange.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("pear", "pear.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("orange") )
        .settings.add( 250 , 0 , getImage("pear") )
        .print(),
	
	newText ("<p> Fata mǎnâncǎ portocala. Cum vei răsplati fata? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Bunica şi fata se uitǎ la douǎ perechi de pantaloni (pantaloni roşii şi pantaloni albaştri).</p>"),	
                newText ("<p> Bunica îi spune fetei “Nu e nevoie sǎ porţi pantalonii roşii. M-aş bucura sǎ ştiu cǎ porţi oricare pereche de pantaloni.”</p>"),
      newImage("redtrousers", "redtrousers.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("bluetrousers", "bluetrousers.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("redtrousers") )
        .settings.add( 250 , 0 , getImage("bluetrousers") )
        .print(),
	
	newText ("<p> Fata poartǎ pantalonii albaştri. Cum o vei răsplati pe fatǎ? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ pahare (cu suc de pere şi suc de mere).</p>"),	
                newText ("<p> Tatǎl îi spune bǎiatului “Nu trebuie sǎ bei suc de pere. M-aş bucura sǎ ştiu cǎ bei oricare dintre ele.”</p>"),
      newImage("applejuice", "applejuice.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("pearjuice", "pearjuice.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("applejuice") )
        .settings.add( 250 , 0 , getImage("pearjuice") )
        .print(),
	
	newText ("<p> Bǎiatul bea suc de mere. Cum îl vei răsplati pe bǎiat? </p>")
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


PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ pahare (cu suc de spanac şi suc de morcovi).</p>"),	
                newText ("<p> Tatǎl îi spune bǎiatului “Trebuie sǎ nu bei suc de spanac. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("spinachjuice", "spinach.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("carrotjuice", "carrotjuice.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("spinachjuice") )
        .settings.add( 250 , 0 , getImage("carrotjuice") )
        .print(),
	
	newText ("<p> Bǎiatul bea suc de spanac. Cum îl vei răsplati pe bǎiat? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ pahare (cu suc de spanac şi suc de morcovi).</p>"),	
                newText ("<p> Tatǎl îi spune bǎiatului “Trebuie sǎ nu bei suc de spanac. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("spinachjuice", "spinach.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("carrotjuice", "carrotjuice.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("spinachjuice") )
        .settings.add( 250 , 0 , getImage("carrotjuice") )
        .print(),
	
	newText ("<p> Bǎiatul bea suc de spanac. Cum îl vei răsplati pe bǎiat? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Bunica şi fata  se uitǎ la douǎ tricouri (unul verde şi unul mov).</p>"),	
                newText ("<p> Bunica îi spune fetei  “Nu trebuie sǎ  porţi tricoul verde. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("greentshirt", "greentshirt.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("purpletshirt", "purpletshirt.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("greentshirt") )
        .settings.add( 250 , 0 , getImage("purpletshirt") )
        .print(),
	
	newText ("<p> Fata poartă tricoul mov. Cum o vei răsplati pe fatǎ? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Mama şi fata se uitǎ la douǎ fructe (o nectarinǎ şi un kiwi).</p>"),	
                newText ("<p> Mama îi spune fetei “Nu e nevoie sǎ mǎnânci kiwi-ul. M-aş bucura sǎ ştiu cǎ mǎnânci oricare dintre fructe. ”</p>"),
      newImage("nectarine", "nectarine.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("kiwi", "kiwi.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("nectarine") )
        .settings.add( 250 , 0 , getImage("kiwi") )
        .print(),
	
	newText ("<p> Fata mǎnâncǎ nectarina. Cum o vei răsplati pe fatǎ? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ jucǎrii: un camion şi o raţǎ. </p>"),	
                newText ("<p> Tatǎl îi spune bǎiatului “Nu trebuie sǎ te joci cu raţa. M-aş bucura sǎ ştiu cǎ te joci cu oricare dintre jucǎrii. ”</p>"),
      newImage("truck", "truck.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("duck", "duck.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("truck") )
        .settings.add( 250 , 0 , getImage("duck") )
        .print(),
	
	newText ("<p> Bǎiatul se joacǎ cu raţa. Cum îl vei răsplati pe bǎiat? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ bǎuturi: un ceai de caramel şi un ceai de scorţişoarǎ. </p>"),	
                newText ("<p> Tatǎl îi spune bǎiatului “Nu e nevoie sǎ bei ceai de scorţişoarǎ. M-aş bucura sǎ ştiu cǎ bei oricare dintre bǎuturi. ”</p>"),
      newImage("carameltea", "carameltea.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("cinnamontea", "cinnamontea.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("carameltea") )
        .settings.add( 250 , 0 , getImage("cinnamon") )
        .print(),
	
	newText ("<p> Bǎiatul bea ceai de caramel. Cum îl vei răsplati pe bǎiat? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ bǎuturi: un ceai de caramel şi un ceai de scorţişoarǎ. </p>"),	
                newText ("<p> Tatǎl îi spune bǎiatului “Nu e nevoie sǎ bei ceai de scorţişoarǎ. M-aş bucura sǎ ştiu cǎ bei oricare dintre bǎuturi. ”</p>"),
      newImage("carameltea", "carameltea.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("cinnamontea", "cinnamontea.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("carameltea") )
        .settings.add( 250 , 0 , getImage("cinnamon") )
        .print(),
	
	newText ("<p> Bǎiatul bea ceai de caramel. Cum îl vei răsplati pe bǎiat? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Bunica şi fata se uitǎ la douǎ pǎlǎrii: una neagrǎ şi una portocalie. </p>"),	
                newText ("<p> Bunica îi spune fetei “Nu e nevoie sǎ porţi pǎlǎria neagrǎ. M-aş bucura sǎ ştiu cǎ porţi oricare dintre pǎlǎrii. ”</p>"),
      newImage("blackhat", "blackhat.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("orangehat", "orangehat.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("blackhat") )
        .settings.add( 250 , 0 , getImage("orangehat") )
        .print(),
	
	newText ("<p>Fata poartǎ pǎlǎria portocalie. Cum îl vei răsplati pe bǎiat? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ jucǎrii: un cǎţel şi o pisicǎ. </p>"),	
                newText ("<p> Tatǎl îi spune bǎiatului “Trebuie sǎ nu te joci cu cǎţelul. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("dog", "dog.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("cat", "cat.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("dog") )
        .settings.add( 250 , 0 , getImage("cat") )
        .print(),
	
	newText ("<p> Bǎiatul se joacǎ cu cǎţelul. Cum îl vei răsplati pe bǎiat? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Mama şi fata se uitǎ la douǎ fructe: o cǎpşunǎ şi o cireaşǎ. </p>"),	
                newText ("<p> Mama îi spune fetei “Trebuie sǎ nu te joci cu cǎpşunǎ. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("strawberry", "strawberry.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("cherry", "cherry.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("strawberry") )
        .settings.add( 250 , 0 , getImage("cherry") )
        .print(),
	
	newText ("<p> Bǎiatul se joacǎ cu cǎţelul. Cum îl vei răsplati pe bǎiat? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Bunica şi fata se uitǎ la douǎ perechi de şosete: o pereche de şosete galbene şi o o pereche de şosete roşii.</p>"),	
                newText ("<p> Bunica îi spune fetei “Trebuie sǎ nu porţi şosetele galbene. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("yellowsocks", "yellowsocks.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("redsocks", "redsocks.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("yellowsocks") )
        .settings.add( 250 , 0 , getImage("redsocks") )
        .print(),
	
	newText ("<p> Fata poartǎ şosetele roşii. Cum îl vei răsplati pe bǎiat? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ bǎuturi: o limonadǎ şi un ceai de lǎmâie. </p>"),	
                newText ("<p> Tatǎl îi spune bǎiatul “Nu trebuie sǎ bei limonadǎ. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("lemonade", "lemonade.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("lemontea", "lemontea.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("lemonade") )
        .settings.add( 250 , 0 , getImage("lemontea") )
        .print(),
	
	newText ("<p> Bǎiatul bea limonadǎ. Cum îl vei răsplati pe bǎiat? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),

		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ jucǎrii: o vacǎ şi o oaie. </p>"),	
                newText ("<p> Tatǎl îi spune bǎiatului: “Nu e nevoie sǎ te joci cu vaca. M-aş bucura sǎ ştiu cǎ te joci cu oricare dintre jucǎrii.”</p>"),
      newImage("cow", "cow.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("sheep", "sheep.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("lemonade") )
        .settings.add( 250 , 0 , getImage("lemontea") )
        .print(),
	
	newText ("<p> Bǎiatul se joacǎ cu vaca. Cum îl vei răsplati pe bǎiat? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),

		newText ("<p> Mama şi fata se uitǎ la douǎ fructe: pepene roşu şi pepene galben. </p>"),	
                newText ("<p> Mama îi spune fetei: “Nu trebuie sǎ mǎnânci pepene roşu. M-aş bucura sǎ ştiu cǎ mǎnânci oricare dintre fructe.”</p>"),
      newImage("watermelon", "watermelon.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("sweetmelon", "sweetmelon.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("watermelon") )
        .settings.add( 250 , 0 , getImage("sweetmelon") )
        .print(),
	
	newText ("<p> Fata mǎnâncǎ pepene galben. Cum o vei răsplati pe fatǎ? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),

		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ bǎuturi: suc de cǎpşuni şi suc de mure. </p>"),	
                newText ("<p> Tatǎl îi spune bǎiatului: “Nu e nevoie sǎ bei suc de cǎpşuni. M-aş bucura sǎ ştiu cǎ bei oricare dintre bǎuturi.”</p>"),
      newImage("strawberryjuice", "strawberryjuice.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("blackberryjuice", "blackberryjuice.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("strawberryjuice") )
        .settings.add( 250 , 0 , getImage("blackberryjuice") )
        .print(),
	
	newText ("<p> Bǎiatul bea sucul de cǎpşuni. Cum îl vei răsplati pe bǎiat? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p> Bunica şi fata se uitǎ la douǎ jachete: o jachetǎ roz şi o jachetǎ albǎ. </p>"),	
                newText ("<p> Bunica îi spune fetei: “Nu trebuie sǎ porţi jacheta roz. M-aş bucura sǎ ştiu cǎ porţi oricare dintre jachete.”</p>"),
      newImage("pinkjacket", "pinkjacket.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("whitejacket", "whitejacket.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("pinkjacket") )
        .settings.add( 250 , 0 , getImage("whitejacket") )
        .print(),
	
	newText ("<p> Fata poartǎ jacheta roz. Cum o vei răsplati pe fatǎ? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),

		newText ("<p> Mama şi fata se uitǎ la douǎ fructe: o piersicǎ şi un strugure.</p>"),	
                newText ("<p> Mama îi spune fetei: “Trebuie sǎ nu mǎnânci strugurele.O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("peach", "peach.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("grape", "grape.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("peach") )
        .settings.add( 250 , 0 , getImage("grape") )
        .print(),
	
	newText ("<p> Fata mǎnâncǎ strugurele. Cum o vei răsplati pe fatǎ? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),

		newText ("<p>Tatǎl şi bǎiatul se uitǎ la douǎ jucǎrii: un Mickey Mouse şi un dinozaur.</p>"),	
                newText ("<p>Tatǎl îi spune bǎiatului: “Nu trebuie sǎ te joci cu Mickey Mouse-ul.O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("mickeymouse", "mickeymouse.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("dinosaur", "dinosaur.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("mickeymouse") )
        .settings.add( 250 , 0 , getImage("dinosaur") )
        .print(),
	
	newText ("<p>Bǎiatul se joacă cu Mickey Mouse-ul. Cum îl vei răsplati pe bǎiat? </p>")
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

PennController ("experiment",
		defaultText
	        .print(),

		newText ("<p>Tatǎl şi bǎiatul se uitǎ la douǎ bǎuturi:o apǎ mineralǎ şi un ceai de fructe.</p>"),	
                newText ("<p>Tatǎl îi spune bǎiatului: “Trebuie sǎ nu bei apa mineralǎ. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("sparklingwater", "sparklingwater.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("fruittea", "fruittea.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("sparklingwater") )
        .settings.add( 250 , 0 , getImage("fruittea") )
        .print(),
	
	newText ("<p>Bǎiatul bea ceaiul de fructe. Cum îl vei răsplati pe bǎiat? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p>Bunica şi fata se uitǎ la douǎ pulovere: un pulover galben şi un pulover albastru.</p>"),	
                newText ("<p>Bunica îi spune fetei: “Nu trebuie sa porti puloverul albastru. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
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
	
	newText ("<p>Bǎiatul poartǎ puloverul albastru. Cum îl vei răsplati pe bǎiat? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),
	
		newText ("<p>Tatǎl şi bǎiatul se uitǎ la douǎ jucǎrii: o casǎ şi o bicicletǎ.</p>"),	
                newText ("<p>Tatǎl îi spune bǎiatului: “Nu e nevoie sǎ te joci cu casa.M-aş bucura sǎ ştiu cǎ te joci cu oricare dintre jucǎrii.”</p>"),
      newImage("house", "house.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("bicycle", "bicycle.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("yellowsweater") )
        .settings.add( 250 , 0 , getImage("bluesweater") )
        .print(),
	
	newText ("<p>Bǎiatul se joacǎ cu bicicleta. Cum îl vei răsplati pe bǎiat? </p>")
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


PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p>Mama şi fata se uitǎ la douǎ fructe: o prunǎ şi un ananas.</p>"),	
                newText ("<p>Mama îi spune fetei: “Nu e nevoie sǎ mǎnânci pruna.M-aş bucura sǎ ştiu cǎ mǎnânci oricare dintre fructe.”</p>"),
      newImage("plum", "plum.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("pineapple", "pineapple.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("plum") )
        .settings.add( 250 , 0 , getImage("pineapple") )
        .print(),
	
	newText ("<p>Fata mǎnâncǎ pruna. Cum o vei răsplati pe fatǎ? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p>Mama şi fata se uitǎ la douǎ fructe: o murǎ şi o caisǎ.</p>"),	
                newText ("<p>Mama îi spune fetei: “Trebuie sǎ nu mǎnânci caisa. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("blackberry", "blackberry.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("apricot", "apricot.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("blackberry") )
        .settings.add( 250 , 0 , getImage("apricot") )
        .print(),
	
	newText ("<p>Fata mǎnâncǎ mura. Cum o vei răsplati pe fatǎ? </p>")
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


PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p>Tatǎl şi bǎiatul se uitǎ la douǎ jucǎrii: un ursuleţ şi un iepuraş.</p>"),	
                newText ("<p>Tatǎl îi spune bǎiatului: “Nu trebuie sǎ te joci cu ursuleţul. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
      newImage("teddy", "teddy.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("bunny", "bunny.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("teddy") )
        .settings.add( 250 , 0 , getImage("bunny") )
        .print(),
	
	newText ("<p>Bǎiatul se joacǎ cu ursuleţul. Cum îl vei răsplati pe bǎiat? </p>")
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
PennController ("experiment",
		defaultText
	        .print(),
		newText ("<p>Bunica şi fata se uitǎ la douǎ perechi de pantaloni: o pereche de pantaloni roşii şi o pereche de pantaloni albaştri.</p>"),	
                newText ("<p>Bunica îi spune fetei: “Nu e nevoie sǎ porti pantaloni roşii. M-as bucura sa stiu ca porti oricare.”</p>"),
      newImage("redtrousers", "redtrousers.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("bluetrousers", "bluetrousers.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("teddy") )
        .settings.add( 250 , 0 , getImage("bunny") )
        .print(),
	
	newText ("<p>Fata poarta pantalonii albastri. Cum o vei răsplati pe fata? </p>")
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

  
