<template>
  <v-container>
    <v-row>
      <v-col xs='12' sm='6' offset-sm='3'>
        <h1 class="text-secondary mb-3">Orders</h1>
        <v-list
          subheader
          two-line
        >
          <v-list-item
          v-for="order in orders"
          :key="order.id"
          avatar
           >
            <template>
              <v-list-item-action>
                <v-checkbox
                :input-value="order.completed"
                @change="orderDone(order)"
                color="red"
                ></v-checkbox>
              </v-list-item-action>

              <v-list-item-content
              >
                <v-list-item-title>{{ order.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ order.phone}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                color="success"
                :to="'/product/' + order.productId"
                >Open
                </v-btn>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders:[
        {
          orderId: "test",
          name: "Maria",
          phone: "123-45-67",
          productId: '2',
          completed: false,
        }
      ]
    }
  },
  methods: {
    orderDone(order) {
      order.completed = true
    }
  }
 
  
}
</script>