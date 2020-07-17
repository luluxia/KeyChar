let app = new Vue({
  el: "#app",
  data: {
    data: null,     //整理后的数据
    dataByMonth: [],
    show: [],
    sliderMove: 1,  //控制时间轴动画
    sliderX: 0,     //时间轴坐标
    sliderChange: 0,//时间轴是否发生移动
    pastX: 0,       //过去的坐标
    mouseX: 0,      //鼠标坐标
    middle: 0,      //网页中心点
    nowTarget: 0,   //目前显示对象
    direction: '',  //动画方向
    itemWidth: 0,   //时间轴图标宽度
    isPhone: 0,     //是否为手机端

    touchX: 0,      //触控坐标
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
          let e=c.getContext("2d");
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
      if(this.sliderMove){
        let changeX
        changeX = this.mouseX - event.clientX
        if(this.sliderX != this.pastX - changeX){
          this.sliderChange = 1
        }
        this.sliderX = this.pastX - changeX
      }
    },
    slider_up() {
      this.sliderMove = 0
      let items = document.querySelectorAll('.slider-item')
      let target = 0
      let targetWidth = Math.abs(items[0].getBoundingClientRect().left + this.itemWidth - this.middle)
      items.forEach((item, index) => {
        let width = Math.abs(item.getBoundingClientRect().left + this.itemWidth - this.middle)
        if(width < targetWidth){
          target = index
          targetWidth = width
        }
      })
      this.sliderX = this.middle - items[target].offsetLeft - this.itemWidth
      if(target > this.nowTarget){
        this.direction = 'left'
      }else{
        this.direction = 'right'
      }
      this.nowTarget = target
      this.show.pop()
      this.show.push(this.data[items[target].dataset.id])
    },
    choose(event) {
      console.log(this.sliderChange)
      if(!this.sliderChange){
        this.sliderX = this.middle - event.currentTarget.offsetLeft - this.itemWidth
        if(event.currentTarget.dataset.id > this.nowTarget){
          this.direction = 'left'
        }else{
          this.direction = 'right'
        }
        this.nowTarget = event.currentTarget.dataset.id
        this.show.pop()
        this.show.push(this.data[event.currentTarget.dataset.id])
      }
    },

    touch_down(event){
      this.touchX = event.changedTouches[0].clientX
    },
    touch_move(event){
      // console.log(event.changedTouches[0].clientX - this.touchX)
      if(event.changedTouches[0].clientX - this.touchX >= 80 && this.nowTarget != 0){
        this.direction = 'right'
        this.nowTarget--
        this.sliderX = this.middle - document.querySelector('li[data-id="' + this.nowTarget +'"]').offsetLeft - this.itemWidth
        this.show.pop()
        this.show.push(this.data[this.nowTarget])

        this.touchX = event.changedTouches[0].clientX
      }else if(event.changedTouches[0].clientX - this.touchX <= -80 && this.nowTarget != this.data.length - 1){
        this.direction = 'left'
        this.nowTarget++
        this.sliderX = this.middle - document.querySelector('li[data-id="' + this.nowTarget +'"]').offsetLeft - this.itemWidth
        this.show.pop()
        this.show.push(this.data[this.nowTarget])

        this.touchX = event.changedTouches[0].clientX
      }
    },
    touch_up(event){

    }
  },
  mounted() {
    //初始化
    this.data = _.sortBy(data, ['month', 'day', 'name[3]'])

    //按月份排序
    // this.dataByMonth = Array.from({length:13},()=>[])
    // this.data.forEach(item => {
    //   this.dataByMonth[item.month - 1].push(item)
    // })

    this.middle = document.body.clientWidth / 2
    this.star()

    //往后获取生日最近的角色
    let nowMonth = new Date().getMonth()
    let nowDay = new Date().getDate()
    let target = _.findIndex(this.data, item => {
      return (item.month == nowMonth && item.day >= nowDay || item.month > nowMonth)
    })
    if(!target){
      target = 1
    }
    this.nowTarget = target

    //完成时间轴并跳转至生日最近的角色
    this.$nextTick(() => {
      let months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ,10 ,11, 12, 13]
      months.forEach(item => {
        if(document.querySelector('li[data-month="' + item +'"]')){
          let el = document.querySelector('li[data-month="' + item +'"]')
          if(item == 13){
            el.insertAdjacentHTML('beforeBegin', '<li class="slider-month">无</li>')
          }else{
            el.insertAdjacentHTML('beforeBegin', '<li class="slider-month">' + item + '月</li>')
          }
        }
      })
      this.itemWidth = document.querySelectorAll('.slider-item')[0].clientWidth / 2
      this.sliderX = this.middle - document.querySelector('li[data-id="' + this.nowTarget +'"]').offsetLeft - this.itemWidth
      this.show.push(this.data[this.nowTarget])
      setTimeout(() => {
        this.sliderMove = 0
      }, 300)
    })

    //滚轮事件
    window.addEventListener('wheel', _.debounce(event => {
      if(event.deltaY > 0 && this.nowTarget != this.data.length - 1){
        this.direction = 'left'
        this.nowTarget++
        this.sliderX = this.middle - document.querySelector('li[data-id="' + this.nowTarget +'"]').offsetLeft - this.itemWidth
        this.show.pop()
        this.show.push(this.data[this.nowTarget])
      }else if(event.deltaY < 0 && this.nowTarget != 0){
        this.direction = 'right'
        this.nowTarget--
        this.sliderX = this.middle - document.querySelector('li[data-id="' + this.nowTarget +'"]').offsetLeft - this.itemWidth
        this.show.pop()
        this.show.push(this.data[this.nowTarget])
      }
    }, 100))

    if(document.body.clientWidth < 700){
      this.isPhone = 1
    }
  }
})