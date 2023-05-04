const Nav = () => {
    return (
        <nav class="product-filter">
            <h1>Jackets</h1>
            <div className="sort">
                <Sort
        </div>
        </nav>
    )
}

const Main = () => {
    return (
        <div>
            <Header />
            <Sort />
        </div>
    )
}

ReactDOM.render(<Main />, document.getElementById('app'))