import { render } from 'react-dom';

import { Root } from '@/components/Root';

import './index.less';


export default function renderReact(container: never) {
  render(<Root />, container)
}
