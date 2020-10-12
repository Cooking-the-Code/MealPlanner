import React from 'react';
import { Button } from '@material-ui/core';
import Icon from 'react-simple-icons'

function Facebook() {
    return (
        <Button >
            <Icon name='facebook' color='#1877F2' width='4rem' height='7rem' />
        </Button>
    )
}

function Instagram() {
    return (
        <Button >
            <Icon name='instagram' color='#E4405f' width='4rem' height='7rem' />
        </Button>
    )
}

function LinkedIn() {
    return (
        <Button >
            <Icon name='linkedin' color='#0077B5' width='4rem' height='7rem' />
        </Button>
    )
}

function Twitter() {
    return (
        <Button >
            <Icon name='twitter' color='#1Da1F2' width='4rem' height='7rem' />
        </Button>
    )
}


export { Facebook, Instagram, LinkedIn, Twitter }