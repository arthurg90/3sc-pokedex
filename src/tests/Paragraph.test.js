import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

/* Components */
import Paragraph from "./Paragraph";

// Configure enzyme for react 16
Enzyme.configure({ adapter: new Adapter() });

describe("Paragraph", () => {
  it("should render children inside a p tag", () => {
    const wrapper = shallow(<Paragraph>This is a paragraph test</Paragraph>);
    const paragraph = wrapper.find("p");
    expect(paragraph).toHaveLength(1);
    expect(paragraph.text()).toEqual("This is a paragraph test");
  });
});
