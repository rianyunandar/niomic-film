import axios from 'axios';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Grid, Image, Card, Input, Icon } from 'semantic-ui-react';

// import { connect } from 'react-redux';


class Actor extends Component {

    constructor() {
        super();
        this.state = {
            dataFilm: [],
            dataActor: []
        };
    };

    pencarian = (e) => {
        if (e.target.value === "") {
            this.getDataActor();
        } else {
            axios.get(`http://api.tvmaze.com/search/people?q=${e.target.value}`)
                .then((res) => {
                    this.setState({
                        dataActor: res.data
                    })
                })
        }
    };

    getDataActor = () => {
        axios.get(`http://api.tvmaze.com/search/people?q=b`)
            .then((res) => {
                this.setState({
                    dataActor: res.data
                })
            })
    };

    getDataFilm = () => {
        axios.get(`http://api.tvmaze.com/search/shows?q=y`)
            .then((res) => {
                this.setState({
                    dataFilm: res.data
                })
            })
    };

    componentDidMount = () => {
        this.getDataFilm();
        this.getDataActor();
    };

    render() {
        return (
            <div>
                <Carousel autoPlay centerMode centerSlidePercentage={20} showStatus={false}>
                    {this.state.dataFilm.map((data, key) => {

                        var gambar = { ...data.show.image };

                        if (data.show.image === null) {
                            gambar = "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg"
                        } else {
                            gambar = gambar.original;
                        }


                        return (
                            <div key={key}>
                                <img alt="" src={gambar} />
                            </div>
                        )
                    })}
                </Carousel>

                <Grid style={{ marginTop: 20 }}>
                    <Grid.Column width={4}>
                        <Carousel autoPlay centerMode centerSlidePercentage={40} showStatus={false}>
                            {this.state.dataActor.map((data, key) => {
                                var gambar = { ...data.person.image };
                                if (data.person.image === null) {
                                    gambar = "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg"
                                } else {
                                    gambar = gambar.original;
                                }
                                return (
                                    <div key={key}>
                                        <img alt="" src={gambar} />
                                    </div>
                                )
                            })}
                        </Carousel>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Input onChange={(e) => { this.pencarian(e) }} icon={{ name: "search", circular: true, link: true }} placeholder="Search..." />
                        <Grid style={{ marginTop: 10 }}>
                            {this.state.dataActor.map((data, key) => {
                                var gambar = { ...data.person.image };
                                if (data.person.image === null) {
                                    gambar = "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg"
                                } else {
                                    gambar = gambar.original;
                                }

                                return (
                                    <Grid.Column width={5} key={key}>
                                        <Card>
                                            <Image src={gambar} wrapped ui={false} />
                                            <Card.Content>
                                                <Card.Header>{data.person.name}</Card.Header>
                                                <Card.Meta>{data.person.gender}</Card.Meta>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <Icon name='star' />
                                                {data.score}
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                )
                            })}
                        </Grid>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

// const mapDispatchtoProps = dispatch => {
//     return dispatch({
//         type: "ACTIVE_ITEM",
//         ActiveItem: "actor"
//     })
// };

// const mapStateToProps = () => ({});


export default Actor;