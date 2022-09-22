<template>
    <header>
        <div class="header__inner">
            <HeaderSite />
            <div class="header__block">
                <div class="header__btn">
                    <router-link to="/login" class="header__btn__item--login">
                        <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/btn_icon_login.png">
                        Đăng nhập
                    </router-link>
                    <router-link to="/login" class="header__btn__item--regist">
                      <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/btn_icon_regist.png">
                        Đăng ký thành viên
                    </router-link>
                </div>
            </div>

            <div class="header__language__sp">
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/header_language_icon.png">
                <select>
                    <option>Chon ngon ngu</option>
                    <!-- {arrLaguages.map((item, index) => (
                        <option key={index}>{item.name}</option>
                    ))} -->
                </select>
            </div>
            <div class="header__menu" v-bind:class="{open: openMenu}" v-on:click="_onClickMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <NavMenu v-bind:isOpenMenu="openMenu"/>
        </div>


        <div class="adviser-slide">
            <div class="adviser-slide__btn" v-bind:class="{active: showAdviser}" >
                <a href="#">Tham khảo ý kiến một cố vấn</a>
            </div>
            <div class="adviser-slide__arrow" v-on:click="_onClickAdviser"></div>
        </div>
    </header>
</template>

<script>
import HeaderSite from './HeaderSite';
import NavMenu from './NavMenu.vue'
export default {
    name: 'header__inner',
    components: {
      HeaderSite,
      NavMenu,
    },
    data () {
      return {
        openMenu: false,
        showAdviser: false,
      }
    },
    methods: {
      _onClickMenu () {
        this.openMenu = !this.openMenu
      },
      _onClickAdviser () {
        this.showAdviser = !this.showAdviser
      }
    }
}
</script>

<style>

.header__inner {
  display: flex;
  justify-content: space-between;
  margin: 0px auto 0px auto;
  flex-direction: column;
  background-color: #fff;
}

.header__btn {
display: flex;
justify-content: space-around;
}
.header__btn__item--login, .header__btn__item--regist {
    border-radius: 8px;
    font-size: 1.1rem;

    width: 126px;
    height: 36px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    font-size: 0.9rem;
}
.header__btn__item--login {
    background: linear-gradient(180deg, #1bb3e6 0%, #0b77bd 100%);
    padding-right: 5px;
}
.header__btn__item--regist {
    background: linear-gradient(180deg, #f07d00 0%, #e7470f 100%);
    padding: 0 5px;
}


.header__language__sp {
  display: block;
  position: absolute;
  right: 60px;
  top: 20px;
}
.header__language__sp img {
width: 32px;
}
.header__language__sp select {
  position: absolute;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  padding: 10px;
  background-color: transparent;
  opacity: 0;
  border: solid 1px #333;
}
      


.header__menu {
  display: block;
  position: absolute;
  z-index: 1000;
  top: 10px;
  right: 5px;
  cursor: pointer;
  width: 40px;
  height: 40px;
}
span {
  display: inline-block;
  transition: all 0.4s;
  position: absolute;
  left: 8px;
  height: 3px;
  border-radius: 2px;
  background-color: #0b77bd;
  width: 55%;
}
span:nth-child(1) {
  top: 18px;
}
span:nth-child(2) {
  top: 26px;
}
span:nth-child(3) {
  top: 34px;
}
.open span:nth-child(1) {
  top: 18px;
  left: 8px;
  transform: translateY(6px) rotate(-45deg);
}
.open span:nth-child(2) {
  opacity: 0;
}
.open span:nth-child(3) {
  top: 30px;
  left: 8px;
  transform: translateY(-6px) rotate(45deg);
}

.adviser-slide {
  position: fixed;
  right: 0;
  top: 160px;
  z-index: 2;
}
.adviser-slide__btn.active {
  right: 0px;
  padding-left: 20px;
  z-index: 3;
}
.adviser-slide__btn {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  position: absolute;
  top: 0px;
  right: -155px;
  width: auto;
  height: auto;
  padding: 10px 40px 10px 40px;
  font-size: 90%;
  background: linear-gradient(180deg, #1bb3e6 0%, #0b77bd 100%);
  color: #fff;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  transition: all 0.4s;
}
.adviser-slide__btn a {
  display: inline-block;
  padding: 0px;
  color: #fff;
}


.adviser-slide__arrow {
  position: absolute;
  right: 0;
  top: 20px;
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
  z-index: 3;
}
.adviser-slide__arrow::before {
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  background-color: #fff;
  border-radius: 9999px;
  z-index: 3;
}
.adviser-slide__arrow::before, .adviser-slide__arrow::after {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  content: "";
  vertical-align: middle;
  z-index: 3;
}
.adviser-slide__arrow::after {
  right: 16px;
  width: 5px;
  height: 5px;
  border-top: 1px solid #5fb2df;
  border-right: 1px solid #5fb2df;
  transform: rotate(45deg);
  z-index: 3;
}


</style>