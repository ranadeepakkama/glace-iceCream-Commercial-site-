<script setup>
    import {auth} from '../components/Auth'
    import {signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword} from 'firebase/auth'
    import {useRouter} from 'vue-router'
    import {ref} from 'vue'
    const router = useRouter()    
    
    const inputUser = ref(null)
    const inputPassword = ref(null)
    const error = ref(null)

    const onClickSignin = async () => {
        try{
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth,provider)
            console.log(result.user)
            router.push("/home")
        }catch(e){
            console.log(e.message)
        }
    }

    const onSubmit = async (e) => {
        try{
            const result = await signInWithEmailAndPassword(auth,inputUser.value,inputPassword.value)
            console.log(result.user)
        }catch(e){
            error.value = e.message
        }
    }

</script>

<template>
    <div>
        <div class="max-w-md mx-auto p-4 bg-teal-100 rounded-lg shadow-lg  border-gray-250 flex flex-col justify-center items-center text-center h-90 mt-5">
            <div> 
                <form @submit.prevent="onSubmit">
                    <div class="mb-3">
                        <input id="name" v-model="inputUser"  class="outline p-1 rounded-1" required type="text" placeholder="Enter Name"/>
                    </div>
                    <div class="mb-3">
                        <input id="name" v-model="inputPassword" class="outline p-1 rounded-1" required type="password" placeholder="Enter Password"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <p>{{ error }}</p>
                </form>
            </div>
            <div >
                <h1 class="text-sm mt-4">Sign with Google</h1><br/>
                <button class="btn btn-outline-primary spacing-0" @click="onClickSignin"><i class="fa-brands fa-google text-3xl"></i></button> 
            </div>
            
        </div>
    </div>
</template>