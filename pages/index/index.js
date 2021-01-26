//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    timer1: '',
    timer2: '',
    bgAc: ''
  },
  onShow: function () {
    this.data.bgAc.play();
  },
  onLoad: function () {

    const innerAudioContext = wx.createInnerAudioContext();
    innerAudioContext.autoplay = true;
    // innerAudioContext.src = 'https://imw10000.github.io/music/nidongde.mp3';
    innerAudioContext.src = '/musics/bg1.m4a';
    innerAudioContext.loop = true;
    innerAudioContext.onPlay(() => {
      console.log('playing...')
    })
    innerAudioContext.onError(() => {
      console.log('error...')
    })
    this.setData({
      bgAc: innerAudioContext
    })

    var that = this;
    let firstSight = 1601517600
    let now = parseInt(new Date().getTime() / 1000)
    let through = now - firstSight
    let d = parseInt(through / (3600 * 24))
    this.setData({
      timer2: `${d}天`
    })

    function forever() {
      let now = parseInt(new Date().getTime() / 1000)
      let through = now - firstSight
      let y = parseInt(through / 31536000)
      let m = parseInt((through % 31536000) / 2678400)
      let d = parseInt((through % 31536000) % 2678400 / 86400)
      let h = parseInt((through % 31536000) % 2678400 % 86400 / 3600)
      let mm = parseInt((through % 31536000) % 2678400 % 86400 % 3600 / 60)
      let s = parseInt((through % 31536000) % 2678400 % 86400 % 3600 % 60)
      that.setData({
        timer1: `${y}年${m}月${d}天${h}时${mm}分${s}秒`
      })
      setTimeout(forever, 1000)
    }
    forever()
  }
})
