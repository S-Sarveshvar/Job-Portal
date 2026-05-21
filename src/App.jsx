import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditJobPage from "./pages/EditJobPage";

const addJob = async(newJob) => {
  alert("Your form has been successfully submitted")
  const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(newJob),
    }
  ) 
  return
}
const updateJob = async(job) => {
  alert("Your form has been updated successfully")
  const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(job),
    }
  ) 
  return
}
const deleteJob = async(id) => {
  const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    }
  ) 
  return
}

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob}/>}/>
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob}/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  )
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000}/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App