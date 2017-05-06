Page({
  tap: function(e) {
    console.log(e);
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
