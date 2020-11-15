import React, {useState, useEffect} from 'react';
import carouselStyles from './carousel.module.css';

function Exhibit(props){
    return <div>
        <div className={carouselStyles.slide}>
            <img className={exhibitStyles.image} src={props.image} />
        </div>
    </div>
}

function Model(props){
    return <div>
        <div className={carouselStyles.slide}>
            <img className={exhibitStyles.image} src={props.image} />
        </div>
    </div>
}

export default function Carousel(images=[], girls=[]){
    const [index, setIndex] = useState(0)
    const [iState, setiState] = useState(0)
    const [girl1, setGirl1] = useState({})
    const [exhibit, setExhibit] = useState({})

    useEffect(
        () => {
            setExhibit({
                exhibit: images[index]
            })
            setGirl1({
                girl1: girls[iState]
            })
        }, [index, iState]
    )
    function previous(){
        if(iState>0){
            if(index === iState){
                setIndex(index-1);
                setiState(iState-1);
            }
            else{
                setiState(iState-1);
            }
        }else{
            if(index === iState){
                setiState(images.length-1);
                setIndex(images.length-1);
            }
            else{
                setiState(images.length-1);
            }
        }
    }

    function next(){
        if(iState === images.length - 1){
            if(index === iState){
                setIndex(0);
                setiState(0);
            }
            else{
                setiState(0);
            }
        }else{
            if(index === iState){
                setiState(iState+1);
                setIndex(index+1);
            }
            else{
                setiState(iState+ 1);
            }
        }
    }

    function clickGirl(girlIndex){
        setIndex(girlIndex);
    }
    
    return (
        <div>

        </div>
    )
}

