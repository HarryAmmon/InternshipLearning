import React from 'react';
import renderer from 'react-test-renderer';
import Copyright from "../components/Copyright.js";

describe("Copyright component",() => {
    it("renderers correctly", () => {
        const tree = renderer
            .create(<Copyright year={2020} />)
            .toJSON();

        console.log(tree);

        expect(tree).toMatchSnapshot();
    })
})