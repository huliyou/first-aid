Page({
  data: {
    selectedTab: 0,
    emergencyTitle: '应急，事不容迟。',
    studyTitle: '学习，未雨绸缪。',
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
    if (e.target.dataset.title === '意识丧失' && e.target.dataset.type === '应急'){
      wx.navigateTo({
        url: '../isBreath/isBreath',
      });
    } else if (e.target.dataset.title === '烧烫伤' && e.target.dataset.type === '应急'){
      wx.navigateTo({
        url: '../burning/burning',
      });
    } else if (e.target.dataset.title === '肌肉痉挛' && e.target.dataset.type === '应急'){
      wx.navigateTo({
        url: '../cramp/cramp',
      });
    } else if (e.target.dataset.title === '脑中风' && e.target.dataset.type === '应急'){
      wx.navigateTo({
        url: '../cerebralApoplexy/cerebralApoplexy',
      });
    } else if (e.target.dataset.title === 'AMI' && e.target.dataset.type === '应急'){
      wx.navigateTo({
        url: '../AMI/AMI',
      });
    } else if (e.target.dataset.title === '意识丧失' && e.target.dataset.type === '学习'){
      wx.navigateTo({
        url: '../unconsciousnessStudy/unconsciousnessStudy',
      });
    } else if (e.target.dataset.title === '脑中风' && e.target.dataset.type === '学习'){
      wx.navigateTo({
        url: '../cerebralApoplexyStudy/cerebralApoplexyStudy',
      });
    } else if (e.target.dataset.title === '肌肉痉挛' && e.target.dataset.type === '学习'){
      wx.navigateTo({
        url: '../crampStudy/crampStudy',
      });
    } else if (e.target.dataset.title === 'AMI' && e.target.dataset.type === '学习'){
      wx.navigateTo({
        url: '../AMIStudy/AMIStudy',
      });
    }

  },
  change(e) {
    this.setData({
      selectedTab: Number(e.detail.current),
    });
  },
});
