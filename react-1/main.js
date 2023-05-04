const SimpleElement = () => {
    return (
        <div onClick={() => alert(`hi!!`)}>click on me</div>
    )
}

const ListOfNumber = () => {
    const num = [1, 2, 3, 4, 5]
    return (
        <div>
            <ul>
                {num.map((num) => <li>{num}</li>)}
            </ul>
        </div>
    )
}

const Img = () => {
    return (
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH93yK2cYznYayAZ5Z1pkK8WvgL8CyIjBPws7fjzzL9egsLBjTAeg0Ux5mBvug4ydhEmY&usqp=CAU"></img>
    )
}

const Input = () => {
    return (
        <div>
            <br></br>
            <input onChange={() => { alert('מישהן נוגע בinput') }}></input>
        </div>
    )
}


const Main = () => {
    return (
        <div>
            <SimpleElement />
            <ListOfNumber />
            <Img />
            <Input />
        </div>
    )
}

ReactDOM.render(<Main />, document.getElementById('app'))



