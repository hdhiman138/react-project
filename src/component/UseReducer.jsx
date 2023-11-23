import React, { useReducer } from 'react';

const person = {
  name: '',
  age: '',
  email: '',
  submitData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changedata':
      return { ...state, [action.fields]: action.payload };
    case 'submitform':
      return {
        ...state,
        submitData: [...state.submitData, { name: state.name, age: state.age, email: state.email }],
        name: '',
        age: '',
        email: '',
      };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [data, dispatch] = useReducer(reducer, person);

  const handlechange = (e) => {
    dispatch({
      type: 'changedata',
      fields: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'submitform' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={data.name} onChange={handlechange} />

        <label htmlFor="age">Age:</label>
        <input type="text" id="age" name="age" value={data.age} onChange={handlechange} />

        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email" value={data.email} onChange={handlechange} />

        <button type="submit">Submit</button>
      </form>

      <ul>
        {data.submitData.map((item, index) => (
          <li key={index}>
            {`Name: ${item.name}, Age: ${item.age}, Email: ${item.email}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
