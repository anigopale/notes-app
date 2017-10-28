import React, { Component } from 'react';
import { Form, Grid, TextArea, Segment, Responsive, Button } from 'semantic-ui-react';
import marked from 'marked';


class Create extends Component {
  constructor(props){
    super(props);
    this.state = { text: "", title: "" };
    this.setMarkup=this.setMarkup.bind(this);
  }

  setMarkup() {
    let text = marked(this.state.text, {sanitize:true});
    let title = (`<h1>${this.state.title}</h1>`)
    console.log("text begins here:",text);
    return { __html: title+text };
  }

  onTextChange(event) {
    this.setState({ text: event.target.value })
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value })
  }

  renderPreview(){
    if(!this.state.text)
      return <div>Your text will appear here</div>
    return (
      <Segment>
        <div dangerouslySetInnerHTML={this.setMarkup()} />
      </Segment>
    );
  }


  render() {
    return (
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column>
            <div>
              <h2>Editor</h2>
              <Segment>

                <Form>
                  <Form.Group>
                    <Button onClick={() => {this.setState({text: ""})}} secondary>Clear</Button>
                    <Button primary>Save</Button>
                  </Form.Group>

                    <Form.Input label="title" onChange={this.onTitleChange.bind(this)} ></Form.Input>
                    <TextArea onChange={this.onTextChange.bind(this)} value={this.state.text} placeholder="enter text here" />

                </Form>
              </Segment>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div>
              <h2>Preview</h2>
              {this.renderPreview()}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Create;
