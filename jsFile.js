   // Get the modal
   var modal = document.getElementById("myModal");
   
   // Get the <span> element that closes the modal
   var span = document.getElementById("closeMod");

   
   var items = document.getElementsByClassName('projectItem');
    

    items[0].onclick = function() {
                modal.style.display = "block";
                modal.getElementsByTagName('h2')[0].innerHTML = "Ordprovet"
                modal.getElementsByTagName('img')[0].src = "ordlogo512x512alphabg.png"
                modal.getElementsByClassName("modal-body")[0].innerHTML = "<p>Ordtestet - Practice your knowledge of the swedish language!</p><a href='https://play.google.com/store/apps/details?id=com.victoria.ordtestet&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>"
                }

   items[1].onclick = function() {
    modal.style.display = "block";
    modal.getElementsByTagName('h2')[0].innerHTML = "Pathfinder"
    modal.getElementsByTagName('img')[0].src = "greedysearch.gif"
    modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for demonstrating and testing various pathfinding algorithms<p><a href='https://github.com/hanneselfving/pathfindingalgorithms'>Link</a></p>"
    }

    items[2].onclick = function() {
        modal.style.display = "block";
        modal.getElementsByTagName('h2')[0].innerHTML = "Sorting Algorithm Visualizer"
        modal.getElementsByTagName('img')[0].src = "sorting visualizer screenshot.png"
        modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for demonstrating sorting algorithms<p><a href='https://github.com/hanneselfving/Sorting-Visualizer'>Link</a></p>"
        }

   items[3].onclick = function() {
    modal.style.display = "block";
    modal.getElementsByTagName('h2')[0].innerHTML = "Linux System Manager"
    modal.getElementsByTagName('img')[0].src = "System Manager Screenshot.png"
    modal.getElementsByClassName("modal-body")[0].innerHTML = "A shell script for convenient execution of sets of important UNIX/Linux commands<p><a href='https://github.com/hanneselfving/Linux-System-Manager'>Link</a></p>"
    }

    items[4].onclick = function() {
      modal.style.display = "block";
      modal.getElementsByTagName('h2')[0].innerHTML = "Binary Search Tree Visualizer"
      modal.getElementsByTagName('img')[0].src = "binarysearchtree.png"
      modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for demonstrating a binary search tree and its operations<p><a href='https://github.com/hanneselfving/Binary-Search-Tree-Visualizer'>Link</a></p>"
      }

      items[5].onclick = function() {
        modal.style.display = "block";
        modal.getElementsByTagName('h2')[0].innerHTML = "Reliable Data Transfer Visualizer"
        modal.getElementsByTagName('img')[0].src = "Reliable Data Transfer.gif"
        modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for demonstrating reliable data transfer<p><a href='https://github.com/hanneselfving/Reliable-Data-Transfer-C'>Link</a></p>"
        }

        items[6].onclick = function() {
          modal.style.display = "block";
          modal.getElementsByTagName('h2')[0].innerHTML = "Reliable Data Transfer Simulation"
          modal.getElementsByTagName('img')[0].src = "setup-final v2.png"
          modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for simulating reliable data transfer<p><a href='https://github.com/hanneselfving/RDP-Visualizer'>Link</a></p>"
          }

          items[7].onclick = function() {
            modal.style.display = "block";
            modal.getElementsByTagName('h2')[0].innerHTML = "Tower Defense"
            modal.getElementsByTagName('img')[0].src = "screenshot.PNG"
            modal.getElementsByClassName("modal-body")[0].innerHTML = "A tower defense game developed with Java Swing<p><a href='https://github.com/hanneselfving/Troll-Attack-TowerDefense'>Link</a></p>"
            }

   
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

  let news = document.getElementById("highlightImg");   
  let i2 = 0;

            

  let pics = [ "ScreenshotMain.png", "ScreenshotRound.png", "ScreenshotStats.png", "PP_ScreenshotMain.PNG", "PP_ScreenshotApple.PNG"];

            

  news.setAttribute("style", "src: url(" + pics[0] +");height: 100%;");

            function toggle() {
              news.setAttribute("style", "src: url(" + pics[i2] +"); height: 100%;");
              i2 = (i2 + 1) % pics.length;  // update the counter
            }

            setInterval(toggle, 5000); //30000


   
            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
              var currentScrollPos = window.pageYOffset;
              if (prevScrollpos > currentScrollPos) {
                document.getElementById("top").style.top = "0";
                //document.getElementById("top").style.visibility = visible;
              } else {
                document.getElementById("top").style.top = "-999px";
                 // document.getElementById("top").style.visibility = hidden;
              }
              prevScrollpos = currentScrollPos;
            }