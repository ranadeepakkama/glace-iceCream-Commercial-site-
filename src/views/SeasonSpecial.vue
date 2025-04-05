<script setup>
    import { ref } from 'vue';
    const seasonSpecialList = ref([
        {img:'https://i.pinimg.com/736x/54/db/eb/54dbeba1d905364ea71ced2d6fb63444.jpg',
        name:'Mango-The Undisputed King Of Summer',
        decription:'No summer in India is complete without mangoes, and the same goes for ice creams. Whether it’s Alphonso Mango, Kesar Mango, or Mango Delight, this flavor remains the top choice for customers seeking a fruity and nostalgic treat.',
        },
        {img:'https://i.pinimg.com/736x/92/0e/67/920e67e56ca96df881680ae8d03f92c4.jpg',
        name:'Tender Coconut-Refreshing & Naturally Sweet',
        decription:'With the rising trend of health-conscious desserts, tender coconut ice cream has gained immense popularity. Its mild sweetness and creamy texture make it a perfect summer indulgence.'
        },

        {img:'https://i.pinimg.com/736x/00/64/dd/0064dd8cf7e94cda0bf76712fc392166.jpg',
        name:'Choco Brownie Fudge-For The Chocolate Lovers',
        decription:'Chocolate-based ice creams remain a crowd favorite, but in 2025, expect to see a rise in Choco Brownie Fudge, which combines gooey brownie chunks with rich chocolate fudge sauce.'},
        
        {img:'https://i.pinimg.com/736x/87/0a/ee/870aee9589eebe8eb7b427a25f926000.jpg',
        name:'Kala Jamun – A Nostalgic & Unique Flavor',
        decription:'The tangy-sweet taste of Kala Jamun ice cream is winning hearts, bringing back childhood memories of enjoying juicy black plums during peak summer.'    
        },
        
        {img:'https://i.pinimg.com/736x/b3/31/30/b331303270efa114dccbe62cc7a44ba1.jpg',
        name:'Rose Gulkand-A Floral Delight',
        decription:'With the demand for floral and Ayurvedic-inspired desserts rising, Rose Gulkand ice cream is expected to be a trending flavor in 2025. The combination of rose petals and gulkand gives a cooling effect, perfect for summer.'
        },
        
        {img:'https://i.pinimg.com/736x/77/49/43/7749433819d6ce3d76f6a3bcfa18b1d9.jpg',
        name:'Pistachio Almond-The Premium Choice',
        decription:'Consumers looking for nutty, rich, and creamy ice creams continue to favor Pistachio Almond. This flavor offers the perfect balance of crunch and smooth texture, making it a premium choice.'
        },
        ])
</script>


<template>
    <div class="p-2" style="margin-top: 130px;"> 
        <h1>Best-Selling Ice Cream Flavors During <span class="text-sky-400">Summer</span> In India 2025</h1>
        <ul class="p-1 grid md:grid-cols-2 gap-2">
            <li class="p-2" v-for="items in seasonSpecialList" :key="items.name">
                <div class="w-full h-[450px] bg-cover bg-center bg-no-repeat rounded-2xl flex flex-col justify-end items-start pl-1 md:text-2xl text-gray-100"
                :style="{ backgroundImage: `url(${items.img})` }">
                <p class="hidden md:block text-base p-1 rounded text-bold">{{ items.decription }}</p>
                <h3 class="md:hidden p-1 bg-black/30 rounded text-bold">{{ items.name }}</h3>
                </div>
            </li>
        </ul>
    </div>
</template>