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
        
        expect(tree).toMatchSnapshot();
    })
})    expect(tree).toMatchInlineSnapshot(`
      <footer
        className="root"
      >
        <hr
          className="line"
        />
        <div
          className="footerContent"
        >
          <small>
            Copyright © 
            2000
             Harry Ammon
          </small>
          <div
            className="socialMedia"
          >
            <a
              className="root"
              href="https://github.com/HarryAmmon"
              target="_blank"
            >
              GitHub
            </a>
            <a
              className="root"
              href="https://twitter.com/harry_a99"
              target="_blank"
            >
              Twitter
            </a>
            <a
              className="root"
              href="https://linkedin.com/in/harry-ammon-3a1995150"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    `);
  });
});
