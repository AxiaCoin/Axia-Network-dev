// Copyright 2017-2021 @axia-js/dev authors & contributors
// SPDX-License-Identifier: Apache-2.0
import { tester } from "./index.js";
tester();
console.log('  (2)', typeof require === 'undefined' ? 'esm' : 'cjs');