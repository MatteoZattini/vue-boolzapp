const { createApp } = Vue

createApp({
  data() {
    return {
      contacts: [
        {
          name: 'Michele',
          avatar: './img/avatar_1.jpg',
          visible: true,
          messages: [
            {
              date: 'ultimo accesso 10/01/2020 15:30',
              time: '15:30',
              message: 'Hai portato a spasso il cane?',
              status: 'sent'
            },
            {
              date: 'ultimo accesso 10/01/2020',
              time: '15:50',
              message: 'Ricordati di stendere i panni',
              status: 'sent'
            },
            {
              date: 'ultimo accesso 10/01/2020',
              time: '16:15',
              message: 'Tutto fatto!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Fabio',
          avatar: './img/avatar_2.jpg',
          visible: true,
          messages: [
            {
              date: 'ultimo accesso 20/03/2020',
              time: '16:30',
              message: 'Ciao come stai?',
              status: 'sent'
            },
            {
              date: 'ultimo accesso 20/03/2020',
              time: '16:30',
              message: 'Bene grazie! Stasera ci vediamo?',
              status: 'received'
            },
            {
              date: 'ultimo accesso 20/03/2020',
              time: '16:35',
              message: 'Mi piacerebbe ma devo andare a fare la spesa.',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Samuele',
          avatar: './img/avatar_3.jpg',
          visible: true,
          messages: [
            {
              date: 'ultimo accesso 28/03/2020',
              time: '10:10',
              message: 'La Marianna va in campagna',
              status: 'received'
            },
            {
              date: 'ultimo accesso 28/03/2020',
              time: '10:20',
              message: 'Sicuro di non aver sbagliato chat?',
              status: 'sent'
            },
            {
              date: 'ultimo accesso 28/03/2020',
              time: '16:15',
              message: 'Ah scusa!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro B.',
          avatar: './img/avatar_4.jpg',
          visible: true,
          messages: [
            {
              date: 'ultimo accesso 10/01/2020',
              time: '15:30',
              message: 'Lo sai che ha aperto una nuova pizzeria?',
              status: 'sent'
            },
            {
              date: 'ultimo accesso 10/01/2020',
              time: '15:50',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
            }
          ],
        },
        {
          name: 'Alessandro L.',
          avatar: './img/avatar_5.jpg',
          visible: true,
          messages: [
            {
              date: '22/01/2020',
              time: '15:30',
              message: 'Ricordati di chiamare la nonna',
              status: 'sent'
            },
            {
              date: 'ultimo accesso 22/01/2020',
              time: '15:50',
              message: 'Va bene, stasera la sento',
              status: 'received'
            }
          ],
        },
        {
          name: 'Claudia',
          avatar: './img/avatar_6.jpg',
          visible: true,
          messages: [
            {
              date: 'ultimo accesso 12/02/2020',
              time: '15:30',
              message: 'Ciao Claudia, hai novità?',
              status: 'sent'
            },
            {
              date: 'ultimo accesso 12/02/2020',
              time: '15:50',
              message: 'Non ancora',
              status: 'received'
            },
            {
              date: 'ultimo accesso 12/02/2020',
              time: '15:51',
              message: 'Nessuna nuova, buona nuova',
              status: 'sent'
            }
          ],
        },
        {
          name: 'Federico',
          avatar: './img/avatar_7.jpg',
          visible: true,
          messages: [
            {
              date: 'ultimo accesso 05/05/2020',
              time: '15:30',
              message: 'Fai gli auguri a Martina che è il suo compleanno!',
              status: 'sent'
            },
            {
              date: 'ultimo accesso 05/05/2020',
              time: '15:50',
              message: 'Grazie per avermelo ricordato, le scrivo subito!',
              status: 'received'
            }
          ],
        },
        {
          name: 'Davide',
          avatar: './img/avatar_8.jpg',
          visible: true,
          messages: [
            {
              date: 'ultimo accesso 17/02/2020',
              time: '15:30',
              message: 'Ciao, andiamo a mangiare la pizza stasera?',
              status: 'received'
            },
            {
              date: 'ultimo accesso 17/02/2020',
              time: '15:50',
              message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
              status: 'sent'
            },
            {
              date: 'ultimo accesso 17/02/2020',
              time: '15:51',
              message: 'OK!!',
              status: 'received'
            }
          ],
        }
      ],
      activeConv: 0,
      inputValueMssg: "",
      inputValueSearch: "",
      searchedContacts: [],
      activeMssg: null,
      
    }
  },

  methods: {
    cliccato(index) {
      this.activeConv = index
    },

    indexMessage(index) {
      this.activeMssg = index
      return this.activeMssg
    },

    lastElement(array) {
      const ultimoIndice = array.length - 1
      return array[ultimoIndice]
  },

  inputMessage() {
    this.filteredContacts[this.activeConv].messages.push({
      message: this.inputValueMssg,
      date: 'Online',
      time: '18:59',
      status: "sent",
    })
    this.inputValueMssg = "";
    setTimeout(() => {
      this.filteredContacts[this.activeConv].messages.push({
        message: "Okay",
        date: 'ultimo accesso 10/01/2020',
        time: '19:00',
        status: "received",
      })
    }, 2000)
  },

  accrocchio() {
    this.activeConv= 0
  },

  deleteMssg(index, messageIndex) {
    this.filteredContacts[index].messages.splice(messageIndex, 1);
  }

  },

  computed: {
    filteredContacts: function() {
      return this.contacts.filter((contact) => {
        return contact.name.toLowerCase().match(this.inputValueSearch)
      })
    }
  },

  mounted() {
    // axios.get('').then((result) => {
    //   const element = result.data    
    // })
  },

}).mount('#app')

