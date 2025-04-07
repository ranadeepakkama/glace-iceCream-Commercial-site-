<script setup>
    import { ref } from 'vue';
    const flavourList = ref([
        {
            img:'https://static.toiimg.com/thumb/54677722.cms?width=1200&height=900',
            name:'Vanilla'
        },
        {
            img:'https://www.milkmaid.in/sites/default/files/2022-12/Chocolate-Ice-Cream-335x300.jpg',
            name:'Chocolate'   
        },
        {
            img:'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butterscotch-ice-cream-recipe.jpg',
            name:'ButterScotch'
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPmGqwx_u7mpp3ryeRZlf3XhaVLfia2hM8cw&s',
            name:'Mint Chocolate Chip'
        },
        {
            img:'https://celebratingsweets.com/wp-content/uploads/2023/04/Cookie-Dough-Ice-Cream-9.jpg',
            name:'Chocolate Chip Cookie Dough'
        },
        {
            img:'https://cookingwithmammac.com/wp-content/uploads/2021/08/1200-No-Churn-Butter-Pecan-Image.jpg',
            name:'Buttered Pecan'
        },
        {
            img:'https://www.afarmgirlsdabbles.com/wp-content/uploads/2023/07/birthday-cake-ice-cream-afarmgirlsdabbles-01s.jpg',
            name:'Birthday Cake'
        },
        {
            img:'https://www.milkmaid.in/sites/default/files/2023-07/Strawberry-Ice-Cream-335x300_2_11zon_11zon.jpeg',
            name:'strawberry'
        }
    ])
</script>

<template>
    <div class="p-2" style="margin-top: 100px;">
        <div> 
            <h1>Top Ice-cream Flavors in Trends</h1>
            <p>Everyone loves to eat the trendy tastes of flavored ice-creams. And, the manufacturing industry mostly uses these below listed flavors to create the different shapes of ice-creams.</p>
        </div>
        <div> 
            <ul class="grid grid-cols-2 md:grid-cols-3 gap-2 -ml-[35px]">
                <li class="text-base" v-for="item in flavourList" :key="item.name">
                    <div
                    class="w-full h-[240px] bg-cover bg-center bg-no-repeat rounded-2xl relative overflow-hidden"
                    :style="{ backgroundImage: `url(${item.img})` }"
                    >
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
                    <p class="relative z-10 text-white p-3 text-base md:text-2xl text-bold">
                        {{ item.name }}
                    </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>