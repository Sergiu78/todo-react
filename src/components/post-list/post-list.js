import React from 'react';

import './post-list.css';

import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';




const PostList = ({posts, onDelete,onToggleImportant,onToggleLiked}) => {
	const elements = posts.map((item) => {
		//либо const {id, ...itemProps} = item; и писать в key {id} а в <PostListItem {...itemProps} />
		return(
			<li key={item.id} className='list-group-item'>
				<PostListItem 
				label={item.label} 
				like={item.like}
				important={item.important} 
				onDelete={() => onDelete(item.id)}
				onToggleImportant={() => onToggleImportant(item.id)}
				onToggleLiked={() => onToggleLiked(item.id)}/>
				{/*либо спрэд оператор <PostListItem {...item} />*/}
			</li>
			)
	});
  return(
    <ListGroup className="app-list">
      {elements}
    </ListGroup>
  )
}
export default PostList;
