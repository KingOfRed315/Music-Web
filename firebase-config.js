const firebaseConfig = {
  apiKey: "AIzaSyA14QB9kM-dmA20wzyC0S5JfnWlUtk7Qak",
  authDomain: "mymusic-app-ac350.firebaseapp.com",
  projectId: "mymusic-app-ac350",
  storageBucket: "mymusic-app-ac350.firebasestorage.app",
  messagingSenderId: "803827281341",
  appId: "1:803827281341:web:6106662dc95f2b07d0b6d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Dòng này cực kỳ quan trọng để ăn cấu hình:
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);

window.db = firebase.firestore();