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
      let items = document.querySelectorAll('.slider-item')
      let itemWidth = items[0].clientWidth / 2
      let target = 0
      let targetWidth = Math.abs(items[0].getBoundingClientRect().left + itemWidth - this.middle)
      items.forEach((item, index) => {
        let width = Math.abs(item.getBoundingClientRect().left + itemWidth - this.middle)
        if(width < targetWidth){
          target = index
          targetWidth = width
        }
      })
      this.sliderX = this.middle - items[target].offsetLeft - itemWidth
      console.log(target + '  ' + targetWidth)
    },
    choose(event) {
      console.log(event.currentTarget.clientWidth)
    }
  },
  mounted() {
    this.middle = document.body.clientWidth / 2
  }
})