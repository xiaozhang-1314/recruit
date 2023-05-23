<template>
  <div class="infor-box">
    <div class="list-banner">
      <div class="inner">
        <div class="text">
          <h1>BOSS直聘新闻和数据实时跟踪</h1>
          <div class="btns">
            <a href="javascript:;" class="btn" @click="dialogFormVisible = true"
              >媒体合作</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- dialog下拉框 -->
    <el-dialog
      title="媒体合作"
      :visible.sync="dialogFormVisible"
      class="dialog"
      width="25%"
    >
      <el-form
        :model="formData"
        :rules="rules"
        size="medium"
        class="el-form"
        ref="formRef"
      >
        <el-form-item
          label="邮箱地址"
          :label-width="formLabelWidth"
          prop="email"
          class="el-form-item"
        >
          <el-input
            v-model="formData.email"
            autocomplete="off"
            placeholder="请输入邮箱地址"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="手机号"
          :label-width="formLabelWidth"
          prop="mobile"
          class="el-form-item"
        >
          <el-input v-model.number="formData.mobile" placeholder="请输入手机号">
          </el-input>
        </el-form-item>
        <el-form-item
          label="姓名"
          :label-width="formLabelWidth"
          prop="username"
          class="el-form-item"
        >
          <el-input v-model="formData.username" placeholder="请输入您的姓名">
          </el-input>
        </el-form-item>
        <el-form-item
          label="公司名称"
          :label-width="formLabelWidth"
          prop="company"
          class="el-form-item"
        >
          <el-input v-model="formData.company" placeholder="请输入您的公司名称">
          </el-input>
        </el-form-item>
        <el-form-item
          label="职位名称"
          :label-width="formLabelWidth"
          prop="jobtitle"
          class="el-form-item"
        >
          <el-input v-model="formData.jobtitle" placeholder="请输入您的title">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="medium" @click="submitInfo" class="btn"
          >提交信息</el-button
        >
      </div>
    </el-dialog>

    <div class="inner">
      <div class="list-card">
        <ul>
          <li v-for="item in listC" :key="item.id">
            <h3 class="title">
              <b>{{ item.titleName }}</b>
              <a href="javascript:;" class="more">more</a>
            </h3>
            <div class="text">
              <p class="img-wrap">
                <a href="javascript:;" class="img">
                  <img :src="item.imageUrl" />
                </a>
              </p>
              <p class="text-title">
                <a href="javascript:;">{{ item.content }}</a>
              </p>
              <p class="text-view">
                <a href="javascript:;">{{ item.textView }}</a>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div class="list-news">
        <ul>
          <li v-for="(item, key) in listN" :key="item.id" v-show="key < num">
            <div class="img-wrap">
              <a href="javascript:;" class="img">
                <img :src="item.imageUrl" />
              </a>
              <a href="javascript:;" class="badge">{{ item.newsLabel }}</a>
            </div>
            <div class="text">
              <p class="text-title">
                <a href="javascript:;">{{ item.newsName }}</a>
              </p>
              <p class="summary">
                <a href="javascript:;">{{ item.content }}</a>
              </p>
              <div class="info">
                <p>
                  {{ item.directValue }}<em>·</em
                  ><span>{{ item.newTime }}</span>
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div class="page">
          <a href="javascript:;" class="load-page" @click="showMore"
            >浏览更多</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ZInformation",
  data() {
    return {
      isShow: true,
      num: 10,
      dialogFormVisible: false,
      formData: {
        email: "",
        mobile: "",
        username: "",
        company: "",
        jobtitle: "",
      },
      formLabelWidth: "120px",
      rules: {
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        mobile: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { type: "number", message: "手机格式不正确" },
        ],
        username: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        company: [
          { required: true, message: "请输入公司姓名", trigger: "blur" },
        ],
        jobtitle: [
          { required: true, message: "请输入职位名称", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    this.$store.dispatch("information/getListCardData");
  },
  computed: {
    ...mapState("information", ["listC", "listN"]),
  },
  methods: {
    showMore() {
      this.isShow = !this.isShow;
      this.num = this.listN.length;
    },
    // 提交信息执行的函数
    async submitInfo() {
      try {
        await this.$refs.formRef.validate();
        // console.log(this.$refs);
        this.$store.dispatch("information/submitInfo", this.formData);
        this.$message({
          type: "success",
          message: "信息提交成功",
        });
        this.dialogFormVisible = false;
      } catch (error) {}
    },
  },
};
</script>

<style lang="less" scoped>
::v-deep .el-dialog {
  border-radius: 12px;
}
.dialog .btn {
  width: 100%;
  line-height: 38px;
  border: 0;
  border-radius: 8px;
  background: #00bebd;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
}
/deep/.el-form-item__label {
  font-size: 18px !important;
}
::v-deep .el-dialog__title {
  font-size: 24px;
}

.dialog label {
  font-size: 18px !important;
  color: #606266;
  line-height: 40px;
  padding: 0 12px 0 0;
  box-sizing: border-box;
}
.infor-box {
  background: #f5f7f9;

  a {
    text-decoration: none;
  }

  .list-banner {
    height: 398px;
    background: url(https://static.zhipin.com/zhipin-geek/v568/web/news/images/list-banner.jpg);

    .inner {
      margin: auto;
      max-width: 1184px;
      height: 242px;

      .text {
        color: #fff;
        text-align: center;
        padding-top: 108px;

        h1 {
          font-weight: 400;
          font-size: 36px;
          letter-spacing: 3px;
          line-height: 40px;
        }

        .btns {
          margin-top: 50px;

          .btn {
            display: inline-block;
            width: 188px;
            height: 44px;
            line-height: 44px;
            color: #fff;
            font-size: 20px;
            font-weight: 300;
            background: #59cac2;
            border-radius: 24px;
          }
        }
      }
    }
  }

  .inner {
    max-width: 1184px;
    margin: 0 auto;

    .list-card {
      padding: 40px 10px;
      background: #fff;
      margin-top: -68px;

      ul {
        display: flex;
        justify-content: space-around;

        li {
          border-right: 1px solid #ededed;
          display: table-cell;

          .title {
            width: 284px;
            height: 26px;
            margin: 0 auto;
            position: relative;

            b {
              display: inline-block;
              font-size: 17px;
              line-height: 17px;
              border-left: 3px #59cac2 solid;
              padding-left: 10px;
              font-weight: 400;
              text-align: center;
            }

            .more {
              position: absolute;
              top: 0;
              right: 0;
              display: inline-block;
              width: 47px;
              height: 18px;
              line-height: 16px;
              border: 1px solid #bebebe;
              border-radius: 10px;
              color: #999;
              font-size: 14px;
              font-weight: 400;
              font-family: arial, Verdana;
              text-align: center;
            }
          }

          .text {
            width: 284px;
            margin: 0 50px;
            padding-top: 40px;

            .img-wrap {
              .img {
                display: block;
                width: 284px;
                height: 156px;
                overflow: hidden;

                img:hover {
                  transition: all ease-out 0.3s;
                }
              }
            }

            .text-title {
              font-size: 20px;
              margin: 30px 0 10px;
              max-height: 50px;
              overflow: hidden;

              a {
                color: #414a60;
              }
            }

            .text.view {
              font-size: 14px;

              a {
                color: #999;
              }
            }
          }
        }

        li:last-child {
          border: none;
        }
      }
    }

    .list-news {
      padding: 25px 100px;
      background: #fff;
      margin-top: 25px;

      ul {
        li {
          padding: 35px 0;
          height: 227;
          border-bottom: 1px solid #ededed;

          .img-wrap {
            width: 284px;
            height: 156px;
            position: relative;
            float: left;

            .img {
              display: block;
              width: 284px;
              height: 156px;
              overflow: hidden;
              transition: all ease-out 0.3s;

              img {
                width: 100%;
              }
            }

            .badge {
              position: absolute;
              width: 56px;
              height: 24px;
              padding-left: 5px;
              top: 12px;
              left: -5px;
              background: url(https://static.zhipin.com/zhipin-geek/v568/web/news/images/sub-icons.png);
              font-size: 12px;
              color: #fff;
              line-height: 20px;
            }
          }

          .text {
            margin-left: 330px;

            .text-title {
              font-size: 20px;
              font-weight: 400;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;

              a {
                color: #414a60;
              }
            }

            .summary {
              height: 75px;
              line-height: 25px;
              color: #666;
              padding: 20px 0 0;
              margin-bottom: 15px;
              overflow: hidden;
              font-size: 14px;
              text-indent: 2em;
            }

            .info {
              color: #999;
              line-height: 18px;
              font-size: 14px;

              p {
                em {
                  margin: 0 3px;
                }

                span {
                  font-size: 13px;
                }
              }
            }
          }
        }

        li:last-child {
          border: none;
        }
      }
    }

    .page {
      .load-page {
        display: block;
        line-height: 60px;
        border: 1px solid #f0f0f0;
        text-align: center;
        color: #bbb;
        font-size: 16px;
      }

      .load-page:hover {
        background: #f0f0f0;
        color: #59cac2;
      }
    }
  }
}
</style>
