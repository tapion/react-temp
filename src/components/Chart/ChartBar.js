import './ChartBar.css';

const ChartBar = props => {

    let lineHeight = '0%';
    if(props.maxValue > 0){
        lineHeight = Math.round((props.value/props.maxValue) * 100) + '%';
    }

    return <div className="chart-bar">
        <div className="chart-bar__inner">
            <div className="chart-bar__fill" style={{height:lineHeight}}></div>
        </div>
        <div className="char-bar__label">{props.label}</div>
    </div>
}

export default ChartBar;