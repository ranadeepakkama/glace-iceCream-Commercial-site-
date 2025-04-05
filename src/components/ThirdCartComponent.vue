<script setup>

    const creamFlavour = () => {

    }
</script>

<template>
    <div class="m-5">
        <div class="m-5 hidden md:block">
            <ul class="flex justify-between items-center">
                <li><router-link to="/iceCreamFlavour"><button class="btn btn-outline-info">Ice Cream Flavors</button></router-link></li>
                <li><router-link to="/customOrders"><button class="btn btn-outline-info">Custom Orders</button></router-link></li>
                <li><router-link to="/deleveries"><button class="btn btn-outline-info">Pickup or Delivery</button></router-link></li>
                <li><router-link to="/seasonalSpecials"><button class="btn btn-outline-info">Seasonal Specials</button></router-link></li>
                <li><router-link to="/communityEvent"><button class="btn btn-outline-info">Community Event</button></router-link></li>
            </ul>
        </div>
        <div class="md:p-5 w-[160vw] md:w-[100vw] cart1 flex flex-col md:flex-row justify-center items-center flex-1">
            <div id="carouselExampleCaptions" class="carousel slide w-[100%] mr-3 pr-3 md:w-[50%] h-[490px] ">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div class="carousel-inner rounded-5">
                    <div class="carousel-item active">
                        <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/d7de9ba7-7957-4885-c344-e7b926816500/public" class="d-block w-100 h-[490px]" alt="img-1">
                    <div class="bg-black/20 rounded carousel-caption d-none d-md-block">
                        <h5>Delight in a Flavorful Experience</h5>
                        <p>Glace offers an exquisite array of artisanal ice cream, crafted with premium ingredients to ensure each scoop is a delightful experience. Explore our menu and discover your next favorite flavor.</p>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/1c05d169-ec1f-4c09-f970-a98be7f48000/public" class="d-block w-100 h-[490px]" alt="img-2">
                    <div class="bg-black/20 rounded  carousel-caption d-none d-md-block">
                        <h5>Sweeten Your Moments with Glace</h5>
                        <p>Whether you're celebrating a special occasion or simply treating yourself, our dedicated service ensures that every moment is sweeter with Glace.</p>
                    </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="cart2 w-[110%] md:w-[100%] flex-1 p-5 mr-5 md:mr-0">
                <div> 
                    <h1>Elevate Your Dessert Experience with <span class="text-sky-300">Glace</span></h1>
                </div>
                <div class="flex justify-between items-center p-2 bg-sky-300 rounded-4" style="color: #fff;">
                    <img class="w-[257px] h-[177px] rounded-5" src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/83293a85-8193-47b1-ffa0-3e6a0bcabe00/public" alt="cone-imag"/>
                    <p class="p-4 text-xl text-start">Join the Glace community today and indulge in a variety of flavors tailored to elevate your dessert moments. With our commitment to quality and passion for phenomenal ice cream, every order is a step towards sweet satisfaction.</p>
                </div>
            </div>
        </div>
    </div>
    
</template>