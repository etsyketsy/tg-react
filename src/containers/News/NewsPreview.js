import React, { Component } from 'react';
import RSSParser from 'rss-parser';
import ReactHtmlParser from 'react-html-parser';
import { HashLink as Link } from 'react-router-hash-link';
import newsFeed from './newsFeed.js';


class NewsPreview extends Component {
    state = {
        posts: null
    }

    componentDidMount() {
        let parser = new RSSParser();
        let controller = new AbortController();

        // Sets timeout in case RSS feed is taking too long to load
        setTimeout(() => {
            controller.abort()
            if(!this.state.posts) {
                this.setState({ posts: newsFeed.items})
            }

        }, 2000);

        // Tries to process RSS feed, but defaults to local file if error
        parser.parseURL('https://cors-anywhere.herokuapp.com/http://blog.tgrex.com/rss')
            .then(feed => {
                this.setState({ posts: feed.items })
            })
            .catch((error) => {
               this.setState({ posts: newsFeed.items})
            });
    }

    render() {
        return (
            (!this.state.posts) ?
            <div id='newsPreview' className='preview'>
            <div className="sectionHeader">{'//'} Latest News</div>
                    <p id='loading'>loading...</p>
            </div>
                    :
            <div id='newsPreview' className='preview'>
                <div className="sectionHeader">{'//'} Latest News</div>
                {
                    this.state.posts.slice(0, 5).map((post, index) => {

                            let html = post.content;
                            let guid = post.guid.substring(
                                post.guid.lastIndexOf('/') + 1
                            );

                            return (

                                <div className='postPreview' key={index}>
                                    <div className='postTitle'>
                                        {post.title}
                                    </div>
                                    <div className='previewHTML'>
                                        {ReactHtmlParser(html)}
                                    </div>

                                    <Link
                                        to={`/news#${guid}`} className="postLink"
                                    >
                                        {'>'} view full post
                                    </Link>
                                </div>
                            )

                        })
                    }

            </div>


        )

    }
}

export default NewsPreview;