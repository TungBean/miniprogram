// pages/index/index.js
import {Config} from '../../utils/config.js';
//处理html标签
var t = require('../../utils/delTag.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      icon:"loading"
    })
    let month = Config.month, 
    date = Config.date
    wx.setNavigationBarTitle({
      title: '历史上的今天'+date,
    })
    let url = Config.url + month +'.json?_=' + Config.timestamp
    wx.request({
      url: url,
      success:(res)=>{
        console.log(month,date)
        let d = res.data[month][date];
        console.log(d)
        d.forEach(function(v,k){
          v.title = t.delTag(v.title)
          v.desc = t.delTag(v.desc)
        })
        this.setData({
          data: d,
          date:Config.date
        })
        wx.hideLoading()
        console.log(d)
      }
    })
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})