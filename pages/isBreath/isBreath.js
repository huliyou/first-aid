Page({
  data: {
    showModal: false,
  },
  confirm: function(e) {
    this.setData({
      showModal: false,
    });
  },
  showModal: function(e) {
    this.setData({
      showModal: true,
    });
  },
  tap: function(e) {
    if (e.target.dataset.breathe === true) {
      wx.navigateTo({
        url: '../breathe/breathe'
      });
    } else if (e.target.dataset.breathe === false) {
      wx.navigateTo({
        url: '../noBreath/noBreath'
      })
    }
  },
});
