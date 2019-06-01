import React from 'react';
import { Dimensions } from 'react-native';
import { View, Container, Text, Button, Picker, Icon, Header, List, ListItem } from 'native-base';
import {
    LineChart, BarChart,
} from 'react-native-chart-kit';

import Layout from '../constants/Layout';
import { ScrollView } from 'react-native-gesture-handler';

const maxInMonth = 400;
const minInMonth = 150;

const dataYear = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
        {
            data: [
                Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth,
                Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth,
                Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth,
                Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth
            ],
            color: () => `rgb(63, 191, 21)`
        },
        {
            data: [
                Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth,
                Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth,
                Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth,
                Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth, Math.random() * (maxInMonth - minInMonth) + minInMonth
            ],
            color: () => `rgba(234, 80, 144, 1)`
        }
    ]
};

const maxInHour = 1;
const minInHour = 0;

const dataDay = {
    labels: ['0h', '6h', '12h', '18h'],
    // labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    // labels: ['00:00', '10:00', '20:00'],
    datasets: [
        {
            data: [
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour
            ],
            color: () => `rgb(63, 191, 21)`
        },
        {
            data: [
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour,
                Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour, Math.random() * (maxInHour - minInHour) + minInHour
            ],
            color: () => `rgba(234, 80, 144, 1)`
        }
    ]
};

const maxInDay = 14;
const minInDay = 5;

const dataMonth = {
    labels: ['1', '10', '20'],
    datasets: [
        {
            data: [
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, 
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay
            ],
            color: () => `rgb(63, 191, 21)`
        },
        {
            data: [
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, 
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay
            ],
            color: () => `rgba(234, 80, 144, 1)`
        }
    ]
};

const dataWeek = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
        {
            data: [
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay
            ],
            color: () => `rgb(63, 191, 21)`
        },
        {
            data: [
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay, Math.random() * (maxInDay - minInDay) + minInDay,
                Math.random() * (maxInDay - minInDay) + minInDay
            ],
            color: () => `rgba(234, 80, 144, 1)`
        }
    ]
};

export default class ChartScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    constructor (props) {
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
    }

    

    render() {
        return (
            <Container style={{marginHorizontal: 10}}>
                <ScrollView>
                    <Header transparent/>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'baseline' }}>
                        <Text style={{ marginRight: 10, fontSize: 18 }}>Connection Status</Text>
                        <Icon name="checkmark" style={{ color: "green", fontSize: 25 }} />
                    </View>
                    <View style={{ alignSelf: 'flex-end', width: Layout.window.width / 3 }}>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="arrow-down" />}
                            placeholder="Select timespan"
                            placeholderStyle={{ color: "#bfc6ea" }}
                            placeholderIconColor="#007aff"
                            selectedValue={this.state.selected}
                            onValueChange={(val) => this.handleData(val)}
                        >
                            <Picker.Item label="Today" value={1} />
                            <Picker.Item label="Yesterday" value={2} />
                            <Picker.Item label="Last 7 days" value={3} />
                            <Picker.Item label="Last 30 days" value={4} />
                            <Picker.Item label="Last year" value={5} />
                            <Picker.Item label="Custom..." value={6} />
                        </Picker>
                    </View>
                    <View>
                        <LineChart
                            data={this.state.data}
                            width={Layout.window.width - 20}
                            height={220}
                            fromZero
                            chartConfig={{
                                // backgroundColor: '#eee',
                                backgroundGradientFrom: '#eee',
                                backgroundGradientTo: '#eee',
                                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                withShadow: false
                            }}
                            // bezier
                            withDots={false}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{marginRight: 3, fontSize: 10}}>Production</Text>
                                <Icon name="controller-record" type="Entypo" style={{ color: `rgb(63, 191, 21)` }} />
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{marginRight: 3, fontSize: 10}}>Consumption</Text>
                                <Icon name="controller-record" type="Entypo" style={{ color: `rgb(234, 80, 144)` }} />
                            </View>
                        </View>
                    </View>
                    <List>
                        <ListItem>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                                <Text>Power Production</Text>
                                <Text style={{ color: `rgb(63, 191, 21)`, fontWeight: '500'}}>{this.state.data.datasets[0].data.reduce((a,b) => a + b, 0).toFixed(2)}</Text>
                            </View>
                        </ListItem>
                        <ListItem>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                                <Text>Power Consumption</Text>
                                <Text style={{ color: `rgb(234, 80, 144)`, fontWeight: '500'}}>{this.state.data.datasets[1].data.reduce((a,b) => a + b, 0).toFixed(2)}</Text>
                            </View>
                        </ListItem>
                        {
                            this.state.data.datasets[0].data.reduce((a,b) => a + b, 0).toFixed(2) > this.state.data.datasets[1].data.reduce((a,b) => a + b, 0).toFixed(2) ?
                            <ListItem>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                                    <Text>Earned</Text>
                                    <Text>{`$${((this.state.data.datasets[0].data.reduce((a,b) => a + b, 0) - this.state.data.datasets[1].data.reduce((a,b) => a + b, 0)) * 2134 / 23000).toFixed(2)}`}</Text>
                                </View>
                            </ListItem> :
                            <ListItem>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flex: 1 }}>
                                    <Text>Savings</Text>
                                    <Text>{`$${((this.state.data.datasets[1].data.reduce((a,b) => a + b, 0) - this.state.data.datasets[0].data.reduce((a,b) => a + b, 0)) * 2134 / 23000).toFixed(2)}`}</Text>
                                </View>
                            </ListItem>
                        }
                    </List>
                </ScrollView>
            </Container>
        );
    }
}
// 2134