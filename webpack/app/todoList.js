import cc_css from './todoList.css'
console.log(cc_css);

let big= require('../image/big.jpg');
let small= require('../image/small.png');
Vue.component('todoList',{
        template:`<div :class="cc_css.wrap">
                阿拉基发呢孤儿是偶尔卡佛本
                <img :src="big" alt=""><img :src="small" alt="">
                            </div>`,
    data(){
            return{
                cc_css:cc_css,
                big:big,
                small:small
            }
    }
    })