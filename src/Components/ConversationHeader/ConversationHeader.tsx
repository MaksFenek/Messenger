import React from 'react';
import './ConversationHeader.scss';

import options from '../../icons/settings.svg';

export interface IConversationHeader {
  readonly name: string;
  readonly photoUrl: string;
}

const ConversationHeader: React.FC<IConversationHeader> = ({
  name,
  photoUrl,
}) => {
  return (
    <div className='conv-header'>
      <img src={photoUrl} alt='User' className='icon' />
      <div className='conv-header__content'>
        <div className='conv-header__content-name'>{name}</div>
        <div className='conv-header__content-status'>Online</div>
      </div>
      <div className='conv-header__options'>
        <img src={options} alt='options' className='icon-24' />
      </div>
    </div>
  );
};

export default ConversationHeader;
