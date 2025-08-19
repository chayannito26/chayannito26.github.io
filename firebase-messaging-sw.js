// Import and configure the Firebase SDK
// This is a special version of the SDK for service workers
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsI5v9okHOdxbEw8k8hXwzPzZMpDrirbM",
  authDomain: "chayannito-26.firebaseapp.com",
  projectId: "chayannito-26",
  storageBucket: "chayannito-26.firebasestorage.app",
  messagingSenderId: "127749935084",
  appId: "1:127749935084:web:8bf6df50ce2cbc96cdbac9",
  measurementId: "G-CRHHT66GTQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Retrieve an instance of Firebase Messaging so that it can handle background messages.
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/firebase-logo.png' // Optional: Add an icon URL
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
