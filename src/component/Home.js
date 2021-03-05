import axios from 'axios';
import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Grid, Card, Image, Icon,Header } from 'semantic-ui-react';

import { connect } from 'react-redux';



class Home extends Component {
    constructor() {
        super();
        this.state = {
            dataCarausel:[],
            dataHome: [],
            loading:true,

        };
    };

    getDataCarausel = async () => {
        try{
            await axios.get(`https://api.tvmaze.com/shows`,{crossDomain:true})
            .then( async (res) => {
               let resData = res.data.sort(function(a,b){
                   return a.rating.average < b.rating.average
                   ? 1
                   :b.rating.average < a.rating.average
                   ?-1 
                   :0
               })              
               let spliceData = resData.slice(0,10);
               this.setState({
                 dataCarausel:spliceData,
                 
             })
         })
     
              } catch(error){
            alert(JSON.stringify(error.message))
        }
};

     getData = async () => {
         try{
            await axios.get(`https://api.tvmaze.com/schedule`,{crossDomain:true})
            .then( async (res) => {
               this.setState({
                dataHome:res.data,
                 loading:false
             })
         })
         } catch(error){
            alert(JSON.stringify(error.message))
        }
};

    componentDidMount = async () => {
        await this.getDataCarausel();
        await this.getData();
        
    }

    render() {
        return (
           <>
            {this.state.loading ? (<h1>Loading .... </h1>) :(
            <div>
                 <Header as='h1'>Top Films</Header>
                <Carousel autoPlay centerMode centerSlidePercentage={40} showStatus={false}>
                    {this.state.dataCarausel.map((data, key) => {
                        return (
                            <div key={key}>
                                <img style={{height: "auto", width:"40%"}} alt={data.name} src={data.image.medium} />
                             <h2 className="legend">{data.name}</h2>
                            </div>
                        )
                    })}
                </Carousel>
                <Header as='h1'>Today Schedules</Header>
                <Grid>
                    {this.state.dataHome.map((data, key) => {

                        var gambar = { ...data.show.image };
                        var rating = { ...data.show.rating };

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
                            <Grid.Column width={3} key={key}>
                                <Card >
                                    <Image src={gambar} wrapped ui={false} />
                                    <Card.Content>
                                        <Card.Header>{data.show.name}</Card.Header>
                                        <Card.Description>
                                            {data.show.status}
                                        </Card.Description>
                                        <Card.Description>
                                            Time :  {data.airtime}
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
            )}
       </>
            
        )
    }
}

const mapDispatchtoProps = dispatch => {
    return dispatch({
        type: "ACTIVE_ITEM",
        ActiveItem: "home"
    })
}


export default connect(null,mapDispatchtoProps)(Home);