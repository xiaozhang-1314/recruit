import GeneralTopBar from "../../../../components/GeneralTopBar";
import GeneralFooter from "../../../../components/GeneralFooter";
import JobMenu from "../../widgets/JobMenu";
// import $ from "jquery";

const components = {
    GeneralTopBar,
    GeneralFooter,
    JobMenu
}

const created = function() {
    this.initData();
}

const mounted = function () {
    this.jobMenuHover();
    this.marginTop();
}

const data = function () {
    return {
        searchKey: "",
        hotWords: ["游戏策划","产品经理","PHP","前端工程师","java","测试","后端开发","运营","销售","人力资源"],
        jobMenu: [
            {
                title: "技术", keys: ["Java","PHP","web前端","安卓"],
                subMenu: [
                    {
                        title: "后端开发", keys: ["Java","PHP","C#","C++","Python",".NET","Delphi","VB","Ruby","Node.js","语音/视频/图形开发","全栈工程师","GIS工程师"],
                    },
                    {
                        title: "移动开发", keys: ["HTML5","Android","IOS","移动web前端","U3D"],
                    },
                    {
                        title: "测试", keys: ["测试工程师","游戏测试","移动端测试","功能测试","自动化测试"],
                    },
                    {
                        title: "其他技术职位", keys: ["其他技术职位"]
                    }
                ],
            },
            {
                title: "产品", keys: ["产品经理","产品总监/VP","产品助理"],
                subMenu: [
                    {
                        title: "产品经理", keys: ["产品经理","产品总监/VP","产品助理","游戏策划"],
                    },
                    {
                        title: "其他产品职位", keys: ["其他产品职位"]
                    }
                ],
            },
            {
                title: "设计", keys: ["UI设计师","平面设计","交互设计师"],
                subMenu: [
                    {
                        title: "视觉/交互设计", keys: ["视觉设计师","网页设计师","UI设计师","APP设计师","平面设计","广告设计","原画师","美工","CAD设计/制图","插画师","漫画师","交互设计师"],
                    },
                    {
                        title: "游戏设计",keys: ["游戏特效","游戏界面设计师","游戏角色","游戏动作"]
                    },
                    {
                        title: "其他设计职位", keys: ["其他设计职位"]
                    }
                ],
            },
            {
                title: "运营", keys: ["新媒体运营","产品运营","网络推广"],
                subMenu: [
                    {
                        title: "运营", keys: ["用户运营","产品运营","内容运营","活动运营","商家运营","品类运营","游戏运营","网站运营","新媒体运营","运营助理/专员","内容审核","直播运营"],
                    },
                    {
                        title: "编辑",keys: ["编辑","主编/副主编","文案编辑","网站编辑","采编"]
                    },
                    {
                        title: "高端运营职位",keys: ["高端运营职位","运营总监","客服总监","运营经理/主管"]
                    },
                    {
                        title: "其他运营职位", keys: ["其他运营职位"]
                    }
                ],
            },
            {
                title: "市场", keys: ["市场营销","市场推广","品牌公关","策划经理"],
                subMenu: [
                    {
                        title: "市场/营销", keys: ["网络推广","市场营销","市场策划","市场顾问","市场推广","SEO","SEM","商务渠道","商业数据分析","活动策划","网络营销","APP推广","游戏推广"],
                    },
                    {
                        title: "公关媒介",keys: ["公关媒介","媒介经理","品牌公关","媒介专员","活动策划执行"]
                    },
                    {
                        title: "会务会展",keys: ["会务会展","会议活动策划","会议活动执行","会展活动策划","会展活动执行"]
                    },
                    {
                        title: "广告",keys: ["广告","广告创意设计","美术指导","广告设计","策划经理","广告文案","广告制作","媒介投放","媒介合作","广告审核"]
                    },
                    {
                        title: "高端市场职位",keys: ["会务会展","会议活动策划","会议活动执行","会展活动策划","会展活动执行"]
                    },
                    {
                        title: "其他市场职位", keys: ["其他市场职位"]
                    }
                ],
            },
            {
                title: "人事/财务/行政", keys: ["人力资源专员/助理","行政主管"],
                subMenu: [
                    {
                        title: "人力资源", keys: ["招聘","HRBP","人力资源专员/助理","培训","人力资源总监"],
                    },
                    {
                        title: "行政", keys: ["行政资源专员/助理","前台","经理助理","后勤","行政经理/主管","行政总监"],
                    },
                    {
                        title: "财务", keys: ["财务","会计","出纳","财务顾问","结算会计","税务","审计","财务经理/主管","财务总监/VP"],
                    },
                    {
                        title: "其他职能职位", keys: ["其他职能职位"]
                    }
                ],
            },
            {
                title: "采购/贸易", keys: ["采购经理","采购主管","进出口贸易"],
                subMenu: [
                    {
                        title: "采购", keys: ["采购","商品经理","供应商质量工程师","采购总监","采购经理/主管","采购专员/助理","买手"],
                    },
                    {
                        title: "其他采购职位", keys: ["其他采购职位"]
                    }
                ],
            },
            {
                title: "销售", keys: ["销售专员","销售经理","销售工程师"],
                subMenu: [
                    {
                        title: "销售行政/商务", keys: ["商务专员","商务经理","销售助理","商务总监","销售运营"],
                    },
                    {
                        title: "房地产销售/招商", keys: ["置业顾问","地产中介","房地产销售/招商","物业招商管理","房地产销售总监"],
                    },
                    {
                        title: "服务业销售", keys: ["服装销售","彩妆顾问","美容顾问","珠宝销售","旅游顾问","瘦身顾问"],
                    },
                    {
                        title: "汽车销售", keys: ["汽车销售","汽车配件销售"],
                    },
                    {
                        title: "广告/会展销售", keys: ["广告销售","会议活动销售","会展活动销售","媒介顾问"],
                    },
                    {
                        title: "金融销售", keys: ["证券经纪人","信用卡销售","保险顾问","理财顾问"],
                    },
                    {
                        title: "外贸销售", keys: ["外贸经理","外贸业务员"],
                    },
                    {
                        title: "销售", keys: ["销售","销售专员","客户代表","大客户代表","BD经理","渠道销售","代理商销售","电话销售","销售顾问","网络销售","销售工程师","客户经理"],
                    },
                    {
                        title: "其他销售职位", keys: ["其他销售职位"]
                    }
                ],
            }
        ],
        moreJobMenu: [
            {
                title: "金融", keys: ["投资经理","投资总监","风控","证券/基金/期货"],
                subMenu: [
                    {
                        title: "证券/基金/期货", keys: ["买方分析师","股票/期货操盘手","基金经理","证券交易员"],
                    },
                    {
                        title: "投融资", keys: ["投融资","投资经理","资产管理","投资总监","投资合伙人","投资VP","融资","投资顾问"],
                    },
                    {
                        title: "银行", keys: ["银行","分析师","柜员","大堂经理","客户经理","信贷管理"],
                    },
                    {
                        title: "保险", keys: ["保险精算师","保险理赔"],
                    },
                    {
                        title: "中后台", keys: ["风控","法务","资信评估","合规稽查","清算"],
                    },
                    {
                        title: "互联网金融", keys: ["互联网金融","金融产品经理","催收员","分析师","清算"],
                    },
                    {
                        title: "其他金融职位", keys: ["其他金融职位"]
                    }
                ],
            },
            {
                title: "医疗健康", keys: ["药剂师","医生","营养师/健康管理师"],
                subMenu: [
                    {
                        title: "临床试验", keys: ["临床研究","临床数据分析","临床项目经理","医学总监"],
                    },
                    {
                        title: "医生/医技", keys: ["医生","幼儿园保健医","医学影像/放射科医师","内科医生","全科医生","中医","心理医生","药剂师","口腔科医生","康复治疗师","验光师","超声科医生","检验科医师"]
                    },
                    {
                        title: "护士/护理", keys: ["护士长","护士","导医"]
                    },
                    {
                        title: "健康整形", keys: ["健康整形","营养师/健康管理师","整形师","理疗师","针灸推拿"]
                    },
                    {
                        title: "医疗器械", keys: ["医疗器械注册","医疗器械生产/质量管理","医疗器械研发"],
                    },
                    {
                        title: "药店", keys: ["药店店长","执业药师/驻店医师","药店店员"]
                    },
                    {
                        title: "其他医疗健康职位", keys: ["其他医疗健康职位"]
                    }
                ],
            },
            {
                title: "教育培训", keys: ["课程设计","教务管理","IT培训"],
                subMenu: [
                    {
                        title: "教育产品研发", keys: ["教育产品研发","课程设计","课程编辑","培训师","培训策划"]
                    },
                    {
                        title: "教育行政", keys: ["教育行政","校长/副校长","教务管理","教学管理","班主任/辅导员"]
                    },
                    {
                        title: "教师", keys: ["教师","日语教师","语文教师","数学教师","英语教师","化学教师","家教","生物教师","托管老师","早教老师","助教","高中教师","初中教师","小学教师","幼教","理科教师","文科教师","音乐教室","美术教师","体育教师"]
                    },
                    {
                        title: "IT培训", keys: ["IT培训","JAVA培训师","Android培训师","IOS培训师","PHP培训师",".NET培训师","C++培训师","Unity 3D培训讲师","Web前端培训讲师","软件测试培训讲师","动漫培训讲师","UI设计培训讲师"]
                    },
                    {
                        title: "特长培训", keys: ["教练","武术教练","轮滑教练","表演教师","书法教师","吉他教师","古筝教师","乐高教师","播音主持教师","舞蹈教师","游泳教师","健身教练","瑜伽老师","钢琴老师","篮球/羽毛球教练","跆拳道教练","空手道教练"]
                    },
                    {
                        title: "其他教育培训职位", keys: ["其他教育培训职位"]
                    }
                ],
            },
            {
                title: "供应链/物流", keys: ["物流专员","贸易跟单","供应链经理"],
                subMenu: [
                    {
                        title: "物流", keys: ["物流","供应链专员","供应链经理","集装箱管理","物流专员","物流经理","物流运营","物流跟单","调度员","物流/仓储项目经理","货运代理专员","货运代理经理","水/空/陆运操作","核销员"]
                    },
                    {
                        title: "仓储", keys: ["仓储","仓库经理","仓库管理员","仓库文员","配/理/拣/发货"]
                    },
                    {
                        title: "交通/运输", keys: ["交通/运输","商务司机","网约车司机","代驾司机","驾校教练","货运司机","配送员","快递员","运输经理/主管"]
                    },
                    {
                        title: "高端供应链职位", keys: ["供应链总监","物流总监"]
                    },
                    {
                        title: "其他供应链职位", keys: ["其他供应链职位"]
                    }
                ]
            }
        ],
        bannerImg: [
            {
                href: "", url: require("@/image/banner/banner1.jpg")
            },
            {
                href: "", url: require("@/image/banner/banner2.jpg")
            },
            {
                href: "", url: require("@/image/banner/banner3.jpg")
            },
            {
                href: "", url: require("@/image/banner/banner4.jpg")
            },
            {
                href: "", url: require("@/image/banner/banner5.jpg")
            },
        ],
        hotJob: [],
        hotCompany: []
        /*hotJob: [
            {
                name: "前端工程师", experience: "1年以内", qualification: "本科",salary: "10-15K",
                tag: ["JavaScript","Vue","React"], companyIcon: require("@/image/company/xunlei.jpg"),
                companyName: "迅雷网络", companyTag: "移动互联网", companySize: "1000-5000人", address: "深圳·南山"
            },
            {
                name: "Web前端开发工程师", experience: "1年-3年", qualification: "本科",salary: "10-20K·13薪",
                tag: ["电商平台","旅游 | 出行","Web前端"], companyIcon: require("@/image/company/kelu.jpg"),
                companyName: "KLOOK 客路旅行", companyTag: "旅游，出行", companySize: "50-100人", address: "深圳·福田"
            },
            {
                name: "前端开发工程师", experience: "经验不限", qualification: "不限",salary: "12-20K",
                tag: ["医疗 | 保健 | 美容","数据服务 | 咨询","JavaScript"], companyIcon: require("@/image/company/wegene.jpg"),
                companyName: "微基因 WeGene", companyTag: "移动互联网，医疗", companySize: "50-150人", address: "深圳·车公庙"
            },
            {
                name: "前端开发工程师", experience: "3年以上", qualification: "本科及以上",salary: "15-25K·14薪",
                tag: ["物联网","智能硬件","Html5"], companyIcon: require("@/image/company/guiqikeji.jpg"),
                companyName: "瑰琦科技", companyTag: "移动互联网，硬件", companySize: "50人以下", address: "深圳·南山"
            },
            {
                name: "Web前端开发工程师", experience: "1年及以上", qualification: "大专及以上",salary: "5-10K",
                tag: ["社交媒体","社交平台","web前端开发"], companyIcon: require("@/image/company/yunmai.jpg"),
                companyName: "云麦网络", companyTag: "MCN | 直播平台", companySize: "15-50人", address: "深圳·南山"
            },
            {
                name: "前端开发工程师", experience: "经验不限", qualification: "本科及以上",salary: "25-40K·15K",
                tag: ["移动端","小程序","web前端"], companyIcon: require("@/image/company/zijie.jpg"),
                companyName: "字节跳动", companyTag: "人工智能 | IM通讯", companySize: "5000人以上", address: "深圳·南山"
            },
            {
                name: "前端开发工程师", experience: "经验不限", qualification: "不限",salary: "13-26K",
                tag: ["软件服务 | 咨询","IT技术服务 | 咨询","React"], companyIcon: require("@/image/company/keruier.jpg"),
                companyName: "科瑞尔人力资源服务", companyTag: "企业服务", companySize: "2000人以上", address: "深圳·南山"
            },
            {
                name: "前端开发工程师", experience: "2年以上", qualification: "不限",salary: "12-24K·14薪",
                tag: ["TypeScript","Angular","SAAS"], companyIcon: require("@/image/company/siwei.jpg"),
                companyName: "思维巡航", companyTag: "软件服务", companySize: "15-50人", address: "深圳·南山"
            },
            {
                name: "中高级前端开发工程师", experience: "经验不限", qualification: "本科",salary: "8-15K",
                tag: ["JavaScript","React","TypeScript"], companyIcon: require("@/image/company/meituan.jpg"),
                companyName: "美团", companyTag: "消费生活", companySize: "2000人以上", address: "深圳·南山"
            },
        ],*/
        /*hotCompany: [
            {
                icon: require("@/image/company/youxikexue.jpg"), name: "游戏科学", tag: "游戏开发", size: "50-150人",
                description: "做全球领先的重度游戏开发商", userComment: 35, recruit: 21, activity: 100
            },
            {
                icon: require("@/image/company/weixuedianzi.jpg"), name: "微雪电子", tag: "电商平台", size: "50-150人",
                description: "我们实行合伙人制度，我们像是一个家", userComment: 4, recruit: 3, activity: 100
            },
            {
                icon: require("@/image/company/jieshun.jpg"), name: "捷顺科技股份", tag: "生活服务，智能硬件", size: "2000人以上",
                description: "上市公司、技术大牛、股权激励、食堂宿舍", userComment: 23, recruit: 44, activity: 86
            },
            {
                icon: require("@/image/company/guojiang.jpg"), name: "果酱时代", tag: "MCN | 直播平台", size: "50-150人",
                description: "专注产品，专注社交", userComment: 135, recruit: 6, activity: 86
            },
            {
                icon: require("@/image/company/youka.jpg"), name: "有咖互动", tag: "社交平台", size: "150-500人",
                description: "国内知名声音互动平台", userComment: 7, recruit: 31, activity: 100
            },
            {
                icon: require("@/image/company/xunlei.jpg"), name: "迅雷网络", tag: "工具类产品", size: "500-2000人",
                description: "基于共享经济的互联网云计算平台", userComment: 40, recruit: 142, activity: 100
            },
            {
                icon: require("@/image/company/shurui.jpg"), name: "数睿科技", tag: "生活服务 ", size: "150-500人",
                description: "上市公司，打造以「食 衣 住 行 育 」为发展蓝图的网络服务", userComment: 298, recruit: 30, activity: 100
            },
            {
                icon: require("@/image/company/benniao.jpg"), name: "笨鸟软件", tag: "数据服务,其他 ", size: "15-50人",
                description: "主攻国外市场，现产品约有300万活跃用户", userComment: 5, recruit: 3, activity: 100
            }
        ]*/
    };
}

const methods = {
    initData() {
        let getHotJob = async () => {
            const res = await this.$axios.request({
                url: "/job/list",
                method: "get"
            });
            console.log(res);
            if(res.msg === 'success'){
                res.data.forEach(item => {
                    item.companyIcon = require("@/image/company/" + item.companyIcon);
                    item.tag = item.tag.split(",");
                });
                this.hotJob = Object.assign([], this.hotJob, res.data);
            }
        };
        let getHotCompany = async () => {
            const res = await this.$axios.request({
                url: "/company/list",
                method: "get"
            });
            console.log(res);
            if(res.msg === 'success'){
                res.data.forEach(item => {
                    item.icon = require("@/image/company/" + item.icon);
                });
                this.hotCompany = Object.assign([], this.hotCompany, res.data);
            }
        };
        this.$axios.all([getHotJob(), getHotCompany()])
            .then(value => value);
    },
    // 侧栏 更多职位隐藏菜单 --- 悬浮效果
    jobMenuHover() {
        const homeSider = this.$refs.homeSider;
        const showMore = this.$refs.showMore;
        const moreJobMenu = this.$refs.moreJobMenu;
        const self = this;
        homeSider.onmouseenter = function(){
            showMore.onmouseenter = function () {
                showMore.style.display = "none";
                moreJobMenu.style.display = "block";
                self.marginTop();
            }
        }
        homeSider.onmouseleave = function(){
            showMore.style.display = "block";
            moreJobMenu.style.display = "none";
        }
    },
    // 侧栏 职位菜单计算二级详情菜单布局定位位置
    marginTop() {
        const subJobMenu = document.querySelectorAll(".home-sider .sub-job-menu");
        const subHeight = [];
        subJobMenu.forEach(item => {
            // jq返回内容高度
            const innerHeight = this.$(item).innerHeight();
            subHeight.push(innerHeight);
        });
        const dls = document.querySelectorAll(".home-sider dl");
        dls.forEach((item,index) => {
            // 返回元素视口相关数据
            const elemViewInfo = item.getBoundingClientRect();
            // 与父级顶部距离
            const offsetTop = Math.floor(elemViewInfo.y) - 183;
            // 如果 顶部距离 > 二级菜单内容高度 , 给予二级菜单的marginTop( 一级菜单 垂直居中 二级菜单 ）
            if(offsetTop > subHeight[index] / 2){
                const marginTop = offsetTop - subHeight[index] / 2 + elemViewInfo.height / 2;
                subJobMenu[index].style.marginTop = marginTop + "px";
            }
        });
    },
}
export default {
    name: "Home",
    components: components,
    created: created,
    mounted: mounted,
    data: data,
    methods: methods
}