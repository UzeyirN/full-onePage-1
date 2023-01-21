import React, { useState } from 'react'
import '../pages/Add.css'
import axios from 'axios'


const Add = () => {

  const [state, setState] = useState({
    image: "",
    author: "",
    comment: "",
  });

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const addAuthors = (e) => {
    e.preventDefault();

    if (!state.image || !state.author || !state.comment) return;

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
            placeholder="image"
            onChange={handleChange}
          />
          <div className='input-checkbox'>
            <input
              name="author"
              type="text"
              value={state.author}
              placeholder="author"
              onChange={handleChange}
            />
          </div>

          <div className='rate-disc__wrapper'>
            <input
              name="comment"
              type="text"
              value={state.comment}
              placeholder="comment"
              onChange={handleChange}
            />

          </div>

          <button>ADD</button>
        </form>

      </div>




    </>
  )
}

export default Add

