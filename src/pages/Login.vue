<template>
  <section class="vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black d-flex justify-content-center">
          <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
            <a-form :model="formState" name="normal_login" class="login-form" @finish="onFinish"
              @finishFailed="onFinishFailed">
              <a-form-item label="Tài khoản" name="username"
                :rules="[{ required: true, message: 'Vui lòng nhập tài khoản' }]">
                <a-input v-model:value="formState.username" autocomplete="off">
                  <template #prefix>
                    <UserOutlined class="site-form-item-icon" />
                  </template>
                </a-input>
              </a-form-item>
              <a-form-item label="Mật khẩu" name="password"
                :rules="[{ required: true, message: 'Vui lòng nhập mật khẩu' }]">
                <a-input-password v-model:value="formState.password">
                  <template #prefix>
                    <LockOutlined class="site-form-item-icon" />
                  </template>
                </a-input-password>
              </a-form-item>
              <a-form-item>
                <a-form-item name="remember" no-style>
                  <a-checkbox v-model:checked="formState.remember">Ghi nhớ</a-checkbox>
                </a-form-item>
                <a class="login-form-forgot" href="">Quên mật khẩu</a>
              </a-form-item>
              <a-form-item>
                <a-button :disabled="disabled" type="primary" html-type="submit" class="login-form-button">
                  Đăng nhập
                </a-button>
                Hoặc
                <a href="">Đăng ký</a>
              </a-form-item>
            </a-form>
          </div>
        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp" alt="Login image"
            class="w-100 vh-100" style="object-fit: cover; object-position: left;">
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
const disabled = computed(() => {
  return !(formState.username && formState.password);
});
</script>
<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}

#components-form-demo-normal-login .login-form-forgot {
  float: right;
}

#components-form-demo-normal-login .login-form-button {
  width: 100%;
}

.w-40 {
  width: 30%;
}
</style>
