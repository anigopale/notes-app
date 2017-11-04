import React, { Component } from 'react';
import { Form, Grid, TextArea, Segment, Responsive, Button } from 'semantic-ui-react';
import marked from 'marked';
import { connect } from 'react-redux';
import { postNotes } from '../../actions';


class Create extends Component {
  constructor(props){
    super(props);
    this.state = { text: "", title: "", preview: false, markup: false };
    this.setMarkup=this.setMarkup.bind(this);
  }

  setMarkup() {
    let text = marked(this.state.text, {sanitize:true});
    let title = (`<h1>${this.state.title}</h1>`);
    console.log("text begins here:",text);
    if(this.state.markup){
      return { __html: this.state.title+this.state.text}
    }
    return { __html: title+text };
  }

  onTextChange(event) {
    this.setState({ text: event.target.value })
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  renderPreview(){
    if(!this.state.text && !this.state.title)
      return <div>Your text will appear here</div>
    return (
      <Segment>
        <div dangerouslySetInnerHTML={this.setMarkup()} />
      </Segment>
    );
  }

  renderPreviewDiv() {
    if(this.state.preview)
    return (
      <div>
        <h2>Preview</h2>
        {this.renderPreview()}
      </div>
  );
  }

  handleColumns() {
    if(this.state.preview)
      return 2;
    return 1;
  }

  handleSubmit() {
    this.props.postNotes(this.state.text, this.state.title);
  }

  renderMarkupbutton() {
    return (
      <div>
        <Button primary={this.state.markup} onClick={()=>{this.setState({markup: !this.state.markup})}}>html</Button>
      </div>
    );
  }

  changeHtml() {

  }

  render() {
    console.log(this.state);
    return (
      <Grid>
        <Grid.Row columns={this.handleColumns()}>
          <Grid.Column>
            <div>
              <h2>Editor</h2>
              <Segment>

                <Form>
                  <Form.Group>
                    <Button onClick={() => {this.setState({ text: "", title: "" })}} secondary>Clear</Button>
                    <Button primary onClick={this.handleSubmit.bind(this)} >Save</Button>
                    <Button onClick={() => {this.setState({preview: !this.state.preview })}}>Toggle Preview</Button>
                    {this.renderMarkupbutton()}
                  </Form.Group>

                    <Form.Input label="title" onChange={this.onTitleChange.bind(this)} value={this.state.title} placeholder="enter title" ></Form.Input>
                    <TextArea onChange={this.onTextChange.bind(this)} value={this.state.text} placeholder="enter text here" />

                </Form>
              </Segment>
            </div>
          </Grid.Column>

          <Grid.Column>
            {this.renderPreviewDiv()}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(null,{ postNotes })(Create);
