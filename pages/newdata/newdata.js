// pages/newdata/newdata.js
var util = require('../../utils/util.js');

// 获取当前时间
var current_data = util.formatData(new Date());

//格式化时间输出
const formatNumber = n => {
    n = n.toString();
    return n[1] ? n : '0' + n
};

// 获取近三十天的时间列表
function getTimeDataList() {
    var data_list = [];
    var date = new Date();    // 获取当前时间日期
    var year = date.getFullYear();
    var month = date.getMonth() + 1;  // 获取月份
    // console.log(month);
    for (var i = 0; i < 30; i++) {
        var day = date.getDate() + i;
        // 暂时不考虑闰年 二月当28天处理
        if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
            month++;
            day -= 30;
            data_list.push([year, month, day].map(formatNumber).join('-'));
            month--;
        } else if (month === 2 && day > 28) {
            month++;
            day -= 28;
            data_list.push([year, month, day].map(formatNumber).join('-'));
            month--;
        } else if ((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && day > 31) {
            if (day > 31) {
                month++;
                day -= 31;
                data_list.push([year, month, day].map(formatNumber).join('-'));
                month--;
            }
        } else {
            data_list.push([year, month, day].map(formatNumber).join('-'))
        }

    }
    return data_list
}

// 提前将变量声明方便后面使用
var month_days_list = getTimeDataList();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        place_holder: 'YOUR PLAN',
        chooise: ['日', '周', '月', '年'],
        chooise_other: month_days_list,
        value: 'qwe'
    },


    bindChange: function (e) {
        const val = e.detail.value;
        if (this.data.chooise[val[0]] === "周") {
            this.setData({
                chooise_other: ["本周", '下周']
            })
        } else if (this.data.chooise[val[0]] === "月") {
            this.setData({
                chooise_other: ["本月", '下月', '每月']
            })
        } else if (this.data.chooise[val[0]] === "日") {
            this.setData({
                chooise_other: month_days_list
            })
        } else if (this.data.chooise[val[0]] === "年") {
            this.setData({
                chooise_other: ["今年", '每年']
            })
        }
    },

    submit:function(e){
        console.log(e.detail);
        console.log(this.data.chooise[0])
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