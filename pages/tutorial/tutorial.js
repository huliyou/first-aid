Page({
  data: {
    selectedTab: 0,
    emergencyTitle: '应急，事不容迟。',
    studayTitle: '学习，未雨绸缪。',
    emergencyList: [

    ],
    studayList: [

    ],
  },
  bindSelectedTab(e) {
    this.setData({
      selectedTab: Number(e.target.dataset.tab),
    });
  },
  tap(e) {
    if (e.target.dataset.title === '意识丧失'){
      wx.navigateTo({
        url: '../unconsciousness/unconsciousness',
      });
    }
    if (e.target.dataset.title === '烧烫伤' && e.target.dataset.type === '应急'){
      wx.navigateTo({
        url: '../burning/burning',
      });
    }
  },
  change(e) {
    this.setData({
      selectedTab: Number(e.detail.current),
    });
  },
});
