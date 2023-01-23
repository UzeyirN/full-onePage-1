import React, { useState } from 'react'
import '../pages/Add.css'
import axios from 'axios'

// import { useForm } from "react-hook-form";
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const schema = yup.object().shape({
//   image: yup.string().required(),
//   author: yup.string().required(),
//   specialty: yup.string().required(),
//   comment: yup.string().required(),
// })

const Add = () => {

  // const { register, handleSubmit, errors } = useForm({
  //   resolver: yupResolver(schema)
  // })

  const [state, setState] = useState({
    image: "",
    author: "",
    specialty: "",
    comment: ""
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addAuthors = (e) => {
    e.preventDefault();

    if (!state.image || !state.author || !state.specialty || !state.comment) return;

    axios.post("http://www.localhost:3050/authors", state);
  };

  return (
    <>
      <div className='addPage__wrapper'>
        <h2>Authors</h2>

        <form onSubmit={addAuthors} className="form">
          <input
            name="image"
            type="text"
            value={state.image}
            placeholder="enter author's image url"
            onChange={handleChange}
          />
          <div className='input-checkbox'>
            <input
              name="author"
              type="text"
              value={state.author}
              placeholder="enter author name"
              onChange={handleChange}
            />
          </div>

          <div className='input-checkbox'>
            <input
              name="specialty"
              type="text"
              value={state.specialty}
              placeholder="enter specialty  "
              onChange={handleChange}
            />
          </div>

          <div className='rate-disc__wrapper'>
            <input
              name="comment"
              type="text"
              value={state.comment}
              placeholder="enter author's comment"
              onChange={handleChange}
            />

          </div>
          <button className='add-btn'>ADD</button>
        </form>
      </div>
    </>
  )
}

export default Add

