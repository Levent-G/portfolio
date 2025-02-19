import React, { useState, useEffect, useCallback } from "react"; // useCallback import edelim
import { db, auth } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import {
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Check, ArrowUp, Trash } from "lucide-react";

const OurDreams = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [userType, setUserType] = useState(null);

  const fetchTasks = useCallback(async () => {
    if (userType !== null) {
      const q = query(
        collection(db, "tasks"),
        where("userType", "==", userType), // userType'a göre filtrele
        orderBy("priority", "desc")
      );
      const querySnapshot = await getDocs(q);
      const tasksArray = querySnapshot.docs.map((doc, index) => ({
        id: doc.id,
        order: index + 1,
        ...doc.data(),
      }));

      setTasks(tasksArray);
    }
  }, [userType]); // userType değiştiğinde fetchTasks'i yeniden çalıştır

  useEffect(() => {
    fetchUserData();
    fetchTasks();
  }, [userType, fetchTasks]); // Bağımlılıklar listesinde fetchTasks var

  // Kullanıcı bilgilerini al
  const fetchUserData = async () => {
    const user = auth.currentUser; // Giriş yapan kullanıcıyı alıyoruz.
    if (user) {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("uid", "==", user.uid)); // UID'ye göre kullanıcıyı buluyoruz
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        const userData = doc.data();
        setUserType(userData.userType); // userType'ı set ediyoruz
      });
    }
  };

  // Diğer kodlar aynen kalacak
  const addTask = async () => {
    if (task.trim() === "") return;
    if (userType !== null) {
      await addDoc(collection(db, "tasks"), {
        text: task,
        completed: false,
        priority: 0,
        userType: userType, // userType'ı da kaydet
      });
      setTask("");
      fetchTasks();
    }
  };

  const completeTask = async (id) => {
    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, { completed: true });
    fetchTasks();
  };

  const confirmDelete = (id) => {
    setTaskToDelete(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTaskToDelete(null);
  };

  const deleteTask = async () => {
    if (taskToDelete) {
      await deleteDoc(doc(db, "tasks", taskToDelete));
      fetchTasks();
    }
    handleClose();
  };

  const promoteTask = async (id, priority) => {
    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, { priority: priority + 1 });
    fetchTasks();
  };

  return (
    <div className="flex flex-col items-center p-6 mt-24 mb-8 font-sans">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Planlarımız</h1>

      <div className="w-full max-w-md mb-8">
        <TextField
          label={userType === 1? "Bir hayalini ekle sevgilim...":"Bir hayalini ekle..."}
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" onClick={addTask} color="primary" fullWidth>
          Ekle
        </Button>
      </div>
      <div className="w-full flex justify-center gap-8 ">
        <div className="flex flex-col items-center">
          <IconButton color="success">
            <Check size={24} />
          </IconButton>
          <p className="text-gray-700 text-sm">Yaptıklarımızı işaretlemek için</p>
        </div>
        <div className="flex flex-col items-center">
          <IconButton color="primary">
            <ArrowUp size={24} />
          </IconButton>
          <p className="text-gray-700 text-sm">İlk önce yapmak istediklerimizi en üste almak için</p>
        </div>
        <div className="flex flex-col items-center">
          <IconButton color="error">
            <Trash size={24} />
          </IconButton>
          <p className="text-gray-700 text-sm">Planı silmek için</p>
        </div>
      </div>
      <div className="w-full max-w-lg space-y-4 mt-5">
        {tasks.map(({ id, text, completed, priority, order }) => (
          <Card
            key={id}
            className="w-full p-4 flex justify-between items-center rounded-xl shadow-md"
            sx={{
              backgroundColor: completed
                ? "#D1FAE5"
                : priority > 0
                ? "#BFDBFE"
                : "#F3F4F6",
            }}
          >
            <CardContent className="text-lg font-medium text-gray-900">
              {order}.
            </CardContent>
            <CardContent className="flex-grow text-lg font-medium text-gray-900">
              {text}
            </CardContent>
            <div className="flex space-x-3">
              {!completed && (
                <IconButton onClick={() => completeTask(id)} color="success">
                  <Check size={20} />
                </IconButton>
              )}
              <IconButton onClick={() => promoteTask(id, priority)} color="primary">
                <ArrowUp size={20} />
              </IconButton>
              <IconButton onClick={() => confirmDelete(id)} color="error">
                <Trash size={20} />
              </IconButton>
            </div>
          </Card>
        ))}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Plandan Vazgeç</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Bu planı iptal etmek istediğinize emin misiniz?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Hayır
          </Button>
          <Button onClick={deleteTask} color="error">
            Evet
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default OurDreams;
