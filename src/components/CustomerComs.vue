<template>
  <div>
    <div>
      <form @submit.prevent="onSubmit">
        <div>
          <label class="block mr-3 my-1">ID:</label>
          <input
            id="id"
            v-model="form.id"
            class="shadow appearance-none border py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label class="block mr-3 my-1">Name:</label>
          <input
            id="name"
            v-model="form.name"
            class="shadow appearance-none border py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label class="block mr-3 my-1">Total Price:</label>
          <input
            id="totalprice"
            v-model="form.totalprice"
            class="shadow appearance-none border py-1 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <button
          type="submit"
          class="my-3 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2"
        >
          Confirm
        </button>
      </form>
    </div>

    <h2>All Customers</h2>
    <ul>
      <li v-for="customer in allCustomers" :key="customer.id">
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
        class="my-3 text-gray-900 hover:text-white border border-gray-800 hover:border-red-700 hover:bg-red-700 focus:ring-2 focus:outline-none focus:border-red-700 focus:ring-red-400 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
        @click="onDelete"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    allCustomers() {
      return this.$store.getters.allCustomers
    },
  },
  data: () => ({
    form: {
      id: "",
      name: "",
      totalprice: "",
      deleteid: "",
    },
  }),
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
    },
  },
}
</script>
