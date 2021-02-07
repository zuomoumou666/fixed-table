import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const UserDetailModal = ({ user, visible, onClose }) => {

  return (<div className={`modal ${visible ? 'modal-active' : ''}`} >
    <div className="modal-header">
      <h4>
        Profile
      </h4>
    </div>
    <div className="modal-body">
      <img src={user.avatar} />
      <p>
        <span>ID:</span> {user.id}
      </p>
      <p>
        <span>First Name:</span> {user.first_name}
      </p>
      <p>
        <span>Last Name:</span> {user.last_name}
      </p>
      <p>
        <span>Email:</span> {user.email}
      </p>
    </div>
    <div className="modal-footer">
      <button onClick={onClose}>Close</button>
    </div>
  </div>)
};

UserDetailModal.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  user: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

export default UserDetailModal;