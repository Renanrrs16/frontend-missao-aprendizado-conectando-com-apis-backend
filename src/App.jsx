import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Card from './components/Card/Card'

function App() {

  const [devmons, setDevmons] = useState([])

  async function fetchData() {
    const apiUrl = 'https://backend-iniciante-integrar-com-frontend-vu0i.onrender.com/personagemm'

    const response = await fetch(apiUrl).catch(function(error){
      console.error('Erro ao chamr endpoint /personagem', error)
      toast.error('Erro ao carregar lista de Devmon.')
    })

    if(response.ok) {
      const data = await response.json()  

      setDevmons(data)
    }else{
      toast.error('Erro ao carregar lista de Devmon.')
    }

    
  }

  useEffect(function () {
    fetchData()
  }, [])


  return (
    <>

      <div className='cards'>
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div>
      <ToastContainer/>
    </>
  )
}

export default App
