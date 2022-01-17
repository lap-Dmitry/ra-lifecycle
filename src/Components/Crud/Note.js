import React from 'react';
import PropTypes from 'prop-types';

export default function Note(props) {
  const {
    note: { id, content },
    onRemove,
  } = props;

  return (
    <div className="note_wrapper" id={id}>
      <div className="note_text">
        <p>{content}</p>
      </div>
      <button
        className="note_button__remove button-remove"
        onClick={() => onRemove(id)}
      >
        <span className="material-icons">close</span>
      </button>
    </div>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
