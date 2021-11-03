import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { getAllRequestData } from '../../store/data/dataAction';

import { AppState } from '../../store/rootstore';
import { Actions } from '../../store/models/actions';
import { Data } from '../../store/data/models/Data';

// import { fetchData } from '../../actions/actions';

// import useFetchUserData from '../../hooks/useFetchUserData';
import Card from '../Card/Card';

import './CardContainer.css';

interface Props{}

interface LinkStateProps {
  userData: Data[]
  loading: boolean,
}

interface LinkDispatchProps {
  getAllRequestData: () => void
}

type LinkProps = Props & LinkStateProps & LinkDispatchProps

// eslint-disable-next-line no-shadow
const CardContainer: React.FC<LinkProps> = ({ userData, getAllRequestData, loading }) => {
  useEffect(() => {
    getAllRequestData();
  }, []);

  // const { data, loading } = useFetchUserData();

  // console.log(data);
  return (

    <div className="container">
      {loading && <p>cargando</p>}
      {userData.map((res) => (

        <div className="row" key={res.id}>
          <Card userId={res.userId} body={res.body} title={res.title} id={res.id} />

        </div>
      ))}
      <p>hola</p>
    </div>
  );
};

const mapStateToProps = (state : AppState) : LinkStateProps => ({
  userData: state.dataReducer.userData,
  loading: state.dataReducer.loading,
});

const mapDispatchToProps = (dispatch : ThunkDispatch<AppState, {}, Actions>) => ({
  getAllRequestData: bindActionCreators(getAllRequestData, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
