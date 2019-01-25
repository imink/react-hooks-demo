const list = (req, res) => {
  const result = {
    data: 'this is mock',
    success: true,
  }
  setTimeout(() => {
    res.json(result)
  }, 3000);
}

const sampleList = (req, res) => {
  const result = {
    data: [
      {
        title: '红包码纯二维码',
        img: 'https://gw.alipayobjects.com/os/f/cms/images/jegw25w6/4b556d08-9d38-4b8d-abee-cb0d1855da01_w512_h512.jpeg',
      },
      {
        title: '红包合成图A4',
        img: 'https://gw.alipayobjects.com/os/f/cms/images/jefvttgt/5019b731-d634-41ae-97e8-31a95c488b79_w596_h843.png'
      },
      {
        title: '红包合成图A5',
        img: 'https://gw.alipayobjects.com/os/f/cms/images/jefvua73/cc82777a-e791-43b7-92d2-1c91b234f114_w421_h596.png'
      },
    ],
    success: true,
  }
  setTimeout(() => {
    res.json(result)
  }, 1000);
}
module.exports = {
  'GET /list': list,
  'GET /sampleList': sampleList,
}