<script setup> 
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const clickButton = () => {
        router.push('/iceCreamFlavour')
        console.log('button clicked')
    }
</script>

<template>
    <div class="ml-5 md:m-5  flex flex-column w-[160vw] md:w-[100vw] bg-sky-200 pt-3 pb-3 rounded-5 md:max-w-[98%]" style="color: #fff;">
        <div class="flex justify-start items-center ml-5 pl-5"> 
            <button @click="clickButton" class="btn btn-outline-primary">Our Exquisite Flavors</button>
            <h1 class="ml-5 text-black md:text-white">Crafted for Delight</h1>
        </div>
        <div class="List-carts">
            <div class="flex w-[130vw] md:max-w-[90vw] overflow-x-scroll whitespace-nowrap m-5">
                <div class="bg-cover flex flex-col justify-end p-5 shrink-0 rounded-5 outline  bg-center mr-5 w-[360px] h-[448px]" style="font-size: 25px; color: #fff; background-image: url('https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/1bc6d170-fd0a-44c7-5975-ae95ef8bba00/public');">Classic Vanilla</div>
                <div class="bg-cover flex flex-col justify-end p-5 shrink-0 rounded-5 bg-center mr-5 w-[360px]" style="font-size: 25px; color: #fff;height: 448px; background-image: url('https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/745cec36-ed18-4029-3560-071cbe606900/publicContain');">Rich Chocolate</div>
                <div class="bg-cover flex flex-col justify-end p-5 shrink-0 rounded-5 bg-center mr-5 w-[360px]" style="font-size: 25px; color: #fff; height: 448px; background-image: url('https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/090c18d8-4735-4a1f-9b04-23342d7d6200/public');">Fruity Sorbet</div>
                <div class="bg-cover flex flex-col justify-end p-5 shrink-0 rounded-5 bg-center mr-5 w-[360px]" style="font-size: 25px; color: #fff; height: 448px; background-image: url('https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/60a8e16b-64f1-4c98-8f6f-4527c4758a00/public');">Decadent Cookies & Cream</div>
                <div class="bg-cover flex flex-col justify-end p-5 shrink-0 rounded-5 bg-center mr-5 w-[360px]" style="font-size: 25px; color: #fff; height: 448px; background-image: url('https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/261b90aa-9887-4462-b89f-37ff34dc6600/publicContain');">Exotic Mango Delight</div>
                <div class="bg-cover flex flex-col justify-end p-5 shrink-0 rounded-5 bg-center mr-5 w-[360px]" style="font-size: 25px; color: #fff; height: 448px; background-image: url('https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/d633c139-dc98-462c-2aa3-de86f4d1ea00/publicContain');">Gourmet Coffee Bliss</div>
            </div>
        </div>
        <div class="pl-5 pr-1 md:max-w-[94vw] w-[150vw] text-start flex justify-end items-center md:text-end" style="font-weight: bold;"> 
            <p class="text-xl text-black md:text-white">Savor exceptional flavors at Glace, where every scoop reflects our commitment to quality and creativity.
             Your online ice cream experience is designed for effortless enjoyment,whether you're ordering for a celebration or a cozy night at home.</p>
        </div>
    </div>
</template> 
