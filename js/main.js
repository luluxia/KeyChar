let app = new Vue({
  el: "#app",
  data: {
    data: [
      {
        Name: ['伊吹风子', '伊吹 風子', 'いぶき ふうこ', 'Ibuki Fuko'],
        CG: 'test2.png',
        Month: 7,
        Day: 20,
        Color: '#3c6e3c'
      },
      {
        Name: ['古河渚', '古河 渚', 'ふるかわ なぎさ', 'Furukawa Nagisa'],
        CG: 'test.png',
        Month: 12,
        Day: 24,
        Color: '#dc3c78'
      }
    ],
    show: [
      {
        Name: ['古河渚', '古河 渚', 'ふるかわ なぎさ', 'Furukawa Nagisa'],
        CG: 'test.png',
        Month: 12,
        Day: 24,
        Color: '#dc3c78'
      }
    ],
    sliderMove: 0,
    sliderX: 0,
    sliderChange: 0,
    pastX: 0,
    mouseX: 0,
    middle: 0,
    lastTarget: 0,
    direction: '',
  },
  methods: {
    slider_down(event) {
      this.sliderMove = 1
      this.sliderChange = 0
      this.mouseX = event.clientX
      this.pastX = this.sliderX
    },
    slider_move(event) {
      let changeX
      if(this.sliderMove){
        this.sliderChange = 1
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
      if(target > this.lastTarget){
        this.direction = 'right'
      }else{
        this.direction = 'left'
      }
      this.lastTarget = target
      this.show.pop()
      this.show.push(this.data[items[target].dataset.id])
    },
    choose(event) {
      console.log(this.sliderChange)
      if(!this.sliderChange){
        let itemWidth = document.querySelectorAll('.slider-item')[0].clientWidth / 2
        this.sliderX = this.middle - event.currentTarget.offsetLeft - itemWidth
        this.show.pop()
        this.show.push(this.data[event.currentTarget.dataset.id])
      }
    }
  },
  mounted() {
    this.middle = document.body.clientWidth / 2
  }
})