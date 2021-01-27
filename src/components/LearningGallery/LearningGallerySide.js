import React, { Component } from 'react'
import { BiChevronRight } from 'react-icons/bi'

export class LearningGallerySide extends Component {

    constructor( props ){
        super ( props )
        this.state = { show : true};

        this.toggleLearnGallerySide = this.toggleLearnGallerySide.bind(this)
    }
    toggleLearnGallerySide = () => {
        const { show } = this.state;
        this.setState( { show : !show} )
    }

    render() {
        
        return (
            <>
                <div className="sidebar_toggle"  onClick={this.toggleLearnGallerySide}>
                    <p>Menu <BiChevronRight /> </p>
                </div>
                { this.state.show && <Box /> }
            </>
        )
    }
}

class Box extends Component{
    render(){
        return(
            <div className="LearnGallerySide">
                    <div className="sidebar_menu">
                        <div className="sidebar_link active_sidebar">
                            <a href="#">Home</a>
                        </div>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link">
                            <a href="#">Skills</a>
                        </div>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link sidebar_tag">
                            <a href="#">Web Development</a>
                        </div>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link">
                            <a href="#">Mobile Development</a>
                        </div>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link">
                            <a href="#">Ui/Ux Design</a>
                        </div>
                    </div>
                    
                    <div className="sidebar_menu">
                        <div className="sidebar_link">
                            <a href="#">Graphics Design</a>
                        </div>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link">
                            <a href="#">Photography</a>
                        </div>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link">
                            <a href="#">Content Writing</a>
                        </div>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link">
                            <a href="#">Data Science</a>
                        </div>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link">
                            <a href="#">Digital Marketing</a>
                        </div>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link">
                            <a href="#">Photography</a>
                        </div>
                    </div>
                    <h3>Level</h3>
                    <div className="sidebar_menu">
                        <div className="sidebar_link sidebar_tag">
                            <a href="#">Beginner</a>
                        </div>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link">
                            <a href="#">Intermediate</a>
                        </div>
                    </div>
                    <div className="sidebar_menu">
                        <div className="sidebar_link">
                            <a href="#">Advance</a>
                        </div>
                    </div>
                </div>
        )
    }
}

export default LearningGallerySide
