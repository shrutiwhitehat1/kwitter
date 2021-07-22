
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyB28TLTGYRFGVm26UIMpkEDIB1EYxYfdx0",
      authDomain: "kwitter-1-3d363.firebaseapp.com",
      projectId: "kwitter-1-3d363",
      storageBucket: "kwitter-1-3d363.appspot.com",
      messagingSenderId: "209951965884",
      appId: "1:209951965884:web:13212a4e8c8a3f064486b9"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 
      //End code
      });});}
getData();
