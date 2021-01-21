import * as React from 'react';
console.log('przed importem');
// import ComponentsManager from '@berlingske-media/stock-data.widgets/lib/bundle';

console.log('po imporcie');

import {typeOf} from "uri-js/dist/esnext/util";

// import { buildUrl } from '../../utils';
// import { InstrumentModel } from '../../model';
// import * as styles from './StockSlider.scss?module';
function SafeHydrate({ children }) {
    return (
        <div suppressHydrationWarning>
            {typeof window === 'undefined' ? null : children}
        </div>
    )
}

interface Link {
    name: string;
    url: string;
}

interface StockSliderWrapperProps {
    listId?: number;
    staticLink?: Link;
}
const buildUrl = () => ''
// tslint:disable-next-line
export const StockSliderWrapper: React.FC<StockSliderWrapperProps> = ({ listId = '3', staticLink }) => {
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (!ref.current) {
            return;
        }
        console.log('typeof window === \'undefined\'', typeof window === 'undefined');
        if(typeof window === 'undefined') return;
        import('@berlingske-media/stock-data.widgets/lib/bundle').then(module => {
            // console.log(ComponentManager.default);
            console.log(window)
            window.ComponentsManager.createIndexStockSliderWithProvider(ref.current, {
                listId: `${listId}`,
                getHref(instrument: unknown): string {
                    if (staticLink) {
                        // @ts-ignore
                        const isIndex = (instrument).name.indexOf(staticLink.name as string) !== -1;

                        if (isIndex) {
                            return '/aktier';
                        }
                    }

                    return buildUrl();
                },
                staticLink
            });
        })

    }, []);

    return <SafeHydrate><div ref={ref} className={''} /></SafeHydrate>;
};
