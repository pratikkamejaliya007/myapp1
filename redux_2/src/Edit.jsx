import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { edit } from './redux/action';

function Edit() {
  const { id } = useParams();
  const selector = useSelector(state => state.data);
  const data = selector.find(el => el.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [mail, setMail] = useState('');
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (data) {
      setName(data.name);
      setNumber(data.number);
      setMail(data.mail);
      setProfile(data.profile);
    }
  }, [data]);

  function handleImg(e) {
    setProfile(e.target.files[0]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const updatedData = {
      id: data.id,
      name,
      number,
      mail,
      profile
    };

    dispatch(edit({ id: data.id, data: updatedData }));

    navigate(`/show/${id}`);
  }

  if (!data) {
    return <div>Contact not found</div>;
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="number" className="form-label">
          Number
        </label>
        <input
          type="text"
          id="number"
          className="form-input"
          placeholder="Enter your number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="profile" className="form-label">
          Profile
        </label>
        <input
          type="file"
          id="profile"
          className="form-input"
          onChange={handleImg}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          placeholder="Enter your email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="form-button">
          Update
        </button>
      </div>
    </form>
  );
}

export default Edit;
