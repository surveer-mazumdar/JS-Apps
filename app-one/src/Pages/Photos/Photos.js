import React, { Component } from "react";
import { appConfig } from '../../config/app-config';

class Photos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            photos: []
        };

        //this.addActivity = this.addActivity.bind(this);
    }

    componentDidMount() {
       this.loadPhotos()
    }

    loadPhotos = (e) => {
        fetch(`${appConfig.apiUrl}/photos`)
        .then(res => res.json())
        .then(
            (result) => {
                let tenItems = result.splice(0, 10);
                this.setState({
                    isLoaded: true,
                    photos: tenItems
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

    deletePhoto = (e) => {
        const state = this.state;
        var photos = state.photos;
        photos.pop();
        this.setState({
           ...state,
           photos: photos
        });
    }

    render() {
        const { error, isLoaded, photos } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div>
                    <div>{photos.length}</div>                    
                    <div>Loading...</div>
                </div>
                )
        } else {
            return (
                <div>
                            <div>{photos.length}</div>     
                            <button onClick={this.deletePhoto}>Delete</button>                       
                            <button onClick={this.loadPhotos}>Load</button>                       
                            <div className="container-fluid">
                                <ul className="row">
                                    {photos.map(item => (
                                        <li className="col-2" key={item.title}>
                                            <img src={item.url} className="col-12"/>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        );
                    }
                }
            }
            
export default Photos;