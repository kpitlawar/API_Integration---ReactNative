import React, { useState } from "react";
import { Button, View, Text} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Moment from 'react-moment';

const DatePicker = () => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [dateFinal, setDateFinal] = useState();

 

    // using state
    //   constructor(){
    //       super();
    //       this.state = {
    //         isDatePickerVisible : false
    //       }
    //   }

    //   const showDatePicker = () => {
    //     this.setState({
    //         isDatePickerVisible : true
    //     })
    //   };
    //  ...

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // console.warn("A date has been picked: ", date);
        
        alert("A date has been picked: " + date);
        hideDatePicker();
    };


    
    return (
        <View>
            <Button title="Show Date Picker" onPress={showDatePicker} />
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
           
        </View>
    );
};

export default DatePicker;