import React, { Component } from 'react';
import RSSParser from 'rss-parser';
import ReactHtmlParser from 'react-html-parser';
import './index.css';
import ScrollToTop from '../ScrollToTop/index';
import newsFeed from '../../assets/newsFeed.js';

class News extends Component {
    state = {
        posts: ''
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
                this.setState(
                    { 
                        posts: feed.items,
                        feed: feed
                     })
            })
            .catch((error) => {
                this.setState({ posts: newsFeed.items})
            });
    }

    render() {
        return (
            // Data check before rendering
            (!this.state.posts) ?
            <p id='loading'>loading...</p>
                :
                <div id='news' className='content'>
                    <div className="sectionHeader">{'//'} News</div>
                    {
                        // ReactHtmlParser is used to make nested HTML elements work with React without using dangerouslySetInnerHTML
                        this.state.posts.map((post, index) => {
                            let guid = post.guid.substring(
                                post.guid.lastIndexOf('/') + 1
                            );
                            return (
                                <div 
                                    className='post' 
                                    key={index}
                                    id={guid}
                                >
                                    <div className='postTitle'>
                                        {post.title}
                                    </div>
                                    <div className='postDate'>
                                        {post.pubDate}
                                    </div>
                                    <div className='postHTML'>
                                        {ReactHtmlParser(post.content)}
                                    </div>

                                </div>
                            )
                        })

                    }
                      <a href='https://blog.tgrex.com/'
                            id='blogLink' target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div id='blogLinkWrapper'>{'>'} all archives</div>

                        </a>
                        <ScrollToTop />
                </div>
        )
    }
}

export default News;
