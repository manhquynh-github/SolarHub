import React from 'react';
import { StyleSheet, TouchableNativeFeedback } from 'react-native';
import {
  View,
  Container,
  Text,
  Button,
  Picker,
  Icon,
  Header,
  List,
  ListItem,
  ListDivider,
  Left,
  Body,
  Right,
  Title,
  Card,
  Col,
  Grid,
  Content,
} from 'native-base';
import { LineChart, BarChart } from 'react-native-chart-kit';

import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import StatusBarOverlay from '../components/StatusBarOverlay';

const maxInMonth = 400;
const minInMonth = 150;

function generateData(max, min, count) {
  return Array.from(Array(count), () => Math.random() * (max - min) + min);
}

const dataYear = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      data: generateData(maxInMonth, minInMonth, 12),
      color: () => 'green',
    },
    {
      data: generateData(maxInMonth, minInMonth, 12),
      color: () => 'red',
    },
  ],
};

const maxInHour = 1;
const minInHour = 0;

const dataDay = {
  labels: ['0h', '6h', '12h', '18h'],
  // labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  // labels: ['00:00', '10:00', '20:00'],
  datasets: [
    {
      data: generateData(maxInHour, minInHour, 24),
      color: () => 'green',
    },
    {
      data: generateData(maxInHour, minInHour, 24),
      color: () => 'red',
    },
  ],
};

const maxInDay = 14;
const minInDay = 5;

const dataMonth = {
  labels: ['1', '10', '20'],
  datasets: [
    {
      data: generateData(maxInDay, minInDay, 30),
      color: () => 'green',
    },
    {
      data: generateData(maxInDay, minInDay, 30),
      color: () => 'red',
    },
  ],
};

const dataWeek = {
  labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  datasets: [
    {
      data: generateData(maxInDay, minInDay, 7),
      color: () => 'green',
    },
    {
      data: generateData(maxInDay, minInDay, 7),
      color: () => 'red',
    },
  ],
};

export default class AnalyticsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { selected: 1, data: dataDay };
  }

  handleData = (val) => {
    switch (val) {
      case 1:
        this.setState({ data: dataDay, selected: val });
        break;
      case 2:
        this.setState({ data: dataDay, selected: val });
        break;
      case 3:
        this.setState({ data: dataWeek, selected: val });
        break;
      case 4:
        this.setState({ data: dataMonth, selected: val });
        break;
      case 5:
        this.setState({ data: dataYear, selected: val });
        break;
      default:
        break;
    }
  };

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
        <Content>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'baseline',
              marginTop: 10,
              marginLeft: 20,
              marginRight: 20,
            }}>
            <Icon name="checkmark" style={{ color: 'green', fontSize: 25 }} />
            <Text style={{ marginLeft: 10, fontSize: 18, color: 'green' }}>
              All modules are working properly.
            </Text>
          </View>
          <View style={styles.chartsView}>
            <View style={{ minHeight: 40, marginBottom: 10 }}>
              <Grid>
                <Col style={{ justifyContent: 'center' }}>
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    Power
                  </Text>
                </Col>
                <Col>
                  <View
                    style={{
                      flex: 1,
                      maxWidth: 175,
                      paddingLeft: 10,
                      paddingRight: 10,
                      borderWidth: 1,
                      borderRadius: 25,
                      borderColor: 'lightgray',
                    }}>
                    <Picker
                      mode="dropdown"
                      style={{ height: 40 }}
                      iosIcon={<Icon name="arrow-down" />}
                      placeholder="Select timespan"
                      placeholderStyle={{ color: '#bfc6ea' }}
                      placeholderIconColor="#007aff"
                      selectedValue={this.state.selected}
                      onValueChange={(val) => this.handleData(val)}>
                      <Picker.Item label="Today" value={1} />
                      <Picker.Item label="Yesterday" value={2} />
                      <Picker.Item label="Last 7 days" value={3} />
                      <Picker.Item label="Last 30 days" value={4} />
                      <Picker.Item label="Last year" value={5} />
                      <Picker.Item label="Custom..." value={6} />
                    </Picker>
                  </View>
                </Col>
              </Grid>
            </View>
            <View>
              <LineChart
                data={this.state.data}
                width={Layout.window.width - 32}
                height={220}
                fromZero
                chartConfig={{
                  backgroundColor: 'transparent',
                  backgroundGradientFrom: '#fff',
                  backgroundGradientTo: '#fff',
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  withShadow: false,
                  strokeWidth: 3,
                }}
                // bezier
                withDots={false}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon
                    name="controller-record"
                    type="Entypo"
                    style={{ color: 'green' }}
                  />
                  <Text style={{ marginLeft: 3, fontSize: 16 }}>Produced</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon
                    name="controller-record"
                    type="Entypo"
                    style={{ color: `red` }}
                  />
                  <Text style={{ marginLeft: 3, fontSize: 16 }}>Consumed</Text>
                </View>
              </View>
            </View>
          </View>
          <List style={{ marginLeft: 15, marginRight: 15 }}>
            <ListItem noIndent button delayPressIn={0}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <Text>Total power produced</Text>
                <Text style={{ color: 'green', fontWeight: 'bold' }}>
                  {`${this.state.data.datasets[0].data
                    .reduce((a, b) => a + b, 0)
                    .toFixed(2)} KW`}
                </Text>
              </View>
            </ListItem>
            <ListItem noIndent button delayPressIn={0}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flex: 1,
                }}>
                <Text>Total power consumed</Text>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>
                  {`${this.state.data.datasets[1].data
                    .reduce((a, b) => a + b, 0)
                    .toFixed(2)} KW`}
                </Text>
              </View>
            </ListItem>
            {this.state.data.datasets[0].data
              .reduce((a, b) => a + b, 0)
              .toFixed(2) >
            this.state.data.datasets[1].data
              .reduce((a, b) => a + b, 0)
              .toFixed(2) ? (
              <ListItem noIndent button delayPressIn={0}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}>
                  <Text>Money earned</Text>
                  <Text style={{ fontWeight: 'bold', color: 'green' }}>{`$${(
                    ((this.state.data.datasets[0].data.reduce(
                      (a, b) => a + b,
                      0
                    ) -
                      this.state.data.datasets[1].data.reduce(
                        (a, b) => a + b,
                        0
                      )) *
                      2134) /
                    23000
                  ).toFixed(2)}`}</Text>
                </View>
              </ListItem>
            ) : (
              <ListItem noIndent button delayPressIn={0}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                  }}>
                  <Text>Money saved</Text>
                  <Text style={{ fontWeight: 'bold', color: 'green' }}>{`$${(
                    ((this.state.data.datasets[1].data.reduce(
                      (a, b) => a + b,
                      0
                    ) -
                      this.state.data.datasets[0].data.reduce(
                        (a, b) => a + b,
                        0
                      )) *
                      2134) /
                    23000
                  ).toFixed(2)}`}</Text>
                </View>
              </ListItem>
            )}
          </List>
        </Content>
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
  chartsView: {
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    elevation: 0,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 20,
    marginBottom: 20,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10,
  },
});
