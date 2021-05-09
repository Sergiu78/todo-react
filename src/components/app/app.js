import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import Postlist from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div` 
  margin: 0 auto;
  max-width: 800px;
`

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [
    {label: 'Going to learn React', important: true,like: false,id: 1},
    {label: 'This is so good', important: false,like: false,id: 2},
    {label: 'I need to break ...', important: false,like: false,id: 3}
  ],
      term: '',
      filter: 'all'
    };
    this.maxId = 4;
 }

    deleteItem(id){
      this.setState(({data}) => {
        const index = data.findIndex(elem => elem.id === id);

        const before = data.slice(0,index);
        const after = data.slice(index+1);

        const newArr = [...before, ...after];

        return {
          data: newArr
        }
          
          
      });
 }

  addItem(body){
        const newItem = {
          label: body,
          imortant: false,
          like: false,
          id: this.maxId++
        };

        this.setState(({data}) => {
          const newArr = [...data, newItem];
          return{
            data: newArr
          }
        })
      }

      onToggleImportant(id){
         this.setState(({data}) => {
          const index = data.findIndex(elem => elem.id === id);
          const old = data[index];

          const newItem = {...old, important: !old.important};
          const newArr = [...data.slice(0,index),newItem, ...data.slice(index + 1)];

          return{
             data: newArr
          }
           
        })
      }

      onToggleLiked(id){
        this.setState(({data}) => {
          const index = data.findIndex(elem => elem.id === id);
          const old = data[index];

          const newItem = {...old, like: !old.like};
          const newArr = [...data.slice(0,index),newItem, ...data.slice(index + 1)];

          return{
             data: newArr
          }
           
        })
      }

      serchPosts(items, term){
        if(term.length === 0){
          return items
        }
       return items.filter((elem) => {
          return elem.label.indexOf(term) > -1
        });
      }

      filterPost(items, filter){
        if(filter === 'like'){
          return items.filter(item => item.like)
        }else{
          return items
        }
      }

      onUpdateSearch(term){
        this.setState({term});
      }

      onFilterSelect(filter){
        this.setState({filter});
      }
 
 render(){
  const {data, term, filter} = this.state;
  const visiblePosts = this.filterPost(this.serchPosts(data, term), filter);
  const liked = this.state.data.filter(item => item.like).length;
  const allPosts = this.state.data.length;
  return (
    <AppBlock>
      <AppHeader 
      liked = {liked}
      allPosts = {allPosts}/>
      <div className="search-panel d-flex">
        <SearchPanel 
        onUpdateSearch={this.onUpdateSearch.bind(this)}/>
        <PostStatusFilter 
        filter={filter}
        onFilterSelect={this.onFilterSelect.bind(this)}/>
      </div>
      <Postlist posts={visiblePosts}
       onDelete={this.deleteItem.bind(this)}
       onToggleImportant={this.onToggleImportant.bind(this)}
       onToggleLiked={this.onToggleLiked.bind(this)}/>
      <PostAddForm 
      onAdd={this.addItem.bind(this)}/>
    </AppBlock>
  )
}

}

 