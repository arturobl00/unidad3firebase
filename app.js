 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCKc8j_0IBh5sHgfmuicF1ESmCGHhSDess",
    authDomain: "unidad3firebase-fe333.firebaseapp.com",
    projectId: "unidad3firebase-fe333",
    storageBucket: "unidad3firebase-fe333.appspot.com",
    messagingSenderId: "440392217026",
    appId: "1:440392217026:web:623bcd02a7e4fcd873665b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Declaro Variable para mi base de datos
  var basedatos = firebase.database();

  // Variable para comunuicarme con mi html
  var app = document.getElementById('app');

  // Consumir datos de Realtime
  /*var coleccion = firebase.database().ref().child('mensaje');
  coleccion.on('value', (snaphot) => {
      console.log(snaphot.val())
  });*/

  var coleccion = basedatos.ref().child('saludo');
  coleccion.on('value', (snapshot) => {
    console.log(snapshot.val());
    app.innerText = snapshot.val();
  });


  //Agregar colección a base de datos
  function writecollection() {
    basedatos.ref('users').set({
      username: "arturobl00",
      email: "4rthurbl00@gmail.com",
    });
  }
  
