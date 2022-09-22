<template>
    <div class="header__site">
        <div class="header__site__logo">
            <a>
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/header_logo.svg">
            </a>
        </div>
        <div class="header__site__tittle">{{ title }}</div>
    </div>
</template>

<script>
export default {
    name: 'header__site',
    data () {
        return {
            title: 'Trang web được ưa chuộng nhiều nhất về "Tôi muốn làm việc ở Nhật Bản"',
        }
    },
}
</script>

<style>
.header__site {
  padding: 20px;
  width: 64%;
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 500px;
}
.header__site__tittle {
    font-size: 80%;
}
</style>