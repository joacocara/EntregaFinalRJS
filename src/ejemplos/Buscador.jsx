import { useRef } from "react"
import { useSearchParams } from "react-router-dom"


const Buscador = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  const ref = useRef()
  
  const handldeSumbit = (e) => {
    e.preventDefault()
    const value = ref.current.value

    if (value === '') {
      setSearchParams({})
      return
    }

    setSearchParams({
      search: value
    })
  }

  const handleReset = () => {
    setSearchParams({})
  }
  
    return (
      <form className="p-3" onSubmit={handldeSumbit}>
        <input 
        ref={ref}
        className="form-control"
         type="text" 
         />
         <button type="submmit" className="btn btn-primary">Buscar</button>
         <button onClick={handleReset} type="reset" className="btn btn-light">X</button>
      </form>
    )
  }
  
  export default Buscador