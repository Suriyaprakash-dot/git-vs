import {useState} from "react"

const Form = () => {
    const [FormData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        department:'',
    })
    const handleChange=(e)=>
    {
      const {name,value}=e.target
        setFormData((prev)=>({
          ...prev,
          [name]:value
        }))
  }
    const handleSubmit=(e)=>
        {
        e.preventDefault()
        console.log(FormData);
    }
  return (
    <div> <form onSubmit={handleSubmit}>
        <label htmlFor=" ">Name:</label>
        <input type="text" name="name" value={FormData.name} onChange={handleChange}  /> <br />
        <label htmlFor=" ">Email:</label>
        <input type="email" name="email" value={FormData.email} onChange={handleChange}  /> <br />
        <label htmlFor=" ">password:</label>
        <input type="password" name="password" value={FormData.password} onChange={handleChange}  /> <br />
        <label htmlFor=" ">Department:</label>
        <input type="text" name="department" value={FormData.department} onChange={handleChange}  /> <br />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form