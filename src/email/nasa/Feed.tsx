import { Container } from '@react-email/container'
import { Img } from '@react-email/img'
import { Link } from '@react-email/link'
import { Section } from '@react-email/section'
import { Column } from '@react-email/column'
import { Text } from '@react-email/text'
import { Output } from 'rss-parser'
import { CustomItem } from '../../parseFeeds'
import { formatDate } from '../../utils/formatter'
import Summary from './Summary'
import { parseLinks } from './../parseLinks'

interface Props {
  feed: Output<CustomItem>
}

export default ({ feed }: Props) => {
  return (
    <Container style={box}>
      <Section>
        <Column><Img src="https://blogs.nasa.gov/wp-content/themes/2016nasablogs/images/nasa-logo.svg" style={logo} /></Column>
        <Column>
          <Link style={header} href={feed.link}>
            {feed.title}
          </Link>
        </Column>
      </Section>
      {feed.items.map((item) => {
        const href = parseLinks(item.links)
        return (
          <Container style={feedBox}>
            <Container key={item.guid} style={section}>
              <Link style={anchor} href={href}>
                {item.title}
              </Link>
              {item.pubDate && <Text style={date}>{formatDate(item.pubDate)}</Text>}
              {item.contentSnippet && <Summary href={href} paragraphStyle={paragraph} blockquoteStyle={{ ...paragraph, ...blockquote }} readMoreStyle={readMore} content={item.contentSnippet} />}
            </Container>
          </Container>
        )
      })}
    </Container>
  )
}

const box = {
  marginTop: '4px',
  padding: '12px',
  backgroundColor: '#000000',
}

const feedBox = {
  marginTop: '4px',
  padding: '4px 4px 8px 8px',
  backgroundColor: '#eeeeee',
}

const logo = {
  width: '64px',
}

const header = {
  color: '#ffffff',
  fontFamily: 'Montserrat, "Helvetica Neue", sans-serif',
  fontSize: '24px',
  margin: 0,
}

const section = {
  margin: '4px 0',
}

const anchor = {
  fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif',
  color: '#095c6b',
  fontSize: '20px',
}

const date = {
  color: '#495057',
  fontFamily: 'Dank Mono,Operator Mono,Inconsolata,Fira Mono,ui-monospace,SF Mono,Monaco,Droid Sans Mono,Source Code Pro,monospace',
  fontSize: '12px',
  margin: '0 0 8px',
}

const paragraph = {
  color: '#495057',
  fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif',
  fontSize: '16px',
  lineHeight: '24px',
  margin: 0,
}

const readMore = {
  color: '#495057',
  fontFamily: 'system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif',
  fontSize: '12px',
  lineHeight: '18px',
  margin: 0,
}

const blockquote = {
  paddingLeft: '12px',
  borderLeft: '2px solid #095c6b',
}

const hr = {
  margin: '24px 0 0',
  borderTopColor: '#dee2e6',
}
