const app = getApp()

// pages/homestay/homestay.js
Page({
  data: {
    startDate: '7-21',
    endDate: '7-31',
    screenType: 2,
    screenList:[
      '推荐排序',
      '价格区间',
      '筛选'
    ],
    recommend:[
      '推荐排序',
      '好评优先',
      '高价优先',
      '低价优先',
    ],
    tagList:[
      '今日特价',
      '暑假特惠',
      '今日特价',
      '今日特价',
      '今日特价',
      '今日特价',
      '今日特价',
    ],
    swiperList:[
      '',
      '',
      '',
      '',
    ],
    star: 4.8,
    apartmentList:[
      '1室',
      '2室',
      '3室',
      '4室',
      '5室',
      '6室',
      '7室',
      '8室',
    ],
    apartment: '',
    peopleNum:[
      '1~2人',
      '1~2人',
      '1~2人',
      '1~2人',
      '1~2人',
    ],
    rentalType:[
      {
        type:'整套出租',
        value: '独享整个房源'
      },
      {
        type: '独立房间',
        value: '有自己的独立空间，分享一些公共空间'
      },
      {
        type: '合住房间',
        value: '分享整个入住空间，如青旅床位房'
      },
    ],
    serviceList:[
      {
        imgUrl:'../../images/icon_cook.png',
        val:'允许做饭',
        activeImgUrl:'../../images/icon_cook_active.png'
      },
      {
        imgUrl: '../../images/icon_wifi.png',
        val: '无线网络',
        activeImgUrl: '../../images/icon_wifi_active.png'
      },
      {
        imgUrl: '../../images/icon_air-conditioner.png',
        val: '空调',
        activeImgUrl: '../../images/icon_air-conditioner_active.png'
      },
      {
        imgUrl: '../../images/icon_bathtub.png',
        val: '浴缸',
        activeImgUrl: ''
      }
    ],
    bodyList:['','',''],
    designStyle:[
      '网红ins风',
      '中式风',
      '日式风',
      '工业风',
      '北欧风',
      '小清新风'
    ],
    service:[]
  },
  setCondition(e) {
   
    let idx = e.currentTarget.dataset.idx;

    if (idx === this.data.screenType){
      this.setData({
        screenType: '',
      })
      return;
    }
    
    this.setData({
      screenType: idx,
    })
  },
  onClick_offScreen(){
    this.setData({
      screenType: ''
    })
  },
  onClick_setApartment(e){
    console.log(e.currentTarget);
  },
  onClick_setService(e){
    let id = e.currentTarget.id;
    console.log(id, this.data.service);
    
    if (this.data.service.indexOf(id) !== -1){
      this.data.service.splice(this.data.service.indexOf(id));
    }else{
      this.data.service.push(id);
    }
  },
  onClick_reset(){
    //清空所有缓存选择
    this.data.service = [];
  },
  onClick_confrim() {
    //提交筛选条件
    let params = {

    };

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

})