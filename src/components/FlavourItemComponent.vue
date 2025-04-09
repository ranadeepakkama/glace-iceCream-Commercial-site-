<script setup> 
import { useCartStore } from '@/stores/cart';
import { computed } from 'vue';
const cart = useCartStore()
const flavorItem = computed(() => cart.item)
</script>


<template>
    <div v-if="Object.keys(cart.item).length" style="margin-top: 100px;">
        <div class="flex flex-col justify-center items-center items-start m-2"> 
            <h1>{{ flavorItem.name }}</h1>
            <div class="border flex flex-col md:flex-row justify-between items-center p-3">
                <div class="md:max-w-[40%] m-3 p-4 h-[100%] shadow-2xl rounded-2xl"><p class="md:text-[20px]">{{ flavorItem.details }}</p></div>
                <div><img class="flex-grow-2 md:rounded-l-[30px] rounded-[30px]" :src="flavorItem.img" :alt="flavorItem.name"/></div>
            </div>
            
        </div>
    </div>
</template>