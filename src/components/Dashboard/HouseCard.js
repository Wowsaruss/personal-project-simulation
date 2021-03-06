import React, {Component} from 'react';

class HouseCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            house: props.house,
            favorites: props.favorites,
            favorited: false
        };
    }

    componentWillReceiveProps(newProps) {
        let flag = false;
        newProps.favoriteHouses.forEach((item) => {
            if(item.houseid === this.state.house.id) {
                flag = true;
                console.log('working');
                this.setState({
                    favorited: true
                });

            }
        });
        if(flag === false) {
            this.setState({
                favorited: false
            });
        }
    }

        render() {
            console.log(this.state);
            const {house} = this.state;
            return(
                <div className='house-card' >
                <div className='img-container' >
                    <img src={house.img} alt=''/>
                </div>
                <div className='center' >
                    <h3>{house.name}</h3>
                    <p>{house.description}</p>
                </div>
                <div className='right' >
                    <div className='spread' >
                      <h2>Loan: ${house.loan}</h2>
                      {this.state.favorited
                      ?
                      (<div onClick={() => {this.props.unfavorite(house.id);}} >🌟</div>)
                      :
                      (<div onClick={() => {this.props.favorite(house.id);}} >⭐</div>)
                      }
                    </div>
                    <h2>Desired Rent: ${house.desiredrent}</h2>
                    <h2>Address: {house.address}</h2>
                    <h2>City: {house.city}</h2>
                </div>
              </div>
            )
        }
    }
    export default HouseCard;
