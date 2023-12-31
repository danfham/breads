const React = require('react')
const Default = require('./layouts/Default')

function Index ({breads})  {
    const breadDisplay = breads.map((bread,i) =>{
        return(
            <li key={i}>
                <a href={`/breads/${i}`}>
                    {bread.name}
                </a>
            </li>
        )
    })

    return (
      <Default>
        <h2>Index Page</h2>
        <ul>
            {breadDisplay}
        </ul>
        <div>
            <a href='/breads/new'>
                <button>
                    Add a new bread
                </button>
            </a>
        </div>
      </Default>
    )
}


module.exports = Index
