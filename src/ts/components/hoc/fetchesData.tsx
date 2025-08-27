import * as React from 'react';
import {useParams} from 'react-router-dom';
import {AxiosPromise} from 'axios';
import {SSRContext} from '../../misc/context';
import {isFirstLoad} from '../../misc/client';

export interface IRequest<P, R> {
  request: (params?: P) => AxiosPromise<R>,
  paramName: string;
};

interface IState {
  loading: boolean;
  props: any;
};

const fetchesData = (
  requests: Array<IRequest<any, any>>
) => (
  Component: React.ComponentType
) => {
  const FetchesData: React.FunctionComponent = () => {
    const params = useParams();
    const ssrState = React.useContext(SSRContext);
    const firstLoad = isFirstLoad();

    const [{loading, props}, setState] = React.useState<IState>({
      loading: !firstLoad,
      props: firstLoad ? ssrState : undefined,
    });

    React.useEffect(() => {
      if (firstLoad) return;

      Promise
        .all(requests.map(({request}) => request(params)))
        .then((values) => {
          setState({
            loading: false,
            props: values.reduce((carry, {data}, i) => ({
              ...carry,
              [requests[i].paramName]: data,
            }), {} as any),
          });
        })
        .catch((err) => console.log(err));
    }, [params]);

    return loading ? <div>Loading...</div> : <Component {...props} />;
  };

  return FetchesData;
};

export default fetchesData;
