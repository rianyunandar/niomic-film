import axios from 'axios';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Grid, Card, Image, Icon } from 'semantic-ui-react';

// import { connect } from 'react-redux';

var images = [
    "https://cdn.pixabay.com/photo/2015/03/26/09/43/lenses-690179__480.jpg",

    "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289__480.jpg",

    "https://cdn.pixabay.com/photo/2014/10/31/17/41/dancing-dave-minion-510835__480.jpg",

    "https://cdn.pixabay.com/photo/2016/01/22/08/17/banner-1155437__480.png",

    "https://cdn.pixabay.com/photo/2019/01/13/21/36/analog-3931362__480.jpg",

    "https://cdn.pixabay.com/photo/2017/12/18/13/03/grain-3026099__480.jpg",

    "https://cdn.pixabay.com/photo/2015/05/15/09/13/demonstration-767982__480.jpg",

    "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__480.jpg"
]

class Beranda extends Component {
    constructor() {
        super();
        this.state = {
            dataHome: []
        };
    };

    getData = () => {
        axios.get(`http://api.tvmaze.com/search/shows?q=a`)
            .then((res) => {
                this.setState({
                    dataHome: res.data
                })
            })
    };

    componentDidMount = () => {
        this.getData();
    }

    render() {
        return (
            <div>
                <Carousel autoPlay centerMode centerSlidePercentage={40} showStatus={false}>
                    {images.map((data, key) => {
                        return (
                            <div key={key}>
                                <img alt="" src={data} />
                            </div>
                        )
                    })}
                </Carousel>

                <Grid>
                    {this.state.dataHome.map((data, key) => {

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
                            <Grid.Column width={4} key={key}>
                                <Card >
                                    <Image src={gambar} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>{data.show.name}</Card.Header>
                                        <Card.Description>
                                            {data.show.status}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Icon name='star' />
                                        {rating}
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        )
                    })}
                </Grid>
            </div>
        );
    }
}

// const mapDispatchtoProps = dispatch => {
//     return dispatch({
//         type: "ACTIVE_ITEM",
//         ActiveItem: "home"
//     })
// }

// const mapStateToProps = () => ({});

export default Beranda;