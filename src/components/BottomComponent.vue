<script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>


<template>
    <div class="flex flex-col md:flex-row w-[178vw] md:w-[100vw] justify-evenly items-right md:items-center rounded-tr-lg rounded-tl-lg mr-5 bg-black text-white pb-2">
        <div class="flex-1 p-3 h-[240px]"> 
            <h2>Glace</h2>
            <h5 class="text-2xl md:text-base">Create your online ice cream experience with glace, offering a delightful selection of flavors just a click away!</h5>
            <ul class="flex text-2xl md:text-base flex-col justify-start">
                <li>+ 123 456 789</li>
                <li>support@Glace.com</li>
                <li>123 Ice Cream Blvd, CO, USA</li>
            </ul>
        </div>
        <div class="flex-1 -mt-[30px] md:mt-0 justify-center p-3 h-[240px]">
            <h3>Quick Links</h3>
            <ul class="flex flex-row justify-around items-center md:flex-col text-2xl">
                <router-link class="linkItem" to="/menu">Menu</router-link>
                <router-link class="linkItem" to="/blog">Blog</router-link>
                <router-link class="linkItem" to="/about">About</router-link>
                <router-link class="linkItem" to="/contact">Contact</router-link>
            </ul>
        </div>
        <div class="flex-1 -mt-[30px] md:mt-0 justify-center h-[240px] p-3"> 
            <h3>Careers</h3>
            <ul class="text-2xl">
                <li>Join Our Team</li>
            </ul>
        </div>
        <div class="flex-1 -mt-[30px] md:mt-0 h-[240px] p-3"> 
            <div> 
                <h3>Follow Us</h3>
                <div class="flex text-5xl md:text-base w-[80vw] md:w-[120px] text-2xl justify-between items-center"> 
                    <a href="https://www.instagram.com"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
                    <a href="https://x.com/?lang=en"><font-awesome-icon :icon="['fab', 'x-twitter']" /></a>
                    <a href="https://www.youtube.com"><font-awesome-icon :icon="['fab', 'youtube']" /></a>
                    <a href="https://www.facebook.com"><font-awesome-icon :icon="['fab', 'facebook']" /></a>    
                </div>
            </div>
        </div>
    </div>
</template>