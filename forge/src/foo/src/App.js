import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentSend from 'material-ui/svg-icons/content/send';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// The editor core
import Editor, { Editable, createEmptyState } from 'ory-editor-core'

// The default ui components
import { Trash, DisplayModeToggle, Toolbar } from 'ory-editor-ui'

// The rich text area plugin
import slate from 'ory-editor-plugins-slate'
// The spacer plugin
import spacer from 'ory-editor-plugins-spacer'

// The image plugin
import image from 'ory-editor-plugins-image'

// The video plugin
import video from 'ory-editor-plugins-video'

// The parallax plugin
import parallax from 'ory-editor-plugins-parallax-background'

const ListExampleSimple = () => (
    <div>
        <List>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}/>
            <ListItem primaryText="Starred" leftIcon={<ActionGrade />}/>
            <ListItem primaryText="Sent mail" leftIcon={<ContentSend />}/>
            <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />}/>
            <ListItem primaryText="Inbox" leftIcon={<ContentInbox />}/>
        </List>
        <Divider />
        <List>
            <ListItem primaryText="All mail" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="Trash" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="Spam" rightIcon={<ActionInfo />}/>
            <ListItem primaryText="Follow up" rightIcon={<ActionInfo />}/>
        </List>
    </div>
);

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <div className="App-header">
                        <h2>Welcome to React</h2>
                    </div>
                    <ListExampleSimple />
                    <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                    </p>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
