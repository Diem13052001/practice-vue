<template>

    <div class="login">
        <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/page_head.png">
        <h2 class="login__title">{{ title }}</h2>
        
        <section class="login__inner">
            <form action="" name="form">
                <div class="login__form">
                    <div class="login__bg--top">
                        <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/pattern_bg_top_list.png">
                    </div>
                    <div class="login__bg--bottom">
                        <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/pattern_bg_bottom_list.png">
                    </div>

                    <div class="login__item">
                        <input type="email" v-model="email" placeholder="Nhap email">
                        <input type="password" v-model="pass" placeholder="Nhap password">

                        <p>Quên mật khẩu?</p>
                        
                    </div>

                    <div v-show="isFail">
                        <div class="alert alert__danger">
                            Email or password is incorrect!
                        </div>
                    </div>

                    <ul class="login__btn">
                        <input type="submit" value="Đăng nhập" 
                        v-on:click.prevent="handleSubmit()"
                        >
                    </ul>

                    <div class="login__with">
                        <div class="login__with__title">Hoặc đăng nhập với</div>
                        <div class="login__with__btn">
                            <div v-for="(item, index) in listLoginWith" v-bind:key="index" class="login__with__item">
                                <a href="">
                                    <img v-bind:src="item">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="not-a-account">
                        Chưa có tài khoản?
                        <a href="#">Đăng ký</a>
                    </div>
                </div>
            </form>
        
      
        </section>
    </div>
</template>

<script>
import facebookLogo from '../assets/facebook.png'
import googleLogo from '../assets/google.png'
import githubLogo from '../assets/github-sign.png'
// import router from '../router'

import userApi from '../js/userApi';
export default {
    name: 'login',
    data () {
        return {
            title: 'Đăng nhập',
            email: '',
            pass: '',
            listLoginWith: [
                facebookLogo,
                googleLogo,
                githubLogo
            ],
            // facebookLogo: facebookLogo,
            // googleLogo: googleLogo,
            // githubLogo: githubLogo,
            userLogin: {},

            isFail: false,
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await userApi.checkUser();
                console.log('Sucess')
                this.userLogin = {
                    email: this.email,
                    password: this.pass
                };
                console.log(this.userLogin)
                // router.push({ name: 'home' })
            } catch (error) {
                this.isFail = !this.isFail
                console.log('Error', error);
            }
        }
    }
}
</script>

<style>
.login__title {
    width: auto;
    font-size: 160%;
    font-weight: 700;
    margin: 40px auto;
    max-width: 1120px;
}
.login img:nth-child(1) {
    width: 100%;
}
.login__bg, .login__bg--bottom, .login__bg--top {
    position: absolute;
    z-index: 0;
}
.login__bg--top {
    top: 0;
    left: 0;
    width: 20%;
}
.login__bg--top img {
    width: 100%;
    border-top-left-radius: 26px;
}

.login__bg--bottom {
    bottom: -4px;
    right: 0;
    width: 20%;
}
.login__bg--bottom img {
    width: 100%;
    border-bottom-right-radius: 26px;
}
.login__inner {
    width: 90%;
    margin: auto;
}
.login__form {
    /* width: 100%; */
    padding: 20px;
    margin: auto auto 60px auto;
    background-color: #fff;
    z-index: 1;
    position: relative;
    border-radius: 26px;
}
.login__item {
    padding: 20px 0;
    text-align: center;
}
.login__item input[type=email], .login__item input[type=password] {
    border: solid 1px #dddddd;
    padding: 16px;
    border-radius: 8px;
    width: 80%;
    margin: 10px auto;
    /* font-size: 24px; */
}
.login__item p {
    text-align: right;
    margin-right: 16px;
    font-weight: 600;
    color: #0b77bd;
}
.login__btn {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    margin: 30px auto 20px auto;
}
.login__btn input[type=submit] {
    min-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin: 10px auto 10px auto;
    padding: 15px 30px;
    font-size: 110%;
    background: linear-gradient(180deg, #f07d00 0%, #e7470f 100%);
    color: #fff;
}
.login__with__title {
    font-weight: 600;
}
.login__with__btn {
    display: flex;
    justify-content: space-around;
    margin: 20px auto 40px auto;
}
.login__with__item {
    padding: 15px;
    border-radius: 19px;
    border: solid 1px #dddddd;
    box-shadow: 5px 5px #ccc;
}
.login__with .login__with__item img {
    width: 45px;
}
.not-a-account a {
    font-weight: 700;
    margin-left: 5px;
}
.alert__danger {
    background-color: #f2dede;
    border-color: #ebccd1;
    color: #a94442;
}
.alert {
    padding: 15px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-weight: 500;
    width: 80%;
    margin: 0 auto;
}
</style>