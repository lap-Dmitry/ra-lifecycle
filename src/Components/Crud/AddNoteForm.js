import React from 'react';
import PropTypes from 'prop-types';

export default function AddNoteForm(props) {
  const { input, onChange, onSubmit } = props;

  return (
    <form className="add_note__form" onSubmit={onSubmit}>
      <div>
        <div>
          <label className="label">
            <h2>New note</h2>
            <input
              className="input input_note"
              name="note"
              value={input}
              type="text"
              required
              onChange={onChange}
            />
            <button
              className="form_button__submit"
              type="submit"
            >
              <span className="material-icons">send</span>
            </button>
          </label>
        </div>
      </div>
    </form>
  );
}

AddNoteForm.propTypes = {
  input: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
