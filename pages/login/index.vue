<template>
	<view class="login-container">
		<view class="title">登录/注册</view>
		<uni-forms ref="form" :rules="rules" :modelValue="form">
			<uni-forms-item name="phone">
				<uni-easyinput type="text" v-model="form.phone" placeholder="请输入手机号码" />
			</uni-forms-item>
			<uni-forms-item name="code">
				<uni-easyinput type="text" trim="all" v-model="form.code" placeholder="请输入验证码" />
			</uni-forms-item>
			<uni-forms-item name="agreement">
				<label>
          <checkbox v-bind:value="form.agreement" />
          <text>未注册的手机号验证后将自动创建账号，注册即代表您已同意 <navigator url="">《VR探视用户使用协议》</navigator></text>
				</label>
			</uni-forms-item>
		</uni-forms>
		<button type="primary" @click="handleSubmitForm()">登录</button>
	</view>
</template>

<script>
export default {
  data() {
    return {
      form: {
        phone: '',
        code: '',
        agreement: ''
      },
      rules: {
        phone: { rules: [{ required: true, errorMessage: '请输入手机号码' }] },
        code: { rules: [{ required: true, errorMessage: '请输入验证码' }] },
        agreement: { rules: [{ required: true, errorMessage: '请勾选协议' }] }
      }
    }
  },
  onReady() {
    // 需要在onReady中设置规则
    this.$refs.form.setRules(this.rules)
  },
  methods: {
    handleSubmitForm() {
      this.$refs.form.validate().then(res => {
        console.log('表单数据信息：', res)
      }).catch(err => {
        console.log('表单错误信息：', err)
      })
    }
  }
}
</script>

<style lang="scss">
  .login-container {
    padding: 20rpx;
    .title {
      margin-bottom: 10rpx;
    }
  }
</style>
