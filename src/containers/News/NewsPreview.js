import React, { Component } from 'react';
import RSSParser from 'rss-parser';
import ReactHtmlParser from 'react-html-parser';
import { HashLink as Link } from 'react-router-hash-link';
// import feedScript from './feedScript.js';


class NewsPreview extends Component {
    state = {
        posts: null
    }

    componentDidMount() {
        let parser = new RSSParser();
        // let controller = new AbortController();
        // let timeout = setTimeout(() => {controller.abort()}, 2);

    //     return fetch('https://cors-anywhere.herokuapp.com/http://blog.tgrex.com/rss')
    //     .then((response) => {
    //         if (!response.ok) {
    //             throw new Error(`${response.status}: ${response.statusText}`)
    //         }
    //         console.log(response.body)
    //     return response

    //     })

    // .catch((error) => {

    //   if (error.name === 'AbortError') {

    //     throw new Error('Response timed out')

    //   }

    //   throw new Error(error.message)

    // })
        parser.parseURL('https://cors-anywhere.herokuapp.com/http://blog.tgrex.com/rss')
            .then(feed => {
             
                this.setState({ posts: feed.items })
            })
            .catch((error) => {
                throw new Error('Response timed out')
                // this.setState({ posts: newsFeed.items})
            });

            const script = document.createElement("script");

    script.src = "http://feeds.feedburner.com/tgrex?format=sigpro";
    script.type= "text/javascript";
    script.async = true;

    console.log(document)

    document.body.appendChild(script);
    }

    render() {
        return (
            // (!this.state.posts) ?
            // <div id='newsPreview' className='preview'>
            // <div className="sectionHeader">{'//'} Latest News</div>
            //         <p id='loading'>loading...</p>
            // </div>
            //         :
            <div id='newsPreview' className='preview'>
                <div className="sectionHeader">{'//'} Latest News</div>
                <div id='scriptTarget' />
                {/* {
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
                    } */}

            </div>


        )

    }
}

export default NewsPreview;