import { createApp } from 'vue'
import App from './App.vue'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import router from './router'

// Configurar Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBKqQXVynU51WxopSwRZGystak1h_9a9gw",
    authDomain: "formvueprueba.firebaseapp.com",
    projectId: "formvueprueba",
    storageBucket: "formvueprueba.appspot.com",
    messagingSenderId: "979083549246",
    appId: "1:979083549246:web:0d9668283fafca36524f6f",
    measurementId: "G-K55GSFYJRS"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Obtener la instancia de Firebase Auth
const auth = getAuth(app);

// Registro de usuario con email y contraseña
createUserWithEmailAndPassword(auth, 'fede.+cid.96@gmaail.com', 'Jh8$gPf#Kl9s')
  .then((userCredential) => {
    // Usuario registrado exitosamente
    const user = userCredential.user;
    console.log('Usuario registrado:', user.email);
  })
  .catch((error) => {
    // Error al registrar usuario
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error al registrar usuario:', errorMessage);
  });

createApp(App).use(router).mount('#app');


