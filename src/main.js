import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false


  const firebaseConfig = {
    apiKey: "AIzaSyCVQp6afxYpOm3S-CZhs_LJcyJXhucGboI",
    authDomain: "my-address-pj-50afa.firebaseapp.com",
    databaseURL: "https://my-address-pj-50afa.firebaseio.com",
    projectId: "my-address-pj-50afa",
    storageBucket: "my-address-pj-50afa.appspot.com",
    messagingSenderId: "475345677958",
    appId: "1:475345677958:web:208f5525002c30d1456b07",
    measurementId: "G-C1XHGZT7DC"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
