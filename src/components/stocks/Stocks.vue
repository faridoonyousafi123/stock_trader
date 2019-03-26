<template>
    <div>
        <app-stock :stock="stock" v-for="stock in stocks" :key="stock.id">

        </app-stock>
    </div>
</template>

<script>
import Stock from './Stock.vue'
export default {
    components: {
        appStock: Stock
    },
    computed: {
        stocks() {
            return this.$store.getters.stocks;
        }
    }
}
</script>

<style>

</style>
