import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import SvgIconFace from 'material-ui/svg-icons/action/face';

const styles = {
  chip: {
    margin: 5,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

class Tags extends Component {
  render() {
    const {
      labels,
      onTagClick
    } = this.props;

    return (
      <div style={styles.wrapper}>
        { labels && labels.map((label) => (
          <Chip
            key={label.id}
            onClick={ () => onTagClick && onTagClick({filter: label.name}) }
            style={styles.chip}
          >
            <Avatar
              color="#444"
              icon={<SvgIconFace />}
            />
            {label.name}
          </Chip>
          ))
        }
      </div>
    );
  }
}

export default Tags;