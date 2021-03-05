import axios from 'axios';
import React, { Component } from 'react';
import { Image, Grid, Input, Card, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Film extends Component { 
    constructor() {
        super();
        this.state = {
            dataFilm: []
        };
    };

    getData = async () => {
        try{

       await axios.get(`http://api.tvmaze.com/search/shows?q=marvel`)
            .then((res) => {
                this.setState({
                    dataFilm: res.data
                })
            })
        }catch(error){
           alert(JSON.stringify(error.message))
       }

    };

    pencarian = (e) => {
        if (e.target.value === "") {
            this.getData();
        } else {
            axios.get(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
                .then((res) => {
                    this.setState({
                        dataFilm: res.data
                    })
                })
        }
    };

    componentDidMount = () => {
        this.getData();
    }

    render() {
        return (
            <div>
                <Grid celled='internally'>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <Image src='https://cdn.pixabay.com/photo/2015/03/26/09/43/lenses-690179__480.jpg' />
                            <Image style={{ marginTop: 20 }} src='https://cdn.pixabay.com/photo/2015/03/26/09/43/lenses-690179__480.jpg' />
                            <Image style={{ marginTop: 20 }} src='https://cdn.pixabay.com/photo/2015/03/26/09/43/lenses-690179__480.jpg' />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Input onChange={(e) => { this.pencarian(e) }} icon={{ name: "search", circular: true, link: true }} placeholder="Search..." />

                            <Grid style={{ marginTop: 10 }}>
                                {this.state.dataFilm.map((data, key) => {

                                    var gambar = { ...data.show.image };
                                    var rating = { ...data.show.rating }

                                    if (data.show.image === null) {
                                        gambar = "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg"
                                    } else {
                                        gambar = gambar.original;
                                    }

                                    if (rating.average === null) {
                                        rating = 0
                                    } else {
                                        rating = rating.average
                                    }

                                    return (
                                        <Grid.Column width={5} key={key}>
                                            <Card>
                                                <Image src={gambar} wrapped ui={false} />
                                                <Card.Content>
                                                    <Card.Header>{data.show.name}</Card.Header>
                                                    <Card.Meta>status : {data.show.status}</Card.Meta>
                                                    <Card.Description>
                                                        {data.show.language}
                                                    </Card.Description>
                                                </Card.Content>
                                                <Card.Content extra>
                                                    <Icon name='star' />
                                                    {rating.average}
                                                </Card.Content>
                                            </Card>
                                        </Grid.Column>
                                    )
                                })}

                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image src='https://cdn.pixabay.com/photo/2015/03/26/09/43/lenses-690179__480.jpg' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}

const mapDispatchtoProps = dispatch => {
    return dispatch({
        type: "ACTIVE_ITEM",
        ActiveItem: "film"
    })
}


export default connect(null,mapDispatchtoProps)(Film);