import { Box, Typography } from "@mui/material";
import { InputField } from "../component/Ui/InputField";
import { CustomButton } from "../component/Ui/CustomButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsAuthenticated }) => {
    const [formData,setFormData] = useState({
        username:'',
        password:''
    })
   
    const navigate = useNavigate()
    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.value})
        
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
          setIsAuthenticated(true)
        localStorage.setItem("isAuthenticated",true)
        console.log("user logged in ")
        navigate('/ticket')
    }
  
  return (
    <Box
      sx={{
        height: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', 
        backgroundColor: '#f9f9f9'
      }}    
      
    >
         
      <Box
        component={"form"}
        sx={{
          width: '55vh',
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: 'white'
        }}
        onSubmit={handleSubmit}
      >
        <Typography variant="h5" align="center">Login</Typography>
        <InputField
          label="Username"
          name="username"
          placeholder="Enter your username"
          required
          fullWidth
          value={formData.username}
          onChange={handleChange}
        />
        <InputField
          label="Password"
          name="password"
          placeholder="Enter your password"
          type="password"
          required
          value={formData.password}
          fullWidth
          onChange={handleChange}
        />
        <CustomButton type="submit" fullWidth>Login</CustomButton>

      </Box>
       

    </Box>
  );
};
