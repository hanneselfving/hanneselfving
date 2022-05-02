   // Get the modal
   var modal = document.getElementById("myModal");
   
   // Get the <span> element that closes the modal
   var span = document.getElementById("closeMod");

   
   var items = document.getElementsByClassName('projectItem');
     
   items[0].onclick = function() {
    modal.style.display = "block";
    modal.getElementsByTagName('h2')[0].innerHTML = "Pathfinder"
    modal.getElementsByTagName('img')[0].src = "greedysearch.gif"
    modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for demonstrating and testing various pathfinding algorithms"
    }

    items[1].onclick = function() {
        modal.style.display = "block";
        modal.getElementsByTagName('h2')[0].innerHTML = "Sorting Algorithm Visualizer"
        modal.getElementsByTagName('img')[0].src = "sorting visualizer screenshot.png"
        modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for demonstrating sorting algorithms"
        }

   items[2].onclick = function() {
    modal.style.display = "block";
    modal.getElementsByTagName('h2')[0].innerHTML = "Linux System Manager"
    modal.getElementsByTagName('img')[0].src = "System Manager Screenshot.png"
    modal.getElementsByClassName("modal-body")[0].innerHTML = "A shell script for convenient execution of sets of important UNIX/Linux commands"
    }

    items[3].onclick = function() {
      modal.style.display = "block";
      modal.getElementsByTagName('h2')[0].innerHTML = "Binary Search Tree Visualizer"
      modal.getElementsByTagName('img')[0].src = "bst.PNG"
      modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for demonstrating a binary search tree and its operations"
      }

      items[4].onclick = function() {
        modal.style.display = "block";
        modal.getElementsByTagName('h2')[0].innerHTML = "Reliable Data Transfer Visualizer"
        modal.getElementsByTagName('img')[0].src = "Reliable Data Transfer.gif"
        modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for demonstrating reliable data transfer"
        }

        items[5].onclick = function() {
          modal.style.display = "block";
          modal.getElementsByTagName('h2')[0].innerHTML = "Reliable Data Transfer Simulation"
          modal.getElementsByTagName('img')[0].src = "setup-final v2.png"
          modal.getElementsByClassName("modal-body")[0].innerHTML = "An application for simulating reliable data transfer"
          }

          items[6].onclick = function() {
            modal.style.display = "block";
            modal.getElementsByTagName('h2')[0].innerHTML = "Tower Defense"
            modal.getElementsByTagName('img')[0].src = "screenshot.PNG"
            modal.getElementsByClassName("modal-body")[0].innerHTML = "A tower defense game developed with Java Swing"
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
   
