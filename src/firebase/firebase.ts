import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCxqVzlyRz9J6NBOoHr6c6YwmxGoaSFGHg',
  authDomain: 'graphiql-app-4af7f.firebaseapp.com',
  projectId: 'graphiql-app-4af7f',
  storageBucket: 'graphiql-app-4af7f.appspot.com',
  messagingSenderId: '812480364456',
  appId: '1:812480364456:web:dbb2c97bc56c083315679d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export const logout = () => {
  signOut(auth);
};
