<script setup> 
import {ref} from 'vue'

    const topIceCreamList = ref([{
        img:'https://www.prb.co.id/uploads/ngc_global_images/98031-20231004121414.jpg',
        name:'Gelato'
    },{
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Xz65PR0MQZTH4Q4nlJNUEm9vGi2ZtgbCZQ&s',
        name:'Kulfi'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3thukB0ycox44EqhTi2UM6qZ4zv3lBLeEA&s',
        name:'Sherbet'
    },
    {
        img: 'https://img.taste.com.au/DcBJMzGZ/taste/2017/05/fruit-sorbet-126288-1.jpg',
        name:'Sorbet'
    }, {
        img:'https://static01.nyt.com/images/2020/08/15/dining/00Icecream19/00Icecream19-superJumbo.jpg',
        name:'Philadelphia'
    },
    {
        img:'https://everydayshortcuts.com/wp-content/uploads/2021/02/how-to-make-snow-ice-cream-with-condensed-milk-500x500.jpg',
        name:'Snow Ice Cream'
    },{
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNOSBOGmkFjkiIYXmQuFTFRV6SxBqjTxXcPQ&s',
        name:'Italian Ice Cream'
    },
    {
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvH9pQcfm3t_utnIPlj-lDCI8PnuLlaUK-g&s',
        name:'Dondurma'
    }])
</script>


<template>
    <div style="margin-top: 130px;"> 
        <div class="m-3">
            <div>
                <h1>Ice Cream</h1>
                <p>Ice cream is the most loved frozen dessert around the globe by all age groups. Although different and modernised ice creams are available on the market. 
                   However, mainly three flavours (vanilla, strawberry, and chocolate) are the prime flavours. Additionally, modern freezing technology has boosted the ice cream-making business at an industrial level.
                </p>
            </div>
            <div> 
                <h1>Top Ice-cream Flavors in Trends</h1>
                <ul class="grid grid-cols-2 md:grid md:grid-cols-4 overflow-y-auto items-center whitespace-nowrap gap-2 p-1 mb-4">
                    <li class="w-[95%] flex-shrink-0" v-for="eachItem in topIceCreamList" :key="eachItem.name">
                        <div class="w-full h-[240px] bg-cover bg-center bg-no-repeat rounded-2xl flex flex-column justify-end items-start p-3 text-lg md:text-2xl text-gray-100 font-bold" 
                            :style="{ backgroundImage: `url(${eachItem.img})` }">
                            {{ eachItem.name }}
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>