#!/usr/bin/env node
// Copyright 2017-2021 @axia-js/dev authors & contributors
// SPDX-License-Identifier: Apache-2.0

console.log('$ eslint', process.argv.slice(2).join(' '));

require('eslint/bin/eslint');
