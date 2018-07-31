<template>
  <div id="app" class="w-100">
    <top-nav></top-nav>
    <div id="main" class='container-fluid px-0 d-flex'>
      <side-nav></side-nav>
      <main-content></main-content>
    </div>
  </div>
</template>
<script>
import TopNav from './components/layout/TopNav';
import MainContent from './components/layout/MainContent';
import SideNav from './components/layout/SideBar';

export default {
  components: {
    TopNav,
    SideNav,
    MainContent,
  },
};
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#main{
  position: fixed;
  top: 56px
}
</style>
