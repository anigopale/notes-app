import React, { Component } from 'react';
import _ from 'lodash';
import marked from 'marked';
import { Segment, Button } from 'semantic-ui-react';


class Show extends Component {
  constructor(props) {
    super(props);
    this.renderTitles=this.renderTitles.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.setMarkup=this.setMarkup.bind(this);
    this.renderText=this.renderText.bind(this);

    this.state = { titles: [], title: "", text: "", clicked:false }
    for ( var key in localStorage ) {
      if(key != 'token')
        this.state.titles = _.uniq([...this.state.titles, key]);
    }
  }

  renderTitles() {
    if(!this.state.clicked)
      return this.state.titles.map(title => {
        return (
          <Segment title={title} onClick={this.handleClick}>
            {title}
          </Segment>
        )
      });
  }

  setMarkup() {
    let text = marked(this.state.text, {sanitize:true});
    let title = (`<h1>${this.state.title}</h1>`);

    return { __html: title+text };

  }

  renderText() {
    if(this.state.clicked)
      return (
      <div>
        <Button onClick={()=>{this.setState({clicked: false})}} primary>Back</Button>
        <Button color="red">Delete</Button>
        <Segment>
          <div dangerouslySetInnerHTML={this.setMarkup()} />
        </Segment>
      </div>
    )
  }

  handleClick(event) {
    const grabtitle = event.target.title;
    const grabtext = localStorage.getItem(grabtitle);
    this.setState({ title: event.target.title, text: grabtext ,clicked: !this.state.clicked });
  }


  render() {
    return (
      <div>
        {this.renderTitles()}
        {this.renderText()}
      </div>
    )
  }
}
export default Show;
