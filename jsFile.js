   // Get the modal
   var modal = document.getElementById("myModal");
   
   // Get the <span> element that closes the modal
   var span = document.getElementById("closeMod");

   
   var items = document.getElementsByClassName('projectItem');
     
   items[0].onclick = function() {
    modal.style.display = "block";
    modal.getElementsByTagName('h2')[0].innerHTML = "Ordtestet"
    modal.getElementsByTagName('img')[0].src = "ordlogo512x512svartbg.png"
    modal.getElementsByClassName("modal-body")[0].innerHTML = "Ordtestet - Practice your knowledge of the swedish language!"
    }
    



//    for(var i = 0; i < items.length; i++) {
//            var item = items[i];

//            if(i == 0) {
//                 var title = "Pathfinder";
//                 var img = document.getElementById("pFindImg");
//                 item.onclick = function() {
//                 modal.style.display = "block";
//                 modal.getElementsByTagName('h2')[0].innerHTML = title
//                 modal.getElementsByTagName('img')[0] = img
//                 modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for demonstrating and testing various pathfinding algorithms"
//                 }
//            }
//            else if(i == 1) {
//             var title = "Sorting Algorithm Visualizer";
//             var img = document.getElementById("SAlgImg");
//                 item.onclick = function() {
//                 modal.style.display = "block";
//                 modal.getElementsByTagName('h2')[0].innerHTML = title
//                 modal.getElementsByTagName('img')[0] = img
//                 modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for demonstrating sorting algorithms"
//                 }
//             }
//             else if(i == 2) {
//                 var title = "Linux System Manager";
//                 var img = document.getElementById("linuxImg");
//                     item.onclick = function() {
//                     modal.style.display = "block";
//                     modal.getElementsByTagName('h2')[0].innerHTML = title
//                     modal.getElementsByTagName('img')[0] = img
//                     modal.getElementsByClassName("modal-body")[0].innerHTML = "A shell script for important Linux commands"
//                     }
//                 }
//        }
   
   // When the user clicks on <span> (x), close the modal
   span.onclick = function() {
     modal.style.display = "none";
   }
   
   // When the user clicks anywhere outside of the modal, close it
   window.onclick = function(event) {
     if (event.target == modal) {
       modal.style.display = "none";
     }
   }

  let news = document.getElementById("intro");   
  let i = 0;

            

  let pics = [ "ScreenshotMain.png", "ScreenshotRound.png", "ScreenshotStats.png", "PP_ScreenshotMain.png", "PP_ScreenshotApple.png"];

            

  news.setAttribute("style", "background-image: url(" + pics[i] + ");background-repeat: no-repeat; background-size: contain; background-position: center;");

            function toggle() {
            news.setAttribute("style", "background-image: url(" + pics[i] + "); background-repeat: no-repeat; background-size: contain; background-position: center;");
            i = (i + 1) % pics.length;  // update the counter
            }

            setInterval(toggle, 2500); //30000
   
