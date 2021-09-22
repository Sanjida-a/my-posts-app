import React from 'react';

import Bio from './Bio';

export default {
  title: 'Components/Bio',
  component: Bio
};

const Template = () => (
    <Bio
    headshot='https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    name = "Samantha Fayokh"
    tagline = "Expressing myself through words"
    role = "Journalist @ ABC"
/>
);

export const Default = Template.bind({});


