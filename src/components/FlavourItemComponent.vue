<script setup> 
import { useCartStore } from '@/stores/cart';
import { ref } from 'vue';
import { computed } from 'vue';
const cart = useCartStore()
const flavorItem = computed(() => cart.item)



</script>


<template>
    <div v-if="Object.keys(cart.item).length" style="margin-top: 100px;"> 
        <div class="flex flex-col justify-center items-center items-start m-2"> 
            <h1>{{ flavorItem.name }}</h1>
            <div class="h-screen flex flex-col md:flex-row justify-top border md:h-[80vh] items-center p-2">
                <div class="md:max-w-[40%] m-3 p-4 shadow-2xl rounded-2xl"><p class="md:text-[20px]">{{ flavorItem.details }}</p></div>
                <div class="flex overflow-x-auto space-x-4 p-4 w-full max-w-[690px] h-[40vh] md:h-[66vh]">
                    <ul class="flex flex-row">
                        <li v-for="(eachImage, index) in flavorItem.imgList" :key="index" class="shrink-0">
                        <img
                            class="md:w-[640px] md:h-[65vh] w-[79vw] h-[37vh] rounded-[30px] mr-1 p-1"
                            :src="eachImage"
                            :alt="`image-${index}`"
                        />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>