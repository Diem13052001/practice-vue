<template>
    <footer>
        <div class="footer__outer">
            <div class="footer__top">
                <div class="footer__site">
                    <div class="footer__logo">
                        <a href="#">
                            <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/header_logo.svg">
                        </a>
                    </div>
                    <div class="footer__tittle">{{ title }}</div>
                </div>
                <div class="footer__block">
                    <div class="footer__nav">Tìm kiếm chi tiết</div>
                    <div class="footer__social-media">
                        <div class="footer__social-media__item">
                            <a href="">
                                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/sns_facebook.png">
                            </a>
                        </div>
                        <div class="footer__social-media__item">
                            <a href="">
                                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/sns_facebook-messenger.png">
                            </a>
                        </div>
                        <div class="footer__social-media__item">
                            <a href="">
                                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/sns_youtube.png">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer__bottom">
                <div class="footer__address">
                    2-4-1 Hamamatsucho, Minato-ku, Tokyo
                    <br />
                    World Trade Center Building South Tower 16F
                </div>
                <div class="footer__navbar">
                    <div class="footer__navbar__item">
                        <a href="#">Thông tin công ty điều hành</a>
                    </div>
                    <div class="footer__navbar__item">
                        <a href="#">Chính sách bảo mật</a>
                    </div>
                    <div class="footer__navbar__item">
                        <a href="#">Điều khoản dịch vụ</a>
                    </div>
                </div>
            </div>
            <div class="footer__copy-right">{{ copyRight }}</div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer__outer',
    data () {
        return {
            title: 'Trang web được ưa chuộng nhiều nhất về "Tôi muốn làm việc ở Nhật Bản"',
            copyRight: "CAMTECH INC. All Rights Reserved."
        }
    },
}
</script>

<style>
footer {
    background-color: #fff;
}
.footer__outer {
  width: 90%;
  position: relative;
  margin: auto;
  padding-bottom: 40px;
}
.footer__top {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  position: relative;
  border-bottom: solid 1px #dddddd;
}
.footer__site {
    margin: auto auto 20px auto;
}
.footer__logo {
    width: 300px;
    margin: auto auto 5px auto;
}

.footer__block {
    display: flex;
    text-align: start;
    justify-content: space-between;
}
.footer__social-media {
    display: flex;
}
.footer__social-media__item {
    margin: auto 10px;
}
.footer__block::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
}
.footer__bottom {
  display: flex;
  flex-direction: column;
  text-align: start;
  justify-content: space-between;
  padding-top: 20px;
  padding-bottom: 20px;
}
.footer__address {
    margin-bottom: 60px;
}
.footer__navbar {
    display: flex;
    justify-content: flex-end;
}
.footer__navbar__item a {
    font-size: 85%;
    color: #333;
} 
.footer__navbar__item:nth-child(1)::after, .footer__navbar__item:nth-child(2)::after {
    content: "｜";
}

.footer__copy-right {
  text-align: right;
}

  
  
</style>