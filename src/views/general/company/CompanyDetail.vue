<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <GeneralTopBar :showPosition="false"/>
    <main>
      <div class="company-header">
        <div class="company-box margin-20per">
          <div class="company-wrapper">
            <img :src="!company.company_logo ? require('@/image/illustration/company_logo.png') : company.company_logo"
                 :alt="company.company_full_name"
                 style="width: 164px; height: 164px;"/>
            <div class="company-primary">
              <h1 class="company-name">{{ company.company_full_name}}</h1>
              <p class="company-description">{{ company.company_description }}</p>
              <div class="company-info">
                <div class="info-wrapper">
                  <el-link>{{ company.job_total }}个</el-link>
                  <p>招聘职位</p>
                </div>
                <div class="info-wrapper">
                  <el-link>{{ company.resume_feedback }}%</el-link>
                  <p>简历反馈率</p>
                </div>
                <div class="info-wrapper">
                  <el-link>{{ company.evaluation_total }}个</el-link>
                  <p>面试评价</p>
                </div>
                <div class="info-wrapper">
                  <el-link>{{ company.login_date}}</el-link>
                  <p>企业最近登录</p>
                </div>
              </div>
            </div>
            <div class="user-share">
              <span>分享</span>
              <span><i class="el-icon-weixin"></i></span>
            </div>
          </div>
        </div>
        <div class="company-tab margin-20per">
          <el-link :href="'/company/detail?company_id=' + company.company_id" :class="{'is-active': $route.path === '/company/detail'}">公司主页</el-link>
          <el-link :href="'/company/job?company_id=' + company.company_id" :class="{'is-active': $route.path === '/company/job'}">在招职位</el-link>
          <el-link :href="'/company/evaluation?company_id=' + company.company_id" :class="{'is-active': $route.path === '/company/evaluation'}">面试评价</el-link>
        </div>
      </div>
      <div class="company-main margin-20per">
        <aside ref="aside">
          <div class="company-info">
            <h3>基本信息</h3>
            <p>
              <i class="el-icon-caidan"></i>
              <span>{{ company.company_tag }}</span>
            </p>
            <p>
              <i class="el-icon-zhexiantu"></i>
              <span>{{ company.company_type }}</span>
            </p>
            <p>
              <i class="el-icon-tuanduiguimo"></i>
              <span>{{ company.company_size }}</span>
            </p>
            <p>
              <i class="el-icon-diqiu"></i>
              <span :title="company.company_website">{{ company.company_website }}</span>
            </p>
          </div>
          <div class="company-job">
            <h3>在招职位</h3>
            <ul>
              <li v-for="(rej,index) in recruit_job" :key="rej.job_duty + index">
                <el-link class="job-duty" :title="rej.job_duty"
                         :href="'/profession/detail?job_id=' + rej.job_id"
                > {{ rej.job_duty }}
                </el-link>
                <p class="job-salary">{{ rej.job_salary }}</p>
                <p class="job-request">
                  <span>{{ rej.office_city }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>{{ rej.job_year }}</span>
                  <el-divider direction="vertical"></el-divider>
                  <span>{{ rej.education }}</span>
                </p>
              </li>
            </ul>
            <el-link :href="'/company/job?company_id=' + company.company_id"
                     class="show-more"
            >查看更多职位<i class="el-icon-arrow-right"></i>
            </el-link>
          </div>
        </aside>
        <div class="company-introduce" ref="company_introduce">
          <div class="company-introduction">
            <h3>公司简介</h3>
            <div class="content" v-if="company.company_introduction">
              <p v-for="intro in filter(company.company_introduction)" :key="intro">{{ intro }}</p>
            </div>
          </div>
          <div class="company-recruiter">
            <h3>公司热门招聘官</h3>
            <div class="content">
              <dl>
                <dd v-for="(rec,index) in hotRecruiter" :key="rec.recruiter_name + index">
                  <img :src="rec.recruiter_avatar" :alt="rec.recruiter_name"
                       style="width: 60px; height: 60px; border-radius: 50%"/>
                  <div class="recruiter-info">
                    <h2>{{ rec.recruiter_name }}</h2>
                    <p>{{ rec.recruiter_duty }}</p>
                  </div>
                </dd>
              </dl>
            </div>
          </div>
          <div class="company-address">
            <h3>公司位置</h3>
            <div class="content">
              <Map :address="company.company_address" v-if="company.company_address"/>
            </div>
          </div>
          <InterviewEvaluation :dataList="evaluation" :showMoreBtn="true" :isCompany="true"/>
        </div>
      </div>
    </main>
    <!-- 底部信息栏 -->
    <GeneralFooter />
  </div>
</template>

<script>
import GeneralTopBar from "../../../components/GeneralTopBar";
import GeneralFooter from "../../../components/GeneralFooter";
import Map from "../../../components/Map.vue";
import InterviewEvaluation from "../widgets/InterviewEvaluation.vue";
import setMinHeight from "@/utils/setMinHeight";
export default {
    name: "CompanyDetail",
    components: { GeneralTopBar, GeneralFooter, Map, InterviewEvaluation},
    data() {
        return {
            company: {},
            /*company: {
                company_full_name: "深圳市迅雷网络技术有限公司",
                company_name: "迅雷网络",
                company_logo: require("@/image/company/xunlei.jpg"),
                company_description: "基于共享经济的互联网云计算平台",
                company_address: "深圳南山区深圳湾科技生态园12栋B座21-23F",
                company_tag: "移动互联网",
                company_type: "上市公司",
                company_size: "1000-5000人",
                company_website: "www.xunlei.com",
                company_introduction: "迅雷产品迅雷X手机迅雷迅雷影音产品logo迅雷客户端移动app精彩，一下就有！迅雷介绍迅雷集团（纳斯达克：XNET）成立于2003年，是全球领先的共享计算与区块链技术创新企业，同时也是中国用户最多，历史最悠久的互联网品牌之一。迅雷旗下网心科技独创了共享计算模式，在此基础上推出的超级区块链平台迅雷链，具备全球领先的百万TPS高并发、秒级确认的领先性能，大幅提升了区块链技术的性能水准，致力于打造全球最大规模ToC区块链商业生态。迅雷面向个人用户和企业用户打造了丰富的下载加速、区块链、云计算、影音娱乐等产品及服务，为超过4亿用户创造了高效、智能、安全的互联网体验\n（手机也可找工作，投简历！关注“迅雷招聘”微信公众号，随时随地关注迅雷招聘动态，手指轻轻一点即可投递简历，使您的求职更加方便快捷！）",
                job_total: 52,
                resume_feedback: "96",
                evaluation_total: 26,
                login_date: "3天内"
            },*/
            // 只抽取3位招聘官
            hotRecruiter: [],
            /*hotRecruiter: [
                {
                    recruiter_name: "陈女士",
                    recruiter_avatar: require("@/image/avatar/recruiter_chen.png"),
                    recruiter_duty: "HR"
                },
                {
                    recruiter_name: "李女士",
                    recruiter_avatar: require("@/image/avatar/recruiter_li.png"),
                    recruiter_duty: "招聘主管"
                },
                {
                    recruiter_name: "赵先生",
                    recruiter_avatar: require("@/image/avatar/recruiter_zhao.png"),
                    recruiter_duty: "资深前端"
                }
            ],*/
            evaluation: [
                {
                    applicant_avatar: require("@/image/avatar/applicant_xie.png"),
                    applicant_name: "谢女士",
                    evaluation_title: "面试很顺利，希望可以入职",
                    evaluation_description: "因为疫情，这次安排了视频面试。 HR很负责，前期沟通和面试对接都比较顺畅。 面试官有时间观念，是技术总监，准时上线面试，问的技术问题都在点上。 整体了解下来，是创业型公司，项目是我觉得可以做的，面试官也提到会有加班，我觉得比较诚恳。 希望有后续反馈",
                    job_duty: "前端开发工程师",
                    job_status: "0",
                    score_description: 4,
                    score_recruiter: 4.5,
                    score_environment: 4.7,
                    useful_num: 32,
                    click_num: 0,
                    create_date: "2022-3-18"
                },
                {
                    applicant_avatar: require("@/image/avatar/applicant_wang.png"),
                    applicant_name: "王先生",
                    evaluation_title: "面试官很好，交流很顺畅",
                    evaluation_description: "面试过程还是很不错的，面试流程感觉也很好，但是感觉有点难度，感觉是没戏了。想进去要好好看面试题，笔试要手写代码。",
                    job_duty: "初级web前端工程师",
                    job_status: "0",
                    score_description: 4.8,
                    score_recruiter: 5,
                    score_environment: 4.8,
                    useful_num: 18,
                    click_num: 0,
                    create_date: "2022-3-15"
                },
                {
                    applicant_avatar: require("@/image/avatar/applicant_liu.png"),
                    applicant_name: "刘先生",
                    evaluation_title: "面试要求没有提前说明...",
                    evaluation_description: "面试前电话通知没说需要需要先做题，如果做题没通过是没有面试资格的，而且题目和岗位貌似没什么联系…………心疼自己浪费了一个早上",
                    job_duty: "web前端开发工程师",
                    job_status: "0",
                    score_description: 3,
                    score_recruiter: 3.5,
                    score_environment: 4,
                    useful_num: 2,
                    click_num: 0,
                    create_date: "2022-3-12"
                }
            ],
            recruit_job: [],
            /*recruit_job: [
                {
                    job_duty: "高级前端开发工程师",
                    job_salary: "25-45K·16薪",
                    office_city: "深圳",
                    job_year: "3年以上",
                    education: "本科"
                },
                {
                    job_duty: "ios移动开发工程师",
                    job_salary: "18-30K·16薪",
                    office_city: "杭州",
                    job_year: "3-5年",
                    education: "本科"
                },
                {
                    job_duty: "游戏开发工程师",
                    job_salary: "20-40K·16薪",
                    office_city: "广州",
                    job_year: "3-5年",
                    education: "本科及以上"
                },
                {
                    job_duty: "内容运营",
                    job_salary: "20-40K·15薪",
                    office_city: "北京",
                    job_year: "1-3年",
                    education: "本科"
                },
                {
                    job_duty: "销售总监",
                    job_salary: "50-80K·16薪",
                    office_city: "深圳",
                    job_year: "5-10年",
                    education: "本科"
                },
            ],*/
        }
    },
    mounted() {
        // 设置页面主内容最小高度
        setMinHeight(this, this.$refs.company_introduce);
    },
    created() {
        this.initData()
    },
    methods: {
        async initData() {
            let getCompany = async () => {
                const res = await this.$axios.request({
                    url: `/company/info/${this.$route.query.company_id}`,
                    method: "get",
                });
                console.log(res);
                if(res.msg === 'success'){
                    res.data.company.company_logo = require("@/image/company/" + res.data.company.company_logo);
                    this.company = Object.assign({},{},res.data.company);
                }
            };
            let getHotRecruiter = async () => {
                const res = await this.$axios.request({
                    url: `/company/infoHotRecruiter/${this.$route.query.company_id}`,
                    method: "get",
                });
                console.log(res);
                if(res.msg === 'success'){
                    res.data.hotRecruiter.forEach(item => {
                        item.recruiter_avatar = require("@/image/avatar/" + item.recruiter_avatar);
                    })
                    
                    this.hotRecruiter = Object.assign([],[],res.data.hotRecruiter);
                }
            };
            let getRecruitJob = async () => {
                const res = await this.$axios.request({
                    url: `/company/listJob/${this.$route.query.company_id}`,
                    method: "get",
                });
                console.log(res);
                if(res.msg === 'success'){
                    this.recruit_job = Object.assign([],[],res.data.recruit_job);
                }
            };
            await this.$axios.all([getCompany(),getHotRecruiter(),getRecruitJob()]);
        },
        filter(data) {
            return data.split("\n");
        },
    },
}
</script>

<style lang="less" scoped>
.el-link-active{
    transition: .3s;
    &:hover{
        color: @mainColor;
    }
    &:active{
        color: @activeColor;
    }
}
.show-more-active{
    color: @mainColor;
    transition: .3s;
    &:hover{
        color: @activeColor;
    }
    &:active{
        color: #16a085;
    }
}
.text-overflow{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

@mainColor: #5dd5c8;
@activeColor: #00c2b3;
@background: #f6f6f8;
@fontColor: #61687c;
@salaryColor: #fb670f;
@promptColor: #8d92a1;
@borderColor: #dcdfe6;
.container{
    background: #fff;
}
main{
    .company-header{
        background: @background;
        padding-top: 30px;
        overflow: hidden;
        .company-box{
            background: #fff;
            padding: 10px 20px;
            .company-wrapper{
                position: relative;
                img{
                    float: left;
                }
                .company-primary{
                    height: 164px;
                    margin-left: 180px;
                    padding: 16px 0;
                    h1{
                        font-size: 32px;
                        font-weight: 500;
                    }
                    > p{
                        font-size: 16px;
                        line-height: 50px;
                    }
                    .company-info{
                        .info-wrapper{
                            display: inline-block;
                            padding: 0 36px;
                            position: relative;
                            &:first-of-type{
                                padding-left: 8px;
                            }
                            &:last-of-type::after{
                                display: none;
                            }
                            &::after{
                                content: "";
                                display: inline-block;
                                width: 1px;
                                height: 40px;
                                background: @borderColor;
                                position: absolute;
                                top: 4px;
                                right: 0;
                            }
                            .el-link{
                                font-size: 21px;
                                font-weight: 500;
                                display: flex;
                                color: @fontColor;
                              .el-link-active();
                            }
                            p{
                                color: @promptColor;
                            }
                        }
                    }
                }
                .user-share{
                    color: @promptColor;
                    line-height: 36px;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    font-size: 15px;
                    span + span{
                        margin: 0 10px 0 16px;
                      .el-link-active();
                        cursor: pointer;
                    }
                }
            }
        }
        .company-tab{
            margin-top: 20px;
            margin-bottom: 20px;
            padding-left: 20px;
            .el-link{
                width: 160px;
                padding: 8px 0;
                font-size: 16px;
                &.is-active{
                    color: #fff;
                    background: @mainColor;
                    &:hover,&:focus{
                        color: #fff;
                        background: @activeColor;
                        opacity: .8;
                    }
                    &:active{
                        opacity: 1;
                    }
                }
                color: @promptColor;
              .el-link-active();
            }
        }
    }
    .company-main{
        aside{
            width: 300px;
            float: right;
            margin-bottom: 100px;
            padding-left: 40px;
            > div + div{
                margin-top: 40px;
            }
            h3{
                font-size: 18px;
                padding-bottom: 15px;
                border-bottom: 1px solid @borderColor;
                margin-bottom: 25px;
            }
            .company-info{
                margin-top: 40px;
                p{
                    display: flex;
                    margin-bottom: 25px;
                    font-size: 16px;
                    i{
                        font-size: 22px;
                        margin-right: 16px;
                        margin-left: 12px;
                    }
                    span{
                        display: inline-block;
                        position: relative;
                        bottom: 2px;
                        max-width: 210px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
            }
            .company-job{
                ul li{
                    margin-top: 25px;
                    padding-bottom: 25px;
                    border-bottom: 1px dashed @borderColor;
                    font-size: 16px;
                    .job-duty{
                        font-size: inherit;
                        color: @fontColor;
                        display: inline-block;
                        max-width: 130px;
                      .text-overflow();
                      .el-link-active();
                    }
                    .job-salary{
                        display: inline-block;
                        float: right;
                        color: @salaryColor;
                    }
                    .job-request{
                        color: @promptColor;
                        font-size: 13px;
                        margin-top: 8px;
                    }
                }
                .show-more{
                    color: @fontColor;
                  .el-link-active();
                    background: @background;
                    width: 100%;
                    padding: 10px 0;
                    margin-top: 20px;
                    i{
                        margin-left: 12px;
                    }
                }
            }
        }
        .company-introduce{
            padding: 40px 40px 100px 20px;
            border-right: 20px solid @background;
            margin-right: 300px;
            > div + div{
                margin-top: 50px;
            }
            h3{
                margin-bottom: 30px;
                font-size: 18px;
                font-weight: bold;
                padding-bottom: 16px;
                position: relative;
                &::after{
                    content: "";
                    display: block;
                    width: 24px;
                    height: 2px;
                    border-radius: 3px;
                    background: @mainColor;
                    position: absolute;
                    left: 0;
                    bottom: 0;
                }
            }
            .company-introduction{
                .content p{
                    line-height: 32px;
                }
            }
            .company-recruiter{
                .content{
                    dl {
                        display: flex;
                        dd{
                            display: flex;
                            flex-wrap: wrap;
                            margin-right: 60px;
                            .recruiter-info{
                                margin-left: 16px;
                                white-space: nowrap;
                                h2{
                                    font-size: 20px;
                                    font-weight: normal;
                                }
                                p{
                                    color: @promptColor;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
footer{
    background: @background;
    margin-top: 0;
}
</style>