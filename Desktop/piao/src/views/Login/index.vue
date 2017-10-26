<template>
  <div class="wrapp1">
    <div class="logo tb-logo"></div>
    <div class="login-box" v-if="type == 'user'" >
        <input type="text" key="username-input" v-model="userName" placeholder="手机号/邮箱/会员名" />
        <input type="password" v-model="passWord" placeholder="请输入登录密码" />
        <p class="pp"><span>免费注册</span><span>忘记密码</span> </p>
        <div class="btn-group">
            <button class="btn red" @click="loginDo('user')">登录</button>
            <button class="btn" @click="type='phone'">短信验证码登录</button>
        </div>
    </div>
    <div class="login-box" v-if="type == 'phone'" >
        <input type="text" key="userphone-input" v-model="userPhone" placeholder="请输入手机号" />
        <p>
            <input type="number" v-model.number="code" placeholder="校验码" />
            <a href="javascript:;">点击获取验证码</a>        
        </p>
        <div class="btn-group">
            <button class="btn red" @click="loginDo('phone')">登  录</button>
            <button class="btn" @click="type='user'" >账号密码登录</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'zoom',
  data () {
    return {
      type: 'user',
      userName: '',
      userPhone: '',
      passWord: '',
      code: '校验码'
    }
  },
  methods: {
    loginDo (type) {
      let loginData = {}
      if (type === 'user') {
        loginData['userName'] = this.userName
        loginData['passWord'] = this.passWord
      } else {
        loginData['userPhone'] = this.userPhone
        loginData['code'] = this.code
      }
      window.localStorage.setItem('userInfo', JSON.stringify(loginData))
      let path = window.localStorage.getItem('toPath')
      this.$router.push(path)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.wrapp1{
  font-size: 20px;
  padding: 0.2rem;
  .logo{
    width: .7rem;
    height: .7rem;
    background: url(https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png) no-repeat;
    background-size: auto auto;
    background-size: contain;
    margin:.3rem auto 0;
  }
  .login-box{
    .pp{
      width:100%;
      display:flex;
      justify-content: space-around;
      font-weight:normal;
      font-size:.14rem;
    }
    .btn-group{
      margin-top: 0.5rem;
      .btn{
        width: 100%;
        display: block;
        height: 0.4rem;
        border-radius: 0.4rem;
        text-align: center;
        line-height: 0.4rem;
        border: 1px solid orange;
        background: transparent;
        color: orange;
        margin: 0.1rem 0;
        &.red{
          background: orange;
          color: #fff;
        }
      }
    }
    input{
      display: block;
      width: 100%;
      height: 0.4rem;
      line-height: 0.4rem;
      font-size: 0.12rem;
      border: 0;
      border-bottom: 1px solid orange;
      margin-top: 0.1rem;
    }
    p{
      display: -webkit-box;
      margin-top: 0.1rem;      
      input{
        -webkit-box-flex: 1;
        margin-top: 0;
        border: 0;
      }
      a{
        font-size: 0.12rem;
        line-height: 0.4rem;
        display: block;
        color: orange;
      }
    }
  }
}
</style>
