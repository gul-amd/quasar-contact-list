import { boot } from 'quasar'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  projectID: '',
  storagwBucket: '',
  getMessagingSenderId: '',
  appId: '',
}

// Inicializando o Firebase
const firebaseApp = initializeApp(firebaseConfig)
const firestore = getFirestore(firebaseApp) // para firestore

export { firestore }

export default boot(({ app }) => {
  app.config.globalProperties.$firestore = firestore
})
