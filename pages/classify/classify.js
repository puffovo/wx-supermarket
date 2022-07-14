// pages/classify/classify.js
Page({


  data: {
    //var classify = []
    classifyList: [{
        title: '新鲜水果',
        list: [{
            name: '百香果',
            img:'/img/分类/img_bxg.png'
          },
          {
            name: '火龙果',
            img:'/img/分类/img_hlg.png'

          },
          {
            name: '榴莲',
            img:'/img/分类/img_ll.png'

          },
          {
            name: '蓝莓',
            img:'/img/分类/img_lm.png'
          },
          {
            name: '芒果',
            img:'/img/分类/img_mang.png'
          },
          {
            name: '苹果',
            img:'/img/分类/img_pg.png'
          },
          {
            name: '青梅',
            img:'/img/分类/img_qm.png'
          },
          {
            name: '青柠檬',
            img:'/img/分类/img_qnm.png'
          },
          {
            name: '水蜜桃',
            img:'/img/分类/img_smt.png'
          },
          {
            name: '甜橙',
            img:'/img/分类/img_tc.png'
          },
          {
            name: '香蕉',
            img:'/img/分类/img_xj.png'
          },
          {
            name: '木瓜',
            img:'/img/分类/img_mg.png'
          }
        ]
      },
      {
        title: '新鲜蔬菜',
        list: [{
            name: '西红柿',
            img:'/img/分类/img_xhs.jpg'
          },
          {
            name: '土豆',
            img:'/img/分类/img_td.jpg'
          },
          {
            name: '莲藕',
            img:'/img/分类/img_LO.png'
          },
          {
            name: '玉米',
            img:'/img/分类/img_YM.jpg'
          },

        ]
      },
      {
        title: '肉类',
        list: [{
            name: '猪肉',
            img:'/img/分类/img_ZR.jpg'
          },
          {
            name: '牛肉',
            img:'/img/分类/img_NR.jpg'
          },
          {
            name: '羊肉',
            img:'/img/分类/img_YR.png'
          },
          {
            name: '鸡肉',
            img:'/img/分类/img_JR.jpg'
          }
        ]
      },
      {
        title: '蛋类',
        list:[
          {
            name:'鸡蛋',
            img:'/img/分类/img_jd.jpg'
          },
          {
            name:'鸭蛋',
            img:'/img/分类/img_yd.jpg'
          }
        ]
  
      },
      {
        title: '海鲜水产',
        list:[{
          name:'龙虾',
          img:'/img/分类/img_lx.jpg'
        }]
      },
      {
        title: '冰淇淋',
        list: [{
          name: '香草冰淇淋',
          img:'/img/分类/img_xcbql.jpg'
        }
      ]
      
      },
      {
        title: '精选干货'
      },
    ],

    currMenuIndex: 0
  },

  /* 点击左边的menu菜单让事件更新 */
  menuChange(e) {
    // 点击之后把当前点击的index保存下来，保存在 currMenuIndex
    //index
    console.log('e', e.currentTarget.dataset)
    let index = e.currentTarget.dataset.index
  
    // 把传进来的index的值保存在data里的currMenuIndex
    this.setData({
      currMenuIndex: index
    })  
    // 获取data里面的变量
    console.log('currMenuIndex', this.data.currMenuIndex)
  },


  /**
   * 组件的方法列表
   */
  methods: {

  }
})