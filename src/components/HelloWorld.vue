<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
    <div>
      {{'---------------------测试内容区---------------------------'}}
    </div>
    <div>
      <el-button type="primary" @click="getTableInfo">某按钮</el-button>
      <el-table :data="tableData">
        <el-table-column prop="username" wdith="120"/>
        <el-table-column prop="usernickname" wdith="120"/>
        <el-table-column prop="password" wdith="120"/>
        <el-table-column prop="realname" wdith="120"/>
      </el-table>
    </div>
    <div>
      {{'---------------------测试内容区---------------------------'}}
    </div>
    <div>
      {{'---------------------测试内容区---------------------------'}}
    </div>
    <div>
      <el-table
        :data="tableData2"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="title"
          label="事项名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="describe"
          label="事项详情"
          width="120">
        </el-table-column>
        <el-table-column
          prop="type"
          label="类别"
          width="120">
        </el-table-column>
        <el-table-column
          prop="priority"
          label="优先级"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div>
      {{'---------------------测试更新hook1233---------------------------'}}
      {{'---------------------测试并发触发push---------------------------'}}
    </div>
  </div>
</template>

<script>

import { getAll, getAll2, getTodoList } from '@/network/api/modules/log/logapi'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      tableData: [],
      tableData2: []
    }
  },
  methods: {
    getTableInfo () {
      getAll().then((res) => {
        console.log('res', res)
        this.tableData = res.data
      })
    },
    handleClick (row) {
      console.log(row)
    },
    getTodoList () {
      getTodoList().then((res) => {
        console.log('res', res)
        this.tableData2 = res
      })
    }
  },
  created () {
    this.getTodoList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
