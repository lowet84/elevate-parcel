import Vue from 'vue'
import App from './App.vue'
import Demo from './components/Demo.vue'

Vue.component('demo',Demo)

new Vue(
    { el: '#app', render: d => d(App) }
)