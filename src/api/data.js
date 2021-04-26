/**
 * Create by Deshun
 * E-mail: contact@w3h5.com
 * Description:
 * Date: 2021-04-26 上午 10:34:03
 */
export function myCard() {
  const cardInfo = {
    name: 'Deshun',
    age: '1994',
    sex: '男',
    tel: '13800138000',
    weChat: 'adeshun',
    webSite: 'https://www.w3h5.com',
    workingYears: '4',
    school: '北京大学',
    mail: 'job@w3h5.com',
    position: '前端开发工程师',
    dreamPosition: '高级前端开发工程师',
    companyName: '人力资本研究院',
    qrcode: require('@/static/images/img-wx-qrcode.png'),
    bgImg: require('@/static/images/card-bg.png'),
    address: '北京市-朝阳区'
  }
  return cardInfo
}
