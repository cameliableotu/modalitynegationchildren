PennController. DebugOff ();
PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "details", "trial", "experiment", "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Salutare tuturor! </p>")
    ,
    newText("<p> Salutare tuturor, vom juca un joc foarte distractiv împreună. </p>" ),
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
	    newText ("<p> Ȋn acest joc facem cunoştiinţǎ cu o familie: mama, tatǎl, bunica, bunicul, fata, bǎiatul. </p>")
	    ,
	                  
	     newImage ("family.png")
               .print ()
	   
	       ,
	       newKey(" ")
        .wait());
PennController("details" ,
	    defaultText
	        .print()
	    
	       ,
newText ("<p> Mama, tatǎl, bunicul sau bunica îi vor spune bǎiatului sau fetei ce sǎ facǎ, ce nu facǎ sau ce pot sǎ facǎ sau nu într-o situaţie.</p>")
	

;
PennController("details" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> Bǎiatul sau fata va face ceva. Tu trebuie să îi dai o rǎsplatǎ. </p>")
	       ,
   newText ("<p> Când copilul face un lucru interzis, îi dai o bulinǎ neagrǎ. </p>"), 
   newText ("<p> Atunci când copilul ascultǎ de ce i se zice şi face un lucru destul de bun faţǎ de ce i s-a cerut, îi dai o stea albastrǎ. </p>"),
    newText ("<p> Atunci când copilul ascultǎ de ce i se zice şi face cel mai bun lucru posibil faţǎ de ce i s-a cerut, îi dai douǎ stele albastre. </p>")
,
	      newImage("blackdot", "blackdot.png")
        .settings.size(200,200)
        // .print()
    ,
	      newImage("bluestar", "bluestar.png")
        .settings.size(200,200)
        // .print()
	       ,
	    
	          newImage("twobluestars", "twobluestars.png")
        .settings.size(400,400)
        // .print()
    ,
    newCanvas(700,200)
        .settings.add( 0 , 0 , getImage("blackdot") )
        .settings.add( 250 , 0 , getImage("bluestar") )
	  .settings.add(500, 0 , getImage("twobluestars") )
        .print()
	       ,
	    
newSelector()
    .settings.add( getImage("blackdot") , getImage ("bluestar"), getImage("twobluestars") )
    .settings.keys(          "F"    ,          "J")
    .settings.log()
    .wait()
)
   
.log( "ID" , getVar("ID") )
;
PennController("trial" ,
	    defaultText
	        .print()
	       ,
newText ("<p> Hai să vedem cum te descurci. Mama şi fata se uită la două legume (un castravete şi o roşie). Mama spune spune: 'Adu-mi un castravete şi o roşie. </p> "),
	       
	       newImage("cucumber", "cucumber.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("tomato", "tomato.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("cucumber") )
        .settings.add( 250 , 0 , getImage("tomato") )
        .print(),
 newText ("<p> Fata îi aduce un castravete. </p> "),   
	       newText ("<p> Cum o vei răsplati pe fatǎ? </p>")
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
		
	    
;
PennController("trial" ,
	    defaultText
	        .print()
	       ,
newText ("<p> Hai să vedem cum te descurci. Mama şi fata se uită la două legume (un ardei gras şi o ceapă). Mama spune spune: 'Nu lua ceapa de pe masă'. </p> "),
	       
	       newImage("pepper", "pepper.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("onion", "onion.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("pepper") )
        .settings.add( 250 , 0 , getImage("onion") )
        .print(),
 newText ("<p> Fata ia ceapa de pe masă. </p> "),   
	       newText ("<p> Cum o vei răsplati pe fatǎ? </p>")
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

PennController("trial" ,
	    defaultText
	        .print()
	       ,
newText ("<p> Hai să vedem cum te descurci. Mama şi fata se uită la două legume (un ardei gras şi o ceapă). Mama spune spune: 'Nu lua ceapa de pe masă'. </p> "),
	       
	       newImage("pepper", "pepper.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("onion", "onion.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("pepper") )
        .settings.add( 250 , 0 , getImage("onion") )
        .print(),
 newText ("<p> Fata ia ceapa de pe masă. </p> "),   
	       newText ("<p> Cum o vei răsplati pe fatǎ? </p>")
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
PennController("trial" ,
	    defaultText
	        .print()
	       ,
newText ("<p> Hai să vedem cum te descurci. Mama şi fata se uită la două legume (un dovleac şi o varză). Mama spune spune: 'Adu-mi dovleacul de pe masă'. </p> "),
	       
	       newImage("pumpkin", "pumpkin.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("cabbage", "cabbage.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("pumpkin") )
        .settings.add( 250 , 0 , getImage("cabbage") )
        .print(),
 newText ("<p> Fata ia ceapa de pe masă. </p> "),   
	       newText ("<p> Cum o vei răsplati pe fatǎ? </p>")
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

		newText ("<p> Acum cǎ te-ai obişnuit, hai sǎ  continuǎm! Bunica şi fata se uitǎ la douǎ fulare (un fular alb şi un fular albastru). </p>"),
                newText ("<p> Bunica îi spune copilului “Trebuie sǎ nu porţi fularul alb. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
		,
		  newImage("whitescarf", "whitescarf.png")
        .settings.size(200,200)
        // .print()
    ,
    newImage("bluescarf", "bluescarf.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("whitescarf") )
        .settings.add( 250 , 0 , getImage("bluescarf") )
        .print(),
	
		newText ("<p> Fata pune fularul alb pe ea.</p>")
	       ,
		newText ("<p> Cum o vei răsplati pe fatǎ? </p>")
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
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ bǎuturi: lapte şi ciocolatǎ. </p>"),
                newText ("<p> Tatǎl îi spune bǎiatului “Nu trebuie sǎ bei lapte. O sǎ mǎ supǎr dacǎ faci asta.” </p>"),
		  newImage("milk", "milk.png")
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
                newText ("<p> Mama îi spune fetei: “Nu e nevoie sǎ mǎnânci banana. M-aş bucura sǎ ştiu cǎ mǎnânci oricare fruct.” </p>"),
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
	
		newText ("<p> Fata mǎnâncǎ banana. Cum o vei răsplati pe fată? </p>")
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
	
	newText ("<p> Fata mǎnâncǎ para. Cum vei răsplati fata? </p>")
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
		newText ("<p> Bunica şi fata se uitǎ la douǎ cǎciuli (o cǎciulǎ verde şi o cǎciula portocalie).</p>"),	
                newText ("<p> Bunica îi spune fetei “Nu e nevoie sǎ porţi cǎciula portocalie. M-aş bucura sǎ ştiu cǎ porţi oricare dintre cǎciuli.”</p>"),
      newImage("orangebeanie", "orangebeanie.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("greenbeanie", "greenbeanie.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("orangebeanie") )
        .settings.add( 250 , 0 , getImage("greenbeanie") )
        .print(),
	
	newText ("<p> Fata poartǎ cǎciula portocalie. Cum o vei răsplati pe fatǎ? </p>")
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
	
	newText ("<p> Bǎiatul bea suc de pere. Cum îl vei răsplati pe bǎiat? </p>")
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
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ bǎuturi: un suc de spanac şi un suc de morcovi).</p>"),	
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
		newText ("<p> Bunica şi fata se uitǎ la douǎ tricouri (unul verde şi unul mov).</p>"),	
                newText ("<p> Bunica îi spune fetei: “Nu trebuie sǎ  porţi tricoul verde. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
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
		newText ("<p> Mama şi fata se uitǎ la douǎ fructe (o nucǎ de cocos şi un kiwi).</p>"),	
                newText ("<p> Mama îi spune fetei “Nu e nevoie sǎ mǎnânci kiwi-ul. M-aş bucura sǎ ştiu cǎ mǎnânci oricare dintre fructe. ”</p>"),
      newImage("coconut", "coconut.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("kiwi", "kiwi.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("coconut") )
        .settings.add( 250 , 0 , getImage("kiwi") )
        .print(),
	
	newText ("<p> Fata mǎnâncǎ nuca de cocos. Cum o vei răsplati pe fatǎ? </p>")
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
		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ bǎuturi: un ceai de scorţişoarǎ şi un ceai de trandafiri. </p>"),	
                newText ("<p> Tatǎl îi spune bǎiatului “Nu e nevoie sǎ bei ceai de scorţişoarǎ. M-aş bucura sǎ ştiu cǎ bei oricare dintre bǎuturi. ”</p>"),
      newImage("carameltea", "rosetea.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("cinnamontea", "cinnamontea.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("rosetea") )
        .settings.add( 250 , 0 , getImage("cinnamontea") )
        .print(),
	
	newText ("<p> Bǎiatul bea ceai de trandafiri. Cum îl vei răsplati pe bǎiat? </p>")
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
		newText ("<p> Bunica şi fata se uitǎ la douǎ pǎlǎrii: o pǎlǎrie portocalie şi o pǎlǎrie neagrǎ. </p>"),	
                newText ("<p> Bunica îi spune fetei: “Nu trebuie sǎ porţi pǎlǎria portocalie. M-aş bucura sǎ ştiu cǎ porţi oricare dintre pǎlǎrii.”</p>"),
      newImage("orangehat", "orangehat.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("blackhat", "blackhat.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("orangehat") )
        .settings.add( 250 , 0 , getImage("blackhat") )
        .print(),
	
	newText ("<p> Fata pune pe cap pǎlǎria neagrǎ. Cum o vei răsplati pe fatǎ? </p>")
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
                newText ("<p> Mama îi spune fetei “Nu trebuie sǎ mǎnânci cǎpşuna. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
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
	
	newText ("<p> Fata mǎnâncǎ cǎpşuna. Cum o vei răsplati pe fatǎ? </p>")
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
	
	newText ("<p> Fata poartǎ şosetele roşii. Cum o vei răsplati pe fatǎ? </p>")
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
                newText ("<p> Tatǎl îi spune bǎiatului: “Nu trebuie sǎ bei limonadǎ. O sǎ mǎ supǎr dacǎ faci asta.”</p>"),
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

		newText ("<p> Tatǎl şi bǎiatul se uitǎ la douǎ bǎuturi: suc de cǎpşuni şi suc de struguri.</p>"),	
                newText ("<p> Tatǎl îi spune bǎiatului: “Nu e nevoie sǎ bei suc de cǎpşuni. M-aş bucura sǎ ştiu cǎ bei oricare dintre bǎuturi.”</p>"),
      newImage("strawberryjuice", "strawberryjuice.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("grapejuice", "grapejuice.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("strawberryjuice") )
        .settings.add( 250 , 0 , getImage("grapejuice") )
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

		newText ("<p>Tatǎl şi bǎiatul se uitǎ la douǎ bǎuturi:o apǎ mineralǎ şi un ceai de muşeţel.</p>"),	
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
        .settings.add( 250 , 0 , getImage("chamomiletea") )
        .print(),
	
	newText ("<p>Bǎiatul bea ceaiul de muşeţel. Cum îl vei răsplati pe bǎiat? </p>")
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
                newText ("<p>Tatǎl îi spune bǎiatului: “Nu e nevoie sǎ te joci cu casa. M-aş bucura sǎ ştiu cǎ te joci cu oricare dintre jucǎrii.”</p>"),
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
                newText ("<p>Mama îi spune fetei: “Nu trebuie sǎ mǎnânci pruna. M-aş bucura sǎ ştiu cǎ mǎnânci oricare dintre fructe.”</p>"),
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
	
	newText ("<p>Bǎiatul se joacǎ cu iepuraşul. Cum îl vei răsplati pe bǎiat? </p>")
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
                newText ("<p>Bunica îi spune fetei: “Nu e nevoie sǎ porti pantaloni roşii. M-aş bucura sǎ ştiu ca porti oricare dintre perechi.”</p>"),
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


PennController ("experiment",
		defaultText
	        .print(),

		newText ("<p>Tatǎl şi bǎiatul se uitǎ la douǎ bǎuturi:o ciocolatǎ caldǎ şi un suc de portocale.</p>"),	
                newText ("<p>Tatǎl îi spune bǎiatului: “Nu trebuie sǎ bei ciocolatǎ caldǎ. M-aş bucura sǎ ştiu cǎ bei oricare dintre bǎuturi.”</p>"),
      newImage("hotchocolate", "hotchocolate.png")
        .settings.size(200,200)
        // .print()	
    ,
    newImage("orangejuice", "orangejuice.png")
        .settings.size(200,200)
        // .print()
    ,
    newCanvas(450,200)
        .settings.add( 0 , 0 , getImage("hotchocolate") )
        .settings.add( 250 , 0 , getImage("orangejuice") )
        .print(),
	
	newText ("<p>Bǎiatul bea suc de portocale. Cum îl vei răsplati pe bǎiat? </p>")
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

  
