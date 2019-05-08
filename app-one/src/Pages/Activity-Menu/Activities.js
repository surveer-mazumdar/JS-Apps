import React, { Component } from "react";
import { appConfig } from '../../config/app-config';

class Activities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            activities: []
        };

        //this.addActivity = this.addActivity.bind(this);
    }

    componentDidMount() {
        return;
        fetch(`${appConfig.apiUrl}/Activities`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        activities: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    getActivity = (e) => {
        e.preventDefault();
        console.log("Here is the click");
    }

    addActivity = (e) => {
        const { activities } = this.state;
        activities.push({
            "ID": activities.length + 1,
            "Title": "New Activity",
            "DueDate": "2019-01-11T12:16:26.54907+00:00",
            "Completed": false
        });
        this.setState({
            isLoaded: true,
            activities: activities
        });
    }

    render() {
        const { error, isLoaded, activities } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div>
                    <div>{activities.length}</div>
                    <div>
                        <button onClick={this.addActivity}>Add Activity</button>
                    </div>
                    <div>Loading...</div>
                </div>
                )
        } else {
            return (
                <div>
                            <div>{activities.length}</div>
                            <div>
                                <button onClick={this.addActivity}>Add Activity</button>
                            </div>
                            <div>
                                <ul>
                                    {activities.map(item => (
                                        <li key={item.Title}>
                                            <a href="#" onClick={this.getActivity}><span>#{item.ID} {item.Title}</span></a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        );
                    }
                }
            }
            
export default Activities;