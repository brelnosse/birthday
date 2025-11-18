import '../style/eventsTree.css';
type EventsTreeProps = {
    branches: Array<string>;
};
type ColumnProps = {
    key: number, 
    value: string
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

const Branches= ({list}:{list: Array<string>}) =>{
    let col1:Array<ColumnProps> = [];
    let col2:Array<ColumnProps> = [];

    for(let i = 0; i < list.length; i++){
        if((i+1)%2 === 1){
            col1.push({key: i, value: list[i]});
            col2.push({key: -1, value: ''})
        }else{
            col2.push({key: i, value: list[i]});
            col1.push({key: -1, value: ''})
        }
    }
    return (
        <>
            <div className="col1">
                {col1.map((el: ColumnProps, i:number) =>
                    (el.key === -1) ? 
                    (
                        <div id="branch"></div>
                    ): (
                        <div className="branch" key={'col1-branch-'+el.value+''+i}>
                            <span className='b-num'>{(el.key+1)%10 === (el.key+1) ? '0'+(el.key+1) : el.key}</span>
                            <h4>{el.value}</h4>
                        </div>
                    )
                )}
            </div>
            <div className="col2">
                {col2.map((el: ColumnProps, i:number) =>
                    (el.key === -1) ? 
                    (
                        <div id="branch"></div>
                    ): (
                        <div className="branch" key={'col2-branch-'+el.value+''+i}>
                            <span className='b-num'>{(el.key+1)%10 === (el.key+1) ? '0'+(el.key+1) : el.key}</span>
                            <h4>{el.value}</h4>
                        </div>
                    )
                )}
            </div>
        </>
    );
}