let app = new Vue({
  el: "#app",
  data: {
    data: [
      {
        Name: ['伊吹风子', '伊吹 風子', 'いぶき ふうこ', 'Ibuki Fuko'],
        CG: 'test2.png',
        Pic: ['pic.jpg', 'pic.jpg', 'pic.jpg'],
        Month: 7,
        Day: 20,
        Color: '#3c6e3c'
      },
      {
        Name: ['古河渚', '古河 渚', 'ふるかわ なぎさ', 'Furukawa Nagisa'],
        CG: 'test.png',
        Pic: ['pic2.jpg', 'pic2.jpg', 'pic2.jpg'],
        Month: 12,
        Day: 24,
        Color: '#dc3c78'
      }
    ],
    show: [
      {
        Name: ['古河渚', '古河 渚', 'ふるかわ なぎさ', 'Furukawa Nagisa'],
        CG: 'test.png',
        Pic: ['pic2.jpg', 'pic2.jpg', 'pic2.jpg'],
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
    star() {
      let num=1;
      let c=document.querySelector("#star");
      c.width=document.body.clientWidth;
      c.height=document.body.clientHeight;
      let width=new Array();
      let width2=new Array();
      let width3=new Array();
      let width4=new Array();
      let linenum;
      if(c.width>c.height){
        linenum=(c.width-200)/50;
      }else{
        linenum=(c.height-200)/50;
      }
      for(i=0;i<=linenum;i++){
          width[i]=200+Math.random()*200//星轨起跑线
          width2[i]=0.001+Math.random()*Math.PI/180;//星轨速率
          width3[i]=Math.random()*5+2;//星轨宽度
          width4[i]=0.2+50*Math.random()*Math.PI/180;//星轨长度
      }
      let star = e => {
          num++;
          if(num==3000){
            c.style.opacity = 0;
              setTimeout(() => {
                c.style.opacity = 0.8;
                  num=0;
              },1000);
          }
          e.clearRect(0,0,c.width,c.height);
          e.fillStyle="rgba(255,255,255,0)";
          e.strokeStyle="#FFF";
          e.fillRect(0,0,c.width,c.height);
          for(i=0;i<=linenum;i++){
              e.lineWidth=width3[i];
              e.beginPath();
              e.arc(100,100,200+50*i,width2[i]*num+width[i],width2[i]*num+width4[i]+width[i]);
              e.stroke();
          }
      }
      let create = () => {
          var e=c.getContext("2d");
          e.lineCap="round";
          setInterval(() => {
              star(e);
          },20);
      }
      create();
    },
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
    this.star()
  }
})