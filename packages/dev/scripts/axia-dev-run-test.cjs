#!/usr/bin/env node
// Copyright 2017-2021 @axia-js/dev authors & contributors
// SPDX-License-Identifier: Apache-2.0

console.log('$ axia-dev-run-test', process.argv.slice(2).join(' '));

process.env.NODE_OPTIONS = `--experimental-vm-modules${
  process.env.NODE_OPTIONS
    ? ` ${process.env.NODE_OPTIONS}`
    : ''
}`;

// eslint-disable-next-line
require('jest-cli/bin/jest');
