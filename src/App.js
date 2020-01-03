import React,{Component} from 'react';
import "semantic-ui-css/semantic.min.css";
import{
  List,
  Loader,
  Dimmer,
  Placeholder,
  Segment,
  Grid,
  Divider,
  Header,
  Icon,
  Button,
  Search,
  Image
}from "semantic-ui-react"

class App extends Component {
  render(){
    return (
      <div>
        <br/>
        <Segment>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>
            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search"/>
                  Cari Documemt
                </Header>
                <Search placeholder="Seacrh document"/>

              </Grid.Column>
              <Grid.Column>
                <Header icon>
                  <Icon name="file pdf outline"/>
                  Tambah Document Baru
                </Header>
                <br/>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
         <Dimmer active>
           <Loader />
           <br /> <br /> <br /> <br />
           Loading
         </Dimmer>
         <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
        </Segment>

          <Grid Content columns={3}>
            <Grid.Column width={5}>
              <Segment>
              <Placeholder>
               <Placeholder.Header image>
                 <Placeholder.Line />
                 <Placeholder.Line />
               </Placeholder.Header>
               <Placeholder.Paragraph>
                 <Placeholder.Line />
                 <Placeholder.Line />
                 <Placeholder.Line />
                 <Placeholder.Line />
               </Placeholder.Paragraph>
              </Placeholder>
              </Segment>
           </Grid.Column>
           <Grid.Column width={8}>
            <Segment>
                <Placeholder>
                 <Placeholder.Header image>
                   <Placeholder.Line />
                   <Placeholder.Line />
                 </Placeholder.Header>
                 <Placeholder.Paragraph>
                   <Placeholder.Line />
                   <Placeholder.Line />
                   <Placeholder.Line />
                   <Placeholder.Line />
                 </Placeholder.Paragraph>
                </Placeholder>
              </Segment>
            </Grid.Column>
            <Grid.Column width={3}>
              <List>
                <List.Header>
                <b>Website Terkait</b>
                </List.Header>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="http://www.google.com" rel="noopener noreferrer" target="_blank">Google</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                      <a href="http://www.facebook.com" rel="noopener noreferrer" target="_blank">Facebook</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                      <a href="https://react.semantic-ui.com" rel="noopener noreferrer" target="_blank">Semantic UI</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="http://niomic.com" rel="noopener noreferrer" target="_blank">Niomic</a>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Icon name="linkify"/>
                  <List.Content>
                    <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a>
                  </List.Content>
                </List.Item>

              </List>
            </Grid.Column>
          </Grid>


      </div>
    );
  }
}

export default App;
