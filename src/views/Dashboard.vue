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
              <!-- Page pre-title -->
              
              <h2 class="page-title">
                Dashboard
              </h2>
            </div>
            <!-- Page title actions -->
            <div class="col-auto ms-auto d-print-none">
              <div class="btn-list">
                <span class="d-none d-sm-inline">
                  <router-link class="btn" :to="{name: 'Customers'}">Create Order</router-link>
                </span>
                <a href="#" class="btn btn-success d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-product">
                  <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                  Create new product
                </a>
                <a href="#" class="btn btn-primary d-none d-sm-inline-block" data-bs-toggle="modal" data-bs-target="#modal-report">
                  <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                  Create new customer
                </a>
                <a href="#" class="btn btn-primary d-sm-none btn-icon" data-bs-toggle="modal" data-bs-target="#modal-report" aria-label="Create new report">
                  <!-- Download SVG icon from http://tabler-icons.io/i/plus -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Page body -->
      <div class="page-body">
        <div class="container-xl">
          <div class="row row-deck row-cards">
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">Sales</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#">Last 7 days</a>
                          <a class="dropdown-item" href="#">Last 30 days</a>
                          <a class="dropdown-item" href="#">Last 3 months</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="h1 mb-3">75%</div>
                  <div class="d-flex mb-2">
                    <div>Conversion rate</div>
                    <div class="ms-auto">
                      <span class="text-green d-inline-flex align-items-center lh-1">
                        7% <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" /></svg>
                      </span>
                    </div>
                  </div>
                  <div class="progress progress-sm">
                    <div class="progress-bar bg-primary" style="width: 75%" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" aria-label="75% Complete">
                      <span class="visually-hidden">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">Revenue</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#">Last 7 days</a>
                          <a class="dropdown-item" href="#">Last 30 days</a>
                          <a class="dropdown-item" href="#">Last 3 months</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <div class="h1 mb-0 me-2">$4,300</div>
                    <div class="me-auto">
                      <span class="text-green d-inline-flex align-items-center lh-1">
                        8% <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" /></svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div id="chart-revenue-bg" class="chart-sm"></div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">New clients</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ dropdownText }}</a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item" :class="{active: activeItem === 7}" @click="getCustomerlast(7)">Last 7 days</a>
                          <a class="dropdown-item" :class="{active: activeItem === 30}" @click="getCustomerlast(30)">Last 30 days</a>
                          <a class="dropdown-item" href="#">Last 3 months</a>
                          <a class="dropdown-item" href="#">Custom Date</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <div class="h1 mb-3 me-2">{{ getAnalyticCustomer }}</div>
                    <div class="me-auto">
                      <span class="d-inline-flex align-items-center lh-1" :class="getclass">
                        {{ getPercentCustomer }}% <!-- Download SVG icon from http://tabler-icons.io/i/minus -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>
                      </span>
                    </div>
                  </div>
                  <line-chart ref="LineChart"></line-chart>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex align-items-center">
                    <div class="subheader">Active users</div>
                    <div class="ms-auto lh-1">
                      <div class="dropdown">
                        <a class="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Last 7 days</a>
                        <div class="dropdown-menu dropdown-menu-end">
                          <a class="dropdown-item active" href="#">Last 7 days</a>
                          <a class="dropdown-item" href="#">Last 30 days</a>
                          <a class="dropdown-item" href="#">Last 3 months</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex align-items-baseline">
                    <div class="h1 mb-3 me-2">2,986</div>
                    <div class="me-auto">
                      <span class="text-green d-inline-flex align-items-center lh-1">
                        4% <!-- Download SVG icon from http://tabler-icons.io/i/trending-up -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 17l6 -6l4 4l8 -8" /><path d="M14 7l7 0l0 7" /></svg>
                      </span>
                    </div>
                  </div>
                  <div id="chart-active-users" class="chart-sm"></div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="row row-cards">
                <div class="col-sm-6 col-lg-3">
                  <div class="card card-sm">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <span class="bg-primary text-white avatar"><!-- Download SVG icon from http://tabler-icons.io/i/currency-dollar -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" /><path d="M12 3v3m0 12v3" /></svg>
                          </span>
                        </div>
                        <div class="col">
                          <div class="font-weight-medium">
                            132 Sales
                          </div>
                          <div class="text-muted">
                            12 waiting payments
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                  <div class="card card-sm">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <span class="bg-green text-white avatar"><!-- Download SVG icon from http://tabler-icons.io/i/shopping-cart -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
                          </span>
                        </div>
                        <div class="col">
                          <div class="font-weight-medium">
                            78 Orders
                          </div>
                          <div class="text-muted">
                            32 shipped
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                  <div class="card card-sm">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <span class="bg-twitter text-white avatar"><!-- Download SVG icon from http://tabler-icons.io/i/brand-twitter -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mood-happy" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                              <path d="M9 9l.01 0"></path>
                              <path d="M15 9l.01 0"></path>
                              <path d="M8 13a4 4 0 1 0 8 0h-8"></path>
                            </svg>
                          </span>
                        </div>
                        <div class="col">
                          <div class="font-weight-medium">
                            623 Clients
                          </div>
                          <div class="text-muted">
                            16 today
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6 col-lg-3">
                  <div class="card card-sm">
                    <div class="card-body">
                      <div class="row align-items-center">
                        <div class="col-auto">
                          <span class="bg-facebook text-white avatar"><!-- Download SVG icon from http://tabler-icons.io/i/brand-facebook -->
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
                          </span>
                        </div>
                        <div class="col">
                          <div class="font-weight-medium">
                            132 Likes
                          </div>
                          <div class="text-muted">
                            21 today
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Today's Earning: $4,262.40 +5% more than yesterday</h3>
                  <div id="chart-mentions" class="chart-lg"></div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="card">
                <div class="card-body">
                  <h3 class="card-title">Locations</h3>
                  <div class="ratio ratio-21x9">
                    <div>
                      <div id="map-world" class="w-100 h-100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Customers</h3>
                </div>
                <div class="card-body border-bottom py-3">
                  <div class="d-flex">
                    <div class="text-muted">
                      Show
                      <div class="mx-2 d-inline-block">
                        <input type="text" class="form-control form-control-sm" value="8" size="3" aria-label="Invoices count">
                      </div>
                      entries
                    </div>
                    <div class="ms-auto text-muted">
                      Search:
                      <div class="ms-2 d-inline-block">
                        <input type="text" class="form-control form-control-sm" aria-label="Search invoice">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table card-table table-vcenter text-nowrap datatable">
                    <thead>
                      <tr>
                        <th class="w-1"><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select all invoices"></th>
                        <th>Name</th>
                        <th>Quantiy</th>
                        <th>Price</th>
                        <th>Cost</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                        <td><span class="text-muted">001401</span></td>
                        <td><a href="invoice.html" class="text-reset" tabindex="-1">Design Works</a></td>
                        <td>
                          <span class="flag flag-country-us"></span>
                          Carlson Limited
                        </td>
                        <td>
                          87956621
                        </td>
                        <td>
                          15 Dec 2017
                        </td>
                        <td>
                          <span class="badge bg-success me-1"></span> Paid
                        </td>
                        <td>$887</td>
                        <td class="text-end">
                          <span class="dropdown">
                            <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer d-flex align-items-center">
                  <p class="m-0 text-muted">Showing <span>1</span> to <span>8</span> of <span>16</span> entries</p>
                  <ul class="pagination m-0 ms-auto">
                    <li class="page-item disabled">
                      <a class="page-link" href="#" tabindex="-1" aria-disabled="true">
                        <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
                        prev
                      </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#">
                        next <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h3 class="card-title">Products</h3>
                </div>
                <div class="card-body border-bottom py-3">
                  <div class="d-flex">
                    <div class="text-muted">
                      Show
                      <div class="mx-2 d-inline-block">
                        <input type="text" class="form-control form-control-sm" value="8" size="3" aria-label="Invoices count">
                      </div>
                      entries
                    </div>
                    <div class="ms-auto text-muted">
                      Search:
                      <div class="ms-2 d-inline-block">
                        <input type="text" class="form-control form-control-sm" aria-label="Search invoice">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="table-responsive">
                  <table class="table card-table table-vcenter text-nowrap datatable">
                    <thead>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Cost</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, index) in products" :key="index">
                        <td><input class="form-check-input m-0 align-middle" type="checkbox" aria-label="Select invoice"></td>
                        <td><span class="text-muted">{{ product.name }}</span></td>
                        <td><a href="invoice.html" class="text-reset" tabindex="-1">{{ product.stock_quantity }}</a></td>
                        <td>
                          {{ product.price }}
                        </td>
                        <td>
                          {{ product.cost }}
                        </td>
                        <td>
                          <span v-if="isInStock(product)" class="badge bg-success me-1"></span>
                          <span v-else class="badge bg-danger me-1"></span>
                          {{ isInStock(product) ? 'In stock' : 'Out of stock' }}
                        </td>
                        <td>$887</td>
                        <td class="text-end">
                          <span class="dropdown">
                            <button class="btn dropdown-toggle align-text-top" data-bs-boundary="viewport" data-bs-toggle="dropdown">Actions</button>
                            <div class="dropdown-menu dropdown-menu-end">
                              <a class="dropdown-item" href="#">
                                Edit
                              </a>
                              <a class="dropdown-item" @click.prevent="deleteProduct(product.id)">
                                Delete
                              </a>
                            </div>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="card-footer d-flex align-items-center">
                  <p class="m-0 text-muted">Showing <span>{{ currentPage }}</span> to <span>{{ lastPage }}</span> of <span>{{ Pagenumber }}</span> entries</p>
                  <ul class="pagination m-0 ms-auto">
                      <li class="page-item">
                        <a class="page-link" @click="Prev" tabindex="-1" aria-disabled="true">
                          <!-- Download SVG icon from http://tabler-icons.io/i/chevron-left -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M15 6l-6 6l6 6" />
                          </svg>
                          Prev
                        </a>
                      </li>
                      <li class="page-item" v-for="page in pages" :key="page" :class="{ active: page === currentPage }">
                        <a class="page-link" @click="paginates(page)">{{ page }}</a>
                      </li>
                      <li class="page-item" :class="{ disabled: currentPage === lastPage }" style="cursor:pointer;">
                        <a class="page-link" @click="Next" style="cursor:pointer;">
                          Next <!-- Download SVG icon from http://tabler-icons.io/i/chevron-right -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 6l6 6l-6 6" />
                          </svg>
                        </a>
                      </li>
                    </ul> 

                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <footer class="footer footer-transparent d-print-none">
        <div class="container-xl">
          <div class="row text-center align-items-center flex-row-reverse">
            <div class="col-12 col-lg-auto mt-3 mt-lg-0">
              <ul class="list-inline list-inline-dots mb-0">
                <li class="list-inline-item">
                  Copyright &copy; 2023
                  <a href="." class="link-secondary">ELARFAOUI</a>.
                  All rights reserved.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
  <div class="modal modal-blur fade" id="modal-report" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New Customer</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="storecustomer()">
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input v-model="customer.name" type="text" class="form-control" name="example-text-input" placeholder="Your Customer name">
          </div>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Zip / Postal Code</label>
                <input v-model="customer.postal_code" type="text" class="form-control" name="example-text-input" placeholder="Postal Code ">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">City / Town</label>
                <input v-model="customer.city" type="text" class="form-control" name="example-text-input" placeholder="City">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input v-model="customer.email" type="text" class="form-control" name="example-text-input" placeholder="Your Customer Email">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Phone</label>
                <input v-model="customer.phone" type="text" class="form-control" name="example-text-input" placeholder="Your Customer phone">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Address Line 1</label>
                <input v-model="customer.adress" type="text" class="form-control" name="example-text-input" placeholder="Your Customer Adress">
              </div>
            </div>
            <div class="col-lg-12">
              <div class="mb-3">
                <label class="form-label">Address Line 2</label>
                <input v-model="customer.other_adress" type="text" class="form-control" name="example-text-input" placeholder="Address Line 2">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-link link-danger" data-bs-dismiss="modal">
            Cancel
          </button>
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

  <div class="modal modal-blur fade" id="modal-product" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New Product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <form @submit.prevent="storeproduct()" enctype="multipart/form-data">
          <div class="modal-body">
          <div class="row">
            <!-- <div v-if="error" class="alert alert-danger">{{ error }}</div> -->
            <div class="col-lg-12">
              <div class="mb-3">
              <label class="form-label">Product Name</label>
              <input v-model="product.name" type="text" class="form-control" name="example-text-input name" id="name" placeholder="name">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Price</label>
                <input v-model="product.price" type="text" class="form-control" name="example-text-input price" id="price" placeholder="Your Product Price">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Product Image</label>
                <input @change="handleFileUpload" type="file" class="form-control" name="example-text-input image" id="image" placeholder="Quantity">
              </div>
            </div>
            <div class="col-lg-12">
              <div>
                <label class="form-label">Product Description</label>
                <textarea v-model="product.description" class="form-control" name="description" rows="3" id="description"></textarea>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">stock quantity</label>
                <input v-model="product.stock_quantity" type="text" class="form-control" name="example-text-input stock_quantity" id="stock_quantity" placeholder="Quantity">
              </div>
            </div>
            <div class="col-lg-6">
              <div class="mb-3">
                <label class="form-label">Product Cost</label>
                <input v-model="product.cost" type="text" class="form-control" name="example-text-input cost" id="cost" placeholder="Cost">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-link link-danger" data-bs-dismiss="modal">
            Cancel
          </button>
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
  <!-- <Loading v-if="loading" /> -->
  <div class="page page-center" v-if="loading">
      <div class="container-slim py-4">
          <div class="text-center">
              <div class="mb-3">
              <a href="." class="navbar-brand navbar-brand-autodark"><img :src="require('@/static/logo.jpg')" height="36" alt=""></a>
              </div>
              <div class="text-muted mb-3">Preparing application</div>
              <div class="progress progress-sm">
              <div class="progress-bar progress-bar-indeterminate"></div>
              </div>
          </div>
      </div>
  </div>

</template>
  
<script>  
import axios from 'axios'
import LineChart from '@/components/LineChart.vue';
import Navbar from "@/components/Navbar.vue";
import Loading from "@/components/Loading.vue";
import { mapActions, mapGetters } from "vuex";

export default {
data() {
  return {
    product: {
        'name': '',
        'description': '',
        'stock_quantity': '',
        'price': '',
        'cost': '',
        "image": null
    },
    customer: {
      'name': '',
      'adress': '',
      'other_adress': '',
      'email': '',
      'phone': '',
      'postal_code': '',
      'city': ''
    },
    file: null,
    loading: false,
    dropdownText: '',
  }
},
components: { Navbar, Loading, LineChart },
mounted() {
  this.fetchChartData(this.daysToFetch);
},
created() {
  this.getproducts();
  this.setupPaginate();
  this.getCustomerlast()
  this.dropdownText = `Last ${this.getDays} days`
  this.activeItem = this.getDays
  // this.SetupRealTime();
},
methods: {
  ...mapActions({
    'signOut': 'auth/signOut',
    "Createproduct": "product/createproduct",
    "Getproducts": "product/getproducts",
    "Destroy": "product/destroy",
    "getpaginate": "product/getpaginate",
    "next": "product/next",
    "prev": "product/prev",
    "setupPaginate": "product/paginatecontrol",
    "Createcustomer": 'customer/creatcustomer',
    "customerAnalytics": "customer/customerAnalytics",
    "fetchCustomerChartData": "customer/fetchCustomerChartData"
    // "Getcustomers": "product/getcustomers"
  }),
  async getproducts() { 
    this.Getproducts()
    this.getpaginate();
  },
  // SetupRealTime() { 
  //   this.setupRealtime()
  // },
  handleFileUpload(event) {
    this.file = event.target.files[0];
    this.product.image = this.file;
  },
  logOut() { 
    this.signOut().then(() => { 
      this.$router.push({name: 'Signin'})
    })
  },
  async deleteProduct(id) {
    const confirmed = await swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    
    if (confirmed) {
      await this.Destroy(id);
      this.getproducts();
    }
  },
  storeproduct() {
    const formData = new FormData();
    formData.append('name', this.product.name);
    formData.append('description', this.product.description);
    formData.append('stock_quantity', this.product.stock_quantity);
    formData.append('price', this.product.price);
    formData.append('cost', this.product.cost);
    formData.append('image', this.file);
    // console.log(formData)
    this.Createproduct(formData).then((res) => this.getproducts())
  },
  isInStock(product) {
    return product.stock_quantity > 0;
  },
  paginates(page) {
    this.getpaginate(page);
  },
  Next() {
    this.next()
    // this.pages()
    this.getproducts();
    
  },
  Prev() {
    this.prev()
    this.getproducts();
  },
  //new customer 
  storecustomer() {
    this.Createcustomer(this.customer)
  },
  getCustomerlast(days) {
    this.getDays = days
    console.log(`woow ${days}`)
    this.customerAnalytics(this.getDays)
    this.dropdownText = `Last ${days} days`;
    this.activeItem = days;
    // this.fetchChartData(days)
  },
  fetchChartData(days) {
      this.$refs.LineChart.fetchChartData(days);
  },
},
computed: {
  ...mapGetters({ 
     'user': 'auth/user',
     'products': 'product/products',
     "lastPage": "product/lastPage",
     "currentPage": "product/currentPage",
     "Pagenumber": "product/Pagenumber",
     "startPaginate": "product/startPaginates",
     "maxPages": "product/maxPages",
     "getAnalyticCustomer": "customer/getAnalyticCustomer",
     "getPercentCustomer": "customer/getPercentCustomer",
     "getclass": "customer/getclass",
     "getDays": "customer/getDay",
   }),
   pages() {
    const start = this.startPaginate;
    console.log(this.startPaginate)
    const end = this.maxPages;
    console.log(this.maxPages);
    this.getpaginate(start);
    const range = [];
    for (let i = start; i <= end; i++) {
      range.push(i);
    }
    return range;
  },
  daysToFetch() {
      return this.getDays === 30 ? 30 : 30;
  },
},
watch: {
  'product.cost': function(newVal, oldVal) {
    if (newVal > this.product.price) {
      swal({
        title: "Be Attention!",
        text: 'Price cannot be lower than cost',
        icon: "warning",
        button: "OK",
      });
    }
  },
  daysToFetch(newVal, oldVal) {
    console.log(newVal)
        this.$refs.LineChart.fetchChartData(newVal);  
  },
}

}
</script>
<style scoped>
:root {
--text-color: #fff; /* set the default text color to black */
}

/* set the text color to white in dark mode */
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
.apexcharts-xaxis-tick {
    opacity: 0;
}
.dropdown-item.active, .dropdown-item:active {
    color: var(--tblr-dropdown-link-active-color);
    text-decoration: none;
    background-color: #ffffff;
    COLOR: #000 !important;
}
</style>
