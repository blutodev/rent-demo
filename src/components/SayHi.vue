<template>
    <div v-bind:style="'color:'+this.color">
      {{num}}<input type="button" v-on:click="count()" value="count"/>
      <div v-if="num > 1">
        <P>你好！ {{name}}</P>
        <input type="text" v-model="name">
        <input type="button" v-on:click="changeName('bltuo')" value="changeName"/>
      </div>
      <p>SPA有哪些技术：</p>
      <br/>
      <ul>
          <li v-for="tech in spa_technologies" :key="tech">
            {{tech}}
          </li>
      </ul>
      <br/>
      <div v-if="name==='bluto'">
        My name is bluto!
      </div>
      <div v-else-if="name === 'tom'">
        My name is tom!
      </div>
      <div v-else>
        My name is Jack!
      </div>
    </div>
</template>

<script>
export default {
  name: 'SayHi',
  data () {
    return {
      num: 0,
      my_value: 'hello! the message from val',
      spa_technologies: ['vue', 'react', 'argularjs'],
      name: 'jack',
      color: 'green',
    }
  },
  methods: {
    changeName: function () {
      this.name = 'bluto'
    },
    count: function () {
      this.num++
    }
  }
}
</script>

<style scoped>

</style>
