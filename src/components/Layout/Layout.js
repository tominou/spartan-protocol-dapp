import CardComponent from './Card/Card'
import ColComponent from './Col/Col'
import HeadlineComponent from './Headline/Headline'
import RowComponent from './Row/Row'


const Layout = {
  // Card,
  // Col,
  // Headline,
  // Row
}/*
export Col
export const Row = () => Col
export const Headline = () => Col
export const Card = () => Col*/
export const Card = (props) => <CardComponent {...props} />
export const Col = (props) => <ColComponent {...props} />
export const Headline = (props) => <HeadlineComponent {...props} />
export const Row = (props) => <RowComponent {...props} />

export default Layout
