/**
 * Create by Deshun
 * E-mail: contact@w3h5.com
 * Description:
 * Date: 2021-04-26 上午 10:34:03
 */
export function myCard() {
  const cardInfo = {
    nickName: 'Sun', // 昵称
    lastName: '张', // 姓
    firstName: '三', // 名
    age: '2000', // 年龄
    sex: '男', // 性别
    tel: '13800138000', // 手机
    weChat: 'adeshun', // 微信
    webSite: 'https://www.w3h5.com', // 网站
    workingYears: '8', // 工作年限
    salary: '18-28K', // 工作年限
    address: '北京市朝阳区', // 地址
    school: '北京大学', // 学校
    mail: 'job@w3h5.com', // 邮箱
    position: '前端开发工程师', // 职位
    dreamPosition: '高级前端开发工程师', // 期望职位
    companyName: '浪潮信息', // 公司名称
    qrcode: require('@/static/images/img-wx-qrcode.png'), // 二维码
    bgImg: require('@/static/images/card-bg.png') // 背景
  }
  return cardInfo
}
