<template>
    <div>
        arr -- {{ test.myArr }}
        <br>
        obj -- {{ test.myObj }}
        <br>
        <button @click="myClick">clickA</button>
        <br>
        <button @click="myClickO">clickO</button>
        <br>
        <h1>123123</h1>
    </div>
</template>

<script>
export default {
    name: 'ReView',
    data() {
        return {
            test: {
                myArr: [1, 2, 3, 4, 5],
                myObj: {
                    'id': 10,
                    'age': 20
                }
            },
        }
    },
    mounted() {
        this.test.myArr[5] = 0
    },
    methods: {
        myClick() {
            this.test.myArr[5] += 10
            console.log(this.test.myArr, 'arr內容改變，畫面沒變')
        },
        myClickO() {
            this.test.myObj.id += 100
            console.log(this.test.myObj, 'obj內容改變，畫面更新')
        }
    },
    watch: {
        myArr() {
            console.log('change')
        }
    }
}
</script>

<style>

</style>