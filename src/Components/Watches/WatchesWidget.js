import { Component } from "react";
import WatchesForm from "./WatchesForm";
import WatchesItem from "./WatchesItem";

export default class WatchesWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clocks: [],
        };
    }

    onSubmit = (clock) => {
        const [...arr] = this.state.clocks;
        arr.push(clock);
        this.setState((prev) => ({...prev, clocks: arr}));
    }

    onClockDel = (id) => {
        this.setState((prev) => {
            return {clocks: prev.clocks.filter((clock) => clock.id !== id)};
        });
    }

    render() {
        return(
            <div className="clock_widget__box">
                <WatchesForm onFormSubmit={this.onSubmit} />

                <div className="clocks_box">
                    {this.state.clocks.map((clock) => (
                        <WatchesItem clock={clock} key={clock.id} onDelClick={this.onClockDel} />
                    ))}
                </div>
            </div>
        );
    }
}
