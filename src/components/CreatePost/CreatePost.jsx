import React, { useState } from "react";
import "./CreatePost.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Popup from "reactjs-popup";
import data from '../../data/data';

const CreatePost = () => {
  const [imageInputs, setImageInputs] = useState([{ id: 1 }]);

  const addImageInput = () => {
    setImageInputs([...imageInputs, { id: imageInputs.length + 1 }]);
  };

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    content: "",
    images: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (event, id) => {
    const files = event.target.files;
    setFormData((prevData) => {
      const newImages = [...prevData.images];
      newImages[id - 1] = files[0];
      return { ...prevData, images: newImages };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data: ", formData);
    data.push(formData);
    console.log("Updated data: ", data);
    // Add your form submission logic here
  };

  return (
    <>
      <Popup
        trigger={
          <div className="createPost-container">
            <FontAwesomeIcon icon={faPenToSquare} />
            <p>Create Post</p>
          </div>
        }
      >
        <div className="popup-content">
          <h2>Create a New Post</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subtitle"
              placeholder="Subtitle"
              value={formData.subtitle}
              onChange={handleChange}
            />
            <label htmlFor="imageUpload">Upload Images</label>
            {imageInputs.map((input, index) => (
              <input
                key={input.id}
                type="file"
                id={`imageUpload${input.id}`}
                name={`imageUpload${input.id}`}
                accept="image/*"
                onChange={(e) => handleImageChange(e, index + 1)}
              />
            ))}
            <button type="button" onClick={addImageInput}>More Images +</button>
            <textarea
              name="content"
              placeholder="Content"
              rows={10}
              value={formData.content}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </Popup>
    </>
  );
};

export default CreatePost;
