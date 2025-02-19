import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../firebase/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
        
      
        const userType =2;
        
        await addDoc(collection(db, "users"), {
          name,
          surname,
          email: email.trim(),
          uid: userCredential.user.uid,
          userType, // Added userType field
        });
        
        toast.success("Kayıt başarılı! Giriş yapabilirsiniz.", { position: "top-center" });
        setIsRegister(false); // Kayıt olunca giriş ekranına döndür
      } else {
        await signInWithEmailAndPassword(auth, email.trim(), password);
        toast.success("Giriş başarılı! Yönlendiriliyorsunuz...", { position: "top-center" });
        setTimeout(() => navigate("/ourdreams"), 1500); // 1.5 saniye sonra yönlendir
      }
    } catch (error) {
      toast.error(`Giriş bilgileri hatalıdır.`, { position: "top-center" });
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <ToastContainer />
      <Paper elevation={6} sx={{ padding: 4, borderRadius: 3, textAlign: "center", width: "100%" }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          {isRegister ? "Kayıt Ol" : "Giriş Yap"}
        </Typography>
        <Box component="form" onSubmit={handleAuth} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {isRegister && (
            <>
              <TextField label="Ad" variant="outlined" fullWidth value={name} onChange={(e) => setName(e.target.value)} required />
              <TextField label="Soyad" variant="outlined" fullWidth value={surname} onChange={(e) => setSurname(e.target.value)} required />
            </>
          )}
          <TextField label="E-posta" variant="outlined" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} required />
          <TextField label="Şifre" variant="outlined" type="password" fullWidth value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {isRegister ? "Kayıt Ol" : "Giriş Yap"}
          </Button>
        </Box>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          {isRegister ? "Zaten bir hesabın var mı? " : "Hesabın yok mu? "}
          <Button variant="text" color="primary" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Giriş Yap" : "Kayıt Ol"}
          </Button>
        </Typography>
      </Paper>
    </Container>
  );
};

export default Login;
