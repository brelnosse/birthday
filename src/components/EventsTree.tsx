import { useEffect, useRef } from 'react';
import '../assets/style/eventsTree.css';
import 'animate.css';

type EventsTreeProps = {
    branches: Array<ColumnProps>;
};
type ColumnProps = {
    key: number, 
    heure?: string,
    value: string;
    image?: string;
    description?: string;
};

export default function EventsTree({branches}: EventsTreeProps){

    return (
        <>
            <div className="tree-container">
                <Branches list={branches} />
            </div>
        </>
    );
}    

const Branches = ({list}:{list: Array<ColumnProps>}) =>{
    let col1:Array<ColumnProps> = [];
    let col2:Array<ColumnProps> = [];

    for(let i = 0; i < list.length; i++){
        if((i+1)%2 === 1){
            col1.push({key: list[i].key, heure: list[i].heure, value: list[i].value, image: list[i].image, description: list[i].description});
            col2.push({key: -1, value: ''})
        }else{
            col2.push({key: list[i].key, heure: list[i].heure, value: list[i].value, image: list[i].image, description: list[i].description});
            col1.push({key: -1, value: ''})
        }
    }
    return (
        <>
            <div className="col1">
                {
                    col1.map((el: ColumnProps, i: number) => 
                        (el.key === -1) ? 
                        <div id="branch" key={'branch-'+el.value+''+i}></div> : 
                        <Col 
                            colId={1} 
                            child={el} 
                            key={'col1-branch-'+el.value+''+i}
                            image={el.image} 
                            description={el.description}/>
                    )
                }
            </div>
            <div className="col2">
                {
                    col2.map((el: ColumnProps, i: number) => 
                        (el.key === -1) ? 
                        <div id="branch" key={'branch-'+el.value+''+i}></div> : 
                        <Col 
                            colId={2} 
                            child={el} 
                            key={'col2-branch-'+el.value+''+i} 
                            image={el.image} 
                            description={el.description}/>
                    )
                }
            </div>
        </>
    );
}

const Col = ({colId, child, image, description}:{colId: number; child:  ColumnProps, image?: string; description?: string}) =>{
    const line = useRef<HTMLDivElement>(null);
    useEffect(()=>{
        let node = line.current;
        const observer = new IntersectionObserver(entries =>{
            if(entries[0].isIntersecting){
                line.current?.classList.add("animate__animated");
                if(colId === 1){
                    line.current?.classList.add("animate__fadeInLeft");
                }else{
                    line.current?.classList.add("animate__fadeInRight");                    
                }
            }else{
                line.current?.classList.remove("animate__animated");
                if(colId === 1){
                    line.current?.classList.remove("animate__fadeInLeft");
                }else{
                    line.current?.classList.remove("animate__fadeInRight");
                }
            }
        })
        if(node) observer.observe(node);
        return ()=>{
            if(node) observer.unobserve(node)
            observer.disconnect()
        }
    }, [colId]);
    return (
        <div className="branch" ref={line}>
            <div className="branch-header">
                <span className='b-num'>{(child.key+1)%10 === (child.key+1) ? '0'+(child.key+1) : child.key}</span>
                <p >{child.value}</p>
            </div>
            {image && description && (
            <figure>
                <img src={image} alt={child.value} />
                <figcaption>{description}</figcaption>
            </figure>
            )}
        </div>
    );
}