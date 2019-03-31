<template>
   
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link to="/" class="navbar-brand">Stock Tarder</router-link>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">

       
        <router-link activeClass="active"  tag="li" to="/portfolio">
        <a> Portfolio </a>
        </router-link>

        <router-link activeClass="active" tag="li"  to="/stocks">
        <a> Stocks </a>
        </router-link>
        
         
      </ul>

      <strong 
          class="navbar-text navbar-right"
          :class="{lowfund: isLowFund, highfund: !isLowFund}"
          >
          {{isLowFund ? 'Low Funds :' : 'Funds :'}} 
          {{ funds | currency }}
      </strong>
      
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click="endDay()">End Day</a></li>
        <li class="dropdown"
          :class="{open: isDropDownOpen}"
          @click="isDropDownOpen = !isDropDownOpen"
        >
          <a 
          href="#"
           class="dropdown-toggle" 
           data-toggle="dropdown" 
           role="button" 
           aria-haspopup="true" 
           
           aria-expanded="false"
           >Save & Load <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click="saveData">Save Data</a></li>
            <li><a href="#" @click="loadData">Load Data</a></li>
            
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
import {mapActions} from 'vuex';
export default {
     data() {
      return {
        isDropDownOpen :false
      }
    },
  computed: {
 
    funds() {
      return this.$store.getters.funds;
    },
    isLowFund() {
      return this.funds < 3000
    }
    
  },

  methods :{
    ...mapActions ([
      'randomizeStocks'
    ]),
    endDay() {
      this.randomizeStocks();
    },
    saveData(){
      const data = {
        funds : this.$store.getters.funds,
        stockPortfolio : this.$store.getters.stockPortfolio,
        stocks : this.$store.getters.stocks
      };
      this.$http.put('data.json',data)
    },
    loadData() {
        
    }
  }
}
</script>

<style>
  .lowfund {
    color: #ff8181 !important;
  }
  .highfund{
    color:#63a963 !important;
  }
</style>
