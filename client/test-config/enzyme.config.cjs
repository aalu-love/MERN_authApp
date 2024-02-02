import { configure } from "enzyme";
import * as ReactEighteenAdapter from "enzyme-adapter-react-16";

configure({ adapter: new ReactEighteenAdapter() });
