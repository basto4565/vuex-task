<template>
  <div>
    <div>
      <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <ValidationProvider
            name="id"
            :rules="validationRules.id"
            v-slot="{ errors }"
          >
            <label class="block mr-3 my-1">ID:</label>
            <input
              v-model="form.id"
              class="shadow appearance-none border py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              :class="{
                    'border-red-500': errors.length > 0,
                  }"
              @keypress = "blockNonCharacters"
              maxlength="2"
              />
            <div v-if="errors.length > 0" class="errorvalidationtext-style">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
          <div>
          <ValidationProvider
            name="name"
            :rules="validationRules.name"
            v-slot="{ errors }"
          >
            <label class="block mr-3 my-1">Name:</label>
            <input
              id="name"
              v-model="form.name"
              class="shadow appearance-none border py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              :class="{
                    'border-red-500': errors.length > 0,
                  }"
              @keypress="blockNonThaiCharacters"
            />
            <div v-if="errors.length > 0" class="errorvalidationtext-style">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
          </div>

          <div>
            <ValidationProvider
            name="totalprice"
            :rules="validationRules.totalprice"
            v-slot="{ errors }"
          >
            <label class="block mr-3 my-1">Total Price:</label>
            <input
              id="totalprice"
              v-model="form.totalprice"
              class="shadow appearance-none border py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              :class="{
                    'border-red-500': errors.length > 0,
                  }"
              @keypress="blockNonCharacters" 
              />
              <div v-if="errors.length > 0" class="errorvalidationtext-style">
              {{ errors[0] }}
            </div>
          </ValidationProvider>
          </div>

          <button
            type="submit"
            class="my-3 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
          >
            Confirm
          </button>
        </form>
      </ValidationObserver>
    </div>

    <h2>All Customers</h2>
    <ul>
      <li v-for="customer in customers" :key="customer.id">
        ID: {{ customer.id }}, Name: {{ customer.name }}, Total Price:
        {{ customer.totalprice }}
      </li>
    </ul>
    <div>
      <input
        id="deleteinput"
        v-model="form.deleteid"
        class="mr-3 shadow appearance-none border py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        placeholder="กรอก ID เพื่อลบ"
      />
      <button
        class="my-2 text-gray-900 hover:text-white border border-gray-800 hover:border-red-700 hover:bg-red-700 focus:ring-2 focus:outline-none focus:border-red-700 focus:ring-red-400 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
        @click="onDelete"
      >
        Delete
      </button>
    </div>
    <hr class="my-4" />
    <h2>: ติ๊กเพื่อลบข้อมูล :</h2>
    <div>
      <ul>
        <li v-for="customer in allCustomers" :key="customer.id">
          <input type="checkbox" v-model="customer.selected" />
          ID: {{ customer.id }}, Name: {{ customer.name }}, Total Price:
          {{ customer.totalPrice }}
        </li>
      </ul>
    </div>
    <button
      class="my-2 text-gray-900 hover:text-white border border-gray-800 hover:border-red-700 hover:bg-red-700 focus:ring-2 focus:outline-none focus:border-red-700 focus:ring-red-400 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
      @click="onDelete"
    >
      Confirm
    </button>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from "vee-validate"
import scripts from "../scripts/ruleScript"
export default {
  mixins: [scripts],
  computed: {
    customers() {
      return this.$store.getters.allCustomers
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("addCustomerAction", {
        id: this.form.id,
        name: this.form.name,
        totalprice: this.form.totalprice,
      })
      this.form.id = ""
      this.form.name = ""
      this.form.totalprice = ""
    },
    onDelete() {
      this.$store.dispatch("deleteCustomerAction", this.form.deleteid)
      this.form.deleteid = ""
    },
    submitDelete() {
      const selectedCustomerIds = this.allCustomers
        .filter((customer) => customer.selected)
        .map((customer) => customer.id)
      this.$store.dispatch("deleteCustomer", selectedCustomerIds)
    },
  },
  components: { ValidationProvider, ValidationObserver },
}
</script>
<style>
.errorvalidationtext-style {
  @apply text-red-500 mt-1 text-sm;
}</style>