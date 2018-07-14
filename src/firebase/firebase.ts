import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// child_removed

// database.ref('expenses').on('child_removed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed

// database.ref('expenses').on('child_changed', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//       ...childSnapshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

  // database.ref('expenses').on('value', snapshot => {
  //   const expenses = [];

  //   snapshot.forEach(childSnapshot => {
  //     expenses.push({
  //       id: childSnapshot.key,
  //     ...childSnapshot.val(),
  //     });
  //   });
  //   console.log(expenses);
  // });

// database.ref('expenses').push({
//     description: 'Pit',
//     note: '',
//     amount: 33233,
//     createdAt: 1045400,
// });

// database.ref('notes').push({
//   description: 'Rent',
//   note: '',
//   amount: 233,
//   createdAt: 1000,
// });

// database.ref('notes').push({
//   title: 'first note',
//   body: 'this is my note',
// });

// database.ref('notes/L9WCm5uqK9RQXRg77C0').update({
//   body: 'fooddd',
// });

// const firebaseNotes = {
//   notes: {
//     '122': {
//       title: 'another note',
//       body: 'this is my note',
//     },
//     '12': {
//       title: 'first note',
//       body: 'this is my note',
//     },
//   },
// };

// const notes = [
//   {
//     id: 12,
//     title: 'first note',
//     body: 'this is my note',
//   },
//   {
//     id: 122,
//     title: 'another note',
//     body: 'this is my note',
//   },
// ];

// database.ref('notes').set(notes);
// database.ref().set({
//   name: 'ilya'
// });

// database.ref('attributes').set({
//   height: 176,
//   weight: 62,
// }).then(() => {
//   console.log('worked');
// })
// .catch(e => {
//   console.log('not worked', e);
// });

// database.ref('name').remove();
// database.ref('attributes').update({
//   height: 22
// });
// database.ref().update({
//   'attributes/height': 22
// // });

// fetching data several ways

// database.ref().once('value')
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => console.log('error fetching data', e));



// database.ref().on('value', snapshot => {
//   console.log(snapshot.val());
// }, e => {
//   console.log('error fetching data', e);
// });

// database.ref().off(); // unsubscription