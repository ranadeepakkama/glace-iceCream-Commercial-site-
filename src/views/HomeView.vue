<script setup>
    import Navbar from '@/components/Navbar.vue';
    import MainCartComponent from '@/components/MainCartComponent.vue';
    import AboutComponent from '@/components/AboutComponent.vue'
    import ThirdCartComponent from '@/components/ThirdCartComponent.vue';
    import FlavourComponent from '@/components/FlavourComponent.vue';
    import DetailsConmponent from '@/components/DetailsConmponent.vue';
    import BottomComponent from '@/components/BottomComponent.vue';
</script>


<template>
    <Navbar/>
    <div class="mt-5 w-[180%] md:w-screen">
        <MainCartComponent/>
        <AboutComponent/>
        <ThirdCartComponent/>
        <FlavourComponent/>
        <DetailsConmponent/>
        <BottomComponent/>
    </div>
</template>