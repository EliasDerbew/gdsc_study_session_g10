import './style.css'
export default function List(){
    const arr = ['Biruk Mintesinot', 'Bisrat Ambachew', 'Bilen Moges', 'Elias Derbew', 'Eyerusalem Ashagre', 'Hayat Hasen', 'Fikru Demilew', 'Habitemariam Bereket']
    return (
        <div className='body'>
              <h2> List of group 10 students</h2>
              <div className="unlist">
            {arr.map(list => <li> {list} </li>)}
              </div>

        </div>
    )
}