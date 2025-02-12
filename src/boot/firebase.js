import { boot } from 'quasar'
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  dabaseURL: '',
  projectID: '',
  storagwBucket: '',
  getMessagingSenderId: '',
  appId: '',
}

// Inicializando o Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getDatabase(firebaseApp) // para realtime database
const firestore = getFirestore(firebaseApp) // para firestore

export { db, firestore }

export default boot(({ app }) => {
  app.config.globalProperties.$db = db
  app.config.globalProperties.$firestore = firestore
})
