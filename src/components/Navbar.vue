<script setup>
  import { onAuthStateChanged, signOut } from "firebase/auth";
  import { auth } from "@/components/Auth"; 
  import { ref, computed, onMounted, onUnmounted } from "vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  const clicked = ref(true);
  const user = ref(null);

  // ✅ Make userName reactive
  const userName = computed(() => user.value?.displayName || "Guest");

  onMounted(() => {
    const unsubscribe = onAuthStateChanged(auth, (person) => {
      user.value = person || null;
    });
    
    onUnmounted(() => unsubscribe());
  });

  const onClickLogin = () => {
    clicked.value = false;
    router.push("/login");
  };

  const onClickLogout = async () => {
    try {
      await signOut(auth);
      console.log("User is logged out");
      clicked.value = true;
      router.push("/login");
    } catch (e) {
      console.log(e.message);
    }
  };
</script>

<style>
.linkItem {
  color: white;
  text-decoration: none;
}
</style>

<template>
  <nav class="navbar navbar-dark bg-dark fixed-top mb-1">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand font-bold ml-2" style="font-size: 30px;">Glace</router-link>
      <div class="flex justify-between items-center pl-3 pr-1" style="width: 130px;"> 
        <div style="color: #fff;"> 
          <p class="mt-2 ml-3 font-bold" style="color: #fff; font-size: 25px;">
            {{ userName?.[0] }}
          </p>
        </div>
        
        <!-- Navbar Toggle Button -->
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5> 
            <button type="button" class="btn-close btn-close-white" 
              data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="pt-4"> 
            <div> 
            <!-- ✅ Fix userName display -->
            <h5 class="ml-4"><span class="font-bold">User:</span> {{ userName }}</h5>
            </div>

            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <router-link class="linkItem" to="/">Home</router-link>
                </li>
                <li class="nav-item flex flex-col">
                  <router-link class="linkItem" to="/menu">Menu</router-link>
                  <router-link class="linkItem" to="/blog">Blog</router-link>
                  <router-link class="linkItem" to="/about">About</router-link>
                  <router-link class="linkItem" to="/contact">Contact</router-link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>

              <!-- Search Form -->
              <form class="d-flex mt-3" role="search">
                <input class="form-control me-2" type="search" placeholder="Search">
                <button class="btn btn-success" type="submit">Search</button>
              </form>

              <!-- Login / Logout Buttons -->
              <div class="mt-3">
                <router-link to="/login">
                  <button class="btn btn-outline-light w-100" v-if="!user" 
                    @click="onClickLogin" data-bs-dismiss="offcanvas">
                    Login
                  </button>
                </router-link>
                <button class="btn btn-danger w-100 mt-2" v-if="user" 
                  @click="onClickLogout" data-bs-dismiss="offcanvas">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>
