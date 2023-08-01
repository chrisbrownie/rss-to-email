import { CSSProperties } from 'react'
import parse from 'node-html-parser'
import { Link } from '@react-email/link'
import { Text } from '@react-email/text'

interface Props {
  content: string
  href: string
  paragraphStyle: CSSProperties
  blockquoteStyle: CSSProperties
  readMoreStyle: CSSProperties
}

export default ({ content, href, paragraphStyle, blockquoteStyle, readMoreStyle }: Props) => {
  const root = parse(content)
  const contentText = root.innerHTML

  if (contentText.length === 0) {
    return null
  }

  return (
    <>
      <Text style={paragraphStyle}>{contentText}</Text>
        <Text style={readMoreStyle}>
          <Link href={href}>[read more]</Link>
        </Text>
    </>
  )
}
