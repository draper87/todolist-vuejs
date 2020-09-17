// Creo una piccola applicazione web che mi permette di gestire le cose da fare

// creo un nuovo oggetto Vue
var app = new Vue({
  el: '#app',
  data: {
    listaToDo: [ // questi sono degli esempi delle cose da fare, done rappresenta se sono state fatte
      { text: 'Fare la spesa', done: true},
      { text: 'Andare a correre', done: false},
      { text: 'Chiamare il nonno', done: false}
    ],
    inputText: '' // rappresenta il mio input dove andrò a scrivere le cose da fare
  },
  methods: {
    addToDoList() { // funzione che pusha un nuovo elemento nel array listaToDo
      this.listaToDo.push({
        text: this.inputText,
        done: false
      })
      this.inputText = ''
    },
    removeToDoList(index) { // funzione che elimina un elemento dalla array listaToDo
      this.listaToDo.splice(index, 1);
    },
    toggleToDoList(index) { // funzione che modifica il bottone 'Fatto' con 'Da Fare'
      this.listaToDo[index].done = !this.listaToDo[index].done;
    }
  }
})
