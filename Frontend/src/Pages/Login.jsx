import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import API from '../Services'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitButton = async (e) => {
    e.preventDefault()
    if (!email || !password) {
      return toast.error("All Fields Necessary")
    }
    try {
      const login = await axios.post(`${API}/login`, {
        email, password
      })
      setEmail("")
      setPassword("")
      localStorage.setItem("token", login.data.token)
      localStorage.setItem("role", login.data.role)
      localStorage.setItem("id", login.data.id)
      
      toast.success("Login Successful")
      
      setTimeout(() => {
        if (login.data.role === "Student") {
          navigate("/studentdashboard")
        }
        if (login.data.role === "Teacher") {
          navigate("/teacherdashboard")
        }
      }, 1000)

    } catch (error) {
      console.log(error)
      toast.error("Login Failed")
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
            onClick={() => navigate("/register")}
            className="bg-white text-blue-700 hover:bg-gray-200 px-5 py-2 rounded-lg transition font-semibold"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Welcome Back
          </h2>

          <form onSubmit={submitButton} className="space-y-5">
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

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition mt-4"
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Login
