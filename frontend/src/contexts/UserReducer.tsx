export function reducer(state: State, action: ACTIONTYPE): State {
  const { type, payload } = action;
  switch (type) {
    case 'LOGIN':
      return state;
    default:
      return state;
  }
}

type ACTIONTYPE = { type: string; payload: Payload };

interface Payload {}

interface State {
  user: any;
}
