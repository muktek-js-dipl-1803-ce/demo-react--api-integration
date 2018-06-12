import React, { Component } from 'react';
import User from './components/User.js'

//(0--APIS) install superagent
//    `npm install --save superagent

//(APIS--1) import super agentk
import request from 'superagent'

class App extends Component {
  constructor(args){
    super(args)
    this.state = {
      //(APIS--0) Set default value for data
      userList: [],

      //(STATE--0) Set default value for selected-gender option
      selectedGender: 'all'
    }
  }

//(APIS--2) BEFORE component renders, we execute
//     componentWillMount()....
  componentWillMount(){
 //     .... .and make the request
    request
      .get('https://randomuser.me/api/?results=50')
      .then((apiRes)=>{
        // (APIS--3) when the data returns, set the component'
        //    state w/ the new data
        this.setState({
          userList : apiRes.body.results
        })
      })
  }

  _genUsersList(uList, selectedGender){
    /*
      (STATE--5) FILTER the userList based on the current value of this.state.selectedGender
                  ( passed as `selectedGender` argument from .render() )

         (a)  Return Default <p>...</p>  before data arrives
         (b1) Return all the elements from the filter method
         (b2) Return only those elements from user list that are current value of selectedGender
         (c)  Map over the filtered list and create array of user components
    */


    // (a)
    if(uList.length < 1) return <p>loading...</p>

    const filteredListByGender = uList.filter((usrObj)=>{
      //(b1)
      if(selectedGender === 'all') { return true }
      //(b2)
      if(usrObj.gender === selectedGender){
        return true
      } else {
        return false
      }
    })

    //(c)
    const arrayOfComponents = filteredListByGender.map((usrObj)=>{
      console.log(usrObj)
      return <User
                userImg={usrObj.picture.large}
                userName={usrObj.name.first}
                userNat={usrObj.nat}/>
    })

    return arrayOfComponents
  }


  _spanElClassName(targetVal){
    let elClassName

    if(this.state.selectedGender === targetVal){
      elClassName = `btn-option btn--selected`
    } else {
      elClassName = 'btn-option'
    }

    return elClassName
  }

  /*
    (STATE--2) Event Handler Method
    -- Create the event-handler method--
    In this case, we just change the value of the 'selectedGender' property
    on state with the clicked value that we passed as an argument
  */
  _handleGenderClick(clickedBtnVal){
    this.setState({
      selectedGender: clickedBtnVal
    })
  }



  render() {
    return (
      <div className="App" >
        <h2>
          Users List<br/>
          <small>Consuming + Rendering API Data</small>
        </h2>

        <div className="container--btn">
         {/*
           (STATE--1) Event Listener
           Create the listener for element... the listener is anonymous function
           that executes the handler and passes as an argument
           the value of the selected option ('all', 'male', 'female'...)
         */}
          <span
            onClick={ ()=>{ this._handleGenderClick('all') } }

            {/*
              (STATE--A) -- Class Name Method --
              We have a method to determine whether to return :
              `btn-option`  OR  `btn-option btn--selected` depending on
              the this.state.selectedGender
            */}
            className={this._spanElClassName('all')} >All</span>
          <span onClick={ ()=>{ this._handleGenderClick('male') } } className={this._spanElClassName('male')} >Male</span>
          <span onClick={ ()=>{ this._handleGenderClick('female') } } className={this._spanElClassName('female')} >Female</span>
        </div>

        <div className="flex-container">
          {/*
             (APIS--4) pass this.state.userList to
             map-array-of-objects-to-components-method
           */}

            { this._genUsersList(this.state.userList, this.state.selectedGender) }

        </div>
      </div>
    );
  }
}

export default App;
