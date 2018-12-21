import * as  firebase from 'firebase'

const config = {
    apiKey: "AIzaSyCPqVlfQKiuCuP8RgiHVlYdbRVO4VsZFSs",
    authDomain: "instacool-f0571.firebaseapp.com",
    databaseURL: "https://instacool-f0571.firebaseio.com",
    messagingSenderId: "173347480622",
    projectId: "instacool-f0571",
    storageBucket: "instacool-f0571.appspot.com",
}
firebase.initializeApp(config);

const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

export const auth = firebase.auth()
export const db = firestore
export const storage = firebase.storage() 