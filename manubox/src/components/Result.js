import React, {useState} from 'react';

export default function Result() {

    // state
        const [listBox , setListBox] = useState([
            {'name': 'S','price': '50',surface:3},
            {name: 'M',price: '80',surface:6},
            {name: 'L',price: '140',surface:10},
            {name: 'XL',price: '200',surface:16}
        ])
    // comportements
        console.log(listBox)
    // render
        return (
            <React.Fragment>
                
            </React.Fragment>
        )
}