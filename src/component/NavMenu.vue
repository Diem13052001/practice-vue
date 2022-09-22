<template>
    <nav class="nav__menu" v-bind:class="{active: isOpenMenu}">
        <div class="nav__menu-list">
            <div class="nav__header">
                <HeaderSite />
            </div>
            <div class="nav__list">
                <!-- {navList.map((item, index) => (
                    <div class="nav__item" key={index}>
                        <a href="" class="nav__arrow">{item}</a>
                    </div>
                ))} -->
                <div class="nav__item" v-for="(item, index) in navList" v-bind:key="index">
                    <a href="" class="nav__arrow">{{ item }}</a>
                </div>
            </div>
            <div class="nav__sub">
                <div class="nav__sub__item">
                    <a href="">Tìm kiếm chi tiết</a>
                </div>
                <div class="nav__sub__item">
                    <a href="">Liên hệ</a>
                </div>
            </div>
            <div class="nav__bg--top">
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/gnav_top.png">
            </div>
            <div class="nav__bg--bottom">
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/gnav_bottom.png">
            </div>
        </div>
    </nav>
</template>

<script>
import HeaderSite from './HeaderSite'
export default {
    name: 'nav__menu',
    props: {
        isOpenMenu: Boolean,
    },
    components: {
        HeaderSite
    },
    data () {
        return {
            navList: [
                "Tim kiem de dang",
                "Tim kiem theo quoc tich nguoi dang lam viec",
                "Tim kiem theo nganh",
                "Tim kiem theo vi tri co quan"
            ],
        }
    },
}
</script>

<style>
.nav__menu {
  background-color: #fff;
  display: block;
  position: fixed;
  z-index: 99;
  top: -200%;
  left: 0px;
  transition: all 0.4s;
}
.nav__menu.active {
  top: 0;
}

.nav__menu-list {
  position: relative;
  z-index: 1001;
  width: 100%;
  height: 100vh;
  overflow: auto;
}
.nav__header {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0px;
  width: 100%;
  height: 150px;
  position: relative;
  z-index: 1;
  background: url(https://minnano-tokugi.com/file/box/minnanotokugi/img/gnav_header.png) no-repeat center bottom;
  background-size: cover;
}
.nav__header img {
  width: 100%;
}
.nav__bg--top {
  display: block;
  position: absolute;
  z-index: 0;
  top: 50px;
  left: 0;
  /* width: 100%; */
}
.nav__bg--top img {
    width: 100%;
}
.nav__bg--bottom {
  display: block;
  position: absolute;
  z-index: 0;
  bottom: 0;
  right: 0;
  width: 100%;
}
.nav__bg--bottom img {
    width: 100%;
}
.nav__list {
  margin: auto auto 0 auto;
  width: 80%;
  background-color: #fff;
  border-radius: 16px;
  padding: 10px 20px;
  margin: 0px auto 0px auto;
  position: relative;
  z-index: 1;
}
.nav__list.nav__arrow {
  display: inline-block;
  vertical-align: middle;
  text-decoration: none;
}
.nav__list .nav__arrow::before, .nav__arrow::after {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0px;
  margin: auto;
  content: "";
  vertical-align: middle;
}
.nav__list .nav__arrow::before {
  box-sizing: border-box;
  background-color: #1bb3e6;
  border-radius: 9999px;
  width: 24px;
  height: 24px;
}
.nav__list .nav__arrow::after {
  right: 10px;
  width: 5px;
  height: 5px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  transform: rotate(45deg);
}
.nav__list .nav__item, .nav__sub .nav__sub__item {
  border-bottom: solid 1px #dddddd;
  padding: 20px 0;
  font-size: 120%;
  text-align: center;
  position: relative;
}
.nav__list .nav__item a, .nav__sub .nav__sub__item a {
  color: #333;
  max-width: 300px;
}
.nav__sub .nav__sub__item {
  border-bottom: none;
}
</style>