// Istruzioni:
// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di Vue JS stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti cd.

let app = new Vue ({
  el: "#app",
  data: {
    albumPoster: "",
    albumTitle: "",
    albumAuthor: "",
    albumGenre: "",
    albumYear: "",
  },
  mounted() {
    const self = this;

    axios.get("https://cors-anywhere.herokuapp.com/https://flynn.boolean.careers/exercises/api/array/music")
    .then(response => {
      self.albumTitle = response.data.title;
    })
    .catch(function (error) {
      console.log(error);
    });
  },
})
