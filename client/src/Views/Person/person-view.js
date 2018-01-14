import React from 'react';
import { Route } from 'react-router-dom';
import {
  PersonList,
  PersonInfo,
  PersonForm
} from '../../Components/Person';
import './person-view.scss';
export default ({ match }) =>
<div className='person'>
  <h1>WELCOME TO PERSON PAGE</h1>
  <Route exact path="/person" component={PersonList}/>
  <Route exact path="/person/info/:id" component={PersonInfo}/>
  <Route exact path="/person/edit/:id" component={PersonForm}/>
  <Route exact path="/person/create" component={PersonForm}/>
</div>
