import React, { Component } from 'react';
import RSSParser from 'rss-parser';
import ReactHtmlParser from 'react-html-parser';
import './index.css';
import ScrollToTop from '../ScrollToTop/index';

class News extends Component {
    state = {
        posts: ''
    }

    componentDidMount() {
        let parser = new RSSParser();

        parser.parseURL('https://cors-anywhere.herokuapp.com/http://blog.tgrex.com/rss')
            .then(feed => {
                this.setState(
                    { 
                        posts: feed.items,
                        feed: feed
                     })
            })
            .catch((error) => {
                console.log(error)
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
                    <div>{console.log(this.state.feed)}</div>
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
