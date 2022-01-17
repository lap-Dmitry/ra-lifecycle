import React, { Component } from 'react';
import AddNoteForm from './AddNoteForm';
import Note from './Note';

export default class NotesPanelClass extends Component {
  state = {
    input: '',
    notes: [],
  };

  fetchApiGetNotes = () => {
    return fetch(process.env.REACT_APP_URL)
      .then((response) => response.json())
      .then((result) => {
        this.setState((prevState) => ({ ...prevState, notes: result }));
      });
  };

  fetchApiAddNote = () => {
    return fetch(process.env.REACT_APP_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ id: '0', content: this.state.input }),
    });
  };

  fetchApiRemoveNote = (id) => {
    return fetch(process.env.REACT_APP_URL + '/' + id, {
      method: 'DELETE',
    });
  };

  handleChange = ({ target }) => {
    this.setState((prevState) => ({
      ...prevState,
      input: target.value,
    }));
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.fetchApiAddNote().then((response) => {
      if (!response.ok) return;
      this.fetchApiGetNotes();
    });

    this.setState((prevState) => ({
      ...prevState,
      input: '',
    }));
  };

  handleRemove = (id) => {
    this.fetchApiRemoveNote(id).then((response) => {
      if (!response.ok) return;
      this.fetchApiGetNotes();
    });
  };

  handleRefresh = () => {
    this.fetchApiGetNotes();
  };

  componentDidMount() {
    this.fetchApiGetNotes();
  }

  render() {
    const notesList = this.state.notes.map((item) => (
      <Note key={item.id} note={item} onRemove={this.handleRemove} />
    ));

    return (
      <>
        <div className="notes_panel__wrapper">
          <div className="notes_panel__text">
            <h1>Notes</h1>
          </div>
          <button
            className="panel_button__refresh button-refresh"
            onClick={this.handleRefresh}
          >
            <span className="material-icons">sync</span>
          </button>
        </div>
        <section className="notes_body">{notesList}</section>
        <AddNoteForm
          input={this.state.input}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </>
    );
  }
}