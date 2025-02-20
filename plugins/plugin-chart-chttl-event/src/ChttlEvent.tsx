/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React, { PureComponent, createRef } from 'react';
import { t, styled } from '@superset-ui/core';
import { ChttlEventProps, ChttlEventStylesProps } from './types';

// The following Styles component is a <div> element, which has been styled using Emotion
// For docs, visit https://emotion.sh/docs/styled

// Theming variables are provided for your use via a ThemeProvider
// imported from @superset-ui/core. For variables available, please visit
// https://github.com/apache-superset/superset-ui/blob/master/packages/superset-ui-core/src/style/index.ts

// const Styles = styled.div<ChttlEventStylesProps>`
//   background-color: ${({ theme }) => theme.colors.secondary.light2};
//   padding: ${({ theme }) => theme.gridUnit * 4}px;
//   border-radius: ${({ theme }) => theme.gridUnit * 2}px;
//   height: ${({ height }) => height};
//   width: ${({ width }) => width};
//   overflow-y: scroll;

//   h3 {
//     /* You can use your props to control CSS! */
//     font-size: ${({ theme, headerFontSize }) => theme.typography.sizes[headerFontSize]};
//     font-weight: ${({ theme, boldText }) => theme.typography.weights[boldText ? 'bold' : 'normal']};
//   }

//   h4 {
//     /* You can use your props to control CSS! */
//     font-size: ${({ theme, subheaderFontSize }) => theme.typography.sizes[subheaderFontSize]};
//     font-weight: ${({ theme, boldText }) => theme.typography.weights[boldText ? 'bold' : 'normal']};
//   }
// `;
const Styles = styled.div<ChttlEventStylesProps>`
  padding: ${({ theme }) => theme.gridUnit * 4}px;
  border-radius: ${({ theme }) => theme.gridUnit * 2}px;
  height: ${({ height }) => height};
`;

/**
 * ******************* WHAT YOU CAN BUILD HERE *******************
 *  In essence, a chart is given a few key ingredients to work with:
 *  * Data: provided via `props.data`
 *  * A DOM element
 *  * FormData (your controls!) provided as props by transformProps.ts
 */

export default class ChttlEvent extends PureComponent<ChttlEventProps> {
  // Often, you just want to get a hold of the DOM and go nuts.
  // Here, you can do that with createRef, and componentDidMount.

  rootElem = createRef<HTMLDivElement>();

  componentDidMount() {
    const root = this.rootElem.current as HTMLElement;
    console.log('Plugin element', root);
  }

  render() {
    // height and width are the height and width of the DOM element as it exists in the dashboard.
    // There is also a `data` prop, which is, of course, your DATA 🎉
    //console.log('Approach 1 props', this.props);
    const { /*data,*/ height, width } = this.props;

    const { bigNumber /*, width*/ } = this.props;
    const text = bigNumber === null ? t('No data') : bigNumber;

    console.log('Plugin props', this.props);

    return (
      <Styles
        ref={this.rootElem}
        boldText={this.props.boldText}
        headerFontSize={this.props.headerFontSize}
        subheaderFontSize={this.props.subheaderFontSize}
        // threshold={this.props.threshold}
        // bigNumberSize={this.props.bigNumberSize}

        height={height}
        width={width}
      >
        <div></div>
        <div style={{ fontWeight: this.props.boldText ? 'bold' : 'normal' }}>
          <div
            style={{
              fontSize: this.props.bigNumberSize ? this.props.bigNumberSize + 'px' : '50px',
              display: 'inline-block',
            }}
          >
            {text}
          </div>
          <div style={{ display: 'inline-block', paddingLeft: '10px' }}>
            <div style={{ fontSize: this.props.headerFontSize }}>{this.props.headerText}</div>
            <div style={{ fontSize: this.props.subheaderFontSize }}>{this.props.subheaderText}</div>
          </div>
        </div>
        <hr
          style={{
            border:
              parseInt(bigNumber) <= parseInt(this.props.threshold)
                ? '3px solid green'
                : '3px solid red',
          }}
        />
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </Styles>
    );
  }
}
