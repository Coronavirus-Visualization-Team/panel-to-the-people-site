import React, { Component } from 'react';
import * as typeformEmbed from'@typeform/embed'
import { Button } from '@material-ui/core'

class Popup extends Component {

    componentDidMount() {
        const popup = typeformEmbed.makePopup(
            'https://kyguy200617.typeform.com/to/kYbiKeIN',
            {
                mode: 'popup',
                autoClose: 3000,
                hideHeaders: true,
                hideFooter: true,
                onSubmit: function() {
                    console.log('Typeform successfully submitted')
                }
            }
        )

        document.getElementById('bt-popup').addEventListener('click', function() {
            popup.open();
        })
    }

    render() {
        return (
            <div>
                <Button variant="contained" id="bt-popup" color="primary">
                    Learn more
                </Button>
            </div>
        )
    }
    
}

export default Popup;