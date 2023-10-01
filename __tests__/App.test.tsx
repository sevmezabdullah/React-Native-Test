
import 'react-native';
import React from 'react';
import App from '../App';

// Note: import explicitly to use the types shiped with jest.
import { it, expect, describe } from '@jest/globals';
import { fireEvent } from '@testing-library/react-native'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import Home from '../src/pages/Home';
import { render } from '@testing-library/react-native';




describe('App', () => {

  it("Has Sub Component", () => {
    const tree = renderer.create(<App />)
  })
})