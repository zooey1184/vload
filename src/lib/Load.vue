<template>
<transition name="fade">
  <div class="load" v-if="showLoading" :style="{background: bgWrap}">
    <div class="load_contain" :style="{background: background, color: color}">
      <div class="preLoading_pane">
        <!-- <img src="./loading_d_green.png" alt=""> -->
        <svg class="circular" viewBox="25 25 50 50">
	        <circle class="path" :style="{stroke: stroke}" cx="50" cy="50" r="20" fill="none"/>
        </svg>
        <p class="title_pane_loading" v-if="(title!='')">{{title}}</p>
      </div>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'load',
  data: () => ({
    title: '',
    showLoading: false,
    background: 'rgba(0,0,0,0.3)',
    color: '#fff',
		stroke: '#409eff',
		bgWrap: 'rgba(0,0,0,0)'
  })
}
</script>

<style scoped lang="less">
.load {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0);
  z-index: 99999;
}
.load_contain {
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 12px;
  width: 80px;
  height: 80px;
  overflow: hidden;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
}
.title_pane_loading {
  margin-top: 5px;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.preLoading_pane {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.preLoading_pane img {
  display: block;
  width: 40px;
  height: 40px;
  -webkit-animation: rotate 1000ms linear infinite;
  animation: rotate 1000ms linear infinite;
}
@-webkit-keyframes rotate {
  0 {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  0 {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.circular {
  height: 42px;
  width: 42px;
  animation: loading-rotate 2s linear infinite;
}
.path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90,150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #409eff;
  stroke-linecap: round;
}
@keyframes loading-rotate {
  100% {
    transform: rotate(1turn);
  }
}
@keyframes loading-dash {
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90,150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90,150;
    stroke-dashoffset: -120px;
  }
}
</style>
