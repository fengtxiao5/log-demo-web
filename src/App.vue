<template>
  <div id="app" class="root-container">
    <div class="root-container-header"></div>
    <div class="root-container-body">
      <div class="left-menu">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <template v-for="(item, index) in menuItem">
            <el-menu-item
              v-if="!item.children.length > 0"
              :key="index"
              :index="item.key"
              @click="changeRoute(item.router)"
            >
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
            <el-submenu v-else :key="index" :index="item.key" popper-class="subItem">
              <template slot="title">
                <i class="icon iconfont " :class="item.icon"></i>
                <span slot="title" style="font-size:14px">
                  {{ item.title }}
                </span>
              </template>
              <template v-for="(option, io) in item.children">
                <el-submenu v-if="option.children.length > 0" :key="io" :index="option.key">
                  <template slot="title">{{ option.title }}</template>
                  <template v-for="(mem, ine) in option.children">
                    <el-menu-item :index="mem.key" :key="ine">
                      {{ mem.title }}
                    </el-menu-item>
                  </template>
                </el-submenu>
                <el-menu-item-group v-else :key="io">
                  <el-menu-item :index="option.key" @click="changeRoute(option.router)">
                    {{ option.title }}
                  </el-menu-item>
                </el-menu-item-group>
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </div>
      <div class="right-content">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import { menu } from '@src/hooks/menu'
import { cloneDeep } from 'lodash-es'
import { useRouter } from 'vue-router/composables'
export default {
  name: 'App-Root',
  components: {},
  setup() {
    const menuItem = cloneDeep(menu)
    const router = useRouter()
    const changeRoute = (url) => {
      router.push(url)
    }
    return {
      menuItem,
      changeRoute,
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.root-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  .root-container-header {
    display: flex;
    flex-direction: row;
    height: 40px;
  }
  .root-container-body {
    width: 200px;
    height: 100%;
    .left-menu {
      height: 100%;
      .el-menu-vertical-demo {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
