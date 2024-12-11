about.addEventListener("click",function(){
    pagetitle.innerHTML= "Donut's With Diego";
    content.innerHTML= "Your host Diego Arenas is always on the lookout for Calgary’s best donut. Using a rating scale from 1-14, he takes into account different categories such as; presentation, mouth feel, shop ambiance and flavour. Each donut is evaluated in two bites, with each bite receiving a ranking that contributes to the final evaluation. Today’s donut is the “BOSTON CREAM” Donut from Tim Hortons.  where your host Diego Arenas reviews donuts throughout the city of Calgary Alberta.  With a ranking system from 1-14 (like a PH scale) the ranking system takes into account multiple profiles such as : Presentation, Flavour, Mouth Feel and Tenderness.";
     heads.innerHTML= "About";
    console.log ("about")
    document.body.classList.remove("bite1");
	document.body.classList.remove("bite2");
	document.body.classList.remove("score");
    document.body.classList.add("about" );
    document.getElementById('fd').src="ddonut copy.jpeg";
	document.getElementById('fd').alt= " Diego holding Donut";



})

bite1.addEventListener("click",function(){
    
    pagetitle.innerHTML= "Donut's With Diego";
    content.innerHTML= "Initial bite was fluffy with a great ratio of chocolate to dough. Great mouth feel with a very soft, yet fulfilling bite.Chocolate topping was intact and presented well for a mass produced donut but you could feel the lack of love in the initial presentation. First Bite Score - 7/14";
   heads.innerHTML = "Bite 1: 7/14";
    console.log ("bite1");
    document.body.classList.remove("about");
	document.body.classList.remove("bite2");
	document.body.classList.remove("score");
    document.body.classList.add("bite1" );
    document.getElementById('fd').src="1st copy.png";
	document.getElementById('fd').alt= " Sprinkle Donut Bite";

})

bite2.addEventListener("click",function(){
    
    pagetitle.innerHTML= "Donut's With Diego";
    content.innerHTML= " First opportunity to receive a bite with the cream filling, and it did not disappoint. Excellent chocolate- cream-dough ratio that surprised me with its balance. Very impressed with the second bite and overall experience. Second Bite Score - 9/14";
    heads.innerHTML = "Bite 2: 9/14";
    console.log ("bite2")
    document.body.classList.remove("about");
	document.body.classList.remove("bite1");
	document.body.classList.remove("score");
    document.body.classList.add("bite2" );
    document.getElementById('fd').src="2nd copy.png";
	document.getElementById('fd').alt= " Boston Cream Donut Bite";

})

score.addEventListener("click",function(){
    
    pagetitle.innerHTML= "Donut's With Diego";
    content.innerHTML= " For a franchise that reaches a national audience, Tim Hortons has mastered consistency in their Boston Cream donut. Their ability to supply a consistent donut nationwide covers up the presentation flaws that comes with placing a donut in a bag. However, I’m still very impressed.";
    heads.innerHTML = "Final Score : 8/14";
    console.log ("score")
    document.body.classList.remove("about");
	document.body.classList.remove("bite1");
	document.body.classList.remove("bite2");
    document.body.classList.add("score" );
    document.getElementById('fd').src="full copy.png";
	document.getElementById('fd').alt= " Full Boston Cream Donut";

})
