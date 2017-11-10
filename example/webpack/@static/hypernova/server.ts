import * as bundle from './bundle';
import * as hypernova from 'hypernova/server';
import {renderReact} from 'hypernova-react';


hypernova({
    devMode: process.env.HYPERNOVA_DEV_MODE ? true : false,
    host: process.env.HYPERNOVA_HOST || '0.0.0.0',
    port: process.env.HYPERNOVA_PORT || 8080,

    getComponent(name) {
        if(bundle[name]){
            return renderReact(name, bundle[name])
        }

        return null;
    }
});