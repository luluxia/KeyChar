let app = new Vue({
  el: "#app",
  data: {
    data: [
      {
        Name: ['伊吹风子', '伊吹 風子', 'いぶき ふうこ', 'Ibuki Fuko'],
        CG: 'test2.png',
        Mouth: 7,
        Day: 20
      },
      {
        Name: ['古河渚', '古河 渚', 'ふるかわ なぎさ', 'Furukawa Nagisa'],
        CG: 'test.png',
        Mouth: 12,
        Day: 24
      },
    ],
    show: [
      ['古河渚', '古河 渚', 'ふるかわ なぎさ', 'Furukawa Nagisa']
    ],
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
      console.log(items[target].dataset.id)
      this.show.pop()
      this.show.push(this.data[items[target].dataset.id].Name)
    },
    choose(event) {
      let itemWidth = document.querySelectorAll('.slider-item')[0].clientWidth / 2
      this.sliderX = this.middle - event.currentTarget.offsetLeft - itemWidth
      this.show.pop()
      this.show.push(this.data[event.currentTarget.dataset.id].Name)
    }
  },
  mounted() {
    this.middle = document.body.clientWidth / 2
  }
})