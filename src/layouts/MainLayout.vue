<template>
  123
  <div>
    <h1>Hello world</h1>
<!--      <div>Account : {{ address }}</div>-->
<!--      <div>NetworkId : {{ networkId }}</div>-->
  </div>

</template>

<script>
import { defineComponent, toRefs } from 'vue';
//import {account,loadAccount} from "src/utils";


export default defineComponent({
  name: 'MainLayout',
  async mounted() {
    //await loadAccount();
  },
  components: {

  },

  async setup () {

    // const {
    //   address,
    //   networkId
    // } = toRefs(account);
    //
    // return {
    //   address,
    //   networkId
    // };
  }
})
</script>
