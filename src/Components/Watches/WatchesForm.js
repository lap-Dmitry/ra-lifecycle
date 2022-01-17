import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";

export default class WatchesForm extends Component {
    static propTypes = {
        place: PropTypes.string,
        tz: PropTypes.string,
        id: PropTypes.string,
        onFormSubmit: PropTypes.func,
    }

    state = {
        place: '',
        tz: '',
    }

    onInputChange = (e) => {
        this.setState((prev) => ({...prev, [e.target.name]: e.target.value, id: nanoid()}));
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        const state = this.state;

        this.props.onFormSubmit({...state, id: nanoid()});
        this.setState((prev) => ({...prev, place: '', tz: ''}));
    }

    render() {
        return (
            <form className="clock_form" onSubmit={this.onFormSubmit}>
                <div className="input_box place_input__box">
                    <label className="title_input" htmlFor="place">Название</label>
                    <input type="text"
                    id="place"
                    name="place"
                    value={this.state.place}
                    onChange={this.onInputChange} />
                </div>

                <div className="input_box tz_input__box">
                    <label className="title_input" htmlFor="tz">Временная зона</label>
                    <input type="text"
                    id="tz"
                    name="tz"
                    value={this.state.tz}
                    onChange={this.onInputChange} />
                </div>

                <button className="watches_btn">Добавить</button>

            </form>
        );
    }
}
