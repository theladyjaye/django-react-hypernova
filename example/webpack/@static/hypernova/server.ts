import * as bundle from './bundle';
import * as hypernova from 'hypernova/server';
import {renderReact} from 'hypernova-react';


hypernova({
    getComponent(name) {
        if(bundle[name]){
            return renderReact(name, bundle[name])
        }

        return null;
    }
});