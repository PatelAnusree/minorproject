import React, { useState } from "react";
import axios from "axios";

function CreateEvent() {

 const [form, setForm] = useState({
  name: "",
  category: "",
  description: "",
  city: "",
  venue: "",
  startDate: "",
  startTime: "",
  duration: "",
  coverImage: ""
});


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      "http://localhost:5000/api/events/create-event",
      form
    );

    alert("Event Created!");
  };

  return (
  <div style={{ padding: "20px" }}>
    <h2>Create Event (Organiser)</h2>

    <form onSubmit={handleSubmit}>

      <input name="name" placeholder="Event Name" onChange={handleChange} />
      <br /><br />

      <input name="category" placeholder="Category" onChange={handleChange} />
      <br /><br />

      <input name="description" placeholder="Description" onChange={handleChange} />
      <br /><br />

      <input name="city" placeholder="City" onChange={handleChange} />
      <br /><br />

      <input name="venue" placeholder="Venue" onChange={handleChange} />
      <br /><br />

      <input type="date" name="startDate" onChange={handleChange} />
      <br /><br />

      <input type="time" name="startTime" onChange={handleChange} />
      <br /><br />

      <input name="duration" placeholder="Duration" onChange={handleChange} />
      <br /><br />

      <input name="coverImage" placeholder="Cover Image URL" onChange={handleChange} />
      <br /><br />

      <button type="submit">Create Event</button>

    </form>
  </div>
  
);
}
export default CreateEvent;