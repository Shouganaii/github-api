import React from 'react';
import { useSelector } from 'react-redux';
import ReposList from '../ReposList/index';
import Message from '../Message/index.jsx'
const Repos = () => {

    const repositories = useSelector(state => state.reducer.repositories)

    return (
        <   >
            {repositories.length > 0 ?
                <ReposList props={repositories} />
                :
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',                        
                        height: '60vh',
                        alignItems:'center'

                    }}
                >
                    <Message message="Procure por um usuário do github e liste seus repositorios!" />
                </div>
            }
        </>
    )
}

export default Repos;
