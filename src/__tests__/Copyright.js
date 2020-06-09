import React from "react";
import renderer from "react-test-renderer";
import Copyright from "../components/Copyright.js";

describe("Copyright component", () => {
  it("renderers correctly", () => {
    const tree = renderer.create(<Copyright year={2020} />).toJSON();

    expect(tree).toMatchInlineSnapshot(`
      <small>
        Copyright © 
        2020
         Harry Ammon
      </small>
    `);
  });
});
