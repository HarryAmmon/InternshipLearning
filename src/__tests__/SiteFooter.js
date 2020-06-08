import React from 'react';
import SiteFooter from "../components/SiteFooter";
import renderer from "react-test-renderer";

describe("The Site footer", () => {
    it("renderers as expected",() => {
        const tree = renderer
            .create(
                <SiteFooter />
            )
            .toJSON();

        console.log(tree);
    })
})