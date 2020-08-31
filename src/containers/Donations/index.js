import React, { Component } from 'react';


class Donations extends Component {

    render() {

        return (
            <div id='donations'>
                <div className="sectionHeader">{'//'} Donations</div>
                <iframe 
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTfS9ejWL_RVw_8RT_1bTUGKA2-1ZtHeqA__oguR2LrdvUm0SWw1xdqqlOQlfQuA547-q8hOYo2X7FE/pubhtml?gid=0&amp;single=true&amp;widget=true&amp;headers=false" 
                    width="100%" 
                    height="350px"
                >
                </iframe>
            </div>
        )
    }
}

export default Donations;