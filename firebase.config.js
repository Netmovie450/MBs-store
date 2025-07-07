
// Firebase SDK compatível com HTML puro
const firebaseConfig = {
  apiKey: "AIzaSyCSqQqlMFsMNLdRUUH0jj7r00tl8GueIdg",
  authDomain: "tarefa-por-hora2.firebaseapp.com",
  projectId: "tarefa-por-hora2",
  storageBucket: "tarefa-por-hora2.firebasestorage.app",
  messagingSenderId: "187207930417",
  appId: "1:187207930417:web:ab50d2cccfeb43a457fb10",
  measurementId: "G-4TSW0SBZ79",
  databaseURL: "https://tarefa-por-hora2-default-rtdb.firebaseio.com"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
