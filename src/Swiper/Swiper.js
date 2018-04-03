import React,{Component} from 'react';
import PropTypes from 'prop-types';
import './Swiper.scss';

class Swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: '',
            index: 0,
            pause: false
        } 
    }
    componentWillMount(){
       this.time = null
    }
    componentDidMount(){
        const { sliderClass, autoplay } = this.props;
        const height = this.container.querySelector('.'+sliderClass).offsetHeight;
        const sliderLength = this.container.querySelectorAll('.'+sliderClass).length;
        this.setHeight(height);
        if(autoplay){
            this.time = setInterval(() => this.next(sliderLength),3000)
            this.container.addEventListener('mouseover',this.pausePlay.bind(this))
            this.container.addEventListener('mouseout',this.startPlay.bind(this,sliderLength))
        }
    }
    componentWillUnmount(){
        if(this.props.autoplay){
            clearInterval(this.time)
        }   
    }
    pausePlay(){
        if(this.props.autoplay){
            clearInterval(this.time)
            this.setState({
                pause: true
            })
        }
    }
    startPlay(sliderLength){
        if(this.props.autoplay && this.state.pause){
            this.time = setInterval(() => this.next(sliderLength),3000)
            this.setState({
                pause: false
            })
        }
    }
    setHeight(height){
        this.setState({
            height: height,
        })
    }
    handleClick(sliderNum){
        this.setState({
            index: sliderNum
        })
    }
    prev(sliderLength){
        this.setState({
            index: this.state.index>0 ? this.state.index-1 : sliderLength 
        })
    }
    next(sliderLength){
        this.setState({
            index: this.state.index<sliderLength-1 ? this.state.index+1 : 0 
        })
    }
    render(){
         const { dots, effect, vertical, children } = this.props;
         const { dotsClass, swiperClass, swiperContainClass, sliderListClass, sliderClass, dotActiveClass } = this.props;
         const { index, height } = this.state;
         const tabIndex = -1;
         const sliderLength = React.Children.count(children);
         const sliderListStyle = effect === 'scroll' ? {
            width: vertical ? '100%' : 100* sliderLength+'%',
            transform: vertical ? 'translate3d(0,'+tabIndex*index*height+'px,0)': 'translate3d('+tabIndex*index*100/sliderLength+'%,0,0)',
            transition: 'transform 0.4s',
            height: vertical ? height * sliderLength : height
         }: {
            width: '100%',
            height: height,
         }

         const sliderContainerStyle = {
             height: height
         }
         // 获取节点
         const childrenWithProps = React.Children.map(children,(child,i) => 
            React.cloneElement(child,{
                className: sliderClass,
                "data-index": i,
                style: effect === 'scroll' ? {width: vertical ? '100%' : 100/sliderLength + '%'} : {
                    width: '100%',
                    transition: 'opacity 0.4s',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    opacity: i===index ? 1 : 0
                },
            }));

         const dotsArr = Array.from(new Array(sliderLength),(val,index)=>index);
        return (
            <div className={vertical ? swiperClass+'-vertical' : swiperClass}>
                <div className="swpier-wrapper">
                    <div className={swiperContainClass} style={sliderContainerStyle} ref={(ref) => this.container = ref}>
                        <div className={sliderListClass} style={sliderListStyle}>
                            {childrenWithProps}
                        </div>
                    {
                        dots && 
                        <ul className={dotsClass}>
                        {
                            dotsArr.map( i => (<li key={i} className={index === i ? dotActiveClass : ""} onClick={this.handleClick.bind(this,i)}></li>))
                        }
                        </ul>
                    }
                    </div>
                </div>
            </div>
        )
    }
}

Swiper.propTypes = {
    dots: PropTypes.bool,
    autoplay: PropTypes.bool,
    effect: PropTypes.string,
    vertical: PropTypes.bool,
    afterChange: PropTypes.func,
    beforeChange: PropTypes.func,
    dotsClass: PropTypes.string,
    swiperClass: PropTypes.string,
    swiperContainClass: PropTypes.string,
    sliderListClass: PropTypes.string,
    sliderClass: PropTypes.string,
    dotActiveClass: PropTypes.string
}

Swiper.defaultProps = {
    dots: true,
    autoplay: false,
    effect: 'scroll',
    vertical: false,
    afterChange(){},
    beforeChange(){},
    dotsClass: 'swiper-dots',
    swiperClass: 'swiper-box',
    swiperContainClass: 'swiper-container',
    sliderListClass: 'slider-list',
    sliderClass: 'slider-item',
    dotActiveClass: 'slider-active'
}

export default Swiper;