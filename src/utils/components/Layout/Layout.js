import ButtonComponent from './Button/Button'
import CardComponent from './Card/Card'
import ColComponent from './Col/Col'
import CollapsableComponent from './Collapsable/Collapsable'
import HeadlineComponent from './Headline/Headline'
import RowComponent from './Row/Row'
import TabsComponent from './Tabs/Tabs'


const Layout = {
  // Card,
  // Col,
  // Headline,
  // Row
}

export const Button = (props) => <ButtonComponent {...props} />
export const Card = (props) => <CardComponent {...props} />
export const Col = (props) => <ColComponent {...props} />
export const Collapsable = (props) => <CollapsableComponent {...props} />
export const Headline = (props) => <HeadlineComponent {...props} />
export const Row = (props) => <RowComponent {...props} />
export const Tabs = (props) => <TabsComponent {...props} />

export default Layout
