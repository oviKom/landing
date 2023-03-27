import React, { ReactElement } from 'react';
import { FUNCTIONS } from '../../conf/Functions';
import Card from '../Card';

const Functions: React.FC = (): ReactElement => {
    return (
        <section id={'functions-section'} className={'grid grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-20 py-[72px] default-padding bg-primary'}>
            {FUNCTIONS.map(func => <Card title={func.title} description={func.description} icon={func.icon} />)}
        </section>
    )
}

export default Functions;