import React, { Component } from 'react';
import _ from 'lodash';
import marked from 'marked';
import { Segment, Button, Container } from 'semantic-ui-react';
import { onDelete } from '../../actions';
import { connect } from 'react-redux';
import { saveAs } from 'file-saver';

class Show extends Component {
  constructor(props) {
    super(props);
    this.renderTitles=this.renderTitles.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.setMarkup=this.setMarkup.bind(this);
    this.renderText=this.renderText.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.onDownload=this.onDownload.bind(this);

    this.state = { titles: [], title: "", text: "", clicked:false, markup: false }
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
    if(this.state.markup) {
      return { __html: this.state.title + this.state.text}
    }
    return { __html: title+text };

  }

  renderText() {
    if(this.state.clicked)
      return (
      <div>
        <Button onClick={()=>{this.setState({clicked: false})}} primary>Back</Button>
        <Button color="red" onClick={this.handleDelete} >Delete</Button>
        <Button secondary onClick={this.onDownload}>Download</Button>
        <Button primary={this.state.markup} onClick={()=>{this.setState({markup: !this.state.markup})}}>html</Button>
        <Segment>
          <div dangerouslySetInnerHTML={this.setMarkup()} />
        </Segment>
      </div>
    )
  }

  onDownload() {
    var text = this.state.text;
    var filename = this.state.title;
    var blob = new Blob([text], {type: "text/plain"});
    saveAs(blob, filename+".txt");
  }

  handleDelete() {
    this.setState({ titles: _.without(this.state.titles, this.state.title), title: "", text: "", clicked:false });
    this.props.onDelete(this.state.title);
    console.log("after this.setstate",this.state);
  }

  handleClick(event) {
    const grabtitle = event.target.title;
    const grabtext = localStorage.getItem(grabtitle);
    this.setState({ title: event.target.title, text: grabtext ,clicked: !this.state.clicked });
  }


  render() {
    return (
      <div>
        <Container text>
          {this.renderTitles()}
        </Container>
        {this.renderText()}
      </div>
    )
  }
}
export default connect(null, {onDelete})(Show);
