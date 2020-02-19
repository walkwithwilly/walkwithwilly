function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

            var imgObj = null;
            var debugObj = null;
            var jumpObj = null
			var sprite = null;
			var rocket = null;
			var ducked = false;
			var started = true;
            function init() {
               imgObj = document.getElementById('dot');
               imgObj.style.position= 'relative'; 
               imgObj.style.right = '0px'; 
               debugObj = document.getElementById('debug');
               jumpObj = document.getElementById('you');
               jumpObj.style.position= 'relative';
               jumpObj.style.bottom = '0px';
			   jumpObj.style.left = '0px';
			   sprite = document.getElementById('sprite');
			   sprite.src='Sprite1.png';
               rocket = document.getElementById('rocket');
			   rocket.style.visibility = "initial";
			   document.getElementById("restart");
			   restart.style.visibility = "hidden";
			   document.getElementById("crouch");
		       document.getElementById("test");
			   document.getElementById("broken");
			   crouch.style.visibility = "hidden";
			   test.style.visibility = "initial";
			   broken.style.visibility = "hidden";
			   document.getElementById("test").innerHTML = "Start";
			   
            }
            function moveLeft() {
               imgObj.style.right = parseInt(imgObj.style.right) + 5 + 'px';
            }
            function moveUp() {
            	jumpObj.style.bottom = parseInt(jumpObj.style.bottom) + 25 + 'px';
            }
			function moveRight() {
				jumpObj.style.left = parseInt(jumpObj.style.left) + 10 + 'px';
			}
            window.onload = init
		async function obstacle() { 
		     document.getElementById("crouch");
			   document.getElementById("broken");
			   crouch.style.visibility = "initial";
			   broken.style.visibility = "initial";
		    started = true;
			moving();
			fire();
		}
		
			
         async function moving() {
			 document.getElementById("test").innerHTML = "Increase Speed";
           while (started) {
             moveLeft();
			 hitbox();
             await sleep(80);
             if (parseInt(imgObj.style.right) > window.innerWidth){
	           imgObj.style.right = '-50px';
             
		     }	
          }		  
        }
        
		
		async function fire() {
			  rocket = document.getElementById("rocket");
			  while (started) {
              rocket.src='obstacle2.png';
              await sleep(100);
              rocket.src='obstacle.png';
              await sleep(100);
			  }
	    }
		

async function player() {
  sprite = document.getElementById("sprite");
  ducked = true;
  sprite.src='Sprite2.png';
  await sleep(500);
  sprite.src='Sprite1.png';
  ducked = false;
}


async function slide() {
  sprite = document.getElementById("sprite");
  sprite.src='Sprite3.png';
  moveRight();
  await sleep(200);
  sprite.src='Sprite1.png'
  checkForWin();
}

function checkForWin() {
	if (sprite.x > window.innerWidth) {
		started = false;
		window.alert("Wonderful! We just went for a walk with Willy, and won! Wow!");
		init();
	}
}
 function hitbox() {
	if (sprite.x > rocket.x - rocket.width + 5 &&
	  !ducked &&
	  sprite.x < rocket.x) {
		    started = false;
		    sprite = document.getElementById("sprite");
			sprite.src='Sprite4.png'
			rocket = document.getElementById("rocket");
			rocket.style.visibility = "hidden";
			document.getElementById("restart")
			restart.style.visibility = "initial";
			document.getElementById("crouch")
			document.getElementById("test")
			document.getElementById("broken")
			crouch.style.visibility = "hidden";
			test.style.visibility = "hidden";
			broken.style.visibility = "hidden";
    }
}
var isMobile = /iPhone|iPad|moto|Android|Samsung|pixel/i.test(navigator.userAgent);
		if (isMobile) {
  			window.alert("Excuse me, I'm afraid you're using a mobile device that is not yet compatible with Walk with Willly. Please switch to a desktop to play. Thanks!");
		} 
