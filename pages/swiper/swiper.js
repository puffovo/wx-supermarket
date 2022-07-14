
Page({
  data: {
    swiperList:[
      {
        id:0,
        img: '/img/广告轮播/webp1.jpg'
      },
      {
        id:1,
        img:'/img/广告轮播/webp2.jpg'
      },
      {
        id:2,
        img:'/img/广告轮播/webp3.jpg'
      },
      {
        id:3,
        img:'/img/广告轮播/webp4.jpg'
      },
      {
        id:4,
        img:'/img/广告轮播/webp5.jpg'
      },
    ]
   
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
   
  },
})
