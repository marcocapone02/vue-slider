const { createApp } = Vue;

createApp({
    data() {
      return {
        currentActive: 0,
        slides: [
            {
                image: 'assets/img/1.jpg',
                title: 'Il Padrino',
                text: 'La vita di Vito Corleone, impegnato nel difficile compito di tenere la famiglia unita e l\'impero mafioso compatto.',
            },

            {
                image: 'assets/img/2.jpg',
                title: 'Super Mario Bros',
                text: 'Un idraulico di nome Mario viaggia in un labirinto sotterraneo con suo fratello Luigi, cercando di salvare una principessa catturata.',
            },

            {
                image: 'assets/img/3.jpg',
                title: 'Avengers Endgame',
                text: "Alla deriva nello spazio senza cibo o acqua, Tony Stark vede la propria scorta di ossigeno diminuire di minuto in minuto. Nel frattempo, i restanti Vendicatori affrontano un epico scontro con Thanos.",
            },

            {
                image: 'assets/img/4.jpg',
                title: 'Django Unchained',
                text: 'Sulle tracce di due criminali in fuga e di una donna, il cacciatore di taglie di origini tedesche Schultz e lo schiavo Django instaurano un atipico sodalizio sullo sfondo della Guerra Civile Americana.',
            },

            {
                image: 'assets/img/5.jpg',
                title: 'Star Wars',
                text: 'Con l\'aiuto di fedeli robot e altri preziosi alleati, il giovane Luke Skywalker deve salvare la principessa ribelle Leila e sconfiggere l\'Impero che costringe la galassia sotto il suo controllo.',
            },

            {
              image: 'assets/img/6.jpg',
              title: 'Harry Potter',
              text: 'A 11 anni, Harry Potter scopre di essere il figlio orfano di due potenti maghi. Frequenta la scuola di magia e stregoneria di Hogwarts dove scopre la verità su se stesso e sulla morte dei suoi genitori.',
          },
          
          {
            image: 'assets/img/7.jpg',
            title: 'The Irishman',
            text: 'La storia di Frank Sheeran, veterano di guerra e camionista, divenuto un sicario al soldo della malavita di Filadelfia e assoldato per uccidere il popolare sindacalista Jimmy Hoffa.',
        }

        ]

      }
    },

    methods: {
        prev(){
            if( this.currentActive == 0 ){
                this.currentActive = this.slides.length - 1
            }else{
              this.currentActive = this.currentActive - 1;
            }
        },

        next(){
            if( this.currentActive == this.slides.length - 1 ){
                this.currentActive = 0;
            }else{
                this.currentActive = this.currentActive + 1;
            }
        }
    }

}).mount('#app')