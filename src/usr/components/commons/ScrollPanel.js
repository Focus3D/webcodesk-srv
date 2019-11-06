/*
 *    Copyright 2019 Alex (Oleksandr) Pustovalov
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { offset } from './utils';

const styles = {
  root: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'auto',
  },
};

class ScrollPanel extends React.Component {
  static propTypes = {
    scrollTop: PropTypes.number,
  };

  static defaultProps = {
    scrollTop: 0,
  };

  componentDidUpdate (prevProps, prevState, snapshot) {
    if (this.props.scrollTop !== prevProps.scrollTop) {
      this.rootElement.scrollTop = this.props.scrollTop;
    }
  }

  getScrollTop = () => {
    return this.rootElement.scrollTop;
  };

  getOffset = () => {
    return offset(this.rootElement);
  };

  render () {
    return (
      <div ref={me => this.rootElement = me} style={styles.root}>
        {this.props.children}
      </div>
    );
  }
}

export default ScrollPanel;