<script setup>
import { ref } from 'vue';

const IceCreamCupMenu = ref([
    {item: 'Ice Cream Vanilla',amount: '$ 10.00'},
    {item:'Ice Cream Chocolate',amount:'$ 12.00'},
    {item:'Ice Cream Green Tea',amount:'$ 14.00'},
    {item:'Ice Cream Strawbery',amount:'$ 17.00'},
    {item:'Ice Cream Mix',amount:'$ 17.00'},
])

const iceCreamConeMenu = ref([
    {item:'cone Strawbery',amount:'$ 6.00'},
    {item:'Cone Vanilla',amount:'$ 5.00'},
    {item:'Cone Chocolate',amount:'$ 6.50'}
])
const IceCreamBallMenu = ref([
    {item:'2 Variant Ice Cream',amount:'$ 15.00'},
    {item: '3 Variant Ice Cream',amount:'$ 20.00'},
    {item:'4 Variant Ice Cream', amount: '$ 25.00'}
])
</script>
<style scoped>
.cart {
  width: 100%;
  padding: 10px;
  border-radius: 7px;
}

@media screen and (min-width: 764px) {
  .cart {
    margin-left: 160px;
    width: 60%;
    margin-bottom: 5px;
  }
}


img{
    border-radius: 14px;
    display: hidden;
}
ul{
    font-weight: bold;
}
li{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
h2{
    font-family: Arial, Helvetica, sans-serif;
}
</style>



<template>
    <div class="w-full md:h-full h-[140vh]">
        <div class="h-full bg-cover bg-center bg-no-repeat" style="background-image: url('https://cdn.vectorstock.com/i/1000v/65/16/dessert-background-with-ice-cream-and-frame-vector-42516516.jpg');"> 
            
                <div class="p-3">
                    <h1>Ice Cream Menu</h1>
                </div>
                <div class="flex flex-row justify-between cart items-center md:ml-[130px] shadow-2xl"> 
                    <div> 
                        <h2>Ice Cream Cup Menu</h2>
                        <ul>
                            <li class="flex flex-row justify-between items-center" v-for="(eachItem,index) in IceCreamCupMenu" :key="index"><p>{{ eachItem.item }}</p> <p>{{ eachItem.amount }}</p></li>
                        </ul>
                    </div>
                    <div>
                        <img class="hidden md:block" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGx4ypc6fREuYwYMgrAJFUef7BPkkI9eWzgw&s" alt="iceCreamCup">
                    </div>
                </div>
        
            
            <div class="flex flex-row justify-between items-center cart md:ml-[130px] shadow-2xl"> 
                <div>
                    <img class="md:w-[230px] h-[230px] block p-2 " src="https://cakewhiz.com/wp-content/uploads/2023/02/Easy-Ice-Cream-Cone-Cupcakes-With-Cake-Mix.jpg" alt="iceCreamCone">
                </div>
                <div> 
                    <h2>Ice Cream Cone menu</h2>
                    <ul>
                        <li v-for="(eachItem,index) in iceCreamConeMenu" :key="index">
                            <p>{{ eachItem.item }}</p> 
                            <p>{{ eachItem.amount }}</p>     
                        </li>
                    </ul>
                </div>
            </div>
            <div> 
                <div class="flex flex-row justify-between items-center cart md:ml-[130px] shadow-2xl"> 
                    <div> 
                        <h2>Ice Cream Ball menu</h2>
                        <ul>
                            <li v-for="(eachItem,index) in IceCreamBallMenu" :key="index">
                                <p>{{ eachItem.item }}</p>
                                <p>{{ eachItem.amount }}</p>      
                            </li>
                        </ul>
                    </div>
    
                    <div>
                        <img class="w-[230px] h-[230px] p-2" src="https://market-resized.envatousercontent.com/photodune.net/EVA/TRX/ec/3e/35/ba/03/v1_E10/E107J0QN.jpg?auto=format&q=94&mark=https%3A%2F%2Fassets.market-storefront.envato-static.com%2Fwatermarks%2Fphoto-260724.png&opacity=0.2&cf_fit=contain&w=590&h=709&s=279b3703dc40d7541bd96c10a68abeb46c1004aa9436c6e43c67727c98aff7af" alt="iceCreamBall">
                    </div>
                </div>
            </div>
        </div>
    </div>  
</template>