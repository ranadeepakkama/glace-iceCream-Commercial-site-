<script setup> 
    import { ref } from 'vue'
    import { useCartStore } from '@/stores/cart'

    import { useRouter } from 'vue-router'
    const router = useRouter()
    const clickButton = () => {
        router.push('/iceCreamFlavour')
        console.log('button clicked')
    }

    const cart = useCartStore()
    const onClickCartButn = (product) => {
        cart.addToCart(product)
        router.push('/flavourItem');
    }

    const flavourList = ref([
        {
            img:'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/1bc6d170-fd0a-44c7-5975-ae95ef8bba00/public',
            name: 'Classic Vanilla',
            details:'Classic Vanilla is a timeless flavor loved for its smooth, creamy taste and delicate aroma. Made from real vanilla beans, it offers a rich and comforting experience. Perfect on its own or paired with desserts, Classic Vanilla remains a favorite choice for ice cream and sweet treat lovers of all ages.'
        },
        {
            img:'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/745cec36-ed18-4029-3560-071cbe606900/publicContain',
            name:'Rich Chocolate',
            details:'Rich chocolate usually refers to a deep, intense, and full-bodied chocolate flavor. It’s less about sweetness and more about a bold cocoa presence — often with smooth, velvety texture and minimal milk or sugar dilution.'
        },
        {
            img:'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/090c18d8-4735-4a1f-9b04-23342d7d6200/public',
            name:'Fruity Sorbet',
            details:'Fruity Sorbet is a light, refreshing frozen dessert made primarily from fruit and sugar — with no dairy, unlike ice cream. It’s smooth, tangy, and naturally colorful, perfect for warm days or as a palate cleanser between meals.'
        },
        {
            img:'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/60a8e16b-64f1-4c98-8f6f-4527c4758a00/public',
            name:'Decadent Cookies & Cream',
            details:'Decadent Cookies & Cream is typically a rich, indulgent dessert flavor that blends creamy vanilla or sweet cream base with chunks of chocolate cookies (usually Oreo-style). It’s a popular flavor found in ice creams, milkshakes, cakes, and even gourmet protein bars or desserts'
        },
        {
            img:'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/261b90aa-9887-4462-b89f-37ff34dc6600/publicContain',
            img1:'https://fhmindia.com/storage/2023/04/fhm-inside-1-1-300x200.jpg',
            name:'Exotic Mango Delight',
            details:'Exotic Mango Delight" typically refers to a sweet, often a dessert or a variation of a traditional Indian sweet, like Mysore Pak, featuring mango pulp and flavor, and can also refer to a mango-based fruit beverage or even a cake'
        },
        {
            img:'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/d633c139-dc98-462c-2aa3-de86f4d1ea00/publicContain',
            name:'Gourmet Coffee Bliss',
            details:"Gourmet Coffee Bliss is a rich, velvety blend that captures the deep aroma and bold taste of premium roasted coffee beans. Infused with subtle hints of creamy vanilla and dark chocolate, this flavor delivers a perfectly balanced coffee experience — smooth, slightly sweet, and unmistakably decadent.Whether you're a coffee lover or just seeking a cozy, comforting treat, Gourmet Coffee Bliss brings the warmth of your favorite café straight to your taste buds"
        },
    ])
</script>

<template>
    <div class="ml-5 md:m-5  flex flex-column w-[160vw] md:w-[100vw] bg-sky-200 pt-3 pb-3 rounded-5 md:max-w-[98%]" style="color: #fff;">
        <div class="flex justify-start items-center ml-5 pl-5"> 
            <button @click="clickButton" class="btn btn-outline-primary">Our Exquisite Flavors</button>
            <h1 class="ml-5 text-black md:text-white">Crafted for Delight</h1>
        </div>
        <div class="List-carts">
            <ul class="flex w-[130vw] md:max-w-[90vw] overflow-x-scroll whitespace-nowrap m-5">
                
                <li v-for="item in flavourList" :key="item.name">
                    <button class="border-0" @click="onClickCartButn(item)"> 
                        <div class="bg-cover flex flex-col justify-end p-5 shrink-0 rounded-5 outline  bg-center mr-5 w-[360px] h-[448px]" style="font-size: 25px; color: #fff;" :style="{ backgroundImage: `url(${item.img})`}">{{ item.name }}</div>
                    </button>
                </li>
            </ul>
        </div>
        <div class="pl-5 pr-1 md:max-w-[94vw] w-[150vw] text-start flex justify-end items-center md:text-end" style="font-weight: bold;"> 
            <p class="text-xl text-black md:text-white">Savor exceptional flavors at Glace, where every scoop reflects our commitment to quality and creativity.
             Your online ice cream experience is designed for effortless enjoyment,whether you're ordering for a celebration or a cozy night at home.</p>
        </div>
    </div>
</template> 
