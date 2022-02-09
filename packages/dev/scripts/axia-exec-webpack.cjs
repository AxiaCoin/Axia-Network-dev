#!/usr/bin/env node
// Copyright 2017-2021 @axia-js/dev authors & contributors
// SPDX-License-Identifier: Apache-2.0

const execSync = require('./execSync.cjs');

const args = process.argv.slice(2).join(' ');

execSync(`yarn webpack ${args}`);
