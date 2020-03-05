import React from 'react'

function cardSmall(props) {

  props = {
    title: 'Sin titulo',
    info: 'Sin info',
    border: '',
    icono: '',
    ...props
  }
    return(
        <div class="col-md-4 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">{props.title}</div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">{props.info}</div>
              </div>
              <div class="col-auto">
                <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default cardSmall