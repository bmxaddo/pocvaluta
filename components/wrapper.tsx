import * as React from 'react';
import ComponentsManager from '@berlingske-media/stock-data.widgets';

// import { buildUrl } from '../../utils';
// import { InstrumentModel } from '../../model';
// import * as styles from './StockSlider.scss?module';

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

        ComponentsManager.createIndexStockSliderWithProvider(ref.current, {
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
    }, []);

    return <div ref={ref} className={''} />;
};
