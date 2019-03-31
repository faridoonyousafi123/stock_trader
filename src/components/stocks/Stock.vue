<template>

        <div class="col-sm-6 col-md-4">
            <div class="panel panel-success">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        {{ stock.name }}
                        <small>(Price: {{ stock.price }} )</small>
                    </h3>
                </div>
                <div class="panel-body">
                   
                    <div class="pull-left">
                         <label for="number">Quantity</label>
                        <input type="number" 
                         class="form-control"
                        :class="{danger: insufficientFunds}"
                         placeholder="Quantity"
                         v-model.number="quantity">
                    </div>
                    <div class="pull-right">
                        <button class="btn btn-sm btn-success"
                        @click="buyStock()"
                        :disabled="checkQuantity || insufficientFunds"
                        >
                        {{ insufficientFunds ? 'No More Funds' : 'Buy' }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        buyStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
           console.log(order);
            this.$store.dispatch('buyStock', order);
            this.quantity = 0;
           
            
        }
    },
    computed: {
        checkQuantity() {
            return this.quantity <= 0
        },
        funds() {
            return this.$store.getters.funds;
        },
        insufficientFunds() {
            return this.quantity * this.stock.price > this.funds;
        }

    }
}
</script>

<style scoped>
    .danger{
        border: 2px solid red;
    }
</style>
