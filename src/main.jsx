import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ProviderLayer from './ProviderLayer.jsx';
import { FirebaseAppProvider } from 'reactfire';


const firebaseConfig = {
  apiKey: "AIzaSyCKJVKx62LCMWOuzV7GS_kmJCdUmNTrZBQ",
  authDomain: "jambird-9d5ce.firebaseapp.com",
  projectId: "jambird-9d5ce",
  storageBucket: "jambird-9d5ce.appspot.com",
  messagingSenderId: "850821068568",
  appId: "1:850821068568:web:715b4bb433b618a8aad06d"
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <ProviderLayer />
    </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
