#!/usr/bin/env node
/* eslint-disable no-unused-expressions */
import { askNameAndGreet } from '../src/cli.js';
import game from '../src/brain-even-logic.js';

askNameAndGreet();
game();
