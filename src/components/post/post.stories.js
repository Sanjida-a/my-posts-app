import React from 'react';

import Post from './Post';

export default {
  title: 'Components/Post',
  component: Post
};

const Template = () => (
  <Post 
    content = "Hey, I am a new post!" 
    date="08/09/2021" 
  />
);

export const Default = Template.bind({});


