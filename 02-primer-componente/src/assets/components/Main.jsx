import 'bootstrap/dist/css/bootstrap.min.css'

function Main() {
  return (
    <div className='container bg-primary p-3 my-3'>
      <h3 className='text-center text-light'>Main</h3>
      <div className='row flex-wrap'>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <h3 className='bg-secondary text-dark p-3'>Dias de la semana</h3> 
          <ol>
            <li>Lunes</li>
            <li>Martes</li>
            <li>Miercoles</li>
            <li>Jueves</li>
            <li>Viernes</li>
            <li>Sábado</li>
            <li>Domingo</li>
          </ol>
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12'>
          <h3 className='bg-secondary text-dark p-3'>Detalles</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolor nemo repellendus quibusdam dolores quas, veniam eum illo sunt dignissimos suscipit quo totam delectus aliquam. Consectetur itaque soluta corporis repudiandae.</p>

        </div>

      </div>

    </div>
  )
}

export default Main