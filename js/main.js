let app = new Vue({
  el: "#app",
  data: {
    sliderMove: 0,
    sliderX: 0,
    pastX: 0,
    mouseX: 0,
    middle: 0,
  },
  methods: {
    slider_down(event) {
      this.sliderMove = 1
      this.mouseX = event.clientX
      this.pastX = this.sliderX
    },
    slider_move(event) {
      let changeX
      if(this.sliderMove){
        changeX = this.mouseX - event.clientX
        this.sliderX = this.pastX - changeX
      }
    },
    slider_up() {
      this.sliderMove = 0
    },
    choose(event) {
      console.log(event.target.getBoundingClientRect().left)
    }
  },
  mounted() {
    this.middle = document.body.clientWidth / 2
  }
})