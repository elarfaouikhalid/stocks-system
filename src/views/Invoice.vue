<template lang="">
    <div class="page">
      <!-- Navbar -->
      <Navbar />
      <div class="page-wrapper">
        <!-- Page header -->
        <div class="page-header d-print-none">
          <div class="container-xl">
            <div class="row g-2 align-items-center">
              <div class="col">
                <h2 class="page-title">
                  Invoice
                </h2>
              </div>
              <!-- Page title actions -->
              <div class="col-auto ms-auto d-print-none">
                <button type="button" class="btn btn-primary" onclick="javascript:window.print();">
                  <!-- Download SVG icon from http://tabler-icons.io/i/printer -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" /><path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" /><path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" /></svg>
                  Print Invoice
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Page body -->
        <div class="page-body">
          <div class="container-xl">
            <div class="card card-lg">
              <div class="card-body">
                <div class="row">
                  <div class="col-6">
                    <p class="h3">Company</p>
                    <address>
                      Street Address<br>
                      State, City<br>
                      Region, Postal Code<br>
                      ltd@example.com
                    </address>
                  </div>
                  <div class="col-6 text-end">
                    <p class="h3">Client</p>
                    <address>
                      Street Address<br>
                      State, City<br>
                      Region, Postal Code<br>
                      ctr@example.com
                    </address>
                  </div>
                  <div class="col-12 my-5">
                    <h1>Invoice INV/001/15</h1>
                  </div>
                </div>
                <table class="table table-transparent table-responsive">
                  <thead>
                    <tr>
                      <th class="text-center" style="width: 1%"></th>
                      <th>Product</th>
                      <th class="text-center" style="width: 1%">Qnt</th>
                      <th class="text-end" style="width: 1%">Unit</th>
                      <th class="text-end" style="width: 1%">Amount</th>
                    </tr>
                  </thead>
                  <tr>
                    <td class="text-center">1</td>
                    <td>
                      <p class="strong mb-1">Logo Creation</p>
                      <div class="text-muted">Logo and business cards design</div>
                    </td>
                    <td class="text-center">
                      1
                    </td>
                    <td class="text-end">$1.800,00</td>
                    <td class="text-end">$1.800,00</td>
                  </tr>
                  <tr>
                    <td class="text-center">2</td>
                    <td>
                      <p class="strong mb-1">Online Store Design &amp; Development</p>
                      <div class="text-muted">Design/Development for all popular modern browsers</div>
                    </td>
                    <td class="text-center">
                      1
                    </td>
                    <td class="text-end">$20.000,00</td>
                    <td class="text-end">$20.000,00</td>
                  </tr>
                  <tr>
                    <td class="text-center">3</td>
                    <td>
                      <p class="strong mb-1">App Design</p>
                      <div class="text-muted">Promotional mobile application</div>
                    </td>
                    <td class="text-center">
                      1
                    </td>
                    <td class="text-end">$3.200,00</td>
                    <td class="text-end">$3.200,00</td>
                  </tr>
                  <tr>
                    <td colspan="4" class="strong text-end">Subtotal</td>
                    <td class="text-end">$25.000,00</td>
                  </tr>
                  <tr>
                    <td colspan="4" class="strong text-end">Vat Rate</td>
                    <td class="text-end">20%</td>
                  </tr>
                  <tr>
                    <td colspan="4" class="strong text-end">Vat Due</td>
                    <td class="text-end">$5.000,00</td>
                  </tr>
                  <tr>
                    <td colspan="4" class="font-weight-bold text-uppercase text-end">Total Due</td>
                    <td class="font-weight-bold text-end">$30.000,00</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal modal-blur fade" id="createInvoiceModal" tabindex="-1" role="dialog" aria-hidden="true" :class="{ show: showInvoiceModal }">
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create an Invoice for Customer #{{ GetcustomerName }}</h5>
            <router-link type="button" class="btn-close" :to="{name: 'Customers'}">
          </router-link>
          </div>
          <form @submit.prevent="CreateCustomerInvoice()" enctype="multipart/form-data">
          <div class="modal-body">
          <div class="row">
            <!-- <div v-if="error" class="alert alert-danger">{{ error }}</div> -->
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Product Name</label>
                <div class="tags-input">
                  <div class="table-container" v-if="showTableProducts">
                    <table class="table">
                        <thead>
                          <tr>
                            <th>Product Name</th>
                            <th>price</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(product, index) in invoiceProducts" :key="product.id">
                            <td>{{ product.name }}</td>
                            <td>{{ product.price }}</td>
                            <td>
                              <input class="form-control" type="number" @input="IncremntQuantity($event.target.value, product.price, product)" min="1" max="100" step="1" value="1" />
                            </td>
                            <td>
                              <button class="btn btn-danger" @click="deleteProduct(product, index)">&times;</button>
                            </td> 
                          </tr>
                        </tbody>
                      </table>
                  </div>
                  <!-- <div v-for="(product, index) in product_name" :key="index" class="tag">
                    {{ product.name }}
                    <button class="delete-btn" @click="removeTag(index)">&times;</button>
                  </div> -->
                  <input class="form-control" type="text" v-model="dataSearch" name="dataSearch" id="name" placeholder="Search..." @input="handleInput" @keydown.enter.prevent="addTag" />
                  <ul v-if="showSuggestions">
                    <li v-for="suggestion in products" :key="suggestion" @click="addTag(suggestion, 1)">
                      {{ suggestion.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Customer Name</label>
                <input type="text" v-model="invoice.customer_id" class="form-control" name="example-text-input name" id="name" placeholder="name" readonly>
              </div>
            </div>
            <div class="col-lg-12">
              <div>
                <label class="form-label">Total Amount $</label>
                <input type="text" class="form-control" name="example-text-input name" id="name" v-model="TotalAmount" readonly>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <router-link class="btn btn-link link-danger" :to="{name: 'Customers'}">
            Cancel
          </router-link>
          <button type="submit" class="btn btn-success ms-auto">
            <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
            Create
          </button>
        </div>
        </form>
        </div>
      </div>
    </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
    components: { Navbar },
    data() {
        return {
            showInvoiceModal: true,
            invoice: {
              'customer_id': '',
              // 'product_id': [],
              'order_id': '',
              'total_amount': 0
            },
            // searchResults: [],
            dataSearch: '',
            showSuggestions: false,
            showTableProducts: false,
            tags: [],
            tagInput: '',
            product_name: [],
            product_price: [],
            invoiceProducts: [],
            invoiceData: []
        }
    },
    methods: {
        ...mapActions({
            'searchProducts': 'invoice/searchProducts',
            'CreateInvoice': 'invoice/createInvoice'
        }),
        handleInput() {
          if(this.dataSearch) {
            this.showSuggestions = true;
          }
        },
        searchForProducts() {
            try {
                if(this.dataSearch) {
                  console.log(this.dataSearch)
                  this.searchProducts(this.dataSearch);
                }
            } catch (error) {
                console.error(error);
            }
        },
        addTag(product, quantity) {
          // console.log(this.product_name.some(p => p.id === product.id))
          if (!this.invoiceProducts.some(p => p.id === product.id)) {
            // this.product_name.push(product);
            // this.invoice.product_id.push(product.id)
            // this.product_price.push(product.price)
            this.invoiceProducts.push({
              id: product.id,
              price: product.price,
              name: product.name,
              quantity: quantity,
              sum: product.price
            });
            
            // console.log(this.invoiceProducts);
            this.invoiceData.push({
              customer_id: this.customerId,
              order_id: this.OrderId,
              total_amount: product.price
            });
            this.showSuggestions = false;
            this.dataSearch = '';
            this.invoice.total_amount += parseFloat(product.price);
          }
          this.showTableProducts= true
          console.log(this.invoiceData)
          // console.log(this.invoice.customer_id)
        },

        removeTag(index) {
          
        },
        IncremntQuantity(quantity, price, product) {
          const existingProduct = this.invoiceProducts.find(p => p.id === product.id);
          if(quantity >= 0) {
            if (existingProduct) {
              existingProduct.quantity = quantity
              const oldSum = existingProduct.sum;
              const newSum = quantity * price;
              this.invoice.total_amount -= oldSum; // subtract the old sum from the total amount
              existingProduct.sum = newSum; // update the sum of the existing product
              this.invoice.total_amount += newSum; // add the new sum to the total amount
            } else {
              const sum = quantity * price;
              this.invoice.total_amount -= price
              this.invoiceProducts.push({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: quantity,
                sum: sum
              });
              this.invoice.total_amount += sum;  // add the sum to the total amount
            }
          console.log(this.invoice.total_amount.toFixed(2));
        }
          // console.log("test");
      },
        async CreateCustomerInvoice() {
          const invoiceData = {
            customer_id: this.customerId,
            order_id: this.OrderId,
            total_amount: this.invoice.total_amount
          };
          
          const productData = this.invoiceProducts.map(product => ({
            product_id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity,
            sum: product.sum
          }));
          console.log(productData)
          const res =  await this.CreateInvoice({ InvoiceData: invoiceData, ProductData: productData });
          this.showInvoiceModal = false;
        },
        deleteProduct(product, index) {
          const existingProduct = this.invoiceProducts.find(p => p.id === product.id);
          // if (existingProduct) {
            this.invoice.total_amount -= existingProduct.sum;
            this.invoiceProducts.splice(index, 1);
          // } else {
          //   this.invoice.total_amount -= product.price;
          //   console.log("test");
          // }
          // this.product_name.splice(index, 1);
          // console.log(this.invoiceProducts);
        }

    },
    computed: {
        ...mapGetters({
           'customers': 'customer/customers',
           'GetorderId': 'order/getorderId',
           'GetcustomerName': 'customer/getcustomerName',
           'GetcustomerId': 'customer/getcustomerId',
           'products': 'invoice/SearchResult', 
           'GetOrderId': 'order/getorderId', 
        }),
        TotalAmount() {
          return this.invoice.total_amount.toFixed(2);
        },
        customerId() {
          return this.GetcustomerId
        },
        OrderId() {
          return this.GetOrderId
        }
    },
    watch: {
      // dataSearch: {
      //   handler: async function() {
      //     try {
      //       this.searchForProducts()
      //     } catch (error) {
      //       console.error(error);
      //     }
      //   }
      // }
      dataSearch() {
        // Call a method to update the search suggestions based on the new query
          this.searchForProducts();
      },
    }
}
</script>
<style scoped>
:root {
--text-color: #fff; /* set the default text color to black */
}

/* set the text color to white in dark mode */

td {
    padding: 0.75rem 0.75rem;
    background-color: var(--tblr-table-bg);
    border-bottom-width: var(--tblr-border-width);
    box-shadow: inset 0 0 0 9999px var(--tblr-table-accent-bg);
}
body {
    margin: 0;
    font-family: var(--tblr-body-font-family);
    font-size: 0.875rem;
    font-weight: var(--tblr-body-font-weight);
    line-height: var(--tblr-body-line-height);
    color: var(--tblr-body-color);
    text-align: var(--tblr-body-text-align);
    background-color: var(--tblr-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
}
.show {
  display: block;
}

ul {
  /* position: absolute; */
  top: 100%;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
}

li {
  list-style-type: none;
  padding: 10px;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

li:hover {
  background-color: #f5f5f5;
}

.active {
  background-color: #f5f5f5;
}


/* Style for the tag container */
/* .tags-input {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #ced4da;
  padding: 5px;
  border-radius: 5px;
} */

/* Style for each individual tag */
.tag {
  display: flex;
  align-items: center;
  background-color: #f1f1f1;
  color: #000;
  border-radius: 10px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: inline-block;
  font-size: 0.9rem;
}

/* Style for the delete button */
.delete-btn {
  color: #777;
  margin-left: 5px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 14px;
  line-height: 1;
  padding: 0;
}

/* Hide the delete button by default */
.tag .delete-btn {
  /* display: none; */
}

/* Show the delete button on hover */
.tag:hover .delete-btn {
  display: inline-block;
}
.table-container {
  height: 150px; /* Set the height of the container */
  overflow: auto; /* Add scrolling if the table overflows the container */
}

table {
  width: 100%;
  border-collapse: collapse;
}

.theme-dark:not(body) {
--text-color: #fff;
}

/* set the text color to black when body has the theme-dark class */
body.theme-dark {
--text-color: #fff !important;
}

/* apply the text color to all elements */
body.theme-dark * {
color: #fff;
}

body.theme-dark li {
color: #000000;
}

</style>