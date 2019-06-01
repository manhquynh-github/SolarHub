import React, { Component } from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Title,
  Right,
  Body,
  Grid,
  Col,
  Row,
  Text,
} from 'native-base';
import { Image } from 'react-native';
import StatusBarOverlay from '../components/StatusBarOverlay';
import Colors from '../constants/Colors';

export default class OverviewScreen extends Component {
  render() {
    return (
      <Container>
        <StatusBarOverlay />
        <Header style={styles.header}>
          <Left style={{ flex: 1 }}>
            <Button
              transparent
              delayPressIn={0}
              rounded
              icon
              androidRippleColor="lightgray">
              <Icon name="menu" style={{ color: '#000' }} />
            </Button>
          </Left>
          <Body style={{ flex: 1 }}>
            <Title style={styles.headerTitle}>SOLAR HUB</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button
              transparent
              delayPressIn={0}
              rounded
              icon
              androidRippleColor="lightgray">
              <Icon name="person" style={{ color: '#000' }} />
            </Button>
          </Right>
        </Header>
        <LinearGradient
          colors={['#fff', '#f4fff4']}
          style={{ flex: 1 }}
          start={[0, 0.5]}>
          <View>
            <Image
              source={require('../assets/images/house.png')}
              style={styles.houseImage}
            />
            <View style={{ position: 'absolute', right: 50, bottom: 25 }}>
              <Button
                delayPressIn={0}
                rounded
                icon
                transparent
                androidRippleColor="green"
                style={styles.checkMarkButton}>
                <Icon
                  name="checkmark"
                  style={{
                    color: 'green',
                    marginLeft: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    marginRight: 0,
                  }}
                />
              </Button>
            </View>
          </View>
          <Grid
            style={{
              width: 350,
              alignSelf: 'center',
              maxHeight: 300,
            }}>
            <Row>
              <Col style={styles.statsItemContainer}>
                <TouchableNativeFeedback
                  delayPressIn={0}
                  background={TouchableNativeFeedback.Ripple('lightgray')}>
                  <View style={styles.statsView}>
                    <Text uppercase={false} style={styles.statsHeader}>
                      Power produced
                    </Text>
                    <Text
                      uppercase={false}
                      style={{ ...styles.statsContent, color: 'green' }}>
                      10 kWh
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </Col>
              <Col style={styles.statsItemContainer}>
                <TouchableNativeFeedback
                  delayPressIn={0}
                  background={TouchableNativeFeedback.Ripple('lightgray')}>
                  <View style={styles.statsView}>
                    <Text uppercase={false} style={styles.statsHeader}>
                      Power consumed
                    </Text>
                    <Text
                      uppercase={false}
                      style={{ ...styles.statsContent, color: 'red' }}>
                      10 kWh
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </Col>
            </Row>
            <Row>
              <Col style={styles.statsItemContainer}>
                <TouchableNativeFeedback
                  delayPressIn={0}
                  background={TouchableNativeFeedback.Ripple('lightgray')}>
                  <View style={styles.statsView}>
                    <Text uppercase={false} style={styles.statsHeader}>
                      Money saved
                    </Text>
                    <Text
                      uppercase={false}
                      style={{ ...styles.statsContent, color: 'green' }}>
                      $1000
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </Col>
              <Col style={styles.statsItemContainer}>
                <TouchableNativeFeedback
                  delayPressIn={0}
                  background={TouchableNativeFeedback.Ripple('lightgray')}>
                  <View style={styles.statsView}>
                    <Text uppercase={false} style={styles.statsHeader}>
                      Money earned
                    </Text>
                    <Text
                      uppercase={false}
                      style={{ ...styles.statsContent, color: 'green' }}>
                      $799
                    </Text>
                  </View>
                </TouchableNativeFeedback>
              </Col>
            </Row>
          </Grid>
        </LinearGradient>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.statusBarColor,
    borderBottomWidth: 0,
    elevation: 0,
  },
  headerTitle: {
    color: '#000',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  houseImage: {
    height: 320,
    width: 320,
    marginBottom: 10,
    alignSelf: 'center',
  },
  statsItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsView: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 5,
    width: 150,
    height: 125,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsHeader: {
    fontSize: 21,
    textAlign: 'center',
  },
  statsContent: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  checkMarkButton: {
    borderColor: 'green',
    borderWidth: 1,
    padding: 0,
    width: 35,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
