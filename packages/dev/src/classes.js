// Copyright 2017-2021 @axia-js/dev authors & contributors
// SPDX-License-Identifier: Apache-2.0
export class Testing123 {
    #something = 123_456_789;
    and;
    static staticProperty = 'babelIsCool';
    static staticFunction = () => Testing123.staticProperty;
    constructor(and) {
        this.and = and;
        this.#something = this.#something & and;
    }
    get something() {
        return this.#something;
    }
    async doAsync() {
        const res = await new Promise((resolve) => resolve(true));
        console.log(res);
        return res;
    }
    setSomething = (something) => {
        this.#something = something;
        return this.#something;
    };
    toString() {
        return `something=${this.#something}`;
    }
}
