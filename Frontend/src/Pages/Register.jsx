import { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import API from '../Services'

const Register = () => {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("Student")

  const register = async (e) => {
    e.preventDefault()
    try {
      const details = await axios.post(`${API}/signup`, {
        name,
        email,
        password,
        role
      })
      setEmail("")
      setPassword("")
      setName("")
      toast.success("Registration Successful")
      setTimeout(() => {
        navigate("/login")
      }, 3000);
      console.log(details)
    } catch (error) {
      console.log(error)
      toast.error("Registration Failed")
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-5">
          
          <div className="flex items-center gap-3">
            <img
            src="https://static.vecteezy.com/system/resources/previews/020/101/767/original/student-login-blue-gradient-concept-icon-materials-to-study-learning-management-system-access-abstract-idea-thin-line-illustration-isolated-outline-drawing-vector.jpg"
            alt="logo"
            className="w-16 h-16 rounded-xl shadow-md border-2 border-white/20"
          /> 
            <h1 className="text-3xl font-bold text-white cursor-pointer" onClick={() => navigate("/")}>
              CampuSphere
            </h1>
          </div>
          <button
            onClick={() => navigate("/login")}
            className="bg-white text-blue-700 hover:bg-gray-200 px-5 py-2 rounded-lg transition font-semibold"
          >
            Login
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Create an Account
          </h2>

          <form onSubmit={register} className="space-y-5">
            <div>
              <label className="font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="font-medium text-gray-700">Role</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-2 w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Register
