import React from 'react';
import './App.css';
import './style.css'
import CardSmall from './componentes/CardSmall'

function App() {
  return (
    <div className="App">
      <div id="wrapper">

  <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

  <a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
    <div class="sidebar-brand-icon">
      <i class="fas fa-chart-line"></i>
    </div>
    <div class="sidebar-brand-text mx-3">Admin</div>
  </a>

  <hr class="sidebar-divider my-0"/>

  <li class="nav-item active">
    <a class="nav-link" href="/">
      <i class="fas fa-fw fa-tachometer-alt"></i>
      <span>Dashboard</span></a>
  </li>

  <hr class="sidebar-divider"/>

  <div class="sidebar-heading">Actions</div>

  <li class="nav-item">
    <a class="nav-link collapsed" href="/">
      <i class="fas fa-fw fa-folder"></i>
      <span>Pages</span>
    </a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="/">
      <i class="fas fa-fw fa-chart-area"></i>
      <span>Charts</span></a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="/">
      <i class="fas fa-fw fa-table"></i>
      <span>Tables</span></a>
  </li>

  <hr class="sidebar-divider d-none d-md-block"/>
</ul>

<div id="content-wrapper" class="d-flex flex-column">

  <div id="content">

    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

      <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="fa fa-bars"></i>
      </button>

      <ul class="navbar-nav ml-auto">

        <li class="nav-item dropdown no-arrow mx-1">
          <a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
            <i class="fas fa-bell fa-fw"></i>
            <span class="badge badge-danger badge-counter">3+</span>
          </a>
        </li>

        <li class="nav-item dropdown no-arrow mx-1">
          <a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
            <i class="fas fa-envelope fa-fw"></i>
            <span class="badge badge-danger badge-counter">7</span>
          </a>
        </li>

        <div class="topbar-divider d-none d-sm-block"></div>

        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="/" id="userDropdown">
            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Walter White</span>
            <img class="img-profile rounded-circle" src="./images/dummy-avatar.jpg" width="60" alt=""/>
          </a>
        </li>

      </ul>

    </nav>

    <div class="container-fluid">

      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <div class="row">

        <CardSmall title=" Products in Data Base" info="135" border=".25rem solid #4e73df!important" icono="fas fa-dollar-sign"/>
        <CardSmall title=" Amount in products" info="$546.456" border=".25rem solid #1cc88a!important" icono="fas fa-user-check"/>
        <CardSmall title="Users quantity" info="38" border=".25rem solid #f6c23e!important"/>

      </div>

      <div class="row">
        <div class="col-lg-6 mb-4">
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
            </div>
            <div class="card-body">
              <div class="text-center">
                <img class="img-fluid px-3 px-sm-4 mt-3 mb-4"  src="/images/product_dummy.svg" alt="image dummy" />
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
              <a target="_blank" rel="nofollow" href="/">View product detail</a>
            </div>
          </div>
        </div>

        <div class="col-lg-6 mb-4">						
          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-lg-6 mb-4">
                  <div class="card bg-info text-white shadow">
                    <div class="card-body">
                      Category 01
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-info text-white shadow">
                    <div class="card-body">
                      Category 02
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-info text-white shadow">
                    <div class="card-body">
                      Category 03
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-info text-white shadow">
                    <div class="card-body">
                      Category 04
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-info text-white shadow">
                    <div class="card-body">
                      Category 05
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 mb-4">
                  <div class="card bg-info text-white shadow">
                    <div class="card-body">
                      Category 06
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 class="h3 mb-2 text-gray-800">All the products in the Database</h1>
      
      <div class="card shadow mb-4">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Categories</th>
                  <th>Colors</th>
                  <th>Stock</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Categories</th>
                  <th>Colors</th>
                  <th>Stock</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>Tiger Nixon</td>
                  <td>System Architect</td>
                  <td>$320,800</td>
                  <td>
                    <ul>
                      <li>Category 01</li>
                      <li>Category 02</li>
                      <li>Category 03</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li><span class="text-danger">Red</span></li>
                      <li><span class="text-primary">Blue</span></li>
                      <li><span class="text-success">Green</span></li>
                    </ul>
                  </td>
                  <td>245</td>
                </tr>
                <tr>
                  <td>Jane Doe</td>
                  <td>Fullstack developer</td>
                  <td>$320,800</td>
                  <td>
                    <ul>
                      <li>Category 01</li>
                      <li>Category 02</li>
                      <li>Category 03</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li><span class="text-danger">Red</span></li>
                      <li><span class="text-primary">Blue</span></li>
                      <li><span class="text-success">Green</span></li>
                    </ul>
                  </td>
                  <td>245</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="sticky-footer bg-white">
    <div class="container my-auto">
      <div class="copyright text-center my-auto">
        <span>Copyright &copy; Dashboard 2020</span>
      </div>
    </div>
  </footer>

</div>

</div>
    </div>
  );
}

export default App;
