export const request = (params) => {
  return new Promise((resolve, reject) => {
    wx: wx.request({
      ...params,
      success: (result) => {
        resolve(result.data);
      },
      fail: (err) => {
        reject(err);
      },

    });
  })
}