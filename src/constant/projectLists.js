/**
 * 字段
  id: 1, // 唯一id
  name: "", // 项目名字
  discription: "", // 项目描述
  content: ``, // 项目职责
  summary: "", // 总结
  startTime: "", // 项目开始日期
  endTime: "", // 项目结束日期
  images: [], // 项目相关介绍图片
 */

const PROJECT_LISTS = [
  {
    id: 1,
    name: "鲜活Go-后台管理系统",
    discription:
      "为鲜活go订奶前端app，公众号，小程序提供日常运营维护，管理工作，以及为各分子公司提供服务。",
    content: `1.参与订单(包括配送和结算)，征订，运营，奶站围栏映射模块需求讨论和需求评审;<br/>
    2.使用Vue.js,Nuxt.js搭建,使用ElementUI构建用户界面并集成Echarts和高德地图组件功能;
    3.对需要UI的页面，对接UI工程师完成设计要求;<br/>
    4.对接后端开发进行API联调工作，并自测通过提测;<br/>
    5.及时对测试工程师提出的bug和优化做修改;<br/>`,
    summary: `由于管理后台系统大部分是统一的所以对ElementUI进行了再封装（包括表格，表单，上传等）;
      优化体验列表跳转详情页，列表状态缓存，使之可以再返回时保留之前的列表操作;封装高德组件，项目开发使用更加方便。`,
    startTime: "",
    endTime: "",
    images: [],
  },
  {
    id: 2,
    name: "鲜活Go-微信公众号",
    discription: "",
    content: ``,
    summary: ``,
    startTime: "",
    endTime: "",
    images: [],
  },
  {
    id: 3,
    name: "有信展业-管理系统",
    discription: "",
    content: ``,
    summary: "",
    startTime: "",
    endTime: "",
    images: [],
  },
  {
    id: 4,
    name: "有信查询-微信公众号",
    discription:
      "公司从事P2P平台服务,急需信贷前置风控为公司有信钱包信贷平台提供前置风控服务，对接各方提供的逾期查询，黑名单查询实现多功能查询，提高信贷匹配度满足各端用户需求。",
    content: `1.参与项目的整体讨论，需求评审和前端设计;<br/>
      2.独立完成公众号开发和周迭代工作;<br/>
      3.使用Vue及其全家桶进行开发并进一步封装;<br/>
      4.对接UI设计，完成UI要求;<br/>
      5.对接测试，自测问题及修复，避免线上功能异常;`,
    summary:
      "使用Chrome性能调试工具分析页面加载速度，优化页面响应速度，减小Vue-cli打包大小，使首页加载在1s以内。",
    startTime: "2020-01-01",
    endTime: "2020-01-02",
    images: [],
  },
  {
    id: 5,
    name: "嘿呗APP(Hybrid App)-消费产生价值",
    discription:
      "建设S2B2C生态系统，为品牌供应商提供市场渠道，为商户提供一体化会员方案，为消费者提供消费服务和增值体验。",
    content: ``,
    summary: "",
    startTime: "",
    endTime: "",
    images: [],
  },
  {
    id: 6,
    name: "华医国际-在线医疗问诊平台",
    discription: `在线问诊，智能诊断，预约各大医院医生就诊的综合性平台，项目分为医生，医助，用户端三端。`,
    content: `1.使用Vue.js搭建项目;<br/>
     2.独立完成三端PC平台的API对接，集成Echart图表库，对接第三方平台IM，智能问诊平台的对接并封装;<br/>
     3.远程对接UI工程师，并按照UI要求实现UI设计;<br/>
     4.及时处理测试和用户反馈问题，按时保质保量的完成;`,
    summary: `该项目开发人员几经更换，最后通过我加入项目负责PC开发，保质保量的完成了项目并交付，
    通过华医项目，增强了自身的沟通能力和协调能力，对第三方开放平台的理解能力加深。
    对IM设计思想有了更深入的了解，帮助其他同事解决IM相关问题，帮助同事排查解决了网站运行时内存泄露问题。`,
    startTime: "",
    endTime: "",
    images: [],
  },
];

export default PROJECT_LISTS;
