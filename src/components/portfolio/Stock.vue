<template>

        <div class="col-sm-6 col-md-4">
            <div class="panel panel-danger">
                <div class="panel-heading">
                    <h3 class="panel-title">
                        {{ stock.name }}
                        <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }} )</small>
                    </h3>
                </div>
                <div class="panel-body">
                    <div class="pull-left">
                        <input type="number" 
                         class="form-control"
                         :class="{danger: insufficientQuantity}"
                         placeholder="Quantity"
                         v-model.number="quantity">
                    </div>
                    <div class="pull-right">
                        <button class="btn btn-sm btn-danger"
                        @click="sellStock()"
                        :disabled="insufficientQuantity || checkQuantity"
                        >
                        {{ insufficientQuantity ? 'Not Available More' : 'Sell'}}
                        </button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    methods: {
        ...mapActions({
            sellOrderStock: 'sellStock'
        }),

        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity
            };
            console.log(order);
            this.sellOrderStock(order);
            this.quantity = 0;

        }
    },
    computed: {
        checkQuantity() {
            return this.quantity <= 0
        },
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    }
}
</script>

<style>

</style>

