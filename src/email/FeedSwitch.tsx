import { Output } from 'rss-parser'
import { CustomItem } from '../parseFeeds'

import DaringFireballFeed from './daringfireball/Feed'
import NasaFeed from './nasa/Feed'

import GenericFeed from './GenericFeed'

interface Props {
  feed: Output<CustomItem>
  hasBottomSeparator: boolean
}

export default ({ feed, hasBottomSeparator }: Props) => {
  let feed_link = feed.link ?? ""
  let feed_url = feed.feedUrl ?? ""
  console.log(feed_link)
  if (feed_link == 'https://daringfireball.net/') { // Daring Fireball
    return <DaringFireballFeed key={feed_link} feed={feed} />
  } else if (/https:\/\/blogs.nasa.gov\//.test(feed_link)) { // NASA Blogs
    return <NasaFeed key={feed_link} feed={feed} />
  } else if (feed_url == 'https://www.avweb.com/feed/') {
    return <GenericFeed
      key={feed_link} 
      feed={feed} 
      backgroundColor="#4db2ec" 
      itemBackgroundColor="#ffffff" 
      foregroundColor="#ffffff" 
      logoUrl="https://avweb.com/wp-content/uploads/2019/03/logo-1.png" />
  } else {
    console.log(`Using default feed template for feed at URL '${feed.feedUrl}' with link '${feed_link}'`)
    // console.dir(feed)
    return <GenericFeed key={feed_link} feed={feed} />
  }
}
