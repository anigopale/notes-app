import React, { Component } from 'react';
import { Form, Grid, TextArea, Segment, Responsive } from 'semantic-ui-react';
import marked from 'marked';

class Create extends Component {
  constructor(props){
    super(props);
    this.state = { text: "" };
    this.setMarkup=this.setMarkup.bind(this);
  }

  setMarkup() {
    let text = marked(this.state.text, {sanitize:true});
    console.log(text);
    return { __html: text };
  }

  onTextChange(event) {
    this.setState({ text: event.target.value })
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
              Editor
              <Form>
                <TextArea onChange={this.onTextChange.bind(this)}/>
              </Form>
            </div>
          </Grid.Column>

          <Grid.Column>
            <div>
              Preview
              {this.renderPreview()}
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default Create;
