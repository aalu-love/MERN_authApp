import Enzyme from "enzyme";
import Adapter from "@cfaester/enzyme-adapter-react-18";

Enzyme.configure({ adapter: new Adapter() });

import Home from "../Home";
import { expect } from "chai";

describe("enzyme-adapter-react-18", () => {
  it("should initialize", () => {
    expect(5).to.equal(5);
  });
});
