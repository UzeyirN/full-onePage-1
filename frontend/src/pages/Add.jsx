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
  // const [authors, setAuthors] = useState(null)

  // const handleDelete = async(id)=>{
  //   await axios.delete(`http://www.localhost:3050/authors/${id}`);
  //   getData()
  // }

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


      {/* <ul>
        {
          authors?.map(({ _id, author, comment }) => (
            <li>
              <h2>{author}</h2>
              <p>{comment}</p>
              <br />
              <button onClick={() => handleDelete(_id)}>Delete</button>
            </li>
          ))
        }
      </ul> */}

    </>
  )
}

export default Add

