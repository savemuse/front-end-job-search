import React, { Component } from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Tags from '../../components/Tags/Tags';

class JobItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  render() {
    const { 
      title,
      user,
      created_at,
      updated_at,
      labels, body 
    } = this.props.job;
    const updateDate = updated_at ? new Date(updated_at) : new Date(created_at);
    const updateStr = `${updateDate.toLocaleDateString()} ${updateDate.toLocaleTimeString()}`; 

    return (
      <div className="card-container-item">
        <Card
          expanded={this.state.expanded}
          onExpandChange={this.handleExpandChange}
        >
          <CardHeader
            title={title}
            subtitle={updateStr}
            avatar={user.avatar_url}
            actAsExpander={true}
            showExpandableButton={true}
          />
          <CardText>
            <Tags labels={labels} />
          </CardText>
          <CardText expandable={true}>
            {body}
          </CardText>
        </Card>
      </div>
    );
  }
}

export default JobItem;