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
            name: 'Classic Vanilla',
            details:'Classic Vanilla is a timeless flavor loved for its smooth, creamy taste and delicate aroma. Made from real vanilla beans, it offers a rich and comforting experience. Perfect on its own or paired with desserts, Classic Vanilla remains a favorite choice for ice cream and sweet treat lovers of all ages.',
            imgList: ['https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/1bc6d170-fd0a-44c7-5975-ae95ef8bba00/public','https://falasteenifoodie.com/wp-content/uploads/2023/01/nescafe-cake-2.jpg','https://bakersoven.in/uploads/all/LcuXPIPzXzskdyEqTGMNZnTY1Cpc2m6AibxcJJBw.jpg'] 
        },
        {
            name:'Rich Chocolate',
            details:'Rich chocolate usually refers to a deep, intense, and full-bodied chocolate flavor. It’s less about sweetness and more about a bold cocoa presence — often with smooth, velvety texture and minimal milk or sugar dilution.',
            imgList:['https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/745cec36-ed18-4029-3560-071cbe606900/publicContain','https://anitalianinmykitchen.com/wp-content/uploads/2020/06/ice-cream-cake-sq-1-of-1-500x500.jpg','https://img.taste.com.au/N_rHhZdq/taste/2016/11/decadent-nutella-and-hazelnut-ice-cream-cake-110467-1.jpeg']
        },
        {
            name:'Fruity Sorbet',
            details:'Fruity Sorbet is a light, refreshing frozen dessert made primarily from fruit and sugar — with no dairy, unlike ice cream. It’s smooth, tangy, and naturally colorful, perfect for warm days or as a palate cleanser between meals.',
            imgList:['https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/090c18d8-4735-4a1f-9b04-23342d7d6200/public','https://static.independent.co.uk/2024/12/12/09/11134054-e55d624c-b16d-47f2-afac-5031ba738f35.jpg', 'https://api.photon.aremedia.net.au/wp-content/uploads/sites/12/media/51049/passionfruitlimepineapplefrozenloaf-1500.jpg?fit=1500%2C1000']
        },
        {
            name:'Decadent Cookies & Cream',
            details:'Decadent Cookies & Cream is typically a rich, indulgent dessert flavor that blends creamy vanilla or sweet cream base with chunks of chocolate cookies (usually Oreo-style). It’s a popular flavor found in ice creams, milkshakes, cakes, and even gourmet protein bars or desserts',
            imgList:['https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/60a8e16b-64f1-4c98-8f6f-4527c4758a00/public','https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/2019/iStock-1146055973.jpg.jpeg?itok=b5abgvMX','https://img.freepik.com/premium-photo/decadent-cookies-cream-ice-cream-sundae-bowl-photo_960396-993269.jpg']
        },
        {
            name:'Exotic Mango Delight',
            details:'Exotic Mango Delight" typically refers to a sweet, often a dessert or a variation of a traditional Indian sweet, like Mysore Pak, featuring mango pulp and flavor, and can also refer to a mango-based fruit beverage or even a cake',
            imgList:['https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/261b90aa-9887-4462-b89f-37ff34dc6600/publicContain','https://bakewithshivesh.com/wp-content/uploads/2021/04/IMG_8765-scaled.jpg','https://bakewithshivesh.com/wp-content/uploads/2023/07/unnamed-4.jpg']
        },
        {
            img:'https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/d633c139-dc98-462c-2aa3-de86f4d1ea00/publicContain',
            name:'Gourmet Coffee Bliss',
            details:"Gourmet Coffee Bliss is a rich, velvety blend that captures the deep aroma and bold taste of premium roasted coffee beans. Infused with subtle hints of creamy vanilla and dark chocolate, this flavor delivers a perfectly balanced coffee experience — smooth, slightly sweet, and unmistakably decadent.Whether you're a coffee lover or just seeking a cozy, comforting treat, Gourmet Coffee Bliss brings the warmth of your favorite café straight to your taste buds",
            imgList:['https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/d633c139-dc98-462c-2aa3-de86f4d1ea00/publicContain','https://images.indianexpress.com/2024/04/Fresh-mango-and-bluberry-cobbler-at-Woodside-Inn.jpeg','https://img.freepik.com/free-photo/high-angle-delicious-ice-cream_23-2150735544.jpg']
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
                        <div class="bg-cover flex flex-col justify-end p-5 shrink-0 rounded-5 outline  bg-center mr-5 w-[360px] h-[448px]" style="font-size: 25px; color: #fff;" :style="{ backgroundImage: `url(${item.imgList[0]})`}">{{ item.name }}</div>
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
