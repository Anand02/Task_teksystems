import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


.board-head {
  display: flex;
  flex-direction: row;
  height: 55px;
  justify-content: space-between;
  align-items: center;
  border-left: 1px solid #444;
  border-right: 1px solid #444; }
  .board-head .reset,
  .board-head .flag-count,
  .board-head .timer {
    width: 55px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center; }
  .board-head .reset {
    font-size: 25px; }

.board {
  width: 499px;
  height: 499px;
  border: 1px solid #444;
  border-bottom: none; }
  .board .row {
    display: flex;
    height: 50px; }
    .board .row:last-child {
      border-bottom: none;
      height: 50px; }
    .board .row .cell {
      border-right: 1px solid #444;
      width: 49px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 1px solid #444; }
      .board .row .cell.open {
        background-color: #d4d4d4; }
        .board .row .cell.open:hover {
          background-color: #d4d4d4; }
      .board .row .cell:hover {
        background-color: #eeeeee; }
      .board .row .cell:last-child {
        border-right: none; }

* {
  margin: 0;
  padding: 0; }

html,
body {
  height: 100%; }
  html #root,
  body #root {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center; }
    html #root .minesweeper,
    body #root .minesweeper {
      display: flex;
      flex-direction: column;
      height: 592px; }
      html #root .minesweeper h1,
      body #root .minesweeper h1 {
        text-align: center;
        border-left: 1px solid #444;
        border-top: 1px solid #444;
        border-right: 1px solid #444; }
