import queryString from 'query-string';
import React, { useMemo } from 'react'
import { Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  
  const {heroId} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const {p = ''} = queryString.parse(location.pathname);
  console.log(p)

  const onNavigateBack =(publisher)=>{
    console.log(publisher)
    return navigate(-1)
    // const path = publisher.split(' ')[0].toLowerCase();
    // console.log(path);
    // return navigate(`/${path}`)
  }

  const hero = useMemo(()=> getHeroById(heroId), [heroId]);
  if( !hero ){
    return <Navigate to='/marvel' /> 
  }

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img 
          src={`/assets/heroes/${heroId}.jpg`}
          alt={hero.superhero}
          className='img-thumbnail  animate__animated animate__fadeInLeft'
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'><b>Alter ego:</b>{hero.alter_ego}</li>
          <li className='list-group-item'><b>Publisher:</b>{hero.publisher}</li>
          <li className='list-group-item'><b>First Appearance:</b>{hero.first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{hero.characters}</p>
        <button 
          className='btn btn-outline-info'
          onClick={()=>onNavigateBack(hero.publisher)}
        >
          Back
        </button>
      </div>
    </div>
  )
}