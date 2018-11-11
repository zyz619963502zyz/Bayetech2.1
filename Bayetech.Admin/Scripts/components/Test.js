<template>
    <div class="searchZJ">
        <div class="f-search">
            <div class="f-searchIn" v-bind: class="{searchInFous: this.fousFlag}">{{ this.searchValue }}<span v-bind: class="{searchActive: this.searchFlag}" v-on:click="searchDown"></span></div>
    <div class="f-searchXl" v-if="this.dataHas" v-bind: style="{height: this.searchFous, border:this.searchBorder}">
  <div v-for="item in searchList" v-on: click="choseValue(item)">{{ item }}</div>
  </div >
    <div class="f-searchXl" v-else >
        <div>暂无数据</div>
    </div>
 </div >
 </div >
</template >

export default {
    data() {
        return {
            data: [],
            dataHas: true,
            searchFlag: false,
            searchFous: '0',
            fousFlag: false,
            searchValue: '',
            searchBorder: 'none'
        }
    },
    props: {
        searchList: Array,
        selectValue: Object
    },
    mounted() {
        this.data = this.searchList
    },
    methods: {
        searchDown() {
            this.searchFlag === false ? this.searchFlag = true : this.searchFlag = false
            this.searchFous === '0' ? this.searchFous = 'auto' : this.searchFous = '0'
            this.searchBorder === 'none' ? this.searchBorder = '1px solid #D9D9D9' : this.searchBorder = 'none'
            this.fousFlag === false ? this.fousFlag = true : this.fousFlag = false
        },
        choseValue(value) {
            this.searchValue = value
            this.searchDown()
            this.selectValue.data = '我被修改了'
            this.$emit('selectFunc', value)
        }
    }
}