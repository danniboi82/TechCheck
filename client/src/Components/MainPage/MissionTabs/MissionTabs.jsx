import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Container, Row, Col } from 'react-grid-system';
import './MissionTabs.css';



export default class MissionTabs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a'
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div className='MissionStyle'>


              <Tabs
                style={{  height: '400px'}}
                value={this.state.value}
                onChange={this.handleChange}
                inkBarStyle={{backgroundColor: '#20b2aa'}}
                tabItemContainerStyle={{backgroundColor: 'gray'}}
                tabTemplateStyle={{color: 'black'}}
              >

                <Tab label="Our Purpose" value="a" className='TabStyle' style={{color: 'white'}}>
                  <div>
                    <p style={{
                      paddingTop: 25,
                      width: '40%',
                      margin: '0 auto',
                      paddingBottom: 25,
                      lineHeight: 1.5,
                    }}>
                      Our goal is to create a safe and reliable marketplace for buyers and sellers to exchange pc hardware and other electronics. As PC enthusiasts, we are familiar with the worries and hassles that accompany buying from second hand sellers on the internet. From receiving defective hardware to filing reports, it can be stressful on both parties.  With TechCheck, we aim to resolve those worries, allowing you to improve your PC experience with whatever parts you need, at the best prices and with zero hassle.
                    </p>
                  </div>
                </Tab>
                <Tab label="Convenience and Trust" value="b" className='TabStyle' style={{color: 'white'}}>
                  <div>
                    <p style={{
                      paddingTop: 25,
                      width: '40%',
                      margin: '0 auto',
                      paddingBottom: 25,
                      lineHeight: 1.5,
                    }}>
                      We are committed to offering buyers and sellers an enjoyable consumer experience with our easy-to-use interface. Buy and sell with no worries, as we test and verify all items upon purchase, ensuring both parties a hassle free transaction.
            </p>
                  </div>
                </Tab>
                <Tab label="Competitive Pricing" value="c" className='TabStyle' style={{color: 'white'}}>
                  <div>
                    <p style={{
                      paddingTop: 25,
                      width: '40%',
                      margin: '0 auto',
                      paddingBottom: 25,
                      lineHeight: 1.5,
                    }}>
                      Buyers can be confident that they are seeing the best price for each product.  Sellers will be competing with one another to have the lowest price and buyers can see the market prices for each product, compiled from prices across the web.            </p>
                  </div>
                </Tab>
              </Tabs>

      </div>
    );
  }
}
