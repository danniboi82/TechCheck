import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Container, Row, Col } from 'react-grid-system';

const styles = {

  default_tab: {
    color: "#2196F3",
    backgroundColor: "#ffffff",
    fontWeight: 400,
    width: 500,


  },


};

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
      // <div style={{marginLeft: 'auto',
      // marginRight: 'auto'}}>
      <Container>
        <Row>
          <Col sm={12}>
            <div className='wrapper' style={{ width: '100%', maxWidth: '100%', margin: 'auto', height: '400px' }}>
              <Tabs
                styles={{ float: 'none' }}
                value={this.state.value}
                onChange={this.handleChange}
                // tabItemContainerStyle={{width: '800px', margin: 'auto'}}
                style={{ background: '#FFFFFF' }}
                contentContainerStyle={{ background: '#FFF', margin: 'auto' }} >

                <Tab label="Our Purpose" value="a" style={styles.default_tab}>
                  <div>
                    <p style={{
                      paddingTop: 50,
                      width: '50%',
                      margin: '0 auto',
                      paddingBottom: 50,
                      lineHeight: 1.5,
                    }}>
                      Our goal is to create a safe and reliable marketplace for buyers and sellers to exchange pc hardware and other electronics. As PC enthusiasts, we are familiar with the worries and hassles that accompany buying from second hand sellers on the internet. From receiving defective hardware to filing reports, it can be stressful on both parties.  With TechCheck, we aim to resolve those worries, allowing you to improve your PC experience with whatever parts you need, at the best prices and with zero hassle.
            </p>
                  </div>
                </Tab>
                <Tab label="Convenience and Trust" value="b" style={styles.default_tab}>
                  <div>
                    <p style={{
                      paddingTop: 50,
                      width: '50%',
                      margin: '0 auto',
                      paddingBottom: 50,
                      lineHeight: 1.5,
                    }}>
                      We are committed to offering buyers and sellers an enjoyable consumer experience with our easy-to-use interface. Buy and sell with no worries, as we test and verify all items upon purchase, ensuring both parties a hassle free transaction.
            </p>
                  </div>
                </Tab>
                <Tab label="Competitive Pricing" value="c" style={styles.default_tab}>
                  <div>
                    <p style={{
                      paddingTop: 50,
                      width: '50%',
                      margin: '0 auto',
                      paddingBottom: 50,
                      lineHeight: 1.5,
                    }}>
                      Buyers can be confident that they are seeing the best price for each product.  Sellers will be competing with one another to have the lowest price and buyers can see the market prices for each product, compiled from prices across the web.            </p>
                  </div>
                </Tab>
              </Tabs>
            </div>

          </Col>
        </Row>
      </Container>
    );
  }
}
