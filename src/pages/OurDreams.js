import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
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
import { Delete, ArrowUpward, CheckCircle } from "@mui/icons-material";

const OurDreams = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const q = query(collection(db, "tasks"), orderBy("priority", "desc"));
    const querySnapshot = await getDocs(q);
    const tasksArray = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setTasks(tasksArray);
  };

  const addTask = async () => {
    if (task.trim() === "") return;
    await addDoc(collection(db, "tasks"), {
      text: task,
      completed: false,
      priority: 0,
    });
    setTask("");
    fetchTasks();
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
    <div className="flex flex-col items-center p-4 mt-24 mb-8">
      <h1 className="text-3xl font-bold mb-4">Planladıklarımız</h1>

     
    
      <div className="mb-12 mt-5">
        
      <TextField
          label="Hayallerinizi buraya yazınız."
          variant="outlined"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          fullWidth
          sx={{padding:1}}
        />
           <Button variant="contained" onClick={addTask} color="success" size="small" className="float-right">
          Ekle
        </Button>
      </div>
       {/* New section with the colored bars and descriptions */}
       <div className="w-full flex justify-center gap-8 mb-6">
        <div className="flex flex-col items-center">
          <div className="w-12 h-2 bg-green-500 mb-2"></div>
          <p className="text-black">Yaptıklarımız</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-2 bg-blue-500 mb-2"></div>
          <p className="text-black">İlk Önce Yapacaklarımız</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-2 bg-gray-200 mb-2"></div>
          <p className="text-black">Kesin Yapacaklarımız</p>
        </div>
      </div>
      <div className="w-full max-w-lg space-y-4 mt-12">
        {tasks.map(({ id, text, completed, priority },index) => (
          <Card
            key={id}
            className="w-full p-4 flex justify-between items-center "
            sx={{
              backgroundColor: completed
                ? "#98FB98"
                : priority > 0
                ? "#BFEFFF"
                : "#E5E7EB",
            }}
          >
            <CardContent className="flex-grow  ">
              <p className={"text-black"}>{index+1}.</p>
            </CardContent>
            <CardContent className="flex-grow ">
              <p className={"text-black"}>{text}</p>
            </CardContent>
            <div className="flex space-x-2">
              {!completed && (
                <IconButton onClick={() => completeTask(id)} color="success">
                  <CheckCircle />
                </IconButton>
              )}
              <IconButton onClick={() => promoteTask(id, priority)} color="primary">
                <ArrowUpward />
              </IconButton>
              <IconButton onClick={() => confirmDelete(id)} color="error">
                <Delete />
              </IconButton>
            </div>
          </Card>
        ))}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Plandan Vazgeç</DialogTitle>
        <DialogContent>
          <DialogContentText>Bu planı iptal etmek istediğinize emin misiniz?</DialogContentText>
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
